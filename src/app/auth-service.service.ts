import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {tap,delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserloggedIn : boolean=false;
  login(userName:string,password:string):Observable<any>{
    console.log(userName);
    console.log(password);


    this.isUserloggedIn=userName=='admin' && password=='admin123';
    localStorage.setItem('isUserLoggedIn', this.isUserloggedIn ? "true":"false");


    return of(this.isUserloggedIn).pipe(
      delay(1000),
      tap(val=>{
        console.log("Is user logged in "+val);
        
      })
    )


    
    
  }

  isLogged(){
    // return false;
    return true;
  }

  

  logout():void{
    this.isUserloggedIn=false;
    localStorage.removeItem('isUserLoggedIn');
  }
  constructor() { }
}
