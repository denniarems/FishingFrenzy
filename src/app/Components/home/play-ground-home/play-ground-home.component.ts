import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/Services/web3/web3.service';

@Component({
  selector: 'app-play-ground-home',
  templateUrl: './play-ground-home.component.html',
  styleUrls: ['./play-ground-home.component.scss']
})
export class PlayGroundHomeComponent implements OnInit {
  UserAddress: string;
  constructor(private web3service: Web3Service) {}

  ngOnInit() {
    this.web3service.address$.subscribe(data => {
      this.UserAddress = data;
    });
  }
}
