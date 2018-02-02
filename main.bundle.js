webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_class_page_class_page_component__ = __webpack_require__("../../../../../src/app/components/class-page/class-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'classpage/:index', component: __WEBPACK_IMPORTED_MODULE_11__components_class_page_class_page_component__["a" /* ClassPageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_class_page_class_page_component__["a" /* ClassPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Score</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container\">\n  <br><br>\n\n  <h1 class=\"text-center title\">- Score - </h1>\n\n  <br>\n\n  <p class=\"text-center crimson\">Score is a <strong>minimalistic</strong> gradebook viewer and editor for Bellevue School District.</p>\n\n  <br>\n  <p class=\"text-center crimson\">Synergy, the current gradebook viewer for Bellevue School District is too bloated in design and lacks support for any interaction between a student and his or her grades. Score is designed not only to replace Synergy, but to answer important questions such as 'How much do I need on the final exam to reach an A?', or 'How much will 10 points of extra credit raise my grade?'. <br><br> With Score, students will be able to make local edits to their grades and see the results immediately.\n\n  <br><br><br><br>\n  <hr>\n  <br><br>\n  <h1 class=\"display-1 text-center\">Demo</h1>\n\n  <br>\n  <h4 class=\"display-4\">Physics</h4>\n  <br>\n  <div class=\"card card-body bg-light\">\n    <h5>Total - {{totalScore}}%</h5>\n  </div>\n  <br>\n  <br>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addAssignment()\">Add Assignment</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"resetAssignments()\">Reset Assignments</button>\n  </div>\n\n\n  <table class=\"table\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th>Assignment</th>\n          <th>Category</th>\n          <th>Points</th>\n          <th>Points Possible</th>\n          <th>Percentage</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let assignment of assignments.assignments; let i = index\">\n          <td><input onClick=\"this.select();\" class=\"form-control\" [(ngModel)]=\"assignment.assignmentName\"></td>\n          <td>\n            <select class=\"form-control\" [(ngModel)]=\"assignment.assignmentType\" (ngModelChange)=\"updateTotalScore()\">\n              <option selected>{{assignment.assignmentType}}</option>\n              <option *ngFor=\"let category of assignments.categories\" [ngValue]=\"category.categoryName\"> {{category.categoryName}} </option>\n            </select>\n          </td>\n          <td><input onClick=\"this.select();\" class=\"form-control\" [(ngModel)]=\"assignment.assignmentScore\" (ngModelChange)=\"updateTotalScore()\"></td>\n          <td><input onClick=\"this.select();\" class=\"form-control\" [(ngModel)]=\"assignment.assignmentTotal\" (ngModelChange)=\"updateTotalScore()\"></td>\n          <td><p>{{ (assignment.assignmentScore != null && assignment.assignmentScore + \"\" != \"\") ? ((assignment.assignmentScore / assignment.assignmentTotal) * 100).toFixed(2) + \"%\" : \"\" }}</p></td>\n          <td><button (click)=\"deleteAssignment(i)\" class=\"btn btn-secondary\">X</button></td>\n        </tr>\n      </tbody>\n    </table>\n\n<br><br>\n<hr>\n<br><br>\n<div class=\"text-center\">\n<h1 class=\"display-1\">Ready to start?</h1><br>\n<button (click)=\"login()\" class=\"btn btn-primary btn-lg\">Login</button>\n\n</div>\n\n<br><br>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent(changeDetector, route) {
        this.changeDetector = changeDetector;
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.tests = 0;
        this.assignments = {
            assignments: [
                {
                    assignmentName: "Homework 1",
                    assignmentType: "Homework",
                    assignmentScore: 10,
                    assignmentTotal: 10
                },
                {
                    assignmentName: "Homework 2",
                    assignmentType: "Homework",
                    assignmentScore: 10,
                    assignmentTotal: 10
                },
                {
                    assignmentName: "Homework 3",
                    assignmentType: "Homework",
                    assignmentScore: 10,
                    assignmentTotal: 10
                },
                {
                    assignmentName: "Test 1",
                    assignmentType: "Exams",
                    assignmentScore: 28,
                    assignmentTotal: 30
                }
            ],
            categories: [
                {
                    categoryName: "Homework",
                    categoryWeight: 30
                },
                {
                    categoryName: "Exams",
                    categoryWeight: 70
                }
            ]
        };
        this.original = JSON.parse(JSON.stringify(this.assignments));
        this.updateTotalScore();
    };
    AboutComponent.prototype.deleteAssignment = function (index) {
        this.assignments.assignments.splice(index, 1);
        this.changeDetector.detectChanges();
        this.updateTotalScore();
    };
    AboutComponent.prototype.addAssignment = function () {
        this.tests++;
        this.assignments.assignments.splice(0, 0, {
            assignmentName: "Test #" + this.tests,
            assignmentType: (this.assignments.categories.length != 0) ? this.assignments.categories[0].categoryName : this.assignments.assignments[0].assignmentType,
            assignmentScore: null,
            assignmentTotal: null
        });
        this.changeDetector.detectChanges();
    };
    AboutComponent.prototype.getCategories = function (type) {
        var index = this.assignments.categories.map(function (x) {
            return x.categoryName;
        }).indexOf(type);
        var newarray = JSON.parse(JSON.stringify(this.assignments.categories));
        newarray.splice(index, 1);
        return newarray;
    };
    AboutComponent.prototype.resetAssignments = function () {
        this.assignments = JSON.parse(JSON.stringify(this.original));
        this.changeDetector.detectChanges();
        this.updateTotalScore();
        this.tests = 0;
    };
    AboutComponent.prototype.updateTotalScore = function () {
        this.totalScore = 0;
        if (this.assignments.categories.length == 0) {
            var score = 0;
            var total = 0;
            for (var i = 0; i < this.assignments.assignments.length; i++) {
                if (this.assignments.assignments[i].assignmentScore != null) {
                    score += +this.assignments.assignments[i].assignmentScore;
                    total += +this.assignments.assignments[i].assignmentTotal;
                }
            }
            this.totalScore = (score / total) * 100;
            this.totalScore = +this.totalScore.toFixed(2);
        }
        else {
            var possiblePoints = new Array(this.assignments.categories.length);
            var totals = new Array(this.assignments.categories.length);
            for (var i = 0; i < this.assignments.categories.length; i++) {
                possiblePoints[i] = 0;
                totals[i] = 0;
                for (var j = 0; j < this.assignments.assignments.length; j++) {
                    if (this.assignments.assignments[j].assignmentType == this.assignments.categories[i].categoryName && this.assignments.assignments[j].assignmentScore != null && "" + this.assignments.assignments[j].assignmentScore != "") {
                        totals[i] += +this.assignments.assignments[j].assignmentScore;
                        possiblePoints[i] += +this.assignments.assignments[j].assignmentTotal;
                    }
                }
                if (possiblePoints[i] != 0) {
                    this.totalScore += (totals[i] / possiblePoints[i]) * (this.assignments.categories[i].categoryWeight / 100);
                }
                else {
                    this.totalScore += this.assignments.categories[i].categoryWeight / 100;
                }
            }
            this.totalScore = +(this.totalScore * 100).toFixed(2);
        }
    };
    AboutComponent.prototype.login = function () {
        this.route.navigateByUrl('/login');
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/class-page/class-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/class-page/class-page.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Score</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/login\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n<br>\n<h3 class=\"display-3\">{{name}}</h3>\n<br>\n<div class=\"card card-body bg-light\">\n  <h4 class=\"display-4\">Total : {{totalScore}}% <br>Change : {{(totalScore - originalScore).toFixed(2)}}%</h4>\n</div>\n<br>\n<br>\n\n<div class=\"btn-group\" role=\"group\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addAssignment()\">Add Assignment</button>\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"resetAssignments()\">Reset Assignments</button>\n</div>\n\n<div *ngIf=\"isLoading\">\n  <br>\n  <i class=\"fa fa-gear fa-spin\" style=\"font-size:24px\"></i>\n  <br>\n</div>\n\n<br>\n<table class=\"table\">\n    <thead class=\"thead-light\">\n      <tr>\n        <th>Assignment</th>\n        <th>Category</th>\n        <th>Points</th>\n        <th>Points Possible</th>\n        <th>Percentage</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let assignment of assignments.assignments; let i = index\">\n        <td><input onClick=\"this.select();\" class=\"form-control\" [(ngModel)]=\"assignment.assignmentName\"></td>\n        <td>\n          <select class=\"form-control\" [(ngModel)]=\"assignment.assignmentType\" (ngModelChange)=\"updateTotalScore()\">\n            <option [ngValue]=\"assignment.assignmentType\" selected>{{assignment.assignmentType}}</option>\n            <option *ngFor=\"let category of getCategories(assignment.assignmentType)\" [ngValue]=\"category.categoryName\"> {{category.categoryName}} </option>\n          </select>\n        </td>\n        <td><input onClick=\"this.select();\" class=\"form-control\" [(ngModel)]=\"assignment.assignmentScore\" (ngModelChange)=\"updateTotalScore()\"></td>\n        <td><input onClick=\"this.select();\" class=\"form-control\" [(ngModel)]=\"assignment.assignmentTotal\" (ngModelChange)=\"updateTotalScore()\"></td>\n        <td><p>{{ (assignment.assignmentScore != null && assignment.assignmentScore + \"\" != \"\") ? ((assignment.assignmentScore / assignment.assignmentTotal) * 100).toFixed(2) + \"%\" : \"\" }}</p></td>\n        <td><button (click)=\"deleteAssignment(i)\" class=\"btn btn-secondary\">X</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/class-page/class-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClassPageComponent = (function () {
    function ClassPageComponent(authService, router, dataService, route, changeDetector) {
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.changeDetector = changeDetector;
    }
    ClassPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authService.session) {
            this.router.navigateByUrl('/login');
        }
        this.tests = 0;
        if (this.authService.username = null) {
            this.router.navigateByUrl('/login');
        }
        this.route.params.subscribe(function (params) {
            _this.index = params['index'];
            _this.name = _this.dataService.gradebook.course[_this.index].name;
        });
        this.gradebook = this.dataService.gradebook.course[this.index];
        this.assignments = {
            success: true,
            assignments: [],
            categories: []
        };
        this.assignments.assignments = this.gradebook.assignments.map(function (x) {
            if (x.score.points == null) {
                return {
                    assignmentName: x.name,
                    assignmentType: x.type,
                    assignmentScore: null,
                    assignmentTotal: null
                };
            }
            return {
                assignmentName: x.name,
                assignmentType: x.type,
                assignmentScore: x.score.points,
                assignmentTotal: x.score.pointspossible
            };
        });
        this.assignments.categories = this.gradebook.summary.filter(function (y) {
            if (y.name == "TOTAL") {
                return false;
            }
            return true;
        }).map(function (x) {
            return {
                categoryName: x.name,
                categoryWeight: parseFloat(x.weight.substring(0, x.weight.indexOf('%')))
            };
        });
        this.original = JSON.parse(JSON.stringify(this.assignments));
        this.updateTotalScore();
        this.originalScore = this.totalScore;
    };
    ClassPageComponent.prototype.getCategories = function (type) {
        var index = this.assignments.categories.map(function (x) {
            return x.categoryName;
        }).indexOf(type);
        var newarray = JSON.parse(JSON.stringify(this.assignments.categories));
        newarray.splice(index, 1);
        return newarray;
    };
    ClassPageComponent.prototype.deleteAssignment = function (index) {
        this.assignments.assignments.splice(index, 1);
        this.changeDetector.detectChanges();
        this.updateTotalScore();
    };
    ClassPageComponent.prototype.addAssignment = function () {
        this.tests++;
        this.assignments.assignments.splice(0, 0, {
            assignmentName: "Test #" + this.tests,
            assignmentType: (this.assignments.categories.length != 0) ? this.assignments.categories[0].categoryName : this.assignments.assignments[0].assignmentType,
            assignmentScore: null,
            assignmentTotal: null
        });
        this.changeDetector.detectChanges();
    };
    ClassPageComponent.prototype.resetAssignments = function () {
        this.assignments = JSON.parse(JSON.stringify(this.original));
        this.changeDetector.detectChanges();
        this.updateTotalScore();
        this.tests = 0;
    };
    ClassPageComponent.prototype.updateTotalScore = function () {
        this.totalScore = 0;
        if (this.assignments.categories.length == 0) {
            var score = 0;
            var total = 0;
            for (var i = 0; i < this.assignments.assignments.length; i++) {
                if (this.assignments.assignments[i].assignmentScore != null) {
                    score += +this.assignments.assignments[i].assignmentScore;
                    total += +this.assignments.assignments[i].assignmentTotal;
                }
            }
            this.totalScore = (score / total) * 100;
            this.totalScore = +this.totalScore.toFixed(2);
        }
        else {
            var weightTotal = 0;
            var possiblePoints = new Array(this.assignments.categories.length);
            var totals = new Array(this.assignments.categories.length);
            var divide = 1;
            for (var i = 0; i < this.assignments.categories.length; i++) {
                weightTotal += this.assignments.categories[i].categoryWeight;
                possiblePoints[i] = 0;
                totals[i] = 0;
                for (var j = 0; j < this.assignments.assignments.length; j++) {
                    if (this.assignments.assignments[j].assignmentType == this.assignments.categories[i].categoryName && this.assignments.assignments[j].assignmentScore != null && "" + this.assignments.assignments[j].assignmentScore != "") {
                        totals[i] += +this.assignments.assignments[j].assignmentScore;
                        possiblePoints[i] += +this.assignments.assignments[j].assignmentTotal;
                    }
                }
                if (possiblePoints[i] != 0) {
                    this.totalScore += (totals[i] / possiblePoints[i]) * (this.assignments.categories[i].categoryWeight / 100);
                }
                else {
                    divide -= this.assignments.categories[i].categoryWeight / 100;
                }
            }
            this.totalScore = +(((this.totalScore / divide) * 100) - (weightTotal - 100)).toFixed(2);
        }
    };
    ClassPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-class-page',
            template: __webpack_require__("../../../../../src/app/components/class-page/class-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/class-page/class-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], ClassPageComponent);
    return ClassPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Score</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col col-lg-4 pt-5\">\n      <div class=\"card\">\n        <div class=\"card-header crimson\">\n          GPA\n        </div>\n        <div class=\"card-body gpa\">\n          Unweighted: {{gpa.toFixed(2)}}\n        </div>\n        <div class=\"card-body gpa\">\n          Weighted: {{weightedgpa.toFixed(2)}}\n          <br><br>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col col-lg-8 pt-5\">\n      <div class=\"card\">\n        <div class=\"card-header crimson\">\n          Recent Updates\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table borderless-paddingless table-hover\">\n              <tbody>\n                <tr *ngFor=\"let class of this.dataService.recents; let i = index\">\n                  <td class=\"paddingDiv\" [routerLink]=\"['/classpage', i]\"><a class=\"text-dark crimson\">{{class.name}}</a></td>\n                  <td class=\"paddingDiv crimson\" [routerLink]=\"['/classpage', i]\">{{class.score.points}} / {{class.score.pointspossible}}</td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col col-lg-12 pt-5\">\n      <div class=\"card\">\n        <div class=\"card-header crimson\">\n          Classes\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table borderless table-hover\">\n              <tbody>\n                <tr *ngFor=\"let class of overview.course; let i = index\">\n                  <td class=\"paddingDiv\" [routerLink]=\"['/classpage', i]\"><a class=\"text-dark crimson\">{{class.name}}</a></td>\n                  <td class=\"paddingDiv crimson\" [routerLink]=\"['/classpage', i]\">{{class.grade}}%</td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      </div>\n    </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(authService, router, dataService) {
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (!this.authService.session) {
            this.router.navigateByUrl('/login');
        }
        this.overview = this.dataService.gradebook;
        this.gpa = this.dataService.gpa;
        this.weightedgpa = this.dataService.weightedgpa;
        //var data = this.dataService.getDataPoints(0);
        //this.chart = new Chart('canvas', {
        //  type:'line',
        //  data: data,
        //  options: {
        //    scales: {
        //        xAxes: [{
        //            type: 'time'
        //        }]
        //      }
        //  }
        //    });
    };
    HomeComponent.prototype.logout = function () {
        this.authService.username = null;
        this.authService.password = null;
        this.authService.session = false;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Score</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n<br><br>\n\n<div class=\"container text-center px-5\">\n  <h3 class=\"title\">- Score -</h3>\n  <br><br><br><br>\n\n    <div class=\"form-group form-signin\">\n      <input type=\"text\" class=\"form-control\" (keyup.enter)=\"login()\" placeholder=\"BSD Username\"  [(ngModel)]=\"username\" name=\"username\">\n    </div>\n    <div class=\"form-group form-signin\">\n      <input type=\"password\" (keyup.enter)=\"login()\" class=\"form-control\" placeholder=\"BSD Password\" id=\"password\" [(ngModel)]=\"password\" name=\"password\">\n    </div>\n    <button (click)=\"login()\" style=\"width: 300px\" class=\"btn btn-dark crimson\" >Login</button>\n  <br><br>\n\n  <i *ngIf=\"loading\" class=\"fa fa-gear fa-spin\" style=\"font-size:24px\"></i>\n  <div *ngIf=\"failed\" class=\"alert alert-danger\">\n    <strong>Mcklyde screwed up the server again</strong> Come back later lmao\n  </div>\n  <div *ngIf=\"incorrect\" class=\"alert alert-danger\">\n    <strong>Invalid credentials.</strong> Please enter your BSD credentials and try again.\n  </div>\n\n<br><br><br><br><br><br>\n\n<footer class=\"pt-5 my-md-5 pt-md-5 border-top\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <p class=\"crimson text-muted\">Lucas Zhou <br>Zizheng Cheng<br>Mcklyde Lagnada<br>Elliot Gluck</p>\n    </div>\n    <div class=\"col\">\n      <a href=\"https://discord.gg/QjjceDK\" class=\"crimson\"> Join our Discord </a>\n    </div>\n\n  </div>\n</footer>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, dataService) {
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authService.username = this.username;
        this.authService.password = this.password;
        this.dataService.getGradebook().subscribe(function (res) {
            _this.dataService.gradebook = res;
            if (_this.dataService.gradebook.course.length == 0) {
                _this.incorrect = true;
                _this.loading = false;
            }
            else {
                _this.authService.session = true;
                _this.dataService.checkEmpty();
                console.log(_this.dataService.gradebook);
                _this.dataService.calculateGPA();
                _this.dataService.setRecents();
                _this.router.navigateByUrl('/home');
            }
        }, function (err) {
            _this.failed = true;
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-dark\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link text-white\" routerLink=\"/login\">Login</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link text-white\" routerLink=\"/register\">Register</a>\n    </li>\n  </ul>\n</div>\n\n<br>\n\n<div class=\"container\">\n  <h3 class=\"display-3\">Register</h3>\n  <br>\n  <p>Please register using your Bellevue School District username and password.</p>\n  <br>\n\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" (keyup.enter)=\"register()\" [(ngModel)]=\"username\" name=\"username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" (keyup.enter)=\"register()\" [(ngModel)]=\"password\" name=\"password\">\n    </div>\n    <button (click)=\"register()\" class=\"btn btn-dark\">Register</button>\n  <br><br>\n  <i *ngIf=\"loading\" class=\"fa fa-gear fa-spin\" style=\"font-size:24px\"></i>\n  <div *ngIf=\"success\" class=\"alert alert-success\">\n    <strong>You are registered.</strong> You may now <a routerLink=\"/login\">login</a>.\n  </div>\n  <div *ngIf=\"invalid\" class=\"alert alert-danger\">\n    <strong>Invalid credentials.</strong> Please enter your BSD credentials and try again.\n  </div>\n  <div *ngIf=\"error\" class=\"alert alert-info\">\n    <strong>User already exists</strong> Try logging in.\n  </div>\n  <br><br>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.success = false;
        this.invalid = false;
        this.error = false;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.authService.checkUser(this.username, this.password).subscribe(function (validcheck) {
            if (validcheck.valid) {
                _this.authService.register(_this.username, _this.password).subscribe(function (response) {
                    if (response.user != null) {
                        _this.success = true;
                        _this.invalid = false;
                        _this.error = false;
                        _this.loading = false;
                    }
                    else {
                        _this.error = true;
                        _this.invalid = false;
                        _this.success = false;
                        _this.loading = false;
                    }
                });
            }
            else {
                _this.invalid = true;
                _this.success = false;
                _this.error = false;
                _this.loading = false;
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.register = function (username, password) {
        var dataObject = {
            user: {
                username: username,
                password: password
            }
        };
        return this.http.post('https://synergism.azurewebsites.net/api/auth/register', dataObject);
    };
    AuthService.prototype.login = function (username, password) {
        var dataObject = {
            user: {
                username: username,
                password: password
            }
        };
        return this.http.post('https://synergism.azurewebsites.net/api/auth/login', dataObject);
    };
    AuthService.prototype.checkUser = function (username, password) {
        var dataObject = {
            user: {
                username: username,
                password: password
            }
        };
        return this.http.post('https://synergism.azurewebsites.net/api/auth/checkUser', dataObject);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    DataService.prototype.getGradebook = function () {
        var dataObject = {
            userid: this.authService.username,
            password: this.authService.password,
            semester: 2
        };
        var headers = { 'content-type': 'application/json' };
        return this.http.post("https://385.elliotgluck.com:443/grades", dataObject, { headers: headers });
    };
    DataService.prototype.calculateGPA = function () {
        var gpa = 0;
        var weightedgpa = 0;
        for (var i = 0; i < this.gradebook.course.length; i++) {
            var grade = parseFloat("" + this.gradebook.course[i].grade);
            var isAp = this.gradebook.course[i].name.includes('AP');
            if (grade >= 90) {
                gpa += 4;
                if (isAp) {
                    weightedgpa += 5;
                }
                else {
                    weightedgpa += 4;
                }
            }
            else if (grade >= 80) {
                gpa += 3;
                if (isAp) {
                    weightedgpa += 4;
                }
                else {
                    weightedgpa += 3;
                }
            }
            else if (grade >= 70) {
                gpa += 2;
                if (isAp) {
                    weightedgpa += 3;
                }
                else {
                    weightedgpa += 2;
                }
            }
            else if (grade >= 60) {
                gpa += 1;
                if (isAp) {
                    weightedgpa += 2;
                }
                else {
                    weightedgpa += 1;
                }
            }
        }
        this.weightedgpa = weightedgpa / this.gradebook.course.length;
        this.gpa = gpa / this.gradebook.course.length;
    };
    DataService.prototype.checkEmpty = function () {
        for (var i = 0; i < this.gradebook.course.length; i++) {
            if (this.gradebook.course[i].assignments.length == 0) {
                this.gradebook.course[i].assignments.push({
                    type: "N/A",
                    score: {
                        points: 0,
                        pointspossible: 0
                    },
                    name: "no assignments in gradebook yet",
                    date: "N/A"
                });
            }
        }
    };
    DataService.prototype.setRecents = function () {
        var recents = [];
        for (var i = 0; i < this.gradebook.course.length; i++) {
            var j = 0;
            while (j < this.gradebook.course[i].assignments.length && this.gradebook.course[i].assignments[j].score.points == null) {
                j++;
            }
            if (j < this.gradebook.course[i].assignments.length) {
                recents.push(this.gradebook.course[i].assignments[j]);
            }
        }
        this.recents = recents;
        console.log(this.recents);
    };
    DataService.prototype.getDataPoints = function (index) {
        var data = [];
        var categories = this.gradebook.course[index].summary.filter(function (category) {
            if (category.name == "TOTAL") {
                return false;
            }
            return true;
        });
        var temp = [];
        for (var i = 0; i < categories.length; i++) {
            temp.push({
                weight: parseFloat("" + categories[i].weight),
                points: 0,
                total: 0
            });
        }
        var grade = 0;
        var total = 100;
        for (var i = this.gradebook.course[index].assignments.length - 1; i >= 0; i--) {
            for (var j = 0; j < categories.length; j++) {
                if (categories[j].name == this.gradebook.course[index].assignments[i].type && this.gradebook.course[index].assignments[i].score.points != null) {
                    temp[j].points += this.gradebook.course[index].assignments[i].score.points;
                    temp[j].total += this.gradebook.course[index].assignments[i].score.pointspossible;
                }
            }
            if (i != 0 && this.gradebook.course[index].assignments[i].date != this.gradebook.course[index].assignments[i - 1].date && this.gradebook.course[index].assignments[i].score.points != null) {
                grade = 0;
                total = 100;
                for (var j = 0; j < categories.length; j++) {
                    if (temp[j].points == 0) {
                        total -= temp[j].weight;
                    }
                    else {
                        grade += (temp[j].points / temp[j].total) * (temp[j].weight / 100);
                    }
                }
                grade = +(((grade * 10000) / total).toFixed(2));
                data.push({
                    x: this.parseDate(this.gradebook.course[index].assignments[i].date),
                    y: grade
                });
            }
            else if (i == 0) {
                grade = 0;
                total = 100;
                for (var j = 0; j < categories.length; j++) {
                    if (temp[j].points == 0) {
                        total -= temp[j].weight;
                    }
                    else {
                        grade += (temp[j].points / temp[j].total) * (temp[j].weight / 100);
                    }
                }
                grade = +(((grade * 10000) / total).toFixed(2));
                data.push({
                    x: this.parseDate(this.gradebook.course[index].assignments[i].date),
                    y: grade
                });
            }
        }
        return data;
    };
    DataService.prototype.parseDate = function (str) {
        var splitted = str.split('/');
        splitted[0] = parseInt(splitted[0]) - 1 + "";
        return new Date(splitted[2], splitted[0], splitted[1]);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map