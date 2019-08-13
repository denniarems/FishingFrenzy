import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services/app/app.service';
declare let window: any;
declare let web3: any;
declare let require: any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  fishAddress = [];
  fishData = [];
  constructor(public appservice: AppService) {}

  ngOnInit() {
    this.appservice.currentFishAddressList.subscribe(address => {
      this.fishAddress = address;
    });
    const ContractJSON = require('../../../../../../build/contracts/FrenzyFish.json');
    const contractsAddress = ContractJSON.networks['5777'].address;
    const abi = ContractJSON.abi;
    const Contract = new window.web3.eth.Contract(abi, contractsAddress);
    Contract.methods
      .ListAllFishes()
      .call()
      .then(address => {
        this.appservice.updateFishAddressList(address);

        Contract.methods
          .GetFishDetails(this.fishAddress[0])
          .call()
          .then(s => {
            console.log(s);
          });
      });
  }
}
