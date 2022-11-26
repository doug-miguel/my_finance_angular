import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
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
    this.AuthService.authAuthenticator(this.user).pipe(
      finalize(() => this.loading = false)
    ).subscribe(
      resultado => {
        this.AuthService.userAuth(resultado.userModel);
        window.sessionStorage.setItem('token', resultado.token)
        this.router.navigate(["/"]);
      },
      erro => {
        this.error = erro.error.message
        console.log(erro);
      }
    )
  }
}
