import { readFileSync } from "fs"
import { ethers, upgrades, deployments } from "hardhat"
import { TestContract } from "../typechain-types"

describe("TestContract", () => {
  it("test - upgradable", async () => {
    const initialValue = "let's start with this"
    const newValue = "surprise!"

    const TesContractFactory = await ethers.getContractFactory("TestContract")
    const testContractInstance = await upgrades.deployProxy(
      TesContractFactory,
      [initialValue]
    )

    await testContractInstance.setValue(newValue)
  })
})
