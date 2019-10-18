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
import { ResultsComponent } from '../results/results.component';

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


  constructor(private route: ActivatedRoute, private cookieService: CookieService, private location: Location, 
    private dialog: MatDialog, private http: HttpClient, private quizService: QuizService, private router: Router) {
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

  goBack() {
    this.location.back();
  }
  onSubmit(form) {

    // score calculator
    const totalPossiblePoints = 100;
    this.quiz = this.quizzes.filter(q => q.id === this.quizId);
    const questionCount = this.quiz.questions;
    let pointsPerQuestions = totalPossiblePoints / questionCount;
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
    //console.log('form ' + form);


    // save quiz results to database
    this.http.post('/api/result/', {
      employeeId: this.employeeId,
      quizId: this.quizId,
      quizResults: JSON.stringify(form)
    }).subscribe( res => {

    },
      err => {
      console.log(err);
    }, () => {

      for (const prop in this.quizResults) {
        if (this.quizResults.hasOwnProperty(prop)) {

          /**
           * Once we are inside the object's properties we need to extract the properties not matching quizId and employeeId
           */
          if (prop !== 'employeeId' && prop !== 'quizId') {
            selectedAnswerIds.push(this.quizResults[prop].split(';')[0]);
            selectedisCorrectProp.push(this.quizResults[prop].split(';')[1]);
          }
        }
      }

      for (let x = 0; x < selectedisCorrectProp.length; x++) {
        if (selectedisCorrectProp[x] === 'true') {
          correctRunningTotal += 1;
        }
      }
      quizScore = correctRunningTotal * pointsPerQuestions;

      let correctAnswers = [];
      let selectedAnswers = [];

      /**
       * Loop over the quiz.questions to get the selected answer and correct answer for each question
       */
      for (let question of this.quiz.questions) {
        for (let answer of question.answers) {
          if (answer.isCorrect) {
            correctAnswers.push({
              questionId: question.id,
              questionText: question.text,
              answerId: answer.id,
              text: answer.text
            });
          }

          if (selectedAnswerIds.includes(answer.id)) {
            console.log('Includes statement');
            console.log(`Answer: ${answer.text}`);
            selectedAnswers.push({
              questionId: question.id,
              questionText: question.text,
              answerId: answer.id,
              text: answer.text
            });
          }
        }
      }

      /**
       * 5. Prepare the summary object for transport
       */
      this.quizSummary['quizId'] = this.quizId;
      this.quizSummary['quizName'] = this.quiz.name;
      this.quizSummary['score'] = quizScore;
      this.quizSummary['correctAnswers'] = correctAnswers;
      this.quizSummary['selectedAnswers'] = selectedAnswers;

      /**
       * 6. Create the cumulative summary object and insert into the database
       */
      this.cumulativeSummary = {
        employeeId: this.employeeId,
        quizId: this.quizId,
        quizName: this.quiz.name,
        dateTaken: moment().format('MM/DD/YYYY'),
        score: (correctRunningTotal * pointsPerQuestions)
      };

      this.http.post('/api/summary/', {
        employeeId: this.cumulativeSummary['employeeId'],
        quizId: this.cumulativeSummary['quizId'],
        quizName: this.cumulativeSummary['quizName'],
        dateTaken: this.cumulativeSummary['dateTaken'],
        score: this.cumulativeSummary['score']
      }).subscribe( r => {
        
      },
        err => {
        console.log(err);
      }, () => {
        /**
         * 7. Open the dialog and pass the summary details to over
         */
        const dialogRef = this.dialog.open(ResultsComponent, {
          data: {
            quizSummary: this.quizSummary
          },
          disableClose: true,
          width: '800px'
        });

        dialogRef.afterClosed().subscribe(quizResults => {
          if (quizResults === 'confirm') {
            this.router.navigate(['/'])
          }
        });
      });
    });
  }
}


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