import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/Services/web3/web3.service';
import { Web3Model } from 'src/app/Models/web3.model';

@Component({
  selector: 'app-play-home',
  templateUrl: './play-home.component.html',
  styleUrls: ['./play-home.component.scss']
})
export class PlayHomeComponent implements OnInit {
  UserAddress: string;
  constructor(private web3service: Web3Service) {}

  ngOnInit() {
    this.web3service.Web3Details$.subscribe((data: Web3Model) => {
      this.UserAddress = data.account;
    });
  }
}
