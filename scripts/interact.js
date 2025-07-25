import hardhat from "hardhat";
const { ethers } = hardhat;

async function main(){
    const [deployer] = await ethers.getSigners();
    const fundMe = await ethers.getContractAt("Fundme", 
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", // Replace with your deployed contract address
    );
    console.log("Interacting with FundMe at:", fundMe.target);

    // Fund the contract
    const tx = await fundMe.fund({
        value: ethers.parseEther("0.1"),
        from: deployer.address
    });
    await tx.wait();
    console.log("Funded successfully!");

    // Get contract balance after funding
    const balance = await ethers.provider.getBalance(fundMe.target);
    console.log("Current balance:", ethers.formatEther(balance), "ETH");

    // Withdraw funds (assuming only owner can call withdraw)
    console.log("Withdrawing funds ...");
    try {
        const withdrawTx = await fundMe.withdraw({ from: deployer });
        await withdrawTx.wait();
        console.log("Withdraw successful!");
    } catch (err) {
        console.error("Withdraw failed:", err);
    }

    // Get contract balance after withdrawal
    const finalBalance = await ethers.provider.getBalance(fundMe.target);
    console.log("Contract balance after withdrawal:", ethers.formatEther(finalBalance), "ETH");
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});