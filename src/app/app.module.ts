import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsExampleComponent } from './feature/news/news-example/news-example.component';
import { PruebaComponent } from './feature/news/prueba/prueba.component';
import { AllCharactersComponent } from './feature/home/component/all-characters/all-characters.component';
import {HttpClientModule} from "@angular/common/http";
import { SpecificCharacterComponent } from './feature/home/component/specific-character/specific-character.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterFormComponent } from './feature/auth/register-form/register-form.component';
import { CinemarkFormComponent } from './feature/cinemark/cinemark-form/cinemark-form.component';
import { PaymentFormComponent } from './feature/cinemark/payment-form/payment-form.component';
import { BasicDataFormComponent } from './feature/cinemark/basic-data-form/basic-data-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsExampleComponent,
    PruebaComponent,
    AllCharactersComponent,
    SpecificCharacterComponent,
    RegisterFormComponent,
    CinemarkFormComponent,
    PaymentFormComponent,
    BasicDataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
