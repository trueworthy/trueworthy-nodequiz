import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'app-quiz-summary-dialog',
  templateUrl: './quiz-summary-dialog.component.html',
  styleUrls: ['./quiz-summary-dialog.component.css']
})
export class QuizSummaryDialogComponent implements OnInit {

  quizSummary: any;
  correctAnswers: any;
  selectedAnswers: any;
  employeeId: string;

  constructor(private dialogRef: MatDialogRef<QuizSummaryDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) data, private cookieService: CookieService) {
    this.quizSummary = data.quizSummary;
    console.log(data);
    this.correctAnswers = this.quizSummary.correctAnswers;
    this.selectedAnswers = this.quizSummary.selectedAnswers;
    this.employeeId = this.cookieService.get('employeeId');
  }

  ngOnInit() {
  }

}
