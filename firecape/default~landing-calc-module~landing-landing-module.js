(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~landing-calc-module~landing-landing-module"],{

/***/ "./src/app/landing/calc-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/landing/calc-routing.module.ts ***!
  \************************************************/
/*! exports provided: CalcRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcRoutingModule", function() { return CalcRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing/landing.component.ts");
/* harmony import */ var _landing_calc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/calc.component */ "./src/app/landing/landing/calc.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
    },
    {
        path: 'pricing',
        component: _landing_calc_component__WEBPACK_IMPORTED_MODULE_3__["CalcComponent"]
    }
];
var CalcRoutingModule = /** @class */ (function () {
    function CalcRoutingModule() {
    }
    CalcRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CalcRoutingModule);
    return CalcRoutingModule;
}());



/***/ }),

/***/ "./src/app/landing/landing/calc.component.html":
/*!*****************************************************!*\
  !*** ./src/app/landing/landing/calc.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n<nav class=\"navbar navbar-expand-lg\">\n  <a style=\"margin-right: 2%;\" class=\"navbar-brand\"><img src=\"./assets/logos/firecape.png\" /></a>\n \n    \n    <ul class=\"navbar-nav mr-auto\">\n        <div style=\"display: flex\">\n       <li style=\"margin-right: 5%; line-height: 40px\" class=\"\">\n        <a routerLink=\"\" class=\"nav-link\">Home</a>\n      </li>\n            \n      <li style=\"margin-right: 5%; line-height: 40px\" class=\"nav-item active\">\n        <a style=\"vertical-align: middle\" class=\"nav-link activey\">Prices</a>\n      </li>\n        <li style=\"margin-right: 5%; line-height: 40px\" class=\"nav-item active\">\n        <a style=\"vertical-align: middle\" href=\"https://www.holycherrys.com/\" class=\"nav-link\">Inferno</a>\n      </li>\n            </div>\n    </ul>\n        \n</nav>\n<div class=\"floatSoc\">\n<a href=\"skype:live:anteswede95/?add\"><img src=\"../../../assets/logos/skype.png\"></a>\n    <br>\n<a  href=\"https://discord.gg/aVTevWS\"><img src=\"../../../assets/logos/discord.png\"></a>\n    <br>\n    <a  href=\"https://www.sythe.org/threads/25-donor-1-anteswedes-1-31-prayer-firecape-service-firecapes-com-10hp-1-pray-free-jad/\"><img src=\"../../../assets/logos/sythe.png\"></a>\n    <br>\n    <a  href=\"https://www.youtube.com/channel/UCbj_N4YLUSRA5P1AH0gm0Bg\"><img src=\"../../../assets/logos/youtube.png\"></a>\n    <br>\n</div>\n<div class=\"container-fluid\">\n    \n    <h1>Enter your levels</h1>\n    <div class=\"row\">\n        <div class=\"contentCalculator\">\n        <div class=\"col\" style=\"margin-top: 1%; margin-bottom: 1%\">\n        <span><img src=\"../../../assets/logos/range.png\" style=\"margin-right: 5px;\">Ranged Level: <span class=\"levels\" #levelindx >50</span></span>\n          <input #slidex id=\"rangedSlider\" class=\"slider\" value=\"50\" min=\"50\" max=\"99\" (input)=\"updateRange(slidex.value); levelindx.innerText = slidex.value; pricey.innerText = getPrice()\" type=\"range\" />\n        \n        \n        </div>\n           <hr> \n        <div class=\"col\" style=\"margin-top: 1%; margin-bottom: 1%\">\n        <span><img src=\"../../../assets/logos/hp.png\" style=\"margin-right: 5px;\">Hitpoints: <span class=\"levels\" #levelindx2 >50</span></span>\n          <input #slidex2 id=\"rangedSlider\" class=\"slider\" value=\"50\" min=\"10\" max=\"99\" (input)=\"updateHP(slidex2.value); levelindx2.innerText = slidex2.value; pricey.innerText = getPrice()\" type=\"range\" />\n        \n        \n        </div>\n            <hr>\n        <div class=\"col\" style=\"margin-top: 1%; margin-bottom: 1%\">\n        <span><img src=\"../../../assets/logos/defence.png\" style=\"margin-right: 5px;\">Defence Level: <span class=\"levels\" #levelindx3 >1</span></span>\n          <input #slidex3 id=\"rangedSlider\" class=\"slider\" value=\"1\" min=\"1\" max=\"99\" (input)=\"updateDef(slidex3.value); levelindx3.innerText = slidex3.value; pricey.innerText = getPrice()\" type=\"range\" />\n        \n        \n        </div>\n            <hr>\n            \n        <div class=\"col\" style=\"margin-top: 1%; margin-bottom: 1%\">\n            <div class=\"inputGroup\">\n    <input #pray (change)=\"updatePray(pray.checked); pricey.innerText = getPrice()\" id=\"option1\" name=\"option1\" type=\"checkbox\"/>\n    <label for=\"option1\"><img src=\"../../../assets/logos/pray.png\" style=\"margin-right: 5px\">43+ Prayer</label>\n  </div>\n        \n        \n        </div>\n        </div>\n    </div>\n\n    <h2 id=\"pricey\" #pricey></h2>\n    <hr>\n    <h2>Supplies and gear will be provided</h2>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/landing/landing/calc.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/landing/landing/calc.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  width: 100%;\n  overflow-x: hidden;\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n* {\n  -webkit-animation: 1s fadeIn;\n          animation: 1s fadeIn;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  visibility: hidden; }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    visibility: visible;\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    visibility: visible;\n    opacity: 1; } }\n\n* {\n  color: white; }\n\n.mat-select-value {\n  color: white; }\n\n::ng-deep .mat-select-value-text {\n  color: white; }\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: white; }\n\nnavbar.a {\n  color: #f48042 !important; }\n\n.contentCalculator {\n  margin: 10px auto;\n  border: 1px solid white;\n  display: inline-block;\n  max-width: 80%;\n  width: 400px; }\n\n.images {\n  margin-top: 2%;\n  width: 100%; }\n\n.images .image {\n    padding: 5px 5px 5px 5px; }\n\n.navbar {\n  background-color: rgba(255, 255, 255, 0.2); }\n\n::ng-deep .mat-option-text {\n  color: black; }\n\n.banner {\n  margin-top: 5%;\n  margin-right: auto;\n  margin-left: auto; }\n\n.images img {\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n  display: block; }\n\nh1 {\n  color: white;\n  font-family: Courier;\n  text-align: center;\n  margin-top: 3%; }\n\nh2 {\n  color: white;\n  font-family: Courier;\n  text-align: center;\n  margin-top: 1%; }\n\nhr {\n  width: 50%;\n  background-color: white; }\n\n.slider {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 5px;\n  border-radius: 5px;\n  outline: none;\n  opacity: 1.0; }\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #4CAF50;\n  cursor: pointer; }\n\n.slider::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #4CAF50;\n  cursor: pointer; }\n\n.levels {\n  color: #4CAF50; }\n\n.inputGroup {\n  background-color: transparent;\n  display: block;\n  margin: 10px 0;\n  position: relative; }\n\n.inputGroup label {\n    padding: 12px 30px;\n    width: 100%;\n    display: block;\n    text-align: left;\n    color: white;\n    cursor: pointer;\n    position: relative;\n    z-index: 2;\n    transition: color 200ms ease-in;\n    overflow: hidden; }\n\n.inputGroup label:before {\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      content: '';\n      background-color: #4CAF50;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      -webkit-transform: translate(-50%, -50%) scale3d(1, 1, 1);\n              transform: translate(-50%, -50%) scale3d(1, 1, 1);\n      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\n      opacity: 0 !important;\n      z-index: -1; }\n\n.inputGroup label:after {\n      width: 32px;\n      height: 32px;\n      content: '';\n      border: 2px solid #D1D7DC;\n      background-color: transparent;\n      background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='transparent' fill-rule='nonzero'/%3E%3C/svg%3E \");\n      background-repeat: no-repeat;\n      background-position: 2px 3px;\n      border-radius: 50%;\n      z-index: 2;\n      position: absolute;\n      right: 30px;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      cursor: pointer;\n      transition: all 200ms ease-in; }\n\n.inputGroup input:checked ~ label {\n    color: #fff; }\n\n.inputGroup input:checked ~ label:before {\n      -webkit-transform: translate(-50%, -50%) scale3d(56, 56, 1);\n              transform: translate(-50%, -50%) scale3d(56, 56, 1);\n      opacity: 1 !important; }\n\n.inputGroup input:checked ~ label:after {\n      background-color: transparent !important;\n      border-color: white;\n      background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='white' fill-rule='nonzero'/%3E%3C/svg%3E \"); }\n\n.inputGroup input {\n    width: 0;\n    height: 0;\n    order: 1;\n    z-index: 2;\n    position: absolute;\n    right: 30px;\n    top: 50%;\n    background-color: transparent;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    cursor: pointer;\n    visibility: hidden !important; }\n\n.floatSoc {\n  position: absolute;\n  left: 1%;\n  z-index: 5000;\n  top: 40%; }\n\n.floatSoc img {\n  margin-bottom: 2%;\n  width: 10%;\n  height: auto;\n  /* Safari */\n  transition: width .5s; }\n\n.floatSoc img:hover {\n  width: 15%;\n  height: auto;\n  /* Safari */\n  transition: width .5s; }\n\n.nav-item:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n  color: white !important; }\n\n.activey {\n  color: white;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.nav-link:hover {\n  color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nL0M6XFxVc2Vyc1xcVGFsXFxEZXNrdG9wXFw0XFxmaXJlY2FwZS1tYXN0ZXJcXHBvcnRhbC9zcmNcXGFwcFxcbGFuZGluZ1xcbGFuZGluZ1xcY2FsYy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsdUJBQW1CO0tBQW5CLG9CQUFtQixFQUFHOztBQUMxQjtFQUNFLDZCQUFvQjtVQUFwQixxQkFBb0I7RUFDcEIsc0NBQTZCO1VBQTdCLDhCQUE2QjtFQUU3QixtQkFBa0IsRUFBRzs7QUFFdkI7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUVaO0lBQ0Usb0JBQW1CO0lBQ25CLFdBQVUsRUFBQSxFQUFBOztBQU5kO0VBQ0U7SUFDRSxXQUFVLEVBQUE7RUFFWjtJQUNFLG9CQUFtQjtJQUNuQixXQUFVLEVBQUEsRUFBQTs7QUFLZDtFQUNJLGFBQVksRUFBRzs7QUFDbkI7RUFDSSxhQUFZLEVBQUc7O0FBQ25CO0VBQ0ksYUFBWSxFQUFHOztBQUVuQjtFQUNJLHdCQUF1QixFQUFHOztBQUU5QjtFQUNJLDBCQUF5QixFQUFHOztBQUVoQztFQUNJLGtCQUFpQjtFQUNqQix3QkFBdUI7RUFDdkIsc0JBQXFCO0VBQ3JCLGVBQWM7RUFDZCxhQUFZLEVBQUc7O0FBR25CO0VBQ0ksZUFBYztFQUNkLFlBQVcsRUFFc0I7O0FBSnJDO0lBSVEseUJBQXdCLEVBQUc7O0FBRW5DO0VBQ0ksMkNBQXVDLEVBQUc7O0FBRzlDO0VBQ0ksYUFBWSxFQUFHOztBQUVuQjtFQUNJLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQUc7O0FBRXhCO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsZUFBYyxFQUFHOztBQUVyQjtFQUNJLGFBQVk7RUFDWixxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLGVBQWMsRUFBRzs7QUFFckI7RUFDSSxhQUFZO0VBQ1oscUJBQW9CO0VBQ3BCLG1CQUFrQjtFQUNsQixlQUFjLEVBQUc7O0FBRXJCO0VBQ0ksV0FBVTtFQUNWLHdCQUF1QixFQUFHOztBQUc5QjtFQUNFLHlCQUF3QjtFQUN4QixZQUFXO0VBQ1gsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsYUFBWSxFQUFHOztBQUdqQjtFQUNFLHlCQUF3QjtFQUN4QixpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGdCQUFlLEVBQUc7O0FBR3BCO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGdCQUFlLEVBQUc7O0FBRXBCO0VBQ0ksZUFBYyxFQUFHOztBQUdyQjtFQUNJLDhCQUE2QjtFQUM3QixlQUFjO0VBQ2QsZUFBYztFQUNkLG1CQUFrQixFQTRFa0I7O0FBaEZ4QztJQU9NLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsZUFBYztJQUNkLGlCQUFnQjtJQUNoQixhQUFZO0lBQ1osZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLGdDQUErQjtJQUMvQixpQkFBZ0IsRUFpQ29COztBQWpEMUM7TUFtQlEsWUFBVztNQUNYLGFBQVk7TUFDWixtQkFBa0I7TUFDbEIsWUFBVztNQUNYLDBCQUF5QjtNQUN6QixtQkFBa0I7TUFDbEIsVUFBUztNQUNULFNBQVE7TUFDUiwwREFBaUQ7Y0FBakQsa0RBQWlEO01BQ2pELG1EQUFvRDtNQUNwRCxzQkFBcUI7TUFDckIsWUFBVyxFQUFHOztBQTlCdEI7TUFrQ1EsWUFBVztNQUNYLGFBQVk7TUFDWixZQUFXO01BQ1gsMEJBQXlCO01BQ3pCLDhCQUE2QjtNQUM3QixrUUFBaVE7TUFDalEsNkJBQTRCO01BQzVCLDZCQUE0QjtNQUM1QixtQkFBa0I7TUFDbEIsV0FBVTtNQUNWLG1CQUFrQjtNQUNsQixZQUFXO01BQ1gsU0FBUTtNQUNSLG9DQUEyQjtjQUEzQiw0QkFBMkI7TUFDM0IsZ0JBQWU7TUFDZiw4QkFBNkIsRUFBRzs7QUFqRHhDO0lBc0RNLFlBQVcsRUFXdVA7O0FBakV4UTtNQXlEUSw0REFBbUQ7Y0FBbkQsb0RBQW1EO01BQ25ELHNCQUFxQixFQUFHOztBQTFEaEM7TUErRFEseUNBQXdDO01BQ3hDLG9CQUFtQjtNQUNuQiw0UEFBMlAsRUFBRzs7QUFqRXRRO0lBc0VNLFNBQVE7SUFDUixVQUFTO0lBQ1QsU0FBUTtJQUNSLFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsWUFBVztJQUNYLFNBQVE7SUFDUiw4QkFBNkI7SUFDN0Isb0NBQTJCO1lBQTNCLDRCQUEyQjtJQUMzQixnQkFBZTtJQUNmLDhCQUE2QixFQUFHOztBQUd0QztFQUNJLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsY0FBYTtFQUNiLFNBQVEsRUFBRzs7QUFFZjtFQUNJLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsYUFBWTtFQUNtQixZQUFZO0VBQzNDLHNCQUFxQixFQUFHOztBQUU1QjtFQUNJLFdBQVU7RUFDVixhQUFZO0VBQ21CLFlBQVk7RUFDM0Msc0JBQXFCLEVBQUc7O0FBRTVCO0VBQ0ksMkNBQXlDO0VBQ3pDLHdCQUF1QixFQUFHOztBQUU5QjtFQUNJLGFBQVk7RUFDWiwyQ0FBeUMsRUFBRzs7QUFFaEQ7RUFDSSx3QkFBdUIsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy9jYWxjLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvYmplY3QtZml0OiBjb250YWluOyB9XG4qIHtcbiAgYW5pbWF0aW9uOiAxcyBmYWRlSW47XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuXG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwOyB9XG5cbiAgMTAwJSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuXG5cblxuKiB7XG4gICAgY29sb3I6IHdoaXRlOyB9XG4ubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IHdoaXRlOyB9XG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUtdGV4dCB7XG4gICAgY29sb3I6IHdoaXRlOyB9XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxubmF2YmFyLmEge1xuICAgIGNvbG9yOiAjZjQ4MDQyICFpbXBvcnRhbnQ7IH1cblxuLmNvbnRlbnRDYWxjdWxhdG9yIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgd2lkdGg6IDQwMHB4OyB9XG5cblxuLmltYWdlcyB7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmltYWdlIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4OyB9IH1cblxuLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpOyB9XG5cblxuOjpuZy1kZWVwIC5tYXQtb3B0aW9uLXRleHQge1xuICAgIGNvbG9yOiBibGFjazsgfVxuXG4uYmFubmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cblxuLmltYWdlcyBpbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG5cbmgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IENvdXJpZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMlOyB9XG5cbmgyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IENvdXJpZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDElOyB9XG5cbmhyIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cblxuLnNsaWRlciB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG9wYWNpdHk6IDEuMDsgfVxuXG5cbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG5cbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4ubGV2ZWxzIHtcbiAgICBjb2xvcjogIzRDQUY1MDsgfVxuXG5cbi5pbnB1dEdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBsYWJlbCB7XG4gICAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSk7XG4gICAgICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogLTE7IH1cblxuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNEMUQ3REM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSczMicgaGVpZ2h0PSczMicgdmlld0JveD0nMCAwIDMyIDMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNNS40MTQgMTFMNCAxMi40MTRsNS40MTQgNS40MTRMMjAuODI4IDYuNDE0IDE5LjQxNCA1bC0xMCAxMHonIGZpbGw9J3RyYW5zcGFyZW50JyBmaWxsLXJ1bGU9J25vbnplcm8nLyUzRSUzQy9zdmclM0UgXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHggM3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47IH0gfVxuXG5cblxuICAgIGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XG4gICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZTNkKDU2LCA1NiwgMSk7XG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDsgfVxuXG5cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J001LjQxNCAxMUw0IDEyLjQxNGw1LjQxNCA1LjQxNEwyMC44MjggNi40MTQgMTkuNDE0IDVsLTEwIDEweicgZmlsbD0nd2hpdGUnIGZpbGwtcnVsZT0nbm9uemVybycvJTNFJTNDL3N2ZyUzRSBcIik7IH0gfVxuXG5cblxuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgb3JkZXI6IDE7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7IH0gfVxuXG5cbi5mbG9hdFNvYyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDElO1xuICAgIHotaW5kZXg6IDUwMDA7XG4gICAgdG9wOiA0MCU7IH1cblxuLmZsb2F0U29jIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAuNXM7IC8qIFNhZmFyaSAqLztcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXM7IH1cblxuLmZsb2F0U29jIGltZzpob3ZlciB7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAuNXM7IC8qIFNhZmFyaSAqLztcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXM7IH1cblxuLm5hdi1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxuXG4uYWN0aXZleSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpOyB9XG5cbi5uYXYtbGluazpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/landing/landing/calc.component.ts":
/*!***************************************************!*\
  !*** ./src/app/landing/landing/calc.component.ts ***!
  \***************************************************/
/*! exports provided: CalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcComponent", function() { return CalcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CalcComponent = /** @class */ (function () {
    function CalcComponent() {
        this.range = 50;
        this.hp = 50;
        this.def = 1;
        this.pray = false;
    }
    CalcComponent.prototype.ngOnInit = function () {
        document.getElementById('pricey').innerText = this.getPrice();
    };
    CalcComponent.prototype.updateRange = function (value) {
        this.range = value;
    };
    CalcComponent.prototype.updateHP = function (value) {
        this.hp = value;
    };
    CalcComponent.prototype.updateDef = function (value) {
        this.def = value;
    };
    CalcComponent.prototype.updatePray = function (value) {
        this.pray = value;
    };
    CalcComponent.prototype.getPrice = function () {
        if (!this.pray) {
            if (this.hp < 30) {
                if (this.range < 75) {
                    return "Please contact us for 10-30 HP with less than 75 range";
                }
                else if (this.range < 85) {
                    return "200M + 3000 Purple Sweets";
                }
                else if (this.range < 90) {
                    return "175M + 3000 Purple Sweets";
                }
                else if (this.range < 96) {
                    return "150M + 3000 Purple Sweets";
                }
                else {
                    return "130M + 3000 Purple Sweets";
                }
            }
            if (this.range < 60) {
                return "Please contact us for below 43 prayer with less than 60 range";
            }
            else if (this.range < 70) {
                return "180M + 3500 Purple Sweets";
            }
            else if (this.range < 75) {
                return "140M + 3000 Purple Sweets";
            }
            else if (this.range < 85) {
                return "95M + 2500 Purple Sweets";
            }
            else if (this.range < 90) {
                return "85M + 2500 Purple Sweets";
            }
            else if (this.range < 96) {
                return "75M + 2500 Purple Sweets";
            }
            else {
                return "65M + 2500 Purple Sweets";
            }
        }
        else {
            if (this.def < 45) {
                if (this.range < 61) {
                    return "35M";
                }
                else if (this.range < 70) {
                    return "25M";
                }
                else if (this.range < 75) {
                    return "20M";
                }
                else if (this.range < 85) {
                    return "15M";
                }
                else if (this.range < 90) {
                    return "10M";
                }
                else {
                    return "8.5M";
                }
            }
            else {
                if (this.range < 61) {
                    return "25M";
                }
                else if (this.range < 70) {
                    return "20M";
                }
                else if (this.range < 75) {
                    return "15M";
                }
                else if (this.range < 85) {
                    return "10M";
                }
                else if (this.range < 90) {
                    return "8.5M";
                }
                else {
                    return "6M";
                }
            }
        }
    };
    CalcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./calc.component.html */ "./src/app/landing/landing/calc.component.html"),
            styles: [__webpack_require__(/*! ./calc.component.sass */ "./src/app/landing/landing/calc.component.sass")]
        })
    ], CalcComponent);
    return CalcComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing/landing.component.html":
