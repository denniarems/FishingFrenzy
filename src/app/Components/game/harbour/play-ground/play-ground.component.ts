import { async } from '@angular/core/testing'
import { Component, OnInit } from '@angular/core'
import { AppService } from 'src/app/Services/app/app.service'
import { FishModel } from 'src/app/Models/fish.model'
import { FishService } from 'src/app/Services/fish/fish.service'
declare let window: any
declare let web3: any
declare let require: any

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.scss']
})
export class PlayGroundComponent implements OnInit {
  account: any
  data: any
  newFish: FishModel = {
    id: 0,
    fish: '',
    rarity: 'soon',
    weight: 0,
    price: 0,
    onOrder: false
  }
  constructor(
    private _appService: AppService,
    private _fishService: FishService
  ) {}
  Contract = this._appService.getFrenzyFishContract()

  ngOnInit() {
    this._appService.currentAccount.subscribe((accs) => {
      this.account = accs
      this.listNewFish()
    })
  }
  // Code For Fishing
  play = async () => {
    this.data = await this.Contract.methods.Fishing().send({
      from: this.account,
      gas: 5000000
    })
    this.data.status ? this.listNewFish() : alert('Code Red')
  }
  // Display Last ArrayFish
  listNewFish = async () => {
    const address = await this.Contract.methods
      .ListAllFishes()
      .call({ from: this.account })
    const fish = await this.Contract.methods
      .GetFishDetails(address[address.length - 1])
      .call({ from: this.account })
    this.newFish = this._fishService.listFish(
      address.length - 1,
      address[address.length - 1],
      fish
    )
  }
}
