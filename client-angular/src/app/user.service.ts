import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  // options allows us to flag that we are using credentials, which will allow the jwt cookie on all requests
  // Ammon: withCredentials is for when there is a cookie based authentication, which is not being used in this instance
  options = { withCredentials: true };

  // base url of the express back end
  // Ammon: Java! runs on port 8080
  url: string = 'http://localhost:8080/';

  // boolean value to hold the login status
  loggedIn: boolean = false;

  private authHeader() {
    const token = localStorage.getItem('jtw');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return headers;
  }

  // register a user, must .subscribe() to trigger POST baseurl/signup
  registerUser(user: User): Observable<string> {
    return this.http.post<string>(this.url + 'register', user);
  }

  // login a user, must .subscribe() to trigger POST baseurl/login
  // Ammon: return type any, we're not really returning any data besides the response which is a complex object
  loginUser(user: User): any {
    // Ammon: we set the observe : response property so that we can listen to the response headers
    return this.http.post<string>(this.url + 'login', user, { observe: 'response' });
  }

  // get a user profile, must .subscribe() to trigger GET baseurl/profile
  getProfile(): Observable<User> {
    return this.http.get<User>(this.url + 'profile', {headers: this.authHeader()});
  }

  // logout, must .subscribe() to trigger GET baseurl/logout
  logout(): Observable<string> {
    return this.http.get<string>(this.url + 'logout', this.options);
  }

  // validate a token, must .subscribe() to trigger GET baseurl/validateToken
  validateToken(): Observable<boolean> {
    return this.http.get<boolean>(this.url + 'validateToken', this.options);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'users', this.options);
  }
}
