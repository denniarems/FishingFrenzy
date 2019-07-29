import { HomeComponent } from './Componets/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Componets/about/about.component';
import { PlayGroundComponent } from './Componets/home/play-ground/play-ground.component';
import { MarketComponent } from './Componets/home/play-ground/market/market.component';
import { StoreComponent } from './Componets/home/play-ground/store/store.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'playground',
    component: PlayGroundComponent
  },
  {
    path: 'market',
    component: MarketComponent
  },
  {
    path: 'store',
    component: StoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
