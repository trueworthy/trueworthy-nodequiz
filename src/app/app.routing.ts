/**
 * Author: Lea Trueworthy
 * Description: routing for website to each page
 */

import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { CumulativeSummaryComponent } from './pages/cumulative-summary/cumulative-summary.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ResultsComponent } from './pages/results/results.component';

export const AppRoutes: Routes = [
  {
    path: 'dashboard',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'slides/:name',
        component: PresentationComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'questions/:id',
        component: QuizComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'results/:id',
        component: ResultsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cumulative-summary',
        component: CumulativeSummaryComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/not-found'
  }
];