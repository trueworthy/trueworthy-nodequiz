(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cumulative-summary/cumulative-summary.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cumulative-summary/cumulative-summary.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>cumulative-summary works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title>Welcome to Node Quiz!</mat-card-title>\n\n<div class=\"row\">\n    <div class=\"column\">\n        <img src=\"assets/slides/html-css/Slide1.jpeg\" alt=\"HTML\" style=\"width:100%\">\n        <button color=\"accent\" mat-button (click)=\"goToPresentation('html-css')\">Learn HTML/CSS</button>\n    </div>\n    <div class=\"column\">\n        <img src=\"assets/slides/javascript/Slide1.jpeg\" alt=\"Java\" style=\"width:100%\">\n        <button color=\"accent\" mat-button (click)=\"goToPresentation('javascript')\">Learn Javascript</button>\n    </div>\n    <div class=\"column\">\n        <img src=\"assets/slides/node/Slide1.jpeg\" alt=\"node\" style=\"width:100%\">\n        <button color=\"accent\" mat-button (click)=\"goToPresentation('node')\">Learn Node</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 50%; margin-top: 12%; margin-left: 20%;\" fxLayout=\"column\">\n    <mat-card class=\"mat-elevation-z8\">\n        <mat-card-title>Login Here</mat-card-title>\n        <mat-card-content>\n            <small style=\"color: #df546a;\" *ngIf=\"errorMessage\">{{errorMessage}}<br/></small>\n            <mat-card class=\"mat-evevation-z0\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n                <form [formGroup]=\"form\" (ngSubmit)=\"login(); form.reset();\" #loginForm=\"ngForm\">\n                    <mat-card-content>\n                        <mat-form-field>\n                            <input type=\"text\" matInput [formControl]=\"form.controls['employeeId']\" fxFlex>\n                        </mat-form-field>\n                    </mat-card-content>\n                    <mat-card-actions>\n                        <button type=\"submit\" fxFlex mat-raised-button color=\"primary\">Submit</button>\n                    </mat-card-actions>\n                </form>\n            </mat-card>\n        </mat-card-content>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n\n<head>\n    <style>\n        html {\n            width: 100%;\n            height: 100%;\n        }\n    </style>\n</head>\n\n<body>\n\n    <h1>404</h1>\n    <h4>Are you lost?</h4>\n\n    <button color=\"accent\" mat-button (click)=\"goBack()\">Back</button>\n\n\n</body>\n\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/presentation/presentation.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/presentation/presentation.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" *ngIf=\"images\">\n    <mat-card>\n      <mat-card-title>{{ presentationName }}</mat-card-title>\n      <mat-card-content>\n        <p-carousel [value]=\"images\" numVisible=\"1\">\n          <ng-template let-item pTemplate=\"item\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n              <div fxFlex>\n                <img src=\"./assets/slides/{{ presentationName }}/{{ item.name }}.jpeg\" alt=\"\">\n              </div>\n            </div>\n          </ng-template>\n        </p-carousel>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <button color=\"accent\" mat-button (click)=\"goToQuiz(presentationName)\">Begin Quiz here</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quiz/quiz.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quiz/quiz.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <!-- root mat card -->\n    <mat-card fxFlex style=\"width: 50%; margin: 0 auto; margin-top: 5%;\" class=\"mat-elevation-z8\">\n        <mat-card-title style=\"text-align: center; font-weight: lighter;\" class=\"mat-headline\">\n            {{ quiz.name }}\n        </mat-card-title>\n\n        <br />\n        <!-- root mat card content -->\n        <mat-card-content *ngIf=\"questions\">\n            <!-- flex-layout column -->\n            <div fxLayout=\"column\">\n\n                <!-- Quiz form -->\n                <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form.value); \">\n                    <div *ngFor=\"let question of questions\">\n                        <mat-card class=\"mat-elevation-z0\">\n                            <mat-card-content>\n\n                                <div fxLayout=\"column\">\n                                    <!-- questions -->\n                                    <mat-list>\n                                        <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n\n                                            <p>{{question.text}}</p>\n                                        </div>\n                                    </mat-list>\n                                    <br />\n\n                                    <!-- answers -->\n                                    <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                                        <label>Answers:</label>\n                                        <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n                                            <div *ngFor=\"let answer of question.answers\"\n                                                style=\"flex-direction: column;\">\n                                                <input [(ngModel)]=\"qs[question.id]\" [checked]=\"qs[question.id]\"\n                                                    value=\"{{answer.id}};{{answer.isCorrect}}\" name=\"q{{question.id}}\"\n                                                    type=\"radio\" />\n                                                {{answer.text}}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </mat-card-content>\n                        </mat-card>\n                    </div>\n\n                    <!-- mat card actions -->\n                    <br />\n                    <mat-card-actions>\n                        <button type=\"submit\" fxFlex mat-raised-button color=\"primary\">Submit</button>\n                    </mat-card-actions>\n                    <br />\n                </form>\n                <!-- end form -->\n\n            </div>\n            <!-- end flex-layout column -->\n        </mat-card-content>\n        <!-- end root mat card content -->\n    </mat-card>\n\n    <div>\n        <button color=\"accent\" mat-button (click)=\"goBack()\">Back</button>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/results/results.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/results/results.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <div fxLayout=\"column\">\n    <mat-card class=\"mat-elevation-z0\">\n      <mat-card-title style=\"font-weight: lighter; text-align: center;\">\n          {{quizSummary.quizName}}\n      </mat-card-title>\n      <mat-card-subtitle style=\"font-weight: lighter; text-align: center;\">\n          Displaying Quiz Results for Employee: {{employeeId}}\n      </mat-card-subtitle>\n      <br />\n      <mat-card-content>\n        <mat-card class=\"mat-elevation-z8\">\n          <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n            <mat-card-title style=\"text-align: center; font-weight: bold;\">\n              Score\n              <div *ngIf=\"quizSummary.score > 90\">\n                <span style=\"color: green;\">{{quizSummary.score}}%</span>\n              </div>\n              <div *ngIf=\"quizSummary.score < 90 && quizSummary.score >= 80\">\n                <span style=\"color: blue;\">{{quizSummary.score}}%</span>\n              </div>\n              <div *ngIf=\"quizSummary.score < 80 && quizSummary.score >= 70\">\n                <span style=\"color: orange;\">{{quizSummary.score}}%</span>\n              </div>\n              <div *ngIf=\"quizSummary.score < 70 && quizSummary.score >= 60\">\n                <span style=\"color: yellow;\">{{quizSummary.score}}%</span>\n              </div>\n              <div *ngIf=\"quizSummary.score < 60\">\n                <span style=\"color: red;\">{{quizSummary.score}}%</span>\n              </div>\n            </mat-card-title>\n          </div>\n        </mat-card>\n          \n        <br />\n        <mat-card class=\"mat-elevation-z0\">\n          <mat-card-content>\n            <div fxLayout=\"column\" fxLayoutGap=\"10px\" *ngFor=\"let answer of correctAnswers; let i = index\">\n              <div *ngIf=\"selectedAnswers[i].answerId !== answer.answerId\">\n\n                <!-- questions -->\n                <mat-list>\n                  <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                    <p>Question: </p>\n                    <p>{{answer.questionText}}</p>\n                  </div>\n                </mat-list>\n                <br />\n\n                <!-- answer summary -->\n                <label>Answers:</label>\n                <p><mat-icon style=\"color: red; vertical-align: bottom\">clear</mat-icon> &nbsp; Selected answer: {{ selectedAnswers[i].text}}</p>\n                <p><mat-icon style=\"color: green; vertical-align: bottom\">done</mat-icon>&nbsp; Correct answer: {{ answer.text}}</p>\n              </div>\n            </div>    \n          </mat-card-content>\n              \n        </mat-card>  \n        \n      </mat-card-content>\n      <mat-card-actions align=\"end\">\n        <button mat-raised-button matDialogClose=\"confirm\" color=\"primary\">Confirm</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</mat-dialog-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/auth-layout/auth-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/auth-layout/auth-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/base-layout/base-layout.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <!-- Page header -->\n<app-header></app-header>\n    <!-- Main page content -->\n    <main>\n        <router-outlet></router-outlet>\n    </main>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"menu\" role=\"header\" color=\"primary\">\n    <mat-toolbar-row>\n        <mat-icon>computer</mat-icon>\n        <button mat-button class=\"toolbar__icon-button mat-button\" (click)=\"navHome()\">\n        <span style=\"margin-left: 5px !important;\">Node Quiz</span>\n        </button>\n        <div fxFlex></div>\n\n        <!-- User Profile -->\n        <button [matMenuTriggerFor]=\"menu\" mat-icon-button>\n            <mat-icon>account_circle</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item>\n                <mat-icon>library_books</mat-icon>\n                <span>My Results</span>\n            </button>\n            <button mat-menu-item (click)=\"logout()\">\n                <mat-icon>exit_to_app</mat-icon>\n                <span>Logout</span>\n            </button>\n        </mat-menu>\n    </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/quiz-summary-dialog/quiz-summary-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/quiz-summary-dialog/quiz-summary-dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>quiz-summary-dialog works!</p>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/**
 * Author: Lea Trueworthy
 * Description: app.component
 */





let AppComponent = class AppComponent {
    constructor(router, cookieService, authGuard) {
        this.router = router;
        this.cookieService = cookieService;
        this.authGuard = authGuard;
        this.title = "Trueworthy NodeQuiz";
        let test = this.cookieService.get('isAuthenticated');
        console.log(test);
        if (!test) {
            router.navigate(['/session/login']);
        }
        else {
            router.navigate(["/dashboard/"]);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/carousel.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_carousel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/cumulative-summary/cumulative-summary.component */ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/presentation/presentation.component */ "./src/app/pages/presentation/presentation.component.ts");
/* harmony import */ var _pages_presentation_presentation_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/presentation/presentation.service */ "./src/app/pages/presentation/presentation.service.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/quiz/quiz.component */ "./src/app/pages/quiz/quiz.component.ts");
/* harmony import */ var _pages_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/quiz/quiz.service */ "./src/app/pages/quiz/quiz.service.ts");
/* harmony import */ var _pages_results_results_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/results/results.component */ "./src/app/pages/results/results.component.ts");
/* harmony import */ var _shared_quiz_summary_dialog_quiz_summary_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/quiz-summary-dialog/quiz-summary-dialog.component */ "./src/app/shared/quiz-summary-dialog/quiz-summary-dialog.component.ts");
/**
 * Author: Lea Trueworthy
 * Description: app.module: elements for whole website
 */













