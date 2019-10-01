import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';






  

import {LoginComponent} from './login/login.component';
//import {ProfileComponent} from './profile/profile.component';//
import {RegisterComponent} from './register/register.component';
  import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [

{ path: 'login', component: LoginComponent },
{path : '', component : LoginComponent},
{path: 'register', component: RegisterComponent},
{path: '', component : RegisterComponent}
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },
  { path: '', redirectTo: "/profile", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }





