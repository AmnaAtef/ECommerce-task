import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  path!:string;
  constructor(
      public auth: AuthService, 
      public router: Router
      ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    this.path = route.routeConfig?.path?.toString()!;
    if (!this.auth.isLoggedIn()) {
      this.auth.logout();
      return false;
    } else {
        return true;
    }
  }
}
