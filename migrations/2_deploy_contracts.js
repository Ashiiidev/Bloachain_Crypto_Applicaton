const Token  = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports =  async  function(deployer) {
   // Deploy Token
    await  deployer.deploy(Token);
    const token =  await Token.deployed()
    // deploy ethswap
    await    deployer.deploy(EthSwap,token.address);
   const ethSwap  = await EthSwap.deployed()

await token.transfer(ethSwap.address, '1000000000000000000000000')
};