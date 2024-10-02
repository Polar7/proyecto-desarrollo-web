import { Component } from '@angular/core';

@Component({
  selector: 'app-news-example',
  templateUrl: './news-example.component.html',
  styleUrl: './news-example.component.css'
})
export class NewsExampleComponent {

  public boton1Evento(nombre: String, numeroX: number): void {
    alert("Su nombre es "+nombre+". Y su edad es "+numeroX);
  }

}
