import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from '../service/trainer.service';

@Component({
  selector: 'app-pokedexs-details',
  templateUrl: './pokedexs-details.component.html',
  styleUrls: ['./pokedexs-details.component.css']
})
export class PokedexsDetailsComponent implements OnInit {

  private id: String;
  private listTrainer = [];
  constructor(private router: ActivatedRoute, private trainerService: TrainerService) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get("id");
    this.trainerService.searchTrainer(this.id).subscribe((data: any) => {
      this.listTrainer = data;
      console.log(this.listTrainer);
    });
  }

}
