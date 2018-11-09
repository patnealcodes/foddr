import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShardsPageComponent } from './../components/shards-page/shards-page.component';
import { MainPageComponent } from '../components/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainPageComponent
  },
  {
    path: 'shards',
    pathMatch: 'full',
    component: ShardsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
