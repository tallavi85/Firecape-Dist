(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-calc-module"],{

/***/ "./src/app/landing/calc.module.ts":
/*!****************************************!*\
  !*** ./src/app/landing/calc.module.ts ***!
  \****************************************/
/*! exports provided: CalcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcModule", function() { return CalcModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calc_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calc-routing.module */ "./src/app/landing/calc-routing.module.ts");
/* harmony import */ var _landing_calc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/calc.component */ "./src/app/landing/landing/calc.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CalcModule = /** @class */ (function () {
    function CalcModule() {
    }
    CalcModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_landing_calc_component__WEBPACK_IMPORTED_MODULE_3__["CalcComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _calc_routing_module__WEBPACK_IMPORTED_MODULE_2__["CalcRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]
        })
    ], CalcModule);
    return CalcModule;
}());



/***/ })

}]);
//# sourceMappingURL=landing-calc-module.js.map