
/**
 * Author: Lea Trueworthy
 * Description: routing for quiz page to questions
 */

 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class QuizService { 

    quizName: string;
    employeeId: number;
    quizId: number;
    quizResults: any;
    quizzes: any;
    questions: string;
    answers: string;

  constructor(private http: HttpClient, private router: Router) {
  this.quizzes = [
    { id: 101, name: "html-css" },
    { id: 102, name: "JavaScript" },
    { id: 103, name: "Node" }
  ]
}
ngOnInit() {

}
  getQuizzes() {
    return this.http.get('./assets/questions.json');
  }

  getQuizbyId(id){
    return this.http.get('/api/quizzes/' + id);
  }

  
  /*
  user : string;

  goToResults(employeeId) {
    this.user = employeeId;
    console.log('user');
    console.log('Score: ' + this.user);
    this.router.navigate(['/dashboard/questions/' + this.user]);
  }*/

}
