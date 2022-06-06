import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public pokeName: string = "";
  public ulrImage:string = "";

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  Buscar(){
    this.pokemonService.getPokemon(this.pokeName).subscribe((data:any) => {
      try{
        this.ulrImage = data.sprites.front_default;
      }
      catch (error){
        console.log("Pokemon no encontrado.")
      }
    });
  }

}
