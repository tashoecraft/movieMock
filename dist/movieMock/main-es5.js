(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/tshoec/Development/movieMock/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "9s53":
    /*!**********************************!*\
      !*** ./src/app/store/reducer.ts ***!
      \**********************************/

    /*! exports provided: initialState, movieReducer, selectMovieState, selectMovieList, selectMovieDetailsByimdbID, selectErrorMessage */

    /***/
    function s53(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "movieReducer", function () {
        return movieReducer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectMovieState", function () {
        return selectMovieState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectMovieList", function () {
        return selectMovieList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectMovieDetailsByimdbID", function () {
        return selectMovieDetailsByimdbID;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectErrorMessage", function () {
        return selectErrorMessage;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./actions */
      "K9il");

      var initialState = {
        movieName: undefined,
        results: [],
        movies: {},
        error: null
      };
      var movieReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GetAllMoviesSuccess"], function (state, _ref) {
        var results = _ref.results;
        return Object.assign(Object.assign({}, state), {
          results: [].concat(_toConsumableArray(state.results), _toConsumableArray(results))
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GetMovieSuccess"], function (state, _ref2) {
        var result = _ref2.result;
        return Object.assign(Object.assign({}, state), {
          movies: Object.assign(Object.assign({}, state.movies), _defineProperty({}, result.imdbID, result))
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ClearErrorMessage"], function (state) {
        return Object.assign(Object.assign({}, state), {
          error: undefined
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GetMovieFail"], _actions__WEBPACK_IMPORTED_MODULE_1__["GetAllMoviesFail"], function (state, _ref3) {
        var error = _ref3.error;
        return Object.assign(Object.assign({}, state), {
          error: error
        });
      }));

      var selectMovieState = function selectMovieState(state) {
        return state.movies;
      };

      var selectMovieList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMovieState, function (state) {
        return state.results;
      });

      var selectMovieDetailsByimdbID = function selectMovieDetailsByimdbID(imdbID) {
        return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMovieState, function (state) {
          return state.movies[imdbID];
        });
      };

      var selectErrorMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMovieState, function (state) {
        return state.error;
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiKey: '257c0840'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BuFo":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function BuFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../store/actions */
      "K9il");
      /* harmony import */


      var _store_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../store/reducer */
      "9s53");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../error-handler/error-handler.component */
      "cSNe");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../movie-card/movie-card.component */
      "rwoW");

      function HomeComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var decade_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.updateDecade$.next(decade_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var decade_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", true)("ngClass", ctx_r0.currentSelectedDecade === decade_r2 ? "active" : "inactive")("aria-pressed", ctx_r0.currentSelectedDecade === decade_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", decade_r2, "'s ");
        }
      }

      function HomeComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movie-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var movie_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", movie_r5)("movieDetails", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r1.movieDetailsHash[movie_r5.imdbID]));
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(store) {
          var _this = this;

          _classCallCheck(this, HomeComponent);

          this.store = store;
          this.movieDetailsHash = {};
          this.currentSelectedDecade = 2010;
          this.updateDecade$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.currentSelectedDecade);
          this.movieList$ = this.store.select(_store_reducer__WEBPACK_IMPORTED_MODULE_2__["selectMovieList"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (movies) {
            _this.movieDetailsHash = movies.reduce(function (accum, movie) {
              accum[movie.imdbID] = _this.store.select(Object(_store_reducer__WEBPACK_IMPORTED_MODULE_2__["selectMovieDetailsByimdbID"])(movie.imdbID));
              return accum;
            }, {});
          }));
          this.movieListFilteredByYear$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.updateDecade$, this.movieList$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 1),
                year = _ref5[0];

            return _this.currentSelectedDecade = year;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2),
                year = _ref7[0],
                movies = _ref7[1];

            return movies.filter(function (movie) {
              var yearAsNumber = Number(movie.Year); // By subtracting the year by the module 10 value of it, we will clear what is in the 10's column,
              // reducing a year to it's decade

              return year === yearAsNumber - yearAsNumber % 10;
            });
          }));
          this.errorMessage$ = this.store.select(_store_reducer__WEBPACK_IMPORTED_MODULE_2__["selectErrorMessage"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (message) {
            return !!message;
          }));
          this.decades = [2020, 2010, 2000, 1990, 1980, 1970, 1960, 1950, 1940];
          this.store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_1__["GetAllMovies"])({
            searchTerm: 'Batman'
          }));
        }

        _createClass(HomeComponent, [{
          key: "clearErrorMessage",
          value: function clearErrorMessage(toClear) {
            if (toClear) {
              this.store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_1__["ClearErrorMessage"])());
            }
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 9,
        vars: 7,
        consts: [["mat-flat-button", "", 3, "disableRipple", "ngClass", "aria-pressed", "click", 4, "ngFor", "ngForOf"], [3, "errorMessage", "clearErrorMessageEvent"], ["class", "movie-list", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", 3, "disableRipple", "ngClass", "aria-pressed", "click"], [1, "movie-list"], [3, "movie", "movieDetails"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to the home of Batman movies!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_button_4_Template, 2, 4, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-error-handler", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clearErrorMessageEvent", function HomeComponent_Template_app_error_handler_clearErrorMessageEvent_5_listener($event) {
              return ctx.clearErrorMessage($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 3, 4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.decades);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorMessage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.errorMessage$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx.movieListFilteredByYear$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_9__["MovieCardComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        styles: ["header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\nnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #F7F8F9;\n  border: 1px solid #C2CAD0;\n  font-size: 14px;\n  color: #61696E;\n}\n\nnav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #1A72B0;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFBRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4Rjk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0MyQ0FEMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM2MTY5NkU7XG4gIH1cblxuICAuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUE3MkIwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG59XG5cblxuXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HGT+":
    /*!*******************************************!*\
      !*** ./src/app/services/movie.service.ts ***!
      \*******************************************/

    /*! exports provided: MovieService */

    /***/
    function HGT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MovieService", function () {
        return MovieService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _session_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./session_storage.service */
      "QZj+");

      var MovieService = /*#__PURE__*/function () {
        function MovieService(httpClient, sessionStorageService) {
          _classCallCheck(this, MovieService);

          this.httpClient = httpClient;
          this.sessionStorageService = sessionStorageService;
          this.API_KEY = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiKey;
        }

        _createClass(MovieService, [{
          key: "getMovies",
          value: function getMovies(searchTerm) {
            var _this2 = this;

            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var sessionStorageValue = this.sessionStorageService.getFromSessionStorage(searchTerm);

            if (sessionStorageValue) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(sessionStorageValue);
            }

            return this.httpClient.get("http://www.omdbapi.com/?s=".concat(searchTerm, "&apikey=").concat(this.API_KEY, "&type=movie&page=").concat(page)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results.Search;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (results) {
              _this2.sessionStorageService.addToSessionStorage(searchTerm, results);
            }));
          }
        }, {
          key: "getMovieById",
          value: function getMovieById(imdbID) {
            var _this3 = this;

            var sessionStorageValue = this.sessionStorageService.getFromSessionStorage(imdbID);

            if (sessionStorageValue) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(sessionStorageValue);
            }

            return this.httpClient.get("http://www.omdbapi.com/?i=".concat(imdbID, "&apikey=").concat(this.API_KEY)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (results) {
              _this3.sessionStorageService.addToSessionStorage(imdbID, results);
            }));
          }
        }]);

        return MovieService;
      }();

      MovieService.ɵfac = function MovieService_Factory(t) {
        return new (t || MovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_storage_service__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"]));
      };

      MovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MovieService,
        factory: MovieService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _session_storage_service__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "K9il":
    /*!**********************************!*\
      !*** ./src/app/store/actions.ts ***!
      \**********************************/

    /*! exports provided: MovieActionTypes, GetAllMovies, GetAllMoviesSuccess, GetAllMoviesFail, GetMovie, GetMovieSuccess, GetMovieFail, ClearErrorMessage */

    /***/
    function K9il(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MovieActionTypes", function () {
        return MovieActionTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetAllMovies", function () {
        return GetAllMovies;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetAllMoviesSuccess", function () {
        return GetAllMoviesSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetAllMoviesFail", function () {
        return GetAllMoviesFail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetMovie", function () {
        return GetMovie;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetMovieSuccess", function () {
        return GetMovieSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetMovieFail", function () {
        return GetMovieFail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClearErrorMessage", function () {
        return ClearErrorMessage;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var MovieActionTypes;

      (function (MovieActionTypes) {
        MovieActionTypes["GET_ALL_MOVIES"] = "[MOVIES API] GET ALL MOVIES";
        MovieActionTypes["GET_ALL_MOVIES_SUCCESS"] = "[MOVIES API] GET ALL MOVIES SUCCESS";
        MovieActionTypes["GET_ALL_MOVIES_FAIL"] = "[MOVIES_API] GET ALL MOVIES FAIL";
        MovieActionTypes["GET_MOVIE"] = "[MOVIES API] GET MOVIE";
        MovieActionTypes["GET_MOVIE_SUCCESS"] = "[MOVIES API] GET MOVIE SUCCESS";
        MovieActionTypes["GET_MOVIE_FAIL"] = "[MOVIES_API] GET MOVIE FAIL";
        MovieActionTypes["CLEAR_ERROR_MESSAGE"] = "[MOVIES ERROR] CLEAR ERROR MESSAGE";
      })(MovieActionTypes || (MovieActionTypes = {}));

      var GetAllMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MovieActionTypes.GET_ALL_MOVIES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var GetAllMoviesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MovieActionTypes.GET_ALL_MOVIES_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var GetAllMoviesFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MovieActionTypes.GET_ALL_MOVIES_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var GetMovie = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MovieActionTypes.GET_MOVIE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var GetMovieSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MovieActionTypes.GET_MOVIE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var GetMovieFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MovieActionTypes.GET_MOVIE_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var ClearErrorMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MovieActionTypes.CLEAR_ERROR_MESSAGE);
      /***/
    },

    /***/
    "QZj+":
    /*!*****************************************************!*\
      !*** ./src/app/services/session_storage.service.ts ***!
      \*****************************************************/

    /*! exports provided: SessionStorageService */

    /***/
    function QZj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionStorageService", function () {
        return SessionStorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SessionStorageService = /*#__PURE__*/function () {
        function SessionStorageService() {
          _classCallCheck(this, SessionStorageService);
        }

        _createClass(SessionStorageService, [{
          key: "checkSessionStorage",
          value: function checkSessionStorage() {
            if (window.sessionStorage) {
              var test = 'test';

              try {
                window.sessionStorage.setItem(test, test);
                window.sessionStorage.getItem('test');
                window.sessionStorage.removeItem('test');
                return true;
              } catch (e) {
                return false;
              }
            } else {
              return false;
            }
          }
        }, {
          key: "addToSessionStorage",
          value: function addToSessionStorage(key, item) {
            try {
              if (this.checkSessionStorage()) {
                if (item) {
                  window.sessionStorage.setItem(key, JSON.stringify(item));
                  return true;
                } else {
                  return false;
                }
              } else {
                console.error('SessionStorage is unavailable');
              }
            } catch (e) {
              console.error('Set Session storage error: ', e);
            }
          }
        }, {
          key: "getFromSessionStorage",
          value: function getFromSessionStorage(key) {
            try {
              if (this.checkSessionStorage()) {
                if (key) {
                  return JSON.parse(window.sessionStorage.getItem(key));
                }
              }

              return false;
            } catch (e) {
              console.error('Get from Session storage error: ', e);
              return false;
            }
          }
        }]);

        return SessionStorageService;
      }();

      SessionStorageService.ɵfac = function SessionStorageService_Factory(t) {
        return new (t || SessionStorageService)();
      };

      SessionStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SessionStorageService,
        factory: SessionStorageService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionStorageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'movieMock';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./routes */
      "a4+m");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/router-store */
      "99NH");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      "agSv");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _store_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./store/reducer */
      "9s53");
      /* harmony import */


      var _store_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./store/effects */
      "gnIP");
      /* harmony import */


      var _services_movie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/movie.service */
      "HGT+");
      /* harmony import */


      var _components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/movie-card/movie-card.component */
      "rwoW");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_session_storage_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/session_storage.service */
      "QZj+");
      /* harmony import */


      var _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ngneat/content-loader */
      "UT+O");
      /* harmony import */


      var _components_error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/error-handler/error-handler.component */
      "cSNe");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_movie_service__WEBPACK_IMPORTED_MODULE_14__["MovieService"], _services_session_storage_service__WEBPACK_IMPORTED_MODULE_18__["SessionStorageService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({
          movies: _store_reducer__WEBPACK_IMPORTED_MODULE_12__["movieReducer"],
          router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["routerReducer"]
        }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_store_effects__WEBPACK_IMPORTED_MODULE_13__["MovieEffects"]]), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_2__["routes"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
          maxAge: 25,
          logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
        }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_19__["ContentLoaderModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_15__["MovieCardComponent"], _components_error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_20__["ErrorHandlerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_19__["ContentLoaderModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_15__["MovieCardComponent"], _components_error_handler_error_handler_component__WEBPACK_IMPORTED_MODULE_20__["ErrorHandlerComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({
              movies: _store_reducer__WEBPACK_IMPORTED_MODULE_12__["movieReducer"],
              router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["routerReducer"]
            }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_store_effects__WEBPACK_IMPORTED_MODULE_13__["MovieEffects"]]), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_2__["routes"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
              maxAge: 25,
              logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
            }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_19__["ContentLoaderModule"]],
            providers: [_services_movie_service__WEBPACK_IMPORTED_MODULE_14__["MovieService"], _services_session_storage_service__WEBPACK_IMPORTED_MODULE_18__["SessionStorageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "a4+m":
    /*!***************************!*\
      !*** ./src/app/routes.ts ***!
      \***************************/

    /*! exports provided: routes */

    /***/
    function a4M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");

      var routes = [{
        path: '',
        pathMatch: 'full',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
      }];
      /***/
    },

    /***/
    "cSNe":
    /*!*********************************************************************!*\
      !*** ./src/app/components/error-handler/error-handler.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ErrorHandlerComponent */

    /***/
    function cSNe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorHandlerComponent", function () {
        return ErrorHandlerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function ErrorHandlerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorHandlerComponent_div_0_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.clearMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
        }
      }

      var ErrorHandlerComponent = /*#__PURE__*/function () {
        function ErrorHandlerComponent() {
          _classCallCheck(this, ErrorHandlerComponent);

          // tslint:disable-next-line:variable-name
          this._errorMessage = '';
          this.clearErrorMessageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ErrorHandlerComponent, [{
          key: "clearMessage",
          value: function clearMessage() {
            this.errorMessage = '';
            this.clearErrorMessageEvent.emit(true);
          }
        }, {
          key: "errorMessage",
          set: function set(message) {
            this._errorMessage = message;
          },
          get: function get() {
            return this._errorMessage;
          }
        }]);

        return ErrorHandlerComponent;
      }();

      ErrorHandlerComponent.ɵfac = function ErrorHandlerComponent_Factory(t) {
        return new (t || ErrorHandlerComponent)();
      };

      ErrorHandlerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorHandlerComponent,
        selectors: [["app-error-handler"]],
        inputs: {
          errorMessage: "errorMessage"
        },
        outputs: {
          clearErrorMessageEvent: "clearErrorMessageEvent"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "errorHandler", 4, "ngIf"], [1, "errorHandler"], ["mat-fab", "", "aria-label", "Close error message", 3, "click"]],
        template: function ErrorHandlerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ErrorHandlerComponent_div_0_Template, 6, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 16px;\n}\n\n.errorHandler[_ngcontent-%COMP%] {\n  display: flex;\n  width: 667px;\n  padding: 16px;\n  background: rgba(244, 48, 33, 0.3);\n  border: 2px solid #303436;\n  border-radius: 8px;\n  justify-content: space-between;\n}\n\nbutton.mat-focus-indicator.mat-fab.mat-button-base.mat-accent[_ngcontent-%COMP%] {\n  background-color: #f43021;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci1oYW5kbGVyL2Vycm9yLWhhbmRsZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Vycm9yLWhhbmRsZXIvZXJyb3ItaGFuZGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5lcnJvckhhbmRsZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNjY3cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ0LDQ4LDMzLC4zKTtcbiAgYm9yZGVyOiAycHggc29saWQgIzMwMzQzNjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmJ1dHRvbi5tYXQtZm9jdXMtaW5kaWNhdG9yLm1hdC1mYWIubWF0LWJ1dHRvbi1iYXNlLm1hdC1hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQzMDIxO1xufVxuIl19 */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-error-handler',
            templateUrl: './error-handler.component.html',
            styleUrls: ['./error-handler.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [];
        }, {
          errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['errorMessage']
          }],
          clearErrorMessageEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "gnIP":
    /*!**********************************!*\
      !*** ./src/app/store/effects.ts ***!
      \**********************************/

    /*! exports provided: MovieEffects */

    /***/
    function gnIP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MovieEffects", function () {
        return MovieEffects;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./actions */
      "K9il");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reducer */
      "9s53");
      /* harmony import */


      var _services_movie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/movie.service */
      "HGT+");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var MovieEffects = function MovieEffects(actions$, movieService, store) {
        var _this4 = this;

        _classCallCheck(this, MovieEffects);

        this.actions$ = actions$;
        this.movieService = movieService;
        this.store = store;
        this.getMovies$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
          return _this4.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GetAllMovies"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (_ref8) {
            var searchTerm = _ref8.searchTerm;
            return _this4.movieService.getMovies(searchTerm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (results) {
              return _actions__WEBPACK_IMPORTED_MODULE_2__["GetAllMoviesSuccess"]({
                results: results
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GetAllMoviesFail"]({
                error: "Failed to retrieve movies for search term: ".concat(searchTerm)
              }));
            }));
          }));
        });
        this.getMovieSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
          return _this4.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GetAllMoviesSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (_ref9) {
            var results = _ref9.results;
            return results.map(function (_ref10) {
              var imdbID = _ref10.imdbID;
              return _actions__WEBPACK_IMPORTED_MODULE_2__["GetMovie"]({
                imdbID: imdbID
              });
            });
          }));
        });
        this.getMovieDetails$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
          return _this4.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GetMovie"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (_ref11) {
            var imdbID = _ref11.imdbID;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["race"])([_this4.store.select(Object(_reducer__WEBPACK_IMPORTED_MODULE_5__["selectMovieDetailsByimdbID"])(imdbID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (movieDetails) {
              return !!movieDetails;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (movieDetails) {
              return _actions__WEBPACK_IMPORTED_MODULE_2__["GetMovieSuccess"]({
                result: movieDetails
              });
            })), _this4.movieService.getMovieById(imdbID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (movieDetails) {
              return _actions__WEBPACK_IMPORTED_MODULE_2__["GetMovieSuccess"]({
                result: movieDetails
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions__WEBPACK_IMPORTED_MODULE_2__["GetMovieFail"]({
                error: "Failed to retrieve data for movie with id: ".concat(imdbID)
              }));
            }))]);
          }));
        });
      };

      MovieEffects.ɵfac = function MovieEffects_Factory(t) {
        return new (t || MovieEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_movie_service__WEBPACK_IMPORTED_MODULE_6__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]));
      };

      MovieEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MovieEffects,
        factory: MovieEffects.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
          }, {
            type: _services_movie_service__WEBPACK_IMPORTED_MODULE_6__["MovieService"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rwoW":
    /*!***************************************************************!*\
      !*** ./src/app/components/movie-card/movie-card.component.ts ***!
      \***************************************************************/

    /*! exports provided: MovieCardComponent */

    /***/
    function rwoW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MovieCardComponent", function () {
        return MovieCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngneat/content-loader */
      "UT+O");

      function MovieCardComponent_div_0_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.movieDetails == null ? null : ctx_r1.movieDetails.Rated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.movieDetails == null ? null : ctx_r1.movieDetails.Runtime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.movieDetails == null ? null : ctx_r1.movieDetails.Released);
        }
      }

      function MovieCardComponent_div_0_p_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.movieDetails == null ? null : ctx_r2.movieDetails.Plot);
        }
      }

      function MovieCardComponent_div_0_list_content_loader_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "list-content-loader", 15);
        }
      }

      function MovieCardComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MovieCardComponent_div_0_div_7_Template, 8, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MovieCardComponent_div_0_p_8_Template, 2, 1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MovieCardComponent_div_0_list_content_loader_9_Template, 1, 0, "list-content-loader", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View on IMDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.movie.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.movie.Title + " poster");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.Title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.movieDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.movieDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.movieDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", true)("href", "https://www.imdb.com/title/" + ctx_r0.movie.imdbID, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var MovieCardComponent = /*#__PURE__*/function () {
        function MovieCardComponent() {
          _classCallCheck(this, MovieCardComponent);
        }

        _createClass(MovieCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MovieCardComponent;
      }();

      MovieCardComponent.ɵfac = function MovieCardComponent_Factory(t) {
        return new (t || MovieCardComponent)();
      };

      MovieCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MovieCardComponent,
        selectors: [["app-movie-card"]],
        inputs: {
          movie: "movie",
          movieDetails: "movieDetails"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "movie-card", 4, "ngIf"], [1, "movie-card"], [1, "movie-card-left-column"], ["onerror", "this.onerror=null;this.src='/assets/lego_batman.jpeg';", 3, "src", "alt"], [1, "movie-card-right-column"], [1, "movie-data"], ["class", "content-bar", 4, "ngIf"], [4, "ngIf"], ["primaryColor", "#8D989E", 4, "ngIf"], [1, "action-items"], ["mat-flat-button", "", "target", "_blank", 1, "imdb-link", 3, "disableRipple", "href"], [1, "content-bar"], [1, "rating-runtime"], [1, "rating"], [1, "runtime"], ["primaryColor", "#8D989E"]],
        template: function MovieCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieCardComponent_div_0_Template, 13, 8, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_3__["ListContentLoaderComponent"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\nh2[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #8D989E;\n  margin-bottom: 5px;\n}\n\n.movie-card[_ngcontent-%COMP%] {\n  display: flex;\n  width: 700px;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  background: #E8EBEE;\n  border: 2px solid #303436;\n  border-radius: 8px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 140px;\n  max-height: 207px;\n  background: #6BD915;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n}\n\n.movie-card-left-column[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  margin-left: 16px;\n}\n\n.movie-card-right-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-right: 16px;\n  margin-left: 16px;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.imdb-link[_ngcontent-%COMP%] {\n  background-color: #f9b44a;\n  min-width: 193px;\n  min-height: 40px;\n  max-width: 193px;\n  max-height: 40px;\n  color: white;\n}\n\n.action-items[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.content-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.rating-runtime[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.rating-runtime[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  border: 1px solid #8D989D;\n  border-radius: 4px;\n  text-align: center;\n  width: 58px;\n  margin-right: 10px;\n  font-family: Courier, serif;\n}\n\n.rating-runtime[_ngcontent-%COMP%]   .runtime[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-family: Ariel, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1jYXJkL21vdmllLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtY2FyZC9tb3ZpZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaDIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzhEOTg5RTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubW92aWUtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA3MDBweDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjRThFQkVFO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzAzNDM2O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTQwcHg7XG4gIG1heC1oZWlnaHQ6IDIwN3B4O1xuICBiYWNrZ3JvdW5kOiAjNkJEOTE1O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cbn1cbiAgLy9ib3JkZXI6IDFweCBzb2xpZCAjOEQ5ODlFO1xuXG4ubW92aWUtY2FyZC1sZWZ0LWNvbHVtbiB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5tb3ZpZS1jYXJkLXJpZ2h0LWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pbWRiLWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAxODAsIDc0KTtcbiAgbWluLXdpZHRoOiAxOTNweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbWF4LXdpZHRoOiAxOTNweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWN0aW9uLWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNvbnRlbnQtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucmF0aW5nLXJ1bnRpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICAucmF0aW5nIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOEQ5ODlEO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDU4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyLCBzZXJpZjtcbiAgfVxuXG4gIC5ydW50aW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LWZhbWlseTogQXJpZWwsIHNhbnMtc2VyaWY7XG4gIH1cbn1cbiJdfQ== */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-movie-card',
            templateUrl: './movie-card.component.html',
            styleUrls: ['./movie-card.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [];
        }, {
          movie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          movieDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map