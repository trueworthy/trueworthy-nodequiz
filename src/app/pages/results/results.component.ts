/**
 * Author: Lea Trueworthy
 * Description: employee results from quiz
 */

import { Component, OnInit, Input } from "@angular/core";
import { QuizComponent } from "../quiz/quiz.component";
import { Router } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: "app-quiz-results",
  templateUrl: "../results/results.component.html",
  styleUrls: ["../results/results.component.css"]
})
export class ResultsComponent implements OnInit {
  employeeId: string;

  // resultsDisplay: any;

  constructor(
    private dialogRef: MatDialogRef<QuizComponent>, private router: Router, private cookieService: CookieService, ) {
    this.employeeId = this.cookieService.get('employeeId');
    console.log(this.employeeId + ' results employee')

  }

  @Input() public quizResults;

  ngOnInit() {
    console.log(this.quizResults);
  }
}