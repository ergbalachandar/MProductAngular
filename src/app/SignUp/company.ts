import {EmployeeDetails} from "./employeeDetails";


export class Company{


  emailId: string;
  companyName:string;
  addressLineOne:string;
  addressLineTwo:string;
  city:string;
  state:string;
  country:string;
  active:number;
  employeeDetails = new EmployeeDetails();


constructor() {



  /*this.employeeDetails.firstName = this.firstName;
  this.employeeDetails.lastName = this.lastName;
  this.employeeDetails.addressLine1 = this.addressLineOne;
  this.employeeDetails.addressLine2 = this.addressLineTwo;
  this.employeeDetails.city=this.city;
  this.employeeDetails.state = this.state;
  this.employeeDetails.country = this.country;
  this.active = 1; */
}
  /*constructor(firstName: string,
  lastName: string,
  emailId: string,
  companyName:string,
  address1:string,
  address2:string,
  city:string,
  state:string,
  country:string,
  active:number,
){
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    this.companyName = companyName;
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
    this.state = state;
    this.country = country;
    this.active = active;

  } */
}
