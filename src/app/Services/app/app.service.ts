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
  private account = new BehaviorSubject([]);

  currentFishStoreList = this.fishStoreList.asObservable();
  currentAccount = this.account.asObservable();


  updateFishStoreList(data: any) {
    this.fishStoreList.next(data);
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