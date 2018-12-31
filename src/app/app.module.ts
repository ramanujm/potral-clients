import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './service/user.service';
import { CustomMaterialModule } from './material.module';
import { AuthenticationService } from './service/auth.service';

@NgModule({
   declarations: [
      AppComponent,
      AddUserComponent,
      EditUserComponent,
      ListUserComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      CustomMaterialModule
   ],
   providers: [AuthenticationService, UserService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
