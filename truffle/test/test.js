/**
 * Importing required contents from libraries previously installed.
 * assert : to check the whether the method is working properly or not.
 * ganache-cli : local virtual blockchain. 
 * ganache-cli will be listening on '127.0.0.1:8545'.
 * web3 : to connect the local blockchain.
 * json : output from the compilation of smart contract BaseContracts.
 */
const json=artifacts.require("FrenzyFish");
let accounts,fishfrenzy,management,ff;
const interface=json['abi'];
const bytecode=json['bytecode'];
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// The bytecode and the interface (abi) are only considered from the output json file.

/**
 * @title beforeEach
 * beforeEach in unit testing means you run this method every time you execute a unit test.
 * Runs before each test in this block.
 * Connecting to blockchain is an asynchronous process so we have to declare our function async.
 * The first thing we do is to get all accounts.
 *
 *  @title accounts
 * Ganache gives us some accounts to work for.
 * But we need these accounts before we go to other steps so we use await here to make the statement synchronous.
 * Use the first account as manager.
 * Then deploy the contract.
 * 
 * @title deploy contract
 * To deploy the contract, we need the interface, the bytecode, the address and some gas.
 * Deploying contract is not free.
 *
 * @title Assert
 * assert helps to determine the status of the test, it determines failure of the test.
 * assert.equal() method tests if two values are equal, using the == operator.
 * If the two values are not equal, an assertion failure is being caused, and the program is terminated.
 * Syntax : assert.equal(value1, value2, message);
 * 
 * @title describe
 * describe : is a way of grouping tests.
 * describe is a function which holds the collection of tests.
 * It takes two parameters.
 * first one is the meaningful name to functionality under test.
 * second one is the function which contains one or multiple tests.
 * We can have nested describe as well.
 * 
 * @title it
 * it is a function again which is actually a test itself and takes two parameters.
 * first parameter is name to the test.
 * second parameter is function which holds the body of the test.
 */
beforeEach(async() => {
    

accounts=await web3.eth.getAccounts();
manage=accounts[0];
fishfrenzy=await web3.eth.Contract(interface)
    .deploy({data:bytecode})
    .send({from:manage,gas:'40000'});
});

contract('FrenzyFish',()=>{
    it ('deploys a contract',()=>{
        const fishaddress=await ff.option.address;
        assert.ok(fishaddress, "[test fail]");

    });
    it('fishing fish ',async()=>{
    

        try{  
          await sms.methods.Fishing(msg.sender,UsersRod[msg.sender].Level)
        .send({from:accounts[0],gas:4000000});
       
      };
    

});



