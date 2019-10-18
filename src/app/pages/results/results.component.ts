/**
 * Author: Lea Trueworthy
 * Description: employee results from quiz
 */

import { Component, OnInit, Inject } from "@angular/core";
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
  quizSummary: any;
  correctAnswers: any;
  selectedAnswers: any;
  employeeId: string;

  constructor(private dialogRef: MatDialogRef<ResultsComponent>, @Inject(MAT_DIALOG_DATA) data, private cookieService: CookieService) {
    this.quizSummary = data.quizSummary;
    console.log(data);
    this.correctAnswers = this.quizSummary.correctAnswers;
    this.selectedAnswers = this.quizSummary.selectedAnswers;
    this.employeeId = this.cookieService.get('employeeId');
  }

  ngOnInit() {
  }

}