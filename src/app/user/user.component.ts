import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../Services/users.service';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private acro :ActivatedRoute, private userv:UsersService) { }

  user:any;
  ngOnInit() {
    let id=this.acro.snapshot.params['id'];
    
    this.userv.getUser(id).subscribe(u=>{
      console.log(u);
      this.user=u;
    })
  }


}




