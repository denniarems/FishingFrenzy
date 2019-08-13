import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private fishAddressList = new BehaviorSubject([]);
  private fishDataList = new BehaviorSubject([]);

  currentFishAddressList = this.fishAddressList.asObservable();
  currentFishDataList = this.fishDataList.asObservable();

  updateFishAddressList(data: any) {
    this.fishAddressList.next(data);
  }

  updateFishDataList(data: any) {
    this.fishDataList.next(data);
  }

  constructor() {}
}
