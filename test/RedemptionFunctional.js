import assertRevert from "zeppelin-solidity/test/helpers/assertRevert";

const RedemptionFunctional = artifacts.require("RedemptionFunctional");

contract("RedemptionFunctional", accounts => {
  it("Should calculate checkEntitlement() correctly", async () => {
    let instance = await RedemptionFunctional.deployed();
    let entitlment = await instance.checkEntitlement.call();
    console.log("entitlment ="+entitlment);
    assert.notEqual(entitlment,undefined);
  });

});
