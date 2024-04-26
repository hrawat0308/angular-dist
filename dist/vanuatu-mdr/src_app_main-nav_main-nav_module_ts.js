"use strict";
(self["webpackChunkangular_template"] = self["webpackChunkangular_template"] || []).push([["src_app_main-nav_main-nav_module_ts"],{

/***/ 2227:
/*!*****************************************************!*\
  !*** ./src/app/main-nav/main-nav-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainNavRoutingModule": () => (/* binding */ MainNavRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-nav.component */ 4626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _main_nav_component__WEBPACK_IMPORTED_MODULE_0__.MainNavComponent,
        children: [
            {
                path: 'patients',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_paginator_mjs-node_modules_angular_material_fe-0bf83c"), __webpack_require__.e("src_app_components_patientsManagement_patientsComponents_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/patientsManagement/patientsComponents.module */ 1806)).then((m) => m.PatientsComponentsModule),
            },
            {
                path: 'users',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_paginator_mjs-node_modules_angular_material_fe-0bf83c"), __webpack_require__.e("src_app_components_user-management_user-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/user-management/user-management.module */ 1536)).then((m) => m.UserManagementModule),
            }
        ],
    },
    { path: '**', redirectTo: '/main/' },
];
class MainNavRoutingModule {
}
MainNavRoutingModule.ɵfac = function MainNavRoutingModule_Factory(t) { return new (t || MainNavRoutingModule)(); };
MainNavRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MainNavRoutingModule });
MainNavRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainNavRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4626:
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainNavComponent": () => (/* binding */ MainNavComponent)
/* harmony export */ });
/* harmony import */ var _dialog_logoutConfirm_logoutConfirm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dialog/logoutConfirm/logoutConfirm.component */ 4261);
/* harmony import */ var _dialog_changePassword_changePassword_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog/changePassword/changePassword.component */ 1370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.service */ 7420);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _services_main_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/main_local.service */ 1758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 8589);
















