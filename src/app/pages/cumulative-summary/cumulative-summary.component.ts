import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cumulative-summary',
  templateUrl: './cumulative-summary.component.html',
  styleUrls: ['./cumulative-summary.component.css']
})
export class CumulativeSummaryComponent implements OnInit {

  summary: any;
  errorMessage: string;


  constructor(private route: ActivatedRoute, private cookieService: CookieService, private http: HttpClient, private router: Router, private fb: FormBuilder, private location: Location) {


    this.http.get('/api/summary/all').subscribe(res => {
      if (res) {
        return this.summary = res;
      } else {
        return this.errorMessage = "ERROR";
      }

    })

  }

  ngOnInit() {
  }

}