//import {ButtonModule} from 'primeng/button';




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
            _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_14__["BaseLayoutComponent"],
            _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"],
            _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_18__["CumulativeSummaryComponent"],
            _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_19__["AuthLayoutComponent"],
            _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_25__["PresentationComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_27__["HeaderComponent"],
            _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_28__["QuizComponent"],
            _pages_results_results_component__WEBPACK_IMPORTED_MODULE_30__["ResultsComponent"],
            _shared_quiz_summary_dialog_quiz_summary_dialog_component__WEBPACK_IMPORTED_MODULE_31__["QuizSummaryDialogComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutes"], { useHash: true, enableTracing: false }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"],
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__["RadioButtonModule"]
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__["HashLocationStrategy"] },
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_20__["CookieService"],
            _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _pages_presentation_presentation_service__WEBPACK_IMPORTED_MODULE_26__["PresentationService"],
            _pages_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_29__["QuizService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
        entryComponents: [_shared_quiz_summary_dialog_quiz_summary_dialog_component__WEBPACK_IMPORTED_MODULE_31__["QuizSummaryDialogComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/cumulative-summary/cumulative-summary.component */ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts");
/* harmony import */ var _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/presentation/presentation.component */ "./src/app/pages/presentation/presentation.component.ts");
/* harmony import */ var _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/quiz/quiz.component */ "./src/app/pages/quiz/quiz.component.ts");
/* harmony import */ var _pages_results_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/results/results.component */ "./src/app/pages/results/results.component.ts");
/**
 * Author: Lea Trueworthy
 * Description: routing for website to each page
 */










