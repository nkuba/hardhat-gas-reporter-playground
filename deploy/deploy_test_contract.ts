import type { HardhatRuntimeEnvironment } from "hardhat/types"
import type { DeployFunction } from "hardhat-deploy/types"
import { writeFileSync } from "fs"

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { helpers, upgrades, ethers } = hre

  const initialValue = "let's start with this"

  const TesContractFactory = await ethers.getContractFactory("TestContract")
  const instance = await upgrades.deployProxy(TesContractFactory, [
    initialValue,
  ])

  writeFileSync("./address", instance.address)

  console.log(`deployed contract at ${instance.address}`)
}

export default func

func.tags = ["TestContractDeployedInScript"]
