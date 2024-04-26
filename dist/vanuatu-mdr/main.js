"use strict";
(self["webpackChunkangular_template"] = self["webpackChunkangular_template"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_password_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/password/password.component */ 3672);
/* harmony import */ var _components_otp_otp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/otp/otp.component */ 3103);
/* harmony import */ var _components_setPassword_setPassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/setPassword/setPassword.component */ 6037);
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/auth.guard */ 5809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [
    {
        path: 'main',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main-nav_main-nav_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main-nav/main-nav.module */ 9892)).then((m) => m.MainNavModule), canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
    },
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
        children: [
            {
                path: 'login',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
            }
        ]
    },
    {
        path: '',
        component: _components_password_password_component__WEBPACK_IMPORTED_MODULE_1__.PasswordComponent,
        children: [
            {
                path: 'password',
                component: _components_password_password_component__WEBPACK_IMPORTED_MODULE_1__.PasswordComponent
            }
        ]
    },
    {
        path: '',
        component: _components_otp_otp_component__WEBPACK_IMPORTED_MODULE_2__.OtpComponent,
        children: [
            {
                path: 'otpverify',
                component: _components_otp_otp_component__WEBPACK_IMPORTED_MODULE_2__.OtpComponent
            }
        ]
    },
    {
        path: '',
        component: _components_setPassword_setPassword_component__WEBPACK_IMPORTED_MODULE_3__.SetPasswordComponent,
        children: [
            {
                path: 'set-password',
                component: _components_setPassword_setPassword_component__WEBPACK_IMPORTED_MODULE_3__.SetPasswordComponent
            }
        ]
    },
    { path: '**', redirectTo: 'login' }
];
class AppRoutingModule {
    constructor() {
        console.log("routing constructor");
    }
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 7217);







class AppComponent {
    constructor(location, snackbar) {
        this.location = location;
        this.snackbar = snackbar;
        this.subscriptions = [];
        history.pushState(null, 'null', window.location.href);
        this.location.onPopState(() => {
            history.pushState(null, 'null', window.location.href);
        });
    }
    ngOnInit() {
        this.onlineEvent = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(window, 'online');
        this.offlineEvent = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(window, 'offline');
        this.subscriptions.push(this.onlineEvent.subscribe(e => {
            this.connectionStatusMessage = 'Back to online';
            this.connectionStatus = 'online';
            this.snackbar.open(this.connectionStatusMessage, '', { duration: 3000, panelClass: ['online'], });
        }));
        this.subscriptions.push(this.offlineEvent.subscribe(e => {
            this.connectionStatus = 'offline';
            this.snackbar.open('Connection lost! You are not connected to internet', '', { panelClass: ['offline'] });
        }));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.LocationStrategy), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["type", "ball-scale-multiple"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet")(1, "ngx-spinner", 0);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerComponent], styles: [".mat-sort-header-arrow {\n  transform: none !important;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3ZhbnVhdHUlMjBmcm9udGVuZC9TUEMtTURSLVdlYi1Gcm9udGVuZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufSIsIjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/clipboard */ 6079);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_shared_device_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/shared/device.pipe */ 5390);
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenav/sidenav.component */ 226);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar/toolbar.component */ 1987);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_password_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/password/password.component */ 3672);
/* harmony import */ var _components_otp_otp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/otp/otp.component */ 3103);
/* harmony import */ var _components_setPassword_setPassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/setPassword/setPassword.component */ 6037);
/* harmony import */ var _dialog_cancelPatientsReg_cancelPatients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog/cancelPatientsReg/cancelPatients.component */ 6068);
/* harmony import */ var _dialog_logoutConfirm_logoutConfirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog/logoutConfirm/logoutConfirm.component */ 4261);
/* harmony import */ var _dialog_changePassword_changePassword_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog/changePassword/changePassword.component */ 1370);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var ngx_otp_input__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ngx-otp-input */ 2310);
/* harmony import */ var _dialog_issue_device_issue_device_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialog/issue-device/issue-device.component */ 8613);
/* harmony import */ var _dialog_remove_device_remove_device_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialog/remove-device/remove-device.component */ 701);
/* harmony import */ var _dialog_remove_file_remove_file_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog/remove-file/remove-file.component */ 3305);
/* harmony import */ var _dialog_view_device_view_device_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialog/view-device/view-device.component */ 7047);
/* harmony import */ var _dialog_recommendation_device_remove_recommend_device_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialog/recommendation-device-remove/recommend-device.component */ 7503);
/* harmony import */ var _dialog_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialog/add-user/add-user.component */ 6241);
/* harmony import */ var _dialog_deactive_user_deactive_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialog/deactive-user/deactive-user.component */ 317);
/* harmony import */ var _directives_trim_on_blur_trim_on_blur_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/trim-on-blur/trim-on-blur.module */ 2663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);


















































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_DATE_LOCALE, useValue: 'en-GB' }, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_31__.LayoutModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_32__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_33__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_35__.MatInputModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_37__.MatDatepickerModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__.MatDialogModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_40__.MatAutocompleteModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_41__.MatProgressBarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_42__.MatSelectModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_43__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRippleModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_45__.MatSnackBarModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_46__.ClipboardModule,
        ngx_otp_input__WEBPACK_IMPORTED_MODULE_47__.NgxOtpInputModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_48__.NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
        _directives_trim_on_blur_trim_on_blur_module__WEBPACK_IMPORTED_MODULE_19__.TrimOnBlurModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__.SidenavComponent,
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__.ToolbarComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _components_password_password_component__WEBPACK_IMPORTED_MODULE_6__.PasswordComponent,
        _components_otp_otp_component__WEBPACK_IMPORTED_MODULE_7__.OtpComponent,
        _components_setPassword_setPassword_component__WEBPACK_IMPORTED_MODULE_8__.SetPasswordComponent,
        _dialog_cancelPatientsReg_cancelPatients_component__WEBPACK_IMPORTED_MODULE_9__.CancelPatientsComponent,
        _dialog_logoutConfirm_logoutConfirm_component__WEBPACK_IMPORTED_MODULE_10__.LogoutConfirmComponent,
        _dialog_changePassword_changePassword_component__WEBPACK_IMPORTED_MODULE_11__.ChangePasswordComponent,
        _dialog_issue_device_issue_device_component__WEBPACK_IMPORTED_MODULE_12__.IssueDeviceComponent,
        _dialog_remove_device_remove_device_component__WEBPACK_IMPORTED_MODULE_13__.RemoveDeviceComponent,
        _dialog_view_device_view_device_component__WEBPACK_IMPORTED_MODULE_15__.ViewDeviceComponent,
        _dialog_recommendation_device_remove_recommend_device_component__WEBPACK_IMPORTED_MODULE_16__.RecommendRemoveDeviceComponent,
        _dialog_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_17__.AddUserComponent,
        _dialog_deactive_user_deactive_user_component__WEBPACK_IMPORTED_MODULE_18__.DeactiveUserComponent,
        _app_shared_device_pipe__WEBPACK_IMPORTED_MODULE_2__.DevicePipeGlobal,
        _dialog_remove_file_remove_file_component__WEBPACK_IMPORTED_MODULE_14__.RemoveFileComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_31__.LayoutModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_32__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_33__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_35__.MatInputModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_37__.MatDatepickerModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_39__.MatDialogModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_40__.MatAutocompleteModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_41__.MatProgressBarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_42__.MatSelectModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_43__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRippleModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_45__.MatSnackBarModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_46__.ClipboardModule,
        ngx_otp_input__WEBPACK_IMPORTED_MODULE_47__.NgxOtpInputModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_48__.NgxSpinnerModule, _directives_trim_on_blur_trim_on_blur_module__WEBPACK_IMPORTED_MODULE_19__.TrimOnBlurModule] }); })();


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.service */ 7420);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _services_main_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/main_local.service */ 1758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 8562);















function LoginComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "mat-icon", 18)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " error_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}

function LoginComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_div_21_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function LoginComponent_mat_hint_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter a valid mobile number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0, a1) {
  return {
    "loginCard ": a0,
    "loginCardHandset": a1
  };
};

const _c1 = function (a0, a1) {
  return {
    "headerImageWeb": a0,
    "headerImageHandset": a1
  };
};

const _c2 = function (a0, a1) {
  return {
    "login-btn": a0,
    "login-btn-disabled": a1
  };
};

class LoginComponent {
  constructor(fb, router, spinner, sharedService, snackBar, route, httpService) {
    this.fb = fb;
    this.router = router;
    this.spinner = spinner;
    this.sharedService = sharedService;
    this.snackBar = snackBar;
    this.route = route;
    this.httpService = httpService;
    this.countryCode = '+678';
    this.authToken = null;
    this.isHandset$ = this.sharedService.isHandset();
    this.hide = true;
  }

  ngOnInit() {
    this.spinner.show();
    this.loginForm = this.fb.group({
      mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(10)]]
    });
    let mdr_token = localStorage.getItem("mdr-token");
    let auth_token = localStorage.getItem("mdr-token-auth");
    this.role = localStorage.getItem("display-role");

    if (mdr_token && auth_token) {
      if (this.role == 'Analyst' || this.role == 'Admin') {
        this.router.navigate(['/main/users/list']);
      } else {
        this.router.navigate(['main/patients/patientslist']);
      }
    }

    this.spinner.hide();
  }

  ngAfterViewInit() {
    console.log("login");
  }

  clear() {
    this.mobileNumber = null;
  }

  keyPressNumber(event) {
    let test = String.fromCharCode(event.keyCode);

    if (/\d/.test(test)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  onSubmit() {
    this.spinner.show();
    const body = {
      "mobileNumber": this.mobileNumber,
      "isdCode": this.countryCode,
      "isMobile": false,
      "forgotPass": false
    };
    this.httpService.postRequestCall('auth/verifyUser', body, this.authToken, {}).subscribe({
      next: value => {
        this.spinner.hide();
        let data = value;
        this.snackBar.open(data?.message, '', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 3 * 1000
        });

        if (data.data.otpPage == true) {
          this.router.navigate(['otpverify'], {
            relativeTo: this.route,
            queryParams: {
              mob: this.loginForm.get('mobileNumber')?.value
            }
          });
        } else {
          this.router.navigate(['password'], {
            relativeTo: this.route,
            queryParams: {
              mob: this.loginForm.get('mobileNumber')?.value
            }
          });
        }
      },
      error: err => {
        this.errorStatus(err);
      }
    });
  }

  forgotPassword() {
    this.router.navigate(['forgot-password']);
  }

  errorStatus(error) {
    this.spinner.hide();
    let msg;

    if (error.error.message) {
      msg = error.error.message;
    } else {
      msg = 'Internal server error';
    }

    this.snackBar.open(msg, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3 * 1000
    });
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_main_local_service__WEBPACK_IMPORTED_MODULE_1__.HttpService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 27,
  vars: 30,
  consts: [[1, "loginContainer"], [1, "mat-elevation-z2", 3, "ngClass"], ["id", "formContainer", 3, "formGroup"], [1, "headerFlex", 2, "display", "flex", 3, "ngClass"], ["src", "assets/logo.png", "alt", "MDR logo"], [1, "mat-display-4", 2, "display", "flex", "color", "#000000", "opacity", "0.8", "padding-top", "20px"], [1, "mat-subheading-1", 2, "display", "flex", "opacity", "0.8", "color", "#000000", "padding-top", "28px"], ["appearance", "outline", 1, "example-full-width", 2, "width", "72%", "padding-top", "40px"], ["matPrefix", "", 2, "opacity", "0.38"], ["matInput", "", "maxlength", "10", "minlength", "5", "formControlName", "mobileNumber", "name", "mobileNumber", "required", "", 3, "ngModel", "ngModelChange", "keypress", "focus"], ["mobileInput", ""], ["style", "cursor:pointer", "mat-icon-button", "", "matSuffix", "", 4, "ngIf"], ["style", "cursor:pointer", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["class", "error-hint", 4, "ngIf"], [1, "action-area", 2, "padding-top", "24px"], ["mat-raised-button", "", 3, "ngClass", "disabled", "click"], [3, "ngClass"], ["mat-icon-button", "", "matSuffix", "", 2, "cursor", "pointer"], [2, "color", "red"], [1, "material-icons-outlined"], ["mat-icon-button", "", "matSuffix", "", 2, "cursor", "pointer", 3, "click"], [1, "error-hint"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 2)(5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Vanuatu Medical Disability Registry ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Login with phone number ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 7)(14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Mobile Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "+678 \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.mobileNumber = $event;
      })("keypress", function LoginComponent_Template_input_keypress_18_listener($event) {
        return ctx.keyPressNumber($event);
      })("focus", function LoginComponent_Template_input_focus_18_listener() {
        return ctx.loginForm.controls["mobileNumber"].markAsTouched();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 4, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 3, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, LoginComponent_mat_hint_22_Template, 2, 0, "mat-hint", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "VERIFY");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](18, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 10, ctx.isHandset$), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 12, ctx.isHandset$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](21, _c1, !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 14, ctx.isHandset$), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 16, ctx.isHandset$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.mobileNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.controls["mobileNumber"].invalid && ctx.loginForm.controls["mobileNumber"].touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.loginForm.controls["mobileNumber"].invalid && ctx.loginForm.controls["mobileNumber"].touched) && ctx.mobileNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.controls["mobileNumber"].hasError("minlength") && ctx.loginForm.controls["mobileNumber"].touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](24, _c2, !ctx.loginForm.invalid, ctx.loginForm.invalid))("disabled", ctx.loginForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](27, _c2, !ctx.loginForm.invalid, ctx.loginForm.invalid));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".error-hint[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.loginContainer[_ngcontent-%COMP%] {\n  background-color: var(--primary-700);\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: 100%;\n  margin: 0;\n  position: relative;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.headerFlex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.headerFlex[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 88%;\n  height: 112%;\n}\n\n.headerImageWeb[_ngcontent-%COMP%] {\n  width: 167px;\n  height: 126px;\n  margin-top: 12px;\n  background-color: #FFFFFF;\n  border-radius: 8px;\n}\n\n.headerImageHandset[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  margin-top: 30px;\n  background-color: #FFFFFF;\n}\n\n.loginCard[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 420px;\n  height: 500px;\n  align-items: center;\n}\n\n.loginCard[_ngcontent-%COMP%]   #formContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.loginCard[_ngcontent-%COMP%]   #formContainer[_ngcontent-%COMP%]   #login-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  color: rgb(255, 255, 255);\n}\n\n.loginCardHandset[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 320px;\n  height: 520px;\n  align-items: center;\n}\n\n.loginCardHandset[_ngcontent-%COMP%]   #formContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-prefix {\n  top: 0em;\n}\n\n[_nghost-%COMP%]     .mat-form-field-label-wrapper {\n  top: -0.64375em !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0em;\n}\n\n.forgotpassword[_ngcontent-%COMP%] {\n  color: var(--primary-700);\n  cursor: pointer;\n}\n\n.action-area[_ngcontent-%COMP%] {\n  display: flex;\n  width: 72%;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.action-area[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  background-color: var(--primary-700);\n}\n\n.action-area[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n}\n\n.action-area[_ngcontent-%COMP%]   .login-btn-disabled[_ngcontent-%COMP%] {\n  cursor: default;\n  background-color: gray;\n  color: rgb(255, 255, 255);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-top: 30px;\n  position: relative;\n}\n\n  .success-snackbar {\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdmFudWF0dSUyMGZyb250ZW5kL1NQQy1NRFItV2ViLUZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFVBQUE7QUNKRjs7QURPQTtFQUVFLG9DQUFBO0VBQ0ksNEJBQUE7RUFBQSx1QkFBQTtFQUNDLFlBQUE7RUFDQSxTQUFBO0VBQ0Msa0JBQUE7QUNMUjs7QURRRTtFQUNFLFdBQUE7QUNMSjs7QURRRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDTEo7O0FET0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0xOOztBRFNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURVRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ1BKOztBRFVBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQXZEa0I7RUF3RGxCLG1CQUFBO0FDUEY7O0FEU0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDUE47O0FEUU07RUFFQSxZQUFBO0VBQ0UseUJBQUE7QUNQUjs7QURlQTtFQUVFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDYkY7O0FEY0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ1pKOztBRGdCQTtFQUNHLFFBQUE7QUNiSDs7QURnQkE7RUFDRSwwQkFBQTtBQ2JGOztBRGdCQTtFQUNFLFdBQUE7QUNiRjs7QURnQkE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNiRjs7QURpQkU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNkSjs7QURlSTtFQUNFLG9DQUFBO0FDYk47O0FEZ0JJO0VBQ0MseUJBQUE7QUNkTDs7QURpQkk7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ2ZOOztBRHFCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDbEJKOztBRG9CRTtFQUNFLHFCQUFBO0FDakJKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnO1xuXG4kbG9naW4tY2FyZC1oZWlnaHQ6IDUwMHB4O1xuXG5cbi5lcnJvci1oaW50e1xuICBjb2xvcjogcmVkOyBcbn1cblxuLmxvZ2luQ29udGFpbmVye1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktNzAwKTtcbiAgICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5oZWFkZXJGbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGltZ3tcbiAgICAgIHdpZHRoOiA4OCU7XG4gICAgICBoZWlnaHQ6IDExMiU7XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlckltYWdlV2Vie1xuICAgIHdpZHRoOiAxNjdweDtcbiAgICBoZWlnaHQ6IDEyNnB4O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cblxuXG4gIC5oZWFkZXJJbWFnZUhhbmRzZXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIH1cblxuLmxvZ2luQ2FyZHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogIGF1dG87XG4gIHdpZHRoOiA0MjBweDtcbiAgaGVpZ2h0OiAkbG9naW4tY2FyZC1oZWlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgI2Zvcm1Db250YWluZXJ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgI2xvZ2luLWJ0bntcbiAgICAgICAgLy8gd2lkdGg6IDQ1JTtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcbiAgICAgIH1cbiAgICB9XG4gICBcbn1cblxuXG5cbi5sb2dpbkNhcmRIYW5kc2V0e1xuICAvLyBtYXJnaW4tdG9wOiAxNTBweCA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46ICBhdXRvO1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogNTIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAjZm9ybUNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgIFxuICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgge1xuICAgdG9wOiAwZW1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgdG9wOiAtMC42NDM3NWVtICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICBtYXJnaW46IDBlbTtcbn1cblxuLmZvcmdvdHBhc3N3b3Jke1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS03MDApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuXG4gIC5hY3Rpb24tYXJlYXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA3MiU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAubWF0LXJhaXNlZC1idXR0b257XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTcwMCk7XG4gICAgfVxuXG4gICAgLmxvZ2luLWJ0bntcbiAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG5cbiAgICB9XG4gICAgLmxvZ2luLWJ0bi1kaXNhYmxlZHtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICB9XG5cblxuICB9XG5cbiAgLmNhcmQtaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIDo6bmctZGVlcCAuc3VjY2Vzcy1zbmFja2JhciB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwXG4gIH0iLCIuZXJyb3ItaGludCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5sb2dpbkNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktNzAwKTtcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlckZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZWFkZXJGbGV4IGltZyB7XG4gIHdpZHRoOiA4OCU7XG4gIGhlaWdodDogMTEyJTtcbn1cblxuLmhlYWRlckltYWdlV2ViIHtcbiAgd2lkdGg6IDE2N3B4O1xuICBoZWlnaHQ6IDEyNnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5oZWFkZXJJbWFnZUhhbmRzZXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLmxvZ2luQ2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA0MjBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dpbkNhcmQgI2Zvcm1Db250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbkNhcmQgI2Zvcm1Db250YWluZXIgI2xvZ2luLWJ0biB7XG4gIHdpZHRoOiAyMDBweDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmxvZ2luQ2FyZEhhbmRzZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogNTIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9naW5DYXJkSGFuZHNldCAjZm9ybUNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDM1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgge1xuICB0b3A6IDBlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgdG9wOiAtMC42NDM3NWVtICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luOiAwZW07XG59XG5cbi5mb3Jnb3RwYXNzd29yZCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTcwMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbi1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDcyJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWN0aW9uLWFyZWEgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS03MDApO1xufVxuLmFjdGlvbi1hcmVhIC5sb2dpbi1idG4ge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuLmFjdGlvbi1hcmVhIC5sb2dpbi1idG4tZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuOjpuZy1kZWVwIC5zdWNjZXNzLXNuYWNrYmFyIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufSJdfQ== */"]
});

