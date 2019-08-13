import { Component, OnInit } from '@angular/core';
declare let window: any;
declare let web3: any;
declare let require: any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const ContractJSON = require('../../../../../../build/contracts/FrenzyFish.json');
    const contractsAddress = ContractJSON.networks['5777'].address;
    const abi = ContractJSON.abi;
    const Contract = new window.web3.eth.Contract(abi, contractsAddress);
    Contract.methods
      .ListAllFishes()
      .call()
      .then(s => {
        console.log(s);
      });
  }
}
