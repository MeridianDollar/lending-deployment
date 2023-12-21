import { eTelosNetwork, ITelosConfiguration } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyWETH,
  strategyUSDC,
  strategyUSDT,
  strategyUSDM,
  strategySTLOS,
  strategyWBTC,
  strategyWTLOS,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const TelosConfig: ITelosConfiguration = {
  ...CommonsConfig,
  MarketId: 'Telos Market',
  ProviderId: 7,
  ReservesConfig: {
    WETH: strategyWETH,
    USDT: strategyUSDT,
    USDM: strategyUSDM,
    USDC: strategyUSDC,
    STLOS: strategySTLOS,
    WBTC: strategyWBTC,
    WTLOS: strategyWTLOS,
  },
  ReserveAssets: {
    [eTelosNetwork.telos_mainnet]: {
      WETH: '0xfa9343c3897324496a05fc75abed6bac29f8a40f',
      USDT: '0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73',
      USDM: '0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73',
      USDC: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
      STLOS: '0xB4B01216a5Bc8F1C8A33CD990A1239030E60C905',
      WBTC: '0xf390830df829cf22c53c8840554b98eafc5dcbc2',
      WTLOS: '0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E',
    },
    [eTelosNetwork.telos_testnet]: {
      WETH: '0xC2F29fe79a438735186001d6416383C97712cB78', // MintableERC20 token
      USDT: '0x5e70fe707B7ac9bb9B809853F2d8EDE3d478556A', // MintableERC20 token
      USDM: '0xbE57c5a1C4b16111322C94D5893B817CE1fad7a7', // MintableERC20 token
      USDC: '0xca69f2E8f3614C2011AcAA47d1516CFA36fa540F', // MintableERC20 token
      STLOS: '0x154a771a49170647E0079313405d2BcC62E8f80A', // MintableERC20 token
      WTLOS: '0x019d19d90D030700CF10CbCc3C9eF0ddb28403D7', // MintableERC20 token
      WBTC: '0xA23D982c76d0cc99D5497060E8122953b2B20c88', // MintableERC20 token
    },
  },
};

export default TelosConfig;