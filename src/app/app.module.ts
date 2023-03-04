import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//http
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardSingleComponent } from './components/card-single/card-single.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { MoviesComponent } from './pages/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    BannerComponent,
    CardSingleComponent,
    TvShowsComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
