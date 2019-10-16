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

  constructor(private route: ActivatedRoute, private http: HttpClient,
              private presentationService: PresentationService, private router: Router,) {
    this.presentationName = route.snapshot.paramMap.get('name');
    this.presentationService.getPresentations()
    .subscribe(res => {
      this.presentations = res;
      console.log(this.presentations);
      this.images = this.presentations.filter(p => p.name === this.presentationName)[0].images;
      console.log(this.images);
    })
  }
  goToQuiz(quizId) {
    this.quizId = quizId;
    console.log(quizId);
    console.log('Quiz: ' + this.quizId);
    this.router.navigate(['/dashboard/questions/' + this.quizId]);
  }

  ngOnInit() {

  }

}