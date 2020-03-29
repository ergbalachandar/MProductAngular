import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DataService} from '../Service/data-service';
import {Router} from '@angular/router';
import {Login} from './login';


/** @title Form field with error messages */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  login: Login = new Login();
  submitted = false;


  constructor(private dataService: DataService, private router: Router) {


  }

  loginUser(){
    this.dataService.loginUser(this.login)
        .subscribe(data => console.log(data), error => console.log(error));

    this.login = new Login();
    this.gotoList();
}

  onSubmit() {
    this.submitted = true;
    this.loginUser();
  }

  gotoList() {
    this.router.navigate(['/employeeList']);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }




}