function MainNavComponent_mat_sidenav_1_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Vanuatu Medical Disability Registry");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MainNavComponent_mat_sidenav_1_a_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["active"]; };
function MainNavComponent_mat_sidenav_1_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 32)(1, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MainNavComponent_mat_sidenav_1_a_8_span_3_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.navCollapsed);
} }
function MainNavComponent_mat_sidenav_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Patients");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MainNavComponent_mat_sidenav_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-sidenav", 21, 22)(2, "mat-toolbar", 23)(3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_mat_sidenav_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.toggleSidebar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MainNavComponent_mat_sidenav_1_p_6_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MainNavComponent_mat_sidenav_1_a_8_Template, 4, 3, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 28)(10, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MainNavComponent_mat_sidenav_1_span_12_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.navCollapsed ? "sidenavCollapsed" : "sidenav")("opened", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.navCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.userData.role.id == "6868009" || ctx_r0.userData.role.id == "ict");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.navCollapsed);
} }
class MainNavComponent {
    constructor(sharedService, router, dialog, snackBar, route, spinner, httpService) {
        this.sharedService = sharedService;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.route = route;
        this.spinner = spinner;
        this.httpService = httpService;
        this.isHandset$ = this.sharedService.isHandset();
        this.userData = {};
        this.authToken = null;
        this.navCollapsed = false;
        this.isExpanded = true;
        this.showSubmenu = false;
        this.showShipmentSubmenu = false;
        this.isShowing = false;
        this.showSubSubMenu = false;
        this.flag = true;
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
    }
    ngOnInit() {
        this.userData.username = localStorage.getItem("userName");
        let role = localStorage.getItem("role");
        this.userData.role = this.rolesList.find(e => e.id == role);
        let userContact = localStorage.getItem("contactNumber");
        let isdCode = userContact.split("(").pop().split(")")[0];
        this.userData.contactNumber = isdCode + " " + userContact.split(" ")[1];
    }
    onLogout() {
        const dialogRef = this.dialog.open(_dialog_logoutConfirm_logoutConfirm_component__WEBPACK_IMPORTED_MODULE_0__.LogoutConfirmComponent, {
            width: '300px',
            data: {},
            disableClose: true,
            panelClass: 'bg-color'
        });
        dialogRef.afterClosed().subscribe((res) => {
            if (res.data == 'confirmed') {
                localStorage.clear();
                this.snackBar.open('You have successfully logged out!', '', {
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom',
                    duration: 2 * 1000,
                });
                this.router.navigate(['login']);
            }
        });
    }
    onChangePassword() {
        const dialogRef = this.dialog.open(_dialog_changePassword_changePassword_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent, {
            width: '400px',
            data: {},
            disableClose: true,
            panelClass: 'bg-color'
        });
        dialogRef.afterClosed().subscribe((res) => {
            if (res.data == 'confirmed') {
                localStorage.clear();
                this.router.navigate(['login']);
            }
        });
    }
    toggleSidebar() {
        this.navCollapsed = !this.navCollapsed;
    }
}
MainNavComponent.ɵfac = function MainNavComponent_Factory(t) { return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_main_local_service__WEBPACK_IMPORTED_MODULE_3__.HttpService)); };
MainNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MainNavComponent, selectors: [["app-main-nav"]], decls: 33, vars: 8, consts: [[1, "sidenav-container"], ["class", "sidenav", "fixedInViewport", "", "class", "sidenav", "role", "navigation", "mode", "side", 3, "ngClass", "opened", 4, "ngIf"], [3, "ngClass"], [1, "page-toolbar"], [2, "flex", "1 1 auto", "display", "flex"], [1, "profile-card-wrapper"], [1, "profile-card", "mat-elevation-z0"], [1, "info-area"], [1, "mat-subheading-1"], [1, "mat-body-2"], ["mat-mini-fab", "", 2, "margin-bottom", "16px", "margin-right", "12px", "background-color", "#ffffff", 3, "matMenuTriggerFor"], [1, "material-icons-outlined", 2, "color", "#003826"], [1, "header"], ["menu", "matMenu"], [1, "mat-subheading-1", 2, "padding-left", "32px", "letter-spacing", "0.15px"], [1, "mat-body-1", 2, "padding-left", "32px", "letter-spacing", "0.25px", "opacity", "0.6"], [1, "mat-caption", 2, "padding-left", "32px", "padding-top", "20px", "opacity", "0.6"], [1, "action-button"], ["mat-button", "", 1, "mat-button", 3, "click"], [2, "color", "#006C4C"], ["mat-button", "", 1, "mat-button", 2, "padding-left", "16px", 3, "click"], ["fixedInViewport", "", "role", "navigation", "mode", "side", 1, "sidenav", 3, "ngClass", "opened"], ["drawer", ""], ["color", "primary", 1, "sidenav-toolbar"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 1, "menu-icon", 3, "click"], ["aria-label", "Side nav toggle icon"], ["style", "font-size: 13px; padding-top: 4px;", 4, "ngIf"], ["mat-list-item", "", "routerLink", "users", 3, "routerLinkActive", 4, "ngIf"], ["mat-list-item", "", "routerLink", "patients", 3, "routerLinkActive"], [1, "material-icons-outlined"], ["class", "mat-body-1", 4, "ngIf"], [2, "font-size", "13px", "padding-top", "4px"], ["mat-list-item", "", "routerLink", "users", 3, "routerLinkActive"], [1, "mat-body-1"]], template: function MainNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MainNavComponent_mat_sidenav_1_Template, 13, 7, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-sidenav-content", 2)(3, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 10)(13, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " person");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-menu", 12, 13)(17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 17)(26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_Template_button_click_26_listener() { return ctx.onChangePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "CHANGE PASSWORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_Template_button_click_29_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "LOGOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.navCollapsed ? "navCollapsedContent" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.userData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.userData.role.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.userData.contactNumber);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuTrigger, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive], styles: ["*[_ngcontent-%COMP%] {\n  --primary-50: #F4FFF6;\n  --primary-100: #BDFFDE;\n  --primary-200: #89F8C7;\n  --primary-300: #6CDBAC;\n  --primary-400: #4EBF92;\n  --primary-500: #2CA378;\n  --primary-600: #008861;\n  --primary-700: #006C4C;\n  --primary-800: #005138;\n  --primary-900: #003826;\n  --secondary-50: #F4FFF6;\n  --secondary-100: #DDF7E7;\n  --secondary-200: #CFE9D9;\n  --secondary-300: #B3CCBE;\n  --secondary-400: #98B1A3;\n  --secondary-500: #7E9689;\n  --secondary-600: #657C70;\n  --secondary-700:#4D6357;\n  --secondary-800:#354B40;\n  --secondary-900:#1F352A;\n}\n\n.page-toolbar[_ngcontent-%COMP%] {\n  min-height: 65px;\n  background-color: var(--primary-900);\n  position: sticky;\n  top: 0px;\n  z-index: 6;\n}\n\n.page-toolbar[_ngcontent-%COMP%]   .profile-card-wrapper[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.page-toolbar[_ngcontent-%COMP%]   .profile-card-wrapper[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%] {\n  width: min-content;\n  max-height: 100%;\n  display: flex;\n  gap: 30px;\n  padding-top: 17px;\n}\n\n.page-toolbar[_ngcontent-%COMP%]   .profile-card-wrapper[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%] {\n  color: var(--primary-700);\n  overflow: hidden;\n}\n\n.page-toolbar[_ngcontent-%COMP%]   .profile-card-wrapper[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .mat-body-2[_ngcontent-%COMP%] {\n  top: -20px;\n  position: relative;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 28px;\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #F8FAF6;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n  margin: 0;\n  padding: 0;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.sidenav-toolbar[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  height: 65px;\n  background-color: var(--primary-900);\n}\n\n.sidenav-toolbar[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  margin-top: -14px;\n  margin-left: 10px;\n}\n\n.sidenav-toolbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: var(--primary-900) !important;\n  color: white;\n}\n\nmat-nav-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 12px;\n  gap: 16px;\n  color: black;\n}\n\n.mat-nav-list[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  width: 100%;\n  color: black;\n  border-radius: 8px;\n}\n\n.mat-nav-list[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 2px;\n}\n\n.mat-nav-list[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 4px;\n  padding-left: 10px;\n  width: 70%;\n}\n\n.sidenav-toggle-button[_ngcontent-%COMP%] {\n  margin-left: -6px;\n  margin-top: 6px;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 280px;\n  background-color: white;\n}\n\n.sidenavCollapsed[_ngcontent-%COMP%] {\n  width: 70px;\n  background-color: white;\n}\n\n.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  padding-left: 2px;\n}\n\n.submenu[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  transition: transform 300ms ease;\n  transform: scaleY(0);\n  transform-origin: top;\n  padding-left: 30px;\n  display: none;\n}\n\n.submenu.expanded[_ngcontent-%COMP%] {\n  display: block;\n  transform: scaleY(1);\n}\n\n.navCollapsedContent[_ngcontent-%COMP%] {\n  margin-left: 70px !important;\n}\n\n.mat-list-item[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 16px;\n}\n\n.notifications-menu[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: unset;\n}\n\n  .mat-list-item-content {\n  padding: 0 0 0 9px !important;\n}\n\n.action-button[_ngcontent-%COMP%] {\n  padding-top: 8%;\n  display: flex;\n  padding-left: 52px;\n}\n\n.item-color[_ngcontent-%COMP%] {\n  color: black;\n}\n\n  .header.mat-menu-panel {\n  max-width: min-content !important;\n  min-width: 316px !important;\n  min-height: 180px !important;\n  background-color: #DDEBE3 !important;\n}\n\na.mat-list-item.active[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3ZhbnVhdHUlMjBmcm9udGVuZC9TUEMtTURSLVdlYi1Gcm9udGVuZC9zcmMvYXBwL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5zY3NzIiwibWFpbi1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUVBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FDQUo7O0FDbkJBO0VBRUUsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QURxQkY7O0FDbEJFO0VBQ0UseUJBQUE7QURvQko7O0FDbEJJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QURvQk47O0FDbEJNO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBRG9CTjs7QUNsQk07RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QURvQlY7O0FDUkE7RUFDRSxXQUFBO0FEV0Y7O0FDUkE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QURXRjs7QUNSQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRFdGOztBQ1BBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QURVRjs7QUNQQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QURVRjs7QUNOQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FEU0Y7O0FDUkU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FEVUo7O0FDUEU7RUFDRSxpQkFBQTtBRFNKOztBQ05BO0VBQ0UsK0NBQUE7RUFDQSxZQUFBO0FEU0Y7O0FDTkE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FEU0Y7O0FDTkE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEUUY7O0FDTkU7RUFDRSxpQkFBQTtBRFFKOztBQ0xFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FET0o7O0FDRkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QURLRjs7QUNGQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBREtGOztBQ0hBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FETUY7O0FDSEE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FETUY7O0FDREE7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRElGOztBQ0ZBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FES0Y7O0FDRkE7RUFDRSw0QkFBQTtBREtGOztBQ0RBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QURJRjs7QUNEQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBRElGOztBQ0NBO0VBQ0ksNkJBQUE7QURFSjs7QUNDQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QURFRjs7QUNDQTtFQUNFLFlBQUE7QURFRjs7QUNBQTtFQUNFLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0FER0Y7O0FDQUE7RUFBeUIsWUFBQTtBREl6QiIsImZpbGUiOiJtYWluLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIC0tcHJpbWFyeS01MDogI0Y0RkZGNjtcbiAgICAtLXByaW1hcnktMTAwOiAjQkRGRkRFO1xuICAgIC0tcHJpbWFyeS0yMDA6ICM4OUY4Qzc7XG4gICAgLS1wcmltYXJ5LTMwMDogIzZDREJBQztcbiAgICAtLXByaW1hcnktNDAwOiAjNEVCRjkyO1xuICAgIC0tcHJpbWFyeS01MDA6ICMyQ0EzNzg7XG4gICAgLS1wcmltYXJ5LTYwMDogIzAwODg2MTtcbiAgICAtLXByaW1hcnktNzAwOiAjMDA2QzRDO1xuICAgIC0tcHJpbWFyeS04MDA6ICMwMDUxMzg7XG4gICAgLS1wcmltYXJ5LTkwMDogIzAwMzgyNjtcbiAgICBcbiAgICAtLXNlY29uZGFyeS01MDogICNGNEZGRjY7XG4gICAgLS1zZWNvbmRhcnktMTAwOiAjRERGN0U3O1xuICAgIC0tc2Vjb25kYXJ5LTIwMDogI0NGRTlEOTtcbiAgICAtLXNlY29uZGFyeS0zMDA6ICNCM0NDQkU7XG4gICAgLS1zZWNvbmRhcnktNDAwOiAjOThCMUEzO1xuICAgIC0tc2Vjb25kYXJ5LTUwMDogIzdFOTY4OTtcbiAgICAtLXNlY29uZGFyeS02MDA6ICM2NTdDNzA7XG4gICAgLS1zZWNvbmRhcnktNzAwIDojNEQ2MzU3O1xuICAgIC0tc2Vjb25kYXJ5LTgwMCA6IzM1NEI0MDtcbiAgICAtLXNlY29uZGFyeS05MDAgOiMxRjM1MkE7XG4gICAgfSIsIioge1xuICAtLXByaW1hcnktNTA6ICNGNEZGRjY7XG4gIC0tcHJpbWFyeS0xMDA6ICNCREZGREU7XG4gIC0tcHJpbWFyeS0yMDA6ICM4OUY4Qzc7XG4gIC0tcHJpbWFyeS0zMDA6ICM2Q0RCQUM7XG4gIC0tcHJpbWFyeS00MDA6ICM0RUJGOTI7XG4gIC0tcHJpbWFyeS01MDA6ICMyQ0EzNzg7XG4gIC0tcHJpbWFyeS02MDA6ICMwMDg4NjE7XG4gIC0tcHJpbWFyeS03MDA6ICMwMDZDNEM7XG4gIC0tcHJpbWFyeS04MDA6ICMwMDUxMzg7XG4gIC0tcHJpbWFyeS05MDA6ICMwMDM4MjY7XG4gIC0tc2Vjb25kYXJ5LTUwOiAjRjRGRkY2O1xuICAtLXNlY29uZGFyeS0xMDA6ICNEREY3RTc7XG4gIC0tc2Vjb25kYXJ5LTIwMDogI0NGRTlEOTtcbiAgLS1zZWNvbmRhcnktMzAwOiAjQjNDQ0JFO1xuICAtLXNlY29uZGFyeS00MDA6ICM5OEIxQTM7XG4gIC0tc2Vjb25kYXJ5LTUwMDogIzdFOTY4OTtcbiAgLS1zZWNvbmRhcnktNjAwOiAjNjU3QzcwO1xuICAtLXNlY29uZGFyeS03MDA6IzRENjM1NztcbiAgLS1zZWNvbmRhcnktODAwOiMzNTRCNDA7XG4gIC0tc2Vjb25kYXJ5LTkwMDojMUYzNTJBO1xufVxuXG4ucGFnZS10b29sYmFyIHtcbiAgbWluLWhlaWdodDogNjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS05MDApO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogNjtcbn1cbi5wYWdlLXRvb2xiYXIgLnByb2ZpbGUtY2FyZC13cmFwcGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi5wYWdlLXRvb2xiYXIgLnByb2ZpbGUtY2FyZC13cmFwcGVyIC5wcm9maWxlLWNhcmQge1xuICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzBweDtcbiAgcGFkZGluZy10b3A6IDE3cHg7XG59XG4ucGFnZS10b29sYmFyIC5wcm9maWxlLWNhcmQtd3JhcHBlciAucHJvZmlsZS1jYXJkIC5pbmZvLWFyZWEge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS03MDApO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnBhZ2UtdG9vbGJhciAucHJvZmlsZS1jYXJkLXdyYXBwZXIgLnByb2ZpbGUtY2FyZCAuaW5mby1hcmVhIC5tYXQtYm9keS0yIHtcbiAgdG9wOiAtMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEZBRjY7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uc2lkZW5hdi10b29sYmFyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktOTAwKTtcbn1cbi5zaWRlbmF2LXRvb2xiYXIgLm1lbnUtaWNvbiB7XG4gIG1hcmdpbi10b3A6IC0xNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5zaWRlbmF2LXRvb2xiYXIgcCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS05MDApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubWF0LW5hdi1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMnB4O1xuICBnYXA6IDE2cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm1hdC1uYXYtbGlzdCA+IGEge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ubWF0LW5hdi1saXN0ID4gYSBtYXQtaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xufVxuLm1hdC1uYXYtbGlzdCA+IGEgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5zaWRlbmF2LXRvZ2dsZS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogLTZweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zaWRlbmF2Q29sbGFwc2VkIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucm90YXRlZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xufVxuXG4uc3VibWVudSB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN1Ym1lbnUuZXhwYW5kZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG59XG5cbi5uYXZDb2xsYXBzZWRDb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1saXN0LWl0ZW0ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5ub3RpZmljYXRpb25zLW1lbnUge1xuICB3aWR0aDogNTAwcHg7XG4gIG1heC13aWR0aDogdW5zZXQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgcGFkZGluZzogMCAwIDAgOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgcGFkZGluZy10b3A6IDglO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDUycHg7XG59XG5cbi5pdGVtLWNvbG9yIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG46Om5nLWRlZXAgLmhlYWRlci5tYXQtbWVudS1wYW5lbCB7XG4gIG1heC13aWR0aDogbWluLWNvbnRlbnQgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAzMTZweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRERFQkUzICFpbXBvcnRhbnQ7XG59XG5cbmEubWF0LWxpc3QtaXRlbS5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG59IiwiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzJztcblxuLnBhZ2UtdG9vbGJhcntcblxuICBtaW4taGVpZ2h0OiA2NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTkwMCk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiA2O1xuXG5cbiAgLnByb2ZpbGUtY2FyZC13cmFwcGVye1xuICAgIGNvbG9yOiByZ2IoMCwwLDAsMC42MCk7XG5cbiAgICAucHJvZmlsZS1jYXJke1xuICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDMwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTdweDtcblxuICAgICAgLmluZm8tYXJlYXtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTcwMCk7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBcbiAgICAgIC5tYXQtYm9keS0ye1xuICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuXG5cbiAgXG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDI4cHg7XG59XG5cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RkFGNjtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcblxufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuXG4uc2lkZW5hdi10b29sYmFye1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogNjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS05MDApOyAgXG4gIC5tZW51LWljb257XG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuICBwe1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG59XG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS05MDApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubWF0LW5hdi1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMnB4OyBcbiAgZ2FwOiAgMTZweDsgXG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm1hdC1uYXYtbGlzdD5he1xuXG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICBtYXQtaWNvbntcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgfVxuXG4gIHNwYW57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICBcbn1cblxuLnNpZGVuYXYtdG9nZ2xlLWJ1dHRvbntcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnNpZGVuYXZDb2xsYXBzZWR7XG4gIHdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnJvdGF0ZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuXG5cbi5zdWJtZW51IHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN1Ym1lbnUuZXhwYW5kZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG59XG5cbi5uYXZDb2xsYXBzZWRDb250ZW50e1xuICBtYXJnaW4tbGVmdDogNzBweCAhaW1wb3J0YW50O1xufVxuXG5cbi5tYXQtbGlzdC1pdGVte1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5ub3RpZmljYXRpb25zLW1lbnV7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWF4LXdpZHRoOiB1bnNldDtcblxuICBcbn1cblxuOjpuZy1kZWVwIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAgMCAwIDlweCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG4gIHBhZGRpbmctdG9wOiA4JTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1sZWZ0OiA1MnB4O1xufVxuXG4uaXRlbS1jb2xvcntcbiAgY29sb3I6IGJsYWNrO1xufVxuOjpuZy1kZWVwIC5oZWFkZXIubWF0LW1lbnUtcGFuZWwge1xuICBtYXgtd2lkdGg6IG1pbi1jb250ZW50ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMzE2cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMTgwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERUJFMyAhaW1wb3J0YW50O1xufVxuXG5hLm1hdC1saXN0LWl0ZW0uYWN0aXZlIHsgY29sb3I6IHdoaXRlOyB9XG5cblxuIl19 */"] });


