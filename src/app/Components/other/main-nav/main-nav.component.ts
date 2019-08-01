import { Component, OnInit, DoCheck } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit,DoCheck{
  logedIn = false;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService
  ) {}
  ngDoCheck(){
    this.logedIn = this.auth.isActive();
  }
  ngOnInit() {
  }
  logOut = () => {
    console.log('LogOut Button Pressed');
  }
}
