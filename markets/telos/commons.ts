import BigNumber from 'bignumber.js';
import {
  oneEther,
  oneRay,
  RAY,
  ZERO_ADDRESS,
  MOCK_CHAINLINK_AGGREGATORS_PRICES,
  oneUsd,
} from '../../helpers/constants';
import { ICommonConfiguration, eTelosNetwork } from '../../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: 'Commons',
  OTokenNamePrefix: 'OmniDex Telos Market',
  StableDebtTokenNamePrefix: 'OmniDex Telos Market stable debt',
  VariableDebtTokenNamePrefix: 'OmniDex Telos Market variable debt',
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
    OmniDexReferral: '0',
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
    KARMA: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    WBTC: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    WAVAX: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TODO: fix borrowRate?
    },
    WTLOS: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TODO: fix borrowRate?
    },
    STLOS: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(), // TODO: fix borrowRate?
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eTelosNetwork.telos_mainnet]: undefined,
    [eTelosNetwork.telos_testnet]: undefined,
  },
  PoolAdminIndex: 0,
  EmergencyAdminIndex: 0,
  EmergencyAdmin: {
    [eTelosNetwork.telos_mainnet]: undefined,
    [eTelosNetwork.telos_testnet]: undefined,
  },
  ProviderRegistry: {
    [eTelosNetwork.telos_mainnet]: '',
    [eTelosNetwork.telos_testnet]: '0x5eaB99547ed5915802ddd50c8891EC52dec25587',
  },
  ProviderRegistryOwner: {
    [eTelosNetwork.telos_mainnet]: '',
    [eTelosNetwork.telos_testnet]: '0x4a1E81cEb5Bc075f4aeE1B5EDcdb460abe3a3D3A',
  },
  LendingRateOracle: {
    [eTelosNetwork.telos_mainnet]: '',
    [eTelosNetwork.telos_testnet]: '',
  },
  LendingPoolCollateralManager: {
    [eTelosNetwork.telos_mainnet]: '',
    [eTelosNetwork.telos_testnet]: '',
  },
  LendingPoolConfigurator: {
    [eTelosNetwork.telos_mainnet]: '',
    [eTelosNetwork.telos_testnet]: '',
  },
  LendingPool: {
    [eTelosNetwork.telos_mainnet]: '',
    [eTelosNetwork.telos_testnet]: '0xdF6C45b72f506bD21F3DC810412b6716c8c64977',
  },
  WethGateway: {
    [eTelosNetwork.telos_mainnet]: '',
    [eTelosNetwork.telos_testnet]: '',
  },
  TokenDistributor: {
    [eTelosNetwork.telos_mainnet]: '',
    [eTelosNetwork.telos_testnet]: '',
  },
  OmniDexOracle: {
    [eTelosNetwork.telos_mainnet]: '',
    [eTelosNetwork.telos_testnet]: '',
  },
  FallbackOracle: {
    [eTelosNetwork.telos_mainnet]: '',
    [eTelosNetwork.telos_testnet]: '',
  },
  ChainlinkAggregator: {
    [eTelosNetwork.telos_mainnet]: {
      WETH: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      KARMA: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      WAVAX: ZERO_ADDRESS,
      WTLOS: ZERO_ADDRESS,
      WBNB: ZERO_ADDRESS,
      WMATIC: ZERO_ADDRESS,
      WFTM: ZERO_ADDRESS,
      USD: ZERO_ADDRESS,
    },
    [eTelosNetwork.telos_testnet]: {
      WETH: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      KARMA: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      WAVAX: ZERO_ADDRESS,
      WTLOS: ZERO_ADDRESS,
      WBNB: ZERO_ADDRESS,
      WMATIC: ZERO_ADDRESS,
      WFTM: ZERO_ADDRESS,
      USD: ZERO_ADDRESS,
    },
  },
  ReserveAssets: {
    [eTelosNetwork.telos_mainnet]: {},
    [eTelosNetwork.telos_testnet]: {},
  },
  ReservesConfig: {},
  OTokenDomainSeparator: {
    [eTelosNetwork.telos_mainnet]: '',
    [eTelosNetwork.telos_testnet]: '',
  },
  WETH: {
    [eTelosNetwork.telos_mainnet]: ZERO_ADDRESS,
    [eTelosNetwork.telos_testnet]: ZERO_ADDRESS,
  },
  WrappedNativeToken: {
    [eTelosNetwork.telos_mainnet]: '0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E', // Official WTLOS
    [eTelosNetwork.telos_testnet]: '0xaE85Bf723A9e74d6c663dd226996AC1b8d075AA9', // Official WTLOS
  },
  ReserveFactorTreasuryAddress: {
    [eTelosNetwork.telos_mainnet]: '0x1e61a5c911Ab51F98A8dFBE90C0aa42e355885C5',
    [eTelosNetwork.telos_testnet]: '0x4a1E81cEb5Bc075f4aeE1B5EDcdb460abe3a3D3A', // Self-controlled EOA for testing
  },
  IncentivesController: {
    [eTelosNetwork.telos_mainnet]: ZERO_ADDRESS,
    [eTelosNetwork.telos_testnet]: ZERO_ADDRESS,
  },
};
