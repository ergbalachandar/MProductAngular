import {Component, OnInit} from '@angular/core';
import { DataService} from './Service/data-service';
import {findAll} from '@angular/compiler-cli/ngcc/src/utils';


import {Employee} from './employee';

/** @title Simple form field */
@Component({

  selector: 'app-form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css'],
})
export class FormFieldOverviewExampleComponent  {


  mArticles: Array<string>;
  // tslint:disable-next-line:ban-types
  mSources: Array<string>;
  name: Employee;
  // tslint:disable-next-line:ban-types
  name1: string;

  public employee: Array<Employee>;

  public employees: Employee;

  constructor(private dataService: DataService){
    console.log('app component constructor called');

  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    // load articles
   // this.dataService.initArticles().subscribe(data => this.mArticles = data['articles']);
    // load news sources

    /*this.dataService.initSources().then(
      employees => {
        this.employees = employees;
      },
      err => {
        console.log(err);
      }
    ); */
    this.dataService.initSources().then(
      name => {this.name = name; },
      err => {
        console.log(err);
      }
    );

      /*this.dataService.initSources().then(function (response) {

        console.log(response);


        console.log(this.name1);

       //this.employee.add(response.name);
       //console.log(this.employee);

      }); */




    // subscribe(data=> this.mSources = data['sources']);

  }

}


