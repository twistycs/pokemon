import { Component, OnInit } from '@angular/core'
import { UserService } from '../service/user.service'

@Component({
  selector: 'app-pokedexs',
  templateUrl: './pokedexs.component.html',
  styleUrls: ['./pokedexs.component.css']
})
export class PokedexsComponent implements OnInit {

  constructor(private userService: UserService) { }

  userList = [];
  ngOnInit() {
    this.userService.searchUser().subscribe((data: any) => {
      if (data.status == 200) {
        this.userList = data.listUser;
        //console.log(userList);
      }


    })
  }

}
