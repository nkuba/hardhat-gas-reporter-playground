import { ethers } from "hardhat"
import { TestContract } from "../typechain-types"

describe("TestContract", () => {
  it("test", async () => {
    const initialValue = "let's start with this"
    const newValue = "surprise!"

    const TesContractFactory = await ethers.getContractFactory("TestContract")
    const testContractInstance =
      (await TesContractFactory.deploy()) as TestContract
    await testContractInstance.deployed()

    await testContractInstance.initialize(initialValue)

    await testContractInstance.setValue(newValue)
  })
})
