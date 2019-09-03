import { Injectable } from '@angular/core';
import { FishModel } from 'src/app/Models/fish.model';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor() { }


    /** Builds and returns a fish. */
    listFish(count, fishAddress, fish): FishModel {
      return {
        id: count,
        fish: fishAddress,
        rarity: fish._rarity,
        weight: fish._weight,
        price: fish._price
      };
    }
}
