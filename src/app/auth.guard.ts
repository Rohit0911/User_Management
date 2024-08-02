import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './Services/users.service';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'

})

export class AuthGuard implements CanActivate {
  constructor(private as:AuthService){}

  canActivate(){
      if(this.as.isLogged()){
        return true;
      }else
      {
        alert('Permission Denied ...')
        return false;
      }
  }
 
  
}
