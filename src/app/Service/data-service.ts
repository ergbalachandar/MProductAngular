import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Employee} from '../employee';
import {LoginResponse} from '../Login/loginResponse';
import {RetrieveEmployeeListRequest} from '../EmployeeDetails/retrieveEmployeeListRequest';
import {EmployeeDataResponseDto} from '../EmployeeDetails/employeeDataResponseDto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private actionUrl: string;


  constructor(private http: HttpClient) {
    this.actionUrl = `http://localhost:8080/EProduct/success`;
  }

  initSources(): Promise <Employee> {

    return this.http.get(this.actionUrl).toPromise()
      .then(response => response as Employee);
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('userName');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('userName');
  }

  // tslint:disable-next-line:ban-types
  companySignUp(company: Object): Observable<Object> {
    return this.http.post(`http://localhost:8080/EProduct/companysignup`, company);
  }


  // tslint:disable-next-line:ban-types
  loginUser(login: Object): Promise<LoginResponse>{
    return this.http.post('http://localhost:8080/EProduct/loginUser', login).toPromise()
        .then(response => response as LoginResponse);
  }

  employeeList(retrieveEmployeeListRequest: RetrieveEmployeeListRequest): Promise<EmployeeDataResponseDto>{
      return this.http.post(`http://localhost:8080/EProduct/retrieveEmployeeList`, retrieveEmployeeListRequest).toPromise()
          .then(response => response as EmployeeDataResponseDto);
    }
}


