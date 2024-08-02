"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var child_component_1 = require("./child/child.component");
var age_pipe_1 = require("./pipes/age.pipe");
var users_service_1 = require("./Services/users.service");
var http_1 = require("@angular/common/http");
var users_component_1 = require("./users/users.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var router_1 = require("@angular/router");
var user_component_1 = require("./user/user.component");
var location_component_1 = require("./location/location.component");
var feedback_component_1 = require("./feedback/feedback.component");
var auth_guard_1 = require("./auth.guard");
var auth_service_service_1 = require("./auth-service.service");
var address_component_1 = require("./address/address.component");
var company_component_1 = require("./company/company.component");
var admin_guard_1 = require("./guards/admin.guard");
var add_user_component_1 = require("./add-user/add-user.component");
var forms_1 = require("@angular/forms");
var route = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                child_component_1.ChildComponent,
                age_pipe_1.AgePipe,
                users_component_1.UsersComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent,
                user_component_1.UserComponent,
                location_component_1.LocationComponent,
                feedback_component_1.FeedbackComponent,
                address_component_1.AddressComponent,
                company_component_1.CompanyComponent,
                add_user_component_1.AddUserComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(route),
                forms_1.FormsModule,
            ],
            providers: [users_service_1.UsersService, auth_guard_1.AuthGuard, auth_service_service_1.AuthService, admin_guard_1.AdminGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
// Bootstrap Modal:
// Impure Pipe : To remove special character
// Ngb bootstrap Modal service: giving input and how to catch the output...
// Development and production mode in angular.
// Angular Build 
// How angular starts and about entry point.
// NgAfter view init
