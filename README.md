# FishingFrenzy

FishingFrenzy is blockchain based CryptoCollectble game, we use ethereum network for deploying codes (smart contracts).

## Requirements

- Ubuntu
- Build-essential packages
- [Node.js](https://nodejs.org/) Version 10.15.3
- Angular 8
- [Truffle](https://www.trufflesuite.com/docs/truffle/overview)
- [Geth](https://www.trufflesuite.com/docs/truffle/overview)
- MetaMask Enabled Browser

## Setting Up:

**Step 1:** Download the repostory using the command:

```
 git clone "https://gitlab.com/ced_b3_projects/ced-b3-g06.git"
 cd ced-b3-g06
```

**Step 2:** Install the dependecies using the command:

```
 npm Install
```
**Step 3:** Use the following command to runing Smart Contract:



**Run On Private Network**


 Use the following command to run the Geth(Proof Of Authority (Clique)):


 nano node/genesis.json

 
 Add needed alloc address and prefund
 
 
 
```
cd node
chmod +x ./genesisInit.sh
chmod +x ./geth.sh

./genesisInit.sh
./geth.sh
cd ..
truffle migrate
```




**Run On Public Network**
Use the following Steps For Run Smart Contract In Ropsten (Proof Of Work) and Rinkeby (Proof Of Authority) :


nano truffle-config.js

change infuraKey

nano ./secret

add your mnemonics words

nano src/app/Services/app/app.service.ts

go to line 11

change networkid to 3 for Ropsten and 4 for Rinkeby

truffle deployment for Ropsten Network
```
truffle migrate --network ropsten
```
truffle deployment for Rinkeby Network
```
truffle migrate --network rinkeby
```



**Step 4:** Running Angular App
Open New Terminal
```
ng s -o
```


it will Automaticaly Open http://localhost/4200 in browser
Connet with Metamask 
Enjoy!!!!!!

check video demonstration [here](/willcomesoon....)




## Optional Settings:

to run test case
New Terminal
```
truffle test ./test/FishingFrenzy.js
```
We Don't Stop From here....
## Upcoming Features
- Ether Payment Support.
- ERC20 Token Support.
- Fish Recharging.
- Admin Panel.
- Migrating To ERC721 Fish Tokens from Fish Contracts.
- Fish Biding Support.
- implementing New featured Fishrods.
- Aquarium for Fish breeding. 
- New Web Ui with Rich Graphic Support.
- Introducing Mobile App. 
- Original Fish API.
- Introducing Legendery and Seasonal Fishes which Have Uniqe DNA. 
- VIP Club. (increasing the chance of Epic Fishes) 
- And So on ... Stay Tuned.........
