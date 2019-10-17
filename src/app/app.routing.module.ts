import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: '', component: LoginComponent},

  /* Otherwise */
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
