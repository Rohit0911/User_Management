"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var users_component_1 = require("./users/users.component");
var user_component_1 = require("./user/user.component");
var about_component_1 = require("./about/about.component");
var location_component_1 = require("./location/location.component");
var feedback_component_1 = require("./feedback/feedback.component");
var contact_component_1 = require("./contact/contact.component");
var auth_guard_1 = require("./auth.guard");
var address_component_1 = require("./address/address.component");
var company_component_1 = require("./company/company.component");
var admin_guard_1 = require("./guards/admin.guard");
var add_user_component_1 = require("./add-user/add-user.component");
var routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: users_component_1.UsersComponent
    },
    // Here we have an array so we can include multiple Guards..
    { path: 'user/:id', component: user_component_1.UserComponent,
        canActivate: [auth_guard_1.AuthGuard],
        canActivateChild: [admin_guard_1.AdminGuard],
        children: [
            { path: 'address', component: address_component_1.AddressComponent },
            { path: 'company', component: company_component_1.CompanyComponent }
        ] },
    { path: 'about', component: about_component_1.AboutComponent, children: [
            { path: 'location', outlet: 'map', component: location_component_1.LocationComponent },
            { path: 'feedback', outlet: 'feeds', component: feedback_component_1.FeedbackComponent }
        ] },
    { path: 'contact', component: contact_component_1.ContactComponent },
    // {path:'**',redirectTo:'users',pathMatch:'full'},
    { path: 'add-user', component: add_user_component_1.AddUserComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
