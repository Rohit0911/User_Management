import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AgePipe } from './pipes/age.pipe';
import { UsersService } from './Services/users.service';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'
import {RouterModule, Routes} from '@angular/router';
import { UserComponent } from './user/user.component';
import { LocationComponent } from './location/location.component';
import { FeedbackComponent } from './feedback/feedback.component'
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth-service.service';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { AdminGuard } from './guards/admin.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { FormControl, FormsModule } from '@angular/forms';


const route:Routes=[]

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AgePipe,
    UsersComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    LocationComponent,
    FeedbackComponent,
    AddressComponent,
    CompanyComponent,
    AddUserComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule,

  ],

  providers: [UsersService, AuthGuard,AuthService,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



// Bootstrap Modal:
// Impure Pipe : To remove special character
// Ngb bootstrap Modal service: giving input and how to catch the output...
// Development and production mode in angular.
// Angular Build 
// How angular starts and about entry point.
// NgAfter view init









