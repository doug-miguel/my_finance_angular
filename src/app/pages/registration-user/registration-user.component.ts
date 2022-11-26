import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss']
})
export class RegistrationUserComponent {
  constructor(private authService: AuthService, private router: Router) {

  }
  user = {
    name: '',
    email: '',
    password: ''
  };
  error: string = '';
  loading: boolean = false;

  registration(): void {
    this.loading = true;
    this.authService.authRegistration(this.user).pipe(
      finalize(() => this.loading = false)
      ).subscribe(
      () => {
        this.router.navigate(["/login"])
      },
      erro => {
        this.error = erro.error.message
        console.log(erro);
      }
    )
  }
}
