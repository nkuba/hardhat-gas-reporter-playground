import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"
import "hardhat-gas-reporter"
import "@typechain/hardhat"
import "hardhat-deploy"

import type { HardhatUserConfig } from "hardhat/config"

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
      },
    ],
  },
}

export default config
