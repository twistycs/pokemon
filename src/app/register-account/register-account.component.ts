import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {
  registerForm: FormGroup;
  submiited = false;
  registered = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit() {
    this.submiited = true;
    if (this.registerForm.invalid) {
      console.log("required !!!!");
      return;
    }
    else {
      console.log("not required !!!!");
      this.registered = true;
    }
  }

  invalidUserName() {
    return (this.submiited && this.registerForm.controls.userName.value == "");
  }

  invalidPassword() {
    return (this.submiited && this.registerForm.controls.password.value == "");
  }

  invalidConfirmPassword() {
    return (this.submiited && this.registerForm.controls.confirmPassword.value == "");
  }

  checkConfirmPassword() {
    return (this.submiited && this.registerForm.controls.confirmPassword.errors);
  }

  MustMatch(fieldName: string, matchField: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[fieldName];
      const matchControl = formGroup.controls[matchField];

      if (matchControl.errors) {
        return;
      }

      if (control.value !== matchControl.value) {
        matchControl.setErrors({ mustMatch: true });
      } else {
        matchControl.setErrors(null);
      }
    }
  }
}
