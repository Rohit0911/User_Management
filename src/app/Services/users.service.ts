import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError,catchError } from 'rxjs';
// import "rxjs/add/operators/catch"
// import "rxjs/add/operators/throw"
// import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http:HttpClient) { }

  getHttpData(){
    // In angular an Ansync call like http call returns an Observable
    // And Observable are Lazy in nature so if we want to get any Observable then we need to subsribe to that observable
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    .pipe(
      catchError((error)=>{
        console.log('Error occcured :', error);
        return throwError(error)
        
      })
    );
  }

  //Suppose the url is incorrect then we get 404 error.
  // So we need to catch the error
  getUser(id:number){
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);

  }

  isLoggedIn(){
    return true;
  }
}