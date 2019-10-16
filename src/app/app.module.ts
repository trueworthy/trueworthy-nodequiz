/**
 * Author: Lea Trueworthy
 * Description: app.module: elements for whole website
 */

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from './shared/guards/auth.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MatDialogModule } from '@angular/material/dialog';

//import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CumulativeSummaryComponent } from './pages/cumulative-summary/cumulative-summary.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatRadioModule } from '@angular/material';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatListModule } from '@angular/material';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { PresentationService } from './pages/presentation/presentation.service';
import { HeaderComponent } from './shared/header/header.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizService } from './pages/quiz/quiz.service';
import { ResultsComponent } from './pages/results/results.component';
import {QuizSummaryDialogComponent} from './shared/quiz-summary-dialog/quiz-summary-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    DashboardComponent,
    LoginComponent,
    NotFoundComponent,
    CumulativeSummaryComponent,
    AuthLayoutComponent,
    PresentationComponent,
    HeaderComponent,
    QuizComponent,
    ResultsComponent,
    QuizSummaryDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false }),
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    CarouselModule,
    RadioButtonModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CookieService,
    AuthGuard, PresentationService,
    QuizService],
  bootstrap: [AppComponent],
  entryComponents: [QuizSummaryDialogComponent]

})
export class AppModule { }