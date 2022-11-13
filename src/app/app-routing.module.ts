import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component'
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component'

const routes: Routes = [{
  path: '',
  component : HomePageComponent,
},
{
  path: 'home',
  component : HomePageComponent,
},
{
  path: 'orderOnline',
  component : RestaurantListComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
