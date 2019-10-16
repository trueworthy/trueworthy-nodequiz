/**
 * Author: Lea Trueworthy
 * Description: Login page
 */
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;
  validEmployeesId: [1007, 1008, 1009, 1010, 1011];
  cookieValue = "unknown";
  employeeId: any

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private http: HttpClient) {
  }/* this.createForm();
   }
   /*createForm() {
     this.form = this.fb.group({
       employeeId: [''],
       
     });
   }

   addData(employeeId) {
     this.ls.addData(employeeId);
   }*/

  ngOnInit() {
    this.form = this.fb.group({
      employeeId: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]

    });
  }

  login() {
    const employeeId = this.form.controls['employeeId'].value;
    console.log(employeeId);
/*function List($scope, $http){
  var insertMethod = 'POST';
  $scope.showLabel = true;

  $scope.save = function(){
    var formData = {
      "employeeId" : this.employeeId,
      
    }
  };
  $scope.List();
}*/
   

    this.http.get('/api/employees/' + employeeId).subscribe(res => {
      if (res) {
        this.cookieService.set('isAuthenticated', 'true', 1);
        this.cookieService.set('employeeId', employeeId, 1)
        this.cookieValue = this.cookieService.get('employeeId')
        //localStorage.setItem('employeeId', JSON.stringify(this.employeeId));
       // JSON.parse(localStorage.getItem('employeeId'));
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = "Invalid, please try again.";
      }
    }
    )
  }
}