import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserModel } from 'src/app/types/Users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private AuthService: AuthService) {}
  ngOnInit() {
    this.user = this.AuthService.userData
  }
  user!: UserModel;
}
