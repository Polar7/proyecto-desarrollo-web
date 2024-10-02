import {Component, OnInit} from '@angular/core';
import {HarryPotterApiService} from "../../../../core/service/harry-potter-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, of, switchMap} from "rxjs";
import {CharacterDto} from "../../../../core/dto/characterDto";

@Component({
  selector: 'app-specific-character',
  templateUrl: './specific-character.component.html',
  styleUrl: './specific-character.component.css'
})
export class SpecificCharacterComponent implements OnInit {

  private idCharacter: string;

  private listCharacter: Array<CharacterDto> = [];

  public objectCharacter: CharacterDto;

  constructor(private harryPotterApiService: HarryPotterApiService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.idCharacter = params.get('id');
        return of(this.idCharacter); // Convierto a observable
      })
    ).subscribe(resIdCharacter => {
      this.harryPotterApiService.getCharacterById(resIdCharacter).subscribe(listRes => {
        this.listCharacter = listRes;
        this.objectCharacter = this.listCharacter[0];
      });
    });
  }

  public redirectAllCharacter(): void {
    this.router.navigateByUrl(`/all-characters`);
  }

}
