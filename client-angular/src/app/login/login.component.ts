import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { UserService } from "../user.service";
import { User } from "../user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  // Ammon: use the user object already defined, we bind to the username and password properties
  user: User = new User();

  ngOnInit() {}

  login(): void {
    this.userService.loginUser(this.user).subscribe(x => {
      // Ammon: logging out the bearer token from the response
      // Ammon: console.log(x.headers.get("Authorization"));
      // Ammon: lets store the returned jwt token in localstorage
      localStorage.setItem("jwt", x.headers.get("Authorization"));

      // localstorage primer
      // localStorage.setItem("key","value");
      // localStorage.getItem("key");
      // localStorage.removeItem("key"); <- this is basically how you would log out
    });
  }
}
