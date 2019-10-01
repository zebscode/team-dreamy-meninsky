import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user: User = new User();

    constructor(private userService: UserService) {}

    ngOnInit() {

      this.userService.getProfile().subscribe(user => (this.user = user));
    }
  }


