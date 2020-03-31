import {AppComponent} from './app.component';
import {CompanySignupComponent} from '../SignUp/company-signup.component';
import {FormFieldOverviewExampleComponent} from '../form-field-overview-example';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app.routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {DemoMaterialModule } from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from '../Login/login.component';
import {MatNativeDateModule} from '@angular/material/core';
import {EmployeeListComponent} from '../EmployeeDetails/employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanySignupComponent,
    FormFieldOverviewExampleComponent,
    LoginComponent,
    EmployeeListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    MatNativeDateModule


  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
