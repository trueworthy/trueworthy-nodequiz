
/**
 * Author: Lea Trueworthy
 * Description: Presentation guide
 */

 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PresentationService { 

    presentationName: string;
    presentations: any;
    images: any;

constructor(private http: HttpClient) {

  }

  getPresentations() {
    return this.http.get('./assets/presentations.json');
  }
}