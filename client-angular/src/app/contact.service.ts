import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  [x: string]: any;
  Contact: Contact[];

  constructor(private http: HttpClient) { }

  // options allows us to flag that we are using credentials, which will allow the jwt cookie on all requests
  options = { withCredentials: true };

  // base url of the express back end
  url: string = "http://localhost:3000/users/";

  getContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url + "/contact/:id/contact/", this.options);
  }
}
