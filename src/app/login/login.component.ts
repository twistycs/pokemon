import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LogInService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  submiited = false;
  registered = false;
  constructor(private formBuilder: FormBuilder, private logInService: LogInService, private router: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submiited = true;
    if (this.userForm.invalid) {

      console.log("required !!!!");
      return;
    }
    else {
      console.log("not required !!!!");
      console.log(this.userForm.value);
      this.logInService.login(this.userForm.value).subscribe((data: any) => {
        console.log(data);
        if (data.status == 200) {
          this.router.navigate(['/pokedexs']);
        }
      });
      this.registered = true;
    }
  }

  invalidUserName() {
    return (this.submiited && this.userForm.controls.userName.value == "");
  }

  invalidPassword() {
    return (this.submiited && this.userForm.controls.password.value == "");
  }

}