const AppRoutes = [
    {
        path: 'dashboard',
        component: _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_0__["BaseLayoutComponent"],
        children: [
            {
                path: '',
                component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'slides/:name',
                component: _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'questions/:id',
                component: _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'results/:id',
                component: _pages_results_results_component__WEBPACK_IMPORTED_MODULE_9__["ResultsComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'cumulative-summary',
                component: _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_6__["CumulativeSummaryComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            }
        ]
    },
    {
        path: 'session',
        component: _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"],
        children: [
            {
                path: 'login',
                component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            },
            {
                path: 'not-found',
                component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'session/not-found'
    }
];


/***/ }),

/***/ "./src/app/pages/cumulative-summary/cumulative-summary.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/cumulative-summary/cumulative-summary.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1bXVsYXRpdmUtc3VtbWFyeS9jdW11bGF0aXZlLXN1bW1hcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/cumulative-summary/cumulative-summary.component.ts ***!
  \**************************************************************************/
/*! exports provided: CumulativeSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CumulativeSummaryComponent", function() { return CumulativeSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CumulativeSummaryComponent = class CumulativeSummaryComponent {
    constructor() { }
    ngOnInit() {
    }
};
CumulativeSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cumulative-summary',
        template: __webpack_require__(/*! raw-loader!./cumulative-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cumulative-summary/cumulative-summary.component.html"),
        styles: [__webpack_require__(/*! ./cumulative-summary.component.css */ "./src/app/pages/cumulative-summary/cumulative-summary.component.css")]
    })
], CumulativeSummaryComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {width: 100%;}\n\n.row {\n    padding-top: 30px;\n    display: -webkit-box;\n    display: flex;\n  }\n\n/* Create three equal columns that sits next to each other */\n\n.column {\n    -webkit-box-flex: 33.33%;\n            flex: 33.33%;\n    padding: 5px;\n  }\n\n.column button{\n    padding: 3px;\n  }\n\n.row button{\n    width: 40%;\n\n  }\n\nbutton{\n    width: 100%  !important;\n    font-size: 18px !important;\n    text-align: center  !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sV0FBVyxDQUFDOztBQUVsQjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBYTtJQUFiLGFBQWE7RUFDZjs7QUFFQSw0REFBNEQ7O0FBQzVEO0lBQ0Usd0JBQVk7WUFBWixZQUFZO0lBQ1osWUFBWTtFQUNkOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsVUFBVTs7RUFFWjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7d2lkdGg6IDEwMCU7fVxuXG4ucm93IHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAvKiBDcmVhdGUgdGhyZWUgZXF1YWwgY29sdW1ucyB0aGF0IHNpdHMgbmV4dCB0byBlYWNoIG90aGVyICovXG4gIC5jb2x1bW4ge1xuICAgIGZsZXg6IDMzLjMzJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuICAuY29sdW1uIGJ1dHRvbntcbiAgICBwYWRkaW5nOiAzcHg7XG4gIH1cblxuICAucm93IGJ1dHRvbntcbiAgICB3aWR0aDogNDAlO1xuXG4gIH1cblxuICBidXR0b257XG4gICAgd2lkdGg6IDEwMCUgICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/**
 * Author: Lea Trueworthy
 * Description: Home page after signed in
 */




let DashboardComponent = class DashboardComponent {
    constructor(router, cookie) {
        this.router = router;
        this.cookie = cookie;
    }
    goToPresentation(presentationName) {
        this.presentationName = presentationName;
        console.log('The presentation name is ' + this.presentationName);
        this.router.navigate(['/dashboard/slides/' + this.presentationName]);
    }
    ngOnInit() {
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

/**
 * Author: Lea Trueworthy
 * Description: Login page
 */





let LoginComponent = class LoginComponent {
    constructor(router, cookieService, fb, http) {
        this.router = router;
        this.cookieService = cookieService;
        this.fb = fb;
        this.http = http;
        this.cookieValue = "unknown";
    } /* this.createForm();
     }
     /*createForm() {
       this.form = this.fb.group({
         employeeId: [''],
         
       });
     }
  
     addData(employeeId) {
       this.ls.addData(employeeId);
     }*/
    ngOnInit() {
        this.form = this.fb.group({
            employeeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')])]
        });
    }
    login() {
        const employeeId = this.form.controls['employeeId'].value;
        console.log(employeeId);
        /*function List($scope, $http){
          var insertMethod = 'POST';
          $scope.showLabel = true;
        
          $scope.save = function(){
            var formData = {
              "employeeId" : this.employeeId,
              
            }
          };
          $scope.List();
        }*/
        this.http.get('/api/employees/' + employeeId).subscribe(res => {
            if (res) {
                this.cookieService.set('isAuthenticated', 'true', 1);
                this.cookieService.set('employeeId', employeeId, 1);
                this.cookieValue = this.cookieService.get('employeeId');
                //localStorage.setItem('employeeId', JSON.stringify(this.employeeId));
                // JSON.parse(localStorage.getItem('employeeId'));
                this.router.navigate(['/dashboard']);
            }
            else {
                this.errorMessage = "Invalid, please try again.";
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**
 * Author: Lea Trueworthy
 * Description: ts
 */




let NotFoundComponent = class NotFoundComponent {
    constructor(route, location) {
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/not-found/not-found.component.css")]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/pages/presentation/presentation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    width: 100%  !important;\n    font-size: 25px !important;\n    text-align: center  !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmVzZW50YXRpb24vcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XG4gICAgd2lkdGg6IDEwMCUgICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/presentation/presentation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.component.ts ***!
  \**************************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _presentation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presentation.service */ "./src/app/pages/presentation/presentation.service.ts");
/**
 * Author: Lea Trueworthy
 * Description: carousel function and route to quiz
 */






let PresentationComponent = class PresentationComponent {
    constructor(route, http, presentationService, router) {
        this.route = route;
        this.http = http;
        this.presentationService = presentationService;
        this.router = router;
        this.presentationName = route.snapshot.paramMap.get('name');
        this.presentationService.getPresentations()
            .subscribe(res => {
            this.presentations = res;
            console.log(this.presentations);
            this.images = this.presentations.filter(p => p.name === this.presentationName)[0].images;
            console.log(this.images);
        });
    }
    goToQuiz(quizId) {
        this.quizId = quizId;
        console.log(quizId);
        console.log('Quiz: ' + this.quizId);
        this.router.navigate(['/dashboard/questions/' + this.quizId]);
    }
    ngOnInit() {
    }
};
PresentationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _presentation_service__WEBPACK_IMPORTED_MODULE_4__["PresentationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PresentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-presentation',
        template: __webpack_require__(/*! raw-loader!./presentation.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/presentation/presentation.component.html"),
        styles: [__webpack_require__(/*! ./presentation.component.css */ "./src/app/pages/presentation/presentation.component.css")]
    })
], PresentationComponent);



/***/ }),

/***/ "./src/app/pages/presentation/presentation.service.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.service.ts ***!
  \************************************************************/
/*! exports provided: PresentationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationService", function() { return PresentationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/**
 * Author: Lea Trueworthy
 * Description: Presentation guide
 */



let PresentationService = class PresentationService {
    constructor(http) {
        this.http = http;
    }
    getPresentations() {
        return this.http.get('./assets/presentations.json');
    }
};
PresentationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PresentationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PresentationService);



/***/ }),

