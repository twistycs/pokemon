import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from '../service/trainer.service';
import { LogInService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedexs-details',
  templateUrl: './pokedexs-details.component.html',
  styleUrls: ['./pokedexs-details.component.css']
})
export class PokedexsDetailsComponent implements OnInit {

  private id: String;
  private historyUserName: String = "";
  private listTrainer = [];
  constructor(private router: ActivatedRoute, private loginService: LogInService, private trainerService: TrainerService, private routers: Router) { }

  userName = "";
  ngOnInit() {
    this.loginService.getUserName().subscribe(
      data => { console.log(data); this.userName = data.toString() },
      err => this.routers.navigate(['/'])
    )
    this.id = this.router.snapshot.paramMap.get("id");
    this.historyUserName = this.router.snapshot.paramMap.get("userName");
    this.trainerService.searchTrainer(this.id).subscribe((data: any) => {
      this.listTrainer = data;
      console.log(this.listTrainer);
    });
  }

}
