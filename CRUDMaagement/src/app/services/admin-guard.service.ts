import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  roleId!:string;

  constructor(private router:Router,
     private jwtHelper: JwtHelperService) { }
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const token = localStorage.getItem("jwt");

      this.roleId=JSON.parse(
        window.atob(
          localStorage.getItem("jwt")!
          .split('.')[1]))
          ["role"];
  
      if (token && this.roleId=="Admin" && !this.jwtHelper.isTokenExpired(token)){
        return true;
      }
  
      this.router.navigate(["Unauthrized"]);
      return false;
    }
}
