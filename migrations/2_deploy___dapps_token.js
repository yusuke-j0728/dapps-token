const DappsToken = artifacts.require("./DappsToken.sol");

module.exports = function(deployer) {
    deployer.deploy(DappsToken, {
        gas: 2000000
    });
};