/***/ }),

/***/ 3103:
/*!*************************************************!*\
  !*** ./src/app/components/otp/otp.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpComponent": () => (/* binding */ OtpComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_main_local_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/main_local.service */ 1758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.service */ 7420);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var ngx_otp_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-otp-input */ 2310);















function OtpComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.transform(ctx_r0.counter));
  }
}

function OtpComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OtpComponent_div_18_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onResend());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "RESEND OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}

const _c0 = function (a0, a1) {
  return {
    "loginCard ": a0,
    "loginCardHandset": a1
  };
};

const _c1 = function (a0, a1) {
  return {
    "headerImageWeb": a0,
    "headerImageHandset": a1
  };
};

const _c2 = function (a0, a1) {
  return {
    "verify-btn": a0,
    "verify-btn-disabled": a1
  };
};

class OtpComponent {
  constructor(fb, router, route, dialog, httpService, snackBar, spinner, sharedService) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.dialog = dialog;
    this.httpService = httpService;
    this.snackBar = snackBar;
    this.spinner = spinner;
    this.sharedService = sharedService;
    this.isForgotPassword = false;
    this.isOtp = true;
    this.validOtp = true;
    this.errorStatus = "success";
    this.authToken = null;
    this.countryCode = '+678';
    this.isHandset$ = this.sharedService.isHandset();
    this.otpInputConfig = {
      otpLength: 6,
      autofocus: true,
      classList: {
        inputBox: 'my-super-box-class',
        input: 'my-super-class',
        inputFilled: 'my-super-filled-class',
        inputDisabled: 'my-super-disable-class',
        inputSuccess: 'my-super-success-class',
        inputError: 'my-super-error-class'
      }
    };
    this.hide = true;
  }

  unloadHandler(event) {
    let result = confirm("Changes you made may not be saved.");

    if (result) {// Do more processing...
    }

    event.returnValue = false; // stay on same page
  }

  ngOnInit() {
    this.loginForm = this.fb.group({});
    this.route.queryParams.subscribe(params => {
      this.mobileNumber = params['mob'];
    });
    this.countTimer();
    this.loginForm.setErrors({
      'invalid': false
    });
  }

  transform(value) {
    const minutes = Math.floor(value / 60);
    return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }

  countTimer() {
    this.counter = 120;
    this.tick = 1000;
    this.countDown = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(0, this.tick).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(this.counter)).subscribe(() => {
      --this.counter;

      if (this.counter == 0) {
        this.countDown.unsubscribe();
      }
    });
  }

  ngAfterViewInit() {
    console.log("afterViewInit");
  }

  handeOtpChange(value) {
    this.validOtp = true;

    if (value[5] != null && value[5] != '') {
      this.isOtp = false;
    } else {
      this.isOtp = true;
    }
  }

  handleFillEvent(value) {
    this.otp = value;
    this.isOtp = false;
    this.errorStatus = "error";
  }

  onVerify() {
    this.spinner.show();
    const body = {
      "isdCode": this.countryCode,
      "mobileNumber": this.mobileNumber,
      "otp": this.otp,
      "isMobile": false
    };
    this.httpService.postRequestCall('auth/otp', body, this.authToken, {}).subscribe({
      next: value => {
        this.spinner.hide();
        let data = value;
        this.snackBar.open(data?.message, '', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 3 * 1000
        });
        this.router.navigate(['set-password'], {
          relativeTo: this.route,
          queryParams: {
            mob: this.mobileNumber
          }
        });
      },
      error: err => {
        this.validOtp = false;
        this.errorStatusFun(err);
      }
    });
  }

  onResend() {
    if (window.navigator.onLine) {
      this.spinner.show();
      const body = {
        "mobileNumber": this.mobileNumber,
        "isdCode": this.countryCode,
        "isMobile": true,
        "forgotPass": false
      };
      this.httpService.postRequestCall('auth/verifyUser', body, this.authToken, {}).subscribe({
        next: value => {
          this.spinner.hide();
          let data = value;
          this.snackBar.open('OTP sent to your registered contact detail', '', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 3 * 1000
          });
          this.countTimer();
        },
        error: err => {
          this.errorStatus(err);
        }
      });
    } else {
      this.snackBar.open('Please check your internet connection', '', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 3 * 1000
      });
    }
  }

  back() {
    this.router.navigate(['login']);
  }

  errorStatusFun(error) {
    this.spinner.hide();
    this.snackBar.open(error.error.message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3 * 1000
    });
  }

}

OtpComponent.ɵfac = function OtpComponent_Factory(t) {
  return new (t || OtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_main_local_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService));
};

OtpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: OtpComponent,
  selectors: [["app-otp"]],
  hostBindings: function OtpComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("beforeunload", function OtpComponent_beforeunload_HostBindingHandler($event) {
        return ctx.unloadHandler($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    }
  },
  decls: 26,
  vars: 31,
  consts: [[1, "otpContainer"], [1, "mat-elevation-z2", 3, "ngClass"], ["id", "formContainer", 3, "formGroup"], [1, "headerFlex", 3, "ngClass"], ["src", "assets/logo.png", "alt", "mdr logo"], [1, "mat-display-4", 2, "display", "flex", "color", "#000000", "opacity", "0.8", "padding-top", "20px"], [1, "mat-subheading-1", 2, "color", "#000000", "opacity", "0.8", "padding-top", "24px"], [1, "mat-subheading-1", 2, "padding-top", "4px"], [2, "padding-top", "36px"], [3, "config", "status", "otpChange", "fill"], ["style", "color:#006C4C;padding-top: 16px;", "class", "mat-headline", 4, "ngIf"], ["class", "action-area", "style", "padding-top: 16px;", 4, "ngIf"], [1, "action-area", 2, "padding-top", "16px"], ["mat-raised-button", "", 3, "ngClass", "disabled", "click"], [3, "ngClass"], [2, "padding-top", "12px"], [1, "mat-body-2", "back", 3, "click"], [1, "mat-headline", 2, "color", "#006C4C", "padding-top", "16px"], ["mat-raised-button", "", 2, "background-color", "#7E9689", 3, "click"], [2, "color", "#000000", "opacity", "0.87"]],
  template: function OtpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 2)(5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Vanuatu Medical Disability Registry ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Enter the OTP we sent to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "ngx-otp-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("otpChange", function OtpComponent_Template_ngx_otp_input_otpChange_16_listener($event) {
        return ctx.handeOtpChange($event);
      })("fill", function OtpComponent_Template_ngx_otp_input_fill_16_listener($event) {
        return ctx.handleFillEvent($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, OtpComponent_div_17_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, OtpComponent_div_18_Template, 4, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OtpComponent_Template_button_click_20_listener() {
        return ctx.onVerify();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "VERIFY");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 15)(24, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OtpComponent_Template_span_click_24_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "BACK");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](19, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 11, ctx.isHandset$), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 13, ctx.isHandset$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](22, _c1, !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 15, ctx.isHandset$), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 17, ctx.isHandset$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.mobileNumber, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.otpInputConfig)("status", ctx.errorStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.counter != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.counter == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](25, _c2, !ctx.otp, ctx.isOtp))("disabled", ctx.isOtp);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](28, _c2, !ctx.otp, ctx.isOtp));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, ngx_otp_input__WEBPACK_IMPORTED_MODULE_13__.NgxOtpInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  styles: [".error-hint[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: -40px;\n  margin-right: 200px;\n}\n\n.otpContainer[_ngcontent-%COMP%] {\n  background-color: var(--primary-700);\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: 100%;\n  margin: 0;\n  position: relative;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.headerFlex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.headerFlex[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 88%;\n  height: 112%;\n}\n\n.headerImageWeb[_ngcontent-%COMP%] {\n  width: 167px;\n  height: 126px;\n  margin-top: 10px;\n  background-color: #FFFFFF;\n  border-radius: 8px;\n}\n\n.headerImageHandset[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  margin-top: 30px;\n  background-color: #FFFFFF;\n}\n\n.loginCard[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 420px;\n  height: 500px;\n  align-items: center;\n}\n\n.loginCard[_ngcontent-%COMP%]   #formContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.loginCardHandset[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 320px;\n  height: 520px;\n  align-items: center;\n}\n\n.loginCardHandset[_ngcontent-%COMP%]   #formContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.back[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.each_input[_ngcontent-%COMP%]:focus {\n  outline-style: solid;\n  outline-color: red;\n}\n\n.action-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n  justify-content: center;\n}\n\n.action-area[_ngcontent-%COMP%]   .verify-btn[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n}\n\n.action-area[_ngcontent-%COMP%]   .verify-btn-disabled[_ngcontent-%COMP%] {\n  cursor: default;\n  background-color: gray;\n  color: rgb(255, 255, 255);\n}\n\n.forgot-password-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 35px;\n}\n\n.mat-headline[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-top: 30px;\n  position: relative;\n}\n\n.border-error[_ngcontent-%COMP%] {\n  border-color: red !important;\n  margin-top: -20px;\n}\n\n.border-not-error[_ngcontent-%COMP%] {\n  border-color: red !important;\n  margin-top: -20px;\n}\n\n.ngx-otp-input[_ngcontent-%COMP%]   .ngx-otp-input-box.my-new-special-box-class[_ngcontent-%COMP%] {\n  border-color: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3ZhbnVhdHUlMjBmcm9udGVuZC9TUEMtTURSLVdlYi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvb3RwL290cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFFRSxvQ0FBQTtFQUNJLDRCQUFBO0VBQUEsdUJBQUE7RUFDQyxZQUFBO0VBQ0EsU0FBQTtFQUNDLGtCQUFBO0FDTFI7O0FEUUU7RUFDRSxXQUFBO0FDTEo7O0FEUUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0xKOztBRE9JO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNMUjs7QURTRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDTko7O0FEVUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNQSjs7QURVQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFFRSxZQUFBO0VBQ0EsYUExRGdCO0VBMkRoQixtQkFBQTtBQ1JKOztBRFVJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ1JOOztBRGVBO0VBRUUsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNiRjs7QURjRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNaSjs7QURnQkE7RUFDRSxlQUFBO0FDYkY7O0FEZ0JFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQ2JKOztBRGlCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ2RKOztBRGVJO0VBQ0UseUJBQUE7QUNiTjs7QURnQks7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ2RQOztBRG1CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ2hCSjs7QURvQkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FDakJKOztBRG9CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDakJKOztBRG1CQztFQUNHLDRCQUFBO0VBQ0EsaUJBQUE7QUNoQko7O0FEa0JFO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtBQ2ZKOztBRGtCSTtFQUNFLDRCQUFBO0FDZk4iLCJmaWxlIjoib3RwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnO1xuXG4kbG9naW4tY2FyZC1oZWlnaHQ6IDUwMHB4O1xuXG5cbi5lcnJvci1oaW50e1xuICBjb2xvcjogcmVkOyBcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG4gIG1hcmdpbi1yaWdodDogMjAwcHg7XG59XG5cbi5vdHBDb250YWluZXJ7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS03MDApO1xuICAgICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmhlYWRlckZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogODglO1xuICAgICAgICBoZWlnaHQ6IDExMiU7XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlckltYWdlV2Vie1xuICAgIHdpZHRoOiAxNjdweDtcbiAgICBoZWlnaHQ6IDEyNnB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cblxuXG4gIC5oZWFkZXJJbWFnZUhhbmRzZXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIH1cblxuLmxvZ2luQ2FyZHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogIGF1dG87XG4gICAgLy8gbWFyZ2luLXRvcDogMTUwcHggO1xuICAgIHdpZHRoOiA0MjBweDtcbiAgICBoZWlnaHQ6ICRsb2dpbi1jYXJkLWhlaWdodDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgICNmb3JtQ29udGFpbmVye1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICBcbn1cblxuXG5cbi5sb2dpbkNhcmRIYW5kc2V0e1xuICAvLyBtYXJnaW4tdG9wOiAxNTBweCA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46ICBhdXRvO1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogNTIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAjZm9ybUNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLmJhY2t7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5lYWNoX2lucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbiAgICBvdXRsaW5lLWNvbG9yOiByZWQ7XG59XG5cblxuICAuYWN0aW9uLWFyZWF7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA3MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLnZlcmlmeS1idG57XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiBcbiAgICAgfVxuICAgICAudmVyaWZ5LWJ0bi1kaXNhYmxlZHtcbiAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgfVxuICB9XG4gXG5cbiAgLmZvcmdvdC1wYXNzd29yZC1jYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMzVweDtcbiAgfVxuXG5cbiAgLm1hdC1oZWFkbGluZXtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDAsIDAuODcpO1xuICB9XG5cbiAgLmNhcmQtaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gLmJvcmRlci1lcnJvciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgfVxuICAuYm9yZGVyLW5vdC1lcnJvciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgfVxuICAubmd4LW90cC1pbnB1dCB7XG4gICAgLm5neC1vdHAtaW5wdXQtYm94Lm15LW5ldy1zcGVjaWFsLWJveC1jbGFzcyB7XG4gICAgICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfSIsIi5lcnJvci1oaW50IHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG4gIG1hcmdpbi1yaWdodDogMjAwcHg7XG59XG5cbi5vdHBDb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTcwMCk7XG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXJGbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVhZGVyRmxleCBpbWcge1xuICB3aWR0aDogODglO1xuICBoZWlnaHQ6IDExMiU7XG59XG5cbi5oZWFkZXJJbWFnZVdlYiB7XG4gIHdpZHRoOiAxNjdweDtcbiAgaGVpZ2h0OiAxMjZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uaGVhZGVySW1hZ2VIYW5kc2V0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTYwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbi5sb2dpbkNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNDIwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9naW5DYXJkICNmb3JtQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dpbkNhcmRIYW5kc2V0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDUyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ2luQ2FyZEhhbmRzZXQgI2Zvcm1Db250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJhY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lYWNoX2lucHV0OmZvY3VzIHtcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XG4gIG91dGxpbmUtY29sb3I6IHJlZDtcbn1cblxuLmFjdGlvbi1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDcwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWN0aW9uLWFyZWEgLnZlcmlmeS1idG4ge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuLmFjdGlvbi1hcmVhIC52ZXJpZnktYnRuLWRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4uZm9yZ290LXBhc3N3b3JkLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDM1cHg7XG59XG5cbi5tYXQtaGVhZGxpbmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib3JkZXItZXJyb3Ige1xuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLmJvcmRlci1ub3QtZXJyb3Ige1xuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLm5neC1vdHAtaW5wdXQgLm5neC1vdHAtaW5wdXQtYm94Lm15LW5ldy1zcGVjaWFsLWJveC1jbGFzcyB7XG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59Il19 */"]
});

