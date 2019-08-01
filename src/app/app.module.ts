import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MainNavComponent } from './Components/other/main-nav/main-nav.component';
import { AboutComponent } from './Components/home/about/about.component';
import { PlayGroundComponent } from './Components/game/game-route/play-ground/play-ground.component';
import { StoreComponent } from './Components/game/game-route/store/store.component';
import { MarketComponent } from './Components/game/game-route/market/market.component';
import { BackgroundAnimationComponent } from './Components/other/background-animation/background-animation.component';
import { HeaderComponent } from './Components/game/game-route/header/header.component';
import { HomeRouteComponent } from './Components/home/home-route/home-route.component';
import { GameRouteComponent } from './Components/game/game-route/game-route.component';
import { GameComponent } from './Components/game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './Modules/material/material.module';
import { Web3Service } from './Services/web3/web3.service';
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
    MarketComponent,
    BackgroundAnimationComponent,
    HeaderComponent,
    HomeRouteComponent,
    GameRouteComponent,
    GameComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [Web3Service, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
