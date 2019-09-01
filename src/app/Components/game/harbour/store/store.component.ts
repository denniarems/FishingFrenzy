import { AppService } from './../../../../Services/app/app.service';

import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FishModel } from 'src/app/Models/fish.model';
declare let window: any;
declare let web3: any;
declare let require: any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements AfterViewInit, OnInit {

  constructor( private _appService: AppService) {


  }
  Contract = this._appService.getFrenzyFishContract();
  fishes: FishModel[] = [];
  rod: any;

  ngOnInit() {
    let count = 1;
    this.Contract.methods
      .ListAllFishes()
      .call()
      .then(address => {
        console.log(address);
        address.forEach(fishAddress => {
          this.Contract.methods
            .GetFishDetails(fishAddress)
            .call()
            .then(fish => {
              this.fishes.push(this.listFish(count, fishAddress, fish));
              count++;
            });
          console.log(this.fishes);
        });
      });
    this.Contract.methods
        .GetRodDetails()
       .call()
       .then((rodData: any) => {
        console.log(rodData);
        this.rod = rodData;
      });
  }

  ngAfterViewInit() {}

  /** Builds and returns a fish. */
  listFish(count, fishAddress, fish): FishModel {
    return {
      id: count,
      fish: fishAddress,
      rarity: fish._rarity,
      weight: fish._weight,
      price: fish._price
    };
  }

  firstFishRod() {
    web3.eth.getAccounts((err, accs) => {
      console.log(accs);
      console.log(accs);
      this.Contract.methods
        .FirstUserInitialRod()
        .send({
          from: accs[0],
          gas: 3000000
        })
        .then(bool => {
          this.Contract.methods
            .GetRodDetails()
            .call()
            .then(data => console.log(data));
          console.log('rod initialised', bool);
        });
    });
  }
  upgradeFishrod() {
    web3.eth.getAccounts((err, accs) => {
      this.Contract.methods
        .UpgradeFishRod()
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
