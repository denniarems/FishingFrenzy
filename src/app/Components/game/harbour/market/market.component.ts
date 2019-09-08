
import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/Services/app/app.service';
import { FishModel } from 'src/app/Models/fish.model';
import { FishService } from 'src/app/Services/fish/fish.service';
import { OrderModel } from 'src/app/Models/order.model';



@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit{
  Contract: any;
  account: any;
  BuyOrderFishes: OrderModel[] = [];
  MyOrderFishes: FishModel[] = [];
  tempf: FishModel[] = [];
  constructor( 
    private _appService: AppService,
    private _fishService: FishService) {
  }


  ngOnInit() {
    this.Contract = this._appService.getFrenzyFishContract();
    this._appService.currentAccount.subscribe(accs => {
      this.account = accs;
    });
    this._appService.currentBuyOrderList.subscribe(fish => {
      this.BuyOrderFishes = [];
      this.BuyOrderFishes = fish;
    });
    this._appService.currentMyOrderList.subscribe(fish => {
      this.MyOrderFishes = [];
      this.MyOrderFishes = fish;
    });
    this.listingBuyOrders();
  }

  listingBuyOrders()  {
    this.Contract.methods
    .ListMarketOrders()
    .call({from: this.account})
    .then(Orders => {
      this.BuyOrderFishes =  this._fishService.listOrders(Orders,this.listingMyOrders());
      });
  }
  listingMyOrders()  {
    let count = 1;
    this.Contract.methods
      .ListAllFishes()
      .call({from: this.account})
      .then(address => {
        address.forEach(fishAddress => {
          this.Contract.methods
            .GetFishDetails(fishAddress)
            .call({from: this.account})
            .then((fish: any) => {
              if ( fish._onOrder) {
                this.tempf[count - 1] = this._fishService.listFish(count, fishAddress, fish);
              }
              count++;
            }
            );
        });
        this._appService.updateMyOrderList(this.tempf);
      });
    return this.tempf;
  }
  cancelOrder = (fish: FishModel) => {
    alert('Cancel Order Coming Soon!!!!!');
  }
  buyFish = (fish: OrderModel) => {
    alert('Buy Order Coming Soon!!!!!');
  }
}