/***/ "./src/app/pages/quiz/quiz.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/quiz/quiz.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"radio\"]{\n    vertical-align: top;\n}\n\n#title{\n    width: 100% !important;\n    text-align: center !important;\n    font-size: 30px !important;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLDBCQUEwQjs7QUFFOUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdWl6L3F1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJyYWRpb1wiXXtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4jdGl0bGV7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/quiz/quiz.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/quiz/quiz.component.ts ***!
  \**********************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz.service */ "./src/app/pages/quiz/quiz.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/**
 * Author: Lea Trueworthy
 * Description: Quiz page guide
 */









let QuizComponent = class QuizComponent {
    constructor(route, cookieService, location, dialog, http, quizService, router) {
        this.route = route;
        this.cookieService = cookieService;
        this.location = location;
        this.dialog = dialog;
        this.http = http;
        this.quizService = quizService;
        this.router = router;
        this.q = [];
        this.qs = [];
        this.quizId = (this.route.snapshot.paramMap.get('id'));
        this.quiz = parseInt(this.route.snapshot.paramMap.get("id"));
        this.employeeId = parseInt(this.cookieService.get('employeeId'));
        //this.cookieValue = this.cookieService.get('employeeId')
        console.log(this.employeeId + " employee number");
        //this.employeeId = this.cookieService.get('employeeId');
        //this.employeeId = parseInt(this.cookieService.get('employeeId'), 10);
        this.quizService.getQuizzes().subscribe(res => {
            this.quizzes = res;
            this.questions = this.quizzes.filter(q => q.name === this.quizId)[0].questions;
            //this.quizNameFromUrl = route.snapshot.paramMap.get('id');  quizName: {{this.quizNameFromUrl}}
            console.log(this.quizzes);
        });
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
        const dialogRef = this.dialog.open(src_app_shared__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"], {
            data: {}
        });
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
};
QuizComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-quiz',
        template: __webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quiz/quiz.component.html"),
        styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/pages/quiz/quiz.component.css")]
    })
], QuizComponent);



