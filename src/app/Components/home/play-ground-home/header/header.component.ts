import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/Services/web3/web3.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  UserAddress: string;
  Energy: number;
  Coins: number;
  constructor(private web3service: Web3Service) {}

  ngOnInit() {
    this.Energy = 20;
    this.Coins = 2000;
    this.web3service.address$.subscribe(data => {
      this.UserAddress = data;
    });
  }
}
