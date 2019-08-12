import { Component, OnInit } from '@angular/core';
declare let window: any;
declare let web3: any;

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.scss']
})
export class PlayGroundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  play = () => {
    const ContractJSON = require('../../../../../../build/contracts/FrenzyFish.json');
    const contractsAddress = ContractJSON.networks['5777'].address;
    const abi = ContractJSON.abi;
    const Contract = new window.web3.eth.Contract(abi, contractsAddress);
    web3.eth.getAccounts((err, accs) => {
      Contract.methods
        .Fishing()
        .send({
          from: accs[0],
          gas: 3000000
        })
        .then(s => {
          console.log(s);
        });
    });
  }
}