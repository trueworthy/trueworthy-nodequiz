/**
 * Author: Lea Trueworthy
 * Description: app.component
 */

 import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './shared/guards/auth.guard';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = "Trueworthy NodeQuiz";
  constructor(private router: Router, private cookieService: CookieService, private authGuard: AuthGuard) {
    let test = this.cookieService.get('isAuthenticated');
    console.log(test);
    if (!test) {
      router.navigate(['/session/login']);
    } else {
      router.navigate(["/dashboard/"]);
    }
  }
}