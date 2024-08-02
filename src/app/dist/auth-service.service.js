"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isUserloggedIn = false;
    }
    AuthService.prototype.login = function (userName, password) {
        console.log(userName);
        console.log(password);
        this.isUserloggedIn = userName == 'admin' && password == 'admin123';
        localStorage.setItem('isUserLoggedIn', this.isUserloggedIn ? "true" : "false");
        return rxjs_1.of(this.isUserloggedIn).pipe(operators_1.delay(1000), operators_1.tap(function (val) {
            console.log("Is user logged in " + val);
        }));
    };
    AuthService.prototype.isLogged = function () {
        // return false;
        return true;
    };
    AuthService.prototype.logout = function () {
        this.isUserloggedIn = false;
        localStorage.removeItem('isUserLoggedIn');
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
