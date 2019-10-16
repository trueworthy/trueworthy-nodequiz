/**
 * Author: Lea Trueworthy
 * Description: Quiz page guide
 */

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from './quiz.service';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { error } from 'util';
import * as moment from 'moment'
import { ResultsComponent } from 'src/app/shared';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizId: string;
  quizzes: any;
  quiz: any;
  questions: any;
  //quizName: string;
  answers: string;
  quizNameFromUrl: string;
  quizResults: any;
  q: any = [];
  qs: any = [];
  cumulativeSummary: {};
  quizSummary: {};
  employeeId: number;


  constructor(private route: ActivatedRoute, private cookieService: CookieService, private location: Location, private dialog: MatDialog, private http: HttpClient, private quizService: QuizService, private router: Router) {
    this.quizId = (this.route.snapshot.paramMap.get('id'))
    this.quiz = parseInt(this.route.snapshot.paramMap.get("id"))
    this.employeeId = parseInt(this.cookieService.get('employeeId'))
    //this.cookieValue = this.cookieService.get('employeeId')
    console.log(this.employeeId + " employee number")



    //this.employeeId = this.cookieService.get('employeeId');

    //this.employeeId = parseInt(this.cookieService.get('employeeId'), 10);

    this.quizService.getQuizzes().subscribe(res => {
      this.quizzes = res;
      this.questions = this.quizzes.filter(q => q.name === this.quizId)[0].questions;
      //this.quizNameFromUrl = route.snapshot.paramMap.get('id');  quizName: {{this.quizNameFromUrl}}

      console.log(this.quizzes);
    })
  }
  ngOnInit() {

  }
  onSubmit(form) {

    // score calculator
    const totalPossiblePoints = 100;
    this.quiz = this.quizzes.filter(q => q.id === this.quizId);
    const questionCount = this.quiz.questions;
    let pointsPerQusetions = totalPossiblePoints / questionCount;
    let quizScore = 0;

    //determining user's selction
    let correctRunningTotal = 0;
    let selectedAnswerIds = [];
    let selectedisCorrectProp = [];
    console.log("Q: " + this.questions);

    // FORM

    this.quizResults = form;
    this.quizResults['employeeId'] = this.employeeId;
    this.quizResults['quizId'] = this.quizId;
    console.log('form ' + form);


    // save quiz results to database
    this.http.post('/api/results/', {
      employeeId: this.employeeId,
      quizId: this.quizId,
      results: JSON.stringify(form)
    }).subscribe(res => {
    }, err => {
      console.log("POST error", err);

    }, () => {
      console.log("POST complete");
      for (const prop in this.quizResults) {
        if (this.quizResults.hasOwnProperty(prop)) {
          if (prop !== 'employeeId' && prop !== 'quizId') {
            selectedAnswerIds.push(this.quizResults[prop].split(';')[0]);
            selectedisCorrectProp.push(this.quizResults[prop].split(';')[1]);
          }
        }

      }
    });
    const dialogRef = this.dialog.open(ResultsComponent, {
      data: {

      }
    })

    /* this.quizResults = form;
     this.quizResults['employeeId'] = this.employeeId; // add the employeeId to the quizResults ojbect
     console.table(this.quizResults);  //show quiz results
     alert('Employee: ' + this.employeeId + '\nQuiz: ' + this.quiz)
 
     localStorage.setItem('employeeId', '');
   } }
   catch (error) {
     this.http = error;
   }
 
   }
   
    onSubmit() {
     alert('Employee: ' + this.employeeId + '\nQuiz: ' + this.quizId)
     }*/
  }
  goBack() {
    this.location.back();
  }
}