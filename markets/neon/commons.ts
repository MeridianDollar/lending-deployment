import BigNumber from 'bignumber.js';
import {
  oneEther,
  oneRay,
  RAY,
  ZERO_ADDRESS,
  MOCK_CHAINLINK_AGGREGATORS_PRICES,
  oneUsd,
} from '../../helpers/constants';
import { ICommonConfiguration, eNeonNetwork } from '../../helpers/types';

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
    WSOL: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TODO: fix borrowRate?
    },
    WNEON: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TODO: fix borrowRate?
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eNeonNetwork.neon_mainnet]: undefined,
    [eNeonNetwork.neon_testnet]: undefined,
  },
  PoolAdminIndex: 0,
  EmergencyAdminIndex: 0,
  EmergencyAdmin: {
    [eNeonNetwork.neon_mainnet]: undefined,
    [eNeonNetwork.neon_testnet]: undefined,
  },
  ProviderRegistry: {
    [eNeonNetwork.neon_mainnet]: '',
    [eNeonNetwork.neon_testnet]: '',
  },
  ProviderRegistryOwner: {
    [eNeonNetwork.neon_mainnet]: '',
    [eNeonNetwork.neon_testnet]: '',
  },
  LendingRateOracle: {
    [eNeonNetwork.neon_mainnet]: '',
    [eNeonNetwork.neon_testnet]: '',
  },
  LendingPoolCollateralManager: {
    [eNeonNetwork.neon_mainnet]: '',
    [eNeonNetwork.neon_testnet]: '',
  },
  LendingPoolConfigurator: {
    [eNeonNetwork.neon_mainnet]: '',
    [eNeonNetwork.neon_testnet]: '',
  },
  LendingPool: {
    [eNeonNetwork.neon_mainnet]: '',
    [eNeonNetwork.neon_testnet]: '',
  },
  WethGateway: {
    [eNeonNetwork.neon_mainnet]: '',
    [eNeonNetwork.neon_testnet]: '',
  },
  TokenDistributor: {
    [eNeonNetwork.neon_mainnet]: '',
    [eNeonNetwork.neon_testnet]: '',
  },
  MeridianOracle: {
    [eNeonNetwork.neon_mainnet]: '',
    [eNeonNetwork.neon_testnet]: '',
  },
  FallbackOracle: {
    [eNeonNetwork.neon_mainnet]: '',
    [eNeonNetwork.neon_testnet]: '',
  },
  ChainlinkAggregator: {
    [eNeonNetwork.neon_mainnet]: {
      WETH: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      USDM: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      WNEON: ZERO_ADDRESS,
      WSOL: ZERO_ADDRESS,
      USD: ZERO_ADDRESS,
    },
    [eNeonNetwork.neon_testnet]: {
      WETH: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      USDM: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      WNEON: ZERO_ADDRESS,
      WSOL: ZERO_ADDRESS,
      USD: ZERO_ADDRESS,
    },
  },
  ReserveAssets: {
    [eNeonNetwork.neon_mainnet]: {},
    [eNeonNetwork.neon_testnet]: {},
  },
  ReservesConfig: {},
  OTokenDomainSeparator: {
    [eNeonNetwork.neon_mainnet]: '',
    [eNeonNetwork.neon_testnet]: '',
  },
  WETH: {
    [eNeonNetwork.neon_mainnet]: ZERO_ADDRESS,
    [eNeonNetwork.neon_testnet]: ZERO_ADDRESS,
  },
  WrappedNativeToken: {
    [eNeonNetwork.neon_mainnet]: '0x202c35e517fa803b537565c40f0a6965d7204609', // Official WNEON
    [eNeonNetwork.neon_testnet]: '0x11adc2d986e334137b9ad0a0f290771f31e9517f', // Official WNEON
  },
  ReserveFactorTreasuryAddress: {
    [eNeonNetwork.neon_mainnet]: '0x1e61a5c911Ab51F98A8dFBE90C0aa42e355885C5',
    [eNeonNetwork.neon_testnet]: '0x1e61a5c911Ab51F98A8dFBE90C0aa42e355885C5', // Self-controlled EOA for testing
  },
  IncentivesController: {
    [eNeonNetwork.neon_mainnet]: ZERO_ADDRESS,
    [eNeonNetwork.neon_testnet]: ZERO_ADDRESS,
  },
};
