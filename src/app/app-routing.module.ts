import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsExampleComponent} from "./feature/news/news-example/news-example.component";
import {AllCharactersComponent} from "./feature/home/component/all-characters/all-characters.component";
import {SpecificCharacterComponent} from "./feature/home/component/specific-character/specific-character.component";
import {RegisterFormComponent} from "./feature/auth/register-form/register-form.component";

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
  {
    path: "register-form",
    component: RegisterFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
