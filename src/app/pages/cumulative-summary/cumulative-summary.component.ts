/**
 * Author: Lea Trueworthy
 * Description: summary page
 */

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

  quizSummary: any;
  errorMessage: string;


  constructor(private http: HttpClient) {

  }

  ngOnInit() {

    this.http.get('/api/summary/').subscribe(res => {
      if (res) {
        return this.quizSummary = res;
      } else {
        return this.errorMessage = "ERROR";
      }

    });
  }

}
