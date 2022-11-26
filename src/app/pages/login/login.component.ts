import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserModel } from 'src/app/types/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private AuthService: AuthService, private router: Router) {}
  user = {
    email: '',
    password: ''
  }
  error!: string

  login() {
    this.AuthService.authAuthenticator(this.user).subscribe(
      resultado => {
        window.sessionStorage.setItem('token', resultado.token)
        this.AuthService.userAuth(resultado.userModel);
        this.router.navigate(["/"]);
      },
      erro => {
        this.error = erro.error.message
        console.log(erro);
      },
    )
  }
}
