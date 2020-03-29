import {CompanySignupComponent} from '../SignUp/company-signup.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../Login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'company', pathMatch: 'full' },
  { path: 'companysignup', component: CompanySignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employeeList', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
