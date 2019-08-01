import { PlayGroundHomeComponent } from './Components/home/play-ground-home/play-ground-home.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { PlayGroundComponent } from './Components/home/play-ground-home/play-ground/play-ground.component';
import { MarketComponent } from './Components/home/play-ground-home/market/market.component';
import { StoreComponent } from './Components/home/play-ground-home/store/store.component';
import { PlayGroundHomeModule } from './Components/home/play-ground-home/play-ground-home.module';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: PlayGroundHomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PlayGroundHomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
