import { Injectable } from '@angular/core';
import contract from 'truffle-contract';
import { Subject } from 'rxjs';

declare let require: any;

const Web3 = require('web3');

// const fishingFrenzy_abi = require('../../build/contracts/');
declare let window: any;
@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  public web3: any;

  public async web3login() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      await window.ethereum.enable();
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log('No web3? You should consider trying MetaMask!');

      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      this.web3 = new Web3(
        new Web3.providers.HttpProvider('http://127.0.0.1:8545')
      );
    }

    this.getAccounts();
  }

  private getAccounts() {
    this.web3.eth.getAccounts((err, accs) => {
      if (err != null) {
        console.warn('There was an error fetching your accounts.');
        return;
      }

      // Get the initial account balance so it can be displayed.
      if (accs.length === 0) {
        console.warn(
          'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
        );
        return;
      } else {
        console.log('account array from service page', accs);
      }
    });
  }
}
