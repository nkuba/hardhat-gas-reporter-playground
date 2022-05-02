import { readFileSync } from "fs"
import { ethers, deployments } from "hardhat"
import { TestContract } from "../typechain-types"

describe("TestContract", () => {
  // it("test - upgradable", async () => {
  //   const initialValue = "let's start with this"
  //   const newValue = "surprise!"

  //   const TesContractFactory = await ethers.getContractFactory("TestContract")
  //   const testContractInstance = await upgrades.deployProxy(
  //     TesContractFactory,
  //     [initialValue]
  //   )

  //   await testContractInstance.setValue(newValue)
  // })

  it("test - fixture", async () => {
    const newValue = "surprise!"

    await deployments.fixture()

    const address = readFileSync("./address").toString()

    const testContractInstance: TestContract = await ethers.getContractAt(
      "TestContract",
      address
    )

    console.log(`in test use contract at ${testContractInstance.address}`)

    await testContractInstance.setValue(newValue)
  })
})
