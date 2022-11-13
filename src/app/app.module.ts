import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { HomeGridsComponent } from './home-grids/home-grids.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { GridService } from './services/grids.services';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SearchContainerComponent,
    HomeGridsComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