/***/ }),

/***/ 3672:
/*!***********************************************************!*\
  !*** ./src/app/components/password/password.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordComponent": () => (/* binding */ PasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/custom-validators */ 3562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.service */ 7420);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _services_main_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/main_local.service */ 1758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 8562);
















const _c0 = function (a0, a1) {
  return {
    "loginCard ": a0,
    "loginCardHandset": a1
  };
};

const _c1 = function (a0, a1) {
  return {
    "headerImageWeb": a0,
    "headerImageHandset": a1
  };
};

const _c2 = function (a0, a1) {
  return {
    "error-hint": a0,
    "normal-hint": a1
  };
};

const _c3 = function (a0, a1) {
  return {
    "login-btn": a0,
    "login-btn-disabled": a1
  };
};

const _c4 = function (a0, a1) {
  return {
    "mat-button": a0,
    "mat-button-disabled": a1
  };
};

class PasswordComponent {
  constructor(fb, router, spinner, sharedService, snackBar, route, httpService) {
    this.fb = fb;
    this.router = router;
    this.spinner = spinner;
    this.sharedService = sharedService;
    this.snackBar = snackBar;
    this.route = route;
    this.httpService = httpService;
    this.authToken = null;
    this.countryCode = '+678';
    this.isHandset$ = this.sharedService.isHandset();
    this.hide = true;
  }

  ngOnInit() {
    this.passwordForm = this.fb.group({
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_0__.PasswordValidator]]
    });
    this.route.queryParams.subscribe(params => {
      this.mobileNumber = params['mob'];
    });
  }

  ngAfterViewInit() {
    console.log("login");
  }

  keyPressAlphaNumeric(event) {
    let inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  keyPressPassword(event) {
    let inp = String.fromCharCode(event.keyCode);

    if (/[><,:;^'"]/.test(inp)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  onSubmit() {
    this.spinner.show();
    const body = {
      "mobileNumber": this.mobileNumber,
      "isdCode": this.countryCode,
      "password": this.passwordForm.get('password')?.value
    };
    this.httpService.postRequestCall('auth/login', body, this.authToken, {}).subscribe({
      next: value => {
        let val = value;
        this.spinner.hide();
        this.snackBar.open(val?.message, '', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 3 * 1000
        });
        let display_role;

        if (value?.data.roles[0] == '6868009') {
          display_role = "Admin";
        }

        if (value?.data.roles[0] == 'doctor') {
          display_role = "Healthcare provider";
        }

        if (value?.data.roles[0] == '224608005') {
          display_role = "Front office staff";
        }

        if (value?.data.roles[0] == '224529009') {
          display_role = "Device Issuer";
        }

        if (value?.data.roles[0] == 'ict') {
          display_role = "Analyst";
        }

        localStorage.setItem('mdr-token', value?.data.token);
        localStorage.setItem('mdr-token-auth', value?.data.token);
        localStorage.setItem('patient-session', value?.data.sessionId);
        localStorage.setItem('patient-number', '0');
        localStorage.setItem('userId', value?.data.userId);
        localStorage.setItem('userName', value?.data.username);
        localStorage.setItem('role', value?.data.roles[0]);
        localStorage.setItem("display-role", display_role);
        localStorage.setItem('contactNumber', value?.data.contactNumber);

        if (value?.data.roles[0] == 'ict' || value?.data.roles[0] == '6868009') {
          this.router.navigate(['main/users/list']);
        } else {
          this.router.navigate(['main/patients/patientslist']);
        }
      },
      error: err => {
        this.errorStatusFun(err);

        if (err.error.message == 'Too many attempts. Please try after 5 mins') {
          this.router.navigate(['login']);
        }
      }
    });
  }

  forgotPassword() {
    this.spinner.show();
    const body = {
      "mobileNumber": this.mobileNumber,
      "isdCode": this.countryCode,
      "isMobile": true,
      "forgotPass": true
    };
    this.httpService.postRequestCall('auth/verifyUser', body, this.authToken, {}).subscribe({
      next: value => {
        this.spinner.hide();
        let data = value;
        this.snackBar.open(data?.message, '', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 3 * 1000
        });
        this.router.navigate(['otpverify'], {
          relativeTo: this.route,
          queryParams: {
            mob: this.mobileNumber
          }
        });
      },
      error: err => {
        this.errorStatusFun(err);
      }
    });
  }

  errorStatusFun(error) {
    this.spinner.hide();
    this.snackBar.open(error.error.message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3 * 1000
    });
  }

  back() {
    this.router.navigate(['login']);
  }

}

PasswordComponent.ɵfac = function PasswordComponent_Factory(t) {
  return new (t || PasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_main_local_service__WEBPACK_IMPORTED_MODULE_2__.HttpService));
};

PasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PasswordComponent,
  selectors: [["app-password"]],
  decls: 35,
  vars: 33,
  consts: [[1, "passwordContainer"], [1, "mat-elevation-z2", 3, "ngClass"], ["id", "formContainer", 3, "formGroup"], [1, "headerFlex", 2, "display", "flex", 3, "ngClass"], ["src", "assets/logo.png", "alt", "MDR logo"], [1, "mat-display-4", 2, "display", "flex", "color", "#000000", "opacity", "0.8", "padding-top", "20px"], [1, "mat-subheading-1", 2, "display", "flex", "color", "#000000", "opacity", "0.8", "padding-top", "28px"], ["appearance", "outline", 1, "example-full-width", 2, "width", "80%", "padding-top", "40px"], ["matInput", "", "maxlength", "15", "formControlName", "password", 3, "type", "focus", "keydown.space", "keypress"], ["passwordInput", ""], ["mat-icon-button", "", "matSuffix", "", 2, "cursor", "pointer", 3, "click"], [1, "error-hint", 3, "ngClass"], [1, "action-area", 2, "padding-top", "44px"], ["mat-raised-button", "", 3, "ngClass", "disabled", "click"], [3, "ngClass"], [1, "action-area", 2, "padding-top", "20px"], ["mat-raised-button", "", 2, "background-color", "#7E9689", 3, "click"], [2, "color", "#000000", "opacity", "0.87"], [2, "padding-top", "20px"], [1, "mat-body-2", "back", 3, "click"]],
  template: function PasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 2)(5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Vanuatu Medical Disability Registry ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Enter the password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field", 7)(14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focus", function PasswordComponent_Template_input_focus_16_listener() {
        return ctx.passwordForm.controls["password"].markAsTouched();
      })("keydown.space", function PasswordComponent_Template_input_keydown_space_16_listener($event) {
        return $event.preventDefault();
      })("keypress", function PasswordComponent_Template_input_keypress_16_listener($event) {
        return ctx.keyPressPassword($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PasswordComponent_Template_div_click_18_listener() {
        return ctx.hide = !ctx.hide;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-hint", 11)(22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " 8-15 characters, with at least one number, special, uppercase, and lowercase characters");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 12)(25, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PasswordComponent_Template_button_click_25_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "VERIFY");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 15)(29, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PasswordComponent_Template_button_click_29_listener() {
        return ctx.forgotPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "FORGOT PASSWORD");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 18)(33, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PasswordComponent_Template_span_click_33_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "BACK");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](18, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 10, ctx.isHandset$), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 12, ctx.isHandset$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.passwordForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](21, _c1, !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 14, ctx.isHandset$), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 16, ctx.isHandset$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "Hide password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](24, _c2, ctx.passwordForm.controls["password"].hasError("invalidPassword") && ctx.passwordForm.controls["password"].touched, !(ctx.passwordForm.controls["password"].hasError("invalidPassword") && ctx.passwordForm.controls["password"].touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](27, _c3, !ctx.passwordForm.invalid, ctx.passwordForm.invalid))("disabled", ctx.passwordForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](30, _c4, !ctx.passwordForm.invalid, ctx.passwordForm.invalid));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: [".error-hint[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.normal-hint[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.passwordContainer[_ngcontent-%COMP%] {\n  background-color: var(--primary-700);\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: 100%;\n  margin: 0;\n  position: relative;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.headerFlex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.headerFlex[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 88%;\n  height: 112%;\n}\n\n.headerImageWeb[_ngcontent-%COMP%] {\n  width: 167px;\n  height: 126px;\n  margin-top: 10px;\n  background-color: #FFFFFF;\n  border-radius: 8px;\n}\n\n.headerImageHandset[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  background-color: #FFFFFF;\n}\n\n.loginCard[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 420px;\n  height: 560px;\n  align-items: center;\n}\n\n.loginCard[_ngcontent-%COMP%]   #formContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.loginCard[_ngcontent-%COMP%]   #formContainer[_ngcontent-%COMP%]   #login-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  color: rgb(255, 255, 255);\n}\n\n.loginCardHandset[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 320px;\n  height: 520px;\n  align-items: center;\n}\n\n.loginCardHandset[_ngcontent-%COMP%]   #formContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-prefix {\n  top: 0em;\n}\n\n[_nghost-%COMP%]     .mat-form-field-label-wrapper {\n  top: -0.64375em !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0em;\n}\n\n.forgotpassword[_ngcontent-%COMP%] {\n  color: var(--primary-700);\n  cursor: pointer;\n}\n\n.action-area[_ngcontent-%COMP%] {\n  display: flex;\n  width: 80%;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.action-area[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  background-color: var(--primary-700);\n}\n\n.action-area[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  color: rgb(255, 255, 255);\n}\n\n.action-area[_ngcontent-%COMP%]   .login-btn-disabled[_ngcontent-%COMP%] {\n  cursor: default;\n  background-color: gray;\n  color: rgb(255, 255, 255);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-top: 30px;\n  position: relative;\n}\n\n  .success-snackbar {\n  white-space: pre-wrap;\n}\n\n.back[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdmFudWF0dSUyMGZyb250ZW5kL1NQQy1NRFItV2ViLUZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFVBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7QUNKRjs7QURPQTtFQUVFLG9DQUFBO0VBQ0ksNEJBQUE7RUFBQSx1QkFBQTtFQUNDLFlBQUE7RUFDQSxTQUFBO0VBQ0Msa0JBQUE7QUNMUjs7QURRRTtFQUNFLFdBQUE7QUNMSjs7QURRRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDTEo7O0FET0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0xOOztBRFNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURVRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNQSjs7QURVQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUExRGtCO0VBMkRsQixtQkFBQTtBQ1BGOztBRFNJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ1BOOztBRFFNO0VBRUEsWUFBQTtFQUNFLHlCQUFBO0FDUFI7O0FEZUE7RUFFRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ2JGOztBRGNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ1pKOztBRGdCQTtFQUNHLFFBQUE7QUNiSDs7QURnQkE7RUFDRSwwQkFBQTtBQ2JGOztBRGdCQTtFQUNFLFdBQUE7QUNiRjs7QURnQkE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNiRjs7QURpQkU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNkSjs7QURlSTtFQUNFLG9DQUFBO0FDYk47O0FEZ0JJO0VBQ0MseUJBQUE7QUNkTDs7QURpQkk7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ2ZOOztBRHFCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDbEJKOztBRG9CRTtFQUNFLHFCQUFBO0FDakJKOztBRG9CRTtFQUNFLGVBQUE7QUNqQkoiLCJmaWxlIjoicGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0ICd+QGFuZ3VsYXIvbWF0ZXJpYWwvdGhlbWluZyc7XG5cbiRsb2dpbi1jYXJkLWhlaWdodDogNTYwcHg7XG5cblxuLmVycm9yLWhpbnR7XG4gIGNvbG9yOiByZWQ7IFxufVxuXG4ubm9ybWFsLWhpbnR7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ucGFzc3dvcmRDb250YWluZXJ7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS03MDApO1xuICAgICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmhlYWRlckZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDg4JTtcbiAgICAgIGhlaWdodDogMTEyJTtcbiAgICB9XG4gIH1cblxuICAuaGVhZGVySW1hZ2VXZWJ7XG4gICAgd2lkdGg6IDE2N3B4O1xuICAgIGhlaWdodDogMTI2cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuXG5cbiAgLmhlYWRlckltYWdlSGFuZHNldHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIH1cblxuLmxvZ2luQ2FyZHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogIGF1dG87XG4gIHdpZHRoOiA0MjBweDtcbiAgaGVpZ2h0OiAkbG9naW4tY2FyZC1oZWlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgI2Zvcm1Db250YWluZXJ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgI2xvZ2luLWJ0bntcbiAgICAgICAgLy8gd2lkdGg6IDQ1JTtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcbiAgICAgIH1cbiAgICB9XG4gICBcbn1cblxuXG5cbi5sb2dpbkNhcmRIYW5kc2V0e1xuICAvLyBtYXJnaW4tdG9wOiAxNTBweCA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46ICBhdXRvO1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogNTIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAjZm9ybUNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgXG4gIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCB7XG4gICB0b3A6IDBlbVxufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICB0b3A6IC0wLjY0Mzc1ZW0gIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gIG1hcmdpbjogMGVtO1xufVxuXG4uZm9yZ290cGFzc3dvcmR7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTcwMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG5cbiAgLmFjdGlvbi1hcmVhe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5tYXQtcmFpc2VkLWJ1dHRvbntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktNzAwKTtcbiAgICB9XG5cbiAgICAubG9naW4tYnRue1xuICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcblxuICAgIH1cbiAgICAubG9naW4tYnRuLWRpc2FibGVke1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIH1cblxuXG4gIH1cblxuICAuY2FyZC1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgOjpuZy1kZWVwIC5zdWNjZXNzLXNuYWNrYmFyIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXBcbiAgfVxuXG4gIC5iYWNre1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9IiwiLmVycm9yLWhpbnQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ubm9ybWFsLWhpbnQge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnBhc3N3b3JkQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS03MDApO1xuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyRmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlYWRlckZsZXggaW1nIHtcbiAgd2lkdGg6IDg4JTtcbiAgaGVpZ2h0OiAxMTIlO1xufVxuXG4uaGVhZGVySW1hZ2VXZWIge1xuICB3aWR0aDogMTY3cHg7XG4gIGhlaWdodDogMTI2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmhlYWRlckltYWdlSGFuZHNldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4ubG9naW5DYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDQyMHB4O1xuICBoZWlnaHQ6IDU2MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ2luQ2FyZCAjZm9ybUNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxvZ2luQ2FyZCAjZm9ybUNvbnRhaW5lciAjbG9naW4tYnRuIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4ubG9naW5DYXJkSGFuZHNldCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiA1MjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dpbkNhcmRIYW5kc2V0ICNmb3JtQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgge1xuICB0b3A6IDBlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgdG9wOiAtMC42NDM3NWVtICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luOiAwZW07XG59XG5cbi5mb3Jnb3RwYXNzd29yZCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTcwMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbi1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDgwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWN0aW9uLWFyZWEgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS03MDApO1xufVxuLmFjdGlvbi1hcmVhIC5sb2dpbi1idG4ge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuLmFjdGlvbi1hcmVhIC5sb2dpbi1idG4tZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuOjpuZy1kZWVwIC5zdWNjZXNzLXNuYWNrYmFyIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4uYmFjayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
});

/***/ }),

