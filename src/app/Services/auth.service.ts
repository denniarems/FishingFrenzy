import { Injectable } from '@angular/core';
import { Web3Model } from '../Models/web3.model';
import { Web3Service } from './web3/web3.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserAddress = false;
  constructor(private web3service: Web3Service) {
    this.web3service.Web3Details$.subscribe((data: Web3Model) => {
      if (data.account) {
        this.UserAddress = true;
      }
    });
  }
  isActive = (): boolean => this.UserAddress;
}
