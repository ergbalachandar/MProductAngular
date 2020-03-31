import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DataService} from '../Service/data-service';
import {Router} from '@angular/router';
import {Login} from './login';
import {LoginResponse} from './loginResponse';
import {Observable} from 'rxjs';
import {EmployeeListComponent} from '../EmployeeDetails/employee-list.component';
import {EmployeeDetailsResponseDto} from '../EmployeeDetails/employeeDetailsResponseDto';
import {RetrieveEmployeeListRequest} from '../EmployeeDetails/retrieveEmployeeListRequest';


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
  loginResponse: LoginResponse = new LoginResponse();

  constructor(private dataService: DataService, private router: Router, private employeeListComponent: EmployeeListComponent) {
  }

  loginUser(){
      console.log(this.login);
      this.dataService.loginUser(this.login).then(
          (result) => {this.loginResponse = result; console.log(this.loginResponse); this.gotoList(this.loginResponse); },
          err => {
              console.log(err);
          }
      );
  }
  onSubmit() {
    this.submitted = true;
    this.loginUser();
  }

  gotoList(loginResponse: LoginResponse) {
      console.log(JSON.stringify(loginResponse));

      this.router.navigate(['/employeeList', JSON.stringify(this.loginResponse)]);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
