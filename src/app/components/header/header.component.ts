import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserModel } from 'src/app/types/Users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private AuthService: AuthService) {}
  ngOnInit() {
    this.user = this.AuthService.userData
  }
  user!: UserModel;
}
