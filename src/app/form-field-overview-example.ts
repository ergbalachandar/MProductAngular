import {Component, OnInit} from '@angular/core';
import { DataService} from "./Service/data-service";
import {findAll} from "@angular/compiler-cli/ngcc/src/utils";


import{Employee} from "./employee";

/** @title Simple form field */
@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css'],
})
export class FormFieldOverviewExample  {

  mArticles:Array<String>;
  mSources:Array<String>;
  name: Employee;
  name1 : String;

  public employee:Array<Employee>;

  public employees : Employee;

  constructor(private dataService:DataService){
    console.log('app component constructor called');

  }

  ngOnInit() {
    //load articles
   // this.dataService.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources

    /*this.dataService.initSources().then(
      employees => {
        this.employees = employees;
      },
      err => {
        console.log(err);
      }
    ); */
    this.dataService.initSources().then(
      name => {this.name = name;},
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




    //subscribe(data=> this.mSources = data['sources']);

  }

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
