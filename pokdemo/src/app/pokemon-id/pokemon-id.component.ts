import { Component, OnInit , Input} from '@angular/core';
import { Pokemon } from '../pokemon';
@Component({
  selector: 'app-pokemon-id',
  templateUrl: './pokemon-id.component.html',
  styleUrls: ['./pokemon-id.component.css']
})
export class PokemonIdComponent implements OnInit {
  @Input() pokemon: Pokemon;
  constructor() { }

  ngOnInit() {
  }

}
