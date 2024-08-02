import { Component, OnInit } from '@angular/core';
import { UsersService } from './Services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ss:UsersService){}
  
  username:string="Bruce Wayne"
  pageTitle:string="pipes in angular"
  errorMsg:string ='Loading'

  
  childData:string='';
  parentMethod(data:any){
    this.childData=data
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










