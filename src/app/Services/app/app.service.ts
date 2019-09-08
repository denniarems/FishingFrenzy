import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare const window: any;
declare const require: any;
declare const web3: any;
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private fishStoreList = new BehaviorSubject([]);
  private buyOrderList = new BehaviorSubject([]);
  private myOrderList = new BehaviorSubject([]);
  private account = new BehaviorSubject([]);

  currentFishStoreList = this.fishStoreList.asObservable();
  currentBuyOrderList = this.buyOrderList.asObservable();
  currentMyOrderList = this.myOrderList.asObservable();
  currentAccount = this.account.asObservable();


  updateFishStoreList(data: any) {
    this.fishStoreList.next(data);
  }
  updateBuyOrderList(data: any) {
    this.buyOrderList.next(data);
  }
  updateMyOrderList(data: any) {
    this.myOrderList.next(data);
  }
  updateAccount(data: any) {
    this.account.next(data);
  }


  getFrenzyFishContract(){
   const ContractJSON = require('../../../../truffle/build/contracts/FrenzyFish.json');
   const contractsAddress = ContractJSON.networks['5777'].address;
   const abi = ContractJSON.abi;
   const Contract = new window.web3.eth.Contract(abi, contractsAddress);
   return Contract;
  }



  constructor() {}
}