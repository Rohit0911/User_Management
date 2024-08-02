import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  username:string="Bruce Wayne"
  
  pageTitle:string="Employee management"
  errorMsg:string ='Loading'

  
  childData:string='';
  parentMethod(data:any){
    this.childData=data
  }

  constructor(private ss:UsersService){

    
  }

  users:any;

  ngOnInit() {
  //  this.users= this.ss.getAll()
    this.ss.getHttpData().subscribe((data)=>{
      this.users=data;
    },
    (error)=>{
      this.errorMsg=error.message;
      
    }
  );
  }

}
