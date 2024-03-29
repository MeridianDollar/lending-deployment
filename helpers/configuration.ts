import {
  MeridianPools,
  iMultiPoolsAssets,
  IReserveParams,
  PoolConfiguration,
  eNetwork,
  IBaseConfiguration,
} from './types';
import { getEthersSignersAddresses, getParamPerPool } from './contracts-helpers';
// import MeridianConfig from '../markets/meridian';
import MaticConfig from '../markets/matic';
import AvalancheConfig from '../markets/avalanche';
import TelosConfig from '../markets/telos';
import NeonConfig from '../markets/neon';
import FuseConfig from '../markets/fuse';
import AmmConfig from '../markets/amm';

// import { CommonsConfig } from '../markets/meridian/commons';
import { DRE, filterMapBy } from './misc-utils';
import { tEthereumAddress } from './types';
import { getParamPerNetwork } from './contracts-helpers';
import { deployWETHMocked } from './contracts-deployments';

export enum ConfigNames {
  Commons = 'Commons',
  Meridian = 'Meridian',
  Matic = 'Matic',
  Amm = 'Amm',
  Avalanche = 'Avalanche',
  Telos = 'Telos',
  Neon = 'Neon',
  Fuse = 'Fuse',
}

export const loadPoolConfig = (configName: ConfigNames): PoolConfiguration => {
  switch (configName) {
    case ConfigNames.Meridian:
      return MeridianConfig;
    case ConfigNames.Matic:
      return MaticConfig;
    case ConfigNames.Amm:
      return AmmConfig;
    case ConfigNames.Avalanche:
      return AvalancheConfig;
    case ConfigNames.Telos:
      return TelosConfig;
    case ConfigNames.Neon:
      return NeonConfig;
    case ConfigNames.Fuse:
      return FuseConfig;
    case ConfigNames.Commons:
      return CommonsConfig;
    default:
      throw new Error(
        `Unsupported pool configuration: ${configName} is not one of the supported configs ${Object.values(
          ConfigNames
        )}`
      );
  }
};

// ----------------
// PROTOCOL PARAMS PER POOL
// ----------------

export const getReservesConfigByPool = (pool: MeridianPools): iMultiPoolsAssets<IReserveParams> =>
  getParamPerPool<iMultiPoolsAssets<IReserveParams>>(
    {
      [MeridianPools.proto]: {
        ...MeridianConfig.ReservesConfig,
      },
      [MeridianPools.amm]: {
        ...AmmConfig.ReservesConfig,
      },
      [MeridianPools.matic]: {
        ...MaticConfig.ReservesConfig,
      },
      [MeridianPools.avalanche]: {
        ...AvalancheConfig.ReservesConfig,
      },
      [MeridianPools.telos]: {
        ...TelosConfig.ReservesConfig,
      },
      [MeridianPools.neon]: {
        ...NeonConfig.ReservesConfig,
      },
      [MeridianPools.fuse]: {
        ...FuseConfig.ReservesConfig,
      },
    },
    pool
  );

export const getGenesisPoolAdmin = async (
  config: IBaseConfiguration
): Promise<tEthereumAddress> => {
  const currentNetwork = process.env.FORK ? process.env.FORK : DRE.network.name;
  const targetAddress = getParamPerNetwork(config.PoolAdmin, <eNetwork>currentNetwork);
  if (targetAddress) {
    return targetAddress;
  }
  const addressList = await getEthersSignersAddresses();
  const addressIndex = config.PoolAdminIndex;
  return addressList[addressIndex];
};

export const getEmergencyAdmin = async (config: IBaseConfiguration): Promise<tEthereumAddress> => {
  const currentNetwork = process.env.FORK ? process.env.FORK : DRE.network.name;
  const targetAddress = getParamPerNetwork(config.EmergencyAdmin, <eNetwork>currentNetwork);
  if (targetAddress) {
    return targetAddress;
  }
  const addressList = await getEthersSignersAddresses();
  const addressIndex = config.EmergencyAdminIndex;
  return addressList[addressIndex];
};

export const getTreasuryAddress = async (config: IBaseConfiguration): Promise<tEthereumAddress> => {
  const currentNetwork = process.env.FORK ? process.env.FORK : DRE.network.name;
  return getParamPerNetwork(config.ReserveFactorTreasuryAddress, <eNetwork>currentNetwork);
};

export const getOTokenDomainSeparatorPerNetwork = (
  network: eNetwork,
  config: IBaseConfiguration
): tEthereumAddress => getParamPerNetwork<tEthereumAddress>(config.OTokenDomainSeparator, network);

export const getWethAddress = async (config: IBaseConfiguration) => {
  const currentNetwork = process.env.FORK ? process.env.FORK : DRE.network.name;
  const wethAddress = getParamPerNetwork(config.WETH, <eNetwork>currentNetwork);
  if (wethAddress) {
    return wethAddress;
  }
  if (currentNetwork.includes('main')) {
    throw new Error('WETH not set at mainnet configuration.');
  }
  const weth = await deployWETHMocked();
  return weth.address;
};

export const getWrappedNativeTokenAddress = async (config: IBaseConfiguration) => {
  const currentNetwork = process.env.MAINNET_FORK === 'true' ? 'main' : DRE.network.name;
  const wethAddress = getParamPerNetwork(config.WrappedNativeToken, <eNetwork>currentNetwork);
  if (wethAddress) {
    return wethAddress;
  }
  if (currentNetwork.includes('main')) {
    throw new Error('WETH not set at mainnet configuration.');
  }
  const weth = await deployWETHMocked();
  return weth.address;
};

export const getLendingRateOracles = (poolConfig: IBaseConfiguration) => {
  const {
    ProtocolGlobalParams: { UsdAddress },
    LendingRateOracleRatesCommon,
    ReserveAssets,
  } = poolConfig;

  const network = process.env.FORK ? process.env.FORK : DRE.network.name;
  return filterMapBy(LendingRateOracleRatesCommon, (key) =>
    Object.keys(ReserveAssets[network]).includes(key)
  );
};

export const getQuoteCurrency = async (config: IBaseConfiguration) => {
  switch (config.OracleQuoteCurrency) {
    case 'ETH':
    case 'WETH':
      return getWethAddress(config);
    case 'USD':
      return config.ProtocolGlobalParams.UsdAddress;
    default:
      throw `Quote ${config.OracleQuoteCurrency} currency not set. Add a new case to getQuoteCurrency switch`;
  }
};
