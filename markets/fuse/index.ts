import { eFuseNetwork, IFuseConfiguration } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyWETH,
  strategyUSDC,
  strategyUSDT,
  strategyWBTC,
  strategyWFUSE,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const FuseConfig: IFuseConfiguration = {
  ...CommonsConfig,
  MarketId: 'Fuse Market',
  ProviderId: 7,
  ReservesConfig: {
    WETH: strategyWETH,
    USDT: strategyUSDT,
    USDC: strategyUSDC,
    WBTC: strategyWBTC,
    WFUSE: strategyWFUSE,
  },
  ReserveAssets: {
    [eFuseNetwork.fuse_mainnet]: {
      WETH: '0xa722c13135930332Eb3d749B2F0906559D2C5b99',
      WBTC: '0x33284f95ccb7B948d9D352e1439561CF83d8d00d',
      WFUSE: '0x0BE9e53fd7EDaC9F859882AfdDa116645287C629',
      USDT: '0xFaDbBF8Ce7D5b7041bE672561bbA99f79c532e10',
    },

  },
};

export default FuseConfig;