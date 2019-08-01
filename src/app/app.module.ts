import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MainNavComponent } from './Components/other/main-nav/main-nav.component';
import { AboutComponent } from './Components/about/about.component';
import { MaterialModule } from './Modules/material/material.module';
import { PlayGroundComponent } from './Components/home/play-ground-home/play-ground/play-ground.component';
import { StoreComponent } from './Components/home/play-ground-home/store/store.component';
import { PlayComponent } from './Components/home/play-ground-home/play/play.component';
import { MarketComponent } from './Components/home/play-ground-home/market/market.component';
import { BackgroundAnimationComponent } from './Components/other/background-animation/background-animation.component';
import { PlayGroundHomeComponent } from './Components/home/play-ground-home/play-ground-home.component';
import { Web3Service } from './Services/web3/web3.service';
import { HeaderComponent } from './Components/home/play-ground-home/header/header.component';
import { AuthService } from './Services/auth/auth.service';
import { AuthGuard } from './Guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    AboutComponent,
    PlayGroundComponent,
    StoreComponent,
    PlayComponent,
    MarketComponent,
    BackgroundAnimationComponent,
    PlayGroundHomeComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [Web3Service, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
