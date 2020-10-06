import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './pokemons.service'
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
  
@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemons/list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
  
    pokemons: Pokemon[] = null;
  
    constructor(private router: Router, private pokemonsService : PokemonsService) { }
  

    ngOnInit(): void {
        this.getPokemons();
    }

    getPokemons() : void {
        this.pokemonsService.getPokemons()
        .subscribe(pokemons => this.pokemons = pokemons);
    }
  
    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné ' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
  
}