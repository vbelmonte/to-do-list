/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/media-queries.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/media-queries.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (max-width: 784px) {\r\n\r\n    /** MAIN CONTAINER PROPERTIES **/\r\n    main {\r\n        margin-left: 5rem;\r\n    }\r\n\r\n\r\n\r\n    /** NAVIGATION PROPERTIES **/\r\n    #side-column {\r\n        display: flex;\r\n        gap: 2rem;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    #side-column .nav-content {\r\n        display: none;\r\n        flex: 1;\r\n    }\r\n\r\n    #side-column .nav-content.visible {\r\n        display: flex;\r\n    }\r\n\r\n    #side-column.full-width {\r\n        width: 100%;\r\n    }\r\n\r\n    #side-column .hamburger-menu {\r\n        display: block;\r\n    }\r\n\r\n\r\n\r\n    /** ADD TASK/PROJECT FORM PROPERTIES **/\r\n    form div.bottom {\r\n        flex-direction: column;\r\n    }\r\n\r\n\r\n\r\n    /** TASK MODULE PROPERTIES **/\r\n    .task .icons .mobile {\r\n        display: block;\r\n    }\r\n\r\n    .task .icons .desktop {\r\n        display: none;\r\n    }\r\n\r\n    .task .priority {\r\n        display: none;\r\n    }\r\n\r\n    .task .task-top-row {\r\n        gap: 0.5rem;\r\n    }\r\n\r\n    .task .top-row-right {\r\n        gap: 1rem;\r\n    }\r\n\r\n    .task .task-bottom-row {\r\n        margin-left: 1.5rem;\r\n    }\r\n\r\n\r\n\r\n    /** TASK LIST PROPERTIES **/\r\n    #empty-list img {\r\n        height: 20rem;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 425px) {\r\n    \r\n    /** GENERAL PROPERTIES **/\r\n    \r\n    main {\r\n        margin-left: auto;\r\n    }\r\n\r\n    #main-content {\r\n        padding: 2rem 1rem 10rem 1rem;\r\n    }\r\n\r\n\r\n\r\n    /** HEADER PROPERTIES **/\r\n    header.mobile {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n    }\r\n\r\n    header .logo {\r\n        height: 3rem;\r\n    }\r\n\r\n    header .nav-icon {\r\n        fill: var(--gray);\r\n        width: 1.5rem;\r\n    }\r\n\r\n\r\n    \r\n    /** NAVIGATION PROPERTIES **/\r\n    #side-column {\r\n        display: none;\r\n    }\r\n\r\n    nav.mobile {\r\n        display: block;\r\n        position: fixed;\r\n        bottom: 0;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n        padding: 1rem;\r\n\r\n        color: var(--gray);\r\n        background-color: var(--black);\r\n    }\r\n\r\n    nav.mobile {\r\n        box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n    nav.mobile ul {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    nav.mobile li.link {\r\n        position: relative;\r\n        padding: 0.25rem;\r\n    }\r\n\r\n    nav.mobile li .nav-link {\r\n        flex-direction: column;\r\n        gap: 0.25rem;\r\n    }\r\n\r\n    nav.mobile h6 {\r\n        font-size: 0.75rem;\r\n    }\r\n\r\n    nav.mobile .notification {\r\n        position: absolute;\r\n        top: -0.5rem;\r\n        right: -0.5rem;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/media-queries.css"],"names":[],"mappings":"AAAA;;IAEI,gCAAgC;IAChC;QACI,iBAAiB;IACrB;;;;IAIA,4BAA4B;IAC5B;QACI,aAAa;QACb,SAAS;QACT,8BAA8B;IAClC;;IAEA;QACI,aAAa;QACb,OAAO;IACX;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,cAAc;IAClB;;;;IAIA,uCAAuC;IACvC;QACI,sBAAsB;IAC1B;;;;IAIA,6BAA6B;IAC7B;QACI,cAAc;IAClB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,SAAS;IACb;;IAEA;QACI,mBAAmB;IACvB;;;;IAIA,2BAA2B;IAC3B;QACI,aAAa;IACjB;AACJ;;;;AAIA;;IAEI,yBAAyB;;IAEzB;QACI,iBAAiB;IACrB;;IAEA;QACI,6BAA6B;IACjC;;;;IAIA,wBAAwB;IACxB;QACI,aAAa;QACb,8BAA8B;QAC9B,mBAAmB;IACvB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,iBAAiB;QACjB,aAAa;IACjB;;;;IAIA,4BAA4B;IAC5B;QACI,aAAa;IACjB;;IAEA;QACI,cAAc;QACd,eAAe;QACf,SAAS;QACT,WAAW;QACX,sBAAsB;QACtB,aAAa;;QAEb,kBAAkB;QAClB,8BAA8B;IAClC;;IAEA;QACI,4CAA4C;IAChD;;IAEA;QACI,aAAa;QACb,8BAA8B;IAClC;;IAEA;QACI,kBAAkB;QAClB,gBAAgB;IACpB;;IAEA;QACI,sBAAsB;QACtB,YAAY;IAChB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;QAClB,YAAY;QACZ,cAAc;IAClB;AACJ","sourcesContent":["@media screen and (max-width: 784px) {\r\n\r\n    /** MAIN CONTAINER PROPERTIES **/\r\n    main {\r\n        margin-left: 5rem;\r\n    }\r\n\r\n\r\n\r\n    /** NAVIGATION PROPERTIES **/\r\n    #side-column {\r\n        display: flex;\r\n        gap: 2rem;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    #side-column .nav-content {\r\n        display: none;\r\n        flex: 1;\r\n    }\r\n\r\n    #side-column .nav-content.visible {\r\n        display: flex;\r\n    }\r\n\r\n    #side-column.full-width {\r\n        width: 100%;\r\n    }\r\n\r\n    #side-column .hamburger-menu {\r\n        display: block;\r\n    }\r\n\r\n\r\n\r\n    /** ADD TASK/PROJECT FORM PROPERTIES **/\r\n    form div.bottom {\r\n        flex-direction: column;\r\n    }\r\n\r\n\r\n\r\n    /** TASK MODULE PROPERTIES **/\r\n    .task .icons .mobile {\r\n        display: block;\r\n    }\r\n\r\n    .task .icons .desktop {\r\n        display: none;\r\n    }\r\n\r\n    .task .priority {\r\n        display: none;\r\n    }\r\n\r\n    .task .task-top-row {\r\n        gap: 0.5rem;\r\n    }\r\n\r\n    .task .top-row-right {\r\n        gap: 1rem;\r\n    }\r\n\r\n    .task .task-bottom-row {\r\n        margin-left: 1.5rem;\r\n    }\r\n\r\n\r\n\r\n    /** TASK LIST PROPERTIES **/\r\n    #empty-list img {\r\n        height: 20rem;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 425px) {\r\n    \r\n    /** GENERAL PROPERTIES **/\r\n    \r\n    main {\r\n        margin-left: auto;\r\n    }\r\n\r\n    #main-content {\r\n        padding: 2rem 1rem 10rem 1rem;\r\n    }\r\n\r\n\r\n\r\n    /** HEADER PROPERTIES **/\r\n    header.mobile {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n    }\r\n\r\n    header .logo {\r\n        height: 3rem;\r\n    }\r\n\r\n    header .nav-icon {\r\n        fill: var(--gray);\r\n        width: 1.5rem;\r\n    }\r\n\r\n\r\n    \r\n    /** NAVIGATION PROPERTIES **/\r\n    #side-column {\r\n        display: none;\r\n    }\r\n\r\n    nav.mobile {\r\n        display: block;\r\n        position: fixed;\r\n        bottom: 0;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n        padding: 1rem;\r\n\r\n        color: var(--gray);\r\n        background-color: var(--black);\r\n    }\r\n\r\n    nav.mobile {\r\n        box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n    nav.mobile ul {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    nav.mobile li.link {\r\n        position: relative;\r\n        padding: 0.25rem;\r\n    }\r\n\r\n    nav.mobile li .nav-link {\r\n        flex-direction: column;\r\n        gap: 0.25rem;\r\n    }\r\n\r\n    nav.mobile h6 {\r\n        font-size: 0.75rem;\r\n    }\r\n\r\n    nav.mobile .notification {\r\n        position: absolute;\r\n        top: -0.5rem;\r\n        right: -0.5rem;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Inter-Regular.ttf */ "./src/assets/fonts/Inter-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Inter-Medium.ttf */ "./src/assets/fonts/Inter-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Inter-SemiBold.ttf */ "./src/assets/fonts/Inter-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Inter-Bold.ttf */ "./src/assets/fonts/Inter-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Inter-ExtraBold.ttf */ "./src/assets/fonts/Inter-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Inter-Black.ttf */ "./src/assets/fonts/Inter-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\n:root {\r\n    --black: #222222;\r\n    --shadow-black: #0C0C0C;\r\n    --modal-black: rgba(0,0,0,0.4);\r\n    --white: #F2F2F2;\r\n    --ultra-white: #FFFFFF;\r\n    --titanium: #EBEBEB;\r\n    --gray: #7D7D7D;\r\n    --mid-gray: #BDBDBD;\r\n    --lightest-gray: #EBEBEB;\r\n    --blue: #0062F4;\r\n    --dark-blue: #004ec4;\r\n    --dodger-blue: #379FFF;\r\n    --cornflower-blue: #579AFF;\r\n    --uranian-blue: #BDDFFF;\r\n    --light-blue: #D0E0EF;\r\n    --green: #72B01D;\r\n    --red: #D62828;\r\n    --orange: #F77F00;\r\n    --dark-orange: #DA7000;\r\n    --light-green: #DFECD4;\r\n    --light-orange: #FFDCB8;\r\n    --light-red: #FFDDDD;\r\n    --task-icon-blue: #7B98B2;\r\n    --task-icon-orange: #C09365;\r\n    --task-icon-red: #D38989;\r\n    --task-icon-green: #99A98C;\r\n\r\n    --filter-white: invert(99%) sepia(13%) saturate(137%) hue-rotate(208deg) brightness(111%) contrast(90%);\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inter Regular';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inter Medium';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inter Semibold';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inter Bold';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inter Extra Bold';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inter Black';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('truetype');\r\n}\r\n\r\nbody {\r\n    font-family: 'Inter Regular', 'Arial', sans-serif;\r\n    font-size: 16px;\r\n    color: var(--black);\r\n    background-color: var(--white);\r\n\r\n    min-height: 100vh;\r\n}\r\n\r\n#container {\r\n    /** ATTEMPTING A FIXED SIDE COLUMN **/\r\n    /*display: grid;\r\n    grid-template-columns: 20rem 1fr;\r\n    height: 100%;*/\r\n    min-height: 100vh;\r\n}\r\n\r\n\r\n\r\n/** GENERAL TEXT PROPERTIES **/\r\n\r\na {\r\n    color: var(--blue);\r\n    text-decoration: none;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Inter Black';\r\n    font-size: 3rem;\r\n}\r\n\r\nh2 {\r\n  font-family: 'Inter Regular';\r\n  font-size: 1rem;\r\n  line-height: 2rem;\r\n}\r\n\r\nh3 {\r\n    font-family: 'Inter Bold';\r\n    line-height: 1.5rem;\r\n}\r\n\r\nh4 {\r\n    font-family: 'Inter Extra Bold';\r\n    font-size: 1rem;\r\n}\r\n\r\nh5 {\r\n    font-family: 'Inter Medium';\r\n    font-size: 0.75rem;\r\n}\r\n\r\nh6 {\r\n    font-family: 'Inter Semibold';\r\n    font-size: 1rem;\r\n}\r\n\r\np {\r\n    line-height: 2rem;\r\n}\r\n\r\n.uppercase {\r\n    text-transform: uppercase;\r\n}\r\n\r\nh5.counter {\r\n  font-size: 0.625rem;\r\n}\r\n\r\n\r\n\r\n/** BUTTON PROPERTIES **/\r\n\r\nbutton, .button {\r\n    border-style: none;\r\n    border-radius: 0.25rem;\r\n    padding: 1rem;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n    text-transform: uppercase;\r\n\r\n    transition: 0.1s linear;\r\n    transition-property: background-color, border, color;\r\n}\r\n\r\n.btn-solid {\r\n    background-color: var(--blue);\r\n    color: var(--white);\r\n}\r\n\r\n.btn-solid:hover {\r\n    background-color: var(--dark-blue);\r\n}\r\n\r\n.btn-outline {\r\n    background-color: transparent;\r\n    color: var(--blue);\r\n\r\n    border:1px solid var(--blue);\r\n    border-width: 0.0625rem;\r\n}\r\n\r\n.btn-outline:hover {\r\n    border: 1px solid var(--dark-blue);\r\n    color: var(--dark-blue);\r\n}\r\n\r\n.btn-orange-outline {\r\n  background-color: transparent;\r\n  color: var(--orange);\r\n\r\n  border: 1px solid var(--orange);\r\n  border-width: 0.0625rem;\r\n}\r\n\r\n.btn-orange-outline:hover {\r\n  border: 1px solid var(--dark-orange);\r\n  color: var(--dark-orange);\r\n}\r\n\r\n.btn-orange {\r\n  background-color: var(--orange);\r\n  color: var(--white);\r\n}\r\n\r\n.btn-orange:hover {\r\n  background-color: var(--dark-orange);\r\n}\r\n\r\n.btn-plus {\r\n    padding: 1rem;\r\n    width: 100%;\r\n}\r\n\r\nbutton img {\r\n    filter: var(--filter-white);\r\n    width: 0.75rem;\r\n}\r\n\r\n\r\n\r\n/** CATEGORY PROPERTIES **/\r\n.category {\r\n  border-radius: 2rem;\r\n  padding: 0.5rem 0.75rem;\r\n  color: var(--gray);\r\n  transition: color 0.1s linear;\r\n}\r\n\r\n.category h3 {\r\n  font-family: 'Inter Medium';\r\n  line-height: 1rem;\r\n}\r\n\r\n.category:hover {\r\n  color: var(--blue);\r\n  cursor: default;\r\n}\r\n\r\n.category.active {\r\n  background-color: var(--blue);\r\n  color: var(--white);\r\n  transition: background-color 0.1s linear;\r\n}\r\n\r\n.category.active:hover {\r\n  color: var(--white);\r\n  cursor: default;\r\n}\r\n\r\n.categories {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n\r\n\r\n/** INPUT FORM PROPERTIES **/\r\n\r\ninput[type=text], select, input[type=date], textarea {\r\n    border: 1px solid var(--gray);\r\n    border-radius: 0.25rem;\r\n    padding: 0.5rem;\r\n\r\n    font-family: 'Inter Regular';\r\n    font-size: 16px;\r\n\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\ninput[type=date], select {\r\n    padding: 7px 0.5rem 7px 0.5rem;\r\n}\r\n\r\ninput[type=date]:invalid {\r\n    color: var(--gray);\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  line-height: 1.5rem;\r\n  height: 5.75rem;\r\n}\r\n\r\nlabel {\r\n    font-family: 'Inter Medium';\r\n    font-size: 0.75rem;\r\n    text-transform: uppercase;\r\n    color: var(--gray);\r\n\r\n    /*display: block;*/\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 0.25rem;\r\n}\r\n\r\n.required:after {\r\n    content: '*';\r\n    color: red;\r\n}\r\n\r\n.form {\r\n    background-color: var(--lightest-gray);\r\n    border-radius: 0.25rem;\r\n    padding: 2rem;\r\n}\r\n  \r\n  form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n  \r\n  .inputs, .buttons {\r\n    display: flex;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .inputs {\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .buttons button, .buttons .button {\r\n    flex: 1;\r\n  }\r\n  \r\n  form .bottom {\r\n    display: flex;\r\n    gap: 1rem;\r\n  }\r\n\r\n  form .bottom div {\r\n    flex: 1;\r\n  }\r\n\r\n\r\n\r\n/** MAIN CONTAINER PROPERTIES **/\r\n\r\nmain {\r\n    background-color: var(--white);\r\n    min-height: 100vh;\r\n    position: relative;\r\n\r\n    /** ATTEMPTING A FIXED SIDE COLUMN **/\r\n    margin-left: 20rem;\r\n}\r\n\r\n#main-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n\r\n    max-width: 50rem;\r\n    min-height: calc(100vh - 140px);\r\n    padding: 2rem;\r\n}\r\n\r\n\r\n\r\n/** INDIVIDUAL PAGE PROPERTIES **/\r\n\r\n.title-description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n\r\n\r\n/** EMPTY TASKS PROPERTIES **/\r\n\r\n#empty-list img {\r\n    height: 25rem;\r\n}\r\n\r\n#empty-list {\r\n    text-align: center;\r\n}\r\n\r\n\r\n/** HEADER PROPERTIES **/\r\nheader {\r\n  background-color: var(--black);\r\n  padding: 0.5rem 1rem;\r\n\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n/** FOOTER PROPERTIES **/\r\n\r\nfooter {\r\n    background-color: var(--gray);\r\n    color: var(--white);\r\n    padding: 1rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n\r\n    /** HIDE FOOTER FOR NOW **/\r\n    display: none;\r\n}\r\n\r\nfooter p {\r\n    font-family:'Inter Medium';\r\n    font-size: 0.75rem;\r\n}\r\n\r\n.footer-icon {\r\n    filter: invert(99%) sepia(13%) saturate(137%) hue-rotate(208deg) brightness(111%) contrast(90%);\r\n    width: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/** SIDE COLUMN PROPERTIES **/\r\n\r\n#side-column {\r\n    background-color: var(--black);\r\n    color: var(--gray);\r\n    padding: 2rem;\r\n\r\n    /** ATTEMPT A FIXED SIDE COLUMN **/\r\n    position: fixed;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n#side-column .nav-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 3rem;\r\n  height: 100%;\r\n  width: 16rem;\r\n}\r\n\r\n#side-column .hamburger-menu {\r\n  display: none;\r\n  height: fit-content;\r\n}\r\n\r\n#side-column svg.nav-menu {\r\n  width: 1rem;\r\n  fill: var(--white);\r\n  transition: fill 0.1s linear;\r\n}\r\n\r\n#side-column .logo {\r\n    width: 10rem;\r\n}\r\n\r\n#side-column .logo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#side-column .nav-content nav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 100%;\r\n}\r\n\r\n#side-column nav div.top {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\n#side-column nav ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n#side-column nav li {\r\n    padding: 0.5rem;\r\n}\r\n\r\n#side-column .projects-link {\r\n  display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n\r\n#side-column #projects {\r\n    flex: 1;\r\n}\r\n\r\n#side-column #projects-list {\r\n    margin-left: 2rem;\r\n}\r\n\r\n#side-column #projects-chevron {\r\n  transition: fill 0.1s linear;\r\n}\r\n\r\n#side-column #projects-chevron:hover {\r\n  fill: var(--mid-gray);\r\n}\r\n\r\n.nav-icon {\r\n    width: 1rem;\r\n    height: 1rem;\r\n}\r\n\r\n.nav-link {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    flex: 1;\r\n\r\n    transition: color 0.1s linear;\r\n}\r\n\r\n.nav-link:hover {\r\n    color: var(--mid-gray);\r\n    cursor: default;\r\n}\r\n\r\n.nav-link.active {\r\n    color: var(--white);\r\n}\r\n\r\n.link {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n\r\n\r\n/** PAGE TEMPLATE PROPERTIES **/\r\n\r\n.module-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\n.task-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n\r\n    /*margin-left: 2rem;*/\r\n}\r\n\r\n.task-list {\r\n   display: flex;\r\n   flex-direction: column;\r\n   gap: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n/** TASK MODULE PROPERTIES **/\r\n\r\n.task, .task-info {\r\n    display: flex;\r\n    gap: 1rem;\r\n  }\r\n  \r\n  .task-info {\r\n    flex-direction: column;\r\n    flex: 1;\r\n  }\r\n  \r\n  .task {\r\n    border-radius: 0.25rem;\r\n    padding: 1rem;\r\n\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .task-name {\r\n    flex: 1;\r\n  }\r\n\r\n  .priority-due-date {\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-items: center;\r\n  }\r\n  \r\n  .task-name {\r\n    flex: 1;\r\n  }\r\n  \r\n  .low-p {\r\n    background-color: var(--light-blue);\r\n  }\r\n\r\n  .med-p {\r\n    background-color: var(--light-orange);\r\n  }\r\n\r\n  .high-p {\r\n    background-color: var(--light-red);\r\n  }\r\n\r\n  .low-p-project {\r\n    border: 0.0625rem solid var(--light-blue);\r\n  }\r\n\r\n  .med-p-project {\r\n    border: 0.0625rem solid var(--orange);\r\n  }\r\n\r\n  .high-p-project {\r\n    border: 0.0625rem solid var(--red);\r\n  }\r\n\r\n  .task-blue {\r\n    filter: invert(60%) sepia(29%) saturate(357%) hue-rotate(167deg) brightness(93%) contrast(86%);\r\n  }\r\n\r\n  .task-blue:hover {\r\n    filter: invert(53%) sepia(17%) saturate(846%) hue-rotate(167deg) brightness(90%) contrast(86%);\r\n  }\r\n\r\n  .task-orange {\r\n    filter: invert(59%) sepia(47%) saturate(345%) hue-rotate(349deg) brightness(94%) contrast(92%);\r\n  }\r\n\r\n  .task-orange:hover {\r\n    filter: invert(50%) sepia(42%) saturate(465%) hue-rotate(349deg) brightness(100%) contrast(89%);\r\n  }\r\n\r\n  .task-red {\r\n    filter: invert(59%) sepia(10%) saturate(1620%) hue-rotate(314deg) brightness(108%) contrast(75%);\r\n  }\r\n\r\n  .task-red:hover {\r\n    filter: invert(47%) sepia(12%) saturate(1858%) hue-rotate(314deg) brightness(99%) contrast(75%);\r\n  }\r\n\r\n  .edit-icon {\r\n    height: 1rem;\r\n  }\r\n\r\n  .task .icons .mobile {\r\n    display: none;\r\n  }\r\n\r\n  .task-top-row {\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-items: center;\r\n  }\r\n\r\n  .top-row-right {\r\n    display: flex;\r\n    gap: 2rem;\r\n    flex: 1;\r\n    align-items: center;\r\n  }\r\n\r\n  .task-bottom-row {\r\n    display: none;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    margin-left: 2.25rem;\r\n  }\r\n\r\n  .task-icon {\r\n    height: 1rem;\r\n    transition: filter 0.1s linear;\r\n  }\r\n\r\n  .icons {\r\n    display: flex;\r\n    gap: 1rem;\r\n  }\r\n\r\n  p.date {\r\n    font-size: 0.75rem;\r\n  }\r\n\r\n\r\n\r\n  /** CHECKBOX PROPERTIES **/\r\n\r\n  .round {\r\n    position: relative;\r\n  }\r\n  \r\n  .round label {\r\n    background-color: var(--ultra-white);\r\n    border: 1px solid var(--gray);\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    height: 1rem;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 1rem;\r\n  }\r\n  \r\n  .round label:after {\r\n    border: 2px solid var(--white);\r\n    border-top: none;\r\n    border-right: none;\r\n    content: \"\";\r\n    height: 3px;\r\n    left: 4px;\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 5px;\r\n    transform: rotate(-45deg);\r\n    width: 7px;\r\n  }\r\n  \r\n  .round input[type=\"checkbox\"] {\r\n    visibility: hidden;\r\n  }\r\n  \r\n  .round input[type=\"checkbox\"]:checked + label {\r\n    background-color: var(--green);\r\n    border-color: var(--green);\r\n  }\r\n  \r\n  .round input[type=\"checkbox\"]:checked + label:after {\r\n    opacity: 1;\r\n  }\r\n\r\n\r\n\r\n/** NOTIFICATION PROPERTIES **/\r\n\r\n.notification {\r\n  border-radius: 2rem;\r\n  padding: 0.25rem 0.5rem;\r\n  background-color: var(--shadow-black);\r\n  color: var(--white);\r\n}\r\n\r\n.urgent {\r\n  background-color: red;\r\n}\r\n\r\n\r\n\r\n/** EDIT MODAL PROPERTIES **/\r\n.modal {\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: var(--black); /* Fallback color */\r\n  background-color: var(--modal-black);\r\n}\r\n\r\n.modal-form {\r\n  background-color: var(--lightest-gray);\r\n  border-radius: 0.25rem;\r\n  padding: 2rem;\r\n  flex-basis: 20rem;\r\n  margin: 1rem;\r\n}\r\n\r\n.modal-form .bottom {\r\n  flex-direction: column;\r\n}\r\n\r\n.modal-form fieldset {\r\n display: flex;\r\n flex-direction: column;\r\n gap: 2rem;\r\n}\r\n\r\n.modal-form legend {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.modal-form h3 {\r\n  font-size: 1.5rem;\r\n  color: var(--blue)\r\n}\r\n\r\n\r\n\r\n\r\n/** WARNING MODAL PROPERTIES **/\r\nimg.warning {\r\n  height: 2rem;\r\n  filter: invert(59%) sepia(22%) saturate(6223%) hue-rotate(1deg) brightness(95%) contrast(106%);\r\n}\r\n\r\n.warning-modal {\r\n  background-color: var(--lightest-gray);\r\n  border-radius: 0.25rem;\r\n  padding: 2rem;\r\n  flex-basis: 37rem;\r\n  margin: 1rem;\r\n}\r\n\r\n.warning-modal form {\r\n  gap: 2rem;\r\n}\r\n\r\n.warning-modal h5 {\r\n  font-size: 1.5rem;\r\n  color: var(--black);\r\n}\r\n\r\n.warning-modal .flex {\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: center;\r\n}\r\n\r\n.warning-modal b {\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n/** MOBILE STYLES **/\r\n\r\n/* NAVIGATION */\r\nnav.mobile {\r\n  display: none;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\n:root {\r\n    --black: #222222;\r\n    --shadow-black: #0C0C0C;\r\n    --modal-black: rgba(0,0,0,0.4);\r\n    --white: #F2F2F2;\r\n    --ultra-white: #FFFFFF;\r\n    --titanium: #EBEBEB;\r\n    --gray: #7D7D7D;\r\n    --mid-gray: #BDBDBD;\r\n    --lightest-gray: #EBEBEB;\r\n    --blue: #0062F4;\r\n    --dark-blue: #004ec4;\r\n    --dodger-blue: #379FFF;\r\n    --cornflower-blue: #579AFF;\r\n    --uranian-blue: #BDDFFF;\r\n    --light-blue: #D0E0EF;\r\n    --green: #72B01D;\r\n    --red: #D62828;\r\n    --orange: #F77F00;\r\n    --dark-orange: #DA7000;\r\n    --light-green: #DFECD4;\r\n    --light-orange: #FFDCB8;\r\n    --light-red: #FFDDDD;\r\n    --task-icon-blue: #7B98B2;\r\n    --task-icon-orange: #C09365;\r\n    --task-icon-red: #D38989;\r\n    --task-icon-green: #99A98C;\r\n\r\n    --filter-white: invert(99%) sepia(13%) saturate(137%) hue-rotate(208deg) brightness(111%) contrast(90%);\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inter Regular';\r\n    src: url('./assets/fonts/Inter-Regular.ttf') format('truetype');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inter Medium';\r\n    src: url('./assets/fonts/Inter-Medium.ttf') format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inter Semibold';\r\n    src: url('./assets/fonts/Inter-SemiBold.ttf') format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inter Bold';\r\n    src: url('./assets/fonts/Inter-Bold.ttf') format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inter Extra Bold';\r\n    src: url('./assets/fonts/Inter-ExtraBold.ttf') format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inter Black';\r\n    src: url('./assets/fonts/Inter-Black.ttf') format('truetype');\r\n}\r\n\r\nbody {\r\n    font-family: 'Inter Regular', 'Arial', sans-serif;\r\n    font-size: 16px;\r\n    color: var(--black);\r\n    background-color: var(--white);\r\n\r\n    min-height: 100vh;\r\n}\r\n\r\n#container {\r\n    /** ATTEMPTING A FIXED SIDE COLUMN **/\r\n    /*display: grid;\r\n    grid-template-columns: 20rem 1fr;\r\n    height: 100%;*/\r\n    min-height: 100vh;\r\n}\r\n\r\n\r\n\r\n/** GENERAL TEXT PROPERTIES **/\r\n\r\na {\r\n    color: var(--blue);\r\n    text-decoration: none;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Inter Black';\r\n    font-size: 3rem;\r\n}\r\n\r\nh2 {\r\n  font-family: 'Inter Regular';\r\n  font-size: 1rem;\r\n  line-height: 2rem;\r\n}\r\n\r\nh3 {\r\n    font-family: 'Inter Bold';\r\n    line-height: 1.5rem;\r\n}\r\n\r\nh4 {\r\n    font-family: 'Inter Extra Bold';\r\n    font-size: 1rem;\r\n}\r\n\r\nh5 {\r\n    font-family: 'Inter Medium';\r\n    font-size: 0.75rem;\r\n}\r\n\r\nh6 {\r\n    font-family: 'Inter Semibold';\r\n    font-size: 1rem;\r\n}\r\n\r\np {\r\n    line-height: 2rem;\r\n}\r\n\r\n.uppercase {\r\n    text-transform: uppercase;\r\n}\r\n\r\nh5.counter {\r\n  font-size: 0.625rem;\r\n}\r\n\r\n\r\n\r\n/** BUTTON PROPERTIES **/\r\n\r\nbutton, .button {\r\n    border-style: none;\r\n    border-radius: 0.25rem;\r\n    padding: 1rem;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n    text-transform: uppercase;\r\n\r\n    transition: 0.1s linear;\r\n    transition-property: background-color, border, color;\r\n}\r\n\r\n.btn-solid {\r\n    background-color: var(--blue);\r\n    color: var(--white);\r\n}\r\n\r\n.btn-solid:hover {\r\n    background-color: var(--dark-blue);\r\n}\r\n\r\n.btn-outline {\r\n    background-color: transparent;\r\n    color: var(--blue);\r\n\r\n    border:1px solid var(--blue);\r\n    border-width: 0.0625rem;\r\n}\r\n\r\n.btn-outline:hover {\r\n    border: 1px solid var(--dark-blue);\r\n    color: var(--dark-blue);\r\n}\r\n\r\n.btn-orange-outline {\r\n  background-color: transparent;\r\n  color: var(--orange);\r\n\r\n  border: 1px solid var(--orange);\r\n  border-width: 0.0625rem;\r\n}\r\n\r\n.btn-orange-outline:hover {\r\n  border: 1px solid var(--dark-orange);\r\n  color: var(--dark-orange);\r\n}\r\n\r\n.btn-orange {\r\n  background-color: var(--orange);\r\n  color: var(--white);\r\n}\r\n\r\n.btn-orange:hover {\r\n  background-color: var(--dark-orange);\r\n}\r\n\r\n.btn-plus {\r\n    padding: 1rem;\r\n    width: 100%;\r\n}\r\n\r\nbutton img {\r\n    filter: var(--filter-white);\r\n    width: 0.75rem;\r\n}\r\n\r\n\r\n\r\n/** CATEGORY PROPERTIES **/\r\n.category {\r\n  border-radius: 2rem;\r\n  padding: 0.5rem 0.75rem;\r\n  color: var(--gray);\r\n  transition: color 0.1s linear;\r\n}\r\n\r\n.category h3 {\r\n  font-family: 'Inter Medium';\r\n  line-height: 1rem;\r\n}\r\n\r\n.category:hover {\r\n  color: var(--blue);\r\n  cursor: default;\r\n}\r\n\r\n.category.active {\r\n  background-color: var(--blue);\r\n  color: var(--white);\r\n  transition: background-color 0.1s linear;\r\n}\r\n\r\n.category.active:hover {\r\n  color: var(--white);\r\n  cursor: default;\r\n}\r\n\r\n.categories {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n\r\n\r\n/** INPUT FORM PROPERTIES **/\r\n\r\ninput[type=text], select, input[type=date], textarea {\r\n    border: 1px solid var(--gray);\r\n    border-radius: 0.25rem;\r\n    padding: 0.5rem;\r\n\r\n    font-family: 'Inter Regular';\r\n    font-size: 16px;\r\n\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\ninput[type=date], select {\r\n    padding: 7px 0.5rem 7px 0.5rem;\r\n}\r\n\r\ninput[type=date]:invalid {\r\n    color: var(--gray);\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  line-height: 1.5rem;\r\n  height: 5.75rem;\r\n}\r\n\r\nlabel {\r\n    font-family: 'Inter Medium';\r\n    font-size: 0.75rem;\r\n    text-transform: uppercase;\r\n    color: var(--gray);\r\n\r\n    /*display: block;*/\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 0.25rem;\r\n}\r\n\r\n.required:after {\r\n    content: '*';\r\n    color: red;\r\n}\r\n\r\n.form {\r\n    background-color: var(--lightest-gray);\r\n    border-radius: 0.25rem;\r\n    padding: 2rem;\r\n}\r\n  \r\n  form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n  \r\n  .inputs, .buttons {\r\n    display: flex;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .inputs {\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .buttons button, .buttons .button {\r\n    flex: 1;\r\n  }\r\n  \r\n  form .bottom {\r\n    display: flex;\r\n    gap: 1rem;\r\n  }\r\n\r\n  form .bottom div {\r\n    flex: 1;\r\n  }\r\n\r\n\r\n\r\n/** MAIN CONTAINER PROPERTIES **/\r\n\r\nmain {\r\n    background-color: var(--white);\r\n    min-height: 100vh;\r\n    position: relative;\r\n\r\n    /** ATTEMPTING A FIXED SIDE COLUMN **/\r\n    margin-left: 20rem;\r\n}\r\n\r\n#main-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n\r\n    max-width: 50rem;\r\n    min-height: calc(100vh - 140px);\r\n    padding: 2rem;\r\n}\r\n\r\n\r\n\r\n/** INDIVIDUAL PAGE PROPERTIES **/\r\n\r\n.title-description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n\r\n\r\n/** EMPTY TASKS PROPERTIES **/\r\n\r\n#empty-list img {\r\n    height: 25rem;\r\n}\r\n\r\n#empty-list {\r\n    text-align: center;\r\n}\r\n\r\n\r\n/** HEADER PROPERTIES **/\r\nheader {\r\n  background-color: var(--black);\r\n  padding: 0.5rem 1rem;\r\n\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n/** FOOTER PROPERTIES **/\r\n\r\nfooter {\r\n    background-color: var(--gray);\r\n    color: var(--white);\r\n    padding: 1rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n\r\n    /** HIDE FOOTER FOR NOW **/\r\n    display: none;\r\n}\r\n\r\nfooter p {\r\n    font-family:'Inter Medium';\r\n    font-size: 0.75rem;\r\n}\r\n\r\n.footer-icon {\r\n    filter: invert(99%) sepia(13%) saturate(137%) hue-rotate(208deg) brightness(111%) contrast(90%);\r\n    width: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/** SIDE COLUMN PROPERTIES **/\r\n\r\n#side-column {\r\n    background-color: var(--black);\r\n    color: var(--gray);\r\n    padding: 2rem;\r\n\r\n    /** ATTEMPT A FIXED SIDE COLUMN **/\r\n    position: fixed;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n#side-column .nav-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 3rem;\r\n  height: 100%;\r\n  width: 16rem;\r\n}\r\n\r\n#side-column .hamburger-menu {\r\n  display: none;\r\n  height: fit-content;\r\n}\r\n\r\n#side-column svg.nav-menu {\r\n  width: 1rem;\r\n  fill: var(--white);\r\n  transition: fill 0.1s linear;\r\n}\r\n\r\n#side-column .logo {\r\n    width: 10rem;\r\n}\r\n\r\n#side-column .logo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#side-column .nav-content nav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    height: 100%;\r\n}\r\n\r\n#side-column nav div.top {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\n#side-column nav ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n#side-column nav li {\r\n    padding: 0.5rem;\r\n}\r\n\r\n#side-column .projects-link {\r\n  display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n\r\n#side-column #projects {\r\n    flex: 1;\r\n}\r\n\r\n#side-column #projects-list {\r\n    margin-left: 2rem;\r\n}\r\n\r\n#side-column #projects-chevron {\r\n  transition: fill 0.1s linear;\r\n}\r\n\r\n#side-column #projects-chevron:hover {\r\n  fill: var(--mid-gray);\r\n}\r\n\r\n.nav-icon {\r\n    width: 1rem;\r\n    height: 1rem;\r\n}\r\n\r\n.nav-link {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    flex: 1;\r\n\r\n    transition: color 0.1s linear;\r\n}\r\n\r\n.nav-link:hover {\r\n    color: var(--mid-gray);\r\n    cursor: default;\r\n}\r\n\r\n.nav-link.active {\r\n    color: var(--white);\r\n}\r\n\r\n.link {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n\r\n\r\n/** PAGE TEMPLATE PROPERTIES **/\r\n\r\n.module-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\n.task-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n\r\n    /*margin-left: 2rem;*/\r\n}\r\n\r\n.task-list {\r\n   display: flex;\r\n   flex-direction: column;\r\n   gap: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n/** TASK MODULE PROPERTIES **/\r\n\r\n.task, .task-info {\r\n    display: flex;\r\n    gap: 1rem;\r\n  }\r\n  \r\n  .task-info {\r\n    flex-direction: column;\r\n    flex: 1;\r\n  }\r\n  \r\n  .task {\r\n    border-radius: 0.25rem;\r\n    padding: 1rem;\r\n\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .task-name {\r\n    flex: 1;\r\n  }\r\n\r\n  .priority-due-date {\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-items: center;\r\n  }\r\n  \r\n  .task-name {\r\n    flex: 1;\r\n  }\r\n  \r\n  .low-p {\r\n    background-color: var(--light-blue);\r\n  }\r\n\r\n  .med-p {\r\n    background-color: var(--light-orange);\r\n  }\r\n\r\n  .high-p {\r\n    background-color: var(--light-red);\r\n  }\r\n\r\n  .low-p-project {\r\n    border: 0.0625rem solid var(--light-blue);\r\n  }\r\n\r\n  .med-p-project {\r\n    border: 0.0625rem solid var(--orange);\r\n  }\r\n\r\n  .high-p-project {\r\n    border: 0.0625rem solid var(--red);\r\n  }\r\n\r\n  .task-blue {\r\n    filter: invert(60%) sepia(29%) saturate(357%) hue-rotate(167deg) brightness(93%) contrast(86%);\r\n  }\r\n\r\n  .task-blue:hover {\r\n    filter: invert(53%) sepia(17%) saturate(846%) hue-rotate(167deg) brightness(90%) contrast(86%);\r\n  }\r\n\r\n  .task-orange {\r\n    filter: invert(59%) sepia(47%) saturate(345%) hue-rotate(349deg) brightness(94%) contrast(92%);\r\n  }\r\n\r\n  .task-orange:hover {\r\n    filter: invert(50%) sepia(42%) saturate(465%) hue-rotate(349deg) brightness(100%) contrast(89%);\r\n  }\r\n\r\n  .task-red {\r\n    filter: invert(59%) sepia(10%) saturate(1620%) hue-rotate(314deg) brightness(108%) contrast(75%);\r\n  }\r\n\r\n  .task-red:hover {\r\n    filter: invert(47%) sepia(12%) saturate(1858%) hue-rotate(314deg) brightness(99%) contrast(75%);\r\n  }\r\n\r\n  .edit-icon {\r\n    height: 1rem;\r\n  }\r\n\r\n  .task .icons .mobile {\r\n    display: none;\r\n  }\r\n\r\n  .task-top-row {\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-items: center;\r\n  }\r\n\r\n  .top-row-right {\r\n    display: flex;\r\n    gap: 2rem;\r\n    flex: 1;\r\n    align-items: center;\r\n  }\r\n\r\n  .task-bottom-row {\r\n    display: none;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    margin-left: 2.25rem;\r\n  }\r\n\r\n  .task-icon {\r\n    height: 1rem;\r\n    transition: filter 0.1s linear;\r\n  }\r\n\r\n  .icons {\r\n    display: flex;\r\n    gap: 1rem;\r\n  }\r\n\r\n  p.date {\r\n    font-size: 0.75rem;\r\n  }\r\n\r\n\r\n\r\n  /** CHECKBOX PROPERTIES **/\r\n\r\n  .round {\r\n    position: relative;\r\n  }\r\n  \r\n  .round label {\r\n    background-color: var(--ultra-white);\r\n    border: 1px solid var(--gray);\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    height: 1rem;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 1rem;\r\n  }\r\n  \r\n  .round label:after {\r\n    border: 2px solid var(--white);\r\n    border-top: none;\r\n    border-right: none;\r\n    content: \"\";\r\n    height: 3px;\r\n    left: 4px;\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 5px;\r\n    transform: rotate(-45deg);\r\n    width: 7px;\r\n  }\r\n  \r\n  .round input[type=\"checkbox\"] {\r\n    visibility: hidden;\r\n  }\r\n  \r\n  .round input[type=\"checkbox\"]:checked + label {\r\n    background-color: var(--green);\r\n    border-color: var(--green);\r\n  }\r\n  \r\n  .round input[type=\"checkbox\"]:checked + label:after {\r\n    opacity: 1;\r\n  }\r\n\r\n\r\n\r\n/** NOTIFICATION PROPERTIES **/\r\n\r\n.notification {\r\n  border-radius: 2rem;\r\n  padding: 0.25rem 0.5rem;\r\n  background-color: var(--shadow-black);\r\n  color: var(--white);\r\n}\r\n\r\n.urgent {\r\n  background-color: red;\r\n}\r\n\r\n\r\n\r\n/** EDIT MODAL PROPERTIES **/\r\n.modal {\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: var(--black); /* Fallback color */\r\n  background-color: var(--modal-black);\r\n}\r\n\r\n.modal-form {\r\n  background-color: var(--lightest-gray);\r\n  border-radius: 0.25rem;\r\n  padding: 2rem;\r\n  flex-basis: 20rem;\r\n  margin: 1rem;\r\n}\r\n\r\n.modal-form .bottom {\r\n  flex-direction: column;\r\n}\r\n\r\n.modal-form fieldset {\r\n display: flex;\r\n flex-direction: column;\r\n gap: 2rem;\r\n}\r\n\r\n.modal-form legend {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.modal-form h3 {\r\n  font-size: 1.5rem;\r\n  color: var(--blue)\r\n}\r\n\r\n\r\n\r\n\r\n/** WARNING MODAL PROPERTIES **/\r\nimg.warning {\r\n  height: 2rem;\r\n  filter: invert(59%) sepia(22%) saturate(6223%) hue-rotate(1deg) brightness(95%) contrast(106%);\r\n}\r\n\r\n.warning-modal {\r\n  background-color: var(--lightest-gray);\r\n  border-radius: 0.25rem;\r\n  padding: 2rem;\r\n  flex-basis: 37rem;\r\n  margin: 1rem;\r\n}\r\n\r\n.warning-modal form {\r\n  gap: 2rem;\r\n}\r\n\r\n.warning-modal h5 {\r\n  font-size: 1.5rem;\r\n  color: var(--black);\r\n}\r\n\r\n.warning-modal .flex {\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: center;\r\n}\r\n\r\n.warning-modal b {\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n/** MOBILE STYLES **/\r\n\r\n/* NAVIGATION */\r\nnav.mobile {\r\n  display: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/media-queries.css":
/*!*******************************!*\
  !*** ./src/media-queries.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./media-queries.css */ "./node_modules/css-loader/dist/cjs.js!./src/media-queries.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAbout)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ "./src/templates.js");


function loadAbout() {
  (0,_templates__WEBPACK_IMPORTED_MODULE_0__.clearMainContent)();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createPageHeadline)('About This Project');
  const pageDescription = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createPageDescription)('This To-Do app was created as part of The Odin Project curriculum.');
  const moduleContainerDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleContainer)('about');

  const projectSummaryDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleTitle)('Project Summary');

  const summaryDiv = document.createElement('div');
  const summary = document.createElement('p');
  const gitHubLink = document.createElement('p');

  summary.innerHTML = `This To-Do app is a simple task-tracker app intended to help organize and keep track of tasks for the average person. This project was written in Vanilla Javascript and was set up using Webpack. The code for this app utilizes and demonstrates the following concepts:
    <ul>
    <li>- Classes</li>
    <li>- Module Pattern</li>
    <li>- Observer Pattern</li>
    <li>- ES6 Modules</li>
    <li>- Responsive Design</li>
    </ul>`;

  gitHubLink.innerHTML = 'Feel free to view the code in the <a href="https://github.com/vbelmonte/to-do-list" target="_blank">GitHub repository</a>.';

  summaryDiv.appendChild(summary);
  summaryDiv.appendChild(gitHubLink);
  moduleContainerDiv.appendChild(projectSummaryDiv);
  moduleContainerDiv.appendChild(summaryDiv);

  const titleAndDescription = document.createElement('div');
  titleAndDescription.appendChild(pageHeadline);
  titleAndDescription.appendChild(pageDescription);
  titleAndDescription.classList.add('title-description');

  mainContentDiv.appendChild(titleAndDescription);
  mainContentDiv.appendChild(moduleContainerDiv);
}


/***/ }),

/***/ "./src/completed.js":
/*!**************************!*\
  !*** ./src/completed.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadCompleted)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ "./src/localstorage.js");




function loadCompleted() {
  (0,_templates__WEBPACK_IMPORTED_MODULE_0__.clearMainContent)();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createPageHeadline)('Completed');
  const moduleContainerDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleContainer)('completed');
  const moduleTitleDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleTitle)('My Completed Tasks');
  const taskContainerDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskContainer)();
  const taskListDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskList)(_localstorage__WEBPACK_IMPORTED_MODULE_1__.completedArray, 'completed');

  moduleContainerDiv.appendChild(moduleTitleDiv);
  moduleContainerDiv.appendChild(taskContainerDiv);

  taskContainerDiv.appendChild(taskListDiv);

  mainContentDiv.appendChild(pageHeadline);
  mainContentDiv.appendChild(moduleContainerDiv);
}


/***/ }),

/***/ "./src/form-processor.js":
/*!*******************************!*\
  !*** ./src/form-processor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processDeleteProjectForm": () => (/* binding */ processDeleteProjectForm),
/* harmony export */   "processDeleteProjectTaskForm": () => (/* binding */ processDeleteProjectTaskForm),
/* harmony export */   "processDeleteTaskForm": () => (/* binding */ processDeleteTaskForm),
/* harmony export */   "processModifyProjectForm": () => (/* binding */ processModifyProjectForm),
/* harmony export */   "processModifyProjectTaskForm": () => (/* binding */ processModifyProjectTaskForm),
/* harmony export */   "processModifyTaskForm": () => (/* binding */ processModifyTaskForm),
/* harmony export */   "processProjectForm": () => (/* binding */ processProjectForm),
/* harmony export */   "processProjectTaskForm": () => (/* binding */ processProjectTaskForm),
/* harmony export */   "processTaskForm": () => (/* binding */ processTaskForm)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ "./src/localstorage.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
/* harmony import */ var _projectsfolder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectsfolder */ "./src/projectsfolder.js");






function processTaskForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;
  const itemTag = (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.assignItemName)();
  const status = 'in-progress';

  const taskObj = new _tasks__WEBPACK_IMPORTED_MODULE_0__["default"](name, description, dueDate, priority, itemTag, status);

  (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__["default"])(taskObj);
  (0,_templates__WEBPACK_IMPORTED_MODULE_3__.updateTaskList)(taskObj);
}

function processProjectForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;
  const itemTag = (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.assignItemName)();
  const status = 'in-progress';

  const projectObj = new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](name, description, dueDate, priority, itemTag, status);

  (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__["default"])(projectObj);
  (0,_templates__WEBPACK_IMPORTED_MODULE_3__.updateProjectList)(projectObj);
  (0,_templates__WEBPACK_IMPORTED_MODULE_3__.updateProjectNavColumn)(projectObj);
}

function processProjectTaskForm(event, projectObj) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;
  const itemTag = (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.assignItemName)();
  const status = 'in-progress';
  const associatedProject = projectObj.itemTag;

  const taskObj = new _tasks__WEBPACK_IMPORTED_MODULE_0__["default"](name, description, dueDate, priority, itemTag, status, associatedProject);

  projectObj.inProgressTaskArray.push(taskObj);

  (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.updateProjectItem)(projectObj);
  (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__["default"])(taskObj);
  (0,_templates__WEBPACK_IMPORTED_MODULE_3__.updateTaskList)(taskObj);
}

function processModifyTaskForm(event, taskObj) {
  event.preventDefault();
  const name = document.getElementById('name-edit').value;
  const description = document.getElementById('description-edit').value;
  const dueDate = document.getElementById('due-date-edit').value;
  const priority = document.getElementById('priority-edit').value;
  const { itemTag } = taskObj;
  const { status } = taskObj;
  const { associatedProject } = taskObj;

  const editedTaskObj = new _tasks__WEBPACK_IMPORTED_MODULE_0__["default"](name, description, dueDate, priority, itemTag, status, associatedProject);

  const updateResultArray = (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.updateItemToStorage)(editedTaskObj);

  (0,_templates__WEBPACK_IMPORTED_MODULE_3__.updateTaskListEdit)(editedTaskObj, updateResultArray);
}

function processModifyProjectForm(event, projObj) {
  event.preventDefault();
  const name = document.getElementById('name-edit').value;
  const description = document.getElementById('description-edit').value;
  const dueDate = document.getElementById('due-date-edit').value;
  const priority = document.getElementById('priority-edit').value;
  const { itemTag } = projObj;
  const { status } = projObj;

  const editedProjectObj = new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](name, description, dueDate, priority, itemTag, status);

  const updateResultArray = (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.updateItemToStorage)(editedProjectObj);

  (0,_templates__WEBPACK_IMPORTED_MODULE_3__.updateTaskListEdit)(editedProjectObj, updateResultArray);
  (0,_projectsfolder__WEBPACK_IMPORTED_MODULE_4__.updateProjectLink)(editedProjectObj);
}

function processModifyProjectTaskForm(event, taskObj) {
  event.preventDefault();

  const name = document.getElementById('name-edit').value;
  const description = document.getElementById('description-edit').value;
  const dueDate = document.getElementById('due-date-edit').value;
  const priority = document.getElementById('priority-edit').value;
  const { itemTag } = taskObj;
  const { status } = taskObj;
  const { associatedProject } = taskObj;

  const editedSubTask = new _tasks__WEBPACK_IMPORTED_MODULE_0__["default"](name, description, dueDate, priority, itemTag, status, associatedProject);

  const updateResultArray = (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.updateItemToStorage)(editedSubTask);

  (0,_templates__WEBPACK_IMPORTED_MODULE_3__.updateTaskListEdit)(editedSubTask, updateResultArray);
}

function processDeleteTaskForm(event, taskObj) {
  event.preventDefault();

  (0,_templates__WEBPACK_IMPORTED_MODULE_3__.deleteItem)(taskObj);
  (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.deleteItemFromStorage)(taskObj);
}

function processDeleteProjectForm(event, projObj) {
  event.preventDefault();

  (0,_templates__WEBPACK_IMPORTED_MODULE_3__.deleteItem)(projObj);
  (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.deleteItemFromStorage)(projObj);
}

function processDeleteProjectTaskForm(event, subTaskObj) {
  event.preventDefault();

  (0,_templates__WEBPACK_IMPORTED_MODULE_3__.deleteItem)(subTaskObj);
  (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.deleteItemFromStorage)(subTaskObj);
}


/***/ }),

/***/ "./src/form-template.js":
/*!******************************!*\
  !*** ./src/form-template.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDeleteForm": () => (/* binding */ createDeleteForm),
/* harmony export */   "createEditForm": () => (/* binding */ createEditForm),
/* harmony export */   "default": () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
/* harmony import */ var _form_processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-processor */ "./src/form-processor.js");



function createCounter(input, maxLength) {
  const span = document.createElement('span');

  const counter = document.createElement('span');
  counter.id = 'counter';
  counter.innerHTML = maxLength;

  const max = document.createElement('span');
  max.innerHTML = `/${maxLength}`;

  span.appendChild(counter);
  span.appendChild(max);

  input.addEventListener('input', () => {
    counter.innerHTML = input.maxLength - input.value.length;
  });

  return span;
}

function createNameInput(type) {
  const nameDiv = document.createElement('div');
  const inputName = 'name';

  const nameSpan = document.createElement('span');
  nameSpan.classList.add('required');
  nameSpan.innerHTML = `${type} Name`;

  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = inputName;
  nameLabel.appendChild(nameSpan);

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.maxLength = 50;
  nameInput.name = inputName;
  nameInput.id = inputName;
  nameInput.required = true;
  nameInput.placeholder = `${type} Name`;

  const nameCounter = createCounter(nameInput, nameInput.maxLength);
  nameLabel.appendChild(nameCounter);

  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);

  return nameDiv;
}

function createNameInputEdit(type, taskObj) {
  const nameDiv = document.createElement('div');
  const inputName = 'name-edit';

  const nameSpan = document.createElement('span');
  nameSpan.classList.add('required');
  nameSpan.innerHTML = `${type} Name`;

  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = inputName;
  nameLabel.appendChild(nameSpan);

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.maxLength = 50;
  nameInput.name = inputName;
  nameInput.id = inputName;
  nameInput.required = true;
  nameInput.value = taskObj.name;

  const nameCounter = createCounter(nameInput, nameInput.maxLength);
  nameLabel.appendChild(nameCounter);

  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);

  return nameDiv;
}

function createDescriptionInput(type) {
  const descriptionDiv = document.createElement('div');
  const inputName = 'description';

  const descLabel = document.createElement('label');
  descLabel.htmlFor = inputName;
  descLabel.innerHTML = `${type} Description`;

  const descInput = document.createElement('textarea');
  descInput.maxLength = 140;
  descInput.name = inputName;
  descInput.id = inputName;
  descInput.placeholder = `${type} Description`;

  const descCounter = createCounter(descInput, descInput.maxLength);
  descLabel.appendChild(descCounter);

  descriptionDiv.appendChild(descLabel);
  descriptionDiv.appendChild(descInput);

  return descriptionDiv;
}

function createDescriptionInputEdit(type, taskObj) {
  const descriptionDiv = document.createElement('div');
  const inputName = 'description-edit';

  const descLabel = document.createElement('label');
  descLabel.htmlFor = inputName;
  descLabel.innerHTML = `${type} Description`;

  const descInput = document.createElement('textarea');
  descInput.maxLength = 140;
  descInput.name = inputName;
  descInput.id = inputName;
  descInput.value = taskObj.description;

  const descCounter = createCounter(descInput, descInput.maxLength);
  descLabel.appendChild(descCounter);

  descriptionDiv.appendChild(descLabel);
  descriptionDiv.appendChild(descInput);

  return descriptionDiv;
}

function createDueDateInput() {
  const dueDateDiv = document.createElement('div');
  const inputName = 'due-date';

  const dueDateSpan = document.createElement('span');
  dueDateSpan.classList.add('required');
  dueDateSpan.innerHTML = 'Due Date';

  const dueDateLabel = document.createElement('label');
  dueDateLabel.htmlFor = inputName;
  dueDateLabel.appendChild(dueDateSpan);

  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');

  const minDate = new Date().toLocaleDateString('fr-ca');
  dueDateInput.min = minDate;
  dueDateInput.name = inputName;
  dueDateInput.id = inputName;
  dueDateInput.required = true;

  dueDateDiv.appendChild(dueDateLabel);
  dueDateDiv.appendChild(dueDateInput);

  return dueDateDiv;
}

function createDueDateInputEdit(taskObj) {
  const dueDateDiv = document.createElement('div');
  const inputName = 'due-date-edit';

  const dueDateSpan = document.createElement('span');
  dueDateSpan.classList.add('required');
  dueDateSpan.innerHTML = 'Due Date';

  const dueDateLabel = document.createElement('label');
  dueDateLabel.htmlFor = inputName;
  dueDateLabel.appendChild(dueDateSpan);

  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');

  const minDate = new Date().toLocaleDateString('fr-ca');
  dueDateInput.min = minDate;
  dueDateInput.name = inputName;
  dueDateInput.id = inputName;
  dueDateInput.required = true;
  dueDateInput.value = taskObj.dueDate;

  dueDateDiv.appendChild(dueDateLabel);
  dueDateDiv.appendChild(dueDateInput);

  return dueDateDiv;
}

function createPriorityInput() {
  const priorityDiv = document.createElement('div');
  const inputName = 'priority';

  const prioritySpan = document.createElement('span');
  prioritySpan.classList.add('required');
  prioritySpan.innerHTML = 'Priority Level';

  const priorityLabel = document.createElement('label');
  priorityLabel.htmlFor = inputName;
  priorityLabel.appendChild(prioritySpan);

  const priorityInput = document.createElement('select');
  priorityInput.name = inputName;
  priorityInput.id = inputName;
  priorityInput.required = true;

  const low = document.createElement('option');
  low.value = 'low';
  low.text = 'Low';

  const medium = document.createElement('option');
  medium.value = 'medium';
  medium.text = 'Medium';

  const high = document.createElement('option');
  high.value = 'high';
  high.text = 'High';

  priorityInput.appendChild(low);
  priorityInput.appendChild(medium);
  priorityInput.appendChild(high);

  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityInput);

  return priorityDiv;
}

function createPriorityInputEdit(taskObj) {
  const priorityDiv = document.createElement('div');
  const inputName = 'priority-edit';

  const prioritySpan = document.createElement('span');
  prioritySpan.classList.add('required');
  prioritySpan.innerHTML = 'Priority Level';

  const priorityLabel = document.createElement('label');
  priorityLabel.htmlFor = inputName;
  priorityLabel.appendChild(prioritySpan);

  const priorityInput = document.createElement('select');
  priorityInput.name = inputName;
  priorityInput.id = inputName;
  priorityInput.required = true;

  const low = document.createElement('option');
  low.value = 'low';
  low.text = 'Low';

  const medium = document.createElement('option');
  medium.value = 'medium';
  medium.text = 'Medium';

  const high = document.createElement('option');
  high.value = 'high';
  high.text = 'High';

  priorityInput.appendChild(low);
  priorityInput.appendChild(medium);
  priorityInput.appendChild(high);

  priorityInput.value = taskObj.priority;

  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityInput);

  return priorityDiv;
}

function clearFormValues() {
  const name = document.getElementById('name');
  const description = document.getElementById('description');
  const dueDate = document.getElementById('due-date');
  const priority = document.getElementById('priority');
  const blank = '';

  name.value = blank;
  description.value = blank;
  dueDate.value = blank;
  priority.value = 'low';
}

function createCancelButton() {
  const cancelButton = document.createElement('button');
  cancelButton.classList.add('btn-outline');
  cancelButton.innerHTML = 'Cancel';
  cancelButton.onclick = function (event) {
    (0,_templates__WEBPACK_IMPORTED_MODULE_0__.closeForm)(event);
    clearFormValues();
  };

  return cancelButton;
}

function createCancelButtonEdit() {
  const cancelButton = document.createElement('button');
  cancelButton.classList.add('btn-outline');
  cancelButton.innerHTML = 'Cancel';
  cancelButton.onclick = function (event) {
    (0,_templates__WEBPACK_IMPORTED_MODULE_0__.closeFormModal)(event);
  };

  return cancelButton;
}

function createAddButton() {
  const addButton = document.createElement('input');
  addButton.classList.add('button');
  addButton.classList.add('btn-solid');
  addButton.setAttribute('type', 'submit');
  addButton.value = 'Add';

  return addButton;
}

function createModifyButton() {
  const modifyButton = document.createElement('input');
  modifyButton.classList.add('button');
  modifyButton.classList.add('btn-solid');
  modifyButton.setAttribute('type', 'submit');
  modifyButton.value = 'Modify';

  return modifyButton;
}

function createDeleteButton() {
  const deleteButton = document.createElement('input');
  deleteButton.classList.add('button');
  deleteButton.classList.add('btn-orange');
  deleteButton.setAttribute('type', 'submit');
  deleteButton.value = 'Delete';

  return deleteButton;
}

function createButtonsDiv() {
  const div = document.createElement('div');
  const cancel = createCancelButton();
  const add = createAddButton();

  div.classList.add('buttons');
  div.appendChild(cancel);
  div.appendChild(add);

  return div;
}

function createButtonsEditDiv() {
  const div = document.createElement('div');
  const cancel = createCancelButtonEdit();
  const modify = createModifyButton();

  div.classList.add('buttons');
  div.appendChild(cancel);
  div.appendChild(modify);

  return div;
}

function createWarningMessage(obj) {
  const div = document.createElement('div');
  const message = document.createElement('p');

  if (obj.classname === 'Project') {
    const addition = document.createElement('p');
    addition.innerHTML = 'The item you are deleting is a Project and contains its own tasks. Deleting this project will also delete these tasks.';
    message.appendChild(addition);
  }

  const warning = document.createElement('b');
  warning.innerHTML = 'This action cannot be undone.';
  message.appendChild(warning);

  div.appendChild(message);

  return div;
}

function assignFormMethod(form, type, projectObj) {
  if (type === 'Task') {
    form.onsubmit = function (event) {
      (0,_form_processor__WEBPACK_IMPORTED_MODULE_1__.processTaskForm)(event);
      clearFormValues();
      (0,_templates__WEBPACK_IMPORTED_MODULE_0__.closeForm)(event);
    };
  } else if (type === 'Project') {
    form.onsubmit = function (event) {
      (0,_form_processor__WEBPACK_IMPORTED_MODULE_1__.processProjectForm)(event);
      clearFormValues();
      (0,_templates__WEBPACK_IMPORTED_MODULE_0__.closeForm)(event);
    };
  } else if (type === 'Project Task') {
    form.onsubmit = function (event) {
      (0,_form_processor__WEBPACK_IMPORTED_MODULE_1__.processProjectTaskForm)(event, projectObj);
      clearFormValues();
      (0,_templates__WEBPACK_IMPORTED_MODULE_0__.closeForm)(event);
    };
  } else if (type === 'Edit Task') {
    form.onsubmit = function (event) {
      (0,_form_processor__WEBPACK_IMPORTED_MODULE_1__.processModifyTaskForm)(event, projectObj);
      (0,_templates__WEBPACK_IMPORTED_MODULE_0__.closeFormModal)(event);
    };
  } else if (type === 'Edit Project') {
    form.onsubmit = function (event) {
      (0,_form_processor__WEBPACK_IMPORTED_MODULE_1__.processModifyProjectForm)(event, projectObj);
      (0,_templates__WEBPACK_IMPORTED_MODULE_0__.closeFormModal)(event);
    };
  } else if (type === 'Edit Project Task') {
    form.onsubmit = function (event) {
      (0,_form_processor__WEBPACK_IMPORTED_MODULE_1__.processModifyProjectTaskForm)(event, projectObj);
      (0,_templates__WEBPACK_IMPORTED_MODULE_0__.closeFormModal)(event);
    };
  } else if (type === 'Delete Task') {
    form.onsubmit = function (event) {
      (0,_form_processor__WEBPACK_IMPORTED_MODULE_1__.processDeleteTaskForm)(event, projectObj);
      (0,_templates__WEBPACK_IMPORTED_MODULE_0__.closeFormModal)(event);
    };
  } else if (type === 'Delete Project') {
    form.onsubmit = function (event) {
      (0,_form_processor__WEBPACK_IMPORTED_MODULE_1__.processDeleteProjectForm)(event, projectObj);
      (0,_templates__WEBPACK_IMPORTED_MODULE_0__.closeFormModal)(event);
    };
  } else {
    form.onsubmit = function (event) {
      (0,_form_processor__WEBPACK_IMPORTED_MODULE_1__.processDeleteProjectTaskForm)(event, projectObj);
      (0,_templates__WEBPACK_IMPORTED_MODULE_0__.closeFormModal)(event);
    };
  }
}

function createForm(type, projectObj) {
  const formDiv = document.createElement('div');
  formDiv.classList.add('form');

  const inputsDiv = document.createElement('div');
  inputsDiv.classList.add('inputs');

  const nameInput = createNameInput(type);
  const descriptionInput = createDescriptionInput(type);

  inputsDiv.appendChild(nameInput);
  inputsDiv.appendChild(descriptionInput);

  const rightDiv = document.createElement('div');
  rightDiv.classList.add('bottom');

  const priorityInput = createPriorityInput();
  const dueDateInput = createDueDateInput();

  rightDiv.appendChild(dueDateInput);
  rightDiv.appendChild(priorityInput);

  inputsDiv.appendChild(rightDiv);

  const buttonsDiv = createButtonsDiv();

  const form = document.createElement('form');
  assignFormMethod(form, type, projectObj);
  form.appendChild(inputsDiv);
  form.appendChild(buttonsDiv);

  formDiv.appendChild(form);

  return formDiv;
}

function createEditForm(type, projectObj) {
  const fieldset = document.createElement('fieldset');

  const legend = document.createElement('legend');
  legend.innerHTML = `<h3>${type}</h3>`;
  fieldset.appendChild(legend);

  const formDiv = document.createElement('div');
  formDiv.classList.add('modal-form');

  const inputsDiv = document.createElement('div');
  inputsDiv.classList.add('inputs');

  const nameInput = createNameInputEdit(type, projectObj);
  const descriptionInput = createDescriptionInputEdit(type, projectObj);

  inputsDiv.appendChild(nameInput);
  inputsDiv.appendChild(descriptionInput);

  const rightDiv = document.createElement('div');
  rightDiv.classList.add('bottom');

  const priorityInput = createPriorityInputEdit(projectObj);
  const dueDateInput = createDueDateInputEdit(projectObj);

  rightDiv.appendChild(dueDateInput);
  rightDiv.appendChild(priorityInput);

  inputsDiv.appendChild(rightDiv);

  const buttonsDiv = createButtonsEditDiv();

  const form = document.createElement('form');
  assignFormMethod(form, type, projectObj);
  fieldset.appendChild(inputsDiv);
  fieldset.appendChild(buttonsDiv);

  form.appendChild(fieldset);
  formDiv.appendChild(form);

  return formDiv;
}

function createDeleteForm(type, obj) {
  const warningImg = document.createElement('img');
  warningImg.src = '../src/assets/img/triangle-exclamation-solid.svg';
  warningImg.classList.add('warning');

  const warningImgDiv = document.createElement('div');
  warningImgDiv.appendChild(warningImg);

  const warningQuestion = document.createElement('h5');
  warningQuestion.innerHTML = `Are you sure you want to delete this <b>${obj.classname.toUpperCase()}</b>?`;

  const warningQuestionDiv = document.createElement('div');
  warningQuestionDiv.appendChild(warningQuestion);

  const warningHeadline = document.createElement('div');
  warningHeadline.appendChild(warningImgDiv);
  warningHeadline.appendChild(warningQuestionDiv);
  warningHeadline.classList.add('flex');

  const warningMessage = createWarningMessage(obj);

  const cancelButton = createCancelButtonEdit();
  cancelButton.classList.add('btn-orange-outline');
  cancelButton.classList.remove('btn-outline');

  const deleteButton = createDeleteButton();

  const buttonsDiv = document.createElement('div');
  buttonsDiv.appendChild(cancelButton);
  buttonsDiv.appendChild(deleteButton);
  buttonsDiv.classList.add('buttons');

  const form = document.createElement('form');
  assignFormMethod(form, type, obj);
  form.appendChild(warningHeadline);
  form.appendChild(warningMessage);
  form.appendChild(buttonsDiv);

  const formDiv = document.createElement('div');
  formDiv.classList.add('modal-form');
  formDiv.classList.add('warning-modal');
  formDiv.appendChild(form);

  return formDiv;
}


/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadInbox)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
/* harmony import */ var _form_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-template */ "./src/form-template.js");
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ "./src/localstorage.js");






function loadInbox() {
  (0,_templates__WEBPACK_IMPORTED_MODULE_0__.clearMainContent)();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createPageHeadline)('Inbox');
  const pageDescription = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createPageDescription)('General list of tasks not belonging to any category or project.');
  const moduleContainerDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleContainer)('inbox');
  const moduleTitleDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleTitle)('My Tasks');
  const taskContainerDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskContainer)();
  const addTaskButtonDiv = document.createElement('div');
  const addTaskButton = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createSolidPlusButton)();
  const taskListDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskList)(_localstorage__WEBPACK_IMPORTED_MODULE_2__.inboxTaskArray, 'inbox');
  const formDiv = (0,_form_template__WEBPACK_IMPORTED_MODULE_1__["default"])('Task');

  addTaskButtonDiv.appendChild(addTaskButton);
  addTaskButton.id = 'add-button';
  addTaskButton.onclick = _templates__WEBPACK_IMPORTED_MODULE_0__.showForm;

  moduleContainerDiv.appendChild(moduleTitleDiv);
  moduleContainerDiv.appendChild(taskContainerDiv);

  taskContainerDiv.appendChild(addTaskButtonDiv);
  taskContainerDiv.appendChild(formDiv);
  formDiv.style.display = 'none';
  taskContainerDiv.appendChild(taskListDiv);

  const titleAndDescription = document.createElement('div');
  titleAndDescription.appendChild(pageHeadline);
  titleAndDescription.appendChild(pageDescription);
  titleAndDescription.classList.add('title-description');

  mainContentDiv.appendChild(titleAndDescription);
  mainContentDiv.appendChild(moduleContainerDiv);
}


/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addItemsToLocalArrays": () => (/* binding */ addItemsToLocalArrays),
/* harmony export */   "allItemsArray": () => (/* binding */ allItemsArray),
/* harmony export */   "assignItemName": () => (/* binding */ assignItemName),
/* harmony export */   "completedArray": () => (/* binding */ completedArray),
/* harmony export */   "default": () => (/* binding */ addItemToStorage),
/* harmony export */   "deleteItemFromStorage": () => (/* binding */ deleteItemFromStorage),
/* harmony export */   "dueThisWeekArray": () => (/* binding */ dueThisWeekArray),
/* harmony export */   "dueTodayArray": () => (/* binding */ dueTodayArray),
/* harmony export */   "inboxTaskArray": () => (/* binding */ inboxTaskArray),
/* harmony export */   "markAsComplete": () => (/* binding */ markAsComplete),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "projectsDueThisWeekArray": () => (/* binding */ projectsDueThisWeekArray),
/* harmony export */   "projectsDueTodayArray": () => (/* binding */ projectsDueTodayArray),
/* harmony export */   "tasksDueThisWeekArray": () => (/* binding */ tasksDueThisWeekArray),
/* harmony export */   "tasksDueTodayArray": () => (/* binding */ tasksDueTodayArray),
/* harmony export */   "updateItemToStorage": () => (/* binding */ updateItemToStorage),
/* harmony export */   "updateProjectItem": () => (/* binding */ updateProjectItem)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _task_subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-subject */ "./src/task-subject.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates */ "./src/templates.js");






const projectArray = [];
const inboxTaskArray = [];
const dueTodayArray = [];
const tasksDueTodayArray = [];
const projectsDueTodayArray = [];
const dueThisWeekArray = [];
const tasksDueThisWeekArray = [];
const projectsDueThisWeekArray = [];
const completedArray = [];
const allItemsArray = [];

_task_subject__WEBPACK_IMPORTED_MODULE_2__["default"].taskArraysMap.set('today', dueTodayArray);
_task_subject__WEBPACK_IMPORTED_MODULE_2__["default"].taskArraysMap.set('week', dueThisWeekArray);
_task_subject__WEBPACK_IMPORTED_MODULE_2__["default"].taskArraysMap.set('inbox', inboxTaskArray);

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
        // everything except Firefox
        && (e.code === 22
          // Firefox
          || e.code === 1014
          // test name field too, because code might not be present
          // everything except Firefox
          || e.name === 'QuotaExceededError'
          // Firefox
          || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
        // acknowledge QuotaExceededError only if there's something already stored
        && storage
        && storage.length !== 0
    );
  }
}

function reassignProjectTaskClass(obj) {
  const { inProgressTaskArray } = obj;
  const { completedTaskArray } = obj;
  const newInProgressTaskArray = [];
  const newCompletedTaskArray = [];

  for (let i = 0; i < inProgressTaskArray.length; i += 1) {
    newInProgressTaskArray.push(Object.assign(new _tasks__WEBPACK_IMPORTED_MODULE_0__["default"](), inProgressTaskArray[i]));
  }
  for (let k = 0; k < completedTaskArray.length; k += 1) {
    newCompletedTaskArray.push(Object.assign(new _tasks__WEBPACK_IMPORTED_MODULE_0__["default"](), completedTaskArray[k]));
  }

  obj.inProgressTaskArray = newInProgressTaskArray;
  obj.completedTaskArray = newCompletedTaskArray;

  return obj;
}

function deserialize(json) {
  const obj = JSON.parse(json);

  if (obj._classname === 'Task') {
    return Object.assign(new _tasks__WEBPACK_IMPORTED_MODULE_0__["default"](), obj);
  }

  const newObj = Object.assign(new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](), obj);

  return reassignProjectTaskClass(newObj);
}

function retrieveProject(tag) {
  const index = projectArray.map((i) => i.itemTag).indexOf(tag);
  if (index >= 0) {
    return projectArray[index];
  }
}

function removeItemFromInbox(tag) {
  const index = inboxTaskArray.map((i) => i.itemTag).indexOf(tag);

  if (index >= 0) {
    return inboxTaskArray.splice(index, 1)[0];
  }
}

function removeItemFromProjects(tag) {
  const index = projectArray.map((i) => i.itemTag).indexOf(tag);

  if (index >= 0) {
    return projectArray.splice(index, 1)[0];
  }
}

function removeItemFromTodayArrays(tag) {
  const todayArrays = [projectsDueTodayArray, tasksDueTodayArray, dueTodayArray];

  todayArrays.forEach((array) => {
    const index = array.map((i) => i.itemTag).indexOf(tag);

    if (index >= 0) {
      array.splice(index, 1)[0];
    }
  });
  _task_subject__WEBPACK_IMPORTED_MODULE_2__["default"].updateDecrement('today', dueTodayArray);
}

function removeItemFromWeekArrays(tag) {
  const weekArrays = [projectsDueThisWeekArray, tasksDueThisWeekArray, dueThisWeekArray];

  weekArrays.forEach((array) => {
    const index = array.map((i) => i.itemTag).indexOf(tag);

    if (index >= 0) {
      array.splice(index, 1)[0];
    }
  });
  _task_subject__WEBPACK_IMPORTED_MODULE_2__["default"].updateDecrement('week', dueThisWeekArray);
}

function determineTaskType(tag) {
  if (inboxTaskArray.map((i) => i.itemTag).indexOf(tag) >= 0 && inboxTaskArray.length >= 1) {
    return 'inbox';
  }
  if (projectArray.map((i) => i.itemTag).indexOf(tag) >= 0 && projectArray.length >= 1) {
    return 'project';
  }
  return 'project-task';
}

function removeItemFromAllArrays(tag) {
  removeItemFromTodayArrays(tag);
  removeItemFromWeekArrays(tag);

  const taskType = determineTaskType(tag);

  if (taskType === 'inbox') {
    removeItemFromInbox(tag);
    _task_subject__WEBPACK_IMPORTED_MODULE_2__["default"].updateDecrement('inbox', inboxTaskArray);
  } else if (taskType === 'project') {
    removeItemFromProjects(tag);
  }
}

function moveItemToCompletedArray(obj) {
  if (obj.status === 'completed') {
    completedArray.push(obj);
  }
}

function markItemAsComplete(obj) {
  obj.status = 'completed';
  return obj;
}

function updateLocalStorage(obj) {
  const keyName = obj.itemTag;
  localStorage.removeItem(keyName);

  const jsonObj = JSON.stringify(obj);

  localStorage.setItem(keyName, jsonObj);
}

function removeFromLocalStorage(obj) {
  const keyName = obj.itemTag;
  localStorage.removeItem(keyName);
}

function removeSubTasksFromArrays(obj) {
  if (obj.classname === 'Project') {
    const inProgress = obj.inProgressTaskArray;
    const completed = obj.completedTaskArray;

    for (let i = 0; i < inProgress.length; i += 1) {
      const tagID = inProgress[i].itemTag;
      removeItemFromAllArrays(tagID);
      removeFromLocalStorage(inProgress[i]);
    }
    for (let k = 0; k < completed.length; k += 1) {
      const tagID = completed[k].itemTag;
      removeItemFromAllArrays(tagID);
      removeFromLocalStorage(completed[k]);
    }
  }
}

function removeSubTaskFromProject(obj) {
  if (obj.associatedProject !== undefined) {
    const index = projectArray.map((i) => i.itemTag).indexOf(obj.associatedProject);
    const inProgress = projectArray[index].inProgressTaskArray;
    const completed = projectArray[index].completedTaskArray;
    const indexInProgress = inProgress.map((i) => i.itemTag).indexOf(obj.itemTag);
    const indexCompleted = completed.map((i) => i.itemTag).indexOf(obj.itemTag);

    if (indexInProgress >= 0) {
      projectArray[index].inProgressTaskArray.splice(indexInProgress, 1)[0];
    }
    if (indexCompleted >= 0) {
      projectArray[index].completedTaskArray.splice(indexCompleted, 1)[0];
    }

    updateLocalStorage(projectArray[index]);
  }
}

function removeItemFromProjectInProgressArray(obj) {
  const associatedProjectTag = obj.associatedProject;
  const indexOfProject = projectArray.map((i) => i.itemTag).indexOf(associatedProjectTag);
  const { inProgressTaskArray } = projectArray[indexOfProject];

  const indexOfTask = inProgressTaskArray.map((i) => i.itemTag).indexOf(obj.itemTag);
  projectArray[indexOfProject].inProgressTaskArray.splice(indexOfTask, 1);
}

function moveItemToProjectCompletedArray(obj) {
  if (obj.associatedProject !== undefined) {
    const associatedProjectTag = obj.associatedProject;
    const indexOfProject = projectArray.map((i) => i.itemTag).indexOf(associatedProjectTag);

    removeItemFromProjectInProgressArray(obj);
    projectArray[indexOfProject].completedTaskArray.push(obj);
    updateLocalStorage(projectArray[indexOfProject]);
  }
}

function retrieveObj(tag) {
  const index = allItemsArray.map((i) => i.itemTag).indexOf(tag);
  return allItemsArray[index];
}

function updateProjectArray(object) {
  const index = projectArray.map((i) => i.itemTag).indexOf(object.itemTag);

  projectArray[index] = object;
}

function updateInboxTaskArray(object) {
  const index = inboxTaskArray.map((i) => i.itemTag).indexOf(object.itemTag);

  inboxTaskArray[index] = object;
}

function updateProjectSubTask(object) {
  const projectObj = retrieveProject(object.associatedProject);
  const index = projectObj.inProgressTaskArray.map((i) => i.itemTag).indexOf(object.itemTag);

  projectObj.inProgressTaskArray[index] = object;

  return projectObj;
}

function updateProjectItem(obj) {
  updateLocalStorage(obj);
}

function markAsComplete(event) {
  const tagID = event.target.id;
  removeItemFromAllArrays(tagID);
  const obj = retrieveObj(tagID);
  const updatedObj = markItemAsComplete(obj);

  moveItemToCompletedArray(updatedObj);
  moveItemToProjectCompletedArray(updatedObj);
  (0,_templates__WEBPACK_IMPORTED_MODULE_3__.removeItemFromTaskList)(obj);
  (0,_templates__WEBPACK_IMPORTED_MODULE_3__.removeItemFromProjectNavColumn)(updatedObj);
  updateLocalStorage(updatedObj);
}

function assignItemName() {
  const number = localStorage.length + 1;
  const itemName = `item-${number}`;

  return itemName;
}

function addItemToLocalStorage(object) {
  if (storageAvailable('localStorage')) {
    const jsonObj = JSON.stringify(object);

    localStorage.setItem(object.itemTag, jsonObj);
  } else {
    alert(storageAvailable('localStorage'));

    // eslint-disable-next-line no-console
    console.log('Error! No local storage available.');
  }
}

function addItemToDayArray(object) {
  dueTodayArray.push(object);
  _task_subject__WEBPACK_IMPORTED_MODULE_2__["default"].updateIncrement('today', dueTodayArray);
  if (object.classname === 'Task') {
    tasksDueTodayArray.push(object);
  } else {
    projectsDueTodayArray.push(object);
  }
}

function addItemToWeekArray(object) {
  dueThisWeekArray.push(object);
  _task_subject__WEBPACK_IMPORTED_MODULE_2__["default"].updateIncrement('week', dueThisWeekArray);
  if (object.classname === 'Task') {
    tasksDueThisWeekArray.push(object);
  } else {
    projectsDueThisWeekArray.push(object);
  }
}

function addItemToWeekOrDay(object) {
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(object.dueDate))) {
    addItemToDayArray(object);
    addItemToWeekArray(object);
  } else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(object.dueDate))) {
    addItemToWeekArray(object);
  }
}

function updateWeek(object) {
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(object.dueDate))) {
    const index = dueThisWeekArray.map((i) => i.itemTag).indexOf(object.itemTag);

    if (index >= 0) {
      dueThisWeekArray[index] = object;
      if (object.classname === 'Task') {
        const indexT = tasksDueThisWeekArray.map((i) => i.itemTag).indexOf(object.itemTag);
        tasksDueThisWeekArray[indexT] = object;
      } else {
        const indexP = projectsDueThisWeekArray.map((i) => i.itemTag).indexOf(object.itemTag);
        projectsDueThisWeekArray[indexP] = object;
      }

      return 'modify week';
    }
    addItemToWeekArray(object);

    return 'add week';
  }
  removeItemFromWeekArrays(object.itemTag);

  return 'remove week';
}

function updateDay(object) {
  updateWeek(object);

  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(object.dueDate))) {
    const index = dueTodayArray.map((i) => i.itemTag).indexOf(object.itemTag);

    if (index >= 0) {
      dueTodayArray[index] = object;
      if (object.classname === 'Task') {
        const indexT = tasksDueTodayArray.map((i) => i.itemTag).indexOf(object.itemTag);
        tasksDueTodayArray[indexT] = object;
      } else {
        const indexP = projectsDueTodayArray.map((i) => i.itemTag).indexOf(object.itemTag);
        projectsDueTodayArray[indexP] = object;
      }
      return 'modify day';
    }
    addItemToDayArray(object);
    return 'add day';
  }
  removeItemFromTodayArrays(object.itemTag);

  return 'remove day';
}

function updateWeekOrDay(object) {
  const updateWeekResult = updateWeek(object);
  const updateDayResult = updateDay(object);

  return [updateDayResult, updateWeekResult];
}

function addItemsToLocalArrays() {
  let keyName;
  for (let i = 0; i < localStorage.length; i += 1) {
    keyName = localStorage.key(i);
    const item = localStorage.getItem(keyName);
    const convertedObj = deserialize(item);

    allItemsArray.push(convertedObj);

    if (convertedObj.classname === 'Project') {
      if (convertedObj.status === 'in-progress') {
        projectArray.push(convertedObj);
        addItemToWeekOrDay(convertedObj);
      } else {
        completedArray.push(convertedObj);
      }
    } else if (convertedObj.classname === 'Task') {
      if (convertedObj.status === 'in-progress') {
        addItemToWeekOrDay(convertedObj);
        if (convertedObj.associatedProject === undefined) {
          inboxTaskArray.push(convertedObj);
          _task_subject__WEBPACK_IMPORTED_MODULE_2__["default"].updateIncrement('inbox', inboxTaskArray);
        }
      } else {
        completedArray.push(convertedObj);
      }
    }
  }
}

function updateAllItemsArray(object) {
  const tag = object.itemTag;
  const index = allItemsArray.map((i) => i.itemTag).indexOf(tag);

  allItemsArray[index] = object;
}

function addItemToLocalArray(object) {
  if (storageAvailable('localStorage')) {
    allItemsArray.push(object);

    if (object.classname === 'Project') {
      projectArray.push(object);
    } else if (object.classname === 'Task') {
      if (object.associatedProject === undefined) {
        inboxTaskArray.push(object);
        _task_subject__WEBPACK_IMPORTED_MODULE_2__["default"].updateIncrement('inbox', inboxTaskArray);
      }
    } else {
      completedArray.push(object);
    }
  } else {
    alert(storageAvailable('localStorage'));

    // eslint-disable-next-line no-console
    console.log('Error! No local storage available.');
  }
}

function updateLocalArray(object) {
  updateAllItemsArray(object);

  if (object.classname === 'Project') {
    updateProjectArray(object);
  } else if (object.classname === 'Task') {
    if (object.associatedProject === undefined) {
      updateInboxTaskArray(object);
    } else {
      const updatedProject = updateProjectSubTask(object);
      updateProjectArray(updatedProject);
    }
  }
}

function updateItemToStorage(object) {
  updateLocalStorage(object);
  updateLocalArray(object);
  const updateResultArray = updateWeekOrDay(object);

  return updateResultArray;
}

function deleteItemFromStorage(object) {
  const tagID = object.itemTag;

  removeItemFromAllArrays(tagID);
  removeSubTasksFromArrays(object);
  removeSubTaskFromProject(object);
  (0,_templates__WEBPACK_IMPORTED_MODULE_3__.removeItemFromProjectNavColumn)(object);
  removeFromLocalStorage(object);
}

function addItemToStorage(object) {
  addItemToLocalStorage(object);
  addItemToLocalArray(object);
  addItemToWeekOrDay(object);
}


/***/ }),

/***/ "./src/observer.js":
/*!*************************!*\
  !*** ./src/observer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Observer)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ "./src/templates.js");


class Observer {
  constructor(type, counter) {
    this.type = type;
    this.counter = counter;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get counter() {
    return this._counter;
  }

  set counter(value) {
    this._counter = value;
  }

  notify(value) {
    this._counter = value;
  }

  updateDOM(type, value) {
    (0,_templates__WEBPACK_IMPORTED_MODULE_0__.updateTaskCounterButton)(type, value);
  }
}


/***/ }),

/***/ "./src/project-page.js":
/*!*****************************!*\
  !*** ./src/project-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadProjectPage)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
/* harmony import */ var _form_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-template */ "./src/form-template.js");




function loadProjectPage(projectObj) {
  (0,_templates__WEBPACK_IMPORTED_MODULE_0__.clearMainContent)();

  const projectName = projectObj.name;
  const projectInProgressTasks = projectObj.inProgressTaskArray;

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createPageHeadline)(projectName);
  const pageDescription = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createPageDescription)(projectObj.description);
  const moduleContainerDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleContainer)('project-page');
  const moduleTitleDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleTitle)('My Tasks');
  const taskContainerDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskContainer)();
  const addTaskButtonDiv = document.createElement('div');
  const addTaskButton = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createSolidPlusButton)();
  const taskListDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskList)(projectInProgressTasks, 'project-tasks');
  const formDiv = (0,_form_template__WEBPACK_IMPORTED_MODULE_1__["default"])('Project Task', projectObj);

  addTaskButtonDiv.appendChild(addTaskButton);
  addTaskButton.id = 'add-button';
  addTaskButton.onclick = _templates__WEBPACK_IMPORTED_MODULE_0__.showForm;

  moduleContainerDiv.appendChild(moduleTitleDiv);
  moduleContainerDiv.appendChild(taskContainerDiv);

  taskContainerDiv.appendChild(addTaskButtonDiv);
  taskContainerDiv.appendChild(formDiv);
  formDiv.style.display = 'none';
  taskContainerDiv.appendChild(taskListDiv);

  const titleAndDescription = document.createElement('div');
  titleAndDescription.appendChild(pageHeadline);
  titleAndDescription.appendChild(pageDescription);
  titleAndDescription.classList.add('title-description');

  mainContentDiv.appendChild(titleAndDescription);
  mainContentDiv.appendChild(moduleContainerDiv);
}


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(projectName, projectDescription, dueDate, priority, itemTag, status) {
    this.classname = this.constructor.name;
    this.name = projectName;
    this.description = projectDescription;
    this.dueDate = dueDate;
    this.priority = priority;
    this.itemTag = itemTag;
    this.status = status;
    this.inProgressTaskArray = [];
    this.completedTaskArray = [];
  }

  get classname() {
    return this._classname;
  }

  set classname(value) {
    this._classname = value;
  }
 
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    this._dueDate = value;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }

  get itemTag() {
    return this._itemTag;
  }

  set itemTag(value) {
    this._itemTag = value;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }

  get inProgressTaskArray() {
    return this._inProgressTaskArray;
  }

  set inProgressTaskArray(value) {
    this._inProgressTaskArray = value;
  }

  get completedTaskArray() {
    return this._completedTaskArray;
  }

  set completedTaskArray(value) {
    this._completedTaskArray = value;
  }

  updateInProgressTaskArray(task) {
    const index = this.inProgressTaskArray.map().indexOf(task.itemTag);
    this.inProgressTaskArray[index] = task;
  }
}


/***/ }),

/***/ "./src/projectsfolder.js":
/*!*******************************!*\
  !*** ./src/projectsfolder.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadProjects),
/* harmony export */   "loadProjectsNavList": () => (/* binding */ loadProjectsNavList),
/* harmony export */   "updateProjectLink": () => (/* binding */ updateProjectLink)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
/* harmony import */ var _form_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-template */ "./src/form-template.js");
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ "./src/localstorage.js");
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-page */ "./src/project-page.js");







function loadProjectsNavList() {
  (0,_templates__WEBPACK_IMPORTED_MODULE_0__.clearProjectsNavList)();

  (0,_templates__WEBPACK_IMPORTED_MODULE_0__.populateProjectsNavList)(_localstorage__WEBPACK_IMPORTED_MODULE_2__.projectArray);
}

function updateProjectLink(projectObj) {
  const index = _localstorage__WEBPACK_IMPORTED_MODULE_2__.projectArray.map((i) => i.itemTag).indexOf(projectObj.itemTag);
  const link = document.getElementById(`nav-${projectObj.itemTag}`);

  link.addEventListener('click', () => {
    (0,_project_page__WEBPACK_IMPORTED_MODULE_3__["default"])(_localstorage__WEBPACK_IMPORTED_MODULE_2__.projectArray[index]);
  });
}

function loadProjects() {
  (0,_templates__WEBPACK_IMPORTED_MODULE_0__.clearMainContent)();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createPageHeadline)('Projects');
  const moduleContainerDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleContainer)('my-projects');
  const moduleTitleDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleTitle)('My Projects');
  const taskContainerDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskContainer)();
  const addTaskButtonDiv = document.createElement('div');
  const addTaskButton = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createSolidPlusButton)();
  const taskListDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskList)(_localstorage__WEBPACK_IMPORTED_MODULE_2__.projectArray, 'projects');
  const formDiv = (0,_form_template__WEBPACK_IMPORTED_MODULE_1__["default"])('Project');

  addTaskButtonDiv.appendChild(addTaskButton);
  addTaskButton.id = 'add-button';
  addTaskButton.onclick = _templates__WEBPACK_IMPORTED_MODULE_0__.showForm;

  moduleContainerDiv.appendChild(moduleTitleDiv);
  moduleContainerDiv.appendChild(taskContainerDiv);

  taskContainerDiv.appendChild(addTaskButtonDiv);
  taskContainerDiv.appendChild(formDiv);
  formDiv.style.display = 'none';
  taskContainerDiv.appendChild(taskListDiv);

  mainContentDiv.appendChild(pageHeadline);
  mainContentDiv.appendChild(moduleContainerDiv);
}


/***/ }),

/***/ "./src/task-subject.js":
/*!*****************************!*\
  !*** ./src/task-subject.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ "./src/observer.js");


const inboxObserver = new _observer__WEBPACK_IMPORTED_MODULE_0__["default"]('inbox', 0);
const todayObserver = new _observer__WEBPACK_IMPORTED_MODULE_0__["default"]('today', 0);
const weekObserver = new _observer__WEBPACK_IMPORTED_MODULE_0__["default"]('week', 0);

const taskSubject = {
  taskArraysMap: new Map([]),

  subscribers: [inboxObserver, todayObserver, weekObserver],

  subscribe(observer) {
    this.subscribers.push(observer);
  },

  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(
      (item) => {
        if (item !== observer) {
          return item;
        }
      },
    );
  },

  notifyInbox(value) {
    this.subscribers.forEach((subscriber) => {
      if (subscriber.type === 'inbox') {
        subscriber.notify(value);
        subscriber.updateDOM('inbox', value);
      }
    });
  },

  notifyToday(value) {
    this.subscribers.forEach((subscriber) => {
      if (subscriber.type === 'today') {
        subscriber.notify(value);
        subscriber.updateDOM('today', value);
      }
    });
  },

  notifyWeek(value) {
    this.subscribers.forEach((subscriber) => {
      if (subscriber.type === 'week') {
        subscriber.notify(value);
        subscriber.updateDOM('week', value);
      }
    });
  },

  notify(array, value) {
    switch (array) {
      case 'today':
        this.notifyToday(value);
        break;
      case 'week':
        this.notifyWeek(value);
        break;
      case 'inbox':
        this.notifyInbox(value);
        break;
      default:
        break;
    }
  },

  updateIncrement(key, array) {
    this.taskArraysMap.set(key, array);
    this.notify(key, array.length);
  },

  updateDecrement(key, array) {
    this.taskArraysMap.set(key, array);
    this.notify(key, array.length);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskSubject);


/***/ }),

/***/ "./src/task-templates.js":
/*!*******************************!*\
  !*** ./src/task-templates.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectDiv": () => (/* binding */ createProjectDiv),
/* harmony export */   "createTaskDiv": () => (/* binding */ createTaskDiv)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ "./src/localstorage.js");
/* harmony import */ var _form_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-template */ "./src/form-template.js");




function assignPriorityClassTask(priority) {
  if (priority === 'low') {
    return 'low-p';
  }
  if (priority === 'medium') {
    return 'med-p';
  }

  return 'high-p';
}

function assignPriorityClassProject(priority) {
  if (priority === 'low') {
    return 'low-p-project';
  }
  if (priority === 'medium') {
    return 'med-p-project';
  }

  return 'high-p-project';
}

function assignPriorityImage(priority) {
  if (priority === 'low') {
    return '<img src=\'../src/assets/img/priority-low.svg\'>';
  }
  if (priority === 'medium') {
    return '<img src=\'../src/assets/img/priority-med.svg\'>';
  }

  return '<img src=\'../src/assets/img/priority-high.svg\'>';
}

function assignPriorityColorClass(priority) {
  if (priority === 'low') {
    return 'task-blue';
  }
  if (priority === 'medium') {
    return 'task-orange';
  }
  return 'task-red';
}

function assignCheckBoxID(obj) {
  const checkboxID = obj.itemTag;

  return checkboxID;
}

function createCheckBoxDiv(obj) {
  const div = document.createElement('div');
  const checkboxDiv = document.createElement('div');
  const roundDiv = document.createElement('div');
  const checkboxInput = document.createElement('input');
  const label = document.createElement('label');
  const checkboxID = assignCheckBoxID(obj);

  label.setAttribute('for', checkboxID);

  checkboxInput.id = checkboxID;
  checkboxInput.setAttribute('type', 'checkbox');
  checkboxInput.addEventListener('click', _localstorage__WEBPACK_IMPORTED_MODULE_0__.markAsComplete);

  roundDiv.classList.add('round');
  roundDiv.appendChild(checkboxInput);
  roundDiv.appendChild(label);

  checkboxDiv.appendChild(roundDiv);
  checkboxDiv.classList.add('checkbox-container');

  div.appendChild(checkboxDiv);

  return div;
}

function createTaskIconsDiv(colorClass, taskObj) {
  const iconsDiv = document.createElement('div');
  const trashIconDiv = document.createElement('div');
  const trashIconImg = document.createElement('img');
  trashIconImg.src = '../src/assets/img/trash-can-solid.svg';
  trashIconImg.classList.add('task-icon');
  trashIconImg.classList.add(colorClass);
  trashIconDiv.appendChild(trashIconImg);
  trashIconDiv.addEventListener('click', () => {
    const modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'flex';
    let deleteModal;
    if (taskObj.associatedProject !== undefined) {
      deleteModal = (0,_form_template__WEBPACK_IMPORTED_MODULE_1__.createDeleteForm)(`Delete Project ${taskObj.classname}`, taskObj);
    } else {
      deleteModal = (0,_form_template__WEBPACK_IMPORTED_MODULE_1__.createDeleteForm)(`Delete ${taskObj.classname}`, taskObj);
    }
    modal.appendChild(deleteModal);
  });

  const editIconDiv = document.createElement('div');
  editIconDiv.classList.add(taskObj.itemTag);
  const editIconImg = document.createElement('img');
  editIconImg.src = '../src/assets/img/pen-to-square-solid.svg';
  editIconImg.classList.add('task-icon');
  editIconImg.classList.add(colorClass);
  editIconDiv.appendChild(editIconImg);
  editIconDiv.addEventListener('click', () => {
    const modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'flex';
    let editModal;
    if (taskObj.associatedProject !== undefined) {
      editModal = (0,_form_template__WEBPACK_IMPORTED_MODULE_1__.createEditForm)(`Edit Project ${taskObj.classname}`, taskObj);
    } else {
      editModal = (0,_form_template__WEBPACK_IMPORTED_MODULE_1__.createEditForm)(`Edit ${taskObj.classname}`, taskObj);
    }
    modal.appendChild(editModal);
  });

  iconsDiv.appendChild(trashIconDiv);
  iconsDiv.appendChild(editIconDiv);
  iconsDiv.classList.add('icons');

  return iconsDiv;
}

function createTaskName(taskName) {
  const taskNameDiv = document.createElement('div');
  taskNameDiv.classList.add('task-name');
  taskNameDiv.innerHTML = `<h4>${taskName}</h4>`;

  return taskNameDiv;
}

function createPriority(taskPriority) {
  const priorityDiv = document.createElement('div');
  const priorityImg = assignPriorityImage(taskPriority);
  priorityDiv.innerHTML = `${priorityImg}`;
  priorityDiv.classList.add('priority');

  return priorityDiv;
}

function rotateChevron(itemTag, chevron) {
  const bottomClassName = `bottom-${itemTag}`;
  const taskModuleBottom = document.getElementsByClassName(bottomClassName)[0];

  if (taskModuleBottom.style.display === 'none' || taskModuleBottom.style.display === '') {
    chevron.style.transform = 'rotate(0)';
  } else {
    chevron.style.transform = 'rotate(180deg)';
  }
}

function collapseExpandModule(itemTag) {
  const bottomClassName = `bottom-${itemTag}`;
  const taskModuleBottom = document.getElementsByClassName(bottomClassName)[0];

  if (taskModuleBottom.style.display === 'none' || taskModuleBottom.style.display === '') {
    taskModuleBottom.style.display = 'flex';
  } else {
    taskModuleBottom.style.display = 'none';
  }
}

function createChevron(colorClass, itemTag) {
  const chevronDiv = document.createElement('div');
  const chevronImg = document.createElement('img');
  chevronImg.src = '../src/assets/img/chevron-up-solid.svg';
  chevronImg.classList.add('task-icon');
  chevronImg.classList.add(colorClass);
  chevronDiv.appendChild(chevronImg);
  chevronDiv.classList.add(itemTag);
  chevronDiv.addEventListener('click', () => {
    collapseExpandModule(itemTag);
    rotateChevron(itemTag, chevronImg);
  });

  return chevronDiv;
}

function createDueDate(dueDate) {
  const dueDateDiv = document.createElement('div');
  dueDateDiv.classList.add('deadline');

  const p = document.createElement('p');
  p.classList.add('date');

  const taskDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(dueDate), 'MM/dd/yyyy');
  p.innerText = taskDueDate;
  dueDateDiv.appendChild(p);

  return dueDateDiv;
}

function createTaskDescription(description, colorClass) {
  const div = document.createElement('div');

  const descriptionTitle = document.createElement('div');
  descriptionTitle.classList.add('uppercase');
  descriptionTitle.classList.add(colorClass);
  descriptionTitle.innerHTML = '<h5>Description</h5>';
  div.appendChild(descriptionTitle);

  const taskDescDiv = document.createElement('div');
  taskDescDiv.classList.add('description');
  taskDescDiv.innerHTML = `<p>${description}</p>`;
  div.appendChild(taskDescDiv);

  return div;
}

function createTopRowTaskDiv(taskObject, colorClass) {
  const topRowDiv = document.createElement('div');

  const checkBoxDiv = createCheckBoxDiv(taskObject);
  topRowDiv.appendChild(checkBoxDiv);

  const rightDiv = document.createElement('div');
  rightDiv.classList.add('top-row-right');

  const taskNameDiv = createTaskName(taskObject.name);
  rightDiv.appendChild(taskNameDiv);

  const priorityAndDateDiv = document.createElement('div');
  priorityAndDateDiv.classList.add('priority-due-date');

  const priorityDiv = createPriority(taskObject.priority);
  const dueDateDiv = createDueDate(taskObject.dueDate, colorClass);

  priorityAndDateDiv.appendChild(dueDateDiv);
  priorityAndDateDiv.appendChild(priorityDiv);

  rightDiv.appendChild(priorityAndDateDiv);

  const iconsDiv = createTaskIconsDiv(colorClass, taskObject);
  rightDiv.appendChild(iconsDiv);

  const chevronDiv = createChevron(colorClass, taskObject.itemTag);
  rightDiv.appendChild(chevronDiv);

  topRowDiv.appendChild(rightDiv);
  topRowDiv.classList.add('task-top-row');

  return topRowDiv;
}

function createBottomRowTaskDiv(taskObject, colorClass) {
  const bottomDiv = document.createElement('div');
  bottomDiv.classList.add('task-bottom-row');
  bottomDiv.classList.add(`bottom-${taskObject.itemTag}`);

  const taskDescriptionDiv = createTaskDescription(taskObject.description, colorClass);
  bottomDiv.appendChild(taskDescriptionDiv);

  return bottomDiv;
}

function createProjectDiv(projObject) {
  const projectDiv = document.createElement('div');
  const projectTag = projObject.itemTag;
  projectDiv.classList.add('task');
  projectDiv.classList.add(assignPriorityClassProject(projObject.priority));
  projectDiv.classList.add(projectTag);

  const colorClass = assignPriorityColorClass(projObject.priority);

  const topRow = createTopRowTaskDiv(projObject, colorClass);
  projectDiv.appendChild(topRow);

  const bottomRow = createBottomRowTaskDiv(projObject, colorClass);
  projectDiv.appendChild(bottomRow);

  return projectDiv;
}

function createTaskDiv(taskObject) {
  const taskDiv = document.createElement('div');
  const taskTag = taskObject.itemTag;
  taskDiv.classList.add('task');
  taskDiv.classList.add(assignPriorityClassTask(taskObject.priority));
  taskDiv.classList.add(taskTag);

  const colorClass = assignPriorityColorClass(taskObject.priority);

  const topRow = createTopRowTaskDiv(taskObject, colorClass);
  taskDiv.appendChild(topRow);

  const bottomRow = createBottomRowTaskDiv(taskObject, colorClass);
  taskDiv.appendChild(bottomRow);

  return taskDiv;
}


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(taskName, taskDescription, dueDate, priority, itemTag, status, associatedProject) {
    this.classname = this.constructor.name;
    this.name = taskName;
    this.description = taskDescription;
    this.dueDate = dueDate;
    this.priority = priority;
    this.itemTag = itemTag;
    this.status = status;
    this.associatedProject = associatedProject;
  }

  get classname() {
    return this._classname;
  }

  set classname(value) {
    this._classname = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    this._dueDate = value;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }

  get itemTag() {
    return this._itemTag;
  }

  set itemTag(value) {
    this._itemTag = value;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }

  get associatedProject() {
    return this._associatedProject;
  }

  set associatedProject(value) {
    this._associatedProject = value;
  }
}


/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearMainContent": () => (/* binding */ clearMainContent),
/* harmony export */   "clearProjectsNavList": () => (/* binding */ clearProjectsNavList),
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "closeFormModal": () => (/* binding */ closeFormModal),
/* harmony export */   "createModuleContainer": () => (/* binding */ createModuleContainer),
/* harmony export */   "createModuleTitle": () => (/* binding */ createModuleTitle),
/* harmony export */   "createPageDescription": () => (/* binding */ createPageDescription),
/* harmony export */   "createPageHeadline": () => (/* binding */ createPageHeadline),
/* harmony export */   "createSolidPlusButton": () => (/* binding */ createSolidPlusButton),
/* harmony export */   "createTaskContainer": () => (/* binding */ createTaskContainer),
/* harmony export */   "createTaskList": () => (/* binding */ createTaskList),
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem),
/* harmony export */   "populateProjectsNavList": () => (/* binding */ populateProjectsNavList),
/* harmony export */   "removeItemFromProjectNavColumn": () => (/* binding */ removeItemFromProjectNavColumn),
/* harmony export */   "removeItemFromTaskList": () => (/* binding */ removeItemFromTaskList),
/* harmony export */   "showForm": () => (/* binding */ showForm),
/* harmony export */   "toggleSideMenu": () => (/* binding */ toggleSideMenu),
/* harmony export */   "updateProjectList": () => (/* binding */ updateProjectList),
/* harmony export */   "updateProjectNavColumn": () => (/* binding */ updateProjectNavColumn),
/* harmony export */   "updateTaskCounterButton": () => (/* binding */ updateTaskCounterButton),
/* harmony export */   "updateTaskList": () => (/* binding */ updateTaskList),
/* harmony export */   "updateTaskListEdit": () => (/* binding */ updateTaskListEdit)
/* harmony export */ });
/* harmony import */ var _task_templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-templates */ "./src/task-templates.js");
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-page */ "./src/project-page.js");



function createPageHeadline(pageName) {
  const pageNameDiv = document.createElement('div');

  pageNameDiv.classList.add('page-name');

  pageNameDiv.innerHTML = `<h1>${pageName}</h1>`;

  return pageNameDiv;
}

function createPageDescription(description) {
  const descriptionDiv = document.createElement('div');

  descriptionDiv.innerHTML = `<h2>${description}</h2>`;

  return descriptionDiv;
}

function createModuleTitle(moduleTitle) {
  const moduleTitleDiv = document.createElement('div');

  moduleTitleDiv.innerHTML = `<h3>${moduleTitle}</h3>`;

  return moduleTitleDiv;
}

function createModuleContainer(moduleID) {
  const moduleContainerDiv = document.createElement('div');

  moduleContainerDiv.classList.add('module-container');
  moduleContainerDiv.id = moduleID;

  return moduleContainerDiv;
}

function createTaskContainer() {
  const taskContainerDiv = document.createElement('div');

  taskContainerDiv.classList.add('task-container');

  return taskContainerDiv;
}

function assignTaskListImg(page) {
  if (page === 'inbox' || page === 'project-tasks') {
    return '<img src="../src/assets/img/no-tasks-yet.svg">';
  }
  if (page === 'today' || page === 'week') {
    return '<img src="../src/assets/img/nothing-due.svg">';
  }
  if (page === 'completed') {
    return '<img src="../src/assets/img/no-tasks-projects-completed.svg">';
  }

  return '<img src="../src/assets/img/no-projects-yet.svg">';
}

function createTaskList(taskArray, page) {
  const taskListDiv = document.createElement('div');
  taskListDiv.classList.add('task-list');

  if (taskArray.length === 0) {
    taskListDiv.id = 'empty-list';

    const imgDiv = document.createElement('div');
    const img = assignTaskListImg(page);

    imgDiv.innerHTML = `${img}`;
    imgDiv.id = 'empty-img';

    taskListDiv.appendChild(imgDiv);
  } else {
    for (let i = 0; i < taskArray.length; i += 1) {
      let task;
      if (taskArray[i].classname === 'Task') {
        task = (0,_task_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskDiv)(taskArray[i]);
      } else {
        task = (0,_task_templates__WEBPACK_IMPORTED_MODULE_0__.createProjectDiv)(taskArray[i]);
      }
      taskListDiv.appendChild(task);
    }
  }

  return taskListDiv;
}

function createProjectListItem(taskObj) {
  const li = document.createElement('li');
  li.classList.add('nav-link');

  const svgDiv = document.createElement('div');
  svgDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="nav-icon"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"></path></svg>';
  li.appendChild(svgDiv);

  const projectNameDiv = document.createElement('div');
  const h6 = document.createElement('h6');

  h6.innerHTML = taskObj.name;
  projectNameDiv.appendChild(h6);
  li.appendChild(projectNameDiv);

  li.addEventListener('click', () => {
    const navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i += 1) {
      navLinks[i].classList.remove('active');
    }
    li.classList.add('active');
  });

  return li;
}

function assignProjectIDName(projectObj) {
  return `nav-${projectObj.itemTag}`;
}

function populateProjectsNavList(projectsArray) {
  const projectsNavList = document.getElementById('projects-list');

  if (projectsArray.length > 0) {
    for (let i = 0; i < projectsArray.length; i += 1) {
      const projectListItem = createProjectListItem(projectsArray[i]);
      projectListItem.id = assignProjectIDName(projectsArray[i]);

      projectsNavList.appendChild(projectListItem);
      projectListItem.addEventListener('click', () => {
        (0,_project_page__WEBPACK_IMPORTED_MODULE_1__["default"])(projectsArray[i]);
      });
    }
  }
}

function addOrRemoveEmptyImg() {
  const currentPage = document.getElementsByClassName('module-container')[0].id;
  const taskList = document.getElementsByClassName('task-list')[0];
  const task = document.getElementsByClassName('task')[0];

  if (!taskList.contains(task) && taskList.id !== 'empty-list') {
    const imgDiv = document.createElement('div');
    const img = assignTaskListImg(currentPage);

    imgDiv.innerHTML = `${img}`;
    imgDiv.id = 'empty-img';

    taskList.appendChild(imgDiv);
    taskList.id = 'empty-list';
  } else if (taskList.contains(task) && taskList.id === 'empty-list') {
    taskList.removeAttribute('id');
    const emptyImg = document.getElementById('empty-img');
    emptyImg.remove();
  }
}

function updateTaskList(taskObj) {
  const taskListDiv = document.getElementsByClassName('task-list')[0];

  let task;
  if (taskObj.classname === 'Task') {
    task = (0,_task_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskDiv)(taskObj);
  } else {
    task = (0,_task_templates__WEBPACK_IMPORTED_MODULE_0__.createProjectDiv)(taskObj);
  }

  taskListDiv.appendChild(task);

  addOrRemoveEmptyImg();
}

function removeItemFromTaskList(obj) {
  const task = document.getElementsByClassName(obj.itemTag)[0];
  const taskListDiv = document.getElementsByClassName('task-list')[0];

  taskListDiv.removeChild(task);
}

function updateTaskListEdit(obj, array) {
  const currentPage = document.getElementsByClassName('module-container')[0].id;

  if (currentPage === 'inbox' || currentPage === 'my-projects' || currentPage === 'project-page') {
    removeItemFromTaskList(obj);
    updateTaskList(obj);
  } else if (currentPage === 'today') {
    const dayResult = array[0];
    if (dayResult === 'remove day') {
      removeItemFromTaskList(obj);
    } else {
      removeItemFromTaskList(obj);
      updateTaskList(obj);
    }
  } else if (currentPage === 'week') {
    const weekResult = array[1];
    if (weekResult === 'remove week') {
      removeItemFromTaskList(obj);
    } else {
      removeItemFromTaskList(obj);
      updateTaskList(obj);
    }
  }
  addOrRemoveEmptyImg();
}

function updateProjectList(projectObj) {
  const taskListDiv = document.getElementsByClassName('task-list')[0];
  const project = (0,_task_templates__WEBPACK_IMPORTED_MODULE_0__.createProjectDiv)(projectObj);

  if (taskListDiv.id === 'empty-list') {
    taskListDiv.removeAttribute('id');
    const emptyImg = document.getElementById('empty-img');
    emptyImg.remove();
  }

  taskListDiv.appendChild(project);
}

function deleteItem(obj) {
  removeItemFromTaskList(obj);
  addOrRemoveEmptyImg();
}

function updateProjectNavColumn(projectObj) {
  const projectItem = createProjectListItem(projectObj);
  const projectsList = document.getElementById('projects-list');

  projectItem.addEventListener('click', () => {
    (0,_project_page__WEBPACK_IMPORTED_MODULE_1__["default"])(projectObj);
  });

  projectItem.id = assignProjectIDName(projectObj);
  projectsList.appendChild(projectItem);
}

function removeItemFromProjectNavColumn(obj) {
  if (obj.classname === 'Project') {
    const projectsList = document.getElementById('projects-list');
    const projectItem = document.getElementById(assignProjectIDName(obj));

    projectsList.removeChild(projectItem);
  }
}

function toggleSideMenu() {
  const navContent = document.querySelector('.nav-content');
  const sideColumn = document.getElementById('side-column');

  navContent.classList.toggle('visible');
  sideColumn.classList.toggle('full-width');
}

function createSolidPlusButton() {
  const button = document.createElement('button');

  button.classList.add('btn-solid');
  button.classList.add('btn-plus');

  button.innerHTML = '<img src="../src/assets/img/plus-solid.svg">';

  return button;
}

/** NOTIFICATION TEMPLATES * */

function createTaskCounterButtonDesktop(type, number) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.id = `${type}-notification-desktop`;

  if (type === 'today') {
    notification.classList.add('urgent');
  }

  const counter = document.createElement('h5');
  counter.classList.add('counter');
  counter.id = `${type}-counter-desktop`;

  counter.innerHTML = number;
  notification.appendChild(counter);

  const typeDiv = document.getElementById(type);
  typeDiv.appendChild(notification);
}

function createTaskCounterButtonMobile(type, number) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.id = `${type}-notification-mobile`;

  if (type === 'today') {
    notification.classList.add('urgent');
  }

  const counter = document.createElement('h5');
  counter.classList.add('counter');
  counter.id = `${type}-counter-mobile`;

  counter.innerHTML = number;
  notification.appendChild(counter);

  const typeDiv = document.getElementById(`${type}-mobile`);
  typeDiv.appendChild(notification);
}

function createTaskCounterButton(type, number) {
  createTaskCounterButtonDesktop(type, number);
  createTaskCounterButtonMobile(type, number);
}

function removeTaskCounterButton(type) {
  const notificationDesktop = document.getElementById(`${type}-notification-desktop`);
  const notificationMobile = document.getElementById(`${type}-notification-mobile`);
  notificationDesktop.remove();
  notificationMobile.remove();
}

function incrementCounterButton(type, number) {
  const counterDesktop = document.getElementById(`${type}-counter-desktop`);
  const counterMobile = document.getElementById(`${type}-counter-mobile`);

  switch (type) {
    case 'today':
      counterDesktop.innerHTML = number;
      counterMobile.innerHTML = number;
      break;
    case 'week':
      counterDesktop.innerHTML = number;
      counterMobile.innerHTML = number;
      break;
    case 'inbox':
      counterDesktop.innerHTML = number;
      counterMobile.innerHTML = number;
      break;
    default:
      break;
  }
}

function updateTaskCounterButton(type, number) {
  if (document.getElementById(`${type}-counter-desktop`) === null || document.getElementById(`${type}-counter-desktop`) === undefined) {
    if (number !== 0) {
      createTaskCounterButton(type, number);
      return 'increment';
    }
  } else if (number === 0) {
    removeTaskCounterButton(type);
    return 'decrement';
  } else {
    incrementCounterButton(type, number);
    return 'increment';
  }
}

/** BACK-END FUNCTIONS * */

function clearMainContent() {
  const mainContentDiv = document.getElementById('main-content');

  mainContentDiv.innerHTML = '';
}

function clearProjectsNavList() {
  const projectsList = document.getElementById('projects-list');

  projectsList.innerHTML = '';
}

function closeForm(event) {
  event.preventDefault();

  const form = document.getElementsByClassName('form')[0];
  const addButton = document.getElementById('add-button');
  const emptyImgDiv = document.getElementById('empty-img');

  if (emptyImgDiv !== null) {
    emptyImgDiv.style.display = 'block';
  }
  addButton.style.display = 'block';
  form.style.display = 'none';
}

function closeFormModal(event) {
  event.preventDefault();

  const modalForm = document.getElementsByClassName('modal-form')[0];
  modalForm.remove();
  const modal = document.getElementsByClassName('modal')[0];
  modal.style.display = 'none';
}

function showForm() {
  const form = document.getElementsByClassName('form')[0];
  const addbutton = document.getElementById('add-button');
  const emptyImgDiv = document.getElementById('empty-img');

  if (emptyImgDiv !== null) {
    emptyImgDiv.style.display = 'none';
  }
  addbutton.style.display = 'none';
  form.style.display = 'block';
}




/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadToday)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ "./src/localstorage.js");




function loadProjectsToday() {
  const projectsListDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskList)(_localstorage__WEBPACK_IMPORTED_MODULE_1__.projectsDueTodayArray, 'today');
  const taskContainerDiv = document.getElementsByClassName('task-container')[0];

  taskContainerDiv.innerHTML = '';
  taskContainerDiv.appendChild(projectsListDiv);
}

function loadTasksToday() {
  const tasksListDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskList)(_localstorage__WEBPACK_IMPORTED_MODULE_1__.tasksDueTodayArray, 'today');
  const taskContainerDiv = document.getElementsByClassName('task-container')[0];

  taskContainerDiv.innerHTML = '';
  taskContainerDiv.appendChild(tasksListDiv);
}

function loadAll() {
  const allListDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskList)(_localstorage__WEBPACK_IMPORTED_MODULE_1__.dueTodayArray, 'today');
  const taskContainerDiv = document.getElementsByClassName('task-container')[0];

  taskContainerDiv.innerHTML = '';
  taskContainerDiv.appendChild(allListDiv);
}

function loadInitial(div) {
  loadAll();
  div.classList.add('active');
}

function loadToday() {
  (0,_templates__WEBPACK_IMPORTED_MODULE_0__.clearMainContent)();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createPageHeadline)('Today');
  const moduleContainerDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleContainer)('today');
  const projectsDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleTitle)('Projects');
  const tasksDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleTitle)('Tasks');
  const allDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleTitle)('All');
  const taskContainerDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskContainer)();
  const taskListDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskList)(_localstorage__WEBPACK_IMPORTED_MODULE_1__.dueTodayArray, 'today');

  projectsDiv.classList.add('category');
  tasksDiv.classList.add('category');
  allDiv.classList.add('category');

  allDiv.addEventListener('click', loadAll);
  projectsDiv.addEventListener('click', loadProjectsToday);
  tasksDiv.addEventListener('click', loadTasksToday);

  const categoriesDiv = document.createElement('div');
  categoriesDiv.classList.add('categories');
  categoriesDiv.appendChild(allDiv);
  categoriesDiv.appendChild(projectsDiv);
  categoriesDiv.appendChild(tasksDiv);
  moduleContainerDiv.appendChild(categoriesDiv);
  moduleContainerDiv.appendChild(taskContainerDiv);

  taskContainerDiv.appendChild(taskListDiv);

  mainContentDiv.appendChild(pageHeadline);
  mainContentDiv.appendChild(moduleContainerDiv);

  function toggleActiveOff() {
    const categories = document.getElementsByClassName('category');
    for (let i = 0; i < categories.length; i += 1) {
      categories[i].classList.remove('active');
    }
  }

  (function toggleActiveClass() {
    const categories = document.getElementsByClassName('category');
    for (let i = 0; i < categories.length; i += 1) {
      categories[i].addEventListener('click', () => {
        toggleActiveOff();
        categories[i].classList.add('active');
      });
    }
  }());

  loadInitial(allDiv);
}


/***/ }),

/***/ "./src/week.js":
/*!*********************!*\
  !*** ./src/week.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadWeek)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ "./src/localstorage.js");




function loadProjectsWeek() {
  const projectsListDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskList)(_localstorage__WEBPACK_IMPORTED_MODULE_1__.projectsDueThisWeekArray, 'week');
  const taskContainerDiv = document.getElementsByClassName('task-container')[0];

  taskContainerDiv.innerHTML = '';
  taskContainerDiv.appendChild(projectsListDiv);
}

function loadTasksWeek() {
  const tasksListDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskList)(_localstorage__WEBPACK_IMPORTED_MODULE_1__.tasksDueThisWeekArray, 'week');
  const taskContainerDiv = document.getElementsByClassName('task-container')[0];

  taskContainerDiv.innerHTML = '';
  taskContainerDiv.appendChild(tasksListDiv);
}

function loadAll() {
  const allListDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskList)(_localstorage__WEBPACK_IMPORTED_MODULE_1__.dueThisWeekArray, 'week');
  const taskContainerDiv = document.getElementsByClassName('task-container')[0];

  taskContainerDiv.innerHTML = '';
  taskContainerDiv.appendChild(allListDiv);
}

function loadInitial(div) {
  loadAll();
  div.classList.add('active');
}

function loadWeek() {
  (0,_templates__WEBPACK_IMPORTED_MODULE_0__.clearMainContent)();

  const mainContentDiv = document.getElementById('main-content');
  const pageHeadline = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createPageHeadline)('Week');
  const moduleContainerDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleContainer)('week');
  const projectsDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleTitle)('Projects');
  const tasksDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleTitle)('Tasks');
  const allDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createModuleTitle)('All');
  const taskContainerDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskContainer)();
  const taskListDiv = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createTaskList)(_localstorage__WEBPACK_IMPORTED_MODULE_1__.dueThisWeekArray, 'week');

  projectsDiv.classList.add('category');
  tasksDiv.classList.add('category');
  allDiv.classList.add('category');

  allDiv.addEventListener('click', loadAll);
  projectsDiv.addEventListener('click', loadProjectsWeek);
  tasksDiv.addEventListener('click', loadTasksWeek);

  const categoriesDiv = document.createElement('div');
  categoriesDiv.appendChild(allDiv);
  categoriesDiv.classList.add('categories');
  categoriesDiv.appendChild(projectsDiv);
  categoriesDiv.appendChild(tasksDiv);
  moduleContainerDiv.appendChild(categoriesDiv);
  moduleContainerDiv.appendChild(taskContainerDiv);

  taskContainerDiv.appendChild(taskListDiv);

  mainContentDiv.appendChild(pageHeadline);
  mainContentDiv.appendChild(moduleContainerDiv);

  function toggleActiveOff() {
    const categories = document.getElementsByClassName('category');
    for (let i = 0; i < categories.length; i += 1) {
      categories[i].classList.remove('active');
    }
  }

  (function toggleActiveClass() {
    const categories = document.getElementsByClassName('category');
    for (let i = 0; i < categories.length; i += 1) {
      categories[i].addEventListener('click', () => {
        toggleActiveOff();
        categories[i].classList.add('active');
      });
    }
  }());

  loadInitial(allDiv);
}


/***/ }),

/***/ "./src/assets/fonts/Inter-Black.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Inter-Black.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "143c28420846d45c5834.ttf";

/***/ }),

/***/ "./src/assets/fonts/Inter-Bold.ttf":
/*!*****************************************!*\
  !*** ./src/assets/fonts/Inter-Bold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88fa7ae373b07b41ecce.ttf";

/***/ }),

/***/ "./src/assets/fonts/Inter-ExtraBold.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Inter-ExtraBold.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4a4cb7133001f282a15.ttf";

/***/ }),

/***/ "./src/assets/fonts/Inter-Medium.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Inter-Medium.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6dcbc9bed1ec438907ee.ttf";

/***/ }),

/***/ "./src/assets/fonts/Inter-Regular.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Inter-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e89cb19905e7db5591b0.ttf";

/***/ }),

/***/ "./src/assets/fonts/Inter-SemiBold.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Inter-SemiBold.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d56bb21f2399db8ad48.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _media_queries_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-queries.css */ "./src/media-queries.css");
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ "./src/localstorage.js");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today */ "./src/today.js");
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./week */ "./src/week.js");
/* harmony import */ var _completed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./completed */ "./src/completed.js");
/* harmony import */ var _projectsfolder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projectsfolder */ "./src/projectsfolder.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about */ "./src/about.js");












(function runPage() {
  (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.addItemsToLocalArrays)();
  (0,_inbox__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_projectsfolder__WEBPACK_IMPORTED_MODULE_7__.loadProjectsNavList)();

  function rotateProjectsChevron() {
    const projectsChevron = document.getElementById('projects-chevron');
    const projectsList = document.getElementById('projects-list');

    if (projectsList.style.display === 'flex' || projectsList.style.display === '') {
      projectsChevron.style.transform = 'rotate(0deg)';
    } else {
      projectsChevron.style.transform = 'rotate(180deg)';
    }
  }

  function toggleProjectsList() {
    const projectsList = document.getElementById('projects-list');
    if (projectsList.style.display === 'flex' || projectsList.style.display === '') {
      projectsList.style.display = 'none';
    } else {
      projectsList.style.display = 'flex';
    }
  }

  function toggleActiveOff() {
    const navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i += 1) {
      navLinks[i].classList.remove('active');
    }
  }

  (function toggleActiveClass() {
    const navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i += 1) {
      navLinks[i].addEventListener('click', () => {
        toggleActiveOff();
        navLinks[i].classList.add('active');
      });
    }
  }());

  const projectsChevron = document.getElementById('projects-chevron');
  projectsChevron.addEventListener('click', () => {
    toggleProjectsList();
    rotateProjectsChevron();
  });

  const inboxDesktop = document.getElementById('inbox');
  const todayDesktop = document.getElementById('today');
  const weekDesktop = document.getElementById('week');
  const completedDesktop = document.getElementById('completed');
  const projectsDesktop = document.getElementById('projects');
  const aboutDesktop = document.getElementById('about');
  const logoDesktop = document.getElementsByClassName('logo')[0];

  logoDesktop.addEventListener('click', _inbox__WEBPACK_IMPORTED_MODULE_3__["default"]);
  inboxDesktop.addEventListener('click', _inbox__WEBPACK_IMPORTED_MODULE_3__["default"]);
  todayDesktop.addEventListener('click', _today__WEBPACK_IMPORTED_MODULE_4__["default"]);
  weekDesktop.addEventListener('click', _week__WEBPACK_IMPORTED_MODULE_5__["default"]);
  completedDesktop.addEventListener('click', _completed__WEBPACK_IMPORTED_MODULE_6__["default"]);
  projectsDesktop.addEventListener('click', _projectsfolder__WEBPACK_IMPORTED_MODULE_7__["default"]);
  aboutDesktop.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_9__["default"]);

  const inboxMobile = document.getElementById('inbox-mobile');
  const todayMobile = document.getElementById('today-mobile');
  const weekMobile = document.getElementById('week-mobile');
  const completedMobile = document.getElementById('completed-mobile');
  const projectsMobile = document.getElementById('projects-mobile');
  const aboutMobile = document.getElementById('about-mobile');
  const logoMobile = document.getElementsByClassName('logo')[0];

  logoMobile.addEventListener('click', _inbox__WEBPACK_IMPORTED_MODULE_3__["default"]);
  inboxMobile.addEventListener('click', _inbox__WEBPACK_IMPORTED_MODULE_3__["default"]);
  todayMobile.addEventListener('click', _today__WEBPACK_IMPORTED_MODULE_4__["default"]);
  weekMobile.addEventListener('click', _week__WEBPACK_IMPORTED_MODULE_5__["default"]);
  completedMobile.addEventListener('click', _completed__WEBPACK_IMPORTED_MODULE_6__["default"]);
  projectsMobile.addEventListener('click', _projectsfolder__WEBPACK_IMPORTED_MODULE_7__["default"]);
  aboutMobile.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_9__["default"]);

  const hamburgerMenu = document.querySelector('.hamburger-menu');

  hamburgerMenu.addEventListener('click', _templates__WEBPACK_IMPORTED_MODULE_8__.toggleSideMenu);
}());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksU0FBUyxhQUFhLE1BQU0sWUFBWSxhQUFhLFlBQVksVUFBVSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFNBQVMsWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsUUFBUSxhQUFhLE1BQU0sWUFBWSxhQUFhLFlBQVksWUFBWSxZQUFZLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLFdBQVcsU0FBUyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsUUFBUSxhQUFhLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxRQUFRLFlBQVksTUFBTSxZQUFZLGNBQWMsV0FBVyxRQUFRLGFBQWEsTUFBTSxZQUFZLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksV0FBVyxVQUFVLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxTQUFTLGFBQWEsTUFBTSxZQUFZLGFBQWEsWUFBWSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxTQUFTLGFBQWEsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksU0FBUyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksU0FBUyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxvQkFBb0IsdUJBQXVCLHVCQUF1Qix5QkFBeUIsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLFNBQVMsWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFVBQVUsYUFBYSxXQUFXLEtBQUssVUFBVSxncUJBQWdxQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixzQkFBc0Isb0JBQW9CLCtCQUErQixLQUFLLHNKQUFzSixxQkFBcUIsS0FBSyxVQUFVLHFCQUFxQixLQUFLLFlBQVksdUJBQXVCLEtBQUssbUJBQW1CLG1CQUFtQixLQUFLLCtEQUErRCxrQkFBa0Isb0JBQW9CLEtBQUssV0FBVyxnQ0FBZ0Msd0JBQXdCLEtBQUssdUJBQXVCLHlCQUF5QixnQ0FBZ0MsdUNBQXVDLHlCQUF5QiwrQkFBK0IsNEJBQTRCLHdCQUF3Qiw0QkFBNEIsaUNBQWlDLHdCQUF3Qiw2QkFBNkIsK0JBQStCLG1DQUFtQyxnQ0FBZ0MsOEJBQThCLHlCQUF5Qix1QkFBdUIsMEJBQTBCLCtCQUErQiwrQkFBK0IsZ0NBQWdDLDZCQUE2QixrQ0FBa0Msb0NBQW9DLGlDQUFpQyxtQ0FBbUMsb0hBQW9ILEtBQUssb0JBQW9CLHFDQUFxQyx3RUFBd0UseUJBQXlCLDJCQUEyQixLQUFLLG9CQUFvQixvQ0FBb0MsdUVBQXVFLEtBQUssb0JBQW9CLHNDQUFzQyx5RUFBeUUsS0FBSyxvQkFBb0Isa0NBQWtDLHFFQUFxRSxLQUFLLG9CQUFvQix3Q0FBd0MsMEVBQTBFLEtBQUssb0JBQW9CLG1DQUFtQyxzRUFBc0UsS0FBSyxjQUFjLDBEQUEwRCx3QkFBd0IsNEJBQTRCLHVDQUF1Qyw4QkFBOEIsS0FBSyxvQkFBb0Isc0VBQXNFLHlDQUF5QyxxQkFBcUIsNEJBQTRCLEtBQUssMERBQTBELDJCQUEyQiw4QkFBOEIsS0FBSyxZQUFZLG1DQUFtQyx3QkFBd0IsS0FBSyxZQUFZLG1DQUFtQyxzQkFBc0Isd0JBQXdCLEtBQUssWUFBWSxrQ0FBa0MsNEJBQTRCLEtBQUssWUFBWSx3Q0FBd0Msd0JBQXdCLEtBQUssWUFBWSxvQ0FBb0MsMkJBQTJCLEtBQUssWUFBWSxzQ0FBc0Msd0JBQXdCLEtBQUssV0FBVywwQkFBMEIsS0FBSyxvQkFBb0Isa0NBQWtDLEtBQUssb0JBQW9CLDBCQUEwQixLQUFLLGtFQUFrRSwyQkFBMkIsK0JBQStCLHNCQUFzQiwwQkFBMEIsZ0NBQWdDLHNDQUFzQyxvQ0FBb0MsNkRBQTZELEtBQUssb0JBQW9CLHNDQUFzQyw0QkFBNEIsS0FBSywwQkFBMEIsMkNBQTJDLEtBQUssc0JBQXNCLHNDQUFzQywyQkFBMkIseUNBQXlDLGdDQUFnQyxLQUFLLDRCQUE0QiwyQ0FBMkMsZ0NBQWdDLEtBQUssNkJBQTZCLG9DQUFvQywyQkFBMkIsMENBQTBDLDhCQUE4QixLQUFLLG1DQUFtQywyQ0FBMkMsZ0NBQWdDLEtBQUsscUJBQXFCLHNDQUFzQywwQkFBMEIsS0FBSywyQkFBMkIsMkNBQTJDLEtBQUssbUJBQW1CLHNCQUFzQixvQkFBb0IsS0FBSyxvQkFBb0Isb0NBQW9DLHVCQUF1QixLQUFLLDBEQUEwRCwwQkFBMEIsOEJBQThCLHlCQUF5QixvQ0FBb0MsS0FBSyxzQkFBc0Isa0NBQWtDLHdCQUF3QixLQUFLLHlCQUF5Qix5QkFBeUIsc0JBQXNCLEtBQUssMEJBQTBCLG9DQUFvQywwQkFBMEIsK0NBQStDLEtBQUssZ0NBQWdDLDBCQUEwQixzQkFBc0IsS0FBSyxxQkFBcUIsb0JBQW9CLGdCQUFnQixLQUFLLDJHQUEyRyxzQ0FBc0MsK0JBQStCLHdCQUF3Qix5Q0FBeUMsd0JBQXdCLHdCQUF3QiwrQkFBK0IsS0FBSyxrQ0FBa0MsdUNBQXVDLEtBQUssa0NBQWtDLDJCQUEyQixLQUFLLGtCQUFrQixtQkFBbUIsMEJBQTBCLHNCQUFzQixLQUFLLGVBQWUsb0NBQW9DLDJCQUEyQixrQ0FBa0MsMkJBQTJCLDZCQUE2Qix3QkFBd0IsdUNBQXVDLCtCQUErQixLQUFLLHlCQUF5QixxQkFBcUIsbUJBQW1CLEtBQUssZUFBZSwrQ0FBK0MsK0JBQStCLHNCQUFzQixLQUFLLGtCQUFrQixzQkFBc0IsK0JBQStCLGtCQUFrQixPQUFPLCtCQUErQixzQkFBc0Isa0JBQWtCLE9BQU8sbUJBQW1CLCtCQUErQixPQUFPLCtDQUErQyxnQkFBZ0IsT0FBTywwQkFBMEIsc0JBQXNCLGtCQUFrQixPQUFPLDRCQUE0QixnQkFBZ0IsT0FBTywrREFBK0QsdUNBQXVDLDBCQUEwQiwyQkFBMkIsNkVBQTZFLEtBQUssdUJBQXVCLHNCQUFzQiwrQkFBK0Isa0JBQWtCLDZCQUE2Qix3Q0FBd0Msc0JBQXNCLEtBQUssOEVBQThFLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEtBQUssdUVBQXVFLHNCQUFzQixLQUFLLHFCQUFxQiwyQkFBMkIsS0FBSyxpREFBaUQscUNBQXFDLDJCQUEyQix3QkFBd0IsS0FBSyx5REFBeUQsc0NBQXNDLDRCQUE0QixzQkFBc0IsMEJBQTBCLCtCQUErQiw0QkFBNEIsb0JBQW9CLCtCQUErQixrQkFBa0Isb0JBQW9CLCtCQUErQiw2REFBNkQsS0FBSyxrQkFBa0IsbUNBQW1DLDJCQUEyQixLQUFLLHNCQUFzQix3R0FBd0csc0JBQXNCLEtBQUssb0VBQW9FLHVDQUF1QywyQkFBMkIsc0JBQXNCLHVFQUF1RSwrQkFBK0IscUJBQXFCLG1CQUFtQixLQUFLLG1DQUFtQyxvQkFBb0IsNkJBQTZCLGdCQUFnQixtQkFBbUIsbUJBQW1CLEtBQUssc0NBQXNDLG9CQUFvQiwwQkFBMEIsS0FBSyxtQ0FBbUMsa0JBQWtCLHlCQUF5QixtQ0FBbUMsS0FBSyw0QkFBNEIscUJBQXFCLEtBQUssa0NBQWtDLHdCQUF3QixLQUFLLHVDQUF1QyxzQkFBc0IsK0JBQStCLHVDQUF1QyxxQkFBcUIsS0FBSyxrQ0FBa0Msc0JBQXNCLCtCQUErQixrQkFBa0IsS0FBSyw2QkFBNkIsc0JBQXNCLCtCQUErQixvQkFBb0IsS0FBSyw2QkFBNkIsd0JBQXdCLEtBQUsscUNBQXFDLG9CQUFvQiw0QkFBNEIsNEJBQTRCLEtBQUssZ0NBQWdDLGdCQUFnQixLQUFLLHFDQUFxQywwQkFBMEIsS0FBSyx3Q0FBd0MsbUNBQW1DLEtBQUssOENBQThDLDRCQUE0QixLQUFLLG1CQUFtQixvQkFBb0IscUJBQXFCLEtBQUssbUJBQW1CLHNCQUFzQiw0QkFBNEIsa0JBQWtCLGdCQUFnQiwwQ0FBMEMsS0FBSyx5QkFBeUIsK0JBQStCLHdCQUF3QixLQUFLLDBCQUEwQiw0QkFBNEIsS0FBSyxlQUFlLG9CQUFvQixnQkFBZ0IsS0FBSywyRUFBMkUsc0JBQXNCLCtCQUErQixrQkFBa0IsS0FBSyx5QkFBeUIsc0JBQXNCLCtCQUErQixvQkFBb0IsZ0NBQWdDLE9BQU8sb0JBQW9CLHFCQUFxQiw4QkFBOEIsaUJBQWlCLEtBQUssNkVBQTZFLHNCQUFzQixrQkFBa0IsT0FBTyx3QkFBd0IsK0JBQStCLGdCQUFnQixPQUFPLG1CQUFtQiwrQkFBK0Isc0JBQXNCLG1DQUFtQyxPQUFPLHdCQUF3QixnQkFBZ0IsT0FBTyw4QkFBOEIsc0JBQXNCLGtCQUFrQiw0QkFBNEIsT0FBTyx3QkFBd0IsZ0JBQWdCLE9BQU8sb0JBQW9CLDRDQUE0QyxPQUFPLGtCQUFrQiw4Q0FBOEMsT0FBTyxtQkFBbUIsMkNBQTJDLE9BQU8sMEJBQTBCLGtEQUFrRCxPQUFPLDBCQUEwQiw4Q0FBOEMsT0FBTywyQkFBMkIsMkNBQTJDLE9BQU8sc0JBQXNCLHVHQUF1RyxPQUFPLDRCQUE0Qix1R0FBdUcsT0FBTyx3QkFBd0IsdUdBQXVHLE9BQU8sOEJBQThCLHdHQUF3RyxPQUFPLHFCQUFxQix5R0FBeUcsT0FBTywyQkFBMkIsd0dBQXdHLE9BQU8sc0JBQXNCLHFCQUFxQixPQUFPLGdDQUFnQyxzQkFBc0IsT0FBTyx5QkFBeUIsc0JBQXNCLGtCQUFrQiw0QkFBNEIsT0FBTywwQkFBMEIsc0JBQXNCLGtCQUFrQixnQkFBZ0IsNEJBQTRCLE9BQU8sNEJBQTRCLHNCQUFzQiwrQkFBK0Isa0JBQWtCLDZCQUE2QixPQUFPLHNCQUFzQixxQkFBcUIsdUNBQXVDLE9BQU8sa0JBQWtCLHNCQUFzQixrQkFBa0IsT0FBTyxrQkFBa0IsMkJBQTJCLE9BQU8sK0RBQStELDJCQUEyQixPQUFPLDBCQUEwQiw2Q0FBNkMsc0NBQXNDLDJCQUEyQix3QkFBd0IscUJBQXFCLGdCQUFnQiwyQkFBMkIsZUFBZSxvQkFBb0IsT0FBTyxnQ0FBZ0MsdUNBQXVDLHlCQUF5QiwyQkFBMkIsc0JBQXNCLG9CQUFvQixrQkFBa0IsbUJBQW1CLDJCQUEyQixpQkFBaUIsa0NBQWtDLG1CQUFtQixPQUFPLDZDQUE2QywyQkFBMkIsT0FBTyw2REFBNkQsdUNBQXVDLG1DQUFtQyxPQUFPLG1FQUFtRSxtQkFBbUIsT0FBTyxzRUFBc0UsMEJBQTBCLDhCQUE4Qiw0Q0FBNEMsMEJBQTBCLEtBQUssaUJBQWlCLDRCQUE0QixLQUFLLHlEQUF5RCxvQkFBb0IsOEJBQThCLDBCQUEwQixzQkFBc0IsaUJBQWlCLGNBQWMsYUFBYSxtQkFBbUIsb0NBQW9DLHVDQUF1QyxtRUFBbUUsK0RBQStELEtBQUsscUJBQXFCLDZDQUE2Qyw2QkFBNkIsb0JBQW9CLHdCQUF3QixtQkFBbUIsS0FBSyw2QkFBNkIsNkJBQTZCLEtBQUssOEJBQThCLG1CQUFtQiw0QkFBNEIsZUFBZSxLQUFLLDRCQUE0QiwwQkFBMEIsS0FBSyx3QkFBd0Isd0JBQXdCLDZCQUE2QixxRUFBcUUsbUJBQW1CLHFHQUFxRyxLQUFLLHdCQUF3Qiw2Q0FBNkMsNkJBQTZCLG9CQUFvQix3QkFBd0IsbUJBQW1CLEtBQUssNkJBQTZCLGdCQUFnQixLQUFLLDJCQUEyQix3QkFBd0IsMEJBQTBCLEtBQUssOEJBQThCLG9CQUFvQixnQkFBZ0IsMEJBQTBCLEtBQUssMEJBQTBCLHdCQUF3QixLQUFLLGlGQUFpRixvQkFBb0IsS0FBSyxtQkFBbUI7QUFDdnV1QztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3BCMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVHdEO0FBQ3hELGlFQUFlLDhEQUFhOzs7Ozs7Ozs7Ozs7Ozs7QUNENUI7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xRTtBQUNKO0FBQ1E7QUFDZDtBQUNRO0FBQ047QUFDSDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5Qix3RUFBYyxpQkFBaUI7O0FBRXhELDZFQUE2RTs7QUFFN0U7QUFDQTtBQUNBLGFBQWEscUVBQWU7QUFDNUIsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07OztBQUdOLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsMkVBQWlCLFFBQVE7O0FBRS9DLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtRUFBaUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLG9FQUFVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcs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QTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdExtQztBQUNnQjtBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ007QUFDVztBQUNULENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixNQUFNO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUscUVBQTJCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSxxRUFBMkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQTJCO0FBQy9CLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHNCQUFzQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtFQUFzQjtBQUN4QixFQUFFLDBFQUE4QjtBQUNoQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUVBQTJCO0FBQzdCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxRUFBMkI7QUFDN0I7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvREFBTyxDQUFDLG9EQUFRO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLFNBQVMsb0RBQVUsQ0FBQyxvREFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvREFBVSxDQUFDLG9EQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0RBQU8sQ0FBQyxvREFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUscUVBQTJCO0FBQ3JDO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRLHFFQUEyQjtBQUNuQztBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBFQUE4QjtBQUNoQztBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL2RzRDtBQUN0RDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQXVCO0FBQzNCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JxQjtBQUNyQjtBQUN5QztBQUN6QztBQUNlO0FBQ2YsRUFBRSw0REFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4REFBa0I7QUFDekMsMEJBQTBCLGlFQUFxQjtBQUMvQyw2QkFBNkIsaUVBQXFCO0FBQ2xELHlCQUF5Qiw2REFBaUI7QUFDMUMsMkJBQTJCLCtEQUFtQjtBQUM5QztBQUNBLHdCQUF3QixpRUFBcUI7QUFDN0Msc0JBQXNCLDBEQUFjO0FBQ3BDLGtCQUFrQiwwREFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQVE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZxQjtBQUNyQjtBQUN5QztBQUN6QztBQUM4QztBQUNEO0FBQzdDO0FBQ087QUFDUCxFQUFFLGdFQUFvQjtBQUN0QjtBQUNBLEVBQUUsbUVBQXVCLENBQUMsdURBQVk7QUFDdEM7QUFDQTtBQUNPO0FBQ1AsZ0JBQWdCLDJEQUFnQjtBQUNoQyw4Q0FBOEMsbUJBQW1CO0FBQ2pFO0FBQ0E7QUFDQSxJQUFJLHlEQUFlLENBQUMsdURBQVk7QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDZTtBQUNmLEVBQUUsNERBQWdCO0FBQ2xCO0FBQ0E7QUFDQSx1QkFBdUIsOERBQWtCO0FBQ3pDLDZCQUE2QixpRUFBcUI7QUFDbEQseUJBQXlCLDZEQUFpQjtBQUMxQywyQkFBMkIsK0RBQW1CO0FBQzlDO0FBQ0Esd0JBQXdCLGlFQUFxQjtBQUM3QyxzQkFBc0IsMERBQWMsQ0FBQyx1REFBWTtBQUNqRCxrQkFBa0IsMERBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdEQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25Ea0M7QUFDbEM7QUFDQSwwQkFBMEIsaURBQVE7QUFDbEMsMEJBQTBCLGlEQUFRO0FBQ2xDLHlCQUF5QixpREFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FaUI7QUFDSTtBQUNtQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHlEQUFjO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0VBQWdCLG1CQUFtQixrQkFBa0I7QUFDekUsTUFBTTtBQUNOLG9CQUFvQixnRUFBZ0IsV0FBVyxrQkFBa0I7QUFDakU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4REFBYyxpQkFBaUIsa0JBQWtCO0FBQ25FLE1BQU07QUFDTixrQkFBa0IsOERBQWMsU0FBUyxrQkFBa0I7QUFDM0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsWUFBWTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQU0sQ0FBQyxvREFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFlBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDblNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Qyw4Q0FBUztBQUNqRCx1Q0FBdUMsNkNBQVE7QUFDL0MsNENBQTRDLGtEQUFhO0FBQ3pELDJDQUEyQyx1REFBWTtBQUN2RCx3Q0FBd0MsOENBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHNEQUFjO0FBQ3hELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21lZGlhLXF1ZXJpZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21lZGlhLXF1ZXJpZXMuY3NzPzQzNmIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcGxldGVkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9ybS1wcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb3JtLXRlbXBsYXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2NhbHN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHNmb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLXN1YmplY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLXRlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy93ZWVrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4NHB4KSB7XFxyXFxuXFxyXFxuICAgIC8qKiBNQUlOIENPTlRBSU5FUiBQUk9QRVJUSUVTICoqL1xcclxcbiAgICBtYWluIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qKiBOQVZJR0FUSU9OIFBST1BFUlRJRVMgKiovXFxyXFxuICAgICNzaWRlLWNvbHVtbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZ2FwOiAycmVtO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNzaWRlLWNvbHVtbiAubmF2LWNvbnRlbnQge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIGZsZXg6IDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3NpZGUtY29sdW1uIC5uYXYtY29udGVudC52aXNpYmxlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3NpZGUtY29sdW1uLmZ1bGwtd2lkdGgge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3NpZGUtY29sdW1uIC5oYW1idXJnZXItbWVudSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgICAvKiogQUREIFRBU0svUFJPSkVDVCBGT1JNIFBST1BFUlRJRVMgKiovXFxyXFxuICAgIGZvcm0gZGl2LmJvdHRvbSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qKiBUQVNLIE1PRFVMRSBQUk9QRVJUSUVTICoqL1xcclxcbiAgICAudGFzayAuaWNvbnMgLm1vYmlsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFzayAuaWNvbnMgLmRlc2t0b3Age1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFzayAucHJpb3JpdHkge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFzayAudGFzay10b3Atcm93IHtcXHJcXG4gICAgICAgIGdhcDogMC41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YXNrIC50b3Atcm93LXJpZ2h0IHtcXHJcXG4gICAgICAgIGdhcDogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFzayAudGFzay1ib3R0b20tcm93IHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgLyoqIFRBU0sgTElTVCBQUk9QRVJUSUVTICoqL1xcclxcbiAgICAjZW1wdHktbGlzdCBpbWcge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcclxcbiAgICBcXHJcXG4gICAgLyoqIEdFTkVSQUwgUFJPUEVSVElFUyAqKi9cXHJcXG4gICAgXFxyXFxuICAgIG1haW4ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI21haW4tY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW0gMTByZW0gMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgICAvKiogSEVBREVSIFBST1BFUlRJRVMgKiovXFxyXFxuICAgIGhlYWRlci5tb2JpbGUge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaGVhZGVyIC5sb2dvIHtcXHJcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoZWFkZXIgLm5hdi1pY29uIHtcXHJcXG4gICAgICAgIGZpbGw6IHZhcigtLWdyYXkpO1xcclxcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBcXHJcXG4gICAgLyoqIE5BVklHQVRJT04gUFJPUEVSVElFUyAqKi9cXHJcXG4gICAgI3NpZGUtY29sdW1uIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbmF2Lm1vYmlsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbmF2Lm1vYmlsZSB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggLTRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBuYXYubW9iaWxlIHVsIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbmF2Lm1vYmlsZSBsaS5saW5rIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbmF2Lm1vYmlsZSBsaSAubmF2LWxpbmsge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGdhcDogMC4yNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBuYXYubW9iaWxlIGg2IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBuYXYubW9iaWxlIC5ub3RpZmljYXRpb24ge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAtMC41cmVtO1xcclxcbiAgICAgICAgcmlnaHQ6IC0wLjVyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21lZGlhLXF1ZXJpZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLGdDQUFnQztJQUNoQztRQUNJLGlCQUFpQjtJQUNyQjs7OztJQUlBLDRCQUE0QjtJQUM1QjtRQUNJLGFBQWE7UUFDYixTQUFTO1FBQ1QsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLE9BQU87SUFDWDs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOzs7O0lBSUEsdUNBQXVDO0lBQ3ZDO1FBQ0ksc0JBQXNCO0lBQzFCOzs7O0lBSUEsNkJBQTZCO0lBQzdCO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOzs7O0lBSUEsMkJBQTJCO0lBQzNCO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOzs7O0FBSUE7O0lBRUkseUJBQXlCOztJQUV6QjtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLDZCQUE2QjtJQUNqQzs7OztJQUlBLHdCQUF3QjtJQUN4QjtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixhQUFhO0lBQ2pCOzs7O0lBSUEsNEJBQTRCO0lBQzVCO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2YsU0FBUztRQUNULFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsYUFBYTs7UUFFYixrQkFBa0I7UUFDbEIsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osY0FBYztJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4NHB4KSB7XFxyXFxuXFxyXFxuICAgIC8qKiBNQUlOIENPTlRBSU5FUiBQUk9QRVJUSUVTICoqL1xcclxcbiAgICBtYWluIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qKiBOQVZJR0FUSU9OIFBST1BFUlRJRVMgKiovXFxyXFxuICAgICNzaWRlLWNvbHVtbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZ2FwOiAycmVtO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNzaWRlLWNvbHVtbiAubmF2LWNvbnRlbnQge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIGZsZXg6IDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3NpZGUtY29sdW1uIC5uYXYtY29udGVudC52aXNpYmxlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3NpZGUtY29sdW1uLmZ1bGwtd2lkdGgge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3NpZGUtY29sdW1uIC5oYW1idXJnZXItbWVudSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgICAvKiogQUREIFRBU0svUFJPSkVDVCBGT1JNIFBST1BFUlRJRVMgKiovXFxyXFxuICAgIGZvcm0gZGl2LmJvdHRvbSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qKiBUQVNLIE1PRFVMRSBQUk9QRVJUSUVTICoqL1xcclxcbiAgICAudGFzayAuaWNvbnMgLm1vYmlsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFzayAuaWNvbnMgLmRlc2t0b3Age1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFzayAucHJpb3JpdHkge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFzayAudGFzay10b3Atcm93IHtcXHJcXG4gICAgICAgIGdhcDogMC41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YXNrIC50b3Atcm93LXJpZ2h0IHtcXHJcXG4gICAgICAgIGdhcDogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFzayAudGFzay1ib3R0b20tcm93IHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgLyoqIFRBU0sgTElTVCBQUk9QRVJUSUVTICoqL1xcclxcbiAgICAjZW1wdHktbGlzdCBpbWcge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcclxcbiAgICBcXHJcXG4gICAgLyoqIEdFTkVSQUwgUFJPUEVSVElFUyAqKi9cXHJcXG4gICAgXFxyXFxuICAgIG1haW4ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI21haW4tY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW0gMTByZW0gMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgICAvKiogSEVBREVSIFBST1BFUlRJRVMgKiovXFxyXFxuICAgIGhlYWRlci5tb2JpbGUge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaGVhZGVyIC5sb2dvIHtcXHJcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoZWFkZXIgLm5hdi1pY29uIHtcXHJcXG4gICAgICAgIGZpbGw6IHZhcigtLWdyYXkpO1xcclxcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBcXHJcXG4gICAgLyoqIE5BVklHQVRJT04gUFJPUEVSVElFUyAqKi9cXHJcXG4gICAgI3NpZGUtY29sdW1uIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbmF2Lm1vYmlsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbmF2Lm1vYmlsZSB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggLTRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBuYXYubW9iaWxlIHVsIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbmF2Lm1vYmlsZSBsaS5saW5rIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbmF2Lm1vYmlsZSBsaSAubmF2LWxpbmsge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGdhcDogMC4yNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBuYXYubW9iaWxlIGg2IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBuYXYubW9iaWxlIC5ub3RpZmljYXRpb24ge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAtMC41cmVtO1xcclxcbiAgICAgICAgcmlnaHQ6IC0wLjVyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9JbnRlci1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0ludGVyLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9JbnRlci1TZW1pQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9JbnRlci1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0ludGVyLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9JbnRlci1CbGFjay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWJsYWNrOiAjMjIyMjIyO1xcclxcbiAgICAtLXNoYWRvdy1ibGFjazogIzBDMEMwQztcXHJcXG4gICAgLS1tb2RhbC1ibGFjazogcmdiYSgwLDAsMCwwLjQpO1xcclxcbiAgICAtLXdoaXRlOiAjRjJGMkYyO1xcclxcbiAgICAtLXVsdHJhLXdoaXRlOiAjRkZGRkZGO1xcclxcbiAgICAtLXRpdGFuaXVtOiAjRUJFQkVCO1xcclxcbiAgICAtLWdyYXk6ICM3RDdEN0Q7XFxyXFxuICAgIC0tbWlkLWdyYXk6ICNCREJEQkQ7XFxyXFxuICAgIC0tbGlnaHRlc3QtZ3JheTogI0VCRUJFQjtcXHJcXG4gICAgLS1ibHVlOiAjMDA2MkY0O1xcclxcbiAgICAtLWRhcmstYmx1ZTogIzAwNGVjNDtcXHJcXG4gICAgLS1kb2RnZXItYmx1ZTogIzM3OUZGRjtcXHJcXG4gICAgLS1jb3JuZmxvd2VyLWJsdWU6ICM1NzlBRkY7XFxyXFxuICAgIC0tdXJhbmlhbi1ibHVlOiAjQkRERkZGO1xcclxcbiAgICAtLWxpZ2h0LWJsdWU6ICNEMEUwRUY7XFxyXFxuICAgIC0tZ3JlZW46ICM3MkIwMUQ7XFxyXFxuICAgIC0tcmVkOiAjRDYyODI4O1xcclxcbiAgICAtLW9yYW5nZTogI0Y3N0YwMDtcXHJcXG4gICAgLS1kYXJrLW9yYW5nZTogI0RBNzAwMDtcXHJcXG4gICAgLS1saWdodC1ncmVlbjogI0RGRUNENDtcXHJcXG4gICAgLS1saWdodC1vcmFuZ2U6ICNGRkRDQjg7XFxyXFxuICAgIC0tbGlnaHQtcmVkOiAjRkZEREREO1xcclxcbiAgICAtLXRhc2staWNvbi1ibHVlOiAjN0I5OEIyO1xcclxcbiAgICAtLXRhc2staWNvbi1vcmFuZ2U6ICNDMDkzNjU7XFxyXFxuICAgIC0tdGFzay1pY29uLXJlZDogI0QzODk4OTtcXHJcXG4gICAgLS10YXNrLWljb24tZ3JlZW46ICM5OUE5OEM7XFxyXFxuXFxyXFxuICAgIC0tZmlsdGVyLXdoaXRlOiBpbnZlcnQoOTklKSBzZXBpYSgxMyUpIHNhdHVyYXRlKDEzNyUpIGh1ZS1yb3RhdGUoMjA4ZGVnKSBicmlnaHRuZXNzKDExMSUpIGNvbnRyYXN0KDkwJSk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyIFJlZ3VsYXInO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyIE1lZGl1bSc7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyIFNlbWlib2xkJztcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXIgQm9sZCc7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyIEV4dHJhIEJvbGQnO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlciBCbGFjayc7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyIFJlZ3VsYXInLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG5cXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICAvKiogQVRURU1QVElORyBBIEZJWEVEIFNJREUgQ09MVU1OICoqL1xcclxcbiAgICAvKmRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW0gMWZyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7Ki9cXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBHRU5FUkFMIFRFWFQgUFJPUEVSVElFUyAqKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlciBCbGFjayc7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1mYW1pbHk6ICdJbnRlciBSZWd1bGFyJztcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXIgQm9sZCc7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmg0IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlciBFeHRyYSBCb2xkJztcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oNSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXIgTWVkaXVtJztcXHJcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oNiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXIgU2VtaWJvbGQnO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwcGVyY2FzZSB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbmg1LmNvdW50ZXIge1xcclxcbiAgZm9udC1zaXplOiAwLjYyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEJVVFRPTiBQUk9QRVJUSUVTICoqL1xcclxcblxcclxcbmJ1dHRvbiwgLmJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IDAuMXMgbGluZWFyO1xcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXIsIGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXNvbGlkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5idG4tc29saWQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLW91dGxpbmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcblxcclxcbiAgICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1vdXRsaW5lOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi5idG4tb3JhbmdlLW91dGxpbmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG5cXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW9yYW5nZSk7XFxyXFxuICBib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1vcmFuZ2Utb3V0bGluZTpob3ZlciB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLW9yYW5nZSk7XFxyXFxuICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLW9yYW5nZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1vcmFuZ2U6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXBsdXMge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIGltZyB7XFxyXFxuICAgIGZpbHRlcjogdmFyKC0tZmlsdGVyLXdoaXRlKTtcXHJcXG4gICAgd2lkdGg6IDAuNzVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBDQVRFR09SWSBQUk9QRVJUSUVTICoqL1xcclxcbi5jYXRlZ29yeSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5IGgzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXIgTWVkaXVtJztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnk6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnkuYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeS5hY3RpdmU6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3JpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIElOUFVUIEZPUk0gUFJPUEVSVElFUyAqKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIGlucHV0W3R5cGU9ZGF0ZV0sIHRleHRhcmVhIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlciBSZWd1bGFyJztcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXSwgc2VsZWN0IHtcXHJcXG4gICAgcGFkZGluZzogN3B4IDAuNXJlbSA3cHggMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdOmludmFsaWQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDUuNzVyZW07XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlciBNZWRpdW0nO1xcclxcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHJcXG4gICAgLypkaXNwbGF5OiBibG9jazsqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5yZXF1aXJlZDphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcqJztcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdC1ncmF5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuICBcXHJcXG4gIGZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbnB1dHMsIC5idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmlucHV0cyB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idXR0b25zIGJ1dHRvbiwgLmJ1dHRvbnMgLmJ1dHRvbiB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGZvcm0gLmJvdHRvbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvcm0gLmJvdHRvbSBkaXYge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBNQUlOIENPTlRBSU5FUiBQUk9QRVJUSUVTICoqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIC8qKiBBVFRFTVBUSU5HIEEgRklYRUQgU0lERSBDT0xVTU4gKiovXFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG5cXHJcXG4gICAgbWF4LXdpZHRoOiA1MHJlbTtcXHJcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE0MHB4KTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIElORElWSURVQUwgUEFHRSBQUk9QRVJUSUVTICoqL1xcclxcblxcclxcbi50aXRsZS1kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEVNUFRZIFRBU0tTIFBST1BFUlRJRVMgKiovXFxyXFxuXFxyXFxuI2VtcHR5LWxpc3QgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2VtcHR5LWxpc3Qge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qKiBIRUFERVIgUFJPUEVSVElFUyAqKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogRk9PVEVSIFBST1BFUlRJRVMgKiovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxuICAgIC8qKiBISURFIEZPT1RFUiBGT1IgTk9XICoqL1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidJbnRlciBNZWRpdW0nO1xcclxcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItaWNvbiB7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMTMlKSBzYXR1cmF0ZSgxMzclKSBodWUtcm90YXRlKDIwOGRlZykgYnJpZ2h0bmVzcygxMTElKSBjb250cmFzdCg5MCUpO1xcclxcbiAgICB3aWR0aDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogU0lERSBDT0xVTU4gUFJPUEVSVElFUyAqKi9cXHJcXG5cXHJcXG4jc2lkZS1jb2x1bW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG5cXHJcXG4gICAgLyoqIEFUVEVNUFQgQSBGSVhFRCBTSURFIENPTFVNTiAqKi9cXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiNzaWRlLWNvbHVtbiAubmF2LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDNyZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTZyZW07XFxyXFxufVxcclxcblxcclxcbiNzaWRlLWNvbHVtbiAuaGFtYnVyZ2VyLW1lbnUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbiNzaWRlLWNvbHVtbiBzdmcubmF2LW1lbnUge1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBmaWxsOiB2YXIoLS13aGl0ZSk7XFxyXFxuICB0cmFuc2l0aW9uOiBmaWxsIDAuMXMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZS1jb2x1bW4gLmxvZ28ge1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxufVxcclxcblxcclxcbiNzaWRlLWNvbHVtbiAubG9nbzpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGUtY29sdW1uIC5uYXYtY29udGVudCBuYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGUtY29sdW1uIG5hdiBkaXYudG9wIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZS1jb2x1bW4gbmF2IHVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNzaWRlLWNvbHVtbiBuYXYgbGkge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNzaWRlLWNvbHVtbiAucHJvamVjdHMtbGluayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZS1jb2x1bW4gI3Byb2plY3RzIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGUtY29sdW1uICNwcm9qZWN0cy1saXN0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNzaWRlLWNvbHVtbiAjcHJvamVjdHMtY2hldnJvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBmaWxsIDAuMXMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZS1jb2x1bW4gI3Byb2plY3RzLWNoZXZyb246aG92ZXIge1xcclxcbiAgZmlsbDogdmFyKC0tbWlkLWdyYXkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWljb24ge1xcclxcbiAgICB3aWR0aDogMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMXMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbms6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWlkLWdyYXkpO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluay5hY3RpdmUge1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogUEFHRSBURU1QTEFURSBQUk9QRVJUSUVTICoqL1xcclxcblxcclxcbi5tb2R1bGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG5cXHJcXG4gICAgLyptYXJnaW4tbGVmdDogMnJlbTsqL1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogVEFTSyBNT0RVTEUgUFJPUEVSVElFUyAqKi9cXHJcXG5cXHJcXG4udGFzaywgLnRhc2staW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRhc2staW5mbyB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50YXNrIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRhc2stbmFtZSB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJpb3JpdHktZHVlLWRhdGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50YXNrLW5hbWUge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubG93LXAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWQtcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LW9yYW5nZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGlnaC1wIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcmVkKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb3ctcC1wcm9qZWN0IHtcXHJcXG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVkLXAtcHJvamVjdCB7XFxyXFxuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLW9yYW5nZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGlnaC1wLXByb2plY3Qge1xcclxcbiAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1yZWQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2stYmx1ZSB7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDYwJSkgc2VwaWEoMjklKSBzYXR1cmF0ZSgzNTclKSBodWUtcm90YXRlKDE2N2RlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDg2JSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzay1ibHVlOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTMlKSBzZXBpYSgxNyUpIHNhdHVyYXRlKDg0NiUpIGh1ZS1yb3RhdGUoMTY3ZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoODYlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrLW9yYW5nZSB7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDU5JSkgc2VwaWEoNDclKSBzYXR1cmF0ZSgzNDUlKSBodWUtcm90YXRlKDM0OWRlZykgYnJpZ2h0bmVzcyg5NCUpIGNvbnRyYXN0KDkyJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzay1vcmFuZ2U6aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCg1MCUpIHNlcGlhKDQyJSkgc2F0dXJhdGUoNDY1JSkgaHVlLXJvdGF0ZSgzNDlkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoODklKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrLXJlZCB7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDU5JSkgc2VwaWEoMTAlKSBzYXR1cmF0ZSgxNjIwJSkgaHVlLXJvdGF0ZSgzMTRkZWcpIGJyaWdodG5lc3MoMTA4JSkgY29udHJhc3QoNzUlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrLXJlZDpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDQ3JSkgc2VwaWEoMTIlKSBzYXR1cmF0ZSgxODU4JSkgaHVlLXJvdGF0ZSgzMTRkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCg3NSUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmVkaXQtaWNvbiB7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrIC5pY29ucyAubW9iaWxlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrLXRvcC1yb3cge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9wLXJvdy1yaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrLWJvdHRvbS1yb3cge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyLjI1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2staWNvbiB7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMXMgbGluZWFyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljb25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgcC5kYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgLyoqIENIRUNLQk9YIFBST1BFUlRJRVMgKiovXFxyXFxuXFxyXFxuICAucm91bmQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5yb3VuZCBsYWJlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVsdHJhLXdoaXRlKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnJvdW5kIGxhYmVsOmFmdGVyIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDNweDtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgICB3aWR0aDogN3B4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucm91bmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnJvdW5kIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnJvdW5kIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTk9USUZJQ0FUSU9OIFBST1BFUlRJRVMgKiovXFxyXFxuXFxyXFxuLm5vdGlmaWNhdGlvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkb3ctYmxhY2spO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnVyZ2VudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBFRElUIE1PREFMIFBST1BFUlRJRVMgKiovXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWZvcm0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3QtZ3JheSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGZsZXgtYmFzaXM6IDIwcmVtO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZm9ybSAuYm90dG9tIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1mb3JtIGZpZWxkc2V0IHtcXHJcXG4gZGlzcGxheTogZmxleDtcXHJcXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZm9ybSBsZWdlbmQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWZvcm0gaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tYmx1ZSlcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIFdBUk5JTkcgTU9EQUwgUFJPUEVSVElFUyAqKi9cXHJcXG5pbWcud2FybmluZyB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBmaWx0ZXI6IGludmVydCg1OSUpIHNlcGlhKDIyJSkgc2F0dXJhdGUoNjIyMyUpIGh1ZS1yb3RhdGUoMWRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDEwNiUpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FybmluZy1tb2RhbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdC1ncmF5KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgZmxleC1iYXNpczogMzdyZW07XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi53YXJuaW5nLW1vZGFsIGZvcm0ge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FybmluZy1tb2RhbCBoNSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi53YXJuaW5nLW1vZGFsIC5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FybmluZy1tb2RhbCBiIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTU9CSUxFIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG4vKiBOQVZJR0FUSU9OICovXFxyXFxubmF2Lm1vYmlsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFT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QUlGLDhCQUE4Qjs7QUFFOUI7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7Ozs7QUFJQSw0QkFBNEI7QUFDNUI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDhCQUE4QixFQUFFLG1CQUFtQjtFQUNuRCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakI7QUFDRjs7Ozs7QUFLQSwrQkFBK0I7QUFDL0I7RUFDRSxZQUFZO0VBQ1osOEZBQThGO0FBQ2hHOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7Ozs7QUFLQSxvQkFBb0I7O0FBRXBCLGVBQWU7QUFDZjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1ibGFjazogIzIyMjIyMjtcXHJcXG4gICAgLS1zaGFkb3ctYmxhY2s6ICMwQzBDMEM7XFxyXFxuICAgIC0tbW9kYWwtYmxhY2s6IHJnYmEoMCwwLDAsMC40KTtcXHJcXG4gICAgLS13aGl0ZTogI0YyRjJGMjtcXHJcXG4gICAgLS11bHRyYS13aGl0ZTogI0ZGRkZGRjtcXHJcXG4gICAgLS10aXRhbml1bTogI0VCRUJFQjtcXHJcXG4gICAgLS1ncmF5OiAjN0Q3RDdEO1xcclxcbiAgICAtLW1pZC1ncmF5OiAjQkRCREJEO1xcclxcbiAgICAtLWxpZ2h0ZXN0LWdyYXk6ICNFQkVCRUI7XFxyXFxuICAgIC0tYmx1ZTogIzAwNjJGNDtcXHJcXG4gICAgLS1kYXJrLWJsdWU6ICMwMDRlYzQ7XFxyXFxuICAgIC0tZG9kZ2VyLWJsdWU6ICMzNzlGRkY7XFxyXFxuICAgIC0tY29ybmZsb3dlci1ibHVlOiAjNTc5QUZGO1xcclxcbiAgICAtLXVyYW5pYW4tYmx1ZTogI0JEREZGRjtcXHJcXG4gICAgLS1saWdodC1ibHVlOiAjRDBFMEVGO1xcclxcbiAgICAtLWdyZWVuOiAjNzJCMDFEO1xcclxcbiAgICAtLXJlZDogI0Q2MjgyODtcXHJcXG4gICAgLS1vcmFuZ2U6ICNGNzdGMDA7XFxyXFxuICAgIC0tZGFyay1vcmFuZ2U6ICNEQTcwMDA7XFxyXFxuICAgIC0tbGlnaHQtZ3JlZW46ICNERkVDRDQ7XFxyXFxuICAgIC0tbGlnaHQtb3JhbmdlOiAjRkZEQ0I4O1xcclxcbiAgICAtLWxpZ2h0LXJlZDogI0ZGRERERDtcXHJcXG4gICAgLS10YXNrLWljb24tYmx1ZTogIzdCOThCMjtcXHJcXG4gICAgLS10YXNrLWljb24tb3JhbmdlOiAjQzA5MzY1O1xcclxcbiAgICAtLXRhc2staWNvbi1yZWQ6ICNEMzg5ODk7XFxyXFxuICAgIC0tdGFzay1pY29uLWdyZWVuOiAjOTlBOThDO1xcclxcblxcclxcbiAgICAtLWZpbHRlci13aGl0ZTogaW52ZXJ0KDk5JSkgc2VwaWEoMTMlKSBzYXR1cmF0ZSgxMzclKSBodWUtcm90YXRlKDIwOGRlZykgYnJpZ2h0bmVzcygxMTElKSBjb250cmFzdCg5MCUpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlciBSZWd1bGFyJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0ludGVyLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyIE1lZGl1bSc7XFxyXFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9JbnRlci1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlciBTZW1pYm9sZCc7XFxyXFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9JbnRlci1TZW1pQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyIEJvbGQnO1xcclxcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvSW50ZXItQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyIEV4dHJhIEJvbGQnO1xcclxcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvSW50ZXItRXh0cmFCb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXIgQmxhY2snO1xcclxcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvSW50ZXItQmxhY2sudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlciBSZWd1bGFyJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuXFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgLyoqIEFUVEVNUFRJTkcgQSBGSVhFRCBTSURFIENPTFVNTiAqKi9cXHJcXG4gICAgLypkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtIDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyovXFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogR0VORVJBTCBURVhUIFBST1BFUlRJRVMgKiovXFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXIgQmxhY2snO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXIgUmVndWxhcic7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyIEJvbGQnO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oNCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXIgRXh0cmEgQm9sZCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDUge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyIE1lZGl1bSc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDYge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyIFNlbWlib2xkJztcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi51cHBlcmNhc2Uge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5oNS5jb3VudGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC42MjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBCVVRUT04gUFJPUEVSVElFUyAqKi9cXHJcXG5cXHJcXG5idXR0b24sIC5idXR0b24ge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGxpbmVhcjtcXHJcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLCBjb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1zb2xpZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXNvbGlkOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1vdXRsaW5lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1ibHVlKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XFxyXFxufVxcclxcblxcclxcbi5idG4tb3V0bGluZTpob3ZlciB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLW9yYW5nZS1vdXRsaW5lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XFxyXFxufVxcclxcblxcclxcbi5idG4tb3JhbmdlLW91dGxpbmU6aG92ZXIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1vcmFuZ2UpO1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1vcmFuZ2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5idG4tb3JhbmdlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wbHVzIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiBpbWcge1xcclxcbiAgICBmaWx0ZXI6IHZhcigtLWZpbHRlci13aGl0ZSk7XFxyXFxuICAgIHdpZHRoOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogQ0FURUdPUlkgUFJPUEVSVElFUyAqKi9cXHJcXG4uY2F0ZWdvcnkge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeSBoMyB7XFxyXFxuICBmb250LWZhbWlseTogJ0ludGVyIE1lZGl1bSc7XFxyXFxuICBsaW5lLWhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5LmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnkuYWN0aXZlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yaWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBJTlBVVCBGT1JNIFBST1BFUlRJRVMgKiovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LCBpbnB1dFt0eXBlPWRhdGVdLCB0ZXh0YXJlYSB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXIgUmVndWxhcic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV0sIHNlbGVjdCB7XFxyXFxuICAgIHBhZGRpbmc6IDdweCAwLjVyZW0gN3B4IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXTppbnZhbGlkIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiA1Ljc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXIgTWVkaXVtJztcXHJcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuXFxyXFxuICAgIC8qZGlzcGxheTogYmxvY2s7Ki9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVxdWlyZWQ6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnKic7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3QtZ3JheSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcbiAgXFxyXFxuICBmb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW5wdXRzLCAuYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbnB1dHMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnV0dG9ucyBidXR0b24sIC5idXR0b25zIC5idXR0b24ge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBmb3JtIC5ib3R0b20ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb3JtIC5ib3R0b20gZGl2IHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTUFJTiBDT05UQUlORVIgUFJPUEVSVElFUyAqKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAvKiogQVRURU1QVElORyBBIEZJWEVEIFNJREUgQ09MVU1OICoqL1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjByZW07XFxyXFxufVxcclxcblxcclxcbiNtYWluLWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuXFxyXFxuICAgIG1heC13aWR0aDogNTByZW07XFxyXFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCk7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBJTkRJVklEVUFMIFBBR0UgUFJPUEVSVElFUyAqKi9cXHJcXG5cXHJcXG4udGl0bGUtZGVzY3JpcHRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBFTVBUWSBUQVNLUyBQUk9QRVJUSUVTICoqL1xcclxcblxcclxcbiNlbXB0eS1saXN0IGltZyB7XFxyXFxuICAgIGhlaWdodDogMjVyZW07XFxyXFxufVxcclxcblxcclxcbiNlbXB0eS1saXN0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiogSEVBREVSIFBST1BFUlRJRVMgKiovXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcblxcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEZPT1RFUiBQUk9QRVJUSUVTICoqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcbiAgICAvKiogSElERSBGT09URVIgRk9SIE5PVyAqKi9cXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgICBmb250LWZhbWlseTonSW50ZXIgTWVkaXVtJztcXHJcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWljb24ge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDEzJSkgc2F0dXJhdGUoMTM3JSkgaHVlLXJvdGF0ZSgyMDhkZWcpIGJyaWdodG5lc3MoMTExJSkgY29udHJhc3QoOTAlKTtcXHJcXG4gICAgd2lkdGg6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIFNJREUgQ09MVU1OIFBST1BFUlRJRVMgKiovXFxyXFxuXFxyXFxuI3NpZGUtY29sdW1uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuXFxyXFxuICAgIC8qKiBBVFRFTVBUIEEgRklYRUQgU0lERSBDT0xVTU4gKiovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZS1jb2x1bW4gLm5hdi1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDE2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZS1jb2x1bW4gLmhhbWJ1cmdlci1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZS1jb2x1bW4gc3ZnLm5hdi1tZW51IHtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgZmlsbDogdmFyKC0td2hpdGUpO1xcclxcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjFzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGUtY29sdW1uIC5sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZS1jb2x1bW4gLmxvZ286aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlLWNvbHVtbiAubmF2LWNvbnRlbnQgbmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNzaWRlLWNvbHVtbiBuYXYgZGl2LnRvcCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGUtY29sdW1uIG5hdiB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZS1jb2x1bW4gbmF2IGxpIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZS1jb2x1bW4gLnByb2plY3RzLWxpbmsge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGUtY29sdW1uICNwcm9qZWN0cyB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiNzaWRlLWNvbHVtbiAjcHJvamVjdHMtbGlzdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZS1jb2x1bW4gI3Byb2plY3RzLWNoZXZyb24ge1xcclxcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjFzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGUtY29sdW1uICNwcm9qZWN0cy1jaGV2cm9uOmhvdmVyIHtcXHJcXG4gIGZpbGw6IHZhcigtLW1pZC1ncmF5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBmbGV4OiAxO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1pZC1ncmF5KTtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsuYWN0aXZlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmsge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIFBBR0UgVEVNUExBVEUgUFJPUEVSVElFUyAqKi9cXHJcXG5cXHJcXG4ubW9kdWxlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxuXFxyXFxuICAgIC8qbWFyZ2luLWxlZnQ6IDJyZW07Ki9cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCB7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIFRBU0sgTU9EVUxFIFBST1BFUlRJRVMgKiovXFxyXFxuXFxyXFxuLnRhc2ssIC50YXNrLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50YXNrLWluZm8ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGFzayB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50YXNrLW5hbWUge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByaW9yaXR5LWR1ZS1kYXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGFzay1uYW1lIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvdy1wIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVkLXAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1vcmFuZ2UpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhpZ2gtcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXJlZCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG93LXAtcHJvamVjdCB7XFxyXFxuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lZC1wLXByb2plY3Qge1xcclxcbiAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhpZ2gtcC1wcm9qZWN0IHtcXHJcXG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tcmVkKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrLWJsdWUge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDI5JSkgc2F0dXJhdGUoMzU3JSkgaHVlLXJvdGF0ZSgxNjdkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg4NiUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2stYmx1ZTpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDUzJSkgc2VwaWEoMTclKSBzYXR1cmF0ZSg4NDYlKSBodWUtcm90YXRlKDE2N2RlZykgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDg2JSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzay1vcmFuZ2Uge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCg1OSUpIHNlcGlhKDQ3JSkgc2F0dXJhdGUoMzQ1JSkgaHVlLXJvdGF0ZSgzNDlkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCg5MiUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2stb3JhbmdlOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTAlKSBzZXBpYSg0MiUpIHNhdHVyYXRlKDQ2NSUpIGh1ZS1yb3RhdGUoMzQ5ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDg5JSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzay1yZWQge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCg1OSUpIHNlcGlhKDEwJSkgc2F0dXJhdGUoMTYyMCUpIGh1ZS1yb3RhdGUoMzE0ZGVnKSBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDc1JSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzay1yZWQ6aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCg0NyUpIHNlcGlhKDEyJSkgc2F0dXJhdGUoMTg1OCUpIGh1ZS1yb3RhdGUoMzE0ZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoNzUlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5lZGl0LWljb24ge1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzayAuaWNvbnMgLm1vYmlsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzay10b3Atcm93IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvcC1yb3ctcmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzay1ib3R0b20tcm93IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMi4yNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrLWljb24ge1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjFzIGxpbmVhcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pY29ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHAuZGF0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gIC8qKiBDSEVDS0JPWCBQUk9QRVJUSUVTICoqL1xcclxcblxcclxcbiAgLnJvdW5kIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucm91bmQgbGFiZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11bHRyYS13aGl0ZSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5yb3VuZCBsYWJlbDphZnRlciB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgIGxlZnQ6IDRweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDVweDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgd2lkdGg6IDdweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnJvdW5kIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5yb3VuZCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5yb3VuZCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE5PVElGSUNBVElPTiBQUk9QRVJUSUVTICoqL1xcclxcblxcclxcbi5ub3RpZmljYXRpb24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZG93LWJsYWNrKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi51cmdlbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogRURJVCBNT0RBTCBQUk9QRVJUSUVTICoqL1xcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1mb3JtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWdyYXkpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBmbGV4LWJhc2lzOiAyMHJlbTtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWZvcm0gLmJvdHRvbSB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZm9ybSBmaWVsZHNldCB7XFxyXFxuIGRpc3BsYXk6IGZsZXg7XFxyXFxuIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWZvcm0gbGVnZW5kIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1mb3JtIGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUpXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBXQVJOSU5HIE1PREFMIFBST1BFUlRJRVMgKiovXFxyXFxuaW1nLndhcm5pbmcge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoNTklKSBzZXBpYSgyMiUpIHNhdHVyYXRlKDYyMjMlKSBodWUtcm90YXRlKDFkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDYlKTtcXHJcXG59XFxyXFxuXFxyXFxuLndhcm5pbmctbW9kYWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3QtZ3JheSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGZsZXgtYmFzaXM6IDM3cmVtO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FybmluZy1tb2RhbCBmb3JtIHtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndhcm5pbmctbW9kYWwgaDUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FybmluZy1tb2RhbCAuZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndhcm5pbmctbW9kYWwgYiB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1PQklMRSBTVFlMRVMgKiovXFxyXFxuXFxyXFxuLyogTkFWSUdBVElPTiAqL1xcclxcbm5hdi5tb2JpbGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIFIoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIEkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gZShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiBCKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gWChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24geChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIHQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gVChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lZGlhLXF1ZXJpZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZWRpYS1xdWVyaWVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xyXG4gIGNyZWF0ZVBhZ2VIZWFkbGluZSwgY2xlYXJNYWluQ29udGVudCwgY3JlYXRlTW9kdWxlVGl0bGUsIGNyZWF0ZVBhZ2VEZXNjcmlwdGlvbiwgY3JlYXRlTW9kdWxlQ29udGFpbmVyLFxyXG59IGZyb20gJy4vdGVtcGxhdGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcclxuICBjbGVhck1haW5Db250ZW50KCk7XHJcblxyXG4gIGNvbnN0IG1haW5Db250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudCcpO1xyXG4gIGNvbnN0IHBhZ2VIZWFkbGluZSA9IGNyZWF0ZVBhZ2VIZWFkbGluZSgnQWJvdXQgVGhpcyBQcm9qZWN0Jyk7XHJcbiAgY29uc3QgcGFnZURlc2NyaXB0aW9uID0gY3JlYXRlUGFnZURlc2NyaXB0aW9uKCdUaGlzIFRvLURvIGFwcCB3YXMgY3JlYXRlZCBhcyBwYXJ0IG9mIFRoZSBPZGluIFByb2plY3QgY3VycmljdWx1bS4nKTtcclxuICBjb25zdCBtb2R1bGVDb250YWluZXJEaXYgPSBjcmVhdGVNb2R1bGVDb250YWluZXIoJ2Fib3V0Jyk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RTdW1tYXJ5RGl2ID0gY3JlYXRlTW9kdWxlVGl0bGUoJ1Byb2plY3QgU3VtbWFyeScpO1xyXG5cclxuICBjb25zdCBzdW1tYXJ5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgc3VtbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBnaXRIdWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBzdW1tYXJ5LmlubmVySFRNTCA9IGBUaGlzIFRvLURvIGFwcCBpcyBhIHNpbXBsZSB0YXNrLXRyYWNrZXIgYXBwIGludGVuZGVkIHRvIGhlbHAgb3JnYW5pemUgYW5kIGtlZXAgdHJhY2sgb2YgdGFza3MgZm9yIHRoZSBhdmVyYWdlIHBlcnNvbi4gVGhpcyBwcm9qZWN0IHdhcyB3cml0dGVuIGluIFZhbmlsbGEgSmF2YXNjcmlwdCBhbmQgd2FzIHNldCB1cCB1c2luZyBXZWJwYWNrLiBUaGUgY29kZSBmb3IgdGhpcyBhcHAgdXRpbGl6ZXMgYW5kIGRlbW9uc3RyYXRlcyB0aGUgZm9sbG93aW5nIGNvbmNlcHRzOlxyXG4gICAgPHVsPlxyXG4gICAgPGxpPi0gQ2xhc3NlczwvbGk+XHJcbiAgICA8bGk+LSBNb2R1bGUgUGF0dGVybjwvbGk+XHJcbiAgICA8bGk+LSBPYnNlcnZlciBQYXR0ZXJuPC9saT5cclxuICAgIDxsaT4tIEVTNiBNb2R1bGVzPC9saT5cclxuICAgIDxsaT4tIFJlc3BvbnNpdmUgRGVzaWduPC9saT5cclxuICAgIDwvdWw+YDtcclxuXHJcbiAgZ2l0SHViTGluay5pbm5lckhUTUwgPSAnRmVlbCBmcmVlIHRvIHZpZXcgdGhlIGNvZGUgaW4gdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmJlbG1vbnRlL3RvLWRvLWxpc3RcIiB0YXJnZXQ9XCJfYmxhbmtcIj5HaXRIdWIgcmVwb3NpdG9yeTwvYT4uJztcclxuXHJcbiAgc3VtbWFyeURpdi5hcHBlbmRDaGlsZChzdW1tYXJ5KTtcclxuICBzdW1tYXJ5RGl2LmFwcGVuZENoaWxkKGdpdEh1YkxpbmspO1xyXG4gIG1vZHVsZUNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0U3VtbWFyeURpdik7XHJcbiAgbW9kdWxlQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHN1bW1hcnlEaXYpO1xyXG5cclxuICBjb25zdCB0aXRsZUFuZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGl0bGVBbmREZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwYWdlSGVhZGxpbmUpO1xyXG4gIHRpdGxlQW5kRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocGFnZURlc2NyaXB0aW9uKTtcclxuICB0aXRsZUFuZERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWRlc2NyaXB0aW9uJyk7XHJcblxyXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKHRpdGxlQW5kRGVzY3JpcHRpb24pO1xyXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKG1vZHVsZUNvbnRhaW5lckRpdik7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVQYWdlSGVhZGxpbmUsIGNsZWFyTWFpbkNvbnRlbnQsIGNyZWF0ZU1vZHVsZVRpdGxlLCBjcmVhdGVNb2R1bGVDb250YWluZXIsIGNyZWF0ZVRhc2tDb250YWluZXIsIGNyZWF0ZVRhc2tMaXN0LFxyXG59IGZyb20gJy4vdGVtcGxhdGVzJztcclxuXHJcbmltcG9ydCB7IGNvbXBsZXRlZEFycmF5IH0gZnJvbSAnLi9sb2NhbHN0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbXBsZXRlZCgpIHtcclxuICBjbGVhck1haW5Db250ZW50KCk7XHJcblxyXG4gIGNvbnN0IG1haW5Db250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudCcpO1xyXG4gIGNvbnN0IHBhZ2VIZWFkbGluZSA9IGNyZWF0ZVBhZ2VIZWFkbGluZSgnQ29tcGxldGVkJyk7XHJcbiAgY29uc3QgbW9kdWxlQ29udGFpbmVyRGl2ID0gY3JlYXRlTW9kdWxlQ29udGFpbmVyKCdjb21wbGV0ZWQnKTtcclxuICBjb25zdCBtb2R1bGVUaXRsZURpdiA9IGNyZWF0ZU1vZHVsZVRpdGxlKCdNeSBDb21wbGV0ZWQgVGFza3MnKTtcclxuICBjb25zdCB0YXNrQ29udGFpbmVyRGl2ID0gY3JlYXRlVGFza0NvbnRhaW5lcigpO1xyXG4gIGNvbnN0IHRhc2tMaXN0RGl2ID0gY3JlYXRlVGFza0xpc3QoY29tcGxldGVkQXJyYXksICdjb21wbGV0ZWQnKTtcclxuXHJcbiAgbW9kdWxlQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG1vZHVsZVRpdGxlRGl2KTtcclxuICBtb2R1bGVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lckRpdik7XHJcblxyXG4gIHRhc2tDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGFza0xpc3REaXYpO1xyXG5cclxuICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChwYWdlSGVhZGxpbmUpO1xyXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKG1vZHVsZUNvbnRhaW5lckRpdik7XHJcbn1cclxuIiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrcyc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdHMnO1xyXG5pbXBvcnQgYWRkSXRlbVRvU3RvcmFnZSwge1xyXG4gIGFzc2lnbkl0ZW1OYW1lLCB1cGRhdGVQcm9qZWN0SXRlbSwgdXBkYXRlSXRlbVRvU3RvcmFnZSwgZGVsZXRlSXRlbUZyb21TdG9yYWdlLFxyXG59IGZyb20gJy4vbG9jYWxzdG9yYWdlJztcclxuaW1wb3J0IHtcclxuICB1cGRhdGVUYXNrTGlzdCwgdXBkYXRlVGFza0xpc3RFZGl0LCB1cGRhdGVQcm9qZWN0TGlzdCwgdXBkYXRlUHJvamVjdE5hdkNvbHVtbiwgZGVsZXRlSXRlbSxcclxufSBmcm9tICcuL3RlbXBsYXRlcyc7XHJcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RMaW5rIH0gZnJvbSAnLi9wcm9qZWN0c2ZvbGRlcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1Rhc2tGb3JtKGV2ZW50KSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xyXG4gIGNvbnN0IGl0ZW1UYWcgPSBhc3NpZ25JdGVtTmFtZSgpO1xyXG4gIGNvbnN0IHN0YXR1cyA9ICdpbi1wcm9ncmVzcyc7XHJcblxyXG4gIGNvbnN0IHRhc2tPYmogPSBuZXcgVGFzayhuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGl0ZW1UYWcsIHN0YXR1cyk7XHJcblxyXG4gIGFkZEl0ZW1Ub1N0b3JhZ2UodGFza09iaik7XHJcbiAgdXBkYXRlVGFza0xpc3QodGFza09iaik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUHJvamVjdEZvcm0oZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XHJcbiAgY29uc3QgaXRlbVRhZyA9IGFzc2lnbkl0ZW1OYW1lKCk7XHJcbiAgY29uc3Qgc3RhdHVzID0gJ2luLXByb2dyZXNzJztcclxuXHJcbiAgY29uc3QgcHJvamVjdE9iaiA9IG5ldyBQcm9qZWN0KG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXRlbVRhZywgc3RhdHVzKTtcclxuXHJcbiAgYWRkSXRlbVRvU3RvcmFnZShwcm9qZWN0T2JqKTtcclxuICB1cGRhdGVQcm9qZWN0TGlzdChwcm9qZWN0T2JqKTtcclxuICB1cGRhdGVQcm9qZWN0TmF2Q29sdW1uKHByb2plY3RPYmopO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1Byb2plY3RUYXNrRm9ybShldmVudCwgcHJvamVjdE9iaikge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1kYXRlJykudmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZTtcclxuICBjb25zdCBpdGVtVGFnID0gYXNzaWduSXRlbU5hbWUoKTtcclxuICBjb25zdCBzdGF0dXMgPSAnaW4tcHJvZ3Jlc3MnO1xyXG4gIGNvbnN0IGFzc29jaWF0ZWRQcm9qZWN0ID0gcHJvamVjdE9iai5pdGVtVGFnO1xyXG5cclxuICBjb25zdCB0YXNrT2JqID0gbmV3IFRhc2sobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpdGVtVGFnLCBzdGF0dXMsIGFzc29jaWF0ZWRQcm9qZWN0KTtcclxuXHJcbiAgcHJvamVjdE9iai5pblByb2dyZXNzVGFza0FycmF5LnB1c2godGFza09iaik7XHJcblxyXG4gIHVwZGF0ZVByb2plY3RJdGVtKHByb2plY3RPYmopO1xyXG4gIGFkZEl0ZW1Ub1N0b3JhZ2UodGFza09iaik7XHJcbiAgdXBkYXRlVGFza0xpc3QodGFza09iaik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzTW9kaWZ5VGFza0Zvcm0oZXZlbnQsIHRhc2tPYmopIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS1lZGl0JykudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24tZWRpdCcpLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUtZWRpdCcpLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5LWVkaXQnKS52YWx1ZTtcclxuICBjb25zdCB7IGl0ZW1UYWcgfSA9IHRhc2tPYmo7XHJcbiAgY29uc3QgeyBzdGF0dXMgfSA9IHRhc2tPYmo7XHJcbiAgY29uc3QgeyBhc3NvY2lhdGVkUHJvamVjdCB9ID0gdGFza09iajtcclxuXHJcbiAgY29uc3QgZWRpdGVkVGFza09iaiA9IG5ldyBUYXNrKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXRlbVRhZywgc3RhdHVzLCBhc3NvY2lhdGVkUHJvamVjdCk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVJlc3VsdEFycmF5ID0gdXBkYXRlSXRlbVRvU3RvcmFnZShlZGl0ZWRUYXNrT2JqKTtcclxuXHJcbiAgdXBkYXRlVGFza0xpc3RFZGl0KGVkaXRlZFRhc2tPYmosIHVwZGF0ZVJlc3VsdEFycmF5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NNb2RpZnlQcm9qZWN0Rm9ybShldmVudCwgcHJvak9iaikge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lLWVkaXQnKS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1lZGl0JykudmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZS1lZGl0JykudmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktZWRpdCcpLnZhbHVlO1xyXG4gIGNvbnN0IHsgaXRlbVRhZyB9ID0gcHJvak9iajtcclxuICBjb25zdCB7IHN0YXR1cyB9ID0gcHJvak9iajtcclxuXHJcbiAgY29uc3QgZWRpdGVkUHJvamVjdE9iaiA9IG5ldyBQcm9qZWN0KG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXRlbVRhZywgc3RhdHVzKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUmVzdWx0QXJyYXkgPSB1cGRhdGVJdGVtVG9TdG9yYWdlKGVkaXRlZFByb2plY3RPYmopO1xyXG5cclxuICB1cGRhdGVUYXNrTGlzdEVkaXQoZWRpdGVkUHJvamVjdE9iaiwgdXBkYXRlUmVzdWx0QXJyYXkpO1xyXG4gIHVwZGF0ZVByb2plY3RMaW5rKGVkaXRlZFByb2plY3RPYmopO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc01vZGlmeVByb2plY3RUYXNrRm9ybShldmVudCwgdGFza09iaikge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS1lZGl0JykudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24tZWRpdCcpLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUtZWRpdCcpLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5LWVkaXQnKS52YWx1ZTtcclxuICBjb25zdCB7IGl0ZW1UYWcgfSA9IHRhc2tPYmo7XHJcbiAgY29uc3QgeyBzdGF0dXMgfSA9IHRhc2tPYmo7XHJcbiAgY29uc3QgeyBhc3NvY2lhdGVkUHJvamVjdCB9ID0gdGFza09iajtcclxuXHJcbiAgY29uc3QgZWRpdGVkU3ViVGFzayA9IG5ldyBUYXNrKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXRlbVRhZywgc3RhdHVzLCBhc3NvY2lhdGVkUHJvamVjdCk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVJlc3VsdEFycmF5ID0gdXBkYXRlSXRlbVRvU3RvcmFnZShlZGl0ZWRTdWJUYXNrKTtcclxuXHJcbiAgdXBkYXRlVGFza0xpc3RFZGl0KGVkaXRlZFN1YlRhc2ssIHVwZGF0ZVJlc3VsdEFycmF5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NEZWxldGVUYXNrRm9ybShldmVudCwgdGFza09iaikge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGRlbGV0ZUl0ZW0odGFza09iaik7XHJcbiAgZGVsZXRlSXRlbUZyb21TdG9yYWdlKHRhc2tPYmopO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0RlbGV0ZVByb2plY3RGb3JtKGV2ZW50LCBwcm9qT2JqKSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgZGVsZXRlSXRlbShwcm9qT2JqKTtcclxuICBkZWxldGVJdGVtRnJvbVN0b3JhZ2UocHJvak9iaik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzRGVsZXRlUHJvamVjdFRhc2tGb3JtKGV2ZW50LCBzdWJUYXNrT2JqKSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgZGVsZXRlSXRlbShzdWJUYXNrT2JqKTtcclxuICBkZWxldGVJdGVtRnJvbVN0b3JhZ2Uoc3ViVGFza09iaik7XHJcbn1cclxuIiwiaW1wb3J0IHsgY2xvc2VGb3JtLCBjbG9zZUZvcm1Nb2RhbCB9IGZyb20gJy4vdGVtcGxhdGVzJztcclxuaW1wb3J0IHtcclxuICBwcm9jZXNzRGVsZXRlUHJvamVjdEZvcm0sXHJcbiAgcHJvY2Vzc0RlbGV0ZVByb2plY3RUYXNrRm9ybSxcclxuICBwcm9jZXNzRGVsZXRlVGFza0Zvcm0sXHJcbiAgcHJvY2Vzc01vZGlmeVByb2plY3RGb3JtLCBwcm9jZXNzTW9kaWZ5UHJvamVjdFRhc2tGb3JtLCBwcm9jZXNzTW9kaWZ5VGFza0Zvcm0sIHByb2Nlc3NQcm9qZWN0Rm9ybSwgcHJvY2Vzc1Byb2plY3RUYXNrRm9ybSwgcHJvY2Vzc1Rhc2tGb3JtLFxyXG59IGZyb20gJy4vZm9ybS1wcm9jZXNzb3InO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ291bnRlcihpbnB1dCwgbWF4TGVuZ3RoKSB7XHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBjb3VudGVyLmlkID0gJ2NvdW50ZXInO1xyXG4gIGNvdW50ZXIuaW5uZXJIVE1MID0gbWF4TGVuZ3RoO1xyXG5cclxuICBjb25zdCBtYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgbWF4LmlubmVySFRNTCA9IGAvJHttYXhMZW5ndGh9YDtcclxuXHJcbiAgc3Bhbi5hcHBlbmRDaGlsZChjb3VudGVyKTtcclxuICBzcGFuLmFwcGVuZENoaWxkKG1heCk7XHJcblxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgY291bnRlci5pbm5lckhUTUwgPSBpbnB1dC5tYXhMZW5ndGggLSBpbnB1dC52YWx1ZS5sZW5ndGg7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBzcGFuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYW1lSW5wdXQodHlwZSkge1xyXG4gIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpbnB1dE5hbWUgPSAnbmFtZSc7XHJcblxyXG4gIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIG5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ3JlcXVpcmVkJyk7XHJcbiAgbmFtZVNwYW4uaW5uZXJIVE1MID0gYCR7dHlwZX0gTmFtZWA7XHJcblxyXG4gIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbmFtZUxhYmVsLmh0bWxGb3IgPSBpbnB1dE5hbWU7XHJcbiAgbmFtZUxhYmVsLmFwcGVuZENoaWxkKG5hbWVTcGFuKTtcclxuXHJcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBuYW1lSW5wdXQubWF4TGVuZ3RoID0gNTA7XHJcbiAgbmFtZUlucHV0Lm5hbWUgPSBpbnB1dE5hbWU7XHJcbiAgbmFtZUlucHV0LmlkID0gaW5wdXROYW1lO1xyXG4gIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gYCR7dHlwZX0gTmFtZWA7XHJcblxyXG4gIGNvbnN0IG5hbWVDb3VudGVyID0gY3JlYXRlQ291bnRlcihuYW1lSW5wdXQsIG5hbWVJbnB1dC5tYXhMZW5ndGgpO1xyXG4gIG5hbWVMYWJlbC5hcHBlbmRDaGlsZChuYW1lQ291bnRlcik7XHJcblxyXG4gIG5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcclxuICBuYW1lRGl2LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcblxyXG4gIHJldHVybiBuYW1lRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYW1lSW5wdXRFZGl0KHR5cGUsIHRhc2tPYmopIHtcclxuICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaW5wdXROYW1lID0gJ25hbWUtZWRpdCc7XHJcblxyXG4gIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIG5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ3JlcXVpcmVkJyk7XHJcbiAgbmFtZVNwYW4uaW5uZXJIVE1MID0gYCR7dHlwZX0gTmFtZWA7XHJcblxyXG4gIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbmFtZUxhYmVsLmh0bWxGb3IgPSBpbnB1dE5hbWU7XHJcbiAgbmFtZUxhYmVsLmFwcGVuZENoaWxkKG5hbWVTcGFuKTtcclxuXHJcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBuYW1lSW5wdXQubWF4TGVuZ3RoID0gNTA7XHJcbiAgbmFtZUlucHV0Lm5hbWUgPSBpbnB1dE5hbWU7XHJcbiAgbmFtZUlucHV0LmlkID0gaW5wdXROYW1lO1xyXG4gIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgbmFtZUlucHV0LnZhbHVlID0gdGFza09iai5uYW1lO1xyXG5cclxuICBjb25zdCBuYW1lQ291bnRlciA9IGNyZWF0ZUNvdW50ZXIobmFtZUlucHV0LCBuYW1lSW5wdXQubWF4TGVuZ3RoKTtcclxuICBuYW1lTGFiZWwuYXBwZW5kQ2hpbGQobmFtZUNvdW50ZXIpO1xyXG5cclxuICBuYW1lRGl2LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgbmFtZURpdi5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG5cclxuICByZXR1cm4gbmFtZURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb25JbnB1dCh0eXBlKSB7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpbnB1dE5hbWUgPSAnZGVzY3JpcHRpb24nO1xyXG5cclxuICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGRlc2NMYWJlbC5odG1sRm9yID0gaW5wdXROYW1lO1xyXG4gIGRlc2NMYWJlbC5pbm5lckhUTUwgPSBgJHt0eXBlfSBEZXNjcmlwdGlvbmA7XHJcblxyXG4gIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgZGVzY0lucHV0Lm1heExlbmd0aCA9IDE0MDtcclxuICBkZXNjSW5wdXQubmFtZSA9IGlucHV0TmFtZTtcclxuICBkZXNjSW5wdXQuaWQgPSBpbnB1dE5hbWU7XHJcbiAgZGVzY0lucHV0LnBsYWNlaG9sZGVyID0gYCR7dHlwZX0gRGVzY3JpcHRpb25gO1xyXG5cclxuICBjb25zdCBkZXNjQ291bnRlciA9IGNyZWF0ZUNvdW50ZXIoZGVzY0lucHV0LCBkZXNjSW5wdXQubWF4TGVuZ3RoKTtcclxuICBkZXNjTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY0NvdW50ZXIpO1xyXG5cclxuICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xyXG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XHJcblxyXG4gIHJldHVybiBkZXNjcmlwdGlvbkRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb25JbnB1dEVkaXQodHlwZSwgdGFza09iaikge1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaW5wdXROYW1lID0gJ2Rlc2NyaXB0aW9uLWVkaXQnO1xyXG5cclxuICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGRlc2NMYWJlbC5odG1sRm9yID0gaW5wdXROYW1lO1xyXG4gIGRlc2NMYWJlbC5pbm5lckhUTUwgPSBgJHt0eXBlfSBEZXNjcmlwdGlvbmA7XHJcblxyXG4gIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgZGVzY0lucHV0Lm1heExlbmd0aCA9IDE0MDtcclxuICBkZXNjSW5wdXQubmFtZSA9IGlucHV0TmFtZTtcclxuICBkZXNjSW5wdXQuaWQgPSBpbnB1dE5hbWU7XHJcbiAgZGVzY0lucHV0LnZhbHVlID0gdGFza09iai5kZXNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3QgZGVzY0NvdW50ZXIgPSBjcmVhdGVDb3VudGVyKGRlc2NJbnB1dCwgZGVzY0lucHV0Lm1heExlbmd0aCk7XHJcbiAgZGVzY0xhYmVsLmFwcGVuZENoaWxkKGRlc2NDb3VudGVyKTtcclxuXHJcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcclxuICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xyXG5cclxuICByZXR1cm4gZGVzY3JpcHRpb25EaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUR1ZURhdGVJbnB1dCgpIHtcclxuICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaW5wdXROYW1lID0gJ2R1ZS1kYXRlJztcclxuXHJcbiAgY29uc3QgZHVlRGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZHVlRGF0ZVNwYW4uY2xhc3NMaXN0LmFkZCgncmVxdWlyZWQnKTtcclxuICBkdWVEYXRlU3Bhbi5pbm5lckhUTUwgPSAnRHVlIERhdGUnO1xyXG5cclxuICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gaW5wdXROYW1lO1xyXG4gIGR1ZURhdGVMYWJlbC5hcHBlbmRDaGlsZChkdWVEYXRlU3Bhbik7XHJcblxyXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcblxyXG4gIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItY2EnKTtcclxuICBkdWVEYXRlSW5wdXQubWluID0gbWluRGF0ZTtcclxuICBkdWVEYXRlSW5wdXQubmFtZSA9IGlucHV0TmFtZTtcclxuICBkdWVEYXRlSW5wdXQuaWQgPSBpbnB1dE5hbWU7XHJcbiAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xyXG4gIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuXHJcbiAgcmV0dXJuIGR1ZURhdGVEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUR1ZURhdGVJbnB1dEVkaXQodGFza09iaikge1xyXG4gIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpbnB1dE5hbWUgPSAnZHVlLWRhdGUtZWRpdCc7XHJcblxyXG4gIGNvbnN0IGR1ZURhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGR1ZURhdGVTcGFuLmNsYXNzTGlzdC5hZGQoJ3JlcXVpcmVkJyk7XHJcbiAgZHVlRGF0ZVNwYW4uaW5uZXJIVE1MID0gJ0R1ZSBEYXRlJztcclxuXHJcbiAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBkdWVEYXRlTGFiZWwuaHRtbEZvciA9IGlucHV0TmFtZTtcclxuICBkdWVEYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZVNwYW4pO1xyXG5cclxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG5cclxuICBjb25zdCBtaW5EYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoJ2ZyLWNhJyk7XHJcbiAgZHVlRGF0ZUlucHV0Lm1pbiA9IG1pbkRhdGU7XHJcbiAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBpbnB1dE5hbWU7XHJcbiAgZHVlRGF0ZUlucHV0LmlkID0gaW5wdXROYW1lO1xyXG4gIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdGFza09iai5kdWVEYXRlO1xyXG5cclxuICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XHJcbiAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG5cclxuICByZXR1cm4gZHVlRGF0ZURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHlJbnB1dCgpIHtcclxuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGlucHV0TmFtZSA9ICdwcmlvcml0eSc7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBwcmlvcml0eVNwYW4uY2xhc3NMaXN0LmFkZCgncmVxdWlyZWQnKTtcclxuICBwcmlvcml0eVNwYW4uaW5uZXJIVE1MID0gJ1ByaW9yaXR5IExldmVsJztcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgcHJpb3JpdHlMYWJlbC5odG1sRm9yID0gaW5wdXROYW1lO1xyXG4gIHByaW9yaXR5TGFiZWwuYXBwZW5kQ2hpbGQocHJpb3JpdHlTcGFuKTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gIHByaW9yaXR5SW5wdXQubmFtZSA9IGlucHV0TmFtZTtcclxuICBwcmlvcml0eUlucHV0LmlkID0gaW5wdXROYW1lO1xyXG4gIHByaW9yaXR5SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICBsb3cudmFsdWUgPSAnbG93JztcclxuICBsb3cudGV4dCA9ICdMb3cnO1xyXG5cclxuICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICBtZWRpdW0udmFsdWUgPSAnbWVkaXVtJztcclxuICBtZWRpdW0udGV4dCA9ICdNZWRpdW0nO1xyXG5cclxuICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgaGlnaC52YWx1ZSA9ICdoaWdoJztcclxuICBoaWdoLnRleHQgPSAnSGlnaCc7XHJcblxyXG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93KTtcclxuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG1lZGl1bSk7XHJcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChoaWdoKTtcclxuXHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcblxyXG4gIHJldHVybiBwcmlvcml0eURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHlJbnB1dEVkaXQodGFza09iaikge1xyXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaW5wdXROYW1lID0gJ3ByaW9yaXR5LWVkaXQnO1xyXG5cclxuICBjb25zdCBwcmlvcml0eVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgcHJpb3JpdHlTcGFuLmNsYXNzTGlzdC5hZGQoJ3JlcXVpcmVkJyk7XHJcbiAgcHJpb3JpdHlTcGFuLmlubmVySFRNTCA9ICdQcmlvcml0eSBMZXZlbCc7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9IGlucHV0TmFtZTtcclxuICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKHByaW9yaXR5U3Bhbik7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICBwcmlvcml0eUlucHV0Lm5hbWUgPSBpbnB1dE5hbWU7XHJcbiAgcHJpb3JpdHlJbnB1dC5pZCA9IGlucHV0TmFtZTtcclxuICBwcmlvcml0eUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgbG93LnZhbHVlID0gJ2xvdyc7XHJcbiAgbG93LnRleHQgPSAnTG93JztcclxuXHJcbiAgY29uc3QgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgbWVkaXVtLnZhbHVlID0gJ21lZGl1bSc7XHJcbiAgbWVkaXVtLnRleHQgPSAnTWVkaXVtJztcclxuXHJcbiAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gIGhpZ2gudmFsdWUgPSAnaGlnaCc7XHJcbiAgaGlnaC50ZXh0ID0gJ0hpZ2gnO1xyXG5cclxuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGxvdyk7XHJcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWRpdW0pO1xyXG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnaCk7XHJcblxyXG4gIHByaW9yaXR5SW5wdXQudmFsdWUgPSB0YXNrT2JqLnByaW9yaXR5O1xyXG5cclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcclxuXHJcbiAgcmV0dXJuIHByaW9yaXR5RGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckZvcm1WYWx1ZXMoKSB7XHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1kYXRlJyk7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKTtcclxuICBjb25zdCBibGFuayA9ICcnO1xyXG5cclxuICBuYW1lLnZhbHVlID0gYmxhbms7XHJcbiAgZGVzY3JpcHRpb24udmFsdWUgPSBibGFuaztcclxuICBkdWVEYXRlLnZhbHVlID0gYmxhbms7XHJcbiAgcHJpb3JpdHkudmFsdWUgPSAnbG93JztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FuY2VsQnV0dG9uKCkge1xyXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tb3V0bGluZScpO1xyXG4gIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSAnQ2FuY2VsJztcclxuICBjYW5jZWxCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgY2xvc2VGb3JtKGV2ZW50KTtcclxuICAgIGNsZWFyRm9ybVZhbHVlcygpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBjYW5jZWxCdXR0b247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhbmNlbEJ1dHRvbkVkaXQoKSB7XHJcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1vdXRsaW5lJyk7XHJcbiAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9ICdDYW5jZWwnO1xyXG4gIGNhbmNlbEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBjbG9zZUZvcm1Nb2RhbChldmVudCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGNhbmNlbEJ1dHRvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWRkQnV0dG9uKCkge1xyXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xyXG4gIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tc29saWQnKTtcclxuICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gIGFkZEJ1dHRvbi52YWx1ZSA9ICdBZGQnO1xyXG5cclxuICByZXR1cm4gYWRkQnV0dG9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNb2RpZnlCdXR0b24oKSB7XHJcbiAgY29uc3QgbW9kaWZ5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBtb2RpZnlCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XHJcbiAgbW9kaWZ5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1zb2xpZCcpO1xyXG4gIG1vZGlmeUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgbW9kaWZ5QnV0dG9uLnZhbHVlID0gJ01vZGlmeSc7XHJcblxyXG4gIHJldHVybiBtb2RpZnlCdXR0b247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUJ1dHRvbigpIHtcclxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLW9yYW5nZScpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgZGVsZXRlQnV0dG9uLnZhbHVlID0gJ0RlbGV0ZSc7XHJcblxyXG4gIHJldHVybiBkZWxldGVCdXR0b247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbnNEaXYoKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY2FuY2VsID0gY3JlYXRlQ2FuY2VsQnV0dG9uKCk7XHJcbiAgY29uc3QgYWRkID0gY3JlYXRlQWRkQnV0dG9uKCk7XHJcblxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zJyk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKGNhbmNlbCk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKGFkZCk7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbnNFZGl0RGl2KCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNhbmNlbCA9IGNyZWF0ZUNhbmNlbEJ1dHRvbkVkaXQoKTtcclxuICBjb25zdCBtb2RpZnkgPSBjcmVhdGVNb2RpZnlCdXR0b24oKTtcclxuXHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcclxuICBkaXYuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcclxuICBkaXYuYXBwZW5kQ2hpbGQobW9kaWZ5KTtcclxuXHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlV2FybmluZ01lc3NhZ2Uob2JqKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgaWYgKG9iai5jbGFzc25hbWUgPT09ICdQcm9qZWN0Jykge1xyXG4gICAgY29uc3QgYWRkaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhZGRpdGlvbi5pbm5lckhUTUwgPSAnVGhlIGl0ZW0geW91IGFyZSBkZWxldGluZyBpcyBhIFByb2plY3QgYW5kIGNvbnRhaW5zIGl0cyBvd24gdGFza3MuIERlbGV0aW5nIHRoaXMgcHJvamVjdCB3aWxsIGFsc28gZGVsZXRlIHRoZXNlIHRhc2tzLic7XHJcbiAgICBtZXNzYWdlLmFwcGVuZENoaWxkKGFkZGl0aW9uKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHdhcm5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJyk7XHJcbiAgd2FybmluZy5pbm5lckhUTUwgPSAnVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS4nO1xyXG4gIG1lc3NhZ2UuYXBwZW5kQ2hpbGQod2FybmluZyk7XHJcblxyXG4gIGRpdi5hcHBlbmRDaGlsZChtZXNzYWdlKTtcclxuXHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gYXNzaWduRm9ybU1ldGhvZChmb3JtLCB0eXBlLCBwcm9qZWN0T2JqKSB7XHJcbiAgaWYgKHR5cGUgPT09ICdUYXNrJykge1xyXG4gICAgZm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBwcm9jZXNzVGFza0Zvcm0oZXZlbnQpO1xyXG4gICAgICBjbGVhckZvcm1WYWx1ZXMoKTtcclxuICAgICAgY2xvc2VGb3JtKGV2ZW50KTtcclxuICAgIH07XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnUHJvamVjdCcpIHtcclxuICAgIGZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgcHJvY2Vzc1Byb2plY3RGb3JtKGV2ZW50KTtcclxuICAgICAgY2xlYXJGb3JtVmFsdWVzKCk7XHJcbiAgICAgIGNsb3NlRm9ybShldmVudCk7XHJcbiAgICB9O1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Byb2plY3QgVGFzaycpIHtcclxuICAgIGZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgcHJvY2Vzc1Byb2plY3RUYXNrRm9ybShldmVudCwgcHJvamVjdE9iaik7XHJcbiAgICAgIGNsZWFyRm9ybVZhbHVlcygpO1xyXG4gICAgICBjbG9zZUZvcm0oZXZlbnQpO1xyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdFZGl0IFRhc2snKSB7XHJcbiAgICBmb3JtLm9uc3VibWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIHByb2Nlc3NNb2RpZnlUYXNrRm9ybShldmVudCwgcHJvamVjdE9iaik7XHJcbiAgICAgIGNsb3NlRm9ybU1vZGFsKGV2ZW50KTtcclxuICAgIH07XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnRWRpdCBQcm9qZWN0Jykge1xyXG4gICAgZm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBwcm9jZXNzTW9kaWZ5UHJvamVjdEZvcm0oZXZlbnQsIHByb2plY3RPYmopO1xyXG4gICAgICBjbG9zZUZvcm1Nb2RhbChldmVudCk7XHJcbiAgICB9O1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0VkaXQgUHJvamVjdCBUYXNrJykge1xyXG4gICAgZm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBwcm9jZXNzTW9kaWZ5UHJvamVjdFRhc2tGb3JtKGV2ZW50LCBwcm9qZWN0T2JqKTtcclxuICAgICAgY2xvc2VGb3JtTW9kYWwoZXZlbnQpO1xyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdEZWxldGUgVGFzaycpIHtcclxuICAgIGZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgcHJvY2Vzc0RlbGV0ZVRhc2tGb3JtKGV2ZW50LCBwcm9qZWN0T2JqKTtcclxuICAgICAgY2xvc2VGb3JtTW9kYWwoZXZlbnQpO1xyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdEZWxldGUgUHJvamVjdCcpIHtcclxuICAgIGZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgcHJvY2Vzc0RlbGV0ZVByb2plY3RGb3JtKGV2ZW50LCBwcm9qZWN0T2JqKTtcclxuICAgICAgY2xvc2VGb3JtTW9kYWwoZXZlbnQpO1xyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBwcm9jZXNzRGVsZXRlUHJvamVjdFRhc2tGb3JtKGV2ZW50LCBwcm9qZWN0T2JqKTtcclxuICAgICAgY2xvc2VGb3JtTW9kYWwoZXZlbnQpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvcm0odHlwZSwgcHJvamVjdE9iaikge1xyXG4gIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcclxuXHJcbiAgY29uc3QgaW5wdXRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5wdXRzRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0cycpO1xyXG5cclxuICBjb25zdCBuYW1lSW5wdXQgPSBjcmVhdGVOYW1lSW5wdXQodHlwZSk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGNyZWF0ZURlc2NyaXB0aW9uSW5wdXQodHlwZSk7XHJcblxyXG4gIGlucHV0c0Rpdi5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gIGlucHV0c0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuXHJcbiAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByaWdodERpdi5jbGFzc0xpc3QuYWRkKCdib3R0b20nKTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGNyZWF0ZVByaW9yaXR5SW5wdXQoKTtcclxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBjcmVhdGVEdWVEYXRlSW5wdXQoKTtcclxuXHJcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuICByaWdodERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcclxuXHJcbiAgaW5wdXRzRGl2LmFwcGVuZENoaWxkKHJpZ2h0RGl2KTtcclxuXHJcbiAgY29uc3QgYnV0dG9uc0RpdiA9IGNyZWF0ZUJ1dHRvbnNEaXYoKTtcclxuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBhc3NpZ25Gb3JtTWV0aG9kKGZvcm0sIHR5cGUsIHByb2plY3RPYmopO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRzRGl2KTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xyXG5cclxuICBmb3JtRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICByZXR1cm4gZm9ybURpdjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVkaXRGb3JtKHR5cGUsIHByb2plY3RPYmopIHtcclxuICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XHJcblxyXG4gIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xyXG4gIGxlZ2VuZC5pbm5lckhUTUwgPSBgPGgzPiR7dHlwZX08L2gzPmA7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcclxuXHJcbiAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZm9ybScpO1xyXG5cclxuICBjb25zdCBpbnB1dHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbnB1dHNEaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXRzJyk7XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGNyZWF0ZU5hbWVJbnB1dEVkaXQodHlwZSwgcHJvamVjdE9iaik7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGNyZWF0ZURlc2NyaXB0aW9uSW5wdXRFZGl0KHR5cGUsIHByb2plY3RPYmopO1xyXG5cclxuICBpbnB1dHNEaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICBpbnB1dHNEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XHJcblxyXG4gIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmlnaHREaXYuY2xhc3NMaXN0LmFkZCgnYm90dG9tJyk7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBjcmVhdGVQcmlvcml0eUlucHV0RWRpdChwcm9qZWN0T2JqKTtcclxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBjcmVhdGVEdWVEYXRlSW5wdXRFZGl0KHByb2plY3RPYmopO1xyXG5cclxuICByaWdodERpdi5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG4gIHJpZ2h0RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xyXG5cclxuICBpbnB1dHNEaXYuYXBwZW5kQ2hpbGQocmlnaHREaXYpO1xyXG5cclxuICBjb25zdCBidXR0b25zRGl2ID0gY3JlYXRlQnV0dG9uc0VkaXREaXYoKTtcclxuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICBhc3NpZ25Gb3JtTWV0aG9kKGZvcm0sIHR5cGUsIHByb2plY3RPYmopO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGlucHV0c0Rpdik7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XHJcblxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xyXG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gIHJldHVybiBmb3JtRGl2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVsZXRlRm9ybSh0eXBlLCBvYmopIHtcclxuICBjb25zdCB3YXJuaW5nSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgd2FybmluZ0ltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWcvdHJpYW5nbGUtZXhjbGFtYXRpb24tc29saWQuc3ZnJztcclxuICB3YXJuaW5nSW1nLmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcclxuXHJcbiAgY29uc3Qgd2FybmluZ0ltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdhcm5pbmdJbWdEaXYuYXBwZW5kQ2hpbGQod2FybmluZ0ltZyk7XHJcblxyXG4gIGNvbnN0IHdhcm5pbmdRdWVzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgd2FybmluZ1F1ZXN0aW9uLmlubmVySFRNTCA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgPGI+JHtvYmouY2xhc3NuYW1lLnRvVXBwZXJDYXNlKCl9PC9iPj9gO1xyXG5cclxuICBjb25zdCB3YXJuaW5nUXVlc3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3YXJuaW5nUXVlc3Rpb25EaXYuYXBwZW5kQ2hpbGQod2FybmluZ1F1ZXN0aW9uKTtcclxuXHJcbiAgY29uc3Qgd2FybmluZ0hlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2FybmluZ0hlYWRsaW5lLmFwcGVuZENoaWxkKHdhcm5pbmdJbWdEaXYpO1xyXG4gIHdhcm5pbmdIZWFkbGluZS5hcHBlbmRDaGlsZCh3YXJuaW5nUXVlc3Rpb25EaXYpO1xyXG4gIHdhcm5pbmdIZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XHJcblxyXG4gIGNvbnN0IHdhcm5pbmdNZXNzYWdlID0gY3JlYXRlV2FybmluZ01lc3NhZ2Uob2JqKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gY3JlYXRlQ2FuY2VsQnV0dG9uRWRpdCgpO1xyXG4gIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tb3JhbmdlLW91dGxpbmUnKTtcclxuICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLW91dGxpbmUnKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlRGVsZXRlQnV0dG9uKCk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XHJcbiAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG4gIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xyXG5cclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGFzc2lnbkZvcm1NZXRob2QoZm9ybSwgdHlwZSwgb2JqKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKHdhcm5pbmdIZWFkbGluZSk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZCh3YXJuaW5nTWVzc2FnZSk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcclxuXHJcbiAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZm9ybScpO1xyXG4gIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnd2FybmluZy1tb2RhbCcpO1xyXG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gIHJldHVybiBmb3JtRGl2O1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlUGFnZUhlYWRsaW5lLCBjbGVhck1haW5Db250ZW50LCBjcmVhdGVNb2R1bGVUaXRsZSwgY3JlYXRlUGFnZURlc2NyaXB0aW9uLCBjcmVhdGVNb2R1bGVDb250YWluZXIsIGNyZWF0ZVRhc2tDb250YWluZXIsIGNyZWF0ZVNvbGlkUGx1c0J1dHRvbiwgY3JlYXRlVGFza0xpc3QsIHNob3dGb3JtXHJcbn0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xyXG5cclxuaW1wb3J0IGNyZWF0ZUZvcm0gZnJvbSAnLi9mb3JtLXRlbXBsYXRlJztcclxuXHJcbmltcG9ydCB7IGluYm94VGFza0FycmF5IH0gZnJvbSAnLi9sb2NhbHN0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEluYm94KCkge1xyXG4gIGNsZWFyTWFpbkNvbnRlbnQoKTtcclxuXHJcbiAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50Jyk7XHJcbiAgY29uc3QgcGFnZUhlYWRsaW5lID0gY3JlYXRlUGFnZUhlYWRsaW5lKCdJbmJveCcpO1xyXG4gIGNvbnN0IHBhZ2VEZXNjcmlwdGlvbiA9IGNyZWF0ZVBhZ2VEZXNjcmlwdGlvbignR2VuZXJhbCBsaXN0IG9mIHRhc2tzIG5vdCBiZWxvbmdpbmcgdG8gYW55IGNhdGVnb3J5IG9yIHByb2plY3QuJyk7XHJcbiAgY29uc3QgbW9kdWxlQ29udGFpbmVyRGl2ID0gY3JlYXRlTW9kdWxlQ29udGFpbmVyKCdpbmJveCcpO1xyXG4gIGNvbnN0IG1vZHVsZVRpdGxlRGl2ID0gY3JlYXRlTW9kdWxlVGl0bGUoJ015IFRhc2tzJyk7XHJcbiAgY29uc3QgdGFza0NvbnRhaW5lckRpdiA9IGNyZWF0ZVRhc2tDb250YWluZXIoKTtcclxuICBjb25zdCBhZGRUYXNrQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGNyZWF0ZVNvbGlkUGx1c0J1dHRvbigpO1xyXG4gIGNvbnN0IHRhc2tMaXN0RGl2ID0gY3JlYXRlVGFza0xpc3QoaW5ib3hUYXNrQXJyYXksICdpbmJveCcpO1xyXG4gIGNvbnN0IGZvcm1EaXYgPSBjcmVhdGVGb3JtKCdUYXNrJyk7XHJcblxyXG4gIGFkZFRhc2tCdXR0b25EaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XHJcbiAgYWRkVGFza0J1dHRvbi5pZCA9ICdhZGQtYnV0dG9uJztcclxuICBhZGRUYXNrQnV0dG9uLm9uY2xpY2sgPSBzaG93Rm9ybTtcclxuXHJcbiAgbW9kdWxlQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG1vZHVsZVRpdGxlRGl2KTtcclxuICBtb2R1bGVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lckRpdik7XHJcblxyXG4gIHRhc2tDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbkRpdik7XHJcbiAgdGFza0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChmb3JtRGl2KTtcclxuICBmb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgdGFza0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XHJcblxyXG4gIGNvbnN0IHRpdGxlQW5kRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aXRsZUFuZERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHBhZ2VIZWFkbGluZSk7XHJcbiAgdGl0bGVBbmREZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwYWdlRGVzY3JpcHRpb24pO1xyXG4gIHRpdGxlQW5kRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGl0bGUtZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGl0bGVBbmREZXNjcmlwdGlvbik7XHJcbiAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW9kdWxlQ29udGFpbmVyRGl2KTtcclxufVxyXG4iLCJpbXBvcnQgeyBpc1RvZGF5LCBpc1RoaXNXZWVrLCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrcyc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdHMnO1xyXG5pbXBvcnQgdGFza1N1YmplY3QgZnJvbSAnLi90YXNrLXN1YmplY3QnO1xyXG5pbXBvcnQgeyByZW1vdmVJdGVtRnJvbVRhc2tMaXN0LCByZW1vdmVJdGVtRnJvbVByb2plY3ROYXZDb2x1bW4gfSBmcm9tICcuL3RlbXBsYXRlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdEFycmF5ID0gW107XHJcbmV4cG9ydCBjb25zdCBpbmJveFRhc2tBcnJheSA9IFtdO1xyXG5leHBvcnQgY29uc3QgZHVlVG9kYXlBcnJheSA9IFtdO1xyXG5leHBvcnQgY29uc3QgdGFza3NEdWVUb2RheUFycmF5ID0gW107XHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0R1ZVRvZGF5QXJyYXkgPSBbXTtcclxuZXhwb3J0IGNvbnN0IGR1ZVRoaXNXZWVrQXJyYXkgPSBbXTtcclxuZXhwb3J0IGNvbnN0IHRhc2tzRHVlVGhpc1dlZWtBcnJheSA9IFtdO1xyXG5leHBvcnQgY29uc3QgcHJvamVjdHNEdWVUaGlzV2Vla0FycmF5ID0gW107XHJcbmV4cG9ydCBjb25zdCBjb21wbGV0ZWRBcnJheSA9IFtdO1xyXG5leHBvcnQgY29uc3QgYWxsSXRlbXNBcnJheSA9IFtdO1xyXG5cclxudGFza1N1YmplY3QudGFza0FycmF5c01hcC5zZXQoJ3RvZGF5JywgZHVlVG9kYXlBcnJheSk7XHJcbnRhc2tTdWJqZWN0LnRhc2tBcnJheXNNYXAuc2V0KCd3ZWVrJywgZHVlVGhpc1dlZWtBcnJheSk7XHJcbnRhc2tTdWJqZWN0LnRhc2tBcnJheXNNYXAuc2V0KCdpbmJveCcsIGluYm94VGFza0FycmF5KTtcclxuXHJcbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xyXG4gIGxldCBzdG9yYWdlO1xyXG4gIHRyeSB7XHJcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xyXG4gICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcclxuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcclxuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb25cclxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcbiAgICAgICAgJiYgKGUuY29kZSA9PT0gMjJcclxuICAgICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICAgIHx8IGUuY29kZSA9PT0gMTAxNFxyXG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XHJcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcbiAgICAgICAgICB8fCBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InXHJcbiAgICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgICB8fCBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpXHJcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcclxuICAgICAgICAmJiBzdG9yYWdlXHJcbiAgICAgICAgJiYgc3RvcmFnZS5sZW5ndGggIT09IDBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWFzc2lnblByb2plY3RUYXNrQ2xhc3Mob2JqKSB7XHJcbiAgY29uc3QgeyBpblByb2dyZXNzVGFza0FycmF5IH0gPSBvYmo7XHJcbiAgY29uc3QgeyBjb21wbGV0ZWRUYXNrQXJyYXkgfSA9IG9iajtcclxuICBjb25zdCBuZXdJblByb2dyZXNzVGFza0FycmF5ID0gW107XHJcbiAgY29uc3QgbmV3Q29tcGxldGVkVGFza0FycmF5ID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5Qcm9ncmVzc1Rhc2tBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgbmV3SW5Qcm9ncmVzc1Rhc2tBcnJheS5wdXNoKE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgaW5Qcm9ncmVzc1Rhc2tBcnJheVtpXSkpO1xyXG4gIH1cclxuICBmb3IgKGxldCBrID0gMDsgayA8IGNvbXBsZXRlZFRhc2tBcnJheS5sZW5ndGg7IGsgKz0gMSkge1xyXG4gICAgbmV3Q29tcGxldGVkVGFza0FycmF5LnB1c2goT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCBjb21wbGV0ZWRUYXNrQXJyYXlba10pKTtcclxuICB9XHJcblxyXG4gIG9iai5pblByb2dyZXNzVGFza0FycmF5ID0gbmV3SW5Qcm9ncmVzc1Rhc2tBcnJheTtcclxuICBvYmouY29tcGxldGVkVGFza0FycmF5ID0gbmV3Q29tcGxldGVkVGFza0FycmF5O1xyXG5cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZShqc29uKSB7XHJcbiAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZShqc29uKTtcclxuXHJcbiAgaWYgKG9iai5fY2xhc3NuYW1lID09PSAnVGFzaycpIHtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIG9iaik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdPYmogPSBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIG9iaik7XHJcblxyXG4gIHJldHVybiByZWFzc2lnblByb2plY3RUYXNrQ2xhc3MobmV3T2JqKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV0cmlldmVQcm9qZWN0KHRhZykge1xyXG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdEFycmF5Lm1hcCgoaSkgPT4gaS5pdGVtVGFnKS5pbmRleE9mKHRhZyk7XHJcbiAgaWYgKGluZGV4ID49IDApIHtcclxuICAgIHJldHVybiBwcm9qZWN0QXJyYXlbaW5kZXhdO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21JbmJveCh0YWcpIHtcclxuICBjb25zdCBpbmRleCA9IGluYm94VGFza0FycmF5Lm1hcCgoaSkgPT4gaS5pdGVtVGFnKS5pbmRleE9mKHRhZyk7XHJcblxyXG4gIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICByZXR1cm4gaW5ib3hUYXNrQXJyYXkuc3BsaWNlKGluZGV4LCAxKVswXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUl0ZW1Gcm9tUHJvamVjdHModGFnKSB7XHJcbiAgY29uc3QgaW5kZXggPSBwcm9qZWN0QXJyYXkubWFwKChpKSA9PiBpLml0ZW1UYWcpLmluZGV4T2YodGFnKTtcclxuXHJcbiAgaWYgKGluZGV4ID49IDApIHtcclxuICAgIHJldHVybiBwcm9qZWN0QXJyYXkuc3BsaWNlKGluZGV4LCAxKVswXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUl0ZW1Gcm9tVG9kYXlBcnJheXModGFnKSB7XHJcbiAgY29uc3QgdG9kYXlBcnJheXMgPSBbcHJvamVjdHNEdWVUb2RheUFycmF5LCB0YXNrc0R1ZVRvZGF5QXJyYXksIGR1ZVRvZGF5QXJyYXldO1xyXG5cclxuICB0b2RheUFycmF5cy5mb3JFYWNoKChhcnJheSkgPT4ge1xyXG4gICAgY29uc3QgaW5kZXggPSBhcnJheS5tYXAoKGkpID0+IGkuaXRlbVRhZykuaW5kZXhPZih0YWcpO1xyXG5cclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSlbMF07XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgdGFza1N1YmplY3QudXBkYXRlRGVjcmVtZW50KCd0b2RheScsIGR1ZVRvZGF5QXJyYXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVJdGVtRnJvbVdlZWtBcnJheXModGFnKSB7XHJcbiAgY29uc3Qgd2Vla0FycmF5cyA9IFtwcm9qZWN0c0R1ZVRoaXNXZWVrQXJyYXksIHRhc2tzRHVlVGhpc1dlZWtBcnJheSwgZHVlVGhpc1dlZWtBcnJheV07XHJcblxyXG4gIHdlZWtBcnJheXMuZm9yRWFjaCgoYXJyYXkpID0+IHtcclxuICAgIGNvbnN0IGluZGV4ID0gYXJyYXkubWFwKChpKSA9PiBpLml0ZW1UYWcpLmluZGV4T2YodGFnKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpWzBdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHRhc2tTdWJqZWN0LnVwZGF0ZURlY3JlbWVudCgnd2VlaycsIGR1ZVRoaXNXZWVrQXJyYXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXRlcm1pbmVUYXNrVHlwZSh0YWcpIHtcclxuICBpZiAoaW5ib3hUYXNrQXJyYXkubWFwKChpKSA9PiBpLml0ZW1UYWcpLmluZGV4T2YodGFnKSA+PSAwICYmIGluYm94VGFza0FycmF5Lmxlbmd0aCA+PSAxKSB7XHJcbiAgICByZXR1cm4gJ2luYm94JztcclxuICB9XHJcbiAgaWYgKHByb2plY3RBcnJheS5tYXAoKGkpID0+IGkuaXRlbVRhZykuaW5kZXhPZih0YWcpID49IDAgJiYgcHJvamVjdEFycmF5Lmxlbmd0aCA+PSAxKSB7XHJcbiAgICByZXR1cm4gJ3Byb2plY3QnO1xyXG4gIH1cclxuICByZXR1cm4gJ3Byb2plY3QtdGFzayc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUl0ZW1Gcm9tQWxsQXJyYXlzKHRhZykge1xyXG4gIHJlbW92ZUl0ZW1Gcm9tVG9kYXlBcnJheXModGFnKTtcclxuICByZW1vdmVJdGVtRnJvbVdlZWtBcnJheXModGFnKTtcclxuXHJcbiAgY29uc3QgdGFza1R5cGUgPSBkZXRlcm1pbmVUYXNrVHlwZSh0YWcpO1xyXG5cclxuICBpZiAodGFza1R5cGUgPT09ICdpbmJveCcpIHtcclxuICAgIHJlbW92ZUl0ZW1Gcm9tSW5ib3godGFnKTtcclxuICAgIHRhc2tTdWJqZWN0LnVwZGF0ZURlY3JlbWVudCgnaW5ib3gnLCBpbmJveFRhc2tBcnJheSk7XHJcbiAgfSBlbHNlIGlmICh0YXNrVHlwZSA9PT0gJ3Byb2plY3QnKSB7XHJcbiAgICByZW1vdmVJdGVtRnJvbVByb2plY3RzKHRhZyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlSXRlbVRvQ29tcGxldGVkQXJyYXkob2JqKSB7XHJcbiAgaWYgKG9iai5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKSB7XHJcbiAgICBjb21wbGV0ZWRBcnJheS5wdXNoKG9iaik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrSXRlbUFzQ29tcGxldGUob2JqKSB7XHJcbiAgb2JqLnN0YXR1cyA9ICdjb21wbGV0ZWQnO1xyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZShvYmopIHtcclxuICBjb25zdCBrZXlOYW1lID0gb2JqLml0ZW1UYWc7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5TmFtZSk7XHJcblxyXG4gIGNvbnN0IGpzb25PYmogPSBKU09OLnN0cmluZ2lmeShvYmopO1xyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXlOYW1lLCBqc29uT2JqKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShvYmopIHtcclxuICBjb25zdCBrZXlOYW1lID0gb2JqLml0ZW1UYWc7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN1YlRhc2tzRnJvbUFycmF5cyhvYmopIHtcclxuICBpZiAob2JqLmNsYXNzbmFtZSA9PT0gJ1Byb2plY3QnKSB7XHJcbiAgICBjb25zdCBpblByb2dyZXNzID0gb2JqLmluUHJvZ3Jlc3NUYXNrQXJyYXk7XHJcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBvYmouY29tcGxldGVkVGFza0FycmF5O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5Qcm9ncmVzcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCB0YWdJRCA9IGluUHJvZ3Jlc3NbaV0uaXRlbVRhZztcclxuICAgICAgcmVtb3ZlSXRlbUZyb21BbGxBcnJheXModGFnSUQpO1xyXG4gICAgICByZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGluUHJvZ3Jlc3NbaV0pO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb21wbGV0ZWQubGVuZ3RoOyBrICs9IDEpIHtcclxuICAgICAgY29uc3QgdGFnSUQgPSBjb21wbGV0ZWRba10uaXRlbVRhZztcclxuICAgICAgcmVtb3ZlSXRlbUZyb21BbGxBcnJheXModGFnSUQpO1xyXG4gICAgICByZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGNvbXBsZXRlZFtrXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdWJUYXNrRnJvbVByb2plY3Qob2JqKSB7XHJcbiAgaWYgKG9iai5hc3NvY2lhdGVkUHJvamVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RBcnJheS5tYXAoKGkpID0+IGkuaXRlbVRhZykuaW5kZXhPZihvYmouYXNzb2NpYXRlZFByb2plY3QpO1xyXG4gICAgY29uc3QgaW5Qcm9ncmVzcyA9IHByb2plY3RBcnJheVtpbmRleF0uaW5Qcm9ncmVzc1Rhc2tBcnJheTtcclxuICAgIGNvbnN0IGNvbXBsZXRlZCA9IHByb2plY3RBcnJheVtpbmRleF0uY29tcGxldGVkVGFza0FycmF5O1xyXG4gICAgY29uc3QgaW5kZXhJblByb2dyZXNzID0gaW5Qcm9ncmVzcy5tYXAoKGkpID0+IGkuaXRlbVRhZykuaW5kZXhPZihvYmouaXRlbVRhZyk7XHJcbiAgICBjb25zdCBpbmRleENvbXBsZXRlZCA9IGNvbXBsZXRlZC5tYXAoKGkpID0+IGkuaXRlbVRhZykuaW5kZXhPZihvYmouaXRlbVRhZyk7XHJcblxyXG4gICAgaWYgKGluZGV4SW5Qcm9ncmVzcyA+PSAwKSB7XHJcbiAgICAgIHByb2plY3RBcnJheVtpbmRleF0uaW5Qcm9ncmVzc1Rhc2tBcnJheS5zcGxpY2UoaW5kZXhJblByb2dyZXNzLCAxKVswXTtcclxuICAgIH1cclxuICAgIGlmIChpbmRleENvbXBsZXRlZCA+PSAwKSB7XHJcbiAgICAgIHByb2plY3RBcnJheVtpbmRleF0uY29tcGxldGVkVGFza0FycmF5LnNwbGljZShpbmRleENvbXBsZXRlZCwgMSlbMF07XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RBcnJheVtpbmRleF0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21Qcm9qZWN0SW5Qcm9ncmVzc0FycmF5KG9iaikge1xyXG4gIGNvbnN0IGFzc29jaWF0ZWRQcm9qZWN0VGFnID0gb2JqLmFzc29jaWF0ZWRQcm9qZWN0O1xyXG4gIGNvbnN0IGluZGV4T2ZQcm9qZWN0ID0gcHJvamVjdEFycmF5Lm1hcCgoaSkgPT4gaS5pdGVtVGFnKS5pbmRleE9mKGFzc29jaWF0ZWRQcm9qZWN0VGFnKTtcclxuICBjb25zdCB7IGluUHJvZ3Jlc3NUYXNrQXJyYXkgfSA9IHByb2plY3RBcnJheVtpbmRleE9mUHJvamVjdF07XHJcblxyXG4gIGNvbnN0IGluZGV4T2ZUYXNrID0gaW5Qcm9ncmVzc1Rhc2tBcnJheS5tYXAoKGkpID0+IGkuaXRlbVRhZykuaW5kZXhPZihvYmouaXRlbVRhZyk7XHJcbiAgcHJvamVjdEFycmF5W2luZGV4T2ZQcm9qZWN0XS5pblByb2dyZXNzVGFza0FycmF5LnNwbGljZShpbmRleE9mVGFzaywgMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVJdGVtVG9Qcm9qZWN0Q29tcGxldGVkQXJyYXkob2JqKSB7XHJcbiAgaWYgKG9iai5hc3NvY2lhdGVkUHJvamVjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBhc3NvY2lhdGVkUHJvamVjdFRhZyA9IG9iai5hc3NvY2lhdGVkUHJvamVjdDtcclxuICAgIGNvbnN0IGluZGV4T2ZQcm9qZWN0ID0gcHJvamVjdEFycmF5Lm1hcCgoaSkgPT4gaS5pdGVtVGFnKS5pbmRleE9mKGFzc29jaWF0ZWRQcm9qZWN0VGFnKTtcclxuXHJcbiAgICByZW1vdmVJdGVtRnJvbVByb2plY3RJblByb2dyZXNzQXJyYXkob2JqKTtcclxuICAgIHByb2plY3RBcnJheVtpbmRleE9mUHJvamVjdF0uY29tcGxldGVkVGFza0FycmF5LnB1c2gob2JqKTtcclxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0QXJyYXlbaW5kZXhPZlByb2plY3RdKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHJpZXZlT2JqKHRhZykge1xyXG4gIGNvbnN0IGluZGV4ID0gYWxsSXRlbXNBcnJheS5tYXAoKGkpID0+IGkuaXRlbVRhZykuaW5kZXhPZih0YWcpO1xyXG4gIHJldHVybiBhbGxJdGVtc0FycmF5W2luZGV4XTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdEFycmF5KG9iamVjdCkge1xyXG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdEFycmF5Lm1hcCgoaSkgPT4gaS5pdGVtVGFnKS5pbmRleE9mKG9iamVjdC5pdGVtVGFnKTtcclxuXHJcbiAgcHJvamVjdEFycmF5W2luZGV4XSA9IG9iamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlSW5ib3hUYXNrQXJyYXkob2JqZWN0KSB7XHJcbiAgY29uc3QgaW5kZXggPSBpbmJveFRhc2tBcnJheS5tYXAoKGkpID0+IGkuaXRlbVRhZykuaW5kZXhPZihvYmplY3QuaXRlbVRhZyk7XHJcblxyXG4gIGluYm94VGFza0FycmF5W2luZGV4XSA9IG9iamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdFN1YlRhc2sob2JqZWN0KSB7XHJcbiAgY29uc3QgcHJvamVjdE9iaiA9IHJldHJpZXZlUHJvamVjdChvYmplY3QuYXNzb2NpYXRlZFByb2plY3QpO1xyXG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdE9iai5pblByb2dyZXNzVGFza0FycmF5Lm1hcCgoaSkgPT4gaS5pdGVtVGFnKS5pbmRleE9mKG9iamVjdC5pdGVtVGFnKTtcclxuXHJcbiAgcHJvamVjdE9iai5pblByb2dyZXNzVGFza0FycmF5W2luZGV4XSA9IG9iamVjdDtcclxuXHJcbiAgcmV0dXJuIHByb2plY3RPYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0SXRlbShvYmopIHtcclxuICB1cGRhdGVMb2NhbFN0b3JhZ2Uob2JqKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc0NvbXBsZXRlKGV2ZW50KSB7XHJcbiAgY29uc3QgdGFnSUQgPSBldmVudC50YXJnZXQuaWQ7XHJcbiAgcmVtb3ZlSXRlbUZyb21BbGxBcnJheXModGFnSUQpO1xyXG4gIGNvbnN0IG9iaiA9IHJldHJpZXZlT2JqKHRhZ0lEKTtcclxuICBjb25zdCB1cGRhdGVkT2JqID0gbWFya0l0ZW1Bc0NvbXBsZXRlKG9iaik7XHJcblxyXG4gIG1vdmVJdGVtVG9Db21wbGV0ZWRBcnJheSh1cGRhdGVkT2JqKTtcclxuICBtb3ZlSXRlbVRvUHJvamVjdENvbXBsZXRlZEFycmF5KHVwZGF0ZWRPYmopO1xyXG4gIHJlbW92ZUl0ZW1Gcm9tVGFza0xpc3Qob2JqKTtcclxuICByZW1vdmVJdGVtRnJvbVByb2plY3ROYXZDb2x1bW4odXBkYXRlZE9iaik7XHJcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKHVwZGF0ZWRPYmopO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduSXRlbU5hbWUoKSB7XHJcbiAgY29uc3QgbnVtYmVyID0gbG9jYWxTdG9yYWdlLmxlbmd0aCArIDE7XHJcbiAgY29uc3QgaXRlbU5hbWUgPSBgaXRlbS0ke251bWJlcn1gO1xyXG5cclxuICByZXR1cm4gaXRlbU5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEl0ZW1Ub0xvY2FsU3RvcmFnZShvYmplY3QpIHtcclxuICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcclxuICAgIGNvbnN0IGpzb25PYmogPSBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG9iamVjdC5pdGVtVGFnLCBqc29uT2JqKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYWxlcnQoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpO1xyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICBjb25zb2xlLmxvZygnRXJyb3IhIE5vIGxvY2FsIHN0b3JhZ2UgYXZhaWxhYmxlLicpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSXRlbVRvRGF5QXJyYXkob2JqZWN0KSB7XHJcbiAgZHVlVG9kYXlBcnJheS5wdXNoKG9iamVjdCk7XHJcbiAgdGFza1N1YmplY3QudXBkYXRlSW5jcmVtZW50KCd0b2RheScsIGR1ZVRvZGF5QXJyYXkpO1xyXG4gIGlmIChvYmplY3QuY2xhc3NuYW1lID09PSAnVGFzaycpIHtcclxuICAgIHRhc2tzRHVlVG9kYXlBcnJheS5wdXNoKG9iamVjdCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2plY3RzRHVlVG9kYXlBcnJheS5wdXNoKG9iamVjdCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRJdGVtVG9XZWVrQXJyYXkob2JqZWN0KSB7XHJcbiAgZHVlVGhpc1dlZWtBcnJheS5wdXNoKG9iamVjdCk7XHJcbiAgdGFza1N1YmplY3QudXBkYXRlSW5jcmVtZW50KCd3ZWVrJywgZHVlVGhpc1dlZWtBcnJheSk7XHJcbiAgaWYgKG9iamVjdC5jbGFzc25hbWUgPT09ICdUYXNrJykge1xyXG4gICAgdGFza3NEdWVUaGlzV2Vla0FycmF5LnB1c2gob2JqZWN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcHJvamVjdHNEdWVUaGlzV2Vla0FycmF5LnB1c2gob2JqZWN0KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEl0ZW1Ub1dlZWtPckRheShvYmplY3QpIHtcclxuICBpZiAoaXNUb2RheShwYXJzZUlTTyhvYmplY3QuZHVlRGF0ZSkpKSB7XHJcbiAgICBhZGRJdGVtVG9EYXlBcnJheShvYmplY3QpO1xyXG4gICAgYWRkSXRlbVRvV2Vla0FycmF5KG9iamVjdCk7XHJcbiAgfSBlbHNlIGlmIChpc1RoaXNXZWVrKHBhcnNlSVNPKG9iamVjdC5kdWVEYXRlKSkpIHtcclxuICAgIGFkZEl0ZW1Ub1dlZWtBcnJheShvYmplY3QpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlV2VlayhvYmplY3QpIHtcclxuICBpZiAoaXNUaGlzV2VlayhwYXJzZUlTTyhvYmplY3QuZHVlRGF0ZSkpKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGR1ZVRoaXNXZWVrQXJyYXkubWFwKChpKSA9PiBpLml0ZW1UYWcpLmluZGV4T2Yob2JqZWN0Lml0ZW1UYWcpO1xyXG5cclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgIGR1ZVRoaXNXZWVrQXJyYXlbaW5kZXhdID0gb2JqZWN0O1xyXG4gICAgICBpZiAob2JqZWN0LmNsYXNzbmFtZSA9PT0gJ1Rhc2snKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXhUID0gdGFza3NEdWVUaGlzV2Vla0FycmF5Lm1hcCgoaSkgPT4gaS5pdGVtVGFnKS5pbmRleE9mKG9iamVjdC5pdGVtVGFnKTtcclxuICAgICAgICB0YXNrc0R1ZVRoaXNXZWVrQXJyYXlbaW5kZXhUXSA9IG9iamVjdDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBpbmRleFAgPSBwcm9qZWN0c0R1ZVRoaXNXZWVrQXJyYXkubWFwKChpKSA9PiBpLml0ZW1UYWcpLmluZGV4T2Yob2JqZWN0Lml0ZW1UYWcpO1xyXG4gICAgICAgIHByb2plY3RzRHVlVGhpc1dlZWtBcnJheVtpbmRleFBdID0gb2JqZWN0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gJ21vZGlmeSB3ZWVrJztcclxuICAgIH1cclxuICAgIGFkZEl0ZW1Ub1dlZWtBcnJheShvYmplY3QpO1xyXG5cclxuICAgIHJldHVybiAnYWRkIHdlZWsnO1xyXG4gIH1cclxuICByZW1vdmVJdGVtRnJvbVdlZWtBcnJheXMob2JqZWN0Lml0ZW1UYWcpO1xyXG5cclxuICByZXR1cm4gJ3JlbW92ZSB3ZWVrJztcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlRGF5KG9iamVjdCkge1xyXG4gIHVwZGF0ZVdlZWsob2JqZWN0KTtcclxuXHJcbiAgaWYgKGlzVG9kYXkocGFyc2VJU08ob2JqZWN0LmR1ZURhdGUpKSkge1xyXG4gICAgY29uc3QgaW5kZXggPSBkdWVUb2RheUFycmF5Lm1hcCgoaSkgPT4gaS5pdGVtVGFnKS5pbmRleE9mKG9iamVjdC5pdGVtVGFnKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICBkdWVUb2RheUFycmF5W2luZGV4XSA9IG9iamVjdDtcclxuICAgICAgaWYgKG9iamVjdC5jbGFzc25hbWUgPT09ICdUYXNrJykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4VCA9IHRhc2tzRHVlVG9kYXlBcnJheS5tYXAoKGkpID0+IGkuaXRlbVRhZykuaW5kZXhPZihvYmplY3QuaXRlbVRhZyk7XHJcbiAgICAgICAgdGFza3NEdWVUb2RheUFycmF5W2luZGV4VF0gPSBvYmplY3Q7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXhQID0gcHJvamVjdHNEdWVUb2RheUFycmF5Lm1hcCgoaSkgPT4gaS5pdGVtVGFnKS5pbmRleE9mKG9iamVjdC5pdGVtVGFnKTtcclxuICAgICAgICBwcm9qZWN0c0R1ZVRvZGF5QXJyYXlbaW5kZXhQXSA9IG9iamVjdDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJ21vZGlmeSBkYXknO1xyXG4gICAgfVxyXG4gICAgYWRkSXRlbVRvRGF5QXJyYXkob2JqZWN0KTtcclxuICAgIHJldHVybiAnYWRkIGRheSc7XHJcbiAgfVxyXG4gIHJlbW92ZUl0ZW1Gcm9tVG9kYXlBcnJheXMob2JqZWN0Lml0ZW1UYWcpO1xyXG5cclxuICByZXR1cm4gJ3JlbW92ZSBkYXknO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVXZWVrT3JEYXkob2JqZWN0KSB7XHJcbiAgY29uc3QgdXBkYXRlV2Vla1Jlc3VsdCA9IHVwZGF0ZVdlZWsob2JqZWN0KTtcclxuICBjb25zdCB1cGRhdGVEYXlSZXN1bHQgPSB1cGRhdGVEYXkob2JqZWN0KTtcclxuXHJcbiAgcmV0dXJuIFt1cGRhdGVEYXlSZXN1bHQsIHVwZGF0ZVdlZWtSZXN1bHRdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkSXRlbXNUb0xvY2FsQXJyYXlzKCkge1xyXG4gIGxldCBrZXlOYW1lO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBrZXlOYW1lID0gbG9jYWxTdG9yYWdlLmtleShpKTtcclxuICAgIGNvbnN0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlOYW1lKTtcclxuICAgIGNvbnN0IGNvbnZlcnRlZE9iaiA9IGRlc2VyaWFsaXplKGl0ZW0pO1xyXG5cclxuICAgIGFsbEl0ZW1zQXJyYXkucHVzaChjb252ZXJ0ZWRPYmopO1xyXG5cclxuICAgIGlmIChjb252ZXJ0ZWRPYmouY2xhc3NuYW1lID09PSAnUHJvamVjdCcpIHtcclxuICAgICAgaWYgKGNvbnZlcnRlZE9iai5zdGF0dXMgPT09ICdpbi1wcm9ncmVzcycpIHtcclxuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChjb252ZXJ0ZWRPYmopO1xyXG4gICAgICAgIGFkZEl0ZW1Ub1dlZWtPckRheShjb252ZXJ0ZWRPYmopO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbXBsZXRlZEFycmF5LnB1c2goY29udmVydGVkT2JqKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjb252ZXJ0ZWRPYmouY2xhc3NuYW1lID09PSAnVGFzaycpIHtcclxuICAgICAgaWYgKGNvbnZlcnRlZE9iai5zdGF0dXMgPT09ICdpbi1wcm9ncmVzcycpIHtcclxuICAgICAgICBhZGRJdGVtVG9XZWVrT3JEYXkoY29udmVydGVkT2JqKTtcclxuICAgICAgICBpZiAoY29udmVydGVkT2JqLmFzc29jaWF0ZWRQcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGluYm94VGFza0FycmF5LnB1c2goY29udmVydGVkT2JqKTtcclxuICAgICAgICAgIHRhc2tTdWJqZWN0LnVwZGF0ZUluY3JlbWVudCgnaW5ib3gnLCBpbmJveFRhc2tBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbXBsZXRlZEFycmF5LnB1c2goY29udmVydGVkT2JqKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQWxsSXRlbXNBcnJheShvYmplY3QpIHtcclxuICBjb25zdCB0YWcgPSBvYmplY3QuaXRlbVRhZztcclxuICBjb25zdCBpbmRleCA9IGFsbEl0ZW1zQXJyYXkubWFwKChpKSA9PiBpLml0ZW1UYWcpLmluZGV4T2YodGFnKTtcclxuXHJcbiAgYWxsSXRlbXNBcnJheVtpbmRleF0gPSBvYmplY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEl0ZW1Ub0xvY2FsQXJyYXkob2JqZWN0KSB7XHJcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XHJcbiAgICBhbGxJdGVtc0FycmF5LnB1c2gob2JqZWN0KTtcclxuXHJcbiAgICBpZiAob2JqZWN0LmNsYXNzbmFtZSA9PT0gJ1Byb2plY3QnKSB7XHJcbiAgICAgIHByb2plY3RBcnJheS5wdXNoKG9iamVjdCk7XHJcbiAgICB9IGVsc2UgaWYgKG9iamVjdC5jbGFzc25hbWUgPT09ICdUYXNrJykge1xyXG4gICAgICBpZiAob2JqZWN0LmFzc29jaWF0ZWRQcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpbmJveFRhc2tBcnJheS5wdXNoKG9iamVjdCk7XHJcbiAgICAgICAgdGFza1N1YmplY3QudXBkYXRlSW5jcmVtZW50KCdpbmJveCcsIGluYm94VGFza0FycmF5KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29tcGxldGVkQXJyYXkucHVzaChvYmplY3QpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBhbGVydChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSk7XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgIGNvbnNvbGUubG9nKCdFcnJvciEgTm8gbG9jYWwgc3RvcmFnZSBhdmFpbGFibGUuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMb2NhbEFycmF5KG9iamVjdCkge1xyXG4gIHVwZGF0ZUFsbEl0ZW1zQXJyYXkob2JqZWN0KTtcclxuXHJcbiAgaWYgKG9iamVjdC5jbGFzc25hbWUgPT09ICdQcm9qZWN0Jykge1xyXG4gICAgdXBkYXRlUHJvamVjdEFycmF5KG9iamVjdCk7XHJcbiAgfSBlbHNlIGlmIChvYmplY3QuY2xhc3NuYW1lID09PSAnVGFzaycpIHtcclxuICAgIGlmIChvYmplY3QuYXNzb2NpYXRlZFByb2plY3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB1cGRhdGVJbmJveFRhc2tBcnJheShvYmplY3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdXBkYXRlZFByb2plY3QgPSB1cGRhdGVQcm9qZWN0U3ViVGFzayhvYmplY3QpO1xyXG4gICAgICB1cGRhdGVQcm9qZWN0QXJyYXkodXBkYXRlZFByb2plY3QpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW1Ub1N0b3JhZ2Uob2JqZWN0KSB7XHJcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKG9iamVjdCk7XHJcbiAgdXBkYXRlTG9jYWxBcnJheShvYmplY3QpO1xyXG4gIGNvbnN0IHVwZGF0ZVJlc3VsdEFycmF5ID0gdXBkYXRlV2Vla09yRGF5KG9iamVjdCk7XHJcblxyXG4gIHJldHVybiB1cGRhdGVSZXN1bHRBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUl0ZW1Gcm9tU3RvcmFnZShvYmplY3QpIHtcclxuICBjb25zdCB0YWdJRCA9IG9iamVjdC5pdGVtVGFnO1xyXG5cclxuICByZW1vdmVJdGVtRnJvbUFsbEFycmF5cyh0YWdJRCk7XHJcbiAgcmVtb3ZlU3ViVGFza3NGcm9tQXJyYXlzKG9iamVjdCk7XHJcbiAgcmVtb3ZlU3ViVGFza0Zyb21Qcm9qZWN0KG9iamVjdCk7XHJcbiAgcmVtb3ZlSXRlbUZyb21Qcm9qZWN0TmF2Q29sdW1uKG9iamVjdCk7XHJcbiAgcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShvYmplY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRJdGVtVG9TdG9yYWdlKG9iamVjdCkge1xyXG4gIGFkZEl0ZW1Ub0xvY2FsU3RvcmFnZShvYmplY3QpO1xyXG4gIGFkZEl0ZW1Ub0xvY2FsQXJyYXkob2JqZWN0KTtcclxuICBhZGRJdGVtVG9XZWVrT3JEYXkob2JqZWN0KTtcclxufVxyXG4iLCJpbXBvcnQgeyB1cGRhdGVUYXNrQ291bnRlckJ1dHRvbiB9IGZyb20gXCIuL3RlbXBsYXRlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzZXJ2ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNvdW50ZXIpIHtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSBjb3VudGVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHR5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcblxyXG4gIHNldCB0eXBlKHZhbHVlKSB7XHJcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgY291bnRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb3VudGVyO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvdW50ZXIodmFsdWUpIHtcclxuICAgIHRoaXMuX2NvdW50ZXIgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIG5vdGlmeSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fY291bnRlciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRE9NKHR5cGUsIHZhbHVlKSB7XHJcbiAgICB1cGRhdGVUYXNrQ291bnRlckJ1dHRvbih0eXBlLCB2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlTW9kdWxlVGl0bGUsIGNyZWF0ZVBhZ2VIZWFkbGluZSwgY3JlYXRlUGFnZURlc2NyaXB0aW9uLCBjcmVhdGVNb2R1bGVDb250YWluZXIsIGNyZWF0ZVRhc2tDb250YWluZXIsIGNyZWF0ZVNvbGlkUGx1c0J1dHRvbiwgY3JlYXRlVGFza0xpc3QsIHNob3dGb3JtLCBjbGVhck1haW5Db250ZW50LFxyXG59IGZyb20gJy4vdGVtcGxhdGVzJztcclxuXHJcbmltcG9ydCBjcmVhdGVGb3JtIGZyb20gJy4vZm9ybS10ZW1wbGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUHJvamVjdFBhZ2UocHJvamVjdE9iaikge1xyXG4gIGNsZWFyTWFpbkNvbnRlbnQoKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0T2JqLm5hbWU7XHJcbiAgY29uc3QgcHJvamVjdEluUHJvZ3Jlc3NUYXNrcyA9IHByb2plY3RPYmouaW5Qcm9ncmVzc1Rhc2tBcnJheTtcclxuXHJcbiAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50Jyk7XHJcbiAgY29uc3QgcGFnZUhlYWRsaW5lID0gY3JlYXRlUGFnZUhlYWRsaW5lKHByb2plY3ROYW1lKTtcclxuICBjb25zdCBwYWdlRGVzY3JpcHRpb24gPSBjcmVhdGVQYWdlRGVzY3JpcHRpb24ocHJvamVjdE9iai5kZXNjcmlwdGlvbik7XHJcbiAgY29uc3QgbW9kdWxlQ29udGFpbmVyRGl2ID0gY3JlYXRlTW9kdWxlQ29udGFpbmVyKCdwcm9qZWN0LXBhZ2UnKTtcclxuICBjb25zdCBtb2R1bGVUaXRsZURpdiA9IGNyZWF0ZU1vZHVsZVRpdGxlKCdNeSBUYXNrcycpO1xyXG4gIGNvbnN0IHRhc2tDb250YWluZXJEaXYgPSBjcmVhdGVUYXNrQ29udGFpbmVyKCk7XHJcbiAgY29uc3QgYWRkVGFza0J1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBjcmVhdGVTb2xpZFBsdXNCdXR0b24oKTtcclxuICBjb25zdCB0YXNrTGlzdERpdiA9IGNyZWF0ZVRhc2tMaXN0KHByb2plY3RJblByb2dyZXNzVGFza3MsICdwcm9qZWN0LXRhc2tzJyk7XHJcbiAgY29uc3QgZm9ybURpdiA9IGNyZWF0ZUZvcm0oJ1Byb2plY3QgVGFzaycsIHByb2plY3RPYmopO1xyXG5cclxuICBhZGRUYXNrQnV0dG9uRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xyXG4gIGFkZFRhc2tCdXR0b24uaWQgPSAnYWRkLWJ1dHRvbic7XHJcbiAgYWRkVGFza0J1dHRvbi5vbmNsaWNrID0gc2hvd0Zvcm07XHJcblxyXG4gIG1vZHVsZUNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChtb2R1bGVUaXRsZURpdik7XHJcbiAgbW9kdWxlQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRhc2tDb250YWluZXJEaXYpO1xyXG5cclxuICB0YXNrQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b25EaXYpO1xyXG4gIHRhc2tDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZm9ybURpdik7XHJcbiAgZm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIHRhc2tDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGFza0xpc3REaXYpO1xyXG5cclxuICBjb25zdCB0aXRsZUFuZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGl0bGVBbmREZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwYWdlSGVhZGxpbmUpO1xyXG4gIHRpdGxlQW5kRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocGFnZURlc2NyaXB0aW9uKTtcclxuICB0aXRsZUFuZERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWRlc2NyaXB0aW9uJyk7XHJcblxyXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKHRpdGxlQW5kRGVzY3JpcHRpb24pO1xyXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKG1vZHVsZUNvbnRhaW5lckRpdik7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGl0ZW1UYWcsIHN0YXR1cykge1xyXG4gICAgdGhpcy5jbGFzc25hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICB0aGlzLm5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9qZWN0RGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5pdGVtVGFnID0gaXRlbVRhZztcclxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgdGhpcy5pblByb2dyZXNzVGFza0FycmF5ID0gW107XHJcbiAgICB0aGlzLmNvbXBsZXRlZFRhc2tBcnJheSA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNsYXNzbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jbGFzc25hbWU7XHJcbiAgfVxyXG5cclxuICBzZXQgY2xhc3NuYW1lKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9jbGFzc25hbWUgPSB2YWx1ZTtcclxuICB9XHJcbiBcclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0IG5hbWUodmFsdWUpIHtcclxuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xyXG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBkdWVEYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByaW9yaXR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XHJcbiAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGl0ZW1UYWcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbVRhZztcclxuICB9XHJcblxyXG4gIHNldCBpdGVtVGFnKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9pdGVtVGFnID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhdHVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcclxuICB9XHJcblxyXG4gIHNldCBzdGF0dXModmFsdWUpIHtcclxuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGluUHJvZ3Jlc3NUYXNrQXJyYXkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5Qcm9ncmVzc1Rhc2tBcnJheTtcclxuICB9XHJcblxyXG4gIHNldCBpblByb2dyZXNzVGFza0FycmF5KHZhbHVlKSB7XHJcbiAgICB0aGlzLl9pblByb2dyZXNzVGFza0FycmF5ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgY29tcGxldGVkVGFza0FycmF5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRlZFRhc2tBcnJheTtcclxuICB9XHJcblxyXG4gIHNldCBjb21wbGV0ZWRUYXNrQXJyYXkodmFsdWUpIHtcclxuICAgIHRoaXMuX2NvbXBsZXRlZFRhc2tBcnJheSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5Qcm9ncmVzc1Rhc2tBcnJheSh0YXNrKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5Qcm9ncmVzc1Rhc2tBcnJheS5tYXAoKS5pbmRleE9mKHRhc2suaXRlbVRhZyk7XHJcbiAgICB0aGlzLmluUHJvZ3Jlc3NUYXNrQXJyYXlbaW5kZXhdID0gdGFzaztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVQYWdlSGVhZGxpbmUsIGNsZWFyTWFpbkNvbnRlbnQsIGNyZWF0ZU1vZHVsZVRpdGxlLCBjcmVhdGVNb2R1bGVDb250YWluZXIsIGNyZWF0ZVRhc2tDb250YWluZXIsIGNyZWF0ZVNvbGlkUGx1c0J1dHRvbiwgY3JlYXRlVGFza0xpc3QsIHNob3dGb3JtLCBjbGVhclByb2plY3RzTmF2TGlzdCwgcG9wdWxhdGVQcm9qZWN0c05hdkxpc3QsXHJcbn0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xyXG5cclxuaW1wb3J0IGNyZWF0ZUZvcm0gZnJvbSAnLi9mb3JtLXRlbXBsYXRlJztcclxuXHJcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gJy4vbG9jYWxzdG9yYWdlJztcclxuaW1wb3J0IGxvYWRQcm9qZWN0UGFnZSBmcm9tICcuL3Byb2plY3QtcGFnZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RzTmF2TGlzdCgpIHtcclxuICBjbGVhclByb2plY3RzTmF2TGlzdCgpO1xyXG5cclxuICBwb3B1bGF0ZVByb2plY3RzTmF2TGlzdChwcm9qZWN0QXJyYXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvamVjdExpbmsocHJvamVjdE9iaikge1xyXG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdEFycmF5Lm1hcCgoaSkgPT4gaS5pdGVtVGFnKS5pbmRleE9mKHByb2plY3RPYmouaXRlbVRhZyk7XHJcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBuYXYtJHtwcm9qZWN0T2JqLml0ZW1UYWd9YCk7XHJcblxyXG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsb2FkUHJvamVjdFBhZ2UocHJvamVjdEFycmF5W2luZGV4XSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcclxuICBjbGVhck1haW5Db250ZW50KCk7XHJcblxyXG4gIGNvbnN0IG1haW5Db250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudCcpO1xyXG4gIGNvbnN0IHBhZ2VIZWFkbGluZSA9IGNyZWF0ZVBhZ2VIZWFkbGluZSgnUHJvamVjdHMnKTtcclxuICBjb25zdCBtb2R1bGVDb250YWluZXJEaXYgPSBjcmVhdGVNb2R1bGVDb250YWluZXIoJ215LXByb2plY3RzJyk7XHJcbiAgY29uc3QgbW9kdWxlVGl0bGVEaXYgPSBjcmVhdGVNb2R1bGVUaXRsZSgnTXkgUHJvamVjdHMnKTtcclxuICBjb25zdCB0YXNrQ29udGFpbmVyRGl2ID0gY3JlYXRlVGFza0NvbnRhaW5lcigpO1xyXG4gIGNvbnN0IGFkZFRhc2tCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gY3JlYXRlU29saWRQbHVzQnV0dG9uKCk7XHJcbiAgY29uc3QgdGFza0xpc3REaXYgPSBjcmVhdGVUYXNrTGlzdChwcm9qZWN0QXJyYXksICdwcm9qZWN0cycpO1xyXG4gIGNvbnN0IGZvcm1EaXYgPSBjcmVhdGVGb3JtKCdQcm9qZWN0Jyk7XHJcblxyXG4gIGFkZFRhc2tCdXR0b25EaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XHJcbiAgYWRkVGFza0J1dHRvbi5pZCA9ICdhZGQtYnV0dG9uJztcclxuICBhZGRUYXNrQnV0dG9uLm9uY2xpY2sgPSBzaG93Rm9ybTtcclxuXHJcbiAgbW9kdWxlQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG1vZHVsZVRpdGxlRGl2KTtcclxuICBtb2R1bGVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lckRpdik7XHJcblxyXG4gIHRhc2tDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbkRpdik7XHJcbiAgdGFza0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChmb3JtRGl2KTtcclxuICBmb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgdGFza0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XHJcblxyXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKHBhZ2VIZWFkbGluZSk7XHJcbiAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW9kdWxlQ29udGFpbmVyRGl2KTtcclxufVxyXG4iLCJpbXBvcnQgT2JzZXJ2ZXIgZnJvbSAnLi9vYnNlcnZlcic7XHJcblxyXG5jb25zdCBpbmJveE9ic2VydmVyID0gbmV3IE9ic2VydmVyKCdpbmJveCcsIDApO1xyXG5jb25zdCB0b2RheU9ic2VydmVyID0gbmV3IE9ic2VydmVyKCd0b2RheScsIDApO1xyXG5jb25zdCB3ZWVrT2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXIoJ3dlZWsnLCAwKTtcclxuXHJcbmNvbnN0IHRhc2tTdWJqZWN0ID0ge1xyXG4gIHRhc2tBcnJheXNNYXA6IG5ldyBNYXAoW10pLFxyXG5cclxuICBzdWJzY3JpYmVyczogW2luYm94T2JzZXJ2ZXIsIHRvZGF5T2JzZXJ2ZXIsIHdlZWtPYnNlcnZlcl0sXHJcblxyXG4gIHN1YnNjcmliZShvYnNlcnZlcikge1xyXG4gICAgdGhpcy5zdWJzY3JpYmVycy5wdXNoKG9ic2VydmVyKTtcclxuICB9LFxyXG5cclxuICB1bnN1YnNjcmliZShvYnNlcnZlcikge1xyXG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IHRoaXMuc3Vic2NyaWJlcnMuZmlsdGVyKFxyXG4gICAgICAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtICE9PSBvYnNlcnZlcikge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9LFxyXG5cclxuICBub3RpZnlJbmJveCh2YWx1ZSkge1xyXG4gICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKChzdWJzY3JpYmVyKSA9PiB7XHJcbiAgICAgIGlmIChzdWJzY3JpYmVyLnR5cGUgPT09ICdpbmJveCcpIHtcclxuICAgICAgICBzdWJzY3JpYmVyLm5vdGlmeSh2YWx1ZSk7XHJcbiAgICAgICAgc3Vic2NyaWJlci51cGRhdGVET00oJ2luYm94JywgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBub3RpZnlUb2RheSh2YWx1ZSkge1xyXG4gICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKChzdWJzY3JpYmVyKSA9PiB7XHJcbiAgICAgIGlmIChzdWJzY3JpYmVyLnR5cGUgPT09ICd0b2RheScpIHtcclxuICAgICAgICBzdWJzY3JpYmVyLm5vdGlmeSh2YWx1ZSk7XHJcbiAgICAgICAgc3Vic2NyaWJlci51cGRhdGVET00oJ3RvZGF5JywgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBub3RpZnlXZWVrKHZhbHVlKSB7XHJcbiAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goKHN1YnNjcmliZXIpID0+IHtcclxuICAgICAgaWYgKHN1YnNjcmliZXIudHlwZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICAgICAgc3Vic2NyaWJlci5ub3RpZnkodmFsdWUpO1xyXG4gICAgICAgIHN1YnNjcmliZXIudXBkYXRlRE9NKCd3ZWVrJywgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBub3RpZnkoYXJyYXksIHZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKGFycmF5KSB7XHJcbiAgICAgIGNhc2UgJ3RvZGF5JzpcclxuICAgICAgICB0aGlzLm5vdGlmeVRvZGF5KHZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnd2Vlayc6XHJcbiAgICAgICAgdGhpcy5ub3RpZnlXZWVrKHZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaW5ib3gnOlxyXG4gICAgICAgIHRoaXMubm90aWZ5SW5ib3godmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZUluY3JlbWVudChrZXksIGFycmF5KSB7XHJcbiAgICB0aGlzLnRhc2tBcnJheXNNYXAuc2V0KGtleSwgYXJyYXkpO1xyXG4gICAgdGhpcy5ub3RpZnkoa2V5LCBhcnJheS5sZW5ndGgpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZURlY3JlbWVudChrZXksIGFycmF5KSB7XHJcbiAgICB0aGlzLnRhc2tBcnJheXNNYXAuc2V0KGtleSwgYXJyYXkpO1xyXG4gICAgdGhpcy5ub3RpZnkoa2V5LCBhcnJheS5sZW5ndGgpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrU3ViamVjdDtcclxuIiwiaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgbWFya0FzQ29tcGxldGUgfSBmcm9tICcuL2xvY2Fsc3RvcmFnZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUVkaXRGb3JtLCBjcmVhdGVEZWxldGVGb3JtIH0gZnJvbSAnLi9mb3JtLXRlbXBsYXRlJztcclxuXHJcbmZ1bmN0aW9uIGFzc2lnblByaW9yaXR5Q2xhc3NUYXNrKHByaW9yaXR5KSB7XHJcbiAgaWYgKHByaW9yaXR5ID09PSAnbG93Jykge1xyXG4gICAgcmV0dXJuICdsb3ctcCc7XHJcbiAgfVxyXG4gIGlmIChwcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcclxuICAgIHJldHVybiAnbWVkLXAnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICdoaWdoLXAnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhc3NpZ25Qcmlvcml0eUNsYXNzUHJvamVjdChwcmlvcml0eSkge1xyXG4gIGlmIChwcmlvcml0eSA9PT0gJ2xvdycpIHtcclxuICAgIHJldHVybiAnbG93LXAtcHJvamVjdCc7XHJcbiAgfVxyXG4gIGlmIChwcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcclxuICAgIHJldHVybiAnbWVkLXAtcHJvamVjdCc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gJ2hpZ2gtcC1wcm9qZWN0JztcclxufVxyXG5cclxuZnVuY3Rpb24gYXNzaWduUHJpb3JpdHlJbWFnZShwcmlvcml0eSkge1xyXG4gIGlmIChwcmlvcml0eSA9PT0gJ2xvdycpIHtcclxuICAgIHJldHVybiAnPGltZyBzcmM9XFwnLi4vc3JjL2Fzc2V0cy9pbWcvcHJpb3JpdHktbG93LnN2Z1xcJz4nO1xyXG4gIH1cclxuICBpZiAocHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XHJcbiAgICByZXR1cm4gJzxpbWcgc3JjPVxcJy4uL3NyYy9hc3NldHMvaW1nL3ByaW9yaXR5LW1lZC5zdmdcXCc+JztcclxuICB9XHJcblxyXG4gIHJldHVybiAnPGltZyBzcmM9XFwnLi4vc3JjL2Fzc2V0cy9pbWcvcHJpb3JpdHktaGlnaC5zdmdcXCc+JztcclxufVxyXG5cclxuZnVuY3Rpb24gYXNzaWduUHJpb3JpdHlDb2xvckNsYXNzKHByaW9yaXR5KSB7XHJcbiAgaWYgKHByaW9yaXR5ID09PSAnbG93Jykge1xyXG4gICAgcmV0dXJuICd0YXNrLWJsdWUnO1xyXG4gIH1cclxuICBpZiAocHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XHJcbiAgICByZXR1cm4gJ3Rhc2stb3JhbmdlJztcclxuICB9XHJcbiAgcmV0dXJuICd0YXNrLXJlZCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkNoZWNrQm94SUQob2JqKSB7XHJcbiAgY29uc3QgY2hlY2tib3hJRCA9IG9iai5pdGVtVGFnO1xyXG5cclxuICByZXR1cm4gY2hlY2tib3hJRDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tCb3hEaXYob2JqKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY2hlY2tib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCByb3VuZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNoZWNrYm94SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBjb25zdCBjaGVja2JveElEID0gYXNzaWduQ2hlY2tCb3hJRChvYmopO1xyXG5cclxuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGNoZWNrYm94SUQpO1xyXG5cclxuICBjaGVja2JveElucHV0LmlkID0gY2hlY2tib3hJRDtcclxuICBjaGVja2JveElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gIGNoZWNrYm94SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYXJrQXNDb21wbGV0ZSk7XHJcblxyXG4gIHJvdW5kRGl2LmNsYXNzTGlzdC5hZGQoJ3JvdW5kJyk7XHJcbiAgcm91bmREaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3hJbnB1dCk7XHJcbiAgcm91bmREaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuICBjaGVja2JveERpdi5hcHBlbmRDaGlsZChyb3VuZERpdik7XHJcbiAgY2hlY2tib3hEaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY29udGFpbmVyJyk7XHJcblxyXG4gIGRpdi5hcHBlbmRDaGlsZChjaGVja2JveERpdik7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tJY29uc0Rpdihjb2xvckNsYXNzLCB0YXNrT2JqKSB7XHJcbiAgY29uc3QgaWNvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0cmFzaEljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0cmFzaEljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICB0cmFzaEljb25JbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1nL3RyYXNoLWNhbi1zb2xpZC5zdmcnO1xyXG4gIHRyYXNoSWNvbkltZy5jbGFzc0xpc3QuYWRkKCd0YXNrLWljb24nKTtcclxuICB0cmFzaEljb25JbWcuY2xhc3NMaXN0LmFkZChjb2xvckNsYXNzKTtcclxuICB0cmFzaEljb25EaXYuYXBwZW5kQ2hpbGQodHJhc2hJY29uSW1nKTtcclxuICB0cmFzaEljb25EaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsJylbMF07XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgbGV0IGRlbGV0ZU1vZGFsO1xyXG4gICAgaWYgKHRhc2tPYmouYXNzb2NpYXRlZFByb2plY3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkZWxldGVNb2RhbCA9IGNyZWF0ZURlbGV0ZUZvcm0oYERlbGV0ZSBQcm9qZWN0ICR7dGFza09iai5jbGFzc25hbWV9YCwgdGFza09iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGVNb2RhbCA9IGNyZWF0ZURlbGV0ZUZvcm0oYERlbGV0ZSAke3Rhc2tPYmouY2xhc3NuYW1lfWAsIHRhc2tPYmopO1xyXG4gICAgfVxyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoZGVsZXRlTW9kYWwpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBlZGl0SWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVkaXRJY29uRGl2LmNsYXNzTGlzdC5hZGQodGFza09iai5pdGVtVGFnKTtcclxuICBjb25zdCBlZGl0SWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGVkaXRJY29uSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltZy9wZW4tdG8tc3F1YXJlLXNvbGlkLnN2Zyc7XHJcbiAgZWRpdEljb25JbWcuY2xhc3NMaXN0LmFkZCgndGFzay1pY29uJyk7XHJcbiAgZWRpdEljb25JbWcuY2xhc3NMaXN0LmFkZChjb2xvckNsYXNzKTtcclxuICBlZGl0SWNvbkRpdi5hcHBlbmRDaGlsZChlZGl0SWNvbkltZyk7XHJcbiAgZWRpdEljb25EaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsJylbMF07XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgbGV0IGVkaXRNb2RhbDtcclxuICAgIGlmICh0YXNrT2JqLmFzc29jaWF0ZWRQcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZWRpdE1vZGFsID0gY3JlYXRlRWRpdEZvcm0oYEVkaXQgUHJvamVjdCAke3Rhc2tPYmouY2xhc3NuYW1lfWAsIHRhc2tPYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWRpdE1vZGFsID0gY3JlYXRlRWRpdEZvcm0oYEVkaXQgJHt0YXNrT2JqLmNsYXNzbmFtZX1gLCB0YXNrT2JqKTtcclxuICAgIH1cclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGVkaXRNb2RhbCk7XHJcbiAgfSk7XHJcblxyXG4gIGljb25zRGl2LmFwcGVuZENoaWxkKHRyYXNoSWNvbkRpdik7XHJcbiAgaWNvbnNEaXYuYXBwZW5kQ2hpbGQoZWRpdEljb25EaXYpO1xyXG4gIGljb25zRGl2LmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XHJcblxyXG4gIHJldHVybiBpY29uc0RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza05hbWUodGFza05hbWUpIHtcclxuICBjb25zdCB0YXNrTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRhc2tOYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xyXG4gIHRhc2tOYW1lRGl2LmlubmVySFRNTCA9IGA8aDQ+JHt0YXNrTmFtZX08L2g0PmA7XHJcblxyXG4gIHJldHVybiB0YXNrTmFtZURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHkodGFza1ByaW9yaXR5KSB7XHJcbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwcmlvcml0eUltZyA9IGFzc2lnblByaW9yaXR5SW1hZ2UodGFza1ByaW9yaXR5KTtcclxuICBwcmlvcml0eURpdi5pbm5lckhUTUwgPSBgJHtwcmlvcml0eUltZ31gO1xyXG4gIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XHJcblxyXG4gIHJldHVybiBwcmlvcml0eURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gcm90YXRlQ2hldnJvbihpdGVtVGFnLCBjaGV2cm9uKSB7XHJcbiAgY29uc3QgYm90dG9tQ2xhc3NOYW1lID0gYGJvdHRvbS0ke2l0ZW1UYWd9YDtcclxuICBjb25zdCB0YXNrTW9kdWxlQm90dG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShib3R0b21DbGFzc05hbWUpWzBdO1xyXG5cclxuICBpZiAodGFza01vZHVsZUJvdHRvbS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgdGFza01vZHVsZUJvdHRvbS5zdHlsZS5kaXNwbGF5ID09PSAnJykge1xyXG4gICAgY2hldnJvbi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDApJztcclxuICB9IGVsc2Uge1xyXG4gICAgY2hldnJvbi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDE4MGRlZyknO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29sbGFwc2VFeHBhbmRNb2R1bGUoaXRlbVRhZykge1xyXG4gIGNvbnN0IGJvdHRvbUNsYXNzTmFtZSA9IGBib3R0b20tJHtpdGVtVGFnfWA7XHJcbiAgY29uc3QgdGFza01vZHVsZUJvdHRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYm90dG9tQ2xhc3NOYW1lKVswXTtcclxuXHJcbiAgaWYgKHRhc2tNb2R1bGVCb3R0b20uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IHRhc2tNb2R1bGVCb3R0b20uc3R5bGUuZGlzcGxheSA9PT0gJycpIHtcclxuICAgIHRhc2tNb2R1bGVCb3R0b20uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICB9IGVsc2Uge1xyXG4gICAgdGFza01vZHVsZUJvdHRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hldnJvbihjb2xvckNsYXNzLCBpdGVtVGFnKSB7XHJcbiAgY29uc3QgY2hldnJvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNoZXZyb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBjaGV2cm9uSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltZy9jaGV2cm9uLXVwLXNvbGlkLnN2Zyc7XHJcbiAgY2hldnJvbkltZy5jbGFzc0xpc3QuYWRkKCd0YXNrLWljb24nKTtcclxuICBjaGV2cm9uSW1nLmNsYXNzTGlzdC5hZGQoY29sb3JDbGFzcyk7XHJcbiAgY2hldnJvbkRpdi5hcHBlbmRDaGlsZChjaGV2cm9uSW1nKTtcclxuICBjaGV2cm9uRGl2LmNsYXNzTGlzdC5hZGQoaXRlbVRhZyk7XHJcbiAgY2hldnJvbkRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbGxhcHNlRXhwYW5kTW9kdWxlKGl0ZW1UYWcpO1xyXG4gICAgcm90YXRlQ2hldnJvbihpdGVtVGFnLCBjaGV2cm9uSW1nKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNoZXZyb25EaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUR1ZURhdGUoZHVlRGF0ZSkge1xyXG4gIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RlYWRsaW5lJyk7XHJcblxyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcC5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XHJcblxyXG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZm9ybWF0KHBhcnNlSVNPKGR1ZURhdGUpLCAnTU0vZGQveXl5eScpO1xyXG4gIHAuaW5uZXJUZXh0ID0gdGFza0R1ZURhdGU7XHJcbiAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgcmV0dXJuIGR1ZURhdGVEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEZXNjcmlwdGlvbihkZXNjcmlwdGlvbiwgY29sb3JDbGFzcykge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGVzY3JpcHRpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCd1cHBlcmNhc2UnKTtcclxuICBkZXNjcmlwdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoY29sb3JDbGFzcyk7XHJcbiAgZGVzY3JpcHRpb25UaXRsZS5pbm5lckhUTUwgPSAnPGg1PkRlc2NyaXB0aW9uPC9oNT4nO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRpdGxlKTtcclxuXHJcbiAgY29uc3QgdGFza0Rlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0YXNrRGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xyXG4gIHRhc2tEZXNjRGl2LmlubmVySFRNTCA9IGA8cD4ke2Rlc2NyaXB0aW9ufTwvcD5gO1xyXG4gIGRpdi5hcHBlbmRDaGlsZCh0YXNrRGVzY0Rpdik7XHJcblxyXG4gIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvcFJvd1Rhc2tEaXYodGFza09iamVjdCwgY29sb3JDbGFzcykge1xyXG4gIGNvbnN0IHRvcFJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCBjaGVja0JveERpdiA9IGNyZWF0ZUNoZWNrQm94RGl2KHRhc2tPYmplY3QpO1xyXG4gIHRvcFJvd0Rpdi5hcHBlbmRDaGlsZChjaGVja0JveERpdik7XHJcblxyXG4gIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmlnaHREaXYuY2xhc3NMaXN0LmFkZCgndG9wLXJvdy1yaWdodCcpO1xyXG5cclxuICBjb25zdCB0YXNrTmFtZURpdiA9IGNyZWF0ZVRhc2tOYW1lKHRhc2tPYmplY3QubmFtZSk7XHJcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQodGFza05hbWVEaXYpO1xyXG5cclxuICBjb25zdCBwcmlvcml0eUFuZERhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwcmlvcml0eUFuZERhdGVEaXYuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktZHVlLWRhdGUnKTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBjcmVhdGVQcmlvcml0eSh0YXNrT2JqZWN0LnByaW9yaXR5KTtcclxuICBjb25zdCBkdWVEYXRlRGl2ID0gY3JlYXRlRHVlRGF0ZSh0YXNrT2JqZWN0LmR1ZURhdGUsIGNvbG9yQ2xhc3MpO1xyXG5cclxuICBwcmlvcml0eUFuZERhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XHJcbiAgcHJpb3JpdHlBbmREYXRlRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcclxuXHJcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlBbmREYXRlRGl2KTtcclxuXHJcbiAgY29uc3QgaWNvbnNEaXYgPSBjcmVhdGVUYXNrSWNvbnNEaXYoY29sb3JDbGFzcywgdGFza09iamVjdCk7XHJcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQoaWNvbnNEaXYpO1xyXG5cclxuICBjb25zdCBjaGV2cm9uRGl2ID0gY3JlYXRlQ2hldnJvbihjb2xvckNsYXNzLCB0YXNrT2JqZWN0Lml0ZW1UYWcpO1xyXG4gIHJpZ2h0RGl2LmFwcGVuZENoaWxkKGNoZXZyb25EaXYpO1xyXG5cclxuICB0b3BSb3dEaXYuYXBwZW5kQ2hpbGQocmlnaHREaXYpO1xyXG4gIHRvcFJvd0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLXRvcC1yb3cnKTtcclxuXHJcbiAgcmV0dXJuIHRvcFJvd0RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQm90dG9tUm93VGFza0Rpdih0YXNrT2JqZWN0LCBjb2xvckNsYXNzKSB7XHJcbiAgY29uc3QgYm90dG9tRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYm90dG9tRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYm90dG9tLXJvdycpO1xyXG4gIGJvdHRvbURpdi5jbGFzc0xpc3QuYWRkKGBib3R0b20tJHt0YXNrT2JqZWN0Lml0ZW1UYWd9YCk7XHJcblxyXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkRpdiA9IGNyZWF0ZVRhc2tEZXNjcmlwdGlvbih0YXNrT2JqZWN0LmRlc2NyaXB0aW9uLCBjb2xvckNsYXNzKTtcclxuICBib3R0b21EaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uRGl2KTtcclxuXHJcbiAgcmV0dXJuIGJvdHRvbURpdjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3REaXYocHJvak9iamVjdCkge1xyXG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwcm9qZWN0VGFnID0gcHJvak9iamVjdC5pdGVtVGFnO1xyXG4gIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChhc3NpZ25Qcmlvcml0eUNsYXNzUHJvamVjdChwcm9qT2JqZWN0LnByaW9yaXR5KSk7XHJcbiAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKHByb2plY3RUYWcpO1xyXG5cclxuICBjb25zdCBjb2xvckNsYXNzID0gYXNzaWduUHJpb3JpdHlDb2xvckNsYXNzKHByb2pPYmplY3QucHJpb3JpdHkpO1xyXG5cclxuICBjb25zdCB0b3BSb3cgPSBjcmVhdGVUb3BSb3dUYXNrRGl2KHByb2pPYmplY3QsIGNvbG9yQ2xhc3MpO1xyXG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodG9wUm93KTtcclxuXHJcbiAgY29uc3QgYm90dG9tUm93ID0gY3JlYXRlQm90dG9tUm93VGFza0Rpdihwcm9qT2JqZWN0LCBjb2xvckNsYXNzKTtcclxuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGJvdHRvbVJvdyk7XHJcblxyXG4gIHJldHVybiBwcm9qZWN0RGl2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0Rpdih0YXNrT2JqZWN0KSB7XHJcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRhc2tUYWcgPSB0YXNrT2JqZWN0Lml0ZW1UYWc7XHJcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKGFzc2lnblByaW9yaXR5Q2xhc3NUYXNrKHRhc2tPYmplY3QucHJpb3JpdHkpKTtcclxuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQodGFza1RhZyk7XHJcblxyXG4gIGNvbnN0IGNvbG9yQ2xhc3MgPSBhc3NpZ25Qcmlvcml0eUNvbG9yQ2xhc3ModGFza09iamVjdC5wcmlvcml0eSk7XHJcblxyXG4gIGNvbnN0IHRvcFJvdyA9IGNyZWF0ZVRvcFJvd1Rhc2tEaXYodGFza09iamVjdCwgY29sb3JDbGFzcyk7XHJcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0b3BSb3cpO1xyXG5cclxuICBjb25zdCBib3R0b21Sb3cgPSBjcmVhdGVCb3R0b21Sb3dUYXNrRGl2KHRhc2tPYmplY3QsIGNvbG9yQ2xhc3MpO1xyXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoYm90dG9tUm93KTtcclxuXHJcbiAgcmV0dXJuIHRhc2tEaXY7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGl0ZW1UYWcsIHN0YXR1cywgYXNzb2NpYXRlZFByb2plY3QpIHtcclxuICAgIHRoaXMuY2xhc3NuYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgdGhpcy5uYW1lID0gdGFza05hbWU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuaXRlbVRhZyA9IGl0ZW1UYWc7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIHRoaXMuYXNzb2NpYXRlZFByb2plY3QgPSBhc3NvY2lhdGVkUHJvamVjdDtcclxuICB9XHJcblxyXG4gIGdldCBjbGFzc25hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NuYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNsYXNzbmFtZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fY2xhc3NuYW1lID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0IG5hbWUodmFsdWUpIHtcclxuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xyXG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBkdWVEYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByaW9yaXR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XHJcbiAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGl0ZW1UYWcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbVRhZztcclxuICB9XHJcblxyXG4gIHNldCBpdGVtVGFnKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9pdGVtVGFnID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhdHVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcclxuICB9XHJcblxyXG4gIHNldCBzdGF0dXModmFsdWUpIHtcclxuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFzc29jaWF0ZWRQcm9qZWN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Fzc29jaWF0ZWRQcm9qZWN0O1xyXG4gIH1cclxuXHJcbiAgc2V0IGFzc29jaWF0ZWRQcm9qZWN0KHZhbHVlKSB7XHJcbiAgICB0aGlzLl9hc3NvY2lhdGVkUHJvamVjdCA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrRGl2LCBjcmVhdGVQcm9qZWN0RGl2IH0gZnJvbSAnLi90YXNrLXRlbXBsYXRlcyc7XHJcbmltcG9ydCBsb2FkUHJvamVjdFBhZ2UgZnJvbSAnLi9wcm9qZWN0LXBhZ2UnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnZUhlYWRsaW5lKHBhZ2VOYW1lKSB7XHJcbiAgY29uc3QgcGFnZU5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgcGFnZU5hbWVEaXYuY2xhc3NMaXN0LmFkZCgncGFnZS1uYW1lJyk7XHJcblxyXG4gIHBhZ2VOYW1lRGl2LmlubmVySFRNTCA9IGA8aDE+JHtwYWdlTmFtZX08L2gxPmA7XHJcblxyXG4gIHJldHVybiBwYWdlTmFtZURpdjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2VEZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGRlc2NyaXB0aW9uRGl2LmlubmVySFRNTCA9IGA8aDI+JHtkZXNjcmlwdGlvbn08L2gyPmA7XHJcblxyXG4gIHJldHVybiBkZXNjcmlwdGlvbkRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlVGl0bGUobW9kdWxlVGl0bGUpIHtcclxuICBjb25zdCBtb2R1bGVUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBtb2R1bGVUaXRsZURpdi5pbm5lckhUTUwgPSBgPGgzPiR7bW9kdWxlVGl0bGV9PC9oMz5gO1xyXG5cclxuICByZXR1cm4gbW9kdWxlVGl0bGVEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUNvbnRhaW5lcihtb2R1bGVJRCkge1xyXG4gIGNvbnN0IG1vZHVsZUNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBtb2R1bGVDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnbW9kdWxlLWNvbnRhaW5lcicpO1xyXG4gIG1vZHVsZUNvbnRhaW5lckRpdi5pZCA9IG1vZHVsZUlEO1xyXG5cclxuICByZXR1cm4gbW9kdWxlQ29udGFpbmVyRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ29udGFpbmVyKCkge1xyXG4gIGNvbnN0IHRhc2tDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgdGFza0NvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xyXG5cclxuICByZXR1cm4gdGFza0NvbnRhaW5lckRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gYXNzaWduVGFza0xpc3RJbWcocGFnZSkge1xyXG4gIGlmIChwYWdlID09PSAnaW5ib3gnIHx8IHBhZ2UgPT09ICdwcm9qZWN0LXRhc2tzJykge1xyXG4gICAgcmV0dXJuICc8aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvaW1nL25vLXRhc2tzLXlldC5zdmdcIj4nO1xyXG4gIH1cclxuICBpZiAocGFnZSA9PT0gJ3RvZGF5JyB8fCBwYWdlID09PSAnd2VlaycpIHtcclxuICAgIHJldHVybiAnPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltZy9ub3RoaW5nLWR1ZS5zdmdcIj4nO1xyXG4gIH1cclxuICBpZiAocGFnZSA9PT0gJ2NvbXBsZXRlZCcpIHtcclxuICAgIHJldHVybiAnPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltZy9uby10YXNrcy1wcm9qZWN0cy1jb21wbGV0ZWQuc3ZnXCI+JztcclxuICB9XHJcblxyXG4gIHJldHVybiAnPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltZy9uby1wcm9qZWN0cy15ZXQuc3ZnXCI+JztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0xpc3QodGFza0FycmF5LCBwYWdlKSB7XHJcbiAgY29uc3QgdGFza0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0YXNrTGlzdERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTtcclxuXHJcbiAgaWYgKHRhc2tBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgIHRhc2tMaXN0RGl2LmlkID0gJ2VtcHR5LWxpc3QnO1xyXG5cclxuICAgIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaW1nID0gYXNzaWduVGFza0xpc3RJbWcocGFnZSk7XHJcblxyXG4gICAgaW1nRGl2LmlubmVySFRNTCA9IGAke2ltZ31gO1xyXG4gICAgaW1nRGl2LmlkID0gJ2VtcHR5LWltZyc7XHJcblxyXG4gICAgdGFza0xpc3REaXYuYXBwZW5kQ2hpbGQoaW1nRGl2KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgbGV0IHRhc2s7XHJcbiAgICAgIGlmICh0YXNrQXJyYXlbaV0uY2xhc3NuYW1lID09PSAnVGFzaycpIHtcclxuICAgICAgICB0YXNrID0gY3JlYXRlVGFza0Rpdih0YXNrQXJyYXlbaV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2sgPSBjcmVhdGVQcm9qZWN0RGl2KHRhc2tBcnJheVtpXSk7XHJcbiAgICAgIH1cclxuICAgICAgdGFza0xpc3REaXYuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGFza0xpc3REaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RMaXN0SXRlbSh0YXNrT2JqKSB7XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGxpLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJyk7XHJcblxyXG4gIGNvbnN0IHN2Z0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHN2Z0Rpdi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwibmF2LWljb25cIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPVwiTTIzNC41IDUuN2MxMy45LTUgMjkuMS01IDQzLjEgMGwxOTIgNjguNkM0OTUgODMuNCA1MTIgMTA3LjUgNTEyIDEzNC42VjM3Ny40YzAgMjctMTcgNTEuMi00Mi41IDYwLjNsLTE5MiA2OC42Yy0xMy45IDUtMjkuMSA1LTQzLjEgMGwtMTkyLTY4LjZDMTcgNDI4LjYgMCA0MDQuNSAwIDM3Ny40VjEzNC42YzAtMjcgMTctNTEuMiA0Mi41LTYwLjNsMTkyLTY4LjZ6TTI1NiA2Nkw4Mi4zIDEyOCAyNTYgMTkwbDE3My43LTYyTDI1NiA2NnptMzIgMzY4LjZsMTYwLTU3LjF2LTE4OEwyODggMjQ2LjZ2MTg4elwiPjwvcGF0aD48L3N2Zz4nO1xyXG4gIGxpLmFwcGVuZENoaWxkKHN2Z0Rpdik7XHJcblxyXG4gIGNvbnN0IHByb2plY3ROYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xyXG5cclxuICBoNi5pbm5lckhUTUwgPSB0YXNrT2JqLm5hbWU7XHJcbiAgcHJvamVjdE5hbWVEaXYuYXBwZW5kQ2hpbGQoaDYpO1xyXG4gIGxpLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRGl2KTtcclxuXHJcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdi1saW5rJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkxpbmtzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIG5hdkxpbmtzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgbGkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBsaTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXNzaWduUHJvamVjdElETmFtZShwcm9qZWN0T2JqKSB7XHJcbiAgcmV0dXJuIGBuYXYtJHtwcm9qZWN0T2JqLml0ZW1UYWd9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHNOYXZMaXN0KHByb2plY3RzQXJyYXkpIHtcclxuICBjb25zdCBwcm9qZWN0c05hdkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtbGlzdCcpO1xyXG5cclxuICBpZiAocHJvamVjdHNBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gY3JlYXRlUHJvamVjdExpc3RJdGVtKHByb2plY3RzQXJyYXlbaV0pO1xyXG4gICAgICBwcm9qZWN0TGlzdEl0ZW0uaWQgPSBhc3NpZ25Qcm9qZWN0SUROYW1lKHByb2plY3RzQXJyYXlbaV0pO1xyXG5cclxuICAgICAgcHJvamVjdHNOYXZMaXN0LmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbSk7XHJcbiAgICAgIHByb2plY3RMaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2FkUHJvamVjdFBhZ2UocHJvamVjdHNBcnJheVtpXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkT3JSZW1vdmVFbXB0eUltZygpIHtcclxuICBjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZHVsZS1jb250YWluZXInKVswXS5pZDtcclxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stbGlzdCcpWzBdO1xyXG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrJylbMF07XHJcblxyXG4gIGlmICghdGFza0xpc3QuY29udGFpbnModGFzaykgJiYgdGFza0xpc3QuaWQgIT09ICdlbXB0eS1saXN0Jykge1xyXG4gICAgY29uc3QgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBpbWcgPSBhc3NpZ25UYXNrTGlzdEltZyhjdXJyZW50UGFnZSk7XHJcblxyXG4gICAgaW1nRGl2LmlubmVySFRNTCA9IGAke2ltZ31gO1xyXG4gICAgaW1nRGl2LmlkID0gJ2VtcHR5LWltZyc7XHJcblxyXG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoaW1nRGl2KTtcclxuICAgIHRhc2tMaXN0LmlkID0gJ2VtcHR5LWxpc3QnO1xyXG4gIH0gZWxzZSBpZiAodGFza0xpc3QuY29udGFpbnModGFzaykgJiYgdGFza0xpc3QuaWQgPT09ICdlbXB0eS1saXN0Jykge1xyXG4gICAgdGFza0xpc3QucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xyXG4gICAgY29uc3QgZW1wdHlJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1wdHktaW1nJyk7XHJcbiAgICBlbXB0eUltZy5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tMaXN0KHRhc2tPYmopIHtcclxuICBjb25zdCB0YXNrTGlzdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stbGlzdCcpWzBdO1xyXG5cclxuICBsZXQgdGFzaztcclxuICBpZiAodGFza09iai5jbGFzc25hbWUgPT09ICdUYXNrJykge1xyXG4gICAgdGFzayA9IGNyZWF0ZVRhc2tEaXYodGFza09iaik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhc2sgPSBjcmVhdGVQcm9qZWN0RGl2KHRhc2tPYmopO1xyXG4gIH1cclxuXHJcbiAgdGFza0xpc3REaXYuYXBwZW5kQ2hpbGQodGFzayk7XHJcblxyXG4gIGFkZE9yUmVtb3ZlRW1wdHlJbWcoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW1Gcm9tVGFza0xpc3Qob2JqKSB7XHJcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUob2JqLml0ZW1UYWcpWzBdO1xyXG4gIGNvbnN0IHRhc2tMaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1saXN0JylbMF07XHJcblxyXG4gIHRhc2tMaXN0RGl2LnJlbW92ZUNoaWxkKHRhc2spO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFza0xpc3RFZGl0KG9iaiwgYXJyYXkpIHtcclxuICBjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZHVsZS1jb250YWluZXInKVswXS5pZDtcclxuXHJcbiAgaWYgKGN1cnJlbnRQYWdlID09PSAnaW5ib3gnIHx8IGN1cnJlbnRQYWdlID09PSAnbXktcHJvamVjdHMnIHx8IGN1cnJlbnRQYWdlID09PSAncHJvamVjdC1wYWdlJykge1xyXG4gICAgcmVtb3ZlSXRlbUZyb21UYXNrTGlzdChvYmopO1xyXG4gICAgdXBkYXRlVGFza0xpc3Qob2JqKTtcclxuICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlID09PSAndG9kYXknKSB7XHJcbiAgICBjb25zdCBkYXlSZXN1bHQgPSBhcnJheVswXTtcclxuICAgIGlmIChkYXlSZXN1bHQgPT09ICdyZW1vdmUgZGF5Jykge1xyXG4gICAgICByZW1vdmVJdGVtRnJvbVRhc2tMaXN0KG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZW1vdmVJdGVtRnJvbVRhc2tMaXN0KG9iaik7XHJcbiAgICAgIHVwZGF0ZVRhc2tMaXN0KG9iaik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICBjb25zdCB3ZWVrUmVzdWx0ID0gYXJyYXlbMV07XHJcbiAgICBpZiAod2Vla1Jlc3VsdCA9PT0gJ3JlbW92ZSB3ZWVrJykge1xyXG4gICAgICByZW1vdmVJdGVtRnJvbVRhc2tMaXN0KG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZW1vdmVJdGVtRnJvbVRhc2tMaXN0KG9iaik7XHJcbiAgICAgIHVwZGF0ZVRhc2tMaXN0KG9iaik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZE9yUmVtb3ZlRW1wdHlJbWcoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RMaXN0KHByb2plY3RPYmopIHtcclxuICBjb25zdCB0YXNrTGlzdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stbGlzdCcpWzBdO1xyXG4gIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0RGl2KHByb2plY3RPYmopO1xyXG5cclxuICBpZiAodGFza0xpc3REaXYuaWQgPT09ICdlbXB0eS1saXN0Jykge1xyXG4gICAgdGFza0xpc3REaXYucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xyXG4gICAgY29uc3QgZW1wdHlJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1wdHktaW1nJyk7XHJcbiAgICBlbXB0eUltZy5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIHRhc2tMaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlSXRlbShvYmopIHtcclxuICByZW1vdmVJdGVtRnJvbVRhc2tMaXN0KG9iaik7XHJcbiAgYWRkT3JSZW1vdmVFbXB0eUltZygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvamVjdE5hdkNvbHVtbihwcm9qZWN0T2JqKSB7XHJcbiAgY29uc3QgcHJvamVjdEl0ZW0gPSBjcmVhdGVQcm9qZWN0TGlzdEl0ZW0ocHJvamVjdE9iaik7XHJcbiAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpc3QnKTtcclxuXHJcbiAgcHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsb2FkUHJvamVjdFBhZ2UocHJvamVjdE9iaik7XHJcbiAgfSk7XHJcblxyXG4gIHByb2plY3RJdGVtLmlkID0gYXNzaWduUHJvamVjdElETmFtZShwcm9qZWN0T2JqKTtcclxuICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21Qcm9qZWN0TmF2Q29sdW1uKG9iaikge1xyXG4gIGlmIChvYmouY2xhc3NuYW1lID09PSAnUHJvamVjdCcpIHtcclxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1saXN0Jyk7XHJcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFzc2lnblByb2plY3RJRE5hbWUob2JqKSk7XHJcblxyXG4gICAgcHJvamVjdHNMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RJdGVtKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTaWRlTWVudSgpIHtcclxuICBjb25zdCBuYXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1jb250ZW50Jyk7XHJcbiAgY29uc3Qgc2lkZUNvbHVtbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlLWNvbHVtbicpO1xyXG5cclxuICBuYXZDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcclxuICBzaWRlQ29sdW1uLmNsYXNzTGlzdC50b2dnbGUoJ2Z1bGwtd2lkdGgnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU29saWRQbHVzQnV0dG9uKCkge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLXNvbGlkJyk7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1wbHVzJyk7XHJcblxyXG4gIGJ1dHRvbi5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltZy9wbHVzLXNvbGlkLnN2Z1wiPic7XHJcblxyXG4gIHJldHVybiBidXR0b247XHJcbn1cclxuXHJcbi8qKiBOT1RJRklDQVRJT04gVEVNUExBVEVTICogKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tDb3VudGVyQnV0dG9uRGVza3RvcCh0eXBlLCBudW1iZXIpIHtcclxuICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBub3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uJyk7XHJcbiAgbm90aWZpY2F0aW9uLmlkID0gYCR7dHlwZX0tbm90aWZpY2F0aW9uLWRlc2t0b3BgO1xyXG5cclxuICBpZiAodHlwZSA9PT0gJ3RvZGF5Jykge1xyXG4gICAgbm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ3VyZ2VudCcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgY291bnRlci5jbGFzc0xpc3QuYWRkKCdjb3VudGVyJyk7XHJcbiAgY291bnRlci5pZCA9IGAke3R5cGV9LWNvdW50ZXItZGVza3RvcGA7XHJcblxyXG4gIGNvdW50ZXIuaW5uZXJIVE1MID0gbnVtYmVyO1xyXG4gIG5vdGlmaWNhdGlvbi5hcHBlbmRDaGlsZChjb3VudGVyKTtcclxuXHJcbiAgY29uc3QgdHlwZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHR5cGUpO1xyXG4gIHR5cGVEaXYuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0NvdW50ZXJCdXR0b25Nb2JpbGUodHlwZSwgbnVtYmVyKSB7XHJcbiAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ25vdGlmaWNhdGlvbicpO1xyXG4gIG5vdGlmaWNhdGlvbi5pZCA9IGAke3R5cGV9LW5vdGlmaWNhdGlvbi1tb2JpbGVgO1xyXG5cclxuICBpZiAodHlwZSA9PT0gJ3RvZGF5Jykge1xyXG4gICAgbm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ3VyZ2VudCcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgY291bnRlci5jbGFzc0xpc3QuYWRkKCdjb3VudGVyJyk7XHJcbiAgY291bnRlci5pZCA9IGAke3R5cGV9LWNvdW50ZXItbW9iaWxlYDtcclxuXHJcbiAgY291bnRlci5pbm5lckhUTUwgPSBudW1iZXI7XHJcbiAgbm90aWZpY2F0aW9uLmFwcGVuZENoaWxkKGNvdW50ZXIpO1xyXG5cclxuICBjb25zdCB0eXBlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dHlwZX0tbW9iaWxlYCk7XHJcbiAgdHlwZURpdi5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ291bnRlckJ1dHRvbih0eXBlLCBudW1iZXIpIHtcclxuICBjcmVhdGVUYXNrQ291bnRlckJ1dHRvbkRlc2t0b3AodHlwZSwgbnVtYmVyKTtcclxuICBjcmVhdGVUYXNrQ291bnRlckJ1dHRvbk1vYmlsZSh0eXBlLCBudW1iZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXNrQ291bnRlckJ1dHRvbih0eXBlKSB7XHJcbiAgY29uc3Qgbm90aWZpY2F0aW9uRGVza3RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3R5cGV9LW5vdGlmaWNhdGlvbi1kZXNrdG9wYCk7XHJcbiAgY29uc3Qgbm90aWZpY2F0aW9uTW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dHlwZX0tbm90aWZpY2F0aW9uLW1vYmlsZWApO1xyXG4gIG5vdGlmaWNhdGlvbkRlc2t0b3AucmVtb3ZlKCk7XHJcbiAgbm90aWZpY2F0aW9uTW9iaWxlLnJlbW92ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyQnV0dG9uKHR5cGUsIG51bWJlcikge1xyXG4gIGNvbnN0IGNvdW50ZXJEZXNrdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dHlwZX0tY291bnRlci1kZXNrdG9wYCk7XHJcbiAgY29uc3QgY291bnRlck1vYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3R5cGV9LWNvdW50ZXItbW9iaWxlYCk7XHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAndG9kYXknOlxyXG4gICAgICBjb3VudGVyRGVza3RvcC5pbm5lckhUTUwgPSBudW1iZXI7XHJcbiAgICAgIGNvdW50ZXJNb2JpbGUuaW5uZXJIVE1MID0gbnVtYmVyO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3dlZWsnOlxyXG4gICAgICBjb3VudGVyRGVza3RvcC5pbm5lckhUTUwgPSBudW1iZXI7XHJcbiAgICAgIGNvdW50ZXJNb2JpbGUuaW5uZXJIVE1MID0gbnVtYmVyO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2luYm94JzpcclxuICAgICAgY291bnRlckRlc2t0b3AuaW5uZXJIVE1MID0gbnVtYmVyO1xyXG4gICAgICBjb3VudGVyTW9iaWxlLmlubmVySFRNTCA9IG51bWJlcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYXNrQ291bnRlckJ1dHRvbih0eXBlLCBudW1iZXIpIHtcclxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dHlwZX0tY291bnRlci1kZXNrdG9wYCkgPT09IG51bGwgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dHlwZX0tY291bnRlci1kZXNrdG9wYCkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKG51bWJlciAhPT0gMCkge1xyXG4gICAgICBjcmVhdGVUYXNrQ291bnRlckJ1dHRvbih0eXBlLCBudW1iZXIpO1xyXG4gICAgICByZXR1cm4gJ2luY3JlbWVudCc7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChudW1iZXIgPT09IDApIHtcclxuICAgIHJlbW92ZVRhc2tDb3VudGVyQnV0dG9uKHR5cGUpO1xyXG4gICAgcmV0dXJuICdkZWNyZW1lbnQnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpbmNyZW1lbnRDb3VudGVyQnV0dG9uKHR5cGUsIG51bWJlcik7XHJcbiAgICByZXR1cm4gJ2luY3JlbWVudCc7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQkFDSy1FTkQgRlVOQ1RJT05TICogKi9cclxuXHJcbmZ1bmN0aW9uIGNsZWFyTWFpbkNvbnRlbnQoKSB7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50Jyk7XHJcblxyXG4gIG1haW5Db250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJQcm9qZWN0c05hdkxpc3QoKSB7XHJcbiAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpc3QnKTtcclxuXHJcbiAgcHJvamVjdHNMaXN0LmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUZvcm0oZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybScpWzBdO1xyXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnV0dG9uJyk7XHJcbiAgY29uc3QgZW1wdHlJbWdEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1wdHktaW1nJyk7XHJcblxyXG4gIGlmIChlbXB0eUltZ0RpdiAhPT0gbnVsbCkge1xyXG4gICAgZW1wdHlJbWdEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG4gIGFkZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUZvcm1Nb2RhbChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsLWZvcm0nKVswXTtcclxuICBtb2RhbEZvcm0ucmVtb3ZlKCk7XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbCcpWzBdO1xyXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtJylbMF07XHJcbiAgY29uc3QgYWRkYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idXR0b24nKTtcclxuICBjb25zdCBlbXB0eUltZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbXB0eS1pbWcnKTtcclxuXHJcbiAgaWYgKGVtcHR5SW1nRGl2ICE9PSBudWxsKSB7XHJcbiAgICBlbXB0eUltZ0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuICBhZGRidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZVBhZ2VIZWFkbGluZSwgY2xlYXJNYWluQ29udGVudCwgY3JlYXRlTW9kdWxlVGl0bGUsIGNyZWF0ZU1vZHVsZUNvbnRhaW5lciwgY3JlYXRlVGFza0NvbnRhaW5lciwgY3JlYXRlU29saWRQbHVzQnV0dG9uLCBjcmVhdGVUYXNrTGlzdCwgY2xvc2VGb3JtLCBzaG93Rm9ybSwgdXBkYXRlVGFza0xpc3QsXHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlUGFnZUhlYWRsaW5lLCBjbGVhck1haW5Db250ZW50LCBjcmVhdGVNb2R1bGVUaXRsZSwgY3JlYXRlTW9kdWxlQ29udGFpbmVyLCBjcmVhdGVUYXNrQ29udGFpbmVyLCBjcmVhdGVUYXNrTGlzdCxcclxufSBmcm9tICcuL3RlbXBsYXRlcyc7XHJcblxyXG5pbXBvcnQgeyBkdWVUb2RheUFycmF5LCBwcm9qZWN0c0R1ZVRvZGF5QXJyYXksIHRhc2tzRHVlVG9kYXlBcnJheSB9IGZyb20gJy4vbG9jYWxzdG9yYWdlJztcclxuXHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0c1RvZGF5KCkge1xyXG4gIGNvbnN0IHByb2plY3RzTGlzdERpdiA9IGNyZWF0ZVRhc2tMaXN0KHByb2plY3RzRHVlVG9kYXlBcnJheSwgJ3RvZGF5Jyk7XHJcbiAgY29uc3QgdGFza0NvbnRhaW5lckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stY29udGFpbmVyJylbMF07XHJcblxyXG4gIHRhc2tDb250YWluZXJEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgdGFza0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3REaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVGFza3NUb2RheSgpIHtcclxuICBjb25zdCB0YXNrc0xpc3REaXYgPSBjcmVhdGVUYXNrTGlzdCh0YXNrc0R1ZVRvZGF5QXJyYXksICd0b2RheScpO1xyXG4gIGNvbnN0IHRhc2tDb250YWluZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrLWNvbnRhaW5lcicpWzBdO1xyXG5cclxuICB0YXNrQ29udGFpbmVyRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gIHRhc2tDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGFza3NMaXN0RGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEFsbCgpIHtcclxuICBjb25zdCBhbGxMaXN0RGl2ID0gY3JlYXRlVGFza0xpc3QoZHVlVG9kYXlBcnJheSwgJ3RvZGF5Jyk7XHJcbiAgY29uc3QgdGFza0NvbnRhaW5lckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stY29udGFpbmVyJylbMF07XHJcblxyXG4gIHRhc2tDb250YWluZXJEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgdGFza0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChhbGxMaXN0RGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEluaXRpYWwoZGl2KSB7XHJcbiAgbG9hZEFsbCgpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFRvZGF5KCkge1xyXG4gIGNsZWFyTWFpbkNvbnRlbnQoKTtcclxuXHJcbiAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50Jyk7XHJcbiAgY29uc3QgcGFnZUhlYWRsaW5lID0gY3JlYXRlUGFnZUhlYWRsaW5lKCdUb2RheScpO1xyXG4gIGNvbnN0IG1vZHVsZUNvbnRhaW5lckRpdiA9IGNyZWF0ZU1vZHVsZUNvbnRhaW5lcigndG9kYXknKTtcclxuICBjb25zdCBwcm9qZWN0c0RpdiA9IGNyZWF0ZU1vZHVsZVRpdGxlKCdQcm9qZWN0cycpO1xyXG4gIGNvbnN0IHRhc2tzRGl2ID0gY3JlYXRlTW9kdWxlVGl0bGUoJ1Rhc2tzJyk7XHJcbiAgY29uc3QgYWxsRGl2ID0gY3JlYXRlTW9kdWxlVGl0bGUoJ0FsbCcpO1xyXG4gIGNvbnN0IHRhc2tDb250YWluZXJEaXYgPSBjcmVhdGVUYXNrQ29udGFpbmVyKCk7XHJcbiAgY29uc3QgdGFza0xpc3REaXYgPSBjcmVhdGVUYXNrTGlzdChkdWVUb2RheUFycmF5LCAndG9kYXknKTtcclxuXHJcbiAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnknKTtcclxuICB0YXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeScpO1xyXG4gIGFsbERpdi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeScpO1xyXG5cclxuICBhbGxEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQWxsKTtcclxuICBwcm9qZWN0c0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRQcm9qZWN0c1RvZGF5KTtcclxuICB0YXNrc0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRUYXNrc1RvZGF5KTtcclxuXHJcbiAgY29uc3QgY2F0ZWdvcmllc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhdGVnb3JpZXNEaXYuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcmllcycpO1xyXG4gIGNhdGVnb3JpZXNEaXYuYXBwZW5kQ2hpbGQoYWxsRGl2KTtcclxuICBjYXRlZ29yaWVzRGl2LmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcclxuICBjYXRlZ29yaWVzRGl2LmFwcGVuZENoaWxkKHRhc2tzRGl2KTtcclxuICBtb2R1bGVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoY2F0ZWdvcmllc0Rpdik7XHJcbiAgbW9kdWxlQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRhc2tDb250YWluZXJEaXYpO1xyXG5cclxuICB0YXNrQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RGl2KTtcclxuXHJcbiAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGFnZUhlYWRsaW5lKTtcclxuICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChtb2R1bGVDb250YWluZXJEaXYpO1xyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVBY3RpdmVPZmYoKSB7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2F0ZWdvcnknKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjYXRlZ29yaWVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgKGZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZUNsYXNzKCkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhdGVnb3J5Jyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY2F0ZWdvcmllc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0b2dnbGVBY3RpdmVPZmYoKTtcclxuICAgICAgICBjYXRlZ29yaWVzW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KCkpO1xyXG5cclxuICBsb2FkSW5pdGlhbChhbGxEaXYpO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlUGFnZUhlYWRsaW5lLCBjbGVhck1haW5Db250ZW50LCBjcmVhdGVNb2R1bGVUaXRsZSwgY3JlYXRlTW9kdWxlQ29udGFpbmVyLCBjcmVhdGVUYXNrQ29udGFpbmVyLCBjcmVhdGVUYXNrTGlzdCxcclxufSBmcm9tICcuL3RlbXBsYXRlcyc7XHJcblxyXG5pbXBvcnQgeyBkdWVUaGlzV2Vla0FycmF5LCBwcm9qZWN0c0R1ZVRoaXNXZWVrQXJyYXksIHRhc2tzRHVlVGhpc1dlZWtBcnJheSB9IGZyb20gJy4vbG9jYWxzdG9yYWdlJztcclxuXHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0c1dlZWsoKSB7XHJcbiAgY29uc3QgcHJvamVjdHNMaXN0RGl2ID0gY3JlYXRlVGFza0xpc3QocHJvamVjdHNEdWVUaGlzV2Vla0FycmF5LCAnd2VlaycpO1xyXG4gIGNvbnN0IHRhc2tDb250YWluZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrLWNvbnRhaW5lcicpWzBdO1xyXG5cclxuICB0YXNrQ29udGFpbmVyRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gIHRhc2tDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0RGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFRhc2tzV2VlaygpIHtcclxuICBjb25zdCB0YXNrc0xpc3REaXYgPSBjcmVhdGVUYXNrTGlzdCh0YXNrc0R1ZVRoaXNXZWVrQXJyYXksICd3ZWVrJyk7XHJcbiAgY29uc3QgdGFza0NvbnRhaW5lckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stY29udGFpbmVyJylbMF07XHJcblxyXG4gIHRhc2tDb250YWluZXJEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgdGFza0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0YXNrc0xpc3REaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQWxsKCkge1xyXG4gIGNvbnN0IGFsbExpc3REaXYgPSBjcmVhdGVUYXNrTGlzdChkdWVUaGlzV2Vla0FycmF5LCAnd2VlaycpO1xyXG4gIGNvbnN0IHRhc2tDb250YWluZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrLWNvbnRhaW5lcicpWzBdO1xyXG5cclxuICB0YXNrQ29udGFpbmVyRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gIHRhc2tDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoYWxsTGlzdERpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRJbml0aWFsKGRpdikge1xyXG4gIGxvYWRBbGwoKTtcclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRXZWVrKCkge1xyXG4gIGNsZWFyTWFpbkNvbnRlbnQoKTtcclxuXHJcbiAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50Jyk7XHJcbiAgY29uc3QgcGFnZUhlYWRsaW5lID0gY3JlYXRlUGFnZUhlYWRsaW5lKCdXZWVrJyk7XHJcbiAgY29uc3QgbW9kdWxlQ29udGFpbmVyRGl2ID0gY3JlYXRlTW9kdWxlQ29udGFpbmVyKCd3ZWVrJyk7XHJcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBjcmVhdGVNb2R1bGVUaXRsZSgnUHJvamVjdHMnKTtcclxuICBjb25zdCB0YXNrc0RpdiA9IGNyZWF0ZU1vZHVsZVRpdGxlKCdUYXNrcycpO1xyXG4gIGNvbnN0IGFsbERpdiA9IGNyZWF0ZU1vZHVsZVRpdGxlKCdBbGwnKTtcclxuICBjb25zdCB0YXNrQ29udGFpbmVyRGl2ID0gY3JlYXRlVGFza0NvbnRhaW5lcigpO1xyXG4gIGNvbnN0IHRhc2tMaXN0RGl2ID0gY3JlYXRlVGFza0xpc3QoZHVlVGhpc1dlZWtBcnJheSwgJ3dlZWsnKTtcclxuXHJcbiAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnknKTtcclxuICB0YXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeScpO1xyXG4gIGFsbERpdi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeScpO1xyXG5cclxuICBhbGxEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQWxsKTtcclxuICBwcm9qZWN0c0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRQcm9qZWN0c1dlZWspO1xyXG4gIHRhc2tzRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFRhc2tzV2Vlayk7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3JpZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXRlZ29yaWVzRGl2LmFwcGVuZENoaWxkKGFsbERpdik7XHJcbiAgY2F0ZWdvcmllc0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yaWVzJyk7XHJcbiAgY2F0ZWdvcmllc0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XHJcbiAgY2F0ZWdvcmllc0Rpdi5hcHBlbmRDaGlsZCh0YXNrc0Rpdik7XHJcbiAgbW9kdWxlQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNhdGVnb3JpZXNEaXYpO1xyXG4gIG1vZHVsZUNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyRGl2KTtcclxuXHJcbiAgdGFza0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdERpdik7XHJcblxyXG4gIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKHBhZ2VIZWFkbGluZSk7XHJcbiAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW9kdWxlQ29udGFpbmVyRGl2KTtcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlQWN0aXZlT2ZmKCkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhdGVnb3J5Jyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY2F0ZWdvcmllc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIChmdW5jdGlvbiB0b2dnbGVBY3RpdmVDbGFzcygpIHtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXRlZ29yeScpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNhdGVnb3JpZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlQWN0aXZlT2ZmKCk7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSgpKTtcclxuXHJcbiAgbG9hZEluaXRpYWwoYWxsRGl2KTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuL21lZGlhLXF1ZXJpZXMuY3NzJztcclxuaW1wb3J0IHsgYWRkSXRlbXNUb0xvY2FsQXJyYXlzIH0gZnJvbSAnLi9sb2NhbHN0b3JhZ2UnO1xyXG5cclxuaW1wb3J0IGxvYWRJbmJveCBmcm9tICcuL2luYm94JztcclxuaW1wb3J0IGxvYWRUb2RheSBmcm9tICcuL3RvZGF5JztcclxuaW1wb3J0IGxvYWRXZWVrIGZyb20gJy4vd2Vlayc7XHJcbmltcG9ydCBsb2FkQ29tcGxldGVkIGZyb20gJy4vY29tcGxldGVkJztcclxuaW1wb3J0IGxvYWRQcm9qZWN0cywgeyBsb2FkUHJvamVjdHNOYXZMaXN0IH0gZnJvbSAnLi9wcm9qZWN0c2ZvbGRlcic7XHJcbmltcG9ydCB7IHRvZ2dsZVNpZGVNZW51IH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xyXG5pbXBvcnQgbG9hZEFib3V0IGZyb20gJy4vYWJvdXQnO1xyXG5cclxuKGZ1bmN0aW9uIHJ1blBhZ2UoKSB7XHJcbiAgYWRkSXRlbXNUb0xvY2FsQXJyYXlzKCk7XHJcbiAgbG9hZEluYm94KCk7XHJcbiAgbG9hZFByb2plY3RzTmF2TGlzdCgpO1xyXG5cclxuICBmdW5jdGlvbiByb3RhdGVQcm9qZWN0c0NoZXZyb24oKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0c0NoZXZyb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtY2hldnJvbicpO1xyXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpc3QnKTtcclxuXHJcbiAgICBpZiAocHJvamVjdHNMaXN0LnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4JyB8fCBwcm9qZWN0c0xpc3Quc3R5bGUuZGlzcGxheSA9PT0gJycpIHtcclxuICAgICAgcHJvamVjdHNDaGV2cm9uLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvamVjdHNDaGV2cm9uLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMTgwZGVnKSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVQcm9qZWN0c0xpc3QoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtbGlzdCcpO1xyXG4gICAgaWYgKHByb2plY3RzTGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcgfHwgcHJvamVjdHNMaXN0LnN0eWxlLmRpc3BsYXkgPT09ICcnKSB7XHJcbiAgICAgIHByb2plY3RzTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvamVjdHNMaXN0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVBY3RpdmVPZmYoKSB7XHJcbiAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdi1saW5rJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkxpbmtzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIG5hdkxpbmtzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgKGZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZUNsYXNzKCkge1xyXG4gICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXYtbGluaycpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZMaW5rcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBuYXZMaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0b2dnbGVBY3RpdmVPZmYoKTtcclxuICAgICAgICBuYXZMaW5rc1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSgpKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdHNDaGV2cm9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWNoZXZyb24nKTtcclxuICBwcm9qZWN0c0NoZXZyb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVQcm9qZWN0c0xpc3QoKTtcclxuICAgIHJvdGF0ZVByb2plY3RzQ2hldnJvbigpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBpbmJveERlc2t0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ib3gnKTtcclxuICBjb25zdCB0b2RheURlc2t0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcclxuICBjb25zdCB3ZWVrRGVza3RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrJyk7XHJcbiAgY29uc3QgY29tcGxldGVkRGVza3RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZWQnKTtcclxuICBjb25zdCBwcm9qZWN0c0Rlc2t0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcclxuICBjb25zdCBhYm91dERlc2t0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcclxuICBjb25zdCBsb2dvRGVza3RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvZ28nKVswXTtcclxuXHJcbiAgbG9nb0Rlc2t0b3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSW5ib3gpO1xyXG4gIGluYm94RGVza3RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRJbmJveCk7XHJcbiAgdG9kYXlEZXNrdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFRvZGF5KTtcclxuICB3ZWVrRGVza3RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRXZWVrKTtcclxuICBjb21wbGV0ZWREZXNrdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZENvbXBsZXRlZCk7XHJcbiAgcHJvamVjdHNEZXNrdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFByb2plY3RzKTtcclxuICBhYm91dERlc2t0b3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQWJvdXQpO1xyXG5cclxuICBjb25zdCBpbmJveE1vYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmJveC1tb2JpbGUnKTtcclxuICBjb25zdCB0b2RheU1vYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1tb2JpbGUnKTtcclxuICBjb25zdCB3ZWVrTW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWstbW9iaWxlJyk7XHJcbiAgY29uc3QgY29tcGxldGVkTW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBsZXRlZC1tb2JpbGUnKTtcclxuICBjb25zdCBwcm9qZWN0c01vYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1tb2JpbGUnKTtcclxuICBjb25zdCBhYm91dE1vYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dC1tb2JpbGUnKTtcclxuICBjb25zdCBsb2dvTW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9nbycpWzBdO1xyXG5cclxuICBsb2dvTW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEluYm94KTtcclxuICBpbmJveE1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRJbmJveCk7XHJcbiAgdG9kYXlNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkVG9kYXkpO1xyXG4gIHdlZWtNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkV2Vlayk7XHJcbiAgY29tcGxldGVkTW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZENvbXBsZXRlZCk7XHJcbiAgcHJvamVjdHNNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkUHJvamVjdHMpO1xyXG4gIGFib3V0TW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEFib3V0KTtcclxuXHJcbiAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXItbWVudScpO1xyXG5cclxuICBoYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2lkZU1lbnUpO1xyXG59KCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=