import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { WalletLoginService } from 'src/app/Services/WalletLogin/wallet-login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  login = () => {
    console.log('Login Button Pressed');
    // this._web3Login.MetamaskLogin();
    this.route.navigateByUrl('/playground');
  }
}
