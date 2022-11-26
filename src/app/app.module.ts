import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { SectionComponent } from './components/section/section.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { CreateTableVariableComponent } from './pages/create-table-variable/create-table-variable.component';
import { CreateTableFixendComponent } from './pages/create-table-fixend/create-table-fixend.component';
import { UpdateTableFixendComponent } from './pages/update-table-fixend/update-table-fixend.component';
import { UpdateTableVariableComponent } from './pages/update-table-variable/update-table-variable.component';
import { DeleteTableVariableComponent } from './pages/delete-table-variable/delete-table-variable.component';
import { DeleteTableFixendComponent } from './pages/delete-table-fixend/delete-table-fixend.component';
import { RegistrationUserComponent } from './pages/registration-user/registration-user.component';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LogoComponent } from './assets/logo/logo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    LoginComponent,
    HomeComponent,
    EditProfileComponent,
    CreateTableVariableComponent,
    CreateTableFixendComponent,
    UpdateTableFixendComponent,
    UpdateTableVariableComponent,
    DeleteTableVariableComponent,
    DeleteTableFixendComponent,
    RegistrationUserComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
