import type { HardhatUserConfig } from "hardhat/config"
import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"
import "hardhat-gas-reporter"
import "@typechain/hardhat"
import "@openzeppelin/hardhat-upgrades"
import "@keep-network/hardhat-helpers"
import "hardhat-deploy"

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
      },
    ],
  },
  networks: {
    hardhat: {},
  },
  //   namedAccounts: {
  //     deployer: {
  //       default: 1,
  //     },
  //   },
}

export default config
