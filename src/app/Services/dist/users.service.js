"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
// import "rxjs/add/operators/catch"
// import "rxjs/add/operators/throw"
// import { catchError } from 'rxjs';
var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getHttpData = function () {
        // In angular an Ansync call like http call returns an Observable
        // And Observable are Lazy in nature so if we want to get any Observable then we need to subsribe to that observable
        return this.http.get("https://jsonplaceholder.typicode.com/users")
            .pipe(rxjs_1.catchError(function (error) {
            console.log('Error occcured :', error);
            return rxjs_1.throwError(error);
        }));
    };
    //Suppose the url is incorrect then we get 404 error.
    // So we need to catch the error
    UsersService.prototype.getUser = function (id) {
        return this.http.get("https://jsonplaceholder.typicode.com/users/" + id);
    };
    UsersService.prototype.isLoggedIn = function () {
        return true;
    };
    UsersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
