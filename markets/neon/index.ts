import { eNeonNetwork, INeonConfiguration } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyWETH,
  strategyUSDC,
  strategyUSDT,
  strategyWBTC,
  strategyWNEON,
  strategyWSOL,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const NeonConfig: INeonConfiguration = {
  ...CommonsConfig,
  MarketId: 'Telos Market',
  ProviderId: 7,
  ReservesConfig: {
    WETH: strategyWETH,
    USDT: strategyUSDT,
    USDC: strategyUSDC,
    WBTC: strategyWBTC,
    WNEON: strategyWNEON,
    WSOL: strategyWSOL,
  },
  ReserveAssets: {
    [eNeonNetwork.neon_mainnet]: {
      WETH: '',
      WBTC: '',
      WNEON: '',
      USDT: '',
      USDC: '',
    },
    [eNeonNetwork.neon_testnet]: {
      WETH: '0xc74454768684e32807b1F56966CFC1fB8db4ea57', // MintableERC20 token
      USDT: '0x7fc6A0c5Fa947e41F42dD1DB6b64E071748eA85e', // MintableERC20 token
      USDC: '0xC2C0dD529f68c924376eC07C594e2f6f636bceB5', // MintableERC20 token
      WNEON: '0x11adc2d986e334137b9ad0a0f290771f31e9517f', // MintableERC20 token
      WSOL: '0xE7A6fdBf74e4E90182b7312382B8996DaEb2f6c4', // MintableERC20 token
    },
  },
};

export default NeonConfig;