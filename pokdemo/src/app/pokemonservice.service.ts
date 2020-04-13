import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonserviceService {

  constructor(private httpClient: HttpClient) { }
  getPokemon(limit: number, offset: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/?limit=" + limit + "&offset=" + offset' );
  }
  getPokemonID(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(
      'https://pokeapi.co/api/v2/pokemon/' + id + '/'
    );


  }
  }

