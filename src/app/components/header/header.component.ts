import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserModel } from 'src/app/types/Users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit() {
    const userModalString = window.sessionStorage.getItem("userModel")
    const userModal = JSON.parse(userModalString as any);
    this.user = userModal;
    this.name = userModal.name.substr(0, 1)
  }
  user!: UserModel;
  name!: String
}
