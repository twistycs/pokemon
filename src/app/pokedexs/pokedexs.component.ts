import { Component, OnInit } from '@angular/core'
import { UserService } from '../service/user.service'
import { LogInService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedexs',
  templateUrl: './pokedexs.component.html',
  styleUrls: ['./pokedexs.component.css']
})
export class PokedexsComponent implements OnInit {

  constructor(private userService: UserService, private loginService: LogInService, private router: Router) { }

  userName = '';
  userList = [];
  ngOnInit() {
    this.loginService.getUserName().subscribe(
      data => { console.log(data); this.userName = data.toString() },
      err => this.router.navigate(['/'])
    )
    this.userService.searchUser().subscribe((data: any) => {
      if (data.status == 200) {
        this.userList = data.listUser;
        //console.log(userList);
      }
    })
  }
}
