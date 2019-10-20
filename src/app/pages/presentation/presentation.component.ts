/**
 * Author: Lea Trueworthy
 * Description: carousel function and route to quiz
 */

 import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentationService } from './presentation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  images: any;
  presentations: any;
  presentationName: string;
  quizId: any;
  quizName: string;
  employeeId: number

  constructor(private route: ActivatedRoute, private http: HttpClient,
              private presentationService: PresentationService, private router: Router,) {
               // this.quizId = parseInt(this.route.snapshot.paramMap.get("id"), 10);

    this.presentationName = route.snapshot.paramMap.get('name');
    this.presentationService.getPresentations()
    .subscribe(res => {
      this.presentations = res;
      console.log(this.presentations);
      console.log(this.employeeId)
      this.images = this.presentations.filter(p => p.name === this.presentationName)[0].images;
      console.log(this.images);
    })
  }
  goToQuiz(quizId) {
    this.quizId = quizId;
    console.log(quizId);
    console.log(this.presentations);
    console.log('Quiz: ' + this.quizId);
    this.router.navigate(['/dashboard/questions/' + this.quizId]);
  }

  ngOnInit() {

  }

}