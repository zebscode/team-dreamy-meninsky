import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../app/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Lyfe Lynes';
  token: string = '';
  user: User = new User()
  error: string;
  base_url: string = "http://localhost:8080/";
  data: any;
  
  constructor(private http: HttpClient) { }

  onLogin() {
    this.http.post<any>(this.base_url + 'login', { username: this.user.username, password: this.user.password }, { observe: 'response' })
    .subscribe(
      res => this.token = res.headers.get("Authorization"),
      error => this.error = "Unable to login with username and password.");
    }
  onProfile() {
      this.http.post<any>(this.base_url + 'profile', { username: this.user.username, password: this.user.password }, { observe: 'response' })
      .subscribe(
        res => this.token = res.headers.get("Authorization"),
        error => this.error = "Welcome to my Profile Page");
      }
    getValues() {
      let headers: HttpHeaders = new HttpHeaders();
      headers.append("Authorization", this.token);
      this.http.get(this.base_url + "api/values", { headers: headers })
        .subscribe(res => this.data = res, error => this.error = "Logged .");
    }
}
