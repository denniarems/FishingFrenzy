import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AppService } from 'src/app/Services/app/app.service';
import { FishModel } from 'src/app/Models/fish.model';
declare let window: any;
declare let web3: any;
declare let require: any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements AfterViewInit, OnInit {
  displayedColumns = ['id', 'fish', 'rarity', 'weight', 'price'];
  dataSource: MatTableDataSource<FishModel>;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  ContractJSON = require('../../../../../../build/contracts/FrenzyFish.json');
  contractsAddress = this.ContractJSON.networks['5777'].address;
  abi = this.ContractJSON.abi;
  Contract = new window.web3.eth.Contract(this.abi, this.contractsAddress);
  fishes: FishModel[] = [];

  constructor(public appservice: AppService) {
    let count = 1;
    this.Contract.methods
      .ListAllFishes()
      .call()
      .then(address => {
        address.forEach(fishAddress => {
          this.Contract.methods
            .GetFishDetails(fishAddress)
            .call()
            .then(fish => {
              this.fishes.push(listFish(count, fishAddress, fish));
              count++;
            });
        });
      });
    this.dataSource = new MatTableDataSource(this.fishes);
  }

  ngOnInit() {
    console.log(this.fishes);
  }
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** Builds and returns a new User. */
function listFish(count, fishAddress, fish): FishModel {
  return {
    id: count,
    fish: fishAddress,
    rarity: fish._rarity,
    weight: fish._weight,
    price: fish._price
  };
}
