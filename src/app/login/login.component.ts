import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  submiited = false;
  registered = false;
  constructor(private formBuilder: FormBuilder) { }

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
