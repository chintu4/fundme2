import hardhat from "hardhat";
const { ethers } = hardhat;
async function main() {
    const FundmeContract = await ethers.getContractFactory("Fundme");
    const fundMe = await FundmeContract.deploy();
    await fundMe.waitForDeployment();
    console.log("FundMe deployed to:", fundMe.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });