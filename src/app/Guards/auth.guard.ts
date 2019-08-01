import { Web3Service } from 'src/app/Services/web3/web3.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Routes,
  Router
} from '@angular/router';
import { Web3Model } from '../Models/web3.model';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private web3service: Web3Service,
    private auth: AuthService,
    private route: Router
  ) {}
  canActivate(): boolean {
    return this.auth.isActive();
  }
}