/***/ 6037:
/*!*****************************************************************!*\
  !*** ./src/app/components/setPassword/setPassword.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetPasswordComponent": () => (/* binding */ SetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/custom-validators */ 3562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _services_main_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/main_local.service */ 1758);
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.service */ 7420);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 8562);
















function SetPasswordComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SetPasswordComponent_div_18_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.hide = !ctx_r7.hide);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Hide password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.hide ? "visibility_off" : "visibility");
  }
}

function SetPasswordComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "mat-icon", 23)(2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " error_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}

function SetPasswordComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SetPasswordComponent_div_27_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.confirmhide = !ctx_r9.confirmhide);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Hide password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.confirmhide ? "visibility_off" : "visibility");
  }
}

function SetPasswordComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "mat-icon", 23)(2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " error_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}

function SetPasswordComponent_mat_hint_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password do not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0, a1) {
  return {
    "loginCard ": a0,
    "loginCardHandset": a1
  };
};

const _c1 = function (a0, a1) {
  return {
    "headerImageWeb": a0,
    "headerImageHandset": a1
  };
};

const _c2 = function (a0, a1) {
  return {
    "error-hint": a0,
    "normal-hint": a1
  };
};

const _c3 = function (a0, a1) {
  return {
    "login-btn": a0,
    "login-btn-disabled": a1
  };
};

const _c4 = function (a0, a1) {
  return {
    "mat-button": a0,
    "mat-button-disabled": a1
  };
};

class SetPasswordComponent {
  constructor(fb, router, route, spinner, snackBar, httpService, sharedService) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.spinner = spinner;
    this.snackBar = snackBar;
    this.httpService = httpService;
    this.sharedService = sharedService;
    this.authToken = null;
    this.isHandset$ = this.sharedService.isHandset();
    this.hide = true;
    this.confirmhide = true;
    this.countryCode = '+678';
  }

  ngOnInit() {
    this.setPasswordForm = this.fb.group({
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_0__.PasswordValidator]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_0__.PasswordValidator, (0,_shared_custom_validators__WEBPACK_IMPORTED_MODULE_0__.passwordMatchValidator)('password')]]
    });
    this.route.queryParams.subscribe(params => {
      this.id = +params['id'];
      this.flag = params['flag'];
      this.mobileNumber = params['mob'];
    });
  }

  ngAfterViewInit() {
    console.log("afterViweInit");
  }

  keyPressPassword(event) {
    let inp = String.fromCharCode(event.keyCode);

    if (/[><,:;^'"]/.test(inp)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  cancel() {
    this.router.navigate(['/login']);
  }

  onSave() {
    this.spinner.show();
    const body = {
      "isdCode": this.countryCode,
      "mobileNumber": this.mobileNumber,
      "newPassword": this.setPasswordForm.get('password')?.value
    };
    this.httpService.postRequestCall('auth/setPassword', body, this.authToken, {}).subscribe({
      next: value => {
        let val = value;
        this.spinner.hide();
        this.snackBar.open(val?.message, '', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 3 * 1000
        });
        this.router.navigate(['/login']);
      },
      error: err => {
        this.errorStatusFun(err);
      }
    });
  }

  errorStatusFun(error) {
    this.spinner.hide();
    this.snackBar.open(error.error.message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3 * 1000
    });
  }

}

SetPasswordComponent.ɵfac = function SetPasswordComponent_Factory(t) {
  return new (t || SetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_main_local_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService));
};

SetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SetPasswordComponent,
  selectors: [["app-set-password"]],
  decls: 37,
  vars: 37,
  consts: [[1, "setpasswordContainer"], [1, "mat-elevation-z2", 3, "ngClass"], ["id", "formContainer", 3, "formGroup"], [1, "headerFlex", 3, "ngClass"], ["src", "assets/logo.png", "alt", "mdr logo"], [1, "mat-display-4", 2, "display", "flex", "color", "#000000", "opacity", "0.8", "padding-top", "16px"], [1, "mat-subheading-1", 2, "padding-top", "20px", "color", "#000000", "opacity", "0.8"], ["appearance", "outline", 1, "example-full-width", 2, "width", "80%", "padding-top", "24px"], ["matInput", "", "maxlength", "15", "formControlName", "password", 3, "type", "focus", "keydown.space", "keypress"], ["passwordInput", ""], ["style", "cursor:pointer", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["style", "cursor:pointer", "mat-icon-button", "", "matSuffix", "", 4, "ngIf"], [1, "error-hint", 3, "ngClass"], ["appearance", "outline", 1, "example-full-width", 2, "width", "80%", "padding-top", "16px"], ["matInput", "", "maxlength", "15", "formControlName", "confirmPassword", 3, "type", "focus", "keydown.space", "keypress"], ["class", "error-hint", 4, "ngIf"], [1, "action-area"], ["mat-raised-button", "", 3, "ngClass", "disabled", "click"], [3, "ngClass"], [1, "cancel"], [1, "mat-body-2", 3, "click"], ["mat-icon-button", "", "matSuffix", "", 2, "cursor", "pointer", 3, "click"], ["mat-icon-button", "", "matSuffix", "", 2, "cursor", "pointer"], [2, "color", "red"], [1, "material-icons-outlined"], [1, "error-hint"]],
  template: function SetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2)(5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Vanuatu Medical Disability Registry ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Create New Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field", 7)(14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function SetPasswordComponent_Template_input_focus_16_listener() {
        return ctx.setPasswordForm.controls["password"].markAsTouched();
      })("keydown.space", function SetPasswordComponent_Template_input_keydown_space_16_listener($event) {
        return $event.preventDefault();
      })("keypress", function SetPasswordComponent_Template_input_keypress_16_listener($event) {
        return ctx.keyPressPassword($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SetPasswordComponent_div_18_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, SetPasswordComponent_div_19_Template, 4, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "8-15 characters, with at least one number, special, uppercase, and lowercase characters ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-form-field", 13)(23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Confirm Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 14, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function SetPasswordComponent_Template_input_focus_25_listener() {
        return ctx.setPasswordForm.controls["confirmPassword"].markAsTouched();
      })("keydown.space", function SetPasswordComponent_Template_input_keydown_space_25_listener($event) {
        return $event.preventDefault();
      })("keypress", function SetPasswordComponent_Template_input_keypress_25_listener($event) {
        return ctx.keyPressPassword($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, SetPasswordComponent_div_27_Template, 3, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, SetPasswordComponent_div_28_Template, 4, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, SetPasswordComponent_mat_hint_29_Template, 2, 0, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 16)(31, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SetPasswordComponent_Template_button_click_31_listener() {
        return ctx.onSave();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "SAVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 19)(35, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SetPasswordComponent_Template_span_click_35_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "CANCEL");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](22, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 14, ctx.isHandset$), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 16, ctx.isHandset$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.setPasswordForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](25, _c1, !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 18, ctx.isHandset$), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 20, ctx.isHandset$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.setPasswordForm.controls["password"].invalid && ctx.setPasswordForm.controls["password"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.setPasswordForm.controls["password"].invalid && ctx.setPasswordForm.controls["password"].touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](28, _c2, ctx.setPasswordForm.controls["password"].hasError("invalidPassword") && ctx.setPasswordForm.controls["password"].touched, !(ctx.setPasswordForm.controls["password"].hasError("invalidPassword") && ctx.setPasswordForm.controls["password"].touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.confirmhide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.setPasswordForm.controls["confirmPassword"].invalid && ctx.setPasswordForm.controls["confirmPassword"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.setPasswordForm.controls["confirmPassword"].invalid && ctx.setPasswordForm.controls["confirmPassword"].touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.setPasswordForm.controls["confirmPassword"].hasError("mismatch") && !ctx.setPasswordForm.controls["confirmPassword"].hasError("invalidPassword"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](31, _c3, !ctx.setPasswordForm.invalid, ctx.setPasswordForm.invalid))("disabled", ctx.setPasswordForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](34, _c4, !ctx.setPasswordForm.invalid, ctx.setPasswordForm.invalid));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: [".error-hint[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.normal-hint[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.setpasswordContainer[_ngcontent-%COMP%] {\n  background-color: var(--primary-700);\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: 100%;\n  margin: 0;\n  position: relative;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.headerFlex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.headerFlex[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 88%;\n  height: 112%;\n}\n\n.headerImageWeb[_ngcontent-%COMP%] {\n  width: 167px;\n  height: 126px;\n  margin-top: 10px;\n  background-color: #FFFFFF;\n  border-radius: 8px;\n}\n\n.headerImageHandset[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  margin-top: 30px;\n  background-color: #FFFFFF;\n}\n\n.loginCard[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 420px;\n  height: 520px;\n  align-items: center;\n}\n\n.loginCard[_ngcontent-%COMP%]   #formContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.loginCard[_ngcontent-%COMP%]   #formContainer[_ngcontent-%COMP%]   #login-btn[_ngcontent-%COMP%] {\n  width: 200px;\n  color: rgb(255, 255, 255);\n}\n\n.loginCardHandset[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 320px;\n  height: 520px;\n  align-items: center;\n}\n\n.loginCardHandset[_ngcontent-%COMP%]   #formContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.forgotpassword[_ngcontent-%COMP%] {\n  color: var(--primary-700);\n  cursor: pointer;\n}\n\n.action-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 80%;\n  margin-top: 4px;\n}\n\n.action-area[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  background-color: var(--primary-700);\n}\n\n.action-area[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  width: 328px;\n  color: rgb(255, 255, 255);\n}\n\n.action-area[_ngcontent-%COMP%]   .login-btn-disabled[_ngcontent-%COMP%] {\n  cursor: default;\n  width: 328px;\n  background-color: gray;\n  color: rgb(255, 255, 255);\n}\n\n.forgot-password-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 35px;\n}\n\n.mat-headline[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-top: 30px;\n  position: relative;\n}\n\n.cancel[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldFBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdmFudWF0dSUyMGZyb250ZW5kL1NQQy1NRFItV2ViLUZyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9zZXRQYXNzd29yZC9zZXRQYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFVBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7QUNKRjs7QURPQTtFQUVFLG9DQUFBO0VBQ0ksNEJBQUE7RUFBQSx1QkFBQTtFQUNDLFlBQUE7RUFDQSxTQUFBO0VBQ0Msa0JBQUE7QUNMUjs7QURRRTtFQUNFLFdBQUE7QUNMSjs7QURRRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDTEo7O0FET0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0xOOztBRFNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURVRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ1BKOztBRFVBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUVFLFlBQUE7RUFDQSxhQTVEZ0I7RUE2RGhCLG1CQUFBO0FDUko7O0FEVUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDUk47O0FEU007RUFFQSxZQUFBO0VBQ0UseUJBQUE7QUNSUjs7QURnQkE7RUFFRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ2RGOztBRGVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNiSjs7QURpQkE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNkRjs7QURrQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDZko7O0FEZ0JJO0VBQ0Usb0NBQUE7QUNkTjs7QURpQkk7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNmSjs7QURrQkk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNoQk47O0FEdUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDcEJKOztBRHdCRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUNyQko7O0FEd0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNyQko7O0FEd0JFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDckJKIiwiZmlsZSI6InNldFBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnO1xuXG4kbG9naW4tY2FyZC1oZWlnaHQ6IDUyMHB4O1xuXG5cbi5lcnJvci1oaW50e1xuICBjb2xvcjogcmVkOyBcbn1cblxuLm5vcm1hbC1oaW50e1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnNldHBhc3N3b3JkQ29udGFpbmVye1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktNzAwKTtcbiAgICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5oZWFkZXJGbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGltZ3tcbiAgICAgIHdpZHRoOiA4OCU7XG4gICAgICBoZWlnaHQ6IDExMiU7XG4gIH1cbiAgfVxuXG4gIC5oZWFkZXJJbWFnZVdlYntcbiAgICB3aWR0aDogMTY3cHg7XG4gICAgaGVpZ2h0OiAxMjZweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG5cblxuICAuaGVhZGVySW1hZ2VIYW5kc2V0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICB9XG5cbi5sb2dpbkNhcmR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46ICBhdXRvO1xuICAgIC8vIG1hcmdpbi10b3A6IDE1MHB4IDtcbiAgICB3aWR0aDogNDIwcHg7XG4gICAgaGVpZ2h0OiAkbG9naW4tY2FyZC1oZWlnaHQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICAjZm9ybUNvbnRhaW5lcntcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAjbG9naW4tYnRue1xuICAgICAgICAvLyB3aWR0aDogNDUlO1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKVxuICAgICAgfVxuICAgIH1cbiAgIFxufVxuXG5cblxuLmxvZ2luQ2FyZEhhbmRzZXR7XG4gIC8vIG1hcmdpbi10b3A6IDE1MHB4IDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogIGF1dG87XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiA1MjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICNmb3JtQ29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDM1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgXG4gIH1cbn1cblxuLmZvcmdvdHBhc3N3b3Jke1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS03MDApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuXG4gIC5hY3Rpb24tYXJlYXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgLm1hdC1yYWlzZWQtYnV0dG9ue1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS03MDApO1xuICAgIH1cblxuICAgIC5sb2dpbi1idG57XG4gICAgd2lkdGg6IDMyOHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuXG4gICAgfVxuICAgIC5sb2dpbi1idG4tZGlzYWJsZWQge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgd2lkdGg6IDMyOHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuXG4gICAgfVxuXG5cbiAgfVxuXG4gIC5mb3Jnb3QtcGFzc3dvcmQtY2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDM1cHg7XG4gIH1cblxuXG4gIC5tYXQtaGVhZGxpbmV7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwLCAwLjg3KTtcbiAgfVxuXG4gIC5jYXJkLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5jYW5jZWx7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICB9XG4gICIsIi5lcnJvci1oaW50IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLm5vcm1hbC1oaW50IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5zZXRwYXNzd29yZENvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktNzAwKTtcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlckZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZWFkZXJGbGV4IGltZyB7XG4gIHdpZHRoOiA4OCU7XG4gIGhlaWdodDogMTEyJTtcbn1cblxuLmhlYWRlckltYWdlV2ViIHtcbiAgd2lkdGg6IDE2N3B4O1xuICBoZWlnaHQ6IDEyNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5oZWFkZXJJbWFnZUhhbmRzZXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLmxvZ2luQ2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA0MjBweDtcbiAgaGVpZ2h0OiA1MjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dpbkNhcmQgI2Zvcm1Db250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbkNhcmQgI2Zvcm1Db250YWluZXIgI2xvZ2luLWJ0biB7XG4gIHdpZHRoOiAyMDBweDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmxvZ2luQ2FyZEhhbmRzZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogNTIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9naW5DYXJkSGFuZHNldCAjZm9ybUNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDM1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3Jnb3RwYXNzd29yZCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTcwMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbi1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5hY3Rpb24tYXJlYSAubWF0LXJhaXNlZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTcwMCk7XG59XG4uYWN0aW9uLWFyZWEgLmxvZ2luLWJ0biB7XG4gIHdpZHRoOiAzMjhweDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cbi5hY3Rpb24tYXJlYSAubG9naW4tYnRuLWRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB3aWR0aDogMzI4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzVweDtcbn1cblxuLm1hdC1oZWFkbGluZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhbmNlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59Il19 */"]
});

/***/ }),

/***/ 6241:
/*!*******************************************************!*\
  !*** ./src/app/dialog/add-user/add-user.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserComponent": () => (/* binding */ AddUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_main_local_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/main_local.service */ 1758);
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/main.service */ 1557);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _directives_trim_on_blur_trim_on_blur_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/trim-on-blur/trim-on-blur.directive */ 2590);


















function AddUserComponent_mat_hint_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter at least 3 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_hint_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter at least 3 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_hint_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter only alphabets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_hint_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Enter a valid mobile number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_hint_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Enter a valid mobile number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const org_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", org_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](org_r14.name);
} }
function AddUserComponent_mat_hint_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please select an organization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddUserComponent_mat_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", role_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](role_r15.value);
} }
function AddUserComponent_mat_hint_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please select a role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddUserComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Account configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7)(5, "mat-slide-toggle", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddUserComponent_div_57_Template_mat_slide_toggle_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.toggleChanged($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r13.userStatusText);
} }
class AddUserComponent {
    constructor(data, dialogRef, dialog, _formBuilder, httpFacadeService, httpFhirService, snackBar, route, spinner, router) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this.httpFacadeService = httpFacadeService;
        this.httpFhirService = httpFhirService;
        this.snackBar = snackBar;
        this.route = route;
        this.spinner = spinner;
        this.router = router;
        this.organizationsList = [];
        this.rolesList = [
            {
                id: "224608005",
                value: "Front office staff",
            },
            {
                id: "224529009",
                value: "Device Issuer",
            },
            {
                id: "doctor",
                value: "Healthcare provider",
            },
            {
                id: "6868009",
                value: "Admin",
            },
            {
                id: "ict",
                value: "Analyst",
            },
        ];
        this.authToken = null;
        this.mdrToken = null;
        this.userId = null;
        this.userStatusText = "User account is active";
        this.authToken = localStorage.getItem("mdr-token-auth");
        this.mdrToken = localStorage.getItem("mdr-token");
        this.type = data.type;
    }
    ngOnInit() {
        this.addPatientFormGroup = this._formBuilder.group({
            firstName: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[a-zA-Z]+$/)
                ],
            ],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[a-zA-Z]+$/)]],
            mobileNumber: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^-?(0|[1-9]\d*)?$/)
                ],
            ],
            roleId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            orgId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            isActive: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        this.getOrganizationsList();
    }
    toggleChanged(event) {
        console.log(event);
        if (event.checked)
            this.userStatusText = "User account is active";
        else
            this.userStatusText = "User account is inactive";
    }
    getOrganizationsList() {
        this.httpFhirService
            .getRequestCall("Organization?_count=50&_elements=_id,name&_sort=name", this.mdrToken, {})
            .subscribe({
            next: (response) => {
                for (let org of response.entry) {
                    let orgData = {
                        id: org.resource.id,
                        name: org.resource.name,
                    };
                    this.organizationsList.push(orgData);
                }
                if (this.data.type == "edit") {
                    this.getUserDetail();
                }
            },
            error: (err) => {
                if (err.status == 401 || err.status == 403)
                    this.dialogRef.close();
                this.errorStatus(err);
            }
        });
    }
    getUserDetail() {
        this.httpFhirService
            .getRequestCall(`Practitioner?_revinclude=PractitionerRole:practitioner&_id=${this.data.id}&_count=1&_sort=-_lastUpdated`, this.mdrToken, {})
            .subscribe((userData) => {
            this.userDetail = userData;
            let orgId = this.organizationsList.find((e) => userData.entry[1].resource.organization.reference.split("/")[1] ==
                +e.id);
            console.log("check org id: ", orgId, userData.entry[1].resource.organization.reference.split("/")[1], this.organizationsList);
            this.addPatientFormGroup.controls["firstName"].setValue(userData.entry[0].resource.name[0].given[0]);
            this.addPatientFormGroup.controls["lastName"].setValue(userData.entry[0].resource.name[0].family);
            this.addPatientFormGroup.controls["mobileNumber"].setValue(userData.entry[0].resource.telecom[0].value.split(" ")[1]);
            this.addPatientFormGroup.controls["roleId"].setValue(userData.entry[1].resource.code[0].coding[0].code);
            this.addPatientFormGroup.controls["orgId"].setValue(orgId.id);
            this.addPatientFormGroup.controls["isActive"].setValue(userData.entry[0].resource.active);
            this.userId = userData.entry[0].resource.id;
        });
    }
    updateData() {
        this.spinner.show();
        let userData = {
            resourceType: "Bundle",
            type: "transaction",
            entry: [
                {
                    fullUrl: "Practitioner/" + this.userId,
                    resource: {
                        resourceType: "Practitioner",
                        id: this.userId,
                        active: this.addPatientFormGroup.controls["isActive"].value,
                        name: [
                            {
                                family: this.addPatientFormGroup.controls["lastName"].value,
                                given: [this.addPatientFormGroup.controls["firstName"].value],
                            },
                        ],
                        telecom: [
                            {
                                system: "phone",
                                value: "(+678) " +
                                    this.addPatientFormGroup.controls["mobileNumber"].value,
                            },
                        ],
                    },
                    request: {
                        method: "PUT",
                        url: "Practitioner/" + this.userDetail.entry[0].resource.id,
                    },
                },
                {
                    fullUrl: "PractitionerRole/" + this.userDetail.entry[1].resource.id,
                    resource: {
                        resourceType: "PractitionerRole",
                        id: this.userDetail.entry[1].resource.id,
                        practitioner: {
                            reference: "Practitioner/" + this.userDetail.entry[0].resource.id,
                        },
                        organization: {
                            reference: "Organization/" +
                                this.addPatientFormGroup.controls["orgId"].value,
                        },
                        code: [
                            {
                                coding: [
                                    {
                                        system: "http://terminology.hl7.org/CodeSystem/practitioner-role",
                                        code: this.addPatientFormGroup.controls["roleId"].value,
                                    },
                                ],
                            },
                        ],
                    },
                    request: {
                        method: "PUT",
                        url: "PractitionerRole/" + this.userDetail.entry[1].resource.id,
                    },
                },
            ],
        };
        let contactNumber = "(+678) " + this.addPatientFormGroup.controls["mobileNumber"].value;
        this.httpFhirService.getRequestCall(`Practitioner?_count=400&_total=accurate`, this.mdrToken, {})
            .subscribe({
            next: (value) => {
                console.info(value);
                let userList = value.entry.filter((e) => e.resource.id != this.userId && e.resource.telecom[0].value == contactNumber);
                if (userList.length == 0) {
                    this.httpFhirService
                        .postRequestCall(``, userData, this.mdrToken, {})
                        .subscribe({
                        next: (value) => {
                            this.spinner.hide();
                            this.snackBar.open("User updated", "", {
                                horizontalPosition: "center",
                                verticalPosition: "bottom",
                                duration: 3 * 1000,
                            });
                            this.dialogRef.close({ data: "confirmed" });
                        },
                        error: (err) => {
                            if (err.status == 401 || err.status == 403)
                                this.dialogRef.close();
                            this.errorStatus(err);
                        },
                    });
                }
                else {
                    let err = {
                        error: {
                            message: "Duplicate mobile number"
                        }
                    };
                    this.errorStatus(err);
                }
            }
        });
    }
    onSave() {
        this.spinner.show();
        if (this.data.type == "add") {
            let userData = {
                firstName: this.addPatientFormGroup.controls["firstName"].value,
                lastName: this.addPatientFormGroup.controls["lastName"].value,
                mobileNumber: "(+678) " + this.addPatientFormGroup.controls["mobileNumber"].value,
                role: [
                    {
                        roleId: this.addPatientFormGroup.controls["roleId"].value,
                        orgId: this.addPatientFormGroup.controls["orgId"].value,
                    },
                ],
                active: this.addPatientFormGroup.controls["isActive"].value,
            };
            this.httpFacadeService
                .postRequestCall("Practitioner", userData, this.authToken, {})
                .subscribe({
                next: (value) => {
                    this.snackBar.open("User added", "", {
                        horizontalPosition: "center",
                        verticalPosition: "bottom",
                        duration: 3 * 1000,
                    });
                    this.dialogRef.close({ data: "confirmed" });
                    this.spinner.hide();
                },
                error: (err) => {
                    if (err.status == 401 || err.status == 403)
                        this.dialogRef.close();
                    this.errorStatus(err);
                },
            });
        }
        else {
            this.updateData();
        }
    }
    onCancel() {
        this.dialogRef.close({ data: "cancelled" });
    }
    /**
     * Common Methods
     *
     */
    errorStatus(error) {
        console.log("error is: ", error);
        this.spinner.hide();
        this.snackBar.open(error.error.message, "", {
            horizontalPosition: "center",
            verticalPosition: "bottom",
            duration: 3 * 1000,
        });
    }
    keyPressChar(event) {
        let inp = String.fromCharCode(event.keyCode);
        if (/[a-zA-Z]/.test(inp)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    capitalizeFirstLetter(controlName) {
        let value = this.addPatientFormGroup.controls[controlName].value;
        let updatedValue = value.charAt(0).toUpperCase() + value.slice(1);
        this.addPatientFormGroup.controls[controlName].setValue(updatedValue);
    }
    keyPressNumber(event) {
        let test = String.fromCharCode(event.keyCode);
        if (/\d/.test(test)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
}
AddUserComponent.ɵfac = function AddUserComponent_Factory(t) { return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_main_local_service__WEBPACK_IMPORTED_MODULE_0__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__.HttpServiceMdr), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
AddUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddUserComponent, selectors: [["app-add-user"]], decls: 63, vars: 19, consts: [[1, "dialog"], [1, "mat-display-3", 2, "font-weight", "500"], [1, "content"], [3, "formGroup"], [1, "section"], [1, "sub-section", 2, "padding-bottom", "10px"], [1, "mat-subheading-2", "section-label"], [1, "sub-section"], ["appearance", "outline", 1, "form-fields", 2, "width", "48%"], ["matInput", "", "required", "", "formControlName", "firstName", "appTrimOnBlur", "", 3, "maxlength", "keydown.space", "keypress", "input"], ["firstName", ""], ["align", "end"], ["class", "error-hint", 4, "ngIf"], ["matInput", "", "formControlName", "lastName", "appTrimOnBlur", "", 3, "maxlength", "keydown.space", "keypress", "input"], ["lastName", ""], ["appearance", "outline", 1, "form-fields", "mobile-input", 2, "width", "48%"], ["outlineFieldRef", ""], ["matPrefix", ""], ["matInput", "", "required", "", "formControlName", "mobileNumber", "appTrimOnBlur", "", 3, "maxlength", "focus", "keydown.space", "keypress"], ["mobileNumber", ""], ["appearance", "outline", 1, "form-fields"], ["name", "organization", "required", "", "formControlName", "orgId"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "role", "required", "", "formControlName", "roleId"], ["class", "section", 4, "ngIf"], ["mat-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "color", "primary", 3, "disabled", "click"], [1, "error-hint"], [3, "value"], ["formControlName", "isActive", "color", "primary", 2, "padding", "10px 0 10px 0", 3, "change"]], template: function AddUserComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-dialog-content", 2)(4, "form", 3)(5, "div", 4)(6, "div", 5)(7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "User details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "mat-form-field", 8)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Given name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.space", function AddUserComponent_Template_input_keydown_space_13_listener($event) { return $event.preventDefault(); })("keypress", function AddUserComponent_Template_input_keypress_13_listener($event) { return ctx.keyPressChar($event); })("input", function AddUserComponent_Template_input_input_13_listener() { return ctx.capitalizeFirstLetter("firstName"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-hint", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AddUserComponent_mat_hint_17_Template, 2, 0, "mat-hint", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AddUserComponent_mat_hint_18_Template, 2, 0, "mat-hint", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 8)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Family name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.space", function AddUserComponent_Template_input_keydown_space_22_listener($event) { return $event.preventDefault(); })("keypress", function AddUserComponent_Template_input_keypress_22_listener($event) { return ctx.keyPressChar($event); })("input", function AddUserComponent_Template_input_input_22_listener() { return ctx.capitalizeFirstLetter("lastName"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-hint", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AddUserComponent_mat_hint_26_Template, 2, 0, "mat-hint", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 7)(28, "mat-form-field", 15, 16)(30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Mobile Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "+678 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function AddUserComponent_Template_input_focus_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r5.updateOutlineGap()); })("keydown.space", function AddUserComponent_Template_input_keydown_space_34_listener($event) { return $event.preventDefault(); })("keypress", function AddUserComponent_Template_input_keypress_34_listener($event) { return ctx.keyPressNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-hint", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, AddUserComponent_mat_hint_38_Template, 2, 0, "mat-hint", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, AddUserComponent_mat_hint_39_Template, 2, 0, "mat-hint", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 4)(41, "div", 5)(42, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Organization details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 7)(45, "mat-form-field", 20)(46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, AddUserComponent_mat_option_49_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, AddUserComponent_mat_hint_50_Template, 2, 0, "mat-hint", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-form-field", 20)(52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, AddUserComponent_mat_option_55_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, AddUserComponent_mat_hint_56_Template, 2, 0, "mat-hint", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, AddUserComponent_div_57_Template, 8, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-dialog-actions", 11)(59, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddUserComponent_Template_button_click_59_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddUserComponent_Template_button_click_61_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.type == "add" ? "Add User" : "Edit User", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.addPatientFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("maxlength", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _r0.value.length, " / 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addPatientFormGroup.controls["firstName"].touched && ctx.addPatientFormGroup.controls["firstName"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addPatientFormGroup.controls["firstName"].hasError("pattern") || ctx.addPatientFormGroup.controls["firstName"].hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("maxlength", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _r3.value.length, " / 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addPatientFormGroup.controls["lastName"].hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("maxlength", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _r6.value.length, " / 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addPatientFormGroup.controls["mobileNumber"].touched && ctx.addPatientFormGroup.controls["mobileNumber"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addPatientFormGroup.controls["mobileNumber"].hasError("pattern") || ctx.addPatientFormGroup.controls["mobileNumber"].hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.organizationsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addPatientFormGroup.controls["orgId"].touched && ctx.addPatientFormGroup.controls["orgId"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.rolesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addPatientFormGroup.controls["roleId"].touched && ctx.addPatientFormGroup.controls["roleId"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.type == "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.addPatientFormGroup.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggle, _directives_trim_on_blur_trim_on_blur_directive__WEBPACK_IMPORTED_MODULE_2__.TrimOnBlurDirective], styles: ["*[_ngcontent-%COMP%] {\n  --primary-50: #F4FFF6;\n  --primary-100: #BDFFDE;\n  --primary-200: #89F8C7;\n  --primary-300: #6CDBAC;\n  --primary-400: #4EBF92;\n  --primary-500: #2CA378;\n  --primary-600: #008861;\n  --primary-700: #006C4C;\n  --primary-800: #005138;\n  --primary-900: #003826;\n  --secondary-50: #F4FFF6;\n  --secondary-100: #DDF7E7;\n  --secondary-200: #CFE9D9;\n  --secondary-300: #B3CCBE;\n  --secondary-400: #98B1A3;\n  --secondary-500: #7E9689;\n  --secondary-600: #657C70;\n  --secondary-700:#4D6357;\n  --secondary-800:#354B40;\n  --secondary-900:#1F352A;\n}\n\n.dialog[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n  padding: 16px 40px 16px 40px;\n  height: auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.section[_ngcontent-%COMP%]   .sub-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 16px;\n}\n\n.section[_ngcontent-%COMP%]   .sub-section[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 48%;\n}\n\n.section-label[_ngcontent-%COMP%] {\n  color: var(--primary-700);\n}\n\n[_nghost-%COMP%]     .mat-input-element::placeholder {\n  color: rgba(0, 0, 0, 0.8705882353);\n  padding-bottom: 10% !important;\n  background-color: white;\n}\n\n[_nghost-%COMP%]     .mat-form-field-infix {\n  top: -0.25em;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-prefix, .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-suffix[_ngcontent-%COMP%] {\n  top: -0.25em !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-label {\n  margin-top: 0em;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3ZhbnVhdHUlMjBmcm9udGVuZC9TUEMtTURSLVdlYi1Gcm9udGVuZC9zcmMvYXBwL2RpYWxvZy9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuc2NzcyIsImFkZC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFFQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQ0FKOztBQ25CQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QURzQko7O0FDbkJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBRHNCSjs7QUNsQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FEcUJKOztBQ25CSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QURxQlI7O0FDbkJRO0VBQ0ksVUFBQTtBRHFCWjs7QUNmQTtFQUNJLHlCQUFBO0FEa0JKOztBQ1hBO0VBQ0ksa0NBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FEY0o7O0FDVkE7RUFDSSxZQUFBO0FEYUo7O0FDVkU7RUFDRSx1QkFBQTtBRGFKOztBQ1ZFO0VBQ0UsZUFBQTtBRGFKOztBQ1ZBO0VBQ0ksdUJBQUE7QURhSiIsImZpbGUiOiJhZGQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIC0tcHJpbWFyeS01MDogI0Y0RkZGNjtcbiAgICAtLXByaW1hcnktMTAwOiAjQkRGRkRFO1xuICAgIC0tcHJpbWFyeS0yMDA6ICM4OUY4Qzc7XG4gICAgLS1wcmltYXJ5LTMwMDogIzZDREJBQztcbiAgICAtLXByaW1hcnktNDAwOiAjNEVCRjkyO1xuICAgIC0tcHJpbWFyeS01MDA6ICMyQ0EzNzg7XG4gICAgLS1wcmltYXJ5LTYwMDogIzAwODg2MTtcbiAgICAtLXByaW1hcnktNzAwOiAjMDA2QzRDO1xuICAgIC0tcHJpbWFyeS04MDA6ICMwMDUxMzg7XG4gICAgLS1wcmltYXJ5LTkwMDogIzAwMzgyNjtcbiAgICBcbiAgICAtLXNlY29uZGFyeS01MDogICNGNEZGRjY7XG4gICAgLS1zZWNvbmRhcnktMTAwOiAjRERGN0U3O1xuICAgIC0tc2Vjb25kYXJ5LTIwMDogI0NGRTlEOTtcbiAgICAtLXNlY29uZGFyeS0zMDA6ICNCM0NDQkU7XG4gICAgLS1zZWNvbmRhcnktNDAwOiAjOThCMUEzO1xuICAgIC0tc2Vjb25kYXJ5LTUwMDogIzdFOTY4OTtcbiAgICAtLXNlY29uZGFyeS02MDA6ICM2NTdDNzA7XG4gICAgLS1zZWNvbmRhcnktNzAwIDojNEQ2MzU3O1xuICAgIC0tc2Vjb25kYXJ5LTgwMCA6IzM1NEI0MDtcbiAgICAtLXNlY29uZGFyeS05MDAgOiMxRjM1MkE7XG4gICAgfSIsIioge1xuICAtLXByaW1hcnktNTA6ICNGNEZGRjY7XG4gIC0tcHJpbWFyeS0xMDA6ICNCREZGREU7XG4gIC0tcHJpbWFyeS0yMDA6ICM4OUY4Qzc7XG4gIC0tcHJpbWFyeS0zMDA6ICM2Q0RCQUM7XG4gIC0tcHJpbWFyeS00MDA6ICM0RUJGOTI7XG4gIC0tcHJpbWFyeS01MDA6ICMyQ0EzNzg7XG4gIC0tcHJpbWFyeS02MDA6ICMwMDg4NjE7XG4gIC0tcHJpbWFyeS03MDA6ICMwMDZDNEM7XG4gIC0tcHJpbWFyeS04MDA6ICMwMDUxMzg7XG4gIC0tcHJpbWFyeS05MDA6ICMwMDM4MjY7XG4gIC0tc2Vjb25kYXJ5LTUwOiAjRjRGRkY2O1xuICAtLXNlY29uZGFyeS0xMDA6ICNEREY3RTc7XG4gIC0tc2Vjb25kYXJ5LTIwMDogI0NGRTlEOTtcbiAgLS1zZWNvbmRhcnktMzAwOiAjQjNDQ0JFO1xuICAtLXNlY29uZGFyeS00MDA6ICM5OEIxQTM7XG4gIC0tc2Vjb25kYXJ5LTUwMDogIzdFOTY4OTtcbiAgLS1zZWNvbmRhcnktNjAwOiAjNjU3QzcwO1xuICAtLXNlY29uZGFyeS03MDA6IzRENjM1NztcbiAgLS1zZWNvbmRhcnktODAwOiMzNTRCNDA7XG4gIC0tc2Vjb25kYXJ5LTkwMDojMUYzNTJBO1xufVxuXG4uZGlhbG9nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNnB4IDQwcHggMTZweCA0MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlY3Rpb24gLnN1Yi1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxNnB4O1xufVxuLnNlY3Rpb24gLnN1Yi1zZWN0aW9uIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDQ4JTtcbn1cblxuLnNlY3Rpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS03MDApO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcwNTg4MjM1Myk7XG4gIHBhZGRpbmctYm90dG9tOiAxMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICB0b3A6IC0wLjI1ZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCB7XG4gIHRvcDogLTAuMjVlbSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBtYXJnaW4tdG9wOiAwZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcblxuLmRpYWxvZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE1cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxNnB4IDQwcHggMTZweCA0MHB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG5cbn1cblxuLnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5zdWItc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGdhcDogMTZweDtcblxuICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG4uc2VjdGlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktNzAwKTtcbn1cblxuXG5cblxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICMwMDAwMDBERTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgdG9wOiAtMC4yNWVtO1xuICB9XG4gIFxuICA6aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtcHJlZml4LCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgIHRvcDogLTAuMjVlbSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICA6aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDBlbTtcbiAgfVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"] });


/***/ }),

/***/ 6068:
/*!**********************************************************************!*\
  !*** ./src/app/dialog/cancelPatientsReg/cancelPatients.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelPatientsComponent": () => (/* binding */ CancelPatientsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);




class CancelPatientsComponent {
    constructor(data, dialogRef, dialog) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
    }
    ngOnInit() {
        console.log("OnInit");
    }
    onConfirm() {
        this.dialogRef.close({ data: 'confirmed' });
    }
    onCancel() {
        this.dialogRef.close({ data: 'cancelled' });
    }
}
CancelPatientsComponent.ɵfac = function CancelPatientsComponent_Factory(t) { return new (t || CancelPatientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog)); };
CancelPatientsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CancelPatientsComponent, selectors: [["app-cancelPatients"]], decls: 10, vars: 0, consts: [[1, "mat-subheading-1"], [1, "mat-body-2", "content"], ["align", "end"], ["mat-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "color", "primary", 3, "click"]], template: function CancelPatientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Discard changes? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Are you sure you want to discard this patient record? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2)(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancelPatientsComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NO, GO BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancelPatientsComponent_Template_button_click_8_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "YES, DISCARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: [".content[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  padding-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmNlbFBhdGllbnRzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdmFudWF0dSUyMGZyb250ZW5kL1NQQy1NRFItV2ViLUZyb250ZW5kL3NyYy9hcHAvZGlhbG9nL2NhbmNlbFBhdGllbnRzUmVnL2NhbmNlbFBhdGllbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0EiLCJmaWxlIjoiY2FuY2VsUGF0aWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbm9wYWNpdHk6IDAuNjtcbnBhZGRpbmctdG9wOiAxMnB4O1xufSIsIi5jb250ZW50IHtcbiAgb3BhY2l0eTogMC42O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn0iXX0= */"] });


/***/ }),

/***/ 1370:
/*!*******************************************************************!*\
  !*** ./src/app/dialog/changePassword/changePassword.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_shared_custom_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/custom-validators */ 3562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _services_main_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/main_local.service */ 1758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 8562);














function ChangePasswordComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.current_hide = !ctx_r10.current_hide); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.current_hide ? "visibility_off" : "visibility");
} }
function ChangePasswordComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "mat-icon", 19)(2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " error_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
function ChangePasswordComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_div_19_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.hide = !ctx_r12.hide); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.hide ? "visibility_off" : "visibility");
} }
function ChangePasswordComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "mat-icon")(2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " error_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
function ChangePasswordComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_div_28_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.confirmhide = !ctx_r14.confirmhide); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.confirmhide ? "visibility_off" : "visibility");
} }
function ChangePasswordComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "mat-icon", 19)(2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " error_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
function ChangePasswordComponent_mat_hint_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password do not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "error-hint": a0, "normal-hint": a1 }; };
class ChangePasswordComponent {
    constructor(data, fb, spinner, httpService, snackBar, dialogRef, dialog) {
        this.data = data;
        this.fb = fb;
        this.spinner = spinner;
        this.httpService = httpService;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.hide = true;
        this.confirmhide = true;
        this.current_hide = true;
        this.authToken = null;
    }
    ngOnInit() {
        this.authToken = localStorage.getItem("mdr-token-auth");
        this.changePasswordForm = this.fb.group({
            currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, src_app_shared_custom_validators__WEBPACK_IMPORTED_MODULE_0__.PasswordValidator]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, src_app_shared_custom_validators__WEBPACK_IMPORTED_MODULE_0__.PasswordValidator]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, src_app_shared_custom_validators__WEBPACK_IMPORTED_MODULE_0__.PasswordValidator, (0,src_app_shared_custom_validators__WEBPACK_IMPORTED_MODULE_0__.passwordMatchValidator)('newPassword')]],
        });
    }
    keyPressPassword(event) {
        let inp = String.fromCharCode(event.keyCode);
        if (/[><,:;^'"]/.test(inp)) {
            event.preventDefault();
            return false;
        }
        else {
            return true;
        }
    }
    onConfirm() {
        this.spinner.show();
        const body = {
            "oldPassword": this.changePasswordForm.get('currentPassword')?.value,
            "newPassword": this.changePasswordForm.get('newPassword')?.value
        };
        this.httpService.postRequestCall('auth/changePassword', body, this.authToken, {}).subscribe({
            next: (value) => {
                let val = value;
                this.spinner.hide();
                this.snackBar.open((val?.message), '', {
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom',
                    duration: 3 * 1000,
                });
                this.dialogRef.close({ data: 'confirmed' });
            },
            error: (err) => {
                this.errorStatusFun(err);
            }
        });
    }
    onCancel() {
        this.dialogRef.close({ data: 'cancelled' });
    }
    errorStatusFun(error) {
        this.spinner.hide();
        this.snackBar.open((error.error.message), '', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 3 * 1000,
        });
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_main_local_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
ChangePasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-changePassword"]], decls: 36, vars: 22, consts: [[1, "mat-subheading-1", 2, "padding-left", "12px"], [2, "height", "340px"], ["id", "formContainer", 3, "formGroup"], ["appearance", "outline", 2, "padding-left", "12px", "padding-top", "20px", "width", "90%"], ["matInput", "", "maxlength", "15", "formControlName", "currentPassword", "required", "", 3, "ngModel", "type", "ngModelChange", "focus", "keydown.space", "keypress"], ["currentPasswordInput", ""], ["style", "cursor:pointer", "mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["style", "cursor:pointer", "mat-icon-button", "", "matSuffix", "", 4, "ngIf"], [1, "error-hint", 3, "ngClass"], ["matInput", "", "maxlength", "15", "formControlName", "newPassword", "required", "", 3, "ngModel", "type", "ngModelChange", "focus", "keydown.space", "keypress"], ["newPasswordInput", ""], ["matInput", "", "maxlength", "15", "formControlName", "confirmPassword", "required", "", 3, "type", "focus", "keydown.space", "keypress"], ["confirmPasswordInput", ""], ["class", "error-hint", 4, "ngIf"], ["align", "end"], ["mat-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-icon-button", "", "matSuffix", "", 2, "cursor", "pointer", 3, "click"], ["mat-icon-button", "", "matSuffix", "", 2, "cursor", "pointer"], [2, "color", "red"], [1, "material-icons-outlined"], [1, "material-icons-outlined", 2, "color", "red"], [1, "error-hint"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Change password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-dialog-content", 1)(4, "form", 2)(5, "mat-form-field", 3)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_8_listener($event) { return ctx.currentPassword = $event; })("focus", function ChangePasswordComponent_Template_input_focus_8_listener() { return ctx.changePasswordForm.controls["currentPassword"].markAsTouched(); })("keydown.space", function ChangePasswordComponent_Template_input_keydown_space_8_listener($event) { return $event.preventDefault(); })("keypress", function ChangePasswordComponent_Template_input_keypress_8_listener($event) { return ctx.keyPressPassword($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ChangePasswordComponent_div_10_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ChangePasswordComponent_div_11_Template, 4, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " 8-15 characters, with at least one number, special, uppercase, and lowercase characters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 3)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_17_listener($event) { return ctx.newPassword = $event; })("focus", function ChangePasswordComponent_Template_input_focus_17_listener() { return ctx.changePasswordForm.controls["newPassword"].markAsTouched(); })("keydown.space", function ChangePasswordComponent_Template_input_keydown_space_17_listener($event) { return $event.preventDefault(); })("keypress", function ChangePasswordComponent_Template_input_keypress_17_listener($event) { return ctx.keyPressPassword($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ChangePasswordComponent_div_19_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ChangePasswordComponent_div_20_Template, 4, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " 8-15 characters, with at least one number, special, uppercase, and lowercase characters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field", 3)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function ChangePasswordComponent_Template_input_focus_26_listener() { return ctx.changePasswordForm.controls["confirmPassword"].markAsTouched(); })("keydown.space", function ChangePasswordComponent_Template_input_keydown_space_26_listener($event) { return $event.preventDefault(); })("keypress", function ChangePasswordComponent_Template_input_keypress_26_listener($event) { return ctx.keyPressPassword($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ChangePasswordComponent_div_28_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ChangePasswordComponent_div_29_Template, 4, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ChangePasswordComponent_mat_hint_30_Template, 2, 0, "mat-hint", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-dialog-actions", 14)(32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_32_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_34_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.currentPassword)("type", ctx.current_hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.changePasswordForm.controls["currentPassword"].invalid && ctx.changePasswordForm.controls["currentPassword"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.controls["currentPassword"].invalid && ctx.changePasswordForm.controls["currentPassword"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](16, _c0, ctx.changePasswordForm.controls["currentPassword"].hasError("invalidPassword") && ctx.changePasswordForm.controls["currentPassword"].touched, !(ctx.changePasswordForm.controls["currentPassword"].hasError("invalidPassword") && ctx.changePasswordForm.controls["currentPassword"].touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newPassword)("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.changePasswordForm.controls["newPassword"].invalid && ctx.changePasswordForm.controls["newPassword"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.controls["newPassword"].invalid && ctx.changePasswordForm.controls["newPassword"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](19, _c0, ctx.changePasswordForm.controls["newPassword"].hasError("invalidPassword") && ctx.changePasswordForm.controls["newPassword"].touched, !(ctx.changePasswordForm.controls["newPassword"].hasError("invalidPassword") && ctx.changePasswordForm.controls["newPassword"].touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.confirmhide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.changePasswordForm.controls["confirmPassword"].invalid && ctx.changePasswordForm.controls["confirmPassword"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.controls["confirmPassword"].invalid && ctx.changePasswordForm.controls["confirmPassword"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.controls["confirmPassword"].hasError("mismatch") && !ctx.changePasswordForm.controls["confirmPassword"].hasError("invalidPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.changePasswordForm.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions], styles: [".content[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  padding-top: 12px;\n}\n\n.error-hint[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.normal-hint[_ngcontent-%COMP%] {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZVBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdmFudWF0dSUyMGZyb250ZW5kL1NQQy1NRFItV2ViLUZyb250ZW5kL3NyYy9hcHAvZGlhbG9nL2NoYW5nZVBhc3N3b3JkL2NoYW5nZVBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUM7RUFDRyxVQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0oiLCJmaWxlIjoiY2hhbmdlUGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gfVxuXG4gLmVycm9yLWhpbnR7XG4gICAgY29sb3I6IHJlZDsgXG4gIH1cbiAgXG4gIC5ub3JtYWwtaGludHtcbiAgICBjb2xvcjogZ3JheTtcbiAgfSIsIi5jb250ZW50IHtcbiAgb3BhY2l0eTogMC42O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLmVycm9yLWhpbnQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ubm9ybWFsLWhpbnQge1xuICBjb2xvcjogZ3JheTtcbn0iXX0= */"] });


/***/ }),

/***/ 317:
/*!*****************************************************************!*\
  !*** ./src/app/dialog/deactive-user/deactive-user.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeactiveUserComponent": () => (/* binding */ DeactiveUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);




class DeactiveUserComponent {
    constructor(data, dialogRef, dialog) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
    }
    ngOnInit() {
        console.log("OnInit");
    }
    onConfirm() {
        this.dialogRef.close({ data: 'confirmed' });
    }
    onCancel() {
        this.dialogRef.close({ data: 'cancelled' });
    }
}
DeactiveUserComponent.ɵfac = function DeactiveUserComponent_Factory(t) { return new (t || DeactiveUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog)); };
DeactiveUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeactiveUserComponent, selectors: [["app-deactive-user"]], decls: 10, vars: 0, consts: [[1, "deactivate-dialog"], [1, "mat-subheading-1"], [1, "mat-body-2", "content"], ["align", "end"], ["mat-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "color", "primary", 3, "click"]], template: function DeactiveUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Change status? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Are you sure you want to deactivate user account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeactiveUserComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NO, GO BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeactiveUserComponent_Template_button_click_8_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "YES, CHANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: [".deactivate-dialog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 12px;\n}\n\n.content[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  padding-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYWN0aXZlLXVzZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi92YW51YXR1JTIwZnJvbnRlbmQvU1BDLU1EUi1XZWItRnJvbnRlbmQvc3JjL2FwcC9kaWFsb2cvZGVhY3RpdmUtdXNlci9kZWFjdGl2ZS11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6ImRlYWN0aXZlLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVhY3RpdmF0ZS1kaWFsb2cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE1cHg7XG4gICAgcGFkZGluZzogMTJweDtcbn1cblxuLmNvbnRlbnR7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuIH1cblxuXG4iLCIuZGVhY3RpdmF0ZS1kaWFsb2cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbi5jb250ZW50IHtcbiAgb3BhY2l0eTogMC42O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn0iXX0= */"] });


/***/ }),

/***/ 8613:
/*!***************************************************************!*\
  !*** ./src/app/dialog/issue-device/issue-device.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IssueDeviceComponent": () => (/* binding */ IssueDeviceComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);








function IssueDeviceComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueDeviceComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onConfirm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SAVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class IssueDeviceComponent {
    constructor(data, dialogRef, dialog) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.role = localStorage.getItem("display-role");
    }
    onConfirm() {
        this.dialogRef.close({ data: 'confirmed', note: this.note });
    }
    onCancel() {
        this.dialogRef.close({ data: 'cancelled', note: this.note });
    }
}
IssueDeviceComponent.ɵfac = function IssueDeviceComponent_Factory(t) { return new (t || IssueDeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog)); };
IssueDeviceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IssueDeviceComponent, selectors: [["app-issue-device"]], decls: 15, vars: 3, consts: [[1, "device-dialog"], [1, "mat-h1"], [1, "content"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "placeholder", "", "maxlength", "200", 3, "ngModel", "ngModelChange"], ["input", ""], ["align", "end"], ["mat-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "click"]], template: function IssueDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Issue device ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter your notes here (optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IssueDeviceComponent_Template_input_ngModelChange_7_listener($event) { return ctx.note = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 6)(12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueDeviceComponent_Template_button_click_12_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, IssueDeviceComponent_button_14_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r0.value.length, "/200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role == "Admin" || ctx.role == "Front office staff" || ctx.role == "Healthcare provider" || ctx.role == "Device Issuer");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: [".content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzc3VlLWRldmljZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3ZhbnVhdHUlMjBmcm9udGVuZC9TUEMtTURSLVdlYi1Gcm9udGVuZC9zcmMvYXBwL2RpYWxvZy9pc3N1ZS1kZXZpY2UvaXNzdWUtZGV2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6Imlzc3VlLWRldmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH0iLCIuY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 4261:
/*!*****************************************************************!*\
  !*** ./src/app/dialog/logoutConfirm/logoutConfirm.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutConfirmComponent": () => (/* binding */ LogoutConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);




class LogoutConfirmComponent {
    constructor(data, dialogRef, dialog) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
    }
    ngOnInit() {
        console.log("OnInit");
    }
    onConfirm() {
        this.dialogRef.close({ data: 'confirmed' });
    }
    onCancel() {
        this.dialogRef.close({ data: 'cancelled' });
    }
}
LogoutConfirmComponent.ɵfac = function LogoutConfirmComponent_Factory(t) { return new (t || LogoutConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog)); };
LogoutConfirmComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutConfirmComponent, selectors: [["app-logoutConfirm"]], decls: 10, vars: 0, consts: [[1, "mat-subheading-1"], [1, "mat-body-2", "content"], ["align", "end"], ["mat-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "color", "primary", 3, "click"]], template: function LogoutConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Confirm logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Are you sure you want to logout? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2)(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoutConfirmComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NO, GO BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoutConfirmComponent_Template_button_click_8_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LOGOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: [".content[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  padding-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dENvbmZpcm0uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi92YW51YXR1JTIwZnJvbnRlbmQvU1BDLU1EUi1XZWItRnJvbnRlbmQvc3JjL2FwcC9kaWFsb2cvbG9nb3V0Q29uZmlybS9sb2dvdXRDb25maXJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoibG9nb3V0Q29uZmlybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiB9XG4iLCIuY29udGVudCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59Il19 */"] });


/***/ }),

/***/ 7503:
/*!***********************************************************************************!*\
  !*** ./src/app/dialog/recommendation-device-remove/recommend-device.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendRemoveDeviceComponent": () => (/* binding */ RecommendRemoveDeviceComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);








function RecommendRemoveDeviceComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendRemoveDeviceComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.removeDevice()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SAVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.notes == undefined || ctx_r1.notes == "" || ctx_r1.notes == null);
} }
class RecommendRemoveDeviceComponent {
    constructor(data, dialogRef, dialog) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.role = localStorage.getItem("display-role");
    }
    ngOnInit() {
    }
    removeDevice() {
        this.dialogRef.close({ data: 'confirmed', notes: this.notes });
    }
    onCancel() {
        this.dialogRef.close({ data: 'cancelled' });
    }
}
RecommendRemoveDeviceComponent.ɵfac = function RecommendRemoveDeviceComponent_Factory(t) { return new (t || RecommendRemoveDeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog)); };
RecommendRemoveDeviceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecommendRemoveDeviceComponent, selectors: [["app-recommend-device"]], decls: 15, vars: 3, consts: [[1, "device-dialog"], [1, "mat-h1"], [1, "content"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "placeholder", "", "maxlength", "200", 3, "ngModel", "ngModelChange"], ["input", ""], ["align", "end"], ["mat-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "disabled", "click"]], template: function RecommendRemoveDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Remove device recommendation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter your notes here *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecommendRemoveDeviceComponent_Template_input_ngModelChange_7_listener($event) { return ctx.notes = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 6)(12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendRemoveDeviceComponent_Template_button_click_12_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RecommendRemoveDeviceComponent_button_14_Template, 2, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.notes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r0.value.length, "/200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role == "Admin" || ctx.role == "Administrative healthcare staff" || ctx.role == "Healthcare provider");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: [".content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC1kZXZpY2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi92YW51YXR1JTIwZnJvbnRlbmQvU1BDLU1EUi1XZWItRnJvbnRlbmQvc3JjL2FwcC9kaWFsb2cvcmVjb21tZW5kYXRpb24tZGV2aWNlLXJlbW92ZS9yZWNvbW1lbmQtZGV2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InJlY29tbWVuZC1kZXZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9IiwiLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 701:
/*!*****************************************************************!*\
  !*** ./src/app/dialog/remove-device/remove-device.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveDeviceComponent": () => (/* binding */ RemoveDeviceComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);








function RemoveDeviceComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoveDeviceComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.removeDevice()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SAVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.notes == undefined || ctx_r1.notes == "" || ctx_r1.notes == null);
} }
class RemoveDeviceComponent {
    constructor(data, dialogRef, dialog) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.role = localStorage.getItem("display-role");
    }
    ngOnInit() {
    }
    removeDevice() {
        this.dialogRef.close({ data: 'confirmed', notes: this.notes });
    }
    onCancel() {
        this.dialogRef.close({ data: 'cancelled' });
    }
}
RemoveDeviceComponent.ɵfac = function RemoveDeviceComponent_Factory(t) { return new (t || RemoveDeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog)); };
RemoveDeviceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RemoveDeviceComponent, selectors: [["app-remove-device"]], decls: 15, vars: 3, consts: [[1, "device-dialog"], [1, "mat-h1"], [1, "content"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "placeholder", "", "maxlength", "200", 3, "ngModel", "ngModelChange"], ["input", ""], ["align", "end"], ["mat-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "disabled", "click"]], template: function RemoveDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Remove issued device ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter your notes here *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RemoveDeviceComponent_Template_input_ngModelChange_7_listener($event) { return ctx.notes = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 6)(12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoveDeviceComponent_Template_button_click_12_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RemoveDeviceComponent_button_14_Template, 2, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.notes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r0.value.length, "/200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role == "Admin" || ctx.role == "Front office staff" || ctx.role == "Healthcare provider");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: [".content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW92ZS1kZXZpY2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi92YW51YXR1JTIwZnJvbnRlbmQvU1BDLU1EUi1XZWItRnJvbnRlbmQvc3JjL2FwcC9kaWFsb2cvcmVtb3ZlLWRldmljZS9yZW1vdmUtZGV2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InJlbW92ZS1kZXZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9IiwiLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 3305:
/*!*************************************************************!*\
  !*** ./src/app/dialog/remove-file/remove-file.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveFileComponent": () => (/* binding */ RemoveFileComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);




class RemoveFileComponent {
    constructor(data, dialogRef, dialog) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.role = localStorage.getItem("display-role");
    }
    ngOnInit() {
    }
    removeFile() {
        this.dialogRef.close({ data: 'confirmed', notes: this.notes });
    }
    onCancel() {
        this.dialogRef.close({ data: 'cancelled' });
    }
}
RemoveFileComponent.ɵfac = function RemoveFileComponent_Factory(t) { return new (t || RemoveFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog)); };
RemoveFileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RemoveFileComponent, selectors: [["app-remove-file"]], decls: 8, vars: 0, consts: [[1, "device-dialog"], [1, "mat-h1"], ["align", "end"], ["mat-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "color", "primary", 3, "click"]], template: function RemoveFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete file? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-actions", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoveFileComponent_Template_button_click_4_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NO, GO BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoveFileComponent_Template_button_click_6_listener() { return ctx.removeFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "YES, DELETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: [".content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW92ZS1maWxlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdmFudWF0dSUyMGZyb250ZW5kL1NQQy1NRFItV2ViLUZyb250ZW5kL3NyYy9hcHAvZGlhbG9nL3JlbW92ZS1maWxlL3JlbW92ZS1maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InJlbW92ZS1maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfSIsIi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ 7047:
/*!*************************************************************!*\
  !*** ./src/app/dialog/view-device/view-device.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDeviceComponent": () => (/* binding */ ViewDeviceComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/main.service */ 1557);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _shared_device_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/device.pipe */ 5390);








function ViewDeviceComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Revoked on");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 2, ctx_r0.revokeDate, "dd MMM, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.revokeNote);
} }
function ViewDeviceComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Issuer name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.issuerData.given.join(" "), " ", ctx_r1.issuerData.family ? ctx_r1.issuerData.family : "", "");
} }
function ViewDeviceComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewDeviceComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.removeDevice()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "REMOVE DEVICE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ViewDeviceComponent {
    constructor(data, snackBar, httpServiceMdr, dialogRef) {
        this.data = data;
        this.snackBar = snackBar;
        this.httpServiceMdr = httpServiceMdr;
        this.dialogRef = dialogRef;
        this.revoked = false;
        this.issueDate = [];
        this.mdrToken = null;
        console.log(this.data);
        this.text = this.data.text;
        this.mdrToken = localStorage.getItem("mdr-token");
        this.role = localStorage.getItem("display-role");
    }
    ngOnInit() {
        for (const element of this.data.item) {
            if (element.linkId == 'revoke-details') {
                this.revoked = true;
                for (let data of element.answer) {
                    if (data.valueString) {
                        this.revokeNote = data.valueString;
                    }
                    if (data.valueDateTime) {
                        this.revokeDate = data.valueDateTime;
                    }
                }
            }
            if (element.linkId == 'issue-details') {
                for (let data of element.answer) {
                    if (data.valueString) {
                        this.issuesNote = data.valueString;
                    }
                    if (data.valueDateTime) {
                        this.issueDate = data.valueDateTime;
                    }
                    if (data.valueReference) {
                        this.issuerId = this.getIssuerId(data.valueReference.reference);
                        this.getIssuerDetails();
                    }
                }
            }
        }
    }
    removeDevice() {
        this.dialogRef.close({ data: 'confirmed' });
    }
    getIssuerId(str) {
        return str.split('/')[1];
    }
    getIssuerDetails() {
        this.httpServiceMdr.getRequestCall(`Practitioner/` + this.issuerId, this.mdrToken, {}).subscribe({
            next: (value) => {
                this.issuerData = value.name[0];
            },
            error: (err) => {
                this.errorStatus(err);
            },
        });
    }
    close() {
        this.dialogRef.close({ data: 'cancelled' });
    }
    errorStatus(error) {
        this.snackBar.open((error.error.message[0]), '', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 3 * 1000,
        });
    }
}
ViewDeviceComponent.ɵfac = function ViewDeviceComponent_Factory(t) { return new (t || ViewDeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_0__.HttpServiceMdr), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
ViewDeviceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewDeviceComponent, selectors: [["app-view-device"]], decls: 22, vars: 11, consts: [[1, "device-dialog"], [1, "mat-h1"], [1, "content"], [1, "device-data"], [1, "mat-caption", "label"], ["class", "device-data", 4, "ngIf"], ["align", "end"], ["mat-button", "", "color", "primary", "mat-dialog-close", "", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"]], template: function ViewDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "devicePipeGlobal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-dialog-content", 2)(5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Issue date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ViewDeviceComponent_div_11_Template, 8, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ViewDeviceComponent_div_12_Template, 5, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3)(14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-dialog-actions", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ViewDeviceComponent_button_19_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewDeviceComponent_Template_button_click_20_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "CLOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, ctx.text), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 8, ctx.issueDate, "dd MMM, yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.revoked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.issuerData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.issuesNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.revoked && (ctx.role == "Admin" || ctx.role == "Front office staff" || ctx.role == "Healthcare provider"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _shared_device_pipe__WEBPACK_IMPORTED_MODULE_1__.DevicePipeGlobal], styles: [".content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  opacity: 0.6;\n}\n\n.device-data[_ngcontent-%COMP%] {\n  padding: 0 16px 16px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctZGV2aWNlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vdmFudWF0dSUyMGZyb250ZW5kL1NQQy1NRFItV2ViLUZyb250ZW5kL3NyYy9hcHAvZGlhbG9nL3ZpZXctZGV2aWNlL3ZpZXctZGV2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKIiwiZmlsZSI6InZpZXctZGV2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYWJlbCB7XG4gICAgY29sb3I6ICMwMDAwMDA5OTtcbiAgICBvcGFjaXR5OiAwLjY7XG5cbn1cbi5kZXZpY2UtZGF0YSB7XG4gICAgcGFkZGluZzogMCAxNnB4IDE2cHggMDtcbn0iLCIuY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5kZXZpY2UtZGF0YSB7XG4gIHBhZGRpbmc6IDAgMTZweCAxNnB4IDA7XG59Il19 */"] });


/***/ }),

