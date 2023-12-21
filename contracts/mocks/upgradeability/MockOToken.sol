// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {OToken} from '../../protocol/tokenization/OToken.sol';
import {ILendingPool} from '../../interfaces/ILendingPool.sol';
import {IMeridianIncentivesController} from '../../interfaces/IMeridianIncentivesController.sol';

contract MockOToken is OToken {
  function getRevision() internal pure override returns (uint256) {
    return 0x2;
  }
}
