import { WeatherComponent } from './pages/weather/weather.component';
import { RockGameComponent } from './pages/rock-game/rock-game.component';
import { RoomHomePageComponent } from './pages/room-home-page/room-home-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { InteriorConsultantComponent } from './pages/interior-consultant/interior-consultant.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { Error404pageComponent } from './pages/error404page/error404page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'home', component: AcceuilComponent},
  {path: 'error404', component: Error404pageComponent},
  {path: 'team', component: TeamPageComponent},
  {path: 'interior', component: InteriorConsultantComponent},
  {path: 'recipe', component: RecipePageComponent},
  {path: 'gallery', component: GalleryPageComponent},
  {path: 'room', component: RoomHomePageComponent},
  {path: 'rockGame', component: RockGameComponent},
  {path: 'weather', component: WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
