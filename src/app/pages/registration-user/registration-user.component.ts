import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  registration(): void {
    this.authService.authRegistration(this.user).subscribe(
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
