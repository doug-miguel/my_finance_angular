import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

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
  error!: string;
  loading: boolean = false;

  login() {
    this.loading = true;
    this.AuthService.authAuthenticator(this.user).subscribe(
      resultado => {
        if(resultado.token) {
          window.sessionStorage.setItem("token", resultado.token)
          window.sessionStorage.setItem("userModel", JSON.stringify(resultado.userModel))
          this.AuthService.userAuth(resultado.userModel);
          this.AuthService.authorization(true);
          this.router.navigate(["/"]);
        }
      },
      erro => {
        this.error = erro.error.message
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    )
  }
}
