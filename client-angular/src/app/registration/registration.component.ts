import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  register(): void {
    this.userService.registerUser(this.user).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  ngOnInit() {
  }

}
