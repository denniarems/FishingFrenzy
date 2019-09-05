const json=artifacts.require("FrenzyFish");
let accounts,fishfrenzy,management,contractBalance;
const interface=json['abi'];
const bytecode=json['bytecode'];
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


beforeEach(async() => {
    

accounts=await web3.eth.getAccounts();
manage=accounts[0];
fishfrenzy=await web3.eth.Contract(interface)
    .deploy({data:bytecode})
    .send({from:manage,gas:'40000'});
});

contract('FrenzyFish',()=>{
    it ('deploys a contract',()=>{
        const fishaddress=await sms.option.address;
        assert.ok(fishaddress, "[test fail]");

    });
});