/***/ }),

/***/ "./src/app/pages/quiz/quiz.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/quiz/quiz.service.ts ***!
  \********************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/**
 * Author: Lea Trueworthy
 * Description: routing for quiz page to questions
 */




let QuizService = class QuizService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.quizzes = [
            { id: 101, name: "html-css" },
            { id: 102, name: "JavaScript" },
            { id: 103, name: "Node" }
        ];
    }
    ngOnInit() {
    }
    getQuizzes() {
        return this.http.get('./assets/questions.json');
    }
    getQuizbyId(id) {
        return this.http.get('/api/quizzes/' + id);
    }
};
QuizService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuizService);



/***/ }),

/***/ "./src/app/pages/results/results.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/results/results.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/results/results.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/results/results.component.ts ***!
  \****************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/**
 * Author: Lea Trueworthy
 * Description: employee results from quiz
 */





let ResultsComponent = class ResultsComponent {
    // resultsDisplay: any;
    constructor(dialogRef, router, cookieService) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.cookieService = cookieService;
        this.employeeId = this.cookieService.get('employeeId');
        console.log(this.employeeId + ' results employee');
    }
    ngOnInit() {
        console.log(this.quizResults);
    }
};
ResultsComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResultsComponent.prototype, "quizResults", void 0);
ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-quiz-results",
        template: __webpack_require__(/*! raw-loader!../results/results.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/results/results.component.html"),
        styles: [__webpack_require__(/*! ../results/results.component.css */ "./src/app/pages/results/results.component.css")]
    })
], ResultsComponent);



