import {Component, Injectable, OnInit} from '@angular/core';
import {EmployeeDetailsResponseDto} from './employeeDetailsResponseDto';
import {Observable, Subscription} from 'rxjs';
import {DataService} from '../Service/data-service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginResponse} from '../Login/loginResponse';
import {RetrieveEmployeeListRequest} from './retrieveEmployeeListRequest';
import {EmployeeDataResponseDto} from './employeeDataResponseDto';


@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})

@Injectable({
    providedIn: 'root'
})
export class EmployeeListComponent implements  OnInit {

   // employeeDetailsResponseDto: EmployeeDetailsResponseDto = new EmployeeDetailsResponseDto();
    loginResponseValue: LoginResponse = new LoginResponse();
    // tslint:disable-next-line:align
    employees: EmployeeDetailsResponseDto[];
    employee: EmployeeDetailsResponseDto;
    employeeDataResponseDto: EmployeeDataResponseDto;
    displayedColumns: string[] = ['FirstName', 'LastName', 'DateOfBirth', 'UserId'];

    retrieveEmployeeListRequest: RetrieveEmployeeListRequest = new RetrieveEmployeeListRequest();
    private subscription: Subscription;


    constructor(private dataService: DataService, private activatedRouter: ActivatedRoute,
                private router: Router) {
        this.subscription = activatedRouter.params.subscribe(
           (param: any) => this.loginResponseValue = JSON.parse(param.loginResponse)
        );
    }

    ngOnInit(){
        console.log(this.loginResponseValue);
        this.reloadData(this.loginResponseValue);
    }

    reloadData(loginResponse: LoginResponse) {
        this.retrieveEmployeeListRequest.userName = loginResponse.userName;
        this.retrieveEmployeeListRequest.companyId = loginResponse.companyId;
        this.retrieveEmployeeListRequest.password = 'Shyamgops@1';

        this.dataService.employeeList(this.retrieveEmployeeListRequest).then(
            (result) => {this.employees = result.employeeDetailsResponseDto; console.log(this.employees);  },
           err => {
               console.log(err);
           }
       );


    }

    // tslint:disable-next-line:use-lifecycle-interface
    ngOnDestroy() { // here we unsubscribe to the observable
        this.subscription.unsubscribe();
    }

}
