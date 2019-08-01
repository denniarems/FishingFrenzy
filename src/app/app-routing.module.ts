import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './Guards/auth.guard';
import { HomeRouteComponent } from './Components/home/home-route/home-route.component';
import { AboutComponent } from './Components/home/about/about.component';
import { GameComponent } from './Components/game/game.component';
import { GameRouteComponent } from './Components/game/game-route/game-route.component';
import { PlayGroundComponent } from './Components/game/game-route/play-ground/play-ground.component';
import { MarketComponent } from './Components/game/game-route/market/market.component';
import { StoreComponent } from './Components/game/game-route/store/store.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeRouteComponent
      },
      {
        path: 'About',
        component: AboutComponent
      }
    ]
  },
  {
    path: 'RiverSide',
    component: GameComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: GameRouteComponent
      },
      {
        path: 'Playground',
        component: PlayGroundComponent
        // pathMatch: 'full'
      },
      {
        path: 'Market',
        component: MarketComponent
        // pathMatch: 'full'
      },
      {
        path: 'Store',
        component: StoreComponent
        // pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
