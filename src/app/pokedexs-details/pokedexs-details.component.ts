import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokedexs-details',
  templateUrl: './pokedexs-details.component.html',
  styleUrls: ['./pokedexs-details.component.css']
})
export class PokedexsDetailsComponent implements OnInit {

  private id: String;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get("id");
  }

}
