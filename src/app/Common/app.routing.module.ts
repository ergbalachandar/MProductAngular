import {CompanySignupComponent} from '../SignUp/company-signup.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../Login/login.component';
import {EmployeeListComponent} from '../EmployeeDetails/employee-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'company', pathMatch: 'full' },
  { path: 'companySignUp', component: CompanySignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employeeList/:loginResponse', component: EmployeeListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
