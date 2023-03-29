import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './service/login.service';

@Injectable({
  providedIn: 'root'
})
export class ViewtaskGuard implements CanActivate {
  constructor(private loginservice:LoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginservice.isloggedin)
      {
        return true;
      }
      else
      {
        this.router.navigateByUrl("login");
        return false;
      }
  }
  
}
