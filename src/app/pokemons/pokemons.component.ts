import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from './../service/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  public id: String;
  listPokemons = [];
  constructor(private router: ActivatedRoute, private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get("id");
    this.pokemonsService.searchPokemons().subscribe((data: any) => {
      console.log(data);
      this.listPokemons = data;
    });
    console.log(this.listPokemons);
  }

}