/***/ }),

/***/ "./src/app/shared/auth-layout/auth-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/auth-layout/auth-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/auth-layout/auth-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/auth-layout/auth-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthLayoutComponent = class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-layout',
        template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/auth-layout/auth-layout.component.html"),
        styles: [__webpack_require__(/*! ./auth-layout.component.css */ "./src/app/shared/auth-layout/auth-layout.component.css")]
    })
], AuthLayoutComponent);



/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9iYXNlLWxheW91dC9iYXNlLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/base-layout/base-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * Author: Lea Trueworthy
 * Description: layout throughtout website
 */


let BaseLayoutComponent = class BaseLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
BaseLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-base-layout',
        template: __webpack_require__(/*! raw-loader!./base-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/base-layout/base-layout.component.html"),
        styles: [__webpack_require__(/*! ./base-layout.component.css */ "./src/app/shared/base-layout/base-layout.component.css")]
    })
], BaseLayoutComponent);



/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/**
 * Author: Lea Trueworthy
 * Description: Validation for login
 */




let AuthGuard = class AuthGuard {
    constructor(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    canActivate(route, state) {
        const isAuthenticated = this.cookieService.get('isAuthenticated');
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(['/session/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");

/**
 * Author: Lea Trueworthy
 * Description: nav
 */



let HeaderComponent = class HeaderComponent {
    constructor(router, cookie) {
        this.router = router;
        this.cookie = cookie;
    }
    logout() {
        console.log('You have logged out');
        this.cookie.delete('isAuthenticated');
        this.router.navigate(["/session/login"]);
    }
    ngOnInit() {
    }
    navHome() {
        this.router.navigate(["/dashboard"]);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: BaseLayoutComponent, AuthLayoutComponent, DashboardComponent, LoginComponent, CumulativeSummaryComponent, NotFoundComponent, ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-layout/base-layout.component */ "./src/app/shared/base-layout/base-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_0__["BaseLayoutComponent"]; });

/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ "./src/app/shared/auth-layout/auth-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"]; });

/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]; });

/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]; });

