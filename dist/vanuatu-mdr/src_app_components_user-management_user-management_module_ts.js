"use strict";
(self["webpackChunkangular_template"] = self["webpackChunkangular_template"] || []).push([["src_app_components_user-management_user-management_module_ts"],{

/***/ 1583:
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-management/user-list/user-list.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListComponent": () => (/* binding */ UserListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var src_app_dialog_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dialog/add-user/add-user.component */ 6241);
/* harmony import */ var src_app_dialog_deactive_user_deactive_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dialog/deactive-user/deactive-user.component */ 317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_main_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/main_local.service */ 1758);
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ 1557);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);


























function UserListComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserListComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.openAddUserDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " ADD USER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserListComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const org_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", org_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](org_r21.name);
} }
function UserListComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", role_r22.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](role_r22.value);
} }
function UserListComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserListComponent_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.clearInput()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function UserListComponent_mat_header_cell_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r5.color);
} }
function UserListComponent_mat_cell_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", row_r25.userName)("matTooltipDisabled", row_r25.userName.length <= 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r25.userName && row_r25.userName.length > 20 ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](2, 3, row_r25.userName, 0, 20) + "..." : row_r25.userName, " ");
} }
function UserListComponent_mat_header_cell_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Organization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r7.color);
} }
function UserListComponent_mat_cell_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r26.organization, " ");
} }
function UserListComponent_mat_header_cell_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r9.color);
} }
function UserListComponent_mat_cell_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r27.role, " ");
} }
function UserListComponent_mat_header_cell_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Mobile # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r11.color);
} }
function UserListComponent_mat_cell_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r28.mobileNumber, " ");
} }
function UserListComponent_mat_header_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r13.color);
} }
function UserListComponent_mat_cell_67_mat_slide_toggle_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-slide-toggle", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function UserListComponent_mat_cell_67_mat_slide_toggle_1_Template_mat_slide_toggle_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const row_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.patchUserStatus(row_r29, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", row_r29.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r29.statusText);
} }
function UserListComponent_mat_cell_67_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r29.statusText);
} }
function UserListComponent_mat_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UserListComponent_mat_cell_67_mat_slide_toggle_1_Template, 3, 2, "mat-slide-toggle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, UserListComponent_mat_cell_67_span_2_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.loggedInRole == "6868009");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.loggedInRole != "6868009");
} }
function UserListComponent_ng_container_69_mat_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UserListComponent_ng_container_69_mat_cell_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell")(1, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserListComponent_ng_container_69_mat_cell_2_Template_mat_icon_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41); const row_r39 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.openEditUserDialog(row_r39.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function UserListComponent_ng_container_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UserListComponent_ng_container_69_mat_header_cell_1_Template, 2, 0, "mat-header-cell", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, UserListComponent_ng_container_69_mat_cell_2_Template, 3, 0, "mat-cell", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function UserListComponent_mat_header_row_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-header-row");
} }
function UserListComponent_mat_row_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-row");
} }
function UserListComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r18.tableData.length == 0 ? "No user registered yet, please click on ADD USER button to register a user." : "No results found", " ");
} }
const _c0 = function () { return [25, 50, 75, 100]; };
class UserListComponent {
    constructor(router, dialog, snackBar, route, spinner, location, httpFacadeService, httpFhirService) {
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.route = route;
        this.spinner = spinner;
        this.location = location;
        this.httpFacadeService = httpFacadeService;
        this.httpFhirService = httpFhirService;
        this.tableData = [];
        this.displayedColumns = [
            "userName",
            "organization",
            "role",
            "mobileNumber",
            "status"
        ];
        this.color = "#FFFFFF";
        this.authToken = null;
        this.usersList = [];
        this.searchInput = "";
        this.today = new Date();
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
        this.organizationsList = [];
        this.selectedOrg = "all";
        this.selectedRole = "all";
        this.selectedStatus = "all";
        this.loggedInRole = "";
        this.authToken = localStorage.getItem("mdr-token-auth");
        this.mdrToken = localStorage.getItem("mdr-token");
        this.loggedInRole = localStorage.getItem("role");
        this.tableData = [];
        if (this.loggedInRole == "6868009")
            this.displayedColumns = [
                "userName",
                "organization",
                "role",
                "mobileNumber",
                "status",
                "edit"
            ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.tableData);
    }
    ngOnInit() {
        this.getOrgList();
    }
    getOrgList() {
        this.spinner.show();
        this.organizationsList = [];
        this.httpFhirService
            .getRequestCall("Organization?_count=200&_elements=_id,name", this.mdrToken, {})
            .subscribe({
            next: (response) => {
                for (let org of response.entry) {
                    let orgData = {
                        id: org.resource.id,
                        name: org.resource.name,
                    };
                    this.organizationsList.push(orgData);
                }
                this.getUsersList();
                this.spinner.hide();
            },
            error: (err) => {
                this.errorStatus(err);
            }
        });
    }
    getUsersList() {
        this.spinner.show();
        this.tableData = [];
        this.httpFhirService
            .getRequestCall("Practitioner?_revinclude=PractitionerRole:practitioner&_count=400&_sort=-_lastUpdated", this.mdrToken, {})
            .subscribe({
            next: (usersList) => {
                for (let user of usersList.entry) {
                    let role = usersList.entry.find((e) => e.resource.resourceType == "PractitionerRole" &&
                        e.resource.practitioner.reference ==
                            "Practitioner/" + user.resource.id);
                    if (role && user.resource.id != localStorage.getItem("userId")) {
                        let isdCode = user.resource.telecom[0].value
                            .split("(")
                            .pop()
                            .split(")")[0];
                        let organization = this.organizationsList.find((e) => e.id == role.resource.organization.reference.split("/")[1]);
                        let roleData = this.rolesList.find((e) => e.id == role.resource.code[0].coding[0].code);
                        let data = {
                            userName: user.resource.name[0].given[0] +
                                (user.resource.name[0].family
                                    ? " " + user.resource.name[0].family
                                    : ""),
                            organization: organization.name,
                            role: roleData.value,
                            mobileNumber: isdCode + " " + user.resource.telecom[0].value.split(" ")[1],
                            status: user.resource.active,
                            statusText: user.resource.active ? "Active" : "Inactive",
                            id: user.resource.id,
                            lastUpdated: new Date(user.resource.meta.lastUpdated) >
                                new Date(role.resource.meta.lastUpdated)
                                ? new Date(user.resource.meta.lastUpdated)
                                : new Date(role.resource.meta.lastUpdated),
                        };
                        this.tableData.push(data);
                    }
                }
                this.tableData = this.tableData.sort((a, b) => b.lastUpdated - a.lastUpdated);
                this.setDataSource(this.tableData);
                this.spinner.hide();
            },
            error: (err) => {
                this.errorStatus(err);
            }
        });
    }
    errorStatus(error) {
        this.spinner.hide();
        let msg;
        if (error.error.message) {
            msg = error.error.message[0];
        }
        else {
            msg = 'Internal server error';
        }
        this.snackBar.open(msg, '', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 3 * 1000,
        });
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    openAddUserDialog() {
        const dialogRef = this.dialog.open(src_app_dialog_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_0__.AddUserComponent, {
            width: "718px",
            height: "auto",
            panelClass: "add-user-dialog",
            data: { type: "add" },
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe((res) => {
            if (res.data == "confirmed") {
                setTimeout(() => {
                    this.getUsersList();
                }, 1000);
            }
        });
    }
    openEditUserDialog(id) {
        const dialogRef = this.dialog.open(src_app_dialog_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_0__.AddUserComponent, {
            width: "718px",
            height: "auto",
            panelClass: "add-user-dialog",
            data: { type: "edit", id: id },
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe((res) => {
            if (res.data == "confirmed") {
                setTimeout(() => {
                    this.getUsersList();
                    this.resetFilters();
                }, 1000);
            }
        });
    }
    openStatusDialog() {
        this.statusDialog = this.dialog.open(src_app_dialog_deactive_user_deactive_user_component__WEBPACK_IMPORTED_MODULE_1__.DeactiveUserComponent, {
            width: "389px",
            height: "auto",
            panelClass: "add-user-dialog",
            data: {},
            disableClose: false,
        });
    }
    patchUserStatus(user, $event) {
        console.log("userId and status", user.status, $event.checked);
        let status = $event.checked;
        if (!$event.checked) {
            $event.source.checked = true;
            this.openStatusDialog();
            this.statusDialog.afterClosed().subscribe((data) => {
                if (data.data == "confirmed") {
                    $event.source.checked = false;
                    status = false;
                    // patch status
                    this.patchStatus(user.id, status);
                    user.status = status;
                    user.statusText = user.status ? "Active" : "Inactive";
                }
            });
        }
        else if (user.status !== $event.checked) {
            user.status = status;
            this.patchStatus(user.id, status);
            user.statusText = user.status == true ? "Active" : "Inactive";
        }
    }
    patchStatus(userId, status) {
        let resourceData = [{ op: "replace", path: "/active", value: status }];
        this.httpFhirService
            .patchRequestCall(`Practitioner/${userId}`, resourceData, this.mdrToken, {})
            .subscribe({
            next: (response) => {
                console.log("check response:", response);
                let statusText = "User status updated";
                this.snackBar.open(statusText, "", {
                    horizontalPosition: "center",
                    verticalPosition: "bottom",
                    duration: 3 * 1000,
                });
            },
            error: (err) => {
                this.errorStatus(err);
            }
        });
    }
    clearInput() {
        this.searchInput = "";
        this.filterUsers();
    }
    filterUsers() {
        let userListCopy = [...this.tableData];
        userListCopy = this.filterByOrganization(userListCopy);
        userListCopy = this.filterByRole(userListCopy);
        userListCopy = this.filterByStatus(userListCopy);
        userListCopy = this.filterBySearch(userListCopy);
        console.log(userListCopy);
        this.setDataSource(userListCopy);
    }
    setDataSource(list) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(list);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    filterByOrganization(userListCopy) {
        if (this.selectedOrg != "all") {
            let selectedOrgName = this.organizationsList.find((e) => e.id == this.selectedOrg);
            userListCopy = userListCopy.filter((e) => e.organization == selectedOrgName.name);
        }
        return userListCopy;
    }
    filterByRole(userListCopy) {
        if (this.selectedRole != "all") {
            let selectedRoleName = this.rolesList.find((e) => e.id == this.selectedRole);
            userListCopy = userListCopy.filter((e) => e.role == selectedRoleName?.value);
        }
        return userListCopy;
    }
    filterByStatus(userListCopy) {
        if (this.selectedStatus != "all") {
            console.log("selected status: ", this.selectedStatus, userListCopy);
            userListCopy = userListCopy.filter((e) => e.status == this.selectedStatus);
            console.log("selected status userListCopy: ", userListCopy);
        }
        return userListCopy;
    }
    filterBySearch(userListCopy) {
        if (this.searchInput != "") {
            let inputValue = this.searchInput.trim().toLowerCase();
            // userListCopy = userListCopy.filter((e: any) => Object.entries(e).some(entry => String(entry[1]).toLowerCase().includes(inputValue)))
            userListCopy = userListCopy.filter((e) => e.userName.toLowerCase().includes(inputValue) ||
                e.organization.toLowerCase().includes(inputValue) ||
                e.role.toLowerCase().includes(inputValue) ||
                e.mobileNumber.toLowerCase().includes(inputValue) ||
                e.statusText.toLowerCase().includes(inputValue));
        }
        return userListCopy;
    }
    resetFilters() {
        this.selectedOrg = "all";
        this.selectedRole = "all";
        this.selectedStatus = "all";
        this.searchInput = "";
        this.setDataSource(this.tableData);
    }
    handleReset() {
        if (this.selectedOrg == "all" &&
            this.selectedRole == "all" &&
            this.selectedStatus == "all" &&
            this.searchInput == "")
            return true;
        else
            return false;
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.LocationStrategy), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_main_local_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__.HttpServiceMdr)); };
UserListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], viewQuery: function UserListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { max: "max" }, decls: 75, vars: 20, consts: [[1, "main"], [1, "landing-card"], [1, "card-header"], [1, "mat-headline", 2, "margin-top", "10px"], [1, "buttons-area"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "card-content", 2, "height", "100%"], [1, "select-filter"], ["appearance", "outline", 1, "form-fields"], ["name", "organization", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "role", 3, "ngModel", "ngModelChange", "selectionChange"], ["name", "status", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value"], [1, "select-filter", "search"], ["appearance", "outline", 2, "width", "80%"], ["matPrefix", "", 1, "search-icon"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["matInput", "", "placeholder", "Search user", 3, "ngModel", "ngModelChange", "input"], ["input", ""], [1, "header-button"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["fontSet", "material-icons-outlined", 1, "add-icon"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", "aria-describedby", "usersList", 3, "dataSource"], ["matColumnDef", "userName"], ["mat-sort-header", "", 3, "background-color", 4, "matHeaderCellDef"], ["class", "mat-body-2", "matTooltipPosition", "left", 3, "matTooltip", "matTooltipDisabled", 4, "matCellDef"], ["matColumnDef", "organization"], [3, "background-color", 4, "matHeaderCellDef"], ["class", "mat-body-2", 4, "matCellDef"], ["matColumnDef", "role"], ["matColumnDef", "mobileNumber"], ["matColumnDef", "status"], ["matColumnDef", "edit", "stickyEnd", "", "style", "padding-right: 5px;", 4, "ngIf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["class", "no-content-text", "mdcBody1", "", 4, "ngIf"], [2, "margin-top", "0px", "margin-bottom", "0px"], ["aria-label", "Select page of users", "aria-label", "Select page of users", "showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-sort-header", ""], ["matTooltipPosition", "left", 1, "mat-body-2", 3, "matTooltip", "matTooltipDisabled"], [1, "mat-body-2"], ["color", "primary", 3, "checked", "change", 4, "ngIf"], [4, "ngIf"], ["color", "primary", 3, "checked", "change"], [2, "padding-left", "12px"], ["matColumnDef", "edit", "stickyEnd", "", 2, "padding-right", "5px"], ["aria-label", "row actions", 4, "matHeaderCellDef"], [4, "matCellDef"], ["aria-label", "row actions"], ["color", "primary", 3, "click"], ["mdcBody1", "", 1, "no-content-text"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, UserListComponent_button_6_Template, 4, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-card-content", 6)(9, "div", 7)(10, "mat-form-field", 8)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserListComponent_Template_mat_select_ngModelChange_13_listener($event) { return ctx.selectedOrg = $event; })("selectionChange", function UserListComponent_Template_mat_select_selectionChange_13_listener() { return ctx.filterUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, UserListComponent_mat_option_16_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-form-field", 8)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserListComponent_Template_mat_select_ngModelChange_20_listener($event) { return ctx.selectedRole = $event; })("selectionChange", function UserListComponent_Template_mat_select_selectionChange_20_listener() { return ctx.filterUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, UserListComponent_mat_option_23_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-form-field", 8)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserListComponent_Template_mat_select_ngModelChange_27_listener($event) { return ctx.selectedStatus = $event; })("selectionChange", function UserListComponent_Template_mat_select_selectionChange_27_listener() { return ctx.filterUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 15)(35, "mat-form-field", 16)(36, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, UserListComponent_button_38_Template, 3, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserListComponent_Template_input_ngModelChange_39_listener($event) { return ctx.searchInput = $event; })("input", function UserListComponent_Template_input_input_39_listener() { return ctx.filterUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 21)(42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_42_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " RESET FILTERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 24)(47, "mat-table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " // Name Column ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](49, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, UserListComponent_mat_header_cell_50_Template, 2, 2, "mat-header-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, UserListComponent_mat_cell_51_Template, 3, 7, "mat-cell", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " // Organization Column ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](53, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, UserListComponent_mat_header_cell_54_Template, 2, 2, "mat-header-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, UserListComponent_mat_cell_55_Template, 2, 1, "mat-cell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, " // Role Column ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](57, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, UserListComponent_mat_header_cell_58_Template, 2, 2, "mat-header-cell", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, UserListComponent_mat_cell_59_Template, 2, 1, "mat-cell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " // Mobile Number Column ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](61, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, UserListComponent_mat_header_cell_62_Template, 2, 2, "mat-header-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, UserListComponent_mat_cell_63_Template, 2, 1, "mat-cell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, " // Status Column ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](65, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, UserListComponent_mat_header_cell_66_Template, 2, 2, "mat-header-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, UserListComponent_mat_cell_67_Template, 3, 2, "mat-cell", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, " // Edit Column ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](69, UserListComponent_ng_container_69_Template, 3, 0, "ng-container", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, UserListComponent_mat_header_row_70_Template, 1, 0, "mat-header-row", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](71, UserListComponent_mat_row_71_Template, 1, 0, "mat-row", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, UserListComponent_div_72_Template, 2, 1, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "hr", 39)(74, "mat-paginator", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loggedInRole == "6868009");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedOrg);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.organizationsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rolesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.searchInput.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.handleReset());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource)("@.disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loggedInRole == "6868009");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSize", 25)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](19, _c0));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_10__.SlicePipe], styles: ["*[_ngcontent-%COMP%] {\n  --primary-50: #F4FFF6;\n  --primary-100: #BDFFDE;\n  --primary-200: #89F8C7;\n  --primary-300: #6CDBAC;\n  --primary-400: #4EBF92;\n  --primary-500: #2CA378;\n  --primary-600: #008861;\n  --primary-700: #006C4C;\n  --primary-800: #005138;\n  --primary-900: #003826;\n  --secondary-50: #F4FFF6;\n  --secondary-100: #DDF7E7;\n  --secondary-200: #CFE9D9;\n  --secondary-300: #B3CCBE;\n  --secondary-400: #98B1A3;\n  --secondary-500: #7E9689;\n  --secondary-600: #657C70;\n  --secondary-700:#4D6357;\n  --secondary-800:#354B40;\n  --secondary-900:#1F352A;\n}\n\n.main[_ngcontent-%COMP%] {\n  background-color: #F8FAF6;\n}\n\n.main[_ngcontent-%COMP%]   .landing-card[_ngcontent-%COMP%] {\n  margin: 3%;\n  margin-bottom: 24px;\n  background: var(--primary-50);\n  padding: 0;\n}\n\n.main[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 32px;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.main[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 32px;\n  padding-top: 24px;\n  background-color: white;\n}\n\n.main[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .select-filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 95%;\n  gap: 24px;\n}\n\n.main[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.main[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%] {\n  width: 33%;\n}\n\n.header-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-weight: 500;\n  letter-spacing: 1.25px;\n}\n\n.add-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 24px;\n  height: 24px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.8705882353);\n  padding-right: 10px;\n}\n\n[_nghost-%COMP%]     .mat-input-element::placeholder {\n  color: rgba(0, 0, 0, 0.8705882353);\n  background-color: white;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-prefix, .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-suffix[_ngcontent-%COMP%] {\n  place-self: center;\n  top: 0.35em !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline {\n  background-color: white;\n}\n\n.table-section[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  margin-bottom: 20px;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: calc(100vh - 567px);\n  overflow: auto;\n}\n\nmat-header-cell[_ngcontent-%COMP%], mat-cell[_ngcontent-%COMP%] {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-row[_ngcontent-%COMP%] {\n  border-style: none;\n}\n\nmat-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n}\n\n.mat-column-userName[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.mat-column-organization[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.mat-column-role[_ngcontent-%COMP%] {\n  width: 23%;\n}\n\n.mat-column-mobileNumber[_ngcontent-%COMP%] {\n  width: 16%;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.no-content-text[_ngcontent-%COMP%] {\n  margin: 55px 0;\n  text-align: center;\n  color: black;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL192YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ZhbnVhdHUlMjBmcm9udGVuZC9TUEMtTURSLVdlYi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VtZW50L3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJ1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUVBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FDQUo7O0FDbkJBO0VBQ0kseUJBQUE7QURzQko7O0FDckJLO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FEdUJUOztBQ3BCSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBRHNCUjs7QUNuQkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBRHFCUjs7QUNwQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBRHNCWjs7QUNsQlE7RUFDSSw4QkFBQTtFQUNBLHFCQUFBO0FEb0JaOztBQ2pCUTtFQUNJLFVBQUE7QURtQlo7O0FDWEE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FEY0o7O0FDWEE7RUFFSSxnQkFBQTtFQUNBLHNCQUFBO0FEYUo7O0FDVkE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEYUo7O0FDVkE7RUFDSSxrQ0FBQTtFQUNBLG1CQUFBO0FEYUo7O0FDVEE7RUFDSSxrQ0FBQTtFQUNBLHVCQUFBO0FEWUo7O0FDUkE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FEV0o7O0FDUEE7RUFDSSx1QkFBQTtBRFVKOztBQ1BBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FEVUo7O0FDTkE7RUFDSSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FEU0o7O0FDSkE7RUFDSSxXQUFBO0VBRUEsMEJBQUE7QURNSjs7QUNIQTtFQUNJLGtCQUFBO0FETUo7O0FDSEE7RUFDSSx5QkFBQTtBRE1KOztBQ0pBO0VBQ0ksVUFBQTtBRE9KOztBQ0pBO0VBQ0ksVUFBQTtBRE9KOztBQ0pBO0VBQ0ksVUFBQTtBRE9KOztBQ0pBO0VBQ0ksVUFBQTtBRE9KOztBQ0pBO0VBQ0kseUJBQUE7QURPSjs7QUNKQTtFQUNJLG1CQUFBO0FET0o7O0FDSkE7RUFDSSxzQkFBQTtBRE9KOztBQ0pBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FET0oiLCJmaWxlIjoidXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgLS1wcmltYXJ5LTUwOiAjRjRGRkY2O1xuICAgIC0tcHJpbWFyeS0xMDA6ICNCREZGREU7XG4gICAgLS1wcmltYXJ5LTIwMDogIzg5RjhDNztcbiAgICAtLXByaW1hcnktMzAwOiAjNkNEQkFDO1xuICAgIC0tcHJpbWFyeS00MDA6ICM0RUJGOTI7XG4gICAgLS1wcmltYXJ5LTUwMDogIzJDQTM3ODtcbiAgICAtLXByaW1hcnktNjAwOiAjMDA4ODYxO1xuICAgIC0tcHJpbWFyeS03MDA6ICMwMDZDNEM7XG4gICAgLS1wcmltYXJ5LTgwMDogIzAwNTEzODtcbiAgICAtLXByaW1hcnktOTAwOiAjMDAzODI2O1xuICAgIFxuICAgIC0tc2Vjb25kYXJ5LTUwOiAgI0Y0RkZGNjtcbiAgICAtLXNlY29uZGFyeS0xMDA6ICNEREY3RTc7XG4gICAgLS1zZWNvbmRhcnktMjAwOiAjQ0ZFOUQ5O1xuICAgIC0tc2Vjb25kYXJ5LTMwMDogI0IzQ0NCRTtcbiAgICAtLXNlY29uZGFyeS00MDA6ICM5OEIxQTM7XG4gICAgLS1zZWNvbmRhcnktNTAwOiAjN0U5Njg5O1xuICAgIC0tc2Vjb25kYXJ5LTYwMDogIzY1N0M3MDtcbiAgICAtLXNlY29uZGFyeS03MDAgOiM0RDYzNTc7XG4gICAgLS1zZWNvbmRhcnktODAwIDojMzU0QjQwO1xuICAgIC0tc2Vjb25kYXJ5LTkwMCA6IzFGMzUyQTtcbiAgICB9IiwiKiB7XG4gIC0tcHJpbWFyeS01MDogI0Y0RkZGNjtcbiAgLS1wcmltYXJ5LTEwMDogI0JERkZERTtcbiAgLS1wcmltYXJ5LTIwMDogIzg5RjhDNztcbiAgLS1wcmltYXJ5LTMwMDogIzZDREJBQztcbiAgLS1wcmltYXJ5LTQwMDogIzRFQkY5MjtcbiAgLS1wcmltYXJ5LTUwMDogIzJDQTM3ODtcbiAgLS1wcmltYXJ5LTYwMDogIzAwODg2MTtcbiAgLS1wcmltYXJ5LTcwMDogIzAwNkM0QztcbiAgLS1wcmltYXJ5LTgwMDogIzAwNTEzODtcbiAgLS1wcmltYXJ5LTkwMDogIzAwMzgyNjtcbiAgLS1zZWNvbmRhcnktNTA6ICNGNEZGRjY7XG4gIC0tc2Vjb25kYXJ5LTEwMDogI0RERjdFNztcbiAgLS1zZWNvbmRhcnktMjAwOiAjQ0ZFOUQ5O1xuICAtLXNlY29uZGFyeS0zMDA6ICNCM0NDQkU7XG4gIC0tc2Vjb25kYXJ5LTQwMDogIzk4QjFBMztcbiAgLS1zZWNvbmRhcnktNTAwOiAjN0U5Njg5O1xuICAtLXNlY29uZGFyeS02MDA6ICM2NTdDNzA7XG4gIC0tc2Vjb25kYXJ5LTcwMDojNEQ2MzU3O1xuICAtLXNlY29uZGFyeS04MDA6IzM1NEI0MDtcbiAgLS1zZWNvbmRhcnktOTAwOiMxRjM1MkE7XG59XG5cbi5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RkFGNjtcbn1cbi5tYWluIC5sYW5kaW5nLWNhcmQge1xuICBtYXJnaW46IDMlO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTUwKTtcbiAgcGFkZGluZzogMDtcbn1cbi5tYWluIC5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDMycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluIC5jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAzMnB4O1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubWFpbiAuY2FyZC1jb250ZW50IC5zZWxlY3QtZmlsdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDk1JTtcbiAgZ2FwOiAyNHB4O1xufVxuLm1haW4gLmNhcmQtY29udGVudCAuc2VhcmNoIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4ubWFpbiAuY2FyZC1jb250ZW50IC5mb3JtLWZpZWxkcyB7XG4gIHdpZHRoOiAzMyU7XG59XG5cbi5oZWFkZXItYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XG59XG5cbi5hZGQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5zZWFyY2gtaWNvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcwNTg4MjM1Myk7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NzA1ODgyMzUzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCB7XG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlLXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5tYXQtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDU2N3B4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbm1hdC1oZWFkZXItY2VsbCwgbWF0LWNlbGwge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtcm93IHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5tYXQtY2VsbCB7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG59XG5cbi5tYXQtY29sdW1uLXVzZXJOYW1lIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLm1hdC1jb2x1bW4tb3JnYW5pemF0aW9uIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLm1hdC1jb2x1bW4tcm9sZSB7XG4gIHdpZHRoOiAyMyU7XG59XG5cbi5tYXQtY29sdW1uLW1vYmlsZU51bWJlciB7XG4gIHdpZHRoOiAxNiU7XG59XG5cbnRkLm1hdC1jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbn1cblxudGgge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5tYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5uby1jb250ZW50LXRleHQge1xuICBtYXJnaW46IDU1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcyc7XG5cbi5tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGQUY2O1xuICAgICAubGFuZGluZy1jYXJkIHsgICAgICAgIFxuICAgICAgICAgbWFyZ2luOiAgMyU7XG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS01MCkgO1xuICAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAzMnB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nOiAzMnB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIC5zZWxlY3QtZmlsdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIGdhcDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgIFxuICAgICAgICAuc2VhcmNoIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLWZpZWxkcyB7XG4gICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICB9XG5cblxuICAgIH1cbn1cblxuXG4uaGVhZGVyLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5idXR0b24ge1xuICAgLy8gaGVpZ2h0OiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbn1cblxuLmFkZC1pY29uIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgICBjb2xvcjogIzAwMDAwMERFO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjMDAwMDAwREU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCwgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gICAgdG9wOiAwLjM1ZW0gIWltcG9ydGFudDsgXG4gIH1cblxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50YWJsZS1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTsgIFxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7ICBcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5cbm1hdC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDU2N3B4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcblxufVxuXG5cbm1hdC1oZWFkZXItY2VsbCxtYXQtY2VsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgY29sb3I6IHJnYigwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1yb3cge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxubWF0LWNlbGwge1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG59XG4ubWF0LWNvbHVtbi11c2VyTmFtZSB7XG4gICAgd2lkdGg6IDIwJTtcbn1cblxuLm1hdC1jb2x1bW4tb3JnYW5pemF0aW9uIHtcbiAgICB3aWR0aDogMjAlO1xufVxuXG4ubWF0LWNvbHVtbi1yb2xlIHtcbiAgICB3aWR0aDogMjMlO1xufVxuXG4ubWF0LWNvbHVtbi1tb2JpbGVOdW1iZXIge1xuICAgIHdpZHRoOiAxNiU7XG59XG5cbnRkLm1hdC1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xufVxuXG50aCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxubWF0LWljb24ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5uby1jb250ZW50LXRleHQge1xuICAgIG1hcmdpbjogNTVweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"] });


/***/ }),

/***/ 1536:
/*!**********************************************************************!*\
  !*** ./src/app/components/user-management/user-management.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementModule": () => (/* binding */ UserManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _userManagement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userManagement-routing.module */ 1514);
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list/user-list.component */ 1583);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);

















class UserManagementModule {
}
UserManagementModule.ɵfac = function UserManagementModule_Factory(t) { return new (t || UserManagementModule)(); };
UserManagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UserManagementModule });
UserManagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_userManagement_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggleModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserManagementModule, { declarations: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__.UserListComponent], imports: [_userManagement_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggleModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule] }); })();


/***/ }),

/***/ 1514:
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-management/userManagement-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoutingModule": () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list/user-list.component */ 1583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__.UserListComponent },
    { path: '**', redirectTo: '/main/users/list' }
];
class UserRoutingModule {
}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); };
UserRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
UserRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_user-management_user-management_module_ts.js.map