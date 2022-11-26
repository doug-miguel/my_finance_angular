import { Injectable } from '@angular/core';
import {
  CanActivate,
  RouterStateSnapshot ,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }
  token = window.sessionStorage.getItem('token') || null;

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
      if(this.token) {
        return true
      } else {
        this.router.navigate(['/login'])
        return false
      }
  }
}