/* harmony import */ var _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../pages/cumulative-summary/cumulative-summary.component */ "./src/app/pages/cumulative-summary/cumulative-summary.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CumulativeSummaryComponent", function() { return _pages_cumulative_summary_cumulative_summary_component__WEBPACK_IMPORTED_MODULE_4__["CumulativeSummaryComponent"]; });

/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]; });

/* harmony import */ var _pages_results_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../pages/results/results.component */ "./src/app/pages/results/results.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return _pages_results_results_component__WEBPACK_IMPORTED_MODULE_6__["ResultsComponent"]; });

/**
 * Author: Lea Trueworthy
 * Description: helping in route
 */









/***/ }),

/***/ "./src/app/shared/quiz-summary-dialog/quiz-summary-dialog.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/shared/quiz-summary-dialog/quiz-summary-dialog.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9xdWl6LXN1bW1hcnktZGlhbG9nL3F1aXotc3VtbWFyeS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/quiz-summary-dialog/quiz-summary-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/quiz-summary-dialog/quiz-summary-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: QuizSummaryDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizSummaryDialogComponent", function() { return QuizSummaryDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let QuizSummaryDialogComponent = class QuizSummaryDialogComponent {
    constructor(dialogRef, data, cookieService) {
        this.dialogRef = dialogRef;
        this.cookieService = cookieService;
        this.quizSummary = data.quizSummary;
        console.log(data);
        this.correctAnswers = this.quizSummary.correctAnswers;
        this.selectedAnswers = this.quizSummary.selectedAnswers;
        this.employeeId = this.cookieService.get('employeeId');
    }
    ngOnInit() {
    }
};
QuizSummaryDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
QuizSummaryDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz-summary-dialog',
        template: __webpack_require__(/*! raw-loader!./quiz-summary-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/quiz-summary-dialog/quiz-summary-dialog.component.html"),
        styles: [__webpack_require__(/*! ./quiz-summary-dialog.component.css */ "./src/app/shared/quiz-summary-dialog/quiz-summary-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], QuizSummaryDialogComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");

/**
 * Author: Lea Trueworthy
 * Description: main.ts
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/leatrueworthy/bu-webdev/web-450/nodequiz/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map