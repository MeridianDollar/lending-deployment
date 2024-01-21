import BigNumber from 'bignumber.js';
import {
  oneEther,
  oneRay,
  RAY,
  ZERO_ADDRESS,
  MOCK_CHAINLINK_AGGREGATORS_PRICES,
  oneUsd,
} from '../../helpers/constants';
import { ICommonConfiguration, eFuseNetwork } from '../../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: 'Commons',
  OTokenNamePrefix: 'Meridian Market',
  StableDebtTokenNamePrefix: 'Meridian Market stable debt',
  VariableDebtTokenNamePrefix: 'Meridian Market variable debt',
  SymbolPrefix: '',
  ProviderId: 0, // Overriden in index.ts
  OracleQuoteCurrency: 'USD',
  OracleQuoteUnit: oneUsd.toString(),
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96', // TODO: what is this?
    NilAddress: '0x0000000000000000000000000000000000000000',
    OneAddress: '0x0000000000000000000000000000000000000001',
    MeridianReferral: '0',
  },

  // ----------------
  // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
  // ----------------

  Mocks: {
    AllAssetsInitialPrices: {
      ...MOCK_CHAINLINK_AGGREGATORS_PRICES,
    },
  },
  // TODO: reorg alphabetically, checking the reason of tests failing
  LendingRateOracleRatesCommon: {
    WETH: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    USDC: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDT: {
      borrowRate: oneRay.multipliedBy(0.035).toFixed(),
    },
    USDM: {
      borrowRate: oneRay.multipliedBy(0.035).toFixed(),
    },
    WBTC: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    WFUSE: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TODO: fix borrowRate?
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eFuseNetwork.fuse_mainnet]: undefined,
  },
  PoolAdminIndex: 0,
  EmergencyAdminIndex: 0,
  EmergencyAdmin: {
    [eFuseNetwork.fuse_mainnet]: undefined,
  },
  ProviderRegistry: {
    [eFuseNetwork.fuse_mainnet]: '',
  },
  ProviderRegistryOwner: {
    [eFuseNetwork.fuse_mainnet]: '',
  },
  LendingRateOracle: {
    [eFuseNetwork.fuse_mainnet]: '',
  },
  LendingPoolCollateralManager: {
    [eFuseNetwork.fuse_mainnet]: '',
  },
  LendingPoolConfigurator: {
    [eFuseNetwork.fuse_mainnet]: '',
  },
  LendingPool: {
    [eFuseNetwork.fuse_mainnet]: '',
  },
  WethGateway: {
    [eFuseNetwork.fuse_mainnet]: '',
  },
  TokenDistributor: {
    [eFuseNetwork.fuse_mainnet]: '',
  },
  MeridianOracle: {
    [eFuseNetwork.fuse_mainnet]: '',
  },
  FallbackOracle: {
    [eFuseNetwork.fuse_mainnet]: '',
  },
  ChainlinkAggregator: {
    [eFuseNetwork.fuse_mainnet]: {
      WETH: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      USDM: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      WFUSE: ZERO_ADDRESS,
      USD: ZERO_ADDRESS,
    },
  },
  ReserveAssets: {
    [eFuseNetwork.fuse_mainnet]: {},
  },
  ReservesConfig: {},
  OTokenDomainSeparator: {
    [eFuseNetwork.fuse_mainnet]: '',
  },
  WETH: {
    [eFuseNetwork.fuse_mainnet]: ZERO_ADDRESS,
  },
  WrappedNativeToken: {
    [eFuseNetwork.fuse_mainnet]: '0x0BE9e53fd7EDaC9F859882AfdDa116645287C629', // Official WFUSE
  },
  ReserveFactorTreasuryAddress: {
    [eFuseNetwork.fuse_mainnet]: '0x1e61a5c911Ab51F98A8dFBE90C0aa42e355885C5',
  },
  IncentivesController: {
    [eFuseNetwork.fuse_mainnet]: ZERO_ADDRESS,
  },
};
