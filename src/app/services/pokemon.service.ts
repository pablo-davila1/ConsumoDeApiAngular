import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string= "https://pokeapi.co/api/v2/pokemon/"; //https://pokeapi.co/api/v2/pokemon/ditto
  private urlError: string = "https://www.orientadorweb.com/wp-content/uploads/2014/02/C%C3%B3digos-de-estado-HTTP-Posicionamiento-web-op3.png";

  constructor(private http: HttpClient) { }

  getPokemon(pokeName:string){
    return this.http.get(`${this.url}${pokeName}`);
  }
}
