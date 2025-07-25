import hardhat from "hardhat";
const {getNameAccount,deployments} = hardhat ;

module.exports=async({getNamedAccounts,deployments})=>{
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    const fundMe = await deploy("Fundme", {
        from: deployer,
        log: true,
    });

    console.log("FundMe deployed to:", fundMe.address);
}

main()
    .then(() => process.exit(0))