/***/ 2590:
/*!*******************************************************************!*\
  !*** ./src/app/directives/trim-on-blur/trim-on-blur.directive.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrimOnBlurDirective": () => (/* binding */ TrimOnBlurDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class TrimOnBlurDirective {
    constructor(formControlDir, formControlName) {
        this.formControlDir = formControlDir;
        this.formControlName = formControlName;
    }
    onBlur() {
        const control = this.formControlDir?.control || this.formControlName?.control;
        if (!control) {
            return;
        }
        const value = control.value;
        if (value == null) {
            return;
        }
        const trimmed = value.trim();
        control.patchValue(trimmed);
    }
}
TrimOnBlurDirective.ɵfac = function TrimOnBlurDirective_Factory(t) { return new (t || TrimOnBlurDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, 8)); };
TrimOnBlurDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TrimOnBlurDirective, selectors: [["textarea", "appTrimOnBlur", ""], ["input", "appTrimOnBlur", ""]], hostBindings: function TrimOnBlurDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TrimOnBlurDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
    } } });


/***/ }),

/***/ 2663:
/*!****************************************************************!*\
  !*** ./src/app/directives/trim-on-blur/trim-on-blur.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrimOnBlurModule": () => (/* binding */ TrimOnBlurModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _trim_on_blur_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trim-on-blur.directive */ 2590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class TrimOnBlurModule {
}
TrimOnBlurModule.ɵfac = function TrimOnBlurModule_Factory(t) { return new (t || TrimOnBlurModule)(); };
TrimOnBlurModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TrimOnBlurModule });
TrimOnBlurModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TrimOnBlurModule, { declarations: [_trim_on_blur_directive__WEBPACK_IMPORTED_MODULE_0__.TrimOnBlurDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_trim_on_blur_directive__WEBPACK_IMPORTED_MODULE_0__.TrimOnBlurDirective] }); })();


