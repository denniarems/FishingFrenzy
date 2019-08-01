import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Web3Service } from '../Services/web3/web3.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private web3service: Web3Service) {}
  canActivate(): Observable<boolean> {
    return this.web3service.Web3Details$.pipe(
      map(
        (n): boolean => {
          if (n.account) {
            return true;
          }
          return false;
        }
      )
    );
  }
}
