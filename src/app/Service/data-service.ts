import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Configuration} from 'jasmine-spec-reporter/built/configuration';
import {findAll} from '@angular/compiler-cli/ngcc/src/utils';
import {Employee} from '../employee';




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


  // tslint:disable-next-line:ban-types
  companySignUp(company: Object): Observable<Object> {
    return this.http.post(`http://localhost:8080/EProduct/companysignup`, company);
  }

  // tslint:disable-next-line:ban-types
  loginUser(login: Object): Observable<Object>{

    return this.http.post('http://localhost:8080/EProduct/loginUser', login);

  }


  // getAll<T>(): Observable<T> {
  //   return this.http.get<T>(this.actionUrl);
  // }
  //
  // getSingle<T>(id: number): Observable<T> {
  //   return this.http.get<T>(this.actionUrl + id);
  // }
  //
  // add<T>(itemName: string): Observable<T> {
  //   const toAdd = { itemName };
  //
  //   return this.http.post<T>(this.actionUrl, toAdd);
  // }
  //
  // update<T>(id: number, itemToUpdate: any): Observable<T> {
  //   return this.http
  //     .put<T>(this.actionUrl + id, itemToUpdate);
  // }
  //
  // delete<T>(id: number): Observable<T> {
  //   return this.http.delete<T>(this.actionUrl + id);
  // }
}