/***/ }),

/***/ 9892:
/*!*********************************************!*\
  !*** ./src/app/main-nav/main-nav.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainNavModule": () => (/* binding */ MainNavModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _main_nav_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-nav-routing.module */ 2227);
/* harmony import */ var _main_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-nav.component */ 4626);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
























class MainNavModule {
    constructor() {
    }
}
MainNavModule.ɵfac = function MainNavModule_Factory(t) { return new (t || MainNavModule)(); };
MainNavModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MainNavModule });
MainNavModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.LayoutModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRippleModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBarModule,
        _main_nav_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainNavRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MainNavModule, { declarations: [_main_nav_component__WEBPACK_IMPORTED_MODULE_1__.MainNavComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.LayoutModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRippleModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBarModule,
        _main_nav_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainNavRoutingModule], exports: [_main_nav_component__WEBPACK_IMPORTED_MODULE_1__.MainNavComponent] }); })();


/***/ }),

/***/ 3335:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/badge.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatBadge": () => (/* binding */ MatBadge),
/* harmony export */   "MatBadgeModule": () => (/* binding */ MatBadgeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 8971);







/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

let nextId = 0; // Boilerplate for applying mixins to MatBadge.

/** @docs-private */

const _MatBadgeBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)(class {});