/***/ }),

/***/ 1557:
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpServiceMdr": () => (/* binding */ HttpServiceMdr)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);







class HttpServiceMdr {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.datesFromSummeryPage = {};
    }
    postRequestCall(path, body, token, params) {
        if (token != null) {
            params.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": `Bearer ${token}` });
        }
        return this.http.post(this.baseUrl + path, body, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
            console.error('An error occurred:', error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
    putRequestCall(path, body, token, params) {
        if (token != null) {
            params.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": `Bearer ${token}` });
        }
        return this.http.put(this.baseUrl + path, body, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
            console.error('An error occurred:', error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
    patchRequestCall(path, body, token, params) {
        if (token != null) {
            params.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json-patch+json"
            });
        }
        return this.http.patch(this.baseUrl + path, body, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
            console.error('An error occurred:', error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
    getRequestCall(path, token, params) {
        if (token != null) {
            params.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Authorization": `Bearer ${token}`,
                "Cache-Control": "no-cache"
            });
        }
        return this.http.get(this.baseUrl + path, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
            console.error('An error occurred:', error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
    getRequestCallByUrl(path, token, params) {
        if (token != null) {
            params.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Authorization": `Bearer ${token}`,
                "Cache-Control": "no-cache"
            });
        }
        return this.http.get(path, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
            console.error('An error occurred:', error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
    deleteRequestCall(path, body, token, params) {
        if (token != null) {
            params.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": `Bearer ${token}` });
        }
        return this.http.delete(this.baseUrl + path, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
            console.error('An error occurred:', error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
}
HttpServiceMdr.ɵfac = function HttpServiceMdr_Factory(t) { return new (t || HttpServiceMdr)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
HttpServiceMdr.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpServiceMdr, factory: HttpServiceMdr.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1758:
/*!************************************************!*\
  !*** ./src/app/services/main_local.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);







class HttpService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl_local;
        this.datesFromSummeryPage = {};
    }
    postRequestCall(path, body, token, params) {
        if (token != null) {
            params.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": `Bearer ${token}` });
        }
        return this.http.post(this.baseUrl + path, body, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
            console.error('An error occurred:', error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
    putRequestCall(path, body, token, params) {
        if (token != null) {
            params.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": `Bearer ${token}` });
        }
        return this.http.put(this.baseUrl + path, body, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
            console.error('An error occurred:', error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
    patchRequestCall(path, body, token, params) {
        if (token != null) {
            params.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": `Bearer ${token}` });
        }
        return this.http.patch(this.baseUrl + path, body, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
            console.error('An error occurred:', error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
    getRequestCall(path, token, params) {
        if (token != null) {
            params.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Authorization": `Bearer ${token}`,
                "Cache-Control": "no-cache"
            });
        }
        return this.http.get(this.baseUrl + path, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
            console.error('An error occurred:', error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
    getRequestCallByUrl(path, token, params) {
        if (token != null) {
            params.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Authorization": `Bearer ${token}`,
                "Cache-Control": "no-cache"
            });
        }
        return this.http.get(path, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
            console.error('An error occurred:', error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
    deleteRequestCall(path, body, token, params) {
        if (token != null) {
            params.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Authorization": `Bearer ${token}` });
        }
        return this.http.delete(this.baseUrl + path, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            if (error.status === 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
            console.error('An error occurred:', error.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
HttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5809:
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 8338);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.auth.isLoggedin()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8338:
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AuthService {
    constructor() { }
    isLoggedin() {
        return !!localStorage.getItem('mdr-token-auth');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3562:
/*!*********************************************!*\
  !*** ./src/app/shared/custom-validators.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlphNumValidator": () => (/* binding */ AlphNumValidator),
/* harmony export */   "PasswordValidator": () => (/* binding */ PasswordValidator),
/* harmony export */   "emailValidator": () => (/* binding */ emailValidator),
/* harmony export */   "minLengthIfNotEmptyValidator": () => (/* binding */ minLengthIfNotEmptyValidator),
/* harmony export */   "noWhitespaceAtbeg": () => (/* binding */ noWhitespaceAtbeg),
/* harmony export */   "passwordMatchValidator": () => (/* binding */ passwordMatchValidator),
/* harmony export */   "phoneNumbersNotEqualValidator": () => (/* binding */ phoneNumbersNotEqualValidator)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);

function PasswordValidator(control) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&(),])[A-Za-z\d@#$!%*?&(),]{8,25}$/;
    const valid = passwordRegex.test(control.value);
    return valid ? null : { invalidPassword: true };
}
function emailValidator(control) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid = emailRegex.test(control.value);
    if (control.value == '') {
        isValid = true;
    }
    return isValid ? null : { invalidEmail: { value: control.value } };
}
function passwordMatchValidator(password) {
    return (control = _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl) => {
        if (!control || !control.parent) {
            return null;
        }
        return control.parent.get(password).value === control.value ? null : { mismatch: true };
    };
}
function AlphNumValidator(control) {
    const alphNumRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    const valid = alphNumRegex.test(control.value);
    return valid ? null : { invalidAlphNumrid: true };
}
function noWhitespaceAtbeg(control) {
    const noSpace = /^\S.*[a-zA-Z\s]*$/;
    const valid = noSpace.test(control.value);
    return valid ? null : { noSpace: true };
}
const phoneNumbersNotEqualValidator = (control) => {
    const phoneNumber1 = control.get('phoneNumber')?.value;
    const phoneNumber2 = control.get('secPhoneNumber')?.value;
    if (phoneNumber1 != undefined && phoneNumber2 != undefined) {
        if (phoneNumber1 !== phoneNumber2) {
            return null; // Return null if the phone numbers are not the same
        }
        else {
            return { phoneNumbersEqual: true }; // Return an error object if the phone numbers are the same
        }
    }
    else {
        return null;
    }
};
function minLengthIfNotEmptyValidator(minLength) {
    return (control) => {
        const value = control.value;
        if (!value || value.length === 0) {
            return null; // If the control is empty, validation is passed
        }
        if (value.length < minLength) {
            return { minLengthIfNotEmpty: { requiredLength: minLength, actualLength: value.length } };
        }
        return null; // Validation passed
    };
}


/***/ }),

/***/ 5390:
/*!***************************************!*\
  !*** ./src/app/shared/device.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicePipeGlobal": () => (/* binding */ DevicePipeGlobal)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DevicePipeGlobal {
    transform(value) {
        if (value === 'wheelchair') {
            return 'Wheelchair';
        }
        else if (value === 'walking-stick') {
            return 'Walking-stick';
        }
        else if (value === 'kafo') {
            return 'Knee ankle foot orthosis (KAFO)';
        }
        else if (value === 'crutches') {
            return 'Crutches';
        }
        else if (value === 'four-wheeled-walker') {
            return 'Four-wheeled-walker';
        }
        else if (value === 'walking-frame') {
            return 'Walking-frame';
        }
        else if (value === 'leg-prosthesis') {
            return 'Leg-prosthesis';
        }
        else if (value === 'foot-brace') {
            return 'Foot-brace';
        }
        else if (value === 'other') {
            return 'Other';
        }
    }
}
DevicePipeGlobal.ɵfac = function DevicePipeGlobal_Factory(t) { return new (t || DevicePipeGlobal)(); };
DevicePipeGlobal.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "devicePipeGlobal", type: DevicePipeGlobal, pure: true });


/***/ }),

