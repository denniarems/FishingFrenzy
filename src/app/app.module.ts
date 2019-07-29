import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componets/home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AboutComponent } from './Componets/about/about.component';
import { MaterialModule } from './Modules/material/material.module';
import { PlayGroundComponent } from './Componets/home/play-ground/play-ground.component';
import { StoreComponent } from './Componets/home/play-ground/store/store.component';
import { PlayComponent } from './Componets/home/play-ground/play/play.component';
import { MarketComponent } from './Componets/home/play-ground/market/market.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    AboutComponent,
    PlayGroundComponent,
    StoreComponent,
    PlayComponent,
    MarketComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
