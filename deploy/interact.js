import hardhat from "hardhat";

const {ethers,getNamedAccounts} = hardhat;

async function main (){
    const {deployer} = await getNamedAccounts();
    const fundMe = await.getContractAt(fundme.target, fundme.address, deployer);

    const tx= await fundMe.fund({value:ethers.parseEther("0.1")});
    await tx.wait(1);
    
}