const BADGE_CONTENT_CLASS = 'mat-badge-content';
/** Directive to display a text badge. */

class MatBadge extends _MatBadgeBase {
  constructor(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
    super();
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._ariaDescriber = _ariaDescriber;
    this._renderer = _renderer;
    this._animationMode = _animationMode;
    this._color = 'primary';
    this._overlap = true;
    /**
     * Position the badge should reside.
     * Accepts any combination of 'above'|'below' and 'before'|'after'
     */

    this.position = 'above after';
    /** Size of the badge. Can be 'small', 'medium', or 'large'. */

    this.size = 'medium';
    /** Unique id for the badge */

    this._id = nextId++;
    /** Whether the OnInit lifecycle hook has run yet */

    this._isInitialized = false;

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      const nativeElement = _elementRef.nativeElement;

      if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
        throw Error('matBadge must be attached to an element node.');
      }
    }
  }
  /** The color of the badge. Can be `primary`, `accent`, or `warn`. */


  get color() {
    return this._color;
  }

  set color(value) {
    this._setColor(value);

    this._color = value;
  }
  /** Whether the badge should overlap its contents or not */


  get overlap() {
    return this._overlap;
  }

  set overlap(val) {
    this._overlap = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(val);
  }
  /** The content for the badge */


  get content() {
    return this._content;
  }

  set content(newContent) {
    this._updateRenderedContent(newContent);
  }
  /** Message used to describe the decorated element via aria-describedby */


  get description() {
    return this._description;
  }

  set description(newDescription) {
    this._updateHostAriaDescription(newDescription);
  }
  /** Whether the badge is hidden. */


  get hidden() {
    return this._hidden;
  }

  set hidden(val) {
    this._hidden = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(val);
  }
  /** Whether the badge is above the host or not */


  isAbove() {
    return this.position.indexOf('below') === -1;
  }
  /** Whether the badge is after the host or not */


  isAfter() {
    return this.position.indexOf('before') === -1;
  }
  /**
   * Gets the element into which the badge's content is being rendered. Undefined if the element
   * hasn't been created (e.g. if the badge doesn't have content).
   */


  getBadgeElement() {
    return this._badgeElement;
  }

  ngOnInit() {
    // We may have server-side rendered badge that we need to clear.
    // We need to do this in ngOnInit because the full content of the component
    // on which the badge is attached won't necessarily be in the DOM until this point.
    this._clearExistingBadges();

    if (this.content && !this._badgeElement) {
      this._badgeElement = this._createBadgeElement();

      this._updateRenderedContent(this.content);
    }

    this._isInitialized = true;
  }

  ngOnDestroy() {
    // ViewEngine only: when creating a badge through the Renderer, Angular remembers its index.
    // We have to destroy it ourselves, otherwise it'll be retained in memory.
    if (this._renderer.destroyNode) {
      this._renderer.destroyNode(this._badgeElement);
    }

    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);
  }
  /** Creates the badge element */


  _createBadgeElement() {
    const badgeElement = this._renderer.createElement('span');

    const activeClass = 'mat-badge-active';
    badgeElement.setAttribute('id', `mat-badge-content-${this._id}`); // The badge is aria-hidden because we don't want it to appear in the page's navigation
    // flow. Instead, we use the badge to describe the decorated element with aria-describedby.

    badgeElement.setAttribute('aria-hidden', 'true');
    badgeElement.classList.add(BADGE_CONTENT_CLASS);

    if (this._animationMode === 'NoopAnimations') {
      badgeElement.classList.add('_mat-animation-noopable');
    }

    this._elementRef.nativeElement.appendChild(badgeElement); // animate in after insertion


    if (typeof requestAnimationFrame === 'function' && this._animationMode !== 'NoopAnimations') {
      this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          badgeElement.classList.add(activeClass);
        });
      });
    } else {
      badgeElement.classList.add(activeClass);
    }

    return badgeElement;
  }
  /** Update the text content of the badge element in the DOM, creating the element if necessary. */


  _updateRenderedContent(newContent) {
    const newContentNormalized = `${newContent ?? ''}`.trim(); // Don't create the badge element if the directive isn't initialized because we want to
    // append the badge element to the *end* of the host element's content for backwards
    // compatibility.

    if (this._isInitialized && newContentNormalized && !this._badgeElement) {
      this._badgeElement = this._createBadgeElement();
    }

    if (this._badgeElement) {
      this._badgeElement.textContent = newContentNormalized;
    }

    this._content = newContentNormalized;
  }
  /** Updates the host element's aria description via AriaDescriber. */


  _updateHostAriaDescription(newDescription) {
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);

    if (newDescription) {
      this._ariaDescriber.describe(this._elementRef.nativeElement, newDescription);
    }

    this._description = newDescription;
  }
  /** Adds css theme class given the color to the component host */


  _setColor(colorPalette) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove(`mat-badge-${this._color}`);

    if (colorPalette) {
      classList.add(`mat-badge-${colorPalette}`);
    }
  }
  /** Clears any existing badges that might be left over from server-side rendering. */


  _clearExistingBadges() {
    // Only check direct children of this host element in order to avoid deleting
    // any badges that might exist in descendant elements.
    const badges = this._elementRef.nativeElement.querySelectorAll(`:scope > .${BADGE_CONTENT_CLASS}`);

    for (const badgeElement of Array.from(badges)) {
      if (badgeElement !== this._badgeElement) {
        badgeElement.remove();
      }
    }
  }

}