/*!********************************************************!*\
  !*** ./src/app/landing/landing/landing.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n<nav class=\"navbar navbar-expand-lg\">\n  <a style=\"margin-right: 2%;\" class=\"navbar-brand\"><img src=\"./assets/logos/firecape.png\" /></a>\n \n    \n    <ul class=\"navbar-nav mr-auto\">\n        <div style=\"display: flex\">\n       <li style=\"margin-right: 5%; line-height: 40px\" class=\"\">\n        <a class=\"nav-link activey\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n            \n      <li style=\"margin-right: 5%; line-height: 40px\" class=\"nav-item active\">\n        <a style=\"vertical-align: middle\" routerLink=\"pricing\" class=\"nav-link\">Prices</a>\n      </li>\n        <li style=\"margin-right: 5%; line-height: 40px\" class=\"nav-item active\">\n        <a style=\"vertical-align: middle\" href=\"https://www.holycherrys.com/\" class=\"nav-link\">Inferno</a>\n      </li>\n            </div>\n    </ul>\n        \n</nav>\n<div class=\"floatSoc\">\n<a href=\"skype:live:anteswede95/?add\"><img src=\"../../../assets/logos/skype.png\"></a>\n    <br>\n<a  href=\"https://discord.gg/aVTevWS\"><img src=\"../../../assets/logos/discord.png\"></a>\n    <br>\n    <a  href=\"https://www.sythe.org/threads/25-donor-1-anteswedes-1-31-prayer-firecape-service-firecapes-com-10hp-1-pray-free-jad/\"><img src=\"../../../assets/logos/sythe.png\"></a>\n    <br>\n    <a  href=\"https://www.youtube.com/channel/UCbj_N4YLUSRA5P1AH0gm0Bg\"><img src=\"../../../assets/logos/youtube.png\"></a>\n    <br>\n\n</div>\n<div class=\"container-fluid\">\n\n    <div style=\"display: flex;\n  justify-content: center;\n  align-items: center;\" class=\"banner\">\n      <img src=\"./assets/banner.gif\" />\n    </div>\n  \n    <div style=\"text-align: center\">\n    <a style=\"text-decoration: none\" routerLink=\"pricing\">\n<div class=\"priceButton\">\n    <h1>Prices</h1>\n</div>\n        \n        </a>\n        </div>\n<h1>Previous Work</h1>\n<hr>\n  <div style=\"text-align: center; width: 100%\" class=\"row\">\n    <div style=\"width: 100%\" class=\"images\">\n      <div style=\"width: 100%\" class=\"col\" *ngFor=\"let image of images\">\n        <img style=\"display: block; margin-right: auto; margin-left: auto;\" class=\"image\" src=\"{{image}}\" width=\"25%\" />\n      </div>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/landing/landing/landing.component.sass":
/*!********************************************************!*\
  !*** ./src/app/landing/landing/landing.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  -webkit-animation: 1s fadeIn;\n          animation: 1s fadeIn;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  visibility: hidden;\n  max-width: 100% !important; }\n\n.body {\n  width: 100%;\n  overflow-x: hidden;\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    visibility: visible;\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    visibility: visible;\n    opacity: 1; } }\n\n* {\n  color: white; }\n\n.mat-select-value {\n  color: white; }\n\n::ng-deep .mat-select-value-text {\n  color: white; }\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: white; }\n\nnavbar.a {\n  color: #f48042 !important; }\n\n.contentCalculator {\n  margin: 10px auto;\n  border: 1px solid white;\n  width: 400px; }\n\n.images {\n  margin-top: 2%;\n  width: 100%; }\n\n.images .image {\n    padding: 5px 5px 5px 5px; }\n\n.navbar {\n  background-color: rgba(255, 255, 255, 0.2); }\n\n::ng-deep .mat-option-text {\n  color: black; }\n\n.banner {\n  margin-top: 5%;\n  margin-right: auto !important;\n  margin-left: auto !important;\n  display: block; }\n\n.images img {\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n  display: block; }\n\nh1 {\n  color: white;\n  font-family: Courier;\n  text-align: center;\n  margin-top: 3%; }\n\nhr {\n  width: 50%;\n  background-color: white; }\n\n.priceButton {\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-block;\n  border: 1px solid white;\n  margin-top: 3%;\n  padding-left: 2%;\n  padding-right: 2%;\n  background-color: transparent;\n  transition: background-color .5s; }\n\n.priceButton:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n  transition: background-color .5s; }\n\n.floatSoc {\n  position: absolute;\n  left: 1%;\n  z-index: 5000;\n  top: 40%; }\n\n.floatSoc img {\n  margin-bottom: 2%;\n  width: 10%;\n  height: auto;\n  /* Safari */\n  transition: width .5s; }\n\n.floatSoc img:hover {\n  width: 15%;\n  height: auto;\n  /* Safari */\n  transition: width .5s; }\n\n.nav-item:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n  color: white !important; }\n\n.activey {\n  color: white;\n  background-color: rgba(255, 255, 255, 0.5); }\n\n.nav-link:hover {\n  color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nL0M6XFxVc2Vyc1xcVGFsXFxEZXNrdG9wXFw0XFxmaXJlY2FwZS1tYXN0ZXJcXHBvcnRhbC9zcmNcXGFwcFxcbGFuZGluZ1xcbGFuZGluZ1xcbGFuZGluZy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFvQjtVQUFwQixxQkFBb0I7RUFDcEIsc0NBQTZCO1VBQTdCLDhCQUE2QjtFQUM3QixtQkFBa0I7RUFDbEIsMkJBQTBCLEVBQUc7O0FBRS9CO0VBQ0ksWUFBVztFQUNYLG1CQUFrQjtFQUNsQix1QkFBbUI7S0FBbkIsb0JBQW1CLEVBQUc7O0FBSzFCO0VBQ0U7SUFDRSxXQUFVLEVBQUE7RUFFWjtJQUNFLG9CQUFtQjtJQUNuQixXQUFVLEVBQUEsRUFBQTs7QUFOZDtFQUNFO0lBQ0UsV0FBVSxFQUFBO0VBRVo7SUFDRSxvQkFBbUI7SUFDbkIsV0FBVSxFQUFBLEVBQUE7O0FBQ2Q7RUFDSSxhQUFZLEVBQUc7O0FBQ25CO0VBQ0ksYUFBWSxFQUFHOztBQUNuQjtFQUNJLGFBQVksRUFBRzs7QUFFbkI7RUFDSSx3QkFBdUIsRUFBRzs7QUFFOUI7RUFDSSwwQkFBeUIsRUFBRzs7QUFFaEM7RUFDSSxrQkFBaUI7RUFDakIsd0JBQXVCO0VBQ3ZCLGFBQVksRUFBRzs7QUFFbkI7RUFDSSxlQUFjO0VBQ2QsWUFBVyxFQUVzQjs7QUFKckM7SUFJUSx5QkFBd0IsRUFBRzs7QUFFbkM7RUFDSSwyQ0FBdUMsRUFBRzs7QUFHOUM7RUFDSSxhQUFZLEVBQUc7O0FBRW5CO0VBQ0ksZUFBYztFQUNkLDhCQUE2QjtFQUM3Qiw2QkFBNEI7RUFDNUIsZUFBYyxFQUFHOztBQUVyQjtFQUNJLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGVBQWMsRUFBRzs7QUFFckI7RUFDSSxhQUFZO0VBQ1oscUJBQW9CO0VBQ3BCLG1CQUFrQjtFQUNsQixlQUFjLEVBQUc7O0FBRXJCO0VBQ0ksV0FBVTtFQUNWLHdCQUF1QixFQUFHOztBQUU5QjtFQUNJLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLHdCQUF1QjtFQUN2QixlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQiw4QkFBNkI7RUFFN0IsaUNBQWdDLEVBQUc7O0FBRXZDO0VBQ0ksMkNBQXlDO0VBRXpDLGlDQUFnQyxFQUFHOztBQUV2QztFQUNJLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsY0FBYTtFQUNiLFNBQVEsRUFBRzs7QUFFZjtFQUNJLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsYUFBWTtFQUNtQixZQUFZO0VBQzNDLHNCQUFxQixFQUFHOztBQUU1QjtFQUNJLFdBQVU7RUFDVixhQUFZO0VBQ21CLFlBQVk7RUFDM0Msc0JBQXFCLEVBQUc7O0FBRTVCO0VBQ0ksMkNBQXlDO0VBQ3pDLHdCQUF1QixFQUFHOztBQUU5QjtFQUNJLGFBQVk7RUFDWiwyQ0FBeUMsRUFBRzs7QUFFaEQ7RUFDSSx3QkFBdUIsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGFuaW1hdGlvbjogMXMgZmFkZUluO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxuXG4uYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47IH1cblxuaW1nIHt9XG5cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDsgfVxuXG4gIDEwMCUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTsgfSB9XG4qIHtcbiAgICBjb2xvcjogd2hpdGU7IH1cbi5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogd2hpdGU7IH1cbjo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZS10ZXh0IHtcbiAgICBjb2xvcjogd2hpdGU7IH1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG5uYXZiYXIuYSB7XG4gICAgY29sb3I6ICNmNDgwNDIgIWltcG9ydGFudDsgfVxuXG4uY29udGVudENhbGN1bGF0b3Ige1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHdpZHRoOiA0MDBweDsgfVxuXG4uaW1hZ2VzIHtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuaW1hZ2Uge1xuICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7IH0gfVxuXG4ubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7IH1cblxuXG46Om5nLWRlZXAgLm1hdC1vcHRpb24tdGV4dCB7XG4gICAgY29sb3I6IGJsYWNrOyB9XG5cbi5iYW5uZXIge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cblxuLmltYWdlcyBpbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG5cbmgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IENvdXJpZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMlOyB9XG5cbmhyIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cbi5wcmljZUJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXM7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXM7IH1cblxuLnByaWNlQnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzOyB9XG5cbi5mbG9hdFNvYyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDElO1xuICAgIHotaW5kZXg6IDUwMDA7XG4gICAgdG9wOiA0MCU7IH1cblxuLmZsb2F0U29jIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAuNXM7IC8qIFNhZmFyaSAqLztcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXM7IH1cblxuLmZsb2F0U29jIGltZzpob3ZlciB7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAuNXM7IC8qIFNhZmFyaSAqLztcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXM7IH1cblxuLm5hdi1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxuXG4uYWN0aXZleSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpOyB9XG5cbi5uYXYtbGluazpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/landing/landing/landing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/landing/landing/landing.component.ts ***!
  \******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_lazy_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/lazy-service.service */ "./src/app/shared/lazy-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent(lazyService) {
        this.lazyService = lazyService;
        this.selected = 0;
        this.choices = [];
        this.images = [];
        this.rangeLevel = 61;
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lazyService.requestGet('https://raw.githubusercontent.com/toolazytobetrue/firecape/master/config.json', { responseType: 'text' })
            .subscribe(function (response) {
            var data = JSON.parse(response);
            console.log(data);
            _this.choices = data.prices;
            _this.images = data.images;
            _this.price = _this.choices[_this.selected].price;
            _this.sweets = _this.choices[_this.selected].sweets;
        }, function (err) {
            console.log(err);
        });
    };
    LandingComponent.prototype.changePrice = function () {
        this.price = this.choices[this.selected].price;
        this.sweets = this.choices[this.selected].sweets;
    };
    LandingComponent.prototype.update = function (level) {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.sass */ "./src/app/landing/landing/landing.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_shared_lazy_service_service__WEBPACK_IMPORTED_MODULE_1__["LazyService"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~landing-calc-module~landing-landing-module.js.map