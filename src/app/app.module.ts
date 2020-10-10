import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404pageComponent } from './pages/error404page/error404page.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { InteriorConsultantComponent } from './pages/interior-consultant/interior-consultant.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { RoomHomePageComponent } from './pages/room-home-page/room-home-page.component';
import { RockGameComponent } from './pages/rock-game/rock-game.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Error404pageComponent,
    AcceuilComponent,
    TeamPageComponent,
    InteriorConsultantComponent,
    RecipePageComponent,
    GalleryPageComponent,
    RoomHomePageComponent,
    RockGameComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
