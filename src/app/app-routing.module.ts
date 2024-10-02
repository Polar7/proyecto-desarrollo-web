import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsExampleComponent} from "./feature/news/news-example/news-example.component";
import {AllCharactersComponent} from "./feature/home/component/all-characters/all-characters.component";
import {SpecificCharacterComponent} from "./feature/home/component/specific-character/specific-character.component";

const routes: Routes = [
  {
    path: "noticia-clon",
    component: NewsExampleComponent,
  },
  {
    path: "all-characters",
    component: AllCharactersComponent,
  },
  {
    path: "character/:id",
    component: SpecificCharacterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