MatBadge.ɵfac = function MatBadge_Factory(t) {
  return new (t || MatBadge)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.AriaDescriber), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ANIMATION_MODULE_TYPE, 8));
};

MatBadge.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: MatBadge,
  selectors: [["", "matBadge", ""]],
  hostAttrs: [1, "mat-badge"],
  hostVars: 20,
  hostBindings: function MatBadge_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-badge-overlap", ctx.overlap)("mat-badge-above", ctx.isAbove())("mat-badge-below", !ctx.isAbove())("mat-badge-before", !ctx.isAfter())("mat-badge-after", ctx.isAfter())("mat-badge-small", ctx.size === "small")("mat-badge-medium", ctx.size === "medium")("mat-badge-large", ctx.size === "large")("mat-badge-hidden", ctx.hidden || !ctx.content)("mat-badge-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: ["matBadgeDisabled", "disabled"],
    color: ["matBadgeColor", "color"],
    overlap: ["matBadgeOverlap", "overlap"],
    position: ["matBadgePosition", "position"],
    content: ["matBadge", "content"],
    description: ["matBadgeDescription", "description"],
    size: ["matBadgeSize", "size"],
    hidden: ["matBadgeHidden", "hidden"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBadge, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[matBadge]',
      inputs: ['disabled: matBadgeDisabled'],
      host: {
        'class': 'mat-badge',
        '[class.mat-badge-overlap]': 'overlap',
        '[class.mat-badge-above]': 'isAbove()',
        '[class.mat-badge-below]': '!isAbove()',
        '[class.mat-badge-before]': '!isAfter()',
        '[class.mat-badge-after]': 'isAfter()',
        '[class.mat-badge-small]': 'size === "small"',
        '[class.mat-badge-medium]': 'size === "medium"',
        '[class.mat-badge-large]': 'size === "large"',
        '[class.mat-badge-hidden]': 'hidden || !content',
        '[class.mat-badge-disabled]': 'disabled'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.AriaDescriber
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matBadgeColor']
    }],
    overlap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matBadgeOverlap']
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matBadgePosition']
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matBadge']
    }],
    description: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matBadgeDescription']
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matBadgeSize']
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matBadgeHidden']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatBadgeModule {}

MatBadgeModule.ɵfac = function MatBadgeModule_Factory(t) {
  return new (t || MatBadgeModule)();
};

MatBadgeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: MatBadgeModule
});
MatBadgeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBadgeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      exports: [MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      declarations: [MatBadge]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_main-nav_main-nav_module_ts.js.map