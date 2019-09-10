
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
export class MarketComponent implements OnInit {
  Contract: any;
  account: any;
  BuyOrderFishes: OrderModel[] = [];
  MyOrderFishes: OrderModel[] = [];
  tempf: OrderModel[] = [];

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
    this.Orders();
  }
  async Orders() {
    this.Contract.methods
    .ListMarketOrders()
    .call({from: this.account})
    .then(async (Orders: { [s: string]: {}; } | ArrayLike<{}>) => {
      this.tempf = await this._fishService.listOrders(Orders);
      await this.listingBuyOrders(this.tempf);
      // await this.listingMyOrders(this.tempf);
      });
  }

 async listingBuyOrders(order: OrderModel[])  {
    let buyOrder: OrderModel[];
    let index = 0;
    buyOrder = new Promise((resolve) => {
      this.Contract.methods
      .ListAllFishes()
      .call({from: this.account})
      .then((async ( fishes: any) => {
        if (!(fishes.length === 0)) {
          fishes.forEach(async (fishAddress: any) => {
            await this.Contract.methods
              .GetFishDetails(fishAddress)
              .call({from: this.account})
              .then(async (fish: any) => {
                order.forEach(orderfish => {
                  if (orderfish.fish === fishAddress && fish._onOrder) {
                    buyOrder[index] = orderfish;
                    index++;
                  }
                });
              }
              );
          });
          resolve(buyOrder);
        } else {
          resolve(order);
        }
      }));
    });
    buyOrder.then((result) => {
      console.log(buyOrder);
      this._appService.updateMyOrderList(buyOrder);
    })
  }
  // listingMyOrders(order: OrderModel[])  {
  //   let count = 0;
  //   let fcount = 0;
  //   this.Contract.methods
  //     .ListAllFishes()
  //     .call({from: this.account})
  //     .then((address: { forEach: (arg0: (fishAddress: any) => void) => void; }) => {
  //       address.forEach((fishAddress: string) => {
  //         this.Contract.methods
  //           .GetFishDetails(fishAddress)
  //           .call({from: this.account})
  //           .then((fish: any) => {
  //             if ( fish._onOrder) {
  //               this.tempf[fcount] = this._fishService.listFish(count, fishAddress, fish);
  //               fcount++;
  //             }
  //             count++;
  //           }
  //           );
  //       });
  //       this._appService.updateMyOrderList(this.tempf);
  //     });
  //   return this.tempf;
  // }
//   cancelOrder = (fish: OrderModel) => {
//     console.log(fish);

//     this.Contract.methods
//     .CancelSellFishOrder(fish.fish, fish.orderid)
//     .send({
//       from: this.account,
//       gas: 3000000
//     }).then((success: any) => {
//       console.log(success);
//       // if (success.status) {
//       //   alert('Sell Order Placed SuccessFully')
//       // }
//   });
// }
  buyFish = (fish: OrderModel) => {
    alert('Buy Order Coming Soon!!!!!');
  }
}
