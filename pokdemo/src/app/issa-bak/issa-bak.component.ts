import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { FilterPokemonPipePipe } from '../filter-pokemon--pipe.pipe';
import {PokemonserviceService} from '../pokemonservice.service';
@Component({
  selector: 'app-issa-bak',
  templateUrl: './issa-bak.component.html',
  styleUrls: ['./issa-bak.component.css'],
})
export class IssaBAKComponent implements OnInit {

  constructor( private pokemonservice: PokemonserviceService) { }
  pokemons: Pokemon[] = [];
 selectPokemon: Pokemon = new Pokemon();
  // tslint:disable-next-line:variable-name
  list_pokemons: Pokemon[] = [];
  offset = 0;
  searchTerm = '';
  id = '';
  // tslint:disable-next-line:variable-name
  id_select: number;
  namepokemon = '';
  MaListe = [
    new Pokemon( 1, 'Poklin' ),
    new Pokemon( 2, 'MaiPoke' ),
    new Pokemon(3, 'Bista' ),
   new Pokemon( 4, 'BahPokemon'),
   new Pokemon ( 5, 'pokoko' ),
  ];
  ngOnInit() {
    this.getListPokemons();
    this.selectPokemon['id'] = 1;
    this.selectPokemon["stats"] = [];
    this.getPokemonsSelected(this.selectPokemon);
  }
  onSelect(pokemon: Pokemon): void {
    this.getPokemonsSelected(pokemon);
  }
  codeToExecute() {
    const temp: Pokemon = new Pokemon();
    temp["id"] = this.id_select;
    this.onSelect(temp);
    console.log(temp);
  }
  getListPokemons(): void {
    this.pokemonservice.getPokemon(800, 0).subscribe(results => {
      // tslint:disable-next-line:forin
      for (const i in results.results as any) {
        const newPokemon: Pokemon = new Pokemon(1, 'jnj');
        newPokemon.id = +i + 1;
        newPokemon.name = results.results[i].name;
        this.list_pokemons.push(newPokemon);
      }
    });
  }
  getPokemonsSelected(pokemon: Pokemon): void {
    this.pokemonservice
      .getPokemonID(pokemon.id)
      .subscribe(results => {
        this.selectPokemon.id = results.id;
        this.selectPokemon.name = results.name;
        // tslint:disable-next-line:variable-name
        const temp_stats: string[] = [];
        // tslint:disable-next-line:forin
        for (const i in results.stats) {
          // @ts-ignore
          temp_stats.push(results.stats[i].base_stat);
        }
        this.selectPokemon.stats = temp_stats;
      });
  }
}
