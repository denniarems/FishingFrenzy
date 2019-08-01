import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  CanActivateChild
} from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService) {}
  canActivate(): boolean {
    return this.auth.isActive();
  }
  canActivateChild(): boolean {
    return !this.auth.isActive();
  }
}
