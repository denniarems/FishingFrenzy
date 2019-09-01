import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services/app/app.service';
declare let window: any;
declare let web3: any;
declare let require: any;

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.scss']
})
export class PlayGroundComponent implements OnInit {
  constructor( private _appService: AppService) {


  }
  Contract = this._appService.getFrenzyFishContract();

  ngOnInit() {}
  play = () => {

    web3.eth.getAccounts((err, accs) => {
      this.Contract.methods
        .Fishing()
        .send({
          from: accs[0],
          gas: 3000000
        })
        .then(s => {
          console.log(s);
        });
    });
  }
}
