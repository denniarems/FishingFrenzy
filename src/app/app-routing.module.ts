import { PlayGroundHomeComponent } from './Components/home/play-ground-home/play-ground-home.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { PlayGroundComponent } from './Components/home/play-ground-home/play-ground/play-ground.component';
import { MarketComponent } from './Components/home/play-ground-home/market/market.component';
import { StoreComponent } from './Components/home/play-ground-home/store/store.component';

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
    path: 'mainhome',
    component: PlayGroundHomeComponent
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
export class AppRoutingModule {}
