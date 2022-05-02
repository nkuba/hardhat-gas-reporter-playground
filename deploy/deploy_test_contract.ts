import type { HardhatRuntimeEnvironment } from "hardhat/types"
import type { DeployFunction } from "hardhat-deploy/types"

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { ethers } = hre

  // If you comment out the line below the gas reporter works fine.
  ethers.utils.isAddress("0xFaKeAddrEss")
}

export default func

func.tags = ["TestContractDeployedInScript"]
