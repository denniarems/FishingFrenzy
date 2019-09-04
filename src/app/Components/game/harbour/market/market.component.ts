import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/Services/app/app.service';
import { FishModel } from 'src/app/Models/fish.model';
import { FishService } from 'src/app/Services/fish/fish.service';



@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit{
  Contract: any;
  fishes: FishModel[] = [];
  rod: any = [];
  tempf: FishModel[] = [];
  account: any;
  constructor( 
    private _appService: AppService,
    private _fishService: FishService) {
  }


  ngOnInit() {
    this.Contract = this._appService.getFrenzyFishContract();
    this._appService.currentAccount.subscribe(accs => {
      this.account = accs;
    });
    this._appService.currentFishStoreList.subscribe(fish => {
      this.fishes = [];
      this.fishes = fish;
    });
    this.listingFishData();
    this.listingRodDta();
  }

  listingFishData = () => {
    let count = 1;
    this.Contract.methods
      .ListAllFishes()
      .call({from: this.account})
      .then(address => {
        address.forEach(fishAddress => {
          this.Contract.methods
            .GetFishDetails(fishAddress)
            .call({from: this.account})
            .then(fish => {
              this.tempf[count - 1] = this._fishService.listFish(count, fishAddress, fish);
              count++;
            }
            );
        });
        this._appService.updateFishStoreList(this.tempf);
      });
  }
  listingRodDta = () => {
    this.Contract.methods
    .GetRodDetails()
   .call({from: this.account})
   .then((rodData: any) => {
    this.rod = rodData;
  });
  }
  firstFishRod = () => {
      this.Contract.methods
        .FirstUserInitialRod()
        .send({
          from: this.account,
          gas: 3000000
        })
        .then(() => {
          this.listingRodDta();
        });
  }
  upgradeFishrod() {
      this.Contract.methods
        .UpgradeFishRod()
        .send({
          from: this.account,
          gas: 3000000
        })
        .then(() => {
          this.listingRodDta();
        });

  }
}
