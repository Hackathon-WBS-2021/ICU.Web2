webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-success {\n  background-color: #28a745 !important;\n}\n.bg-danger {\n  background-color: #dc3545 !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div style=\"text-align: center\">\n    <h1>\n      <span class=\"label label-success\">ICU </span>\n    </h1>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"text-center\">\n        <!-- <button (click)=\"start()\" class=\"btn btn-primary\">Play</button>\n        <button (click)=\"toggleControls()\" class=\"btn btn-success\">\n          Toggle Controls\n        </button>\n        <button (click)=\"pause()\" class=\"btn btn-warning\">Pause</button>\n        <button (click)=\"resume()\" class=\"btn btn-info\">Resume</button>\n        <button (click)=\"sound()\" class=\"btn btn-danger\">\n          Play with Sound\n        </button> -->\n        <button (click)=\"blob()\" class=\"btn btn-info\">Take a photo</button>\n        <button\n          (click)=\"startInterval()\"\n          [disabled]=\"intervalOn\"\n          class=\"btn btn-success\"\n        >\n          Start timer\n        </button>\n        <button\n          (click)=\"stopInterval()\"\n          [disabled]=\"!intervalOn\"\n          class=\"btn btn-danger\"\n        >\n          Stop timer\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"text-center\">\n        <h3>\n          <video #videoElement></video>\n        </h3>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <img [src]=\"image\" />\n    </div>\n    <div class=\"col\">\n      <h1>{{ numberOfPeople }}</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\" *ngFor=\"let faceOcrResult of ocrResult\">\n      <div class=\"well\">\n        <table class=\"table\">\n          <thead></thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">age</th>\n              <td>{{ faceOcrResult.faceAttributes.age }}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">gender</th>\n              <td>{{ faceOcrResult.faceAttributes.gender }}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">neutral</th>\n              <td>\n                <div class=\"progress\">\n                  <div\n                    class=\"progress-bar\"\n                    role=\"progressbar\"\n                    attr.aria-valuenow=\"{{\n                      faceOcrResult.faceAttributes.emotion.neutral\n                    }}\"\n                    attr.aria-valuemin=\"0\"\n                    attr.aria-valuemax=\"1\"\n                    [style.width]=\"\n                      faceOcrResult.faceAttributes.emotion.neutral /\n                        current_max_data | percent: '1.0-1'\n                    \"\n                  ></div>\n                </div>\n              </td>\n            </tr>\n\n            <tr>\n              <th scope=\"row\">happy</th>\n              <td>\n                <div class=\"progress\">\n                  <div\n                    class=\"progress-bar bg-success\"\n                    role=\"progressbar\"\n                    attr.aria-valuenow=\"{{\n                      faceOcrResult.faceAttributes.emotion.happiness\n                    }}\"\n                    attr.aria-valuemin=\"0\"\n                    attr.aria-valuemax=\"1\"\n                    [style.width]=\"\n                      faceOcrResult.faceAttributes.emotion.happiness /\n                        current_max_data | percent: '1.0-1'\n                    \"\n                  ></div>\n                </div>\n              </td>\n            </tr>\n\n            <tr>\n              <th scope=\"row\">sad</th>\n              <td>\n                <div class=\"progress\">\n                  <div\n                    class=\"progress-bar\"\n                    role=\"progressbar\"\n                    attr.aria-valuenow=\"{{\n                      faceOcrResult.faceAttributes.emotion.sadness\n                    }}\"\n                    attr.aria-valuemin=\"0\"\n                    attr.aria-valuemax=\"1\"\n                    [style.width]=\"\n                      faceOcrResult.faceAttributes.emotion.sadness /\n                        current_max_data | percent: '1.0-1'\n                    \"\n                  ></div>\n                </div>\n              </td>\n            </tr>\n\n            <tr>\n              <th scope=\"row\">angry</th>\n              <td>\n                <div class=\"progress\">\n                  <div\n                    class=\"progress-bar bg-danger\"\n                    role=\"progressbar\"\n                    attr.aria-valuenow=\"{{\n                      faceOcrResult.faceAttributes.emotion.anger\n                    }}\"\n                    attr.aria-valuemin=\"0\"\n                    attr.aria-valuemax=\"1\"\n                    [style.width]=\"\n                      faceOcrResult.faceAttributes.emotion.anger /\n                        current_max_data | percent: '1.0-1'\n                    \"\n                  ></div>\n                </div>\n              </td>\n            </tr>\n\n            <tr>\n              <th scope=\"row\">surprised</th>\n              <td>\n                <div class=\"progress\">\n                  <div\n                    class=\"progress-bar\"\n                    role=\"progressbar\"\n                    attr.aria-valuenow=\"{{\n                      faceOcrResult.faceAttributes.emotion.surprise\n                    }}\"\n                    attr.aria-valuemin=\"0\"\n                    attr.aria-valuemax=\"1\"\n                    [style.width]=\"\n                      faceOcrResult.faceAttributes.emotion.surprise /\n                        current_max_data | percent: '1.0-1'\n                    \"\n                  ></div>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(httpClient) {
        this.httpClient = httpClient;
        this.isPlaying = false;
        this.displayControls = true;
        this.intervalOn = false;
        // API
        this.endpoint = "https://icufunctions.azurewebsites.net/api/analyse/image";
        this.ocrResult = "";
        //Config
        this.current_max_data = 1;
        this.sessionid = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.video = this.videoElement.nativeElement;
        this.start();
    };
    AppComponent.prototype.start = function () {
        this.initCamera({ video: true, audio: false });
    };
    AppComponent.prototype.pause = function () {
        this.video.pause();
    };
    AppComponent.prototype.startInterval = function () {
        var _this = this;
        this.sessionid = this.randomString();
        console.log(this.sessionid);
        this.intervalOn = true;
        console.log("activating automated capturing...");
        this.timedSub = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].interval(2000).subscribe(function (val) {
            _this.blob();
        });
    };
    AppComponent.prototype.stopInterval = function () {
        this.intervalOn = false;
        console.log("stopping automated capturing...");
        this.timedSub.unsubscribe();
    };
    AppComponent.prototype.toggleControls = function () {
        this.video.controls = this.displayControls;
        this.displayControls = !this.displayControls;
    };
    AppComponent.prototype.resume = function () {
        this.video.play();
    };
    AppComponent.prototype.blob = function () {
        console.log("snap");
        var canvas = document.createElement("canvas"); // create a canvas
        var ctx = canvas.getContext("2d"); // get its context
        canvas.width = this.video.videoWidth; // set its size to the one of the video
        canvas.height = this.video.videoHeight;
        ctx.drawImage(this.video, 0, 0); // the video
        // ctx.beginPath();
        // ctx.lineWidth = 10;
        // ctx.strokeStyle = "blue";
        // ctx.rect(282, 341, 139, 139);
        // ctx.stroke();
        var data = canvas.toDataURL("image/jpeg");
        this.image = data;
        this.uploadImage(data);
    };
    AppComponent.prototype.sound = function () {
        this.initCamera({ video: true, audio: true });
    };
    AppComponent.prototype.initCamera = function (config) {
        var _this = this;
        var browser = navigator;
        browser.getUserMedia =
            browser.getUserMedia ||
                browser.webkitGetUserMedia ||
                browser.mozGetUserMedia ||
                browser.msGetUserMedia;
        browser.mediaDevices.getUserMedia(config).then(function (stream) {
            _this.video.srcObject = stream;
            _this.video.play();
        });
    };
    AppComponent.prototype.uploadImage = function (blob) {
        var _this = this;
        var cleanedBlob = blob.replace("data:image/jpeg;base64,", "");
        var result = this.httpClient
            .post(this.endpoint + "?SessionId=" + this.sessionid, cleanedBlob)
            .subscribe(function (result) { return _this.bindResults(result); });
    };
    AppComponent.prototype.bindResults = function (results) {
        this.ocrResult = results;
        this.numberOfPeople = results.length;
        console.log(results);
    };
    AppComponent.prototype.randomString = function () {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var length = 8;
        var result = "";
        for (var i = length; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* ViewChild */])("videoElement"),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "videoElement", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map