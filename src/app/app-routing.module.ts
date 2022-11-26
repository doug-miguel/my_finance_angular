import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CreateTableFixendComponent } from './pages/create-table-fixend/create-table-fixend.component';
import { CreateTableVariableComponent } from './pages/create-table-variable/create-table-variable.component';
import { DeleteTableFixendComponent } from './pages/delete-table-fixend/delete-table-fixend.component';
import { DeleteTableVariableComponent } from './pages/delete-table-variable/delete-table-variable.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationUserComponent } from './pages/registration-user/registration-user.component';
import { UpdateTableFixendComponent } from './pages/update-table-fixend/update-table-fixend.component';
import { UpdateTableVariableComponent } from './pages/update-table-variable/update-table-variable.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path: "tabelafixa",
    component: CreateTableFixendComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path: "tabelafixa/update/id",
    component: UpdateTableFixendComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path: "tabelafixa/delete/id",
    component: DeleteTableFixendComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path: "tabelavariavel",
    component: CreateTableVariableComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path: "tabelavariavel/update/id",
    component: UpdateTableVariableComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path: "tabelavariavel/delete/id",
    component: DeleteTableVariableComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path: "edite",
    component: EditProfileComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "registration",
    component: RegistrationUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
