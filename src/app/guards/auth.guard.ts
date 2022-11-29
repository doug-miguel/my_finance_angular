import { Injectable } from '@angular/core';
import {
  CanActivate,
  RouterStateSnapshot ,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private AuthService: AuthService
  ) { }

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
      if(
        this.AuthService.authRouter === true ||
        window.sessionStorage.getItem("token")
      ) {
        return true
      } else {
        this.router.navigate(['/login'])
        return false
      }
  }
}
