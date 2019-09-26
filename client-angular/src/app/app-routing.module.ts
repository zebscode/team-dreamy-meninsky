import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [

{ path: 'login', component: LoginComponent },
{path : '', component : LoginComponent},
{path: 'profile', component: ProfileComponent},
{path: '', component : ProfileComponent},
{path: 'registration', component : RegistrationComponent},
{path: '', component : RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }





