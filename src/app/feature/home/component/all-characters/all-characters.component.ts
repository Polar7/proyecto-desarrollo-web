import {Component, OnInit} from '@angular/core';
import {HarryPotterApiService} from "../../../../core/service/harry-potter-api.service";
import {CharacterDto} from "../../../../core/dto/characterDto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrl: './all-characters.component.css'
})
export class AllCharactersComponent implements OnInit {

  public nombreX: string = "nombreXYZ";

  public listCharacters: Array<CharacterDto> = [];

  constructor(private harryPotterApiService: HarryPotterApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.harryPotterApiService.getAllCharacters().subscribe(lista => {
      this.listCharacters = lista;
      this.listCharacters = this.listCharacters.slice(0, 27);
    });
  }

  public redirectInfoCharacter(id: string): void {
    this.router.navigateByUrl(`/character/${id}`);
  }



}
