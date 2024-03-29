[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Build pass](https://github.com/MeridianFinance/meridian-v1-lending-core/actions/workflows/node.js.yml/badge.svg)](https://github.com/meridianfinance/meridian-v1-lending-core/actions/workflows/node.js.yml)
```
   ____    __  __   _   _   _____   _____    ______  __   __
  / __ \  |  \/  | | \ | | |_   _| |  __ \  |  ____| \ \ / /
 | |  | | | \  / | |  \| |   | |   | |  | | | |__     \ V / 
 | |  | | | |\/| | | . ` |   | |   | |  | | |  __|     > <  
 | |__| | | |  | | | |\  |  _| |_  | |__| | | |____   / . \ 
  \____/  |_|  |_| |_| \_| |_____| |_____/  |______| /_/ \_\
```

# Meridian Lending Protocol V1

This repository contains the smart contracts source code and markets configuration for Meridian Lending Protocol V1. The repository uses Docker Compose and Hardhat as development enviroment for compilation, testing and deployment tasks.

## What is Meridian Lending?

Meridian Lending is a decentralized non-custodial liquidity markets protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow in an overcollateralized (perpetually) or undercollateralized (one-block liquidity) fashion.

## Documentation

The documentation of Meridian Lending V1 is in the following [Meridian Lending V1 documentation](https://docs.meridian.finance/developers/v/1.0/) link. At the documentation you can learn more about the protocol, see the contract interfaces, integration guides and audits.

For getting the latest contracts addresses, please check the [Deployed contracts](https://docs.meridian.finance/developers/v/1.0/deployed-contracts/deployed-contracts) page at the documentation to stay up to date.

Meridian Lending is a fork of Aave Protocol V2 and as such a more detailed and technical description of the protocol can be found in this repository, [here](./aave-v2-whitepaper.pdf)



## Connect with the community

You can join at the [Discord](https://discord.com/invite/P7ezrGbD) channel or at the [Governance Forum](https://governance.meridian.finance/) for asking questions about the protocol or talk about Meridian Lending with other peers.

## Getting Started

You can install `@meridianfinance/meridian-v1-lending-core` as an NPM package in your Hardhat, Buidler or Truffle project to import the contracts and interfaces:

`npm install @meridianfinance/meridian-v1-lending-core`

Import at Solidity files:

```
import {ILendingPool} from "@meridianfinance/meridian-v1-lending-core/contracts/interfaces/ILendingPool.sol";

contract Misc {

  function deposit(address pool, address token, address user, uint256 amount) public {
    ILendingPool(pool).deposit(token, amount, user, 0);
    {...}
  }
}
```

The JSON artifacts with the ABI and Bytecode are also included into the bundled NPM package at `artifacts/` directory.

Import JSON file via Node JS `require`:

```
const LendingPoolV2Artifact = require('@meridianfinance/meridian-v1-lending-core/artifacts/contracts/protocol/lendingpool/LendingPool.sol/LendingPool.json');

// Log the ABI into console
console.log(LendingPoolV2Artifact.abi)
```

## Setup

The repository uses Docker Compose to manage sensitive keys and load the configuration. Prior any action like test or deploy, you must run `docker-compose up` to start the `contracts-env` container, and then connect to the container console via `docker-compose exec contracts-env bash`.

Follow the next steps to setup the repository:

- Install `docker` and `docker-compose`
- Create an enviroment file named `.env` and fill the next enviroment variables

```
# Mnemonic, only first address will be used
MNEMONIC=""

# Add Alchemy or Infura provider keys, alchemy takes preference at the config level
ALCHEMY_KEY=""
INFURA_KEY=""


# Optional Etherscan key, for automatize the verification of the contracts at Etherscan
ETHERSCAN_KEY=""

# Optional, if you plan to use Tenderly scripts
TENDERLY_PROJECT=""
TENDERLY_USERNAME=""

```

## Markets configuration

The configurations related with the Meridian Markets are located at `markets` directory. You can follow the `IMeridianConfiguration` interface to create new Markets configuration or extend the current Meridian Lending configuration.

Each market should have his own Market configuration file, and their own set of deployment tasks, using the Meridian market config and tasks as a reference.

## Test

You can run the full test suite with the following commands:

```
# In one terminal
docker-compose up

# Open another tab or terminal
docker-compose exec contracts-env bash

# A new Bash terminal is prompted, connected to the container
npm run test
```

## Deployments

For deploying Meridian Lending Protocol V1, you can use the available scripts located at `package.json`. For a complete list, run `npm run` to see all the tasks.


### Mainnet fork deployment

You can deploy Meridian Lending Protocol V1 in a forked Mainnet chain using Hardhat built-in fork feature:

```
docker-compose run contracts-env npm run meridian:fork:main
```

### Deploy Meridian Lending into a Mainnet Fork via console

You can deploy Meridian Lending into the Hardhat console in fork mode, to interact with the protocol inside the fork or for testing purposes.

Run the console in Mainnet fork mode:

```
docker-compose run contracts-env npm run console:fork
```

At the Hardhat console, interact with the Meridian Lending protocol in Mainnet fork mode:

```
// Deploy the Meridian Lending protocol in fork mode
await run('meridian:mainnet')

// Or your custom Hardhat task
await run('your-custom-task');

// After you initialize the HRE via 'set-DRE' task, you can import any TS/JS file
run('set-DRE');

// Import contract getters to retrieve an Ethers.js Contract instance
const contractGetters = require('./helpers/contracts-getters'); // Import a TS/JS file

// Lending pool instance
const lendingPool = await contractGetters.getLendingPool("LendingPool address from 'meridian:mainnet' task");

// You can impersonate any Ethereum address
await network.provider.request({ method: "hardhat_impersonateAccount",  params: ["0xb1adceddb2941033a090dd166a462fe1c2029484"]});

const signer = await ethers.provider.getSigner("0xb1adceddb2941033a090dd166a462fe1c2029484")

// ERC20 token DAI Mainnet instance
const DAI = await contractGetters.getIErc20Detailed("0x6B175474E89094C44Da98b954EedeAC495271d0F");

// Approve 100 DAI to LendingPool address
await DAI.connect(signer).approve(lendingPool.address, ethers.utils.parseUnits('100'));

// Deposit 100 DAI
await lendingPool.connect(signer).deposit(DAI.address, ethers.utils.parseUnits('100'), await signer.getAddress(), '0');

```

## Interact with Meridian Lending in Mainnet via console

You can interact with Meridian Lending at Mainnet network using the Hardhat console, in the scenario where the frontend is down or you want to interact directly. You can check the deployed addresses at https://docs.meridian.finance/developers/deployed-contracts.

Run the Hardhat console pointing to the Mainnet network:

```
docker-compose run contracts-env npx hardhat --network main console
```

At the Hardhat console, you can interact with the protocol:

```
// Load the HRE into helpers to access signers
run("set-DRE")

// Import getters to instance any Meridian Lending contract
const contractGetters = require('./helpers/contracts-getters');

// Load the first signer
const signer = await contractGetters.getFirstSigner();

// Lending pool instance
const lendingPool = await contractGetters.getLendingPool("0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9");

// ERC20 token DAI Mainnet instance
const DAI = await contractGetters.getIErc20Detailed("0x6B175474E89094C44Da98b954EedeAC495271d0F");

// Approve 100 DAI to LendingPool address
await DAI.connect(signer).approve(lendingPool.address, ethers.utils.parseUnits('100'));

// Deposit 100 DAI
await lendingPool.connect(signer).deposit(DAI.address, ethers.utils.parseUnits('100'), await signer.getAddress(), '0');
```
