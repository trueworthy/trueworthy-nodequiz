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

  cumulativeSummary: any;
  displayedColumns: string[] = ['employeeId', 'quizName', 'dateTaken', 'score'];

  constructor(private http: HttpClient) {
    this.http.get('/api/cumulative-summary').subscribe(res => {
      this.cumulativeSummary = res;
    });
  }

  ngOnInit() {
  }

}
