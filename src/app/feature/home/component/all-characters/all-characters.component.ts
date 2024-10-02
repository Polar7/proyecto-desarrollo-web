import {Component, OnInit} from '@angular/core';
import {HarryPotterApiService} from "../../../../core/service/harry-potter-api.service";
import {CharacterDto} from "../../../../core/dto/characterDto";

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrl: './all-characters.component.css'
})
export class AllCharactersComponent implements OnInit {

  public nombreX: string = "nombreXYZ";

  public listCharacters: Array<CharacterDto> = [];

  constructor(private harryPotterApiService: HarryPotterApiService) {
  }

  ngOnInit(): void {
    this.harryPotterApiService.getAllCharacters().subscribe(lista => {
      this.listCharacters = lista;
      this.listCharacters = this.listCharacters.slice(0, 27);
    });
  }



}
