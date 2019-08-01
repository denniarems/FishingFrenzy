import { PlayHomeComponent } from './play-home/play-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlayGroundComponent } from './play-ground/play-ground.component';
import { MarketComponent } from './market/market.component';
import { StoreComponent } from './store/store.component';
import { AuthGuard } from 'src/app/Guards/auth.guard';

const PlayGroundRoutes: Routes = [
  {
    path: 'home',
    component: PlayHomeComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'playground',
        component: PlayGroundComponent
        // pathMatch: 'full'
      },
      {
        path: 'market',
        component: MarketComponent
        // pathMatch: 'full'
      },
      {
        path: 'store',
        component: StoreComponent
        // pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(PlayGroundRoutes)],
  exports: [RouterModule]
})
export class PlayGroundHomeModule {}
