import hardhat from "hardhat";
const { ethers,getNamedAccounts } = hardhat;

async function main(){
    const {deployer} =await getNamedAccounts();
    const fundMe = await ethers.getContractAt("Fundme", 
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", // Replace with your deployed contract address
    );
    console.log("Interacting with FundMe at:", fundMe.target);

    const tx=await fundMe.fund({
        value: ethers.parseEther("0.1"),
        from: deployer
    });

    await tx.wait();

    console.log("Funded successfully!");

    const balance = await fundMe.getBalance();

    console.log("Current balance:", ethers.formatEther(balance), "ETH");
}