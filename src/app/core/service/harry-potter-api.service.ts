import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharacterDto} from "../dto/characterDto";

@Injectable({
  providedIn: 'root'
})
export class HarryPotterApiService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "https://hp-api.onrender.com/api";
  }

  public getAllCharacters(): Observable<CharacterDto[]> {
    return this.http.get<CharacterDto[]>(`${this.baseUrl}/characters`);
  }

  public getCharacterById(id: string): Observable<CharacterDto[]> {
    return this.http.get<CharacterDto[]>(`${this.baseUrl}/character/${id}`);
  }

}
