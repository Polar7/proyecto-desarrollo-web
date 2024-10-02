import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsExampleComponent} from "./feature/news/news-example/news-example.component";
import {AllCharactersComponent} from "./feature/home/component/all-characters/all-characters.component";

const routes: Routes = [
  {
    path: "noticia-clon",
    component: NewsExampleComponent,
  },
  {
    path: "all-characters",
    component: AllCharactersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
