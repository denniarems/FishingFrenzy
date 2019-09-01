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
  private fishAddressList = new BehaviorSubject([]);
  private fishDataList = new BehaviorSubject([]);

  currentFishAddressList = this.fishAddressList.asObservable();
  currentFishDataList = this.fishDataList.asObservable();

  updateFishAddressList(data: any) {
    this.fishAddressList.next(data);
  }

  updateFishDataList(data: any) {
    this.fishDataList.next(data);
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