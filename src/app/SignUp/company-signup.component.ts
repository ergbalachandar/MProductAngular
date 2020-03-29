import {Component, OnInit} from '@angular/core';
import {Company} from './company';

import {DataService} from '../Service/data-service';
import {Data, Router} from '@angular/router';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})

export class CompanySignupComponent implements  OnInit{

company: Company = new Company();

  submitted = false;
  ngOnInit() {
  }
  constructor(private dataService: DataService, private router: Router) {


  }
  newCompany(): void {
    this.submitted = false;
    this.company = new Company();
  }

  save(){

     console.log(this.company);

     if (this.company.employeeDetails.lastName != null ) {
    this.dataService.companySignUp(this.company)
      .subscribe(data => console.log(data), error => console.log(error)); }
     this.company = new Company();
     this.gotoList();
  }


  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/login']);
  }
}
