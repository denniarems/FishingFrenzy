import { async } from '@angular/core/testing'
import { FishService } from './../../../../Services/fish/fish.service'
import { AppService } from './../../../../Services/app/app.service'
import { Component, AfterViewInit, OnInit } from '@angular/core'
import { FishModel } from 'src/app/Models/fish.model'
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  Contract: any
  fishes: FishModel[] = []
  rod: any = []
  tempf: FishModel[] = []
  account: any
  data: any
  constructor(
    private _appService: AppService,
    private _fishService: FishService
  ) {}

  ngOnInit() {
    this.Contract = this._appService.getFrenzyFishContract()
    this._appService.currentAccount.subscribe((accs) => {
      this.account = accs
    })
    this._appService.currentFishStoreList.subscribe((fish) => {
      this.fishes = []
      this.fishes = fish
    })
    this.listingFishData()
    this.listingRodDta()
  }
  // Listing FishData
  listingFishData = async () => {
    let count = 0
    let fcount = 0
    const address = await this.Contract.methods
      .ListAllFishes()
      .call({ from: this.account })
    address.forEach(async (item: any) => {
      const fish = await this.Contract.methods
        .GetFishDetails(item)
        .call({ from: this.account })
      if (!fish._onOrder) {
        this.tempf[fcount] = this._fishService.listFish(count, item, fish)
        fcount++
      }
      count++
    })
    this._appService.updateFishStoreList(this.tempf)
  }

  // Listing FishRod
  listingRodDta = async () => {
    this.rod = await this.Contract.methods
      .GetRodDetails()
      .call({ from: this.account })
  }
  // initilise Fish Rod
  firstFishRod = async () => {
    this.data = await this.Contract.methods.FirstUserInitialRod().send({
      from: this.account,
      gas: 5000000
    })
    this.data.status ? this.listingRodDta() : alert('Code REd')
  }
  // Upgrade Fish Rod
  upgradeFishrod = async () => {
    this.data = await this.Contract.methods.UpgradeFishRod().send({
      from: this.account,
      gas: 5000000
    })
    this.data.status ? this.listingRodDta() : alert('Code REd')
  }
  recharge = (fish: FishModel) => {
    alert('Coming Soon.. WIll be Available on Next Update....')
  }
  // Sell A Fish
  sellFish = async (fish: FishModel) => {
    const success = await this.Contract.methods
      .SellFish(fish.fish, fish.id)
      .send({
        from: this.account,
        gas: 3000000
      })
    if (success.status) {
      alert('Sell Order Placed SuccessFully')
    }
  }
}
