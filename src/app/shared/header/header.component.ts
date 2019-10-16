/**
 * Author: Lea Trueworthy
 * Description: nav
 */
 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private cookie: CookieService) { }
  
  logout() {
    console.log('You have logged out');
    this.cookie.delete('isAuthenticated');
    this.router.navigate(["/session/login"]);
  }
  ngOnInit() {
  }
  navHome() {
    this.router.navigate(["/dashboard"]);
  }
}