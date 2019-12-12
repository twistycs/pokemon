import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from './../service/pokemons.service';
import { TrainerService } from '../service/trainer.service'
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  public id: String;
  public historyUserName: String;
  listPokemons = [];
  constructor(private router: ActivatedRoute, private pokemonsService: PokemonsService, private trainerService: TrainerService) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get("id");
    this.historyUserName = this.router.snapshot.paramMap.get("userName");
    this.pokemonsService.searchPokemons().subscribe((data: any) => {
      console.log(data);
      this.listPokemons = data;
    });
    console.log(this.listPokemons);
  }

  addPokemonBtn(idPokemon, idUser) {
    const data = {
      "fkUser": idUser,
      "fkPokemon": idPokemon
    }
    this.trainerService.addTrainer(data).subscribe((data: any) => {
      console.log(data);
    })
  }
}