/***/ 7420:
/*!******************************************!*\
  !*** ./src/app/shared/shared.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": () => (/* binding */ SharedService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);




class SharedService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
    }
    isHandset() {
        return this.breakpointObserver.observe(['(max-width: 600px)'])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.shareReplay)());
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.BreakpointObserver)); };
SharedService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 226:
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavComponent": () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toolbar/toolbar.component */ 1987);







const _c0 = ["drawer"];
function SidenavComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_div_10_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.goToElement(i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.iconsArr[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", element_r2, " ");
} }
class SidenavComponent {
    constructor(router) {
        this.router = router;
        this.showSidenav = false;
        this.sidenavElements = [];
        this.iconsArr = [];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.sidenavToggleFn();
    }
    sidenavToggleFn() {
        this.showSidenav = !this.showSidenav;
        this.drawerRef.toggle();
    }
    goToElement(event) {
        console.log(event);
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
SidenavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], viewQuery: function SidenavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.drawerRef = _t.first);
    } }, inputs: { sidenavToggleState: "sidenavToggleState" }, decls: 15, vars: 3, consts: [["autosize", "", 1, "example-container", 2, "margin", "0", "padding", "0", 3, "hasBackdrop", "backdropClick"], ["mode", "side", 1, "example-sidenav"], ["drawer", ""], [1, "drawer-style"], [1, "sidenavTitleArea", 2, "margin", "15px"], ["mat-icon-button", "", 1, "example-icon", 3, "click"], [1, "example-icon"], ["class", "elements-div", 3, "click", 4, "ngFor", "ngForOf"], [1, "example-sidenav-content"], [3, "sidenavToggleState", "sidenavToggleEvent"], [2, "height", "100px", "background-color", "#B2EBF2", "margin-top", "-12px !important", "position", "sticky", "z-index", "3"], [1, "elements-div", 3, "click"], [2, "margin-right", "10px"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("backdropClick", function SidenavComponent_Template_mat_drawer_container_backdropClick_0_listener() { return ctx.sidenavToggleFn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-drawer", 1, 2)(3, "div", 3)(4, "div", 4)(5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_5_listener() { return ctx.sidenavToggleFn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Vanuatu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SidenavComponent_div_10_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "app-toolbar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sidenavToggleEvent", function SidenavComponent_Template_app_toolbar_sidenavToggleEvent_12_listener() { return ctx.sidenavToggleFn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 10)(14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hasBackdrop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sidenavElements);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sidenavToggleState", ctx.showSidenav);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatDrawerContainer, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgb(255, 255, 255);\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  height: 100%;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  margin-right: -20px;\n  width: 250px;\n}\n\n.example-icon[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.drawer-style[_ngcontent-%COMP%] {\n  height: 64px;\n  background-color: #26C6DA;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  row-gap: 0px;\n  flex-direction: row;\n}\n\n.elements-div[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 32px;\n  padding: 10px 20px;\n  color: #474747;\n  display: flex;\n  align-items: center;\n}\n\n.elements-div[_ngcontent-%COMP%]:hover {\n  background-color: #80DEEA;\n}\n\n.sidenavTitleArea[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.sidenavTitleArea[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 5% !important;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi92YW51YXR1JTIwZnJvbnRlbmQvU1BDLU1EUi1XZWItRnJvbnRlbmQvc3JjL2FwcC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLQTtFQUNJLHlCQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURJSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNGUiIsImZpbGUiOiJzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxuLmV4YW1wbGUtaWNvbntcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5kcmF3ZXItc3R5bGUge1xuICAgIGhlaWdodDogNjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZDNkRBO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcm93LWdhcDogMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5lbGVtZW50cy1kaXYge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyYTYxYTU7XG4gICAgY29sb3I6ICM0NzQ3NDc7XG4gICAgLy8gbWFyZ2luOiAzcHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVsZW1lbnRzLWRpdjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBERUVBO1xufVxuXG4uc2lkZW5hdlRpdGxlQXJlYXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICBoM3tcbiAgICAgICAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbn0iLCIuZXhhbXBsZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5leGFtcGxlLWljb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5kcmF3ZXItc3R5bGUge1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNkM2REE7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcm93LWdhcDogMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZWxlbWVudHMtZGl2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY29sb3I6ICM0NzQ3NDc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lbGVtZW50cy1kaXY6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBERUVBO1xufVxuXG4uc2lkZW5hdlRpdGxlQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uc2lkZW5hdlRpdGxlQXJlYSBoMyB7XG4gIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */"] });


/***/ }),

/***/ 1987:
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);






function ToolbarComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.toggleSidenav()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class ToolbarComponent {
    constructor() {
        this.sidenavToggleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.sidenavToggle = false;
    }
    ngOnInit() {
    }
    toggleSidenav() {
        this.sidenavToggleEvent.emit(this.sidenavToggleState);
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], inputs: { sidenavToggleState: "sidenavToggleState" }, outputs: { sidenavToggleEvent: "sidenavToggleEvent" }, decls: 3, vars: 1, consts: [[2, "position", "sticky", "top", "0", "z-index", "10"], [1, "toolbarClass"], ["mat-icon-button", "", "class", "example-icon", "aria-label", "Example icon-button with menu icon", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "click"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0)(1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToolbarComponent_button_2_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sidenavToggleState);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.toolbarClass[_ngcontent-%COMP%] {\n  background-color: rgb(255, 255, 255);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi92YW51YXR1JTIwZnJvbnRlbmQvU1BDLU1EUi1XZWItRnJvbnRlbmQvc3JjL2FwcC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUU7RUFDRixvQ0FBQTtBQ0NBIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbiAgLnRvb2xiYXJDbGFzc3tcbmJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcblxuICB9IiwiLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi50b29sYmFyQ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59Il19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'https://mdr.gov.vu/fhir/',
    baseUrl_local: 'https://mdr.gov.vu/facade/api/v1/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map