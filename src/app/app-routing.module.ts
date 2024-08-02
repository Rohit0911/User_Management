import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth.guard';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { AdminGuard } from './guards/admin.guard';
import { AddUserComponent } from './add-user/add-user.component';



const routes: Routes = [
  {path:'',redirectTo:'users', pathMatch:'full'},

  {path:'users',component:UsersComponent,
    // canActivate: [AuthGuard],
    
      
      
    
  },
    // Here we have an array so we can include multiple Guards..
  

  {path:'user/:id', component:UserComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AdminGuard],
    children:[
    {path:'address',component:AddressComponent},
    {path:'company',component:CompanyComponent}

  ]},


  {path:'about',component:AboutComponent, children:[
    {path:'location', outlet:'map',component:LocationComponent},
    {path:'feedback', outlet:'feeds',component:FeedbackComponent}
  ]},
  
  {path:'contact',component:ContactComponent},
  // {path:'**',redirectTo:'users',pathMatch:'full'},


  {path:'add-user', component:AddUserComponent},


  
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }