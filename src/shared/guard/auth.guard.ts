import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { UserService } from '../../shared/services/index';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private user:UserService, private router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   
      if(localStorage.getItem('currentUser')) {
        // logged in
        return true;
      }
      // not logged in
      this.router.navigate(['/login']);
      return false;
  }
}
