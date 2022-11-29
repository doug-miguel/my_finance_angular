import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IRegistration, IUserData, IUserLogin, UserModel } from 'src/app/types/Users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }
  baseUrl: string = `${environment.API}`;
  userData: UserModel = {
    id: '',
    name: '',
    email: '',
  }
  authRouter: boolean = false;

  authAuthenticator(user: IUserLogin): Observable<IUserData> {
    return this.httpClient.post<IUserData>(`${this.baseUrl}/login`, user);
  }

  authRegistration(createUser: IRegistration): Observable<IUserData> {
    return this.httpClient.post<IUserData>(
      `${this.baseUrl}/auth/register`, createUser
    );
  }

  userAuth(user: UserModel) {
    return this.userData = user;
  }

  authorization(auth: boolean): void {
    this.authRouter = auth;
  }
}
