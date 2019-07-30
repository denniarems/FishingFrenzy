import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from '../../Services/web3/web3.service';
// import { WalletLoginService } from 'src/app/Services/WalletLogin/wallet-login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private route: Router, private web3service: Web3Service) {}

  ngOnInit() {}

  login = () => {
    this.web3service.web3login();
    console.log('Login Button Pressed');
    // this._web3Login.MetamaskLogin();
    this.route.navigateByUrl('/playground');
  }
}
