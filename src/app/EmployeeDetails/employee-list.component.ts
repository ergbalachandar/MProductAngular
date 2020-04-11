import {Component, EventEmitter, Injectable, Input, OnInit, Output, ViewChild} from '@angular/core';
import {EmployeeDetailsResponseDto} from './employeeDetailsResponseDto';
import {Observable, Subscription} from 'rxjs';
import {DataService} from '../Service/data-service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginResponse} from '../Login/loginResponse';
import {RetrieveEmployeeListRequest} from './retrieveEmployeeListRequest';
import {EmployeeDataResponseDto} from './employeeDataResponseDto';
import {LoginComponent} from '../Login/login.component';
import {map} from 'rxjs/operators';
import {StorageService} from '../Service/storage-service';



@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})

@Injectable({
    providedIn: 'root'
})
export class EmployeeListComponent implements  OnInit {


    loginResponseValue: LoginResponse = new LoginResponse();

    employees: EmployeeDetailsResponseDto[];
    displayedColumns: string[] = ['FirstName', 'LastName', 'DateOfBirth', 'UserId'];
    retrieveEmployeeListRequest: RetrieveEmployeeListRequest = new RetrieveEmployeeListRequest();

    constructor(private dataService: DataService,
                private router: Router, private storageService: StorageService) {

    }

    ngOnInit(){
        this.loginResponseValue = this.storageService.getLoginResponse();
        this.reloadData( this.loginResponseValue);
    }


    reloadData(loginResponse: LoginResponse) {
        this.retrieveEmployeeListRequest.userName = loginResponse.userName;
        this.retrieveEmployeeListRequest.companyId = loginResponse.companyId;
        this.retrieveEmployeeListRequest.password = loginResponse.password;

        this.dataService.employeeList(this.retrieveEmployeeListRequest).then(
            (result) => {this.employees = result.employeeDetailsResponseDto;},
           err => {
               console.log(err);
           }
       );
    }


}
