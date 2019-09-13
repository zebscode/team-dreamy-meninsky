import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CustomMaterialModule } from '../app/material.module';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectDisplayComponent } from './project-display/project-display.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [AppComponent, ProjectDisplayComponent, LoginComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CustomMaterialModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
