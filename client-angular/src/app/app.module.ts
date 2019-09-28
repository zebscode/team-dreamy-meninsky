import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { CustomMaterialModule } from './material.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectDisplayComponent } from './project-display/project-display.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

@NgModule({
  declarations: [AppComponent, ProjectDisplayComponent, ProfileComponent, EditprofileComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CustomMaterialModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}




  