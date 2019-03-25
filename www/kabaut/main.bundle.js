define(["dojo/string","esri/Color","esri/SpatialReference","esri/config","esri/geometry/Circle","esri/geometry/Extent","esri/geometry/Point","esri/graphic","esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/GraphicsLayer","esri/layers/ImageParameters","esri/layers/TileInfo","esri/layers/WebTiledLayer","esri/map","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleMarkerSymbol","esri/symbols/jsonUtils","esri/urlUtils"], function(__WEBPACK_EXTERNAL_MODULE_dojo_string__, __WEBPACK_EXTERNAL_MODULE_esri_Color__, __WEBPACK_EXTERNAL_MODULE_esri_SpatialReference__, __WEBPACK_EXTERNAL_MODULE_esri_config__, __WEBPACK_EXTERNAL_MODULE_esri_geometry_Circle__, __WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__, __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__, __WEBPACK_EXTERNAL_MODULE_esri_graphic__, __WEBPACK_EXTERNAL_MODULE_esri_layers_ArcGISDynamicMapServiceLayer__, __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, __WEBPACK_EXTERNAL_MODULE_esri_layers_ImageParameters__, __WEBPACK_EXTERNAL_MODULE_esri_layers_TileInfo__, __WEBPACK_EXTERNAL_MODULE_esri_layers_WebTiledLayer__, __WEBPACK_EXTERNAL_MODULE_esri_map__, __WEBPACK_EXTERNAL_MODULE_esri_symbols_PictureMarkerSymbol__, __WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleFillSymbol__, __WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleLineSymbol__, __WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleMarkerSymbol__, __WEBPACK_EXTERNAL_MODULE_esri_symbols_jsonUtils__, __WEBPACK_EXTERNAL_MODULE_esri_urlUtils__) { return webpackJsonp(["main"],{

/***/ "./node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'app-wrapper'\">\n\n    <router-outlet></router-outlet>\n   \n    <div [hidden]=\"!isMapShow\">\n        <emap \n        [mapID]=\"mapID\" \n        [mapWidth]=\"mapWidth\" \n        [mapHeight]=\"mapHeight\"></emap>\n    </div>    \n</div>\n<loader [loadingText]=\"content ? content.loadingText : ''\"></loader>\n<i *ngIf=\"isOfflineShow\" class=\"glyphicon glyphicon-remove-sign\"></i>\n<i class=\"glyphicon glyphicon-remove-sign out\"></i>\n\n<!--\n<button (click)=\"testHttpClick()\" style=\"text-align: center; height: 50px;width: 200px; position: absolute; top: 200px; left: 50px;\"> test http </button>\n<button (click)=\"testHttpClientClick()\" style=\"text-align: center; height: 50px;width: 200px; position: absolute; top: 260px; left: 50px;\"> test http client </button>\n<button (click)=\"testJqueryClick()\" style=\"text-align: center; height: 50px;width: 200px; position: absolute; top: 320px; left: 50px;\"> test jquery </button>\n-->"

/***/ }),

/***/ "./src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".details-bar{background-color:#212329}.details-bar .home-details-bar{color:#fff;text-align:center;height:124px}.details-bar .home-details-bar .logs{float:left;font-size:30px;position:absolute;top:51px;left:165px}.details-bar .home-details-bar .logo{position:absolute;top:19px;right:43px}.details-bar .home-details-bar .system-name{font-size:23px;display:inline-block;position:absolute;top:86px;right:47px;line-height:29px}.details-bar .home-details-bar .car-name{font-size:37px;margin-top:46px;line-height:31px;display:inline-block}.details-bar .home-details-bar .version{font-size:23px;position:absolute;top:51px;left:37px;line-height:23px}.details-bar .minimize-event-details-bar{height:79px;background-image:linear-gradient(0deg,#24262c,#3a3d46)}.details-bar .minimize-event-details-bar .right-button{display:inline-block;height:78px;float:right;width:81px;border-left:2px solid #121316}.details-bar .minimize-event-details-bar .right-button .seperator{border-left:1px solid #464a54;display:inline-block;width:2px;height:78px;float:left}.details-bar .minimize-event-details-bar .right-button .shape-706{display:inline-block;margin-top:22px}.details-bar .minimize-event-details-bar .right-button .back{display:block;margin:18px auto}.details-bar .minimize-event-details-bar .event-info{width:95%;background-image:linear-gradient(0deg,#24262c,#3a3d46);color:#fff;position:relative;height:100%}.details-bar .minimize-event-details-bar .event-info .first-col{width:270px;height:100%;float:right;padding-top:10px}.details-bar .minimize-event-details-bar .event-info .first-col .event-type-label{margin-top:10px}.details-bar .minimize-event-details-bar .event-info .first-col .in-control-wrapper{display:none}.details-bar .minimize-event-details-bar .event-info .first-col .counter-wrapper,.details-bar .minimize-event-details-bar .event-info .first-col .counter-wrapper .counter{display:inline-block}.details-bar .minimize-event-details-bar .event-info .first-col .counter-wrapper .counter.large{font-size:42px;font-weight:700;margin-right:10px;float:right;margin-top:-5px}.details-bar .minimize-event-details-bar .event-info .first-col .counter-wrapper .counter.small{font-size:22px;margin-top:10px}.details-bar .minimize-event-details-bar .event-info .first-col .dots-wrapper{position:unset;margin-top:10px;margin-left:30px;text-align:left}.details-bar .minimize-event-details-bar .event-info .double-seperator{height:78px}.details-bar .minimize-event-details-bar .event-info .second-col{padding:0 31px 16px 0;width:723px}.details-bar .minimize-event-details-bar .event-info .second-col .desc,.details-bar .minimize-event-details-bar .event-info .second-col .location{width:675px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.details-bar .minimize-event-details-bar .event-info .third-col{width:290px}.details-bar .minimize-event-details-bar .event-info .third-col .car-status,.details-bar .minimize-event-details-bar .event-info .third-col .tel-number{display:none}.details-bar .minimize-event-details-bar .event-info .third-col .hours-days{border-bottom:none;padding-top:26px}.details-bar .minimize-event-details-bar .event-info .third-col .hours-days .icn-clock{right:38px}.details-bar .minimize-event-details-bar .event-info .third-col .hours-days .hours{right:45px}.details-bar .minimize-event-details-bar .event-info .third-col .hours-days .days{right:50px}.details-bar .minimize-event-details-bar .left-button{float:left;width:81px;border-right:1px solid #121316;display:inline-block}.details-bar .minimize-event-details-bar .left-button .seperator{float:right}.details-bar .minimize-event-details-bar .left-button .date-text{display:inline-block;padding-top:20px;color:#fff;font-size:25px;font-weight:700;text-align:center}.left-button .details-bar .minimize-event-details-bar .left-button .date-text{width:200px!important}.details-bar .default-details-bar{text-align:center;height:79px}.details-bar .default-details-bar .title-text{color:#fff;font-size:37px;font-weight:700;line-height:30px;margin-top:24px;display:inline-block}.details-bar .default-details-bar .left-button,.details-bar .default-details-bar .right-button{display:inline-block;height:78px}.details-bar .default-details-bar .left-button .seperator,.details-bar .default-details-bar .right-button .seperator{border-left:1px solid #464a54;display:inline-block;width:2px;height:78px}.details-bar .default-details-bar .left-button .shape-706,.details-bar .default-details-bar .left-button .tab-icn-ok,.details-bar .default-details-bar .right-button .shape-706,.details-bar .default-details-bar .right-button .tab-icn-ok{display:inline-block;margin-top:22px}.details-bar .default-details-bar .left-button .back,.details-bar .default-details-bar .right-button .back{display:inline-block;margin-top:19px}.details-bar .default-details-bar .right-button{float:right;width:81px;border-left:2px solid #121316}.details-bar .default-details-bar .right-button .seperator{float:left}.details-bar .default-details-bar .left-button{float:left;width:81px;border-right:1px solid #121316}.details-bar .default-details-bar .left-button .seperator{float:right}.details-bar .default-details-bar .left-button .date-text{display:inline-block;padding-top:20px;color:#fff;font-size:25px;font-weight:700;text-align:center}.left-button .details-bar .default-details-bar .left-button .date-text{width:200px!important}.glyphicon{font-size:32px;float:right;line-height:28px;margin-right:10px}.event-info,.glyphicon{color:#fff;position:relative}.event-info{width:100%;background-image:linear-gradient(0deg,#24262c,#3a3d46);height:168px}.event-info .first-col{width:199px;height:100%;float:right;position:relative}.event-info .first-col .event-type-label{font-size:27px;line-height:21px;padding:8px 21px;float:right;margin-top:23px}.event-info .first-col .in-control-wrapper{float:right;margin-top:30px;margin-right:40px}.event-info .first-col .in-control-wrapper .fas{color:#268a0f}.event-info .first-col .counter-wrapper{text-align:center;clear:both}.event-info .first-col .counter-wrapper .counter{display:inline-block}.event-info .first-col .counter-wrapper .counter.large{font-size:42px;font-weight:700;line-height:42px;margin-top:20px}.event-info .first-col .counter-wrapper .counter.small{font-size:22px;line-height:26px}.event-info .first-col .dots-wrapper{position:absolute;right:70px;top:131px}.event-info .first-col .dots-wrapper .dot,.event-info .first-col .dots-wrapper .dot-selected{height:11px;width:11px;display:inline-block;border-radius:8px;margin:2px}.event-info .first-col .dots-wrapper .dot{border:3px solid #777880;background-color:transparent}.event-info .first-col .dots-wrapper .dot-selected{background-color:#4eccff;border:3px solid #4eccff}.event-info .second-col{padding:15px 31px 16px 0;float:right;text-align:right;height:100%;width:770px}.event-info .second-col .desc,.event-info .second-col .location{float:right;width:100%}.event-info .second-col .desc{font-size:30px;font-weight:700;line-height:35px}.event-info .second-col .location{color:#4eccff;font-size:25px;margin-top:11px;line-height:28px}.event-info .third-col{height:100%;float:right;text-align:right;width:394px}.event-info .third-col .hours-days{text-align:right;width:100%;border-bottom:2px solid #121316;height:48px;font-size:27px;line-height:27px;direction:rtl;padding-top:11px}.event-info .third-col .hours-days .icn-clock{display:inline-block;position:relative;right:94px}.event-info .third-col .hours-days .hours{font-weight:700;font-size:24px;display:inline-block;line-height:25px;position:relative;right:105px}.event-info .third-col .hours-days .days{font-size:22px;display:inline-block;line-height:22px;position:relative;right:120px}.event-info .third-col .car-status{width:100%;border-top:2px solid #464a54;border-bottom:2px solid #121316;height:68px}.event-info .third-col .car-status .wrapper{width:49%;float:right;height:100%}.event-info .third-col .car-status .layer-616,.event-info .third-col .car-status .vector-smart-object{display:inline-block;margin-right:20px;margin-top:13px;margin-left:20px}.event-info .third-col .car-status .car,.event-info .third-col .car-status .employee{text-align:center;font-size:24px;font-weight:700;line-height:20px;display:inline-block;vertical-align:top;margin-top:22px;padding-right:60px}.event-info .third-col .car-status .seperator{height:62px;width:3px;display:inline-block;border-right:1px solid #121316;border-left:1px solid #464a54;float:right}.event-info .third-col .tel-number{border-top:2px solid #464a54;text-align:right;width:100%;font-size:27px;line-height:27px;height:48px;direction:rtl}.event-info .third-col .tel-number .phone{display:inline-block;padding:0;float:right;margin-top:11px;margin-right:53px;margin-left:15px}.event-info .third-col .tel-number span{display:inline-block;padding-top:11px}.event-info .third-col .tel-number .tel{font-weight:700;margin-left:16px;float:right;font-size:24px}.event-info .third-col .tel-number .person{font-size:22px}.event-info .double-seperator{border-right:2px solid #121316;border-left:1px solid #464a54;width:3px;height:100%;float:right}.event-list-wrapper{background-color:#4e5560;max-height:calc(100vh - 80px);overflow-y:auto}.event-list-wrapper .event-list-container{padding:37px}.event-list-wrapper .event-list-container .event-info{margin-bottom:37px}.event-list-wrapper .error-wrapper{height:243px}.event-list-wrapper .error-wrapper .error{font-size:22px;color:#43f51b;text-align:center;display:block;height:58px;padding-top:15px}.menu-container{background-color:transparent}.menu-container .big-car,.menu-container .fireman-huge,.menu-container .plus,.menu-container .report-icn-accident,.menu-container .report-icn-against-traffic,.menu-container .report-icn-broken,.menu-container .report-icn-loaded,.menu-container .report-icn-red-light,.menu-container .report-icn-smoke,.menu-container .star,.menu-container .tools{display:inline-block}.menu-container .big-car{margin-top:29px}.menu-container .fireman-huge{margin-top:25px}.menu-container .tools{margin-top:27px}.menu-container .plus{margin-top:30px}.menu-container .star{margin-top:25px}.menu-container .report-icn-against-traffic{margin-top:18px}.menu-container .report-icn-accident{margin-top:15px}.menu-container .report-icn-broken,.menu-container .report-icn-loaded,.menu-container .report-icn-red-light,.menu-container .report-icn-smoke{margin-top:18px}.menu-container .buttons-wrapper .button{margin-bottom:25px;height:69px;width:105px;border-radius:5px;background:linear-gradient(270deg,#3a3d46,#24262c);color:#fff;text-align:center;padding:12px 17px;display:table;border:2px solid transparent}.menu-container .buttons-wrapper .button.clicked{color:#4eccff;border:2px solid #4eccff}.menu-container .buttons-wrapper .button span{display:table-cell;line-height:22px;font-size:18px;font-weight:700;vertical-align:middle}.qualified-popup{border:4px solid #fff;width:768px;height:384px;border-radius:10px;margin:auto;position:absolute;z-index:3;left:345px;top:265px;background-color:#4e5560}.qualified-popup .tab-icn-x{display:inline-block;margin-top:20px}.qualified-popup .wrapper{padding:60px 45px}.qualified-popup .wrapper .text-wrapper{width:235px;margin:auto}.qualified-popup .wrapper .error-wrapper{width:105px;float:right;margin-top:10px}.qualified-popup .wrapper .error-wrapper .error-star{display:inline-block;color:red;font-size:20px;margin-left:5px;width:13px;float:right}.qualified-popup .wrapper .error-wrapper .notification{display:inline-block;color:#8f9499;font-size:20px}.qualified-popup .wrapper .good-text{font-size:29px;color:#fff;display:inline-block;float:right;margin-top:8px;width:92px}.qualified-popup .wrapper .popup-icn-toggle-off,.qualified-popup .wrapper .popup-icn-toggle-on{display:inline-block;margin-right:20px}.active-event{width:173px;height:174px;position:absolute;bottom:18px;right:22px;border:8px solid #fff;border-radius:85px;background-color:#4eccff}.active-event .counter-wrapper{text-align:center;margin-top:33%}.active-event .counter-wrapper .counter{display:inline-block;color:#fff}.active-event .counter-wrapper .counter.large{font-size:42px;font-weight:700;line-height:42px}.active-event .counter-wrapper .counter.small{font-size:22px;line-height:26px}.active-event .dots-wrapper{position:absolute;right:41px;top:111px}.active-event .dots-wrapper .dot,.active-event .dots-wrapper .dot-selected{height:11px;width:11px;display:inline-block;border-radius:8px;margin:2px}.active-event .dots-wrapper .dot{border:3px solid #95e2ff;background-color:#4eccff}.active-event .dots-wrapper .dot-selected{background-color:#fff;border:3px solid #fff}.active-event .virtual-event{font-size:26px;color:#fff;display:inline-block;text-align:center;position:absolute;top:55px;left:12px;font-weight:700}.menu-button{width:255px;height:258px;border-radius:5px;margin-left:37px;padding:0;border:none;vertical-align:top;background-image:linear-gradient(0deg,#24262c,#3a3d46);position:relative}.menu-button:disabled .text-wrapper span{color:#525252}.menu-button:disabled .image-wrapper span{opacity:.5}.menu-button.car{margin:0}.menu-button.star{position:relative}.menu-button .image-wrapper{height:144px;position:relative}.menu-button .seperator-bottom,.menu-button .seperator-top{width:100%;height:2px}.menu-button .seperator-bottom{background-color:#464a54}.menu-button .seperator-top{background-color:#121316}.menu-button .text-wrapper{height:112px}.menu-button .text-wrapper span{height:65px;width:100px;line-height:36px;font-size:30px;margin:23px auto;margin-top:16px;color:#fff;display:inline-block;font-weight:700}.menu-button .circle{border:4px solid #fff;border-radius:50%;width:66px;height:66px;text-align:center;position:absolute;top:-20px;right:-24px}.menu-button .circle .events-count{font-size:29px;color:#fff;position:relative;top:6px}.map-buttons-wrapper{position:absolute;top:179px;left:169px;width:90px;height:450px}.map-buttons-wrapper .map-button{text-align:-webkit-center;display:block;width:70px;height:70px;background-color:#fff;box-shadow:0 0 10px 0 rgba(0,0,0,.2);border:1px solid rgba(33,35,41,.2);margin:20px auto;padding-top:12px}.map-buttons-wrapper .map-button .event-location{background-position:-150px -10px;width:41px;height:41px}.map-buttons-wrapper .map-button .gps-location{background-position:-10px -80px;width:41px;height:41px}.map-buttons-wrapper .map-button .gps-location-on{background-position:-71px -80px;width:41px;height:41px}.map-buttons-wrapper .map-button .ortho-bg{background-position:-10px -10px;width:50px;height:50px;margin-top:-2px}.map-buttons-wrapper .map-button .streets-bg{background-position:-80px -10px;width:50px;height:50px;margin-top:-2px}.map-buttons-wrapper .zoom-seperator{display:block;width:67px;height:1px;background-color:#c3c1ba;top:66px;margin:0 auto}.map-buttons-wrapper .zoom-buttons{text-align:-webkit-center;display:block;width:70px;height:70px;background-color:#fff;box-shadow:0 0 10px 0 rgba(0,0,0,.2);border:1px solid rgba(33,35,41,.2);margin:0 auto;padding-top:12px}.map-buttons-wrapper .zoom-buttons .zoom-out{background-position:-150px -71px;width:41px;height:41px}.map-buttons-wrapper .zoom-buttons .zoom-in{background-position:-10px -141px;width:41px;height:41px}.default-layout .detailsbar-wrapper{position:relative;top:0;left:0;width:100%}.home-layout{height:100%;background-color:#474e5d}.home-layout .background-image{display:inline-block;position:absolute;top:calc(50vh - 253px);left:calc(50vw - 337px)}.home-layout .menu-wrapper{position:relative;top:calc(50vh - 207px);text-align:center}.out{font-size:1px!important;color:#474e5d!important}.select-div{position:relative;width:100%;font-size:26px}.select-div:after{content:\" \";background-image:url(" + escape(__webpack_require__("./src/app/images/Sprite.png")) + ");background-position:-673px -1791px;width:25px;height:16px;font-size:40px;font-weight:700;color:#0ebeff;left:12px;top:33px;padding:15px 0 0 8px;position:absolute;pointer-events:none;outline:none}select::-ms-expand{display:none}.select-div label{display:inline;font-weight:400}.select-div select{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:block;width:100%;height:71px;margin:5px 0;padding:0 24px;font-size:26px;color:#333;background-color:#fff;background-image:none;-ms-word-break:normal;word-break:normal;direction:rtl}.sac-wrapper{width:100%;position:relative}.sac-wrapper .search-input{width:100%;height:57px;border:2px solid #929292;margin-bottom:20px;padding:0 21px;font-size:26px;outline:none}.sac-wrapper .search-input:focus{box-shadow:inset 0 0 8px #28bbf5;border:1px solid #28bbf5}.sac-wrapper .search-results{width:100%;position:absolute;top:57px;left:0;border:1px solid #929292;padding:10px;z-index:9;background:#fff;max-height:300px;overflow:auto;font-size:23px}.sac-wrapper .search-results .search-row{margin-bottom:10px}.loader-wrapper{position:absolute;z-index:2;left:0;top:0;background-color:#000;opacity:.7;width:100%;height:100%;color:#fff;text-align:center}.loader-wrapper .fas{position:absolute;top:48%;right:48%}.loader-wrapper .loading-text{position:absolute;top:39%;right:45%;font-size:29px}.esriSimpleSliderTL{left:240px}.event-details-wrapper .event-info{margin-bottom:0}.event-details-wrapper .event-info .second-col{width:844px}.event-details-wrapper .buttons-wrapper{position:absolute;top:195px;right:22px;z-index:1;height:608px;overflow-y:auto}.event-details-wrapper .buttons-wrapper .button{margin-bottom:25px;height:69px;width:105px;border-radius:5px;background:linear-gradient(270deg,#3a3d46,#24262c);color:#fff;text-align:center;padding:12px 17px}.event-details-wrapper .buttons-wrapper .button span{display:inline-block;line-height:22px;font-size:18px;font-weight:700}.event-details-wrapper .buttons-wrapper .button.second{position:absolute;top:520px;right:300px}.event-details-wrapper .buttons-wrapper .button.first{position:absolute;top:520px;right:200px}.event-details-wrapper .additional-buttons{position:fixed;bottom:22px;right:154px;z-index:1}.event-details-wrapper .additional-buttons .button{height:69px;width:105px;border-radius:5px;background:linear-gradient(270deg,#3a3d46,#24262c);color:#fff;text-align:center;padding:7px 17px;float:right;margin-left:20px}.event-details-wrapper .additional-buttons .button span{display:inline-block;margin-top:18px}.event-details-wrapper .process-wrapper{position:absolute;top:168px;left:0;z-index:1;background-color:#525252;opacity:.9;height:662px;width:151px}.event-details-wrapper .process-wrapper .process-state{text-align:right;position:relative;color:#fff;width:150px;height:84px;top:45px}.event-details-wrapper .process-wrapper .process-state .event-start{font-size:24px;font-weight:700;display:inline-block;position:absolute;line-height:24px;right:30px}.event-details-wrapper .process-wrapper .process-state .event-time{border:none!important;border:0!important;font-size:21px;position:relative;top:30px;right:32px}.event-details-wrapper .process-wrapper .process-state .event-time.last{top:50px}.event-details-wrapper .process-wrapper .process-state .event-dot{width:20px;height:20px;display:inline-block;border-radius:10px;position:absolute;left:18px;border:3px solid #fff}.event-details-wrapper .process-wrapper .process-state .event-dot .inner-event-dot{width:10px;height:10px;display:inline-block;border-radius:5px;background-color:#4eccff;position:absolute;top:2px;right:2px}.event-details-wrapper .process-wrapper .process-state .process-line{width:4px;height:65px;background-color:#fff;display:inline-block;position:absolute;top:20px;left:26px}.event-details-wrapper .finish-report{background-color:#52c637;border-radius:106px;width:168px;height:168px;position:fixed;bottom:19px;left:35px;z-index:2;text-align:center;border:4px solid #fff}.event-details-wrapper .finish-report .finish-report-text{font-size:50px;font-weight:700;color:#fff;margin-top:40px;display:inline-block}.event-details-wrapper .finish-report .disable-finish-report{display:inline-block;width:100%;height:100%;z-index:3}.event-details-wrapper .finish-report .disable-finish-report .fa-spinner{margin-top:48px;margin-right:4px}.event-details-wrapper .redirect-popup{width:300px;height:300px;text-align:center;bottom:20px;left:500px;position:absolute;z-index:2;border:2px solid red;background-color:#fff;border-radius:100px;padding:20px}.event-details-wrapper .redirect-popup .close,.event-details-wrapper .redirect-popup .counter{font-size:20px;font-weight:700}.overlay{position:absolute;background-color:#000}.auts-popup{border:4px solid #fff;width:768px;height:384px;border-radius:10px;margin:auto;position:absolute;z-index:3;left:345px;top:265px;background-color:#4e5560}.auts-popup .tab-icn-x{display:inline-block;margin-top:20px}.auts-popup .km-wrapper{padding-top:99px;padding-right:262px;padding-left:262px}.auts-popup .km-wrapper .input-wrapper{margin-bottom:15px}.auts-popup .km-wrapper .input-wrapper input{height:71px;width:167px;float:right;border:none;text-align:right;padding:15px;font-size:26px;color:#4f5660;direction:ltr}.auts-popup .km-wrapper .input-wrapper .type{width:69px;background-color:#343742;height:71px;color:#fff;font-size:26px;display:inline-block;text-align:center;padding-top:15px}.auts-popup .km-wrapper .error-star{margin-left:5px;width:13px}.auts-popup .km-wrapper .error-star,.auts-popup .km-wrapper .notification{display:inline-block;color:red;font-size:20px;float:right}.fa-tasks{color:#4eccff;font-size:29px}.event-details-promt{padding:1px!important;border-radius:5px!important}.event-details-promt .ajs-commands{margin:0!important;right:7px;height:73px;width:73px;top:7px;border-left:1px solid #464a54}.event-details-promt .ajs-commands button.ajs-close{background-image:url(" + escape(__webpack_require__("./src/app/images/Sprite.png")) + ")!important;background-position:-638px -1753px!important;width:43px!important;height:40px!important;margin-right:15px;margin-top:15px}.event-details-promt .ajs-header{margin:6px;background-color:#000;color:#fff;text-align:center;font-size:29px;font-weight:700}.event-details-promt .ajs-body{text-align:center;font-size:30px;color:#212329}.event-details-promt .ajs-footer{background:#fff;border-top:1px solid #dcdcdc;border-radius:0;margin:0;padding:21px}.event-details-promt .ajs-footer .ajs-buttons.ajs-primary .ajs-button{width:212px;height:70px;border-radius:5px;background-color:#fff;border:2px solid #4eccff;color:#4eccff;font-size:29px;font-weight:700;outline:none}.event-details-promt .ajs-footer .ajs-buttons.ajs-primary .ajs-button.ajs-cancel{background-color:#4eccff;color:#fff}.event-details-promt .ajs-footer .ajs-buttons.ajs-primary .ajs-button.ajs-ok{margin-right:20px}.chat-wrapper{width:485px;height:672px;margin:auto;position:fixed;border-radius:10px;z-index:3;top:calc(50vh - 336px);left:calc(50vw - 242px);background-color:#fff}.chat-wrapper .chat-header{height:80px;margin:6px;background-color:#222328}.chat-wrapper .chat-header .truck-image{width:78px;height:56px;display:inline-block;border-left:2px solid #121316;float:left;position:relative}.chat-wrapper .chat-header .truck-image .truck-image-wrapper{background-color:#fff;width:56px;height:56px;border-radius:30px;border:2px solid #4eccff;display:inline-block;position:absolute;top:12px;right:9px;padding:10px}.chat-wrapper .chat-header .truck-image .onmap-icn-car2{display:inline-block}.chat-wrapper .chat-header .back-wrapper{width:81px;height:100%;padding:21px 29px;border-right:2px solid #464a54;display:inline-block;float:right}.chat-wrapper .chat-header .back-wrapper .back{display:inline-block}.chat-wrapper .chat-header .chat-header-text{width:309px;height:100%;font-size:29px;font-weight:700;text-align:center;color:#fff;display:inline-block;border-right:2px solid #464a54;padding-top:17px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;border-left:2px solid #121316;float:right}.chat-wrapper .chat-body{height:475px;margin:6px;overflow-y:auto;background-color:#d7d7d7}.chat-wrapper .chat-body .message-wrapper{width:60%;background-color:#fff;padding:10px;float:left;border-radius:10px;margin-bottom:10px;margin-left:10px;margin-right:0}.chat-wrapper .chat-body .message-wrapper.myMessage{background-color:#aaf397;float:right;margin-left:0;margin-right:10px}.chat-wrapper .chat-body .message-wrapper .message-time{font-size:15px;color:#8f9499}.chat-wrapper .chat-body .message-wrapper .message-content{font-size:20px;color:#212329}.chat-wrapper .chat-body .message-wrapper .message-owner{font-size:20px;font-weight:700}.chat-wrapper .chat-footer{border-top:1px solid #dcdcdc;padding:0 15px}.chat-wrapper .chat-footer .chat-input{width:415px;float:right;border:none;resize:none;font-size:20px;color:#4f5660;outline:none}.chat-wrapper .chat-footer .send-wrapper{display:inline-block;height:85px}.chat-wrapper .chat-footer .popup-icn-send2,.chat-wrapper .chat-footer .popup-icn-send2-disabled{display:inline-block;float:left;margin-top:30px}.layers-popup{border:4px solid #fff;width:485px;max-height:672px;border-radius:10px;position:absolute;z-index:3;top:calc(50vh - 336px);left:calc(50vw - 242px);background-color:#fff;overflow:hidden}.layers-popup .details-bar .title-text{font-size:30px}.layers-popup .tab-icn-x{display:inline-block;margin-top:20px}.layers-popup .layers-wrapper{width:100%;max-height:450px;overflow:auto}.layers-popup .layers-wrapper .layer-container{padding:20px;position:relative;border-bottom:1px solid #dcdcdc}.layers-popup .layers-wrapper .layer-container label{background-color:#fff;border:2px solid #4eccff;border-radius:5px;cursor:pointer;height:30px;right:5px;position:absolute;top:10px;width:30px;margin-bottom:0!important;margin-top:5px}.layers-popup .layers-wrapper .layer-container label span{display:inline-block;width:425px;margin-right:40px;font-size:23px;line-height:18px}.layers-popup .layers-wrapper .layer-container label:after{border:3px solid #fff;border-top:none;border-right:none;content:\"\";height:15px;right:4px;opacity:0;position:absolute;top:1px;transform:rotate(-45deg);width:20px}.layers-popup .layers-wrapper .layer-container input[type=checkbox]{visibility:hidden}.layers-popup .layers-wrapper .layer-container input[type=checkbox]:checked+label{background-color:#4eccff;border-color:#4eccff}.layers-popup .layers-wrapper .layer-container input[type=checkbox]:checked+label:after{opacity:1}.employees-team-wrapper{padding:38px 29px;background-color:#4e5560;height:751px}.employees-team-wrapper .left-container,.employees-team-wrapper .right-container{background-color:#1b1e24;float:right}.employees-team-wrapper .left-container .title,.employees-team-wrapper .right-container .title{font-size:30px;text-align:center;height:94px;color:#fff;padding-top:25px;width:100%}.employees-team-wrapper .left-container .title.btn,.employees-team-wrapper .right-container .title.btn{color:#4eccff;font-size:25px}.employees-team-wrapper .left-container .seperator,.employees-team-wrapper .right-container .seperator{border-top:2px solid #121316;border-bottom:1px solid #464a54;width:100%}.employees-team-wrapper .right-container{width:450px;margin-left:37px}.employees-team-wrapper .right-container .team-wrapper{height:481px;overflow-y:auto;padding-top:40px;padding-right:37px}.employees-team-wrapper .left-container{width:898px}.employees-team-wrapper .left-container .rows-wrapper{padding-top:39px;padding-right:38px;padding-left:21px;height:579px;overflow-y:auto}.employees-team-wrapper .left-container .rows-wrapper .avalible-employees .employee-wrapper{float:right;margin-bottom:22px;margin-left:54px}.employees-team-wrapper .left-container .rows-wrapper .avalible-employees .employee-wrapper.last{margin-left:0}.employees-team-wrapper .error-wrapper{height:243px}.employees-team-wrapper .error-wrapper .error{font-size:22px;color:#43f51b;text-align:center;display:block;height:115px;padding-top:15px}.employee-wrapper{width:167px;height:87px;border:4px solid #fff;border-radius:10px;padding:17px}.employee-wrapper .fireman-small{display:inline-block;float:right}.employee-wrapper .employee-name{font-size:20px;font-weight:700;color:#fff;line-height:20px;text-align:center;display:inline-block;width:70px}.team-employee{display:inline-block;width:168px;height:168px;border-radius:10px;background-color:#fff;margin-left:37px;margin-bottom:37px;vertical-align:top;float:right}.team-employee .fireman-big{display:block;margin:15px auto;margin-bottom:7px}.team-employee .team-employee-name{display:block;font-weight:700;font-size:30px;color:#212329;line-height:28px;text-align:center;width:100px;margin:auto}.employees-set-wrapper{height:171px;width:100%;background-color:#35363d;border-radius:15px;margin-bottom:37px}.employees-set-wrapper .image-wrapper{width:85px;padding:76px 28px;float:right;height:171px}.employees-set-wrapper .image-wrapper .popup-icn-arrows{display:inline-block}.employees-set-wrapper .seperator-set{border-right:1px solid #434651;border-left:2px solid #212329;height:171px;float:right}.employees-set-wrapper .employees-set{padding:23px 18px;overflow:hidden;height:100%}.employees-set-wrapper .employees-set .team-name{font-size:25px;line-height:25px;color:#fff;text-align:center;margin-bottom:13px}.employees-set-wrapper .employees-set .employees-container{width:714px;direction:rtl;white-space:nowrap;overflow-x:auto}.employees-set-wrapper .employees-set .employees-container .employee-wrapper{display:inline-block;margin-left:11px;white-space:normal;vertical-align:top}.supplies .supplies-wrapper{height:751px;background-color:#4e5560}.supplies .supplies-wrapper .supplies-background{display:inline-block;margin-top:5px;width:479px;height:739px;float:right}.supplies .supplies-wrapper .supplies-data-wrapper{padding-right:124px;padding-top:80px;padding-bottom:49px;width:66%;display:inline-block;float:right;text-align:right}.supplies .supplies-wrapper .supplies-data-wrapper .select-div{width:630px;float:right}.supplies .supplies-wrapper .supplies-data-wrapper .select-div:after{top:68px}.supplies .supplies-wrapper .supplies-data-wrapper .supplies-row{height:200px}.supplies .supplies-wrapper .supplies-data-wrapper .supplies-row .supplies-cell{width:237px;float:right;margin-left:157px}.supplies .supplies-wrapper .supplies-data-wrapper .supplies-row .supplies-cell .label-text{font-size:29px;color:#fff;margin-bottom:21px;font-weight:400}.supplies .supplies-wrapper .supplies-data-wrapper .supplies-row .supplies-cell .input-wrapper{margin-bottom:15px}.supplies .supplies-wrapper .supplies-data-wrapper .supplies-row .supplies-cell .input-wrapper input{height:71px;width:167px;float:right;border:none;text-align:right;padding:15px;font-size:26px;color:#4f5660;direction:ltr}.supplies .supplies-wrapper .supplies-data-wrapper .supplies-row .supplies-cell .input-wrapper .type{width:69px;background-color:#343742;height:71px;color:#fff;font-size:26px;display:inline-block;text-align:center;padding-top:15px}.supplies .supplies-wrapper .supplies-data-wrapper .error-wrapper{float:right;width:100%}.supplies .supplies-wrapper .supplies-data-wrapper .error-star{display:inline-block;color:red;font-size:20px;margin-left:5px;width:13px;float:right}.supplies .supplies-wrapper .supplies-data-wrapper .notification{display:inline-block;color:red;font-size:20px}.supplies .supplies-wrapper .supplies-data-wrapper .good-text{font-size:29px;color:#fff;display:inline-block;float:right;margin-top:8px;width:92px}.supplies .supplies-wrapper .supplies-data-wrapper .popup-icn-toggle-off,.supplies .supplies-wrapper .supplies-data-wrapper .popup-icn-toggle-on{display:inline-block;margin-right:20px}.supplies .supplies-wrapper .supplies-data-wrapper select{margin-top:39px;width:630px;height:70px;font-size:26px;color:#4f5660;padding:0 19px;direction:rtl}.logs-list{background-color:#4e5560;max-height:calc(100vh - 80px);overflow-y:auto}.logs-list .logs-container{padding:37px}.logs-list .logs-container .logs-actions{border:1px solid #fff;margin-bottom:20px}.logs-list .logs-container .logs-actions .delete-label{color:#fff;font-size:25px}.logs-list .logs-container .logs-actions .delete{font-size:35px;display:inline-block;float:none;line-height:77px}.logs-list .logs-container .log-row{margin-bottom:37px;color:#fff;font-size:25px;border-bottom:1px dashed #fff}.logs-list .logs-container .log-row .label,.logs-list .logs-container .log-row .log-time{font-size:26px;font-weight:700}.logs-list .logs-container .log-row .log-desc,.logs-list .logs-container .log-row .log-time{margin-left:10px;padding:0 18px}.logs-list .logs-container .log-row .log-message,.logs-list .logs-container .log-row .log-source{font-size:22px}.logs-list .error-wrapper{height:243px}.logs-list .error-wrapper .error{font-size:22px;color:#43f51b;text-align:center;display:block;height:58px;padding-top:15px}.node-messages .ajs-message{font-size:28px;width:450px!important}.node-messages .ajs-warning{background-color:#b8860b!important}.ajs-message.ajs-visible{right:20px!important}.ajs-message.ajs-event-details-notification{background-image:linear-gradient(0deg,#24262c,#3a3d46);color:#fff;height:150px;width:450px;padding:0!important;text-align:right}.ajs-message.ajs-event-details-notification span{display:inline-block}.ajs-message.ajs-event-details-notification .event-type-label{font-size:27px;line-height:21px;padding:10px 0;margin-top:17px;width:100px;display:inline-block;text-align:center}.ajs-message.ajs-event-details-notification .counter.large{font-size:30px;font-weight:700;margin-left:5px;margin-right:10px}.ajs-message.ajs-event-details-notification .counter.small{font-size:20px}.ajs-message.ajs-event-details-notification .desc,.ajs-message.ajs-event-details-notification .location{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:425px;margin-top:10px;margin-left:10px;margin-right:10px;text-align:right}.ajs-message.ajs-event-details-notification .desc{font-size:20px;font-weight:700}.ajs-message.ajs-event-details-notification .location{color:#4eccff;font-size:15px}.car-check .car-check-wrapper{height:749px;background-color:#4e5560}.car-check .car-check-wrapper .menu-wrapper{float:right;height:748px;overflow-y:auto;position:fixed;top:80px;right:23px}.car-check .car-check-wrapper .menu-wrapper menu{padding:0}.car-check .car-check-wrapper .cells-wrapper{float:right;padding-top:15px;padding-right:29px;padding-left:3px;width:91%;height:715px;overflow-y:auto;position:relative;right:127px}.cell-wrapper{background:#fff;padding:5px;margin-bottom:30px;direction:rtl}.cell-wrapper .header{background:#000;height:58px;width:100%;padding:11px 0;position:relative}.cell-wrapper .header .header-text{display:block;color:#fff;width:250px;font-size:26px;font-weight:700;margin:auto}.cell-wrapper .header .tab-icn-dd,.cell-wrapper .header .tab-icn-dd-up{display:inline-block;position:absolute;top:10px;left:10px}.cell-wrapper .equipment-table{border:5px solid #212329;width:627px;display:inline-block;vertical-align:top;margin-left:13px;margin-top:14px}.cell-wrapper .equipment-table .equipment-row .equipment-header-cell{font-size:20px;font-weight:700;color:#fff;background:#212329}.cell-wrapper .equipment-table .equipment-row .equipment-cell,.cell-wrapper .equipment-table .equipment-row .equipment-header-cell{display:inline-block}.cell-wrapper .equipment-table .equipment-row .equipment-cell{font-size:23px;color:#212329;border-bottom:1px solid #4f5660}.cell-wrapper .equipment-table .equipment-row .equipment-cell.grayed{background:#f4f4f4}.cell-wrapper .equipment-table .equipment-row .equipment-first-cell{width:445px;height:58px;padding:15px 20px;border-left:1px solid #4f5660;float:right}.cell-wrapper .equipment-table .equipment-row .equipment-second-cell{width:132px;text-align:center;padding:15px 0;height:58px;border-left:1px solid #4f5660;float:right}.cell-wrapper .equipment-table .equipment-row .equipment-third-cell{width:40px;text-align:center;height:58px;float:right}.cell-wrapper .equipment-table .equipment-row .equipment-third-cell .dots:after{content:\"\\2807\";font-size:38px;color:#525252;padding-left:7px}.cell-wrapper .note-tables-wrapper{width:627px;display:inline-block;vertical-align:top;margin-top:14px}.cell-wrapper .note-tables-wrapper .note-table{border:5px solid #4f5660;width:100%;margin-bottom:15px}.cell-wrapper .note-tables-wrapper .note-table.treat .damage-second-cell{width:240px!important}.cell-wrapper .note-tables-wrapper .note-table.treat .damage-date{display:inline-block;width:135px;height:63px;padding:15px 10px;float:right}.cell-wrapper .note-tables-wrapper .note-table .note-row .note-header-cell{font-size:20px;font-weight:700;text-align:center;color:#fff;background:#4f5660;display:block;padding:15px 0;height:58px}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper{height:243px;overflow-y:auto}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row{border-bottom:1px solid #4f5660;padding:10px 0}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .damage-cell{display:inline-block;vertical-align:top;font-size:20px;color:#212329}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .damage-cell.grayed{background:#f4f4f4}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .damage-first-cell{width:200px;padding-right:10px}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .damage-second-cell{width:240px;color:red;text-align:right}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .damage-second-cell.treat{color:#212329!important}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .damage-third-cell{width:157px;text-align:left}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .damage-open-by{margin-top:0;margin-right:10px}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .damage-last-cell{width:157px;font-size:15px;font-weight:700;padding:7px 10px;color:#212329;display:inline-block}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .damage-last-cell span{display:inline-block}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .button-wrapper{width:157px;padding:0 30px;display:inline-block;height:42px}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .button-wrapper .fix-btn{width:100%;height:100%;background:transparent;border:1px solid #4f5660;color:#212329;outline:0!important;outline:none}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .button-wrapper .fix-btn:focus{border:1px solid #4eccff;color:#4eccff}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .lack-second-cell{width:230px;color:#212329}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .lack-last-cell{width:230px;color:red;display:inline-block}.cell-wrapper .note-tables-wrapper .note-table .damage-row-wrapper .damage-row .lack-last-cell.custom{width:215px!important}.cell-wrapper .error-wrapper{height:243px}.cell-wrapper .error-wrapper .error{font-size:20px;color:#268a0f;text-align:center;display:block;border-bottom:1px solid #4f5660;height:58px;padding-top:15px}.selection-pop-over{background:#fff;text-align:right;border:4px solid #4f5660;box-shadow:0 0 20px #000;width:135px}.selection-pop-over .choose-button{font-size:15px;display:block;padding-top:8px;padding-right:20px;height:40px;border-bottom:1px solid #4f5660}.selection-pop-over .choose-button.last{border-bottom:none}.popup{border:4px solid #fff;width:768px;height:384px;border-radius:10px;margin:auto;background-color:#4e5560;z-index:3;position:relative}.popup .tab-icn-x{display:inline-block;margin-top:20px}.popup .popup-wrapper{padding-top:99px;padding-right:160px;padding-left:160px}.popup .popup-wrapper .input-label{font-size:20px;color:#fff;margin-bottom:20px;text-align:right}.popup .popup-wrapper .input-wrapper{margin-bottom:15px}.popup .popup-wrapper .input-wrapper input{height:71px;width:100%;border:none;text-align:right;padding:15px;font-size:26px;color:#4f5660}.popup .popup-wrapper .error-star{display:inline-block;color:red;font-size:20px;margin-left:5px;width:13px;float:right}.popup .popup-wrapper .notification{display:inline-block;color:#8f9499;font-size:20px;float:right}.overlay{position:fixed;left:0;top:0;width:100%;height:100%;background:#000;opacity:.7;z-index:2}.damage-cell-wrapper{background:#fff;margin-bottom:30px;direction:rtl;width:627px;display:inline-block;vertical-align:top}.damage-cell-wrapper.first{margin-left:20px}.damage-cell-wrapper .header{background:#000;height:58px;padding:11px 0;position:relative;margin:5px}.damage-cell-wrapper .header .header-text{display:block;color:#fff;width:188px;font-size:26px;font-weight:700;margin:auto;text-align:center}.damage-cell-wrapper .header .tab-icn-dd,.damage-cell-wrapper .header .tab-icn-dd-up{display:inline-block;position:absolute;top:10px;left:10px}.damage-cell-wrapper .damage-table{width:100%;vertical-align:top;height:242px;overflow-y:auto}.damage-cell-wrapper .damage-table .damage-row{border-bottom:1px solid #4f5660;padding:10px 0}.damage-cell-wrapper .damage-table .damage-row .damage-cell{display:inline-block;vertical-align:top;font-size:20px;color:#212329}.damage-cell-wrapper .damage-table .damage-row .damage-cell.grayed{background:#f4f4f4}.damage-cell-wrapper .damage-table .damage-row .damage-first-cell{width:200px;text-align:right;padding-right:10px}.damage-cell-wrapper .damage-table .damage-row .damage-second-cell{width:240px;color:red;text-align:right}.damage-cell-wrapper .damage-table .damage-row .damage-third-cell{width:157px;text-align:right}.damage-cell-wrapper .damage-table .damage-row .damage-open-by{margin-top:0;margin-right:10px;text-align:right}.damage-cell-wrapper .damage-table .damage-row .damage-last-cell{width:157px;font-size:15px;font-weight:700;padding:7px 10px;color:#212329;display:inline-block}.damage-cell-wrapper .damage-table .damage-row .damage-last-cell span{display:inline-block}.damage-cell-wrapper .damage-table .damage-row .lack-second-cell{width:255px;color:#212329}.damage-cell-wrapper .damage-table .damage-row .lack-last-cell{width:225px;color:red;display:inline-block;font-size:20px;text-align:right}.damage-cell-wrapper .error-wrapper{min-height:243px}.damage-cell-wrapper .error-wrapper .error{font-size:20px;color:#268a0f;text-align:center;display:block;border-bottom:1px solid #4f5660;height:58px;padding-top:15px}.car-check .lack-last-cell{width:157px!important}.car-status-wrapper{text-align:center;margin-top:20px}.car-status-wrapper .damage-cell-wrapper{width:690px}.car-status-wrapper .damage-cell-wrapper .tab-icn-dd{display:none}.car-status-wrapper .damage-cell-wrapper .damage-table{height:645px}.car-status-wrapper .damage-cell-wrapper .damage-table .damage-first-cell{padding-right:0}.car-status-wrapper .damage-cell-wrapper .damage-table .lack-second-cell{width:240px;text-align:right}.car-status-wrapper .damage-cell-wrapper .damage-table .damage-third-cell{width:230px}.car-status .left-button{width:190px!important}.car-status .left-button .text{display:inline-block;width:100%;height:100%;color:#fff;font-size:27px;font-weight:700;padding-top:19px}.error-wrapper{height:243px}.error-wrapper .error{font-size:22px;color:#43f51b;text-align:center;display:block;border-bottom:1px solid #4f5660;height:58px;padding-top:15px}.car-check-start .left-button{width:188px!important}.car-check-start .left-button .text{padding-top:23px;padding-right:33px;padding-bottom:20px;padding-left:19px;display:inline-block;font-size:25px;font-weight:700;color:#fff}.car-check-start .car-check-wrapper{height:751px;background-color:#4e5560}.car-check-start .car-check-wrapper .car-check-background{display:inline-block;margin-top:5px;float:right}.car-check-start .car-check-wrapper .data-wrapper{padding-right:124px;padding-top:80px;padding-bottom:49px;width:66%;display:inline-block;float:right;text-align:right}.car-check-start .car-check-wrapper .data-wrapper .row{height:200px}.car-check-start .car-check-wrapper .data-wrapper .row .cell{width:307px;float:right;margin-left:90px}.car-check-start .car-check-wrapper .data-wrapper .row .cell .select-div{width:307px}.car-check-start .car-check-wrapper .data-wrapper .row .cell .label-text{font-size:29px;color:#fff;margin-bottom:21px;font-weight:400}.car-check-start .car-check-wrapper .data-wrapper .row .cell .input-wrapper{margin-bottom:15px}.car-check-start .car-check-wrapper .data-wrapper .row .cell .input-wrapper input{height:71px;width:238px;float:right;border:none;text-align:right;padding:15px;font-size:26px;color:#4f5660}.car-check-start .car-check-wrapper .data-wrapper .row .cell .input-wrapper .type{width:69px;background-color:#343742;height:71px;color:#fff;font-size:26px;display:inline-block;text-align:center;padding-top:15px}.car-check-start .car-check-wrapper .data-wrapper .row .cell .error-star{display:inline-block;color:red;font-size:20px;margin-left:5px;width:13px;float:right}.car-check-start .car-check-wrapper .data-wrapper .row .cell .notification{display:inline-block;color:#8f9499;font-size:20px;float:right}.car-check-start .car-check-wrapper .data-wrapper select{width:307px;height:70px;font-size:26px;color:#4f5660;padding:0 19px;direction:rtl;margin-bottom:10px}.car-check-start .car-check-wrapper .data-wrapper .start-btn{background-color:#4eccff;font-size:29px;text-align:center;font-weight:700;color:#fff;width:703px;height:71px;float:right;padding-top:13px}.quick-report-wrapper{height:751px;background-color:#4e5560;padding:36px 302px}.quick-report-wrapper input{width:100%;font-size:26px;color:#4f5660;padding:20px;text-align:right}.quick-report-wrapper .error-wrapper{height:30px;margin-top:15px}.quick-report-wrapper .error-wrapper .error-star{display:inline-block;color:red;font-size:20px;margin-left:5px;width:13px;float:right}.quick-report-wrapper .error-wrapper .notification{display:inline-block;color:#8f9499;font-size:20px;float:right}.quick-report-wrapper .button-wrapper{border-radius:5px;background-color:#373a43;position:absolute;top:127px;left:315px;padding:7px 31px}.quick-report-wrapper .button-wrapper .popup-icn-send1{display:inline-block}.quick-report-wrapper .menu-wrapper menu{padding:0;margin-top:20px}.quick-report-wrapper .menu-wrapper menu .menu-button{margin-left:33px;margin-right:0;margin-bottom:35px}.quick-report-wrapper .menu-wrapper menu .menu-button.last{margin-left:0}.quick-report-wrapper .menu-wrapper menu .menu-button .text-wrapper span{width:131px}.report-wrapper{height:751px;background-color:#4e5560}.report-wrapper .tables-wrapper{padding:21px;overflow-y:auto;height:751px;width:100%}.report-wrapper .tables-wrapper .table{width:682px;height:600px;background-color:#fff;float:right;padding:5px;margin-bottom:40px}.report-wrapper .tables-wrapper .table.odd{margin-left:30px}.report-wrapper .tables-wrapper .table.bottom{height:445px}.report-wrapper .tables-wrapper .table .header{width:100%;height:57px;background-color:#212329;text-align:center;font-size:26px;font-weight:700;color:#fff;padding-top:10px}.report-wrapper .tables-wrapper .table .body{padding:15px;width:100%;height:100%}.report-wrapper .tables-wrapper .table .body .inputs-row{position:relative}.report-wrapper .tables-wrapper .table .body .inputs-row .input-error{color:red;display:inline-block;font-size:20px;position:absolute;left:30px;top:55px}.report-wrapper .tables-wrapper .table .body .inputs-row .input-error.floor-number{left:0;right:0}.report-wrapper .tables-wrapper .table .body .inputs-row .input-error.number-of-floors{left:0;right:225px}.report-wrapper .tables-wrapper .table .body.used-equipment{overflow:hidden}.report-wrapper .tables-wrapper .table .body input,.report-wrapper .tables-wrapper .table .body select,.report-wrapper .tables-wrapper .table .body textarea{width:100%;height:57px;border:2px solid #929292;margin-bottom:30px;padding:0 21px;font-size:26px;outline:none}.report-wrapper .tables-wrapper .table .body input:focus,.report-wrapper .tables-wrapper .table .body select:focus,.report-wrapper .tables-wrapper .table .body textarea:focus{box-shadow:inset 0 0 8px #28bbf5;border:1px solid #28bbf5}.report-wrapper .tables-wrapper .table .body textarea{height:134px;resize:none}.report-wrapper .tables-wrapper .table .body .select-div:after{top:24px}.report-wrapper .tables-wrapper .table .body .outcome select{margin-top:0!important}.report-wrapper .tables-wrapper .table .body .desc{width:100%;height:450px}.report-wrapper .tables-wrapper .table .body .small-input{width:200px!important;margin-left:17px}.report-wrapper .tables-wrapper .table .body .small-input.small-input-wrapper{display:inline-block}.report-wrapper .tables-wrapper .table .body .small-input.last{margin-left:0}.report-wrapper .tables-wrapper .table .body .injured-cell{width:180px;display:inline-block;font-size:26px;margin:10px;margin-top:0;line-height:20px}.report-wrapper .tables-wrapper .table .body .injured-cell.fireman-cell{padding-right:10px}.report-wrapper .tables-wrapper .table .body .injured-cell.civilian-cell{padding-right:24px}.report-wrapper .tables-wrapper .table .body .injured-input{border:2px solid #929292;padding:0 21px;font-size:26px;margin-top:6px;margin-bottom:30px;margin-left:13px;margin-right:13px;outline:none;width:190px;height:46px;font-size:22px}.report-wrapper .tables-wrapper .table .body .employee-error{left:0;top:55px;right:220px}.report-wrapper .tables-wrapper .table .body .add-used-equipment{width:212px;height:57px;background-color:#fff;border:2px solid #55cdfd;font-size:26px;padding:10px 20px;text-align:right;color:#55cdfd;position:relative;margin-bottom:20px}.report-wrapper .tables-wrapper .table .body .add-used-equipment .btn-text{position:absolute;top:8px}.report-wrapper .tables-wrapper .table .body .add-used-equipment .icn-dd-small{float:left;margin-top:5px}.report-wrapper .tables-wrapper .table .body .used-equipment-wrapper{overflow-y:auto;height:253px}.report .detailsbar-wrapper .details-bar .minimize-event-details-bar .event-general-info .second-col{width:970px}.report .detailsbar-wrapper .details-bar .minimize-event-details-bar .event-general-info .third-col{display:none}.report .detailsbar-wrapper .details-bar .minimize-event-details-bar .left-button{border-right:none;margin-top:20px}.report .detailsbar-wrapper .details-bar .minimize-event-details-bar .left-button .tab-icn-ok{display:inline-block}.used-equipment .sac-wrapper{width:370px;display:inline-block}.used-equipment .amount{width:120px!important;margin-right:15px}.used-equipment .unit{display:inline-block;width:100px;margin-right:15px;font-size:19px}.current-status-wrapper .status-wrapper{padding:14px 6px}.current-status-wrapper .status-wrapper .cell-wrapper{float:right;width:708px;margin-bottom:15px}.current-status-wrapper .status-wrapper .cell-wrapper .header{margin-bottom:0;text-align:center}.current-status-wrapper .status-wrapper .cell-wrapper .header .header-text{width:100%;font-weight:400}.current-status-wrapper .status-wrapper .cell-wrapper.reports{margin-right:14px}.current-status-wrapper .status-wrapper .cell-wrapper.reports .header-anchor{color:#4eccff;position:absolute;right:15px;top:13px;font-size:21px}.current-status-wrapper .status-wrapper .cell-wrapper.reports .counts-row{border-bottom:1px solid #4f5660;height:51px;display:table;width:100%}.current-status-wrapper .status-wrapper .cell-wrapper.reports .counts-row .report-count{display:table-cell;width:50%;text-align:center;padding-top:5px}.current-status-wrapper .status-wrapper .cell-wrapper.reports .counts-row .report-count .count-text{font-size:27px;color:#212329;margin-left:10px;display:inline-block}.current-status-wrapper .status-wrapper .cell-wrapper.reports .counts-row .report-count .count-value{display:inline-block;border-radius:15px;padding-top:1px;width:25px;height:25px;color:#fff;font-size:15px;vertical-align:top;margin-top:7px}.current-status-wrapper .status-wrapper .cell-wrapper.reports .counts-row .report-count .count-value.report-number{background-color:red}.current-status-wrapper .status-wrapper .cell-wrapper.reports .counts-row .report-count .count-value.assumes-number{background-color:green}.current-status-wrapper .status-wrapper .cell-wrapper.reports .logs-wrapper .logs-row{border-bottom:1px solid #4f5660;display:table}.current-status-wrapper .status-wrapper .cell-wrapper.reports .logs-wrapper .logs-row .icn-car-black,.current-status-wrapper .status-wrapper .cell-wrapper.reports .logs-wrapper .logs-row .icn-fireman-black{display:inline-block;margin-top:6px}.current-status-wrapper .status-wrapper .cell-wrapper.reports .logs-wrapper .logs-row .log{color:#212329;width:592px;display:table-cell;vertical-align:middle}.current-status-wrapper .status-wrapper .cell-wrapper.reports .logs-wrapper .logs-row .log.middle{margin-top:17px;display:inline-block;vertical-align:top}.current-status-wrapper .status-wrapper .cell-wrapper.reports .logs-wrapper .logs-row .log .log-reporter span{font-size:19px}.current-status-wrapper .status-wrapper .cell-wrapper.reports .logs-wrapper .logs-row .log .log-desc{font-size:23px;width:592px;display:inline-block;padding-left:10px}.current-status-wrapper .status-wrapper .cell-wrapper.reports .logs-wrapper .logs-row .log-time{display:table-cell;vertical-align:middle}.current-status-wrapper .status-wrapper .cell-wrapper.reports .logs-wrapper .logs-row.last{border-bottom:none}.current-status-wrapper .status-wrapper .cell-wrapper .table{height:240px;overflow-y:auto;margin-bottom:0}.current-status-wrapper .status-wrapper .cell-wrapper .table.teams{background-color:#474e5d}.current-status-wrapper .status-wrapper .cell-wrapper .table.teams .comander-wrapper{padding:5px 15px;margin-bottom:15px;display:inline-block}.current-status-wrapper .status-wrapper .cell-wrapper .table.teams .comander-wrapper .fireman-small{display:inline-block;margin-left:10px;position:relative;top:5px}.current-status-wrapper .status-wrapper .cell-wrapper .table.teams .comander-wrapper .comander-name,.current-status-wrapper .status-wrapper .cell-wrapper .table.teams .comander-wrapper .comander-role{display:inline-block;color:#fff}.current-status-wrapper .status-wrapper .cell-wrapper .table.teams .comander-wrapper .comander-name{font-size:25px;margin-left:10px}.current-status-wrapper .status-wrapper .cell-wrapper .table.teams .comander-wrapper .comander-role{font-size:20px}.current-status-wrapper .status-wrapper .cell-wrapper .table.teams .summery-wrapper{float:left;font-size:20px;font-weight:700;color:#55cdfd;margin-top:30px;margin-left:20px}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper{padding:0 20px 0 10px;display:table}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper.at-event{border-bottom:2px solid #121316}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper.to-event{border-top:2px solid #464a54}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-label{width:155px;font-size:27px;text-align:right;color:#fff;display:table-cell;vertical-align:top}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list{display:table-cell;width:512px}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .count,.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .layer-616,.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .tab-icn-dd,.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .tab-icn-dd-up,.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .vector-smart-object{display:inline-block}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .tab-icn-dd,.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .tab-icn-dd-up{margin-right:17px;float:right}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .count{margin-right:10px;position:relative;top:3px;vertical-align:top}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .statuses-cell{width:126px;padding:0 10px;font-size:27px;text-align:center;color:#fff;border-right:2px solid #121316;float:right;margin-bottom:11px}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .statuses-cell.type-text{width:200px}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .statuses-cell.borded{border-left:2px solid #121316}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .status-detail{margin-bottom:10px}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .status-detail .car-name-wrapper{display:inline-block;width:200px;vertical-align:top;text-align:center}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .status-detail .car-name-wrapper .car-name{font-size:20px;font-weight:700;color:#55cdfd}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .status-detail .employee-container{display:inline-block;width:307px}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .status-detail .employee-container .holder{display:block}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .status-detail .employee-container .employee-name{font-size:20px;font-weight:700;color:#55cdfd;width:200px}.current-status-wrapper .status-wrapper .cell-wrapper .table .statuses-wrapper .statuses-list .status-detail .employee-container .employee-role{font-size:20px;color:#fff}.current-status-wrapper .status-wrapper .areas{width:100%}.current-status-wrapper .status-wrapper .areas .header{margin-bottom:0;text-align:center}.current-status-wrapper .status-wrapper .areas .header .header-text{width:100%}.current-status-wrapper .status-wrapper .areas .area{height:90px;background-color:#474e5d}.current-status-wrapper .status-wrapper .areas .area .areas-list span{display:inline-block}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row{border-bottom:2px solid #121316;height:60px}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area{height:60px}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area .area-cell{font-size:27px;color:#fff;padding:10px 20px;border-left:2px solid #121316;height:100%;float:right}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area .area-cell.area-name{width:350px}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area .area-cell.area-commander{width:600px}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area .area-cell.area-freq{width:200px}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area .last-cell{border-left:none;width:263px;float:left;font-size:27px;color:#fff;padding-top:10px;padding-left:10px}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area .last-cell .area-teams{float:right}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area .last-cell .image-sprite{float:left}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area .last-cell .vector-smart-object{float:unset!important}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area .last-cell .count{position:relative;top:-10px}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area.last{border-bottom:none}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area-detail{width:51%;float:left;margin-bottom:10px}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area-detail .car-name-wrapper{display:inline-block;width:252px;vertical-align:top}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area-detail .car-name-wrapper .car-name{font-size:20px;font-weight:700;color:#55cdfd}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area-detail .employee-container{display:inline-block;width:468px}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area-detail .employee-container .employee-name{font-size:20px;font-weight:700;color:#55cdfd;width:200px}.current-status-wrapper .status-wrapper .areas .area .areas-list .area-row .area-detail .employee-container .employee-role{font-size:20px;color:#fff}.current-status-wrapper .map-wrapper{float:right}.prevent-fire-item-wrapper{height:152px;background-image:linear-gradient(0deg,#24262c,#3a3d46);border-radius:5px;padding:18px}.prevent-fire-item-wrapper .prevent-fire-row{font-size:25px;line-height:25px;margin:8px 0}.prevent-fire-item-wrapper .prevent-fire-row.first{margin-bottom:20px}.prevent-fire-item-wrapper .prevent-fire-row span{display:inline-block}.prevent-fire-item-wrapper .prevent-fire-row .prevent-fire-address{font-weight:700;width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.prevent-fire-item-wrapper .prevent-fire-row .prevent-fire-type{width:105px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:left}.prevent-fire-item-wrapper .prevent-fire-row .prevent-fire-level{width:100px!important}.prevent-fire-item-wrapper .prevent-fire-row .prevent-fire-value{font-weight:700;width:40px;margin-left:14px}.prevent-fire-item-wrapper .prevent-fire-row .prevent-fire-value.last{border-left:none!important}.prevent-fire-details-wrapper{padding:6px;background-color:#fff;margin-bottom:30px}.prevent-fire-details-wrapper .details-wrapper{background-color:#212329;padding:6px;border-top:6px solid #fff}.prevent-fire-details-wrapper .details-wrapper .main-contact{height:48px;width:100%;color:#fff;font-size:20px;text-align:center;padding-top:10px}.prevent-fire-details-wrapper .details-wrapper .main-contact span{display:inline-block}.prevent-fire-details-wrapper .details-wrapper .main-contact .contact-label{margin-left:5px}.prevent-fire-details-wrapper .details-wrapper .main-contact .contact{font-weight:700;margin-left:30px}.company-details-wrapper{height:89px;background-color:#212329;padding:0 20px;padding-top:10px;color:#fff}.company-details-wrapper .details-cell{float:right;width:90%;height:100%}.company-details-wrapper .details-cell.arrow{width:10%}.company-details-wrapper .details-cell.arrow .image-sprite{float:left;margin-top:11px}.company-details-wrapper .details-cell .details-row{margin-bottom:7px}.company-details-wrapper .details-cell .details-row span{display:inline-block;font-size:20px}.company-details-wrapper .details-cell .details-row.last{margin-bottom:0}.company-details-wrapper .details-cell .details-row .company-wrapper{width:617px;display:inline-block}.company-details-wrapper .details-cell .details-row .is-fire-wrapper{width:135px;display:inline-block}.company-details-wrapper .details-cell .details-row .company-name{font-size:25px;font-weight:700;margin-left:20px}.company-details-wrapper .details-cell .details-row .dots-wrapper{margin-top:9px;width:100px;display:inline-block}.company-details-wrapper .details-cell .details-row .dots-wrapper .dot,.company-details-wrapper .details-cell .details-row .dots-wrapper .dot-selected{height:15px;width:15px;display:inline-block;border-radius:8px;margin:2px}.company-details-wrapper .details-cell .details-row .dots-wrapper .dot{border:3px solid #777880;background-color:transparent}.company-details-wrapper .details-cell .details-row .dots-wrapper .dot-selected{background-color:#4eccff;border:3px solid #4eccff}.company-details-wrapper .details-cell .details-row .fire{margin-left:5px;margin-top:5px}.company-details-wrapper .details-cell .details-row .homas{margin-left:5px;margin-top:0;vertical-align:top}.company-details-wrapper .details-cell .details-row .is-fire{font-weight:700}.company-details-wrapper .details-cell .details-row .is-homas{font-weight:700;vertical-align:top}.company-details-wrapper .details-cell .details-row .address{width:670px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.prevention-wrapper{background-color:#fff;max-height:280px;width:100%;overflow-y:auto}.prevention-wrapper .prevention-cell{height:56px;width:436px;border-bottom:1px solid #212329;border-left:1px solid #212329;color:#212329;text-align:right;font-size:16px;float:right;display:table}.prevention-wrapper .prevention-cell .prevention-desc{width:151px;padding:10px;display:table-cell}.prevention-wrapper .prevention-cell .prevention-val{font-weight:700;padding:10px;display:table-cell}.prevent-fire-wrapper .prevent-fire{padding:30px}.prevent-fire-wrapper .prevent-fire .prevent-fire-list{width:457px;height:721px;overflow-y:auto;margin-left:30px;float:right}.prevent-fire-wrapper .prevent-fire .prevent-fire-list .item{color:#fff;border:2px solid transparent;margin-bottom:28px}.prevent-fire-wrapper .prevent-fire .prevent-fire-list .item .prevent-fire-value{border-left:3px solid #fff}.prevent-fire-wrapper .prevent-fire .prevent-fire-list .item.selected{border:2px solid #4eccff;color:#4eccff}.prevent-fire-wrapper .prevent-fire .prevent-fire-list .item.selected .prevent-fire-value{border-left:3px solid #4eccff}.prevent-fire-wrapper .prevent-fire .prevent-fire-details{width:896px;height:721px;overflow-y:auto;float:right}.prevent-fire-wrapper .error-wrapper{height:243px}.prevent-fire-wrapper .error-wrapper .error{font-size:22px;color:#43f51b;text-align:center;display:block;border-bottom:1px solid #4f5660;height:58px;padding-top:15px}body{overflow:hidden;font-family:Open Sans Hebrew,sans-serif}.image-sprite{background-image:url(" + escape(__webpack_require__("./src/app/images/Sprite.png")) + ")}.map-icons-sprite{display:inline-block;background-image:url(" + escape(__webpack_require__("./src/app/images/map-icons.png")) + ")}.alertify .ajs-footer .ajs-buttons.ajs-primary{text-align:left}.app-wrapper{width:1443px;height:830px;overflow:hidden}#myMap_zoom_slider,#statusMap_zoom_slider{display:none}.glyphicon-remove-sign{color:#ae0d0d;font-size:85px}.glyphicon-remove-sign,.offline{position:absolute;left:50%;top:90%}.offline{color:red;font-size:25px;font-weight:700;display:inline-block}.offline[hidden]{display:none!important}.large-bg-chech-car{background-position:0 0;width:698px;height:755px}.background-image{background-position:0 -755px;width:674px;height:630px}.car-check-background{background-position:0 -1385px;width:479px;height:743px}.supplies-background{background-position:0 -2128px;width:475px;height:741px}.report-icn-accident{background-position:-479px -1385px;width:155px;height:114px}.report-icn-against-traffic{background-position:-479px -1499px;width:155px;height:114px}.report-icn-broken{background-position:-479px -1613px;width:155px;height:114px}.report-icn-loaded{background-position:-479px -1727px;width:155px;height:114px}.report-icn-red-light{background-position:-479px -1841px;width:155px;height:114px}.report-icn-smoke{background-position:-479px -1955px;width:155px;height:114px}.popup-icn-toggle-off{background-position:-479px -2069px;width:110px;height:61px}.popup-icn-toggle-on{background-position:-475px -2130px;width:110px;height:61px}.star{background-position:-589px -2069px;width:99px;height:94px}.tools{background-position:-585px -2163px;width:99px;height:91px}.big-car{background-position:-475px -2191px;width:98px;height:87px}.fireman-huge{background-position:-573px -2254px;width:94px;height:91px}.plus{background-position:-475px -2278px;width:85px;height:85px}.logo{background-position:-560px -2345px;width:69px;height:64px}.fireman-big{background-position:-634px -1385px;width:63px;height:61px}.icn-car-black{background-position:-634px -1446px;width:49px;height:49px}.icn-fireman-black{background-position:-634px -1495px;width:49px;height:49px}.fireman-small{background-position:-634px -1544px;width:48px;height:46px}.vector-smart-object{background-position:-634px -1590px;width:46px;height:41px}.tab-icn-dd{background-position:-634px -1631px;width:43px;height:40px}.tab-icn-dd-up{background-position:-634px -1671px;width:43px;height:40px}.tab-icn-ok{background-position:-634px -1711px;width:43px;height:40px}.tab-icn-x{background-position:-634px -1751px;width:43px;height:40px}.popup-icn-send1{background-position:-634px -1791px;width:39px;height:39px}.shape-1-copy-3{background-position:-634px -1830px;width:39px;height:28px}.layer-616{background-position:-634px -1858px;width:38px;height:37px}.shape-1{background-position:-634px -1895px;width:38px;height:31px}.popup-icn-send2{background-position:-634px -1926px;width:35px;height:28px}.popup-icn-send2-disabled{background-position:-634px -1954px;width:35px;height:28px}.shape-706{background-position:-634px -1982px;width:30px;height:30px}.onmap-icn-car2{background-position:-669px -1926px;width:29px;height:26px}.icn-close-small{background-position:-669px -1952px;width:28px;height:28px}.popup-icn-arrows{background-position:-669px -1980px;width:28px;height:24px}.icn-dd-small{background-position:-673px -1791px;width:25px;height:16px}.back{background-position:-674px -755px;width:24px;height:38px}.icn-dd-small{background-position:-674px -793px;width:24px;height:24px}.icn-clock{background-position:-674px -817px;width:23px;height:23px}.phone{background-position:-674px -840px;width:16px;height:24px}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/app.config.ts"), __webpack_require__("./src/app/services/general/device.service.ts"), __webpack_require__("./src/app/services/node/node.service.ts"), __webpack_require__("./src/app/services/general/reboot.service.ts"), __webpack_require__("./src/app/core/emap.service.ts"), __webpack_require__("./src/app/services/general/log.service.ts"), __webpack_require__("./src/app/shared-classes/common/log-info.ts"), __webpack_require__("./src/app/shared-classes/common/log-types.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/shared-classes/common/base-component.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js"), __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js"), __webpack_require__("./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, map_state_service_1, app_config_1, device_service_1, node_service_1, reboot_service_1, emap_service_1, log_service_1, log_info_1, log_types_1, content_service_1, base_component_1, connection_service_1, http_1, http_2, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function (_super) {
        __extends(AppComponent, _super);
        function AppComponent(mapStateService, config, deviceService, nodeService, emapService, rebootService, logService, contentService, connectionService, zone, http, httpclient) {
            var _this = _super.call(this, contentService, 'home-page') || this;
            _this.config = config;
            _this.deviceService = deviceService;
            _this.nodeService = nodeService;
            _this.emapService = emapService;
            _this.rebootService = rebootService;
            _this.logService = logService;
            _this.connectionService = connectionService;
            _this.zone = zone;
            _this.http = http;
            _this.httpclient = httpclient;
            _this.title = 'app';
            _this.mapID = 'myMap';
            _this.isMapShow = true;
            _this.mapWidth = "1443px";
            _this.mapHeight = "662px";
            _this.loadMap = false;
            _this.isOfflineShow = false;
            var namespace = config.getConfig('node_host') + config.getConfig('node_namespace');
            nodeService.createSocket(namespace);
            nodeService.registerNodeFireTruckEvent(namespace, config.getConfig('node-fire-truck-event'));
            nodeService.registerNodeAlertifyEvent(namespace, config.getConfig('node-alertify-event'));
            _this.logService.addItem(new log_info_1.LogInfo("Device ID: " + _this.deviceService.getDeviceId(), 'Device', '', log_types_1.LogTypes.info));
            mapStateService.mapStateChangedEvent$.subscribe(function (result) {
                _this.isMapShow = result;
            });
            _this.connectionService.stateChanged.subscribe(function (result) {
                _this.isOfflineShow = _this.connectionService.isOffline();
                if (!_this.isOfflineShow) {
                    _this.rebootService.sendAllQueuedItems();
                }
            });
            return _this;
        }
        AppComponent.prototype.testHttpClick = function () {
            var _this = this;
            this.logService.addItem(new log_info_1.LogInfo('home http page test go http://httpbin.org/post', 'home', null, log_types_1.LogTypes.debugger));
            this.test1 = this.http.post('http://httpbin.org/post', null).subscribe(function () {
                _this.logService.addItem(new log_info_1.LogInfo('home http page test back http://httpbin.org/post', 'home', null, log_types_1.LogTypes.debugger));
            });
        };
        AppComponent.prototype.testHttpClientClick = function () {
            var _this = this;
            this.logService.addItem(new log_info_1.LogInfo('home http client page test go http://httpbin.org/post', 'home', null, log_types_1.LogTypes.debugger));
            this.test2 = this.httpclient.post('http://httpbin.org/post', null).subscribe(function () {
                _this.logService.addItem(new log_info_1.LogInfo('home http client page test back http://httpbin.org/post', 'home', null, log_types_1.LogTypes.debugger));
            });
        };
        AppComponent.prototype.testJqueryClick = function () {
            var _this = this;
            this.logService.addItem(new log_info_1.LogInfo('home http jquery page test go http://httpbin.org/post', 'home', null, log_types_1.LogTypes.debugger));
            var x = $.post("http://httpbin.org/post", function (data) {
                _this.logService.addItem(new log_info_1.LogInfo('home http jquery page test back http://httpbin.org/post', 'home', null, log_types_1.LogTypes.debugger));
            });
        };
        AppComponent.prototype.ngOnDestroy = function () {
            if (this.test1) {
                this.test1.unsubscribe();
            }
            if (this.test2) {
                this.test2.unsubscribe();
            }
        };
        return AppComponent;
    }(base_component_1.BaseComponent));
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _a || Object, typeof (_b = typeof app_config_1.AppConfig !== "undefined" && app_config_1.AppConfig) === "function" && _b || Object, typeof (_c = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" && _c || Object, typeof (_d = typeof node_service_1.NodeService !== "undefined" && node_service_1.NodeService) === "function" && _d || Object, typeof (_e = typeof emap_service_1.EmapService !== "undefined" && emap_service_1.EmapService) === "function" && _e || Object, typeof (_f = typeof reboot_service_1.RebootService !== "undefined" && reboot_service_1.RebootService) === "function" && _f || Object, typeof (_g = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _g || Object, typeof (_h = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _h || Object, typeof (_j = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _j || Object, typeof (_k = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _k || Object, typeof (_l = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _l || Object, typeof (_m = typeof http_2.HttpClient !== "undefined" && http_2.HttpClient) === "function" && _m || Object])
    ], AppComponent);
    exports.AppComponent = AppComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.config.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js"), __webpack_require__("./node_modules/rxjs/Rx.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, http_1, Rx_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppConfig = (function () {
        function AppConfig(http) {
            this.http = http;
            this.config = null;
            this.env = null;
        }
        /**
         * Use to get the data found in the second file (config file)
         */
        AppConfig.prototype.getConfig = function (key) {
            return this.config[key];
        };
        /**
         * Use to get the data found in the first file (env file)
         */
        AppConfig.prototype.getEnv = function (key) {
            return this.env[key];
        };
        /**
         * This method:
         *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
         *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
         */
        AppConfig.prototype.load = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.get('config/env.json').map(function (res) { return res.json(); }).catch(function (error) {
                    console.log('Configuration file "env.json" could not be read');
                    resolve(true);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                }).subscribe(function (envResponse) {
                    _this.env = envResponse;
                    var request = null;
                    switch (envResponse.env) {
                        case 'production':
                            {
                                request = _this.http.get('config/config.' + envResponse.env + '.json');
                            }
                            break;
                        case 'development':
                            {
                                request = _this.http.get('config/config.' + envResponse.env + '.json');
                            }
                            break;
                        case 'default':
                            {
                                console.error('Environment file is not set or invalid');
                                resolve(true);
                            }
                            break;
                    }
                    if (request) {
                        request
                            .map(function (res) { return res.json(); })
                            .catch(function (error) {
                            console.error('Error reading ' + envResponse.env + ' configuration file');
                            resolve(error);
                            return Rx_1.Observable.throw(error.json().error || 'Server error');
                        })
                            .subscribe(function (responseData) {
                            _this.config = responseData;
                            resolve(true);
                        });
                    }
                    else {
                        console.error('Env config file "env.json" is not valid');
                        resolve(true);
                    }
                });
            });
        };
        return AppConfig;
    }());
    AppConfig = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], AppConfig);
    exports.AppConfig = AppConfig;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js"), __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/route/app-routing.module.ts"), __webpack_require__("./src/app/core/core.module.ts"), __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js"), __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js"), __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js"), __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js"), __webpack_require__("./node_modules/ng2-pop-over/index.js"), __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/app.config.ts"), __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js"), __webpack_require__("./src/app/events/event-list/event-list.component.ts"), __webpack_require__("./src/app/shared-components/event-general-info/event-general-info.component.ts"), __webpack_require__("./src/app/app.component.ts"), __webpack_require__("./src/app/layouts/default-layout/default-layout.component.ts"), __webpack_require__("./src/app/layouts/home-layout/home-layout.component.ts"), __webpack_require__("./src/app/shared-components/emap/emap.component.ts"), __webpack_require__("./src/app/shared-components/detailsbar/detailsbar.component.ts"), __webpack_require__("./src/app/shared-components/menu/menu.component.ts"), __webpack_require__("./src/app/shared-components/menu/menu-item/menu-item-button.component.ts"), __webpack_require__("./src/app/car/car-check/car-check.component.ts"), __webpack_require__("./src/app/car/car-check-cell/car-check-cell.component.ts"), __webpack_require__("./src/app/car/car-check-status/car-check-status.component.ts"), __webpack_require__("./src/app/car/car-status/car-status.component.ts"), __webpack_require__("./src/app/car/car-check-start/car-check-start.component.ts"), __webpack_require__("./src/app/shared-components/event-general-info/event-type-label/event-type-label.component.ts"), __webpack_require__("./src/app/shared-components/event-general-info/event-dots/event-dots.component.ts"), __webpack_require__("./src/app/shared-components/designed-select/designed-select.component.ts"), __webpack_require__("./src/app/events/event-details/event-details.component.ts"), __webpack_require__("./src/app/events/current-status/current-status.component.ts"), __webpack_require__("./src/app/shared-components/current-event/current-event.component.ts"), __webpack_require__("./src/app/shared-components/server-autocomplete/server-autocomplete.component.ts"), __webpack_require__("./src/app/employees/employees-team/employees-team.component.ts"), __webpack_require__("./src/app/employees/employee/employee.component.ts"), __webpack_require__("./src/app/employees/employee-set/employee-set.component.ts"), __webpack_require__("./src/app/supplies/supplies.component.ts"), __webpack_require__("./src/app/quick-report/quick-report.component.ts"), __webpack_require__("./src/app/report/report.component.ts"), __webpack_require__("./src/app/report/used-equipment/used-equipment.component.ts"), __webpack_require__("./src/app/events/prevent-fire/prevent-fire.component.ts"), __webpack_require__("./src/app/events/prevent-fire/prevent-fire-item/prevent-fire-item.component.ts"), __webpack_require__("./src/app/events/prevent-fire/prevent-fire-details/prevent-fire-details.component.ts"), __webpack_require__("./src/app/events/prevent-fire/company-details/company-details.component.ts"), __webpack_require__("./src/app/events/prevent-fire/prevention-table/prevention-table.component.ts"), __webpack_require__("./src/app/shared-components/loader/loader.component.ts"), __webpack_require__("./src/app/logs/logs.component.ts"), __webpack_require__("./src/app/stores/maps/MapsStorage.ts"), __webpack_require__("./src/app/stores/offlineStorage/OfflineStorage.ts"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/services/general/timer-service.ts"), __webpack_require__("./src/app/services/event-list/event-list.service.ts"), __webpack_require__("./src/app/services/event/event-details.service.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/services/general/device.service.ts"), __webpack_require__("./src/app/services/general/gps.service.ts"), __webpack_require__("./src/app/services/general/projection.service.ts"), __webpack_require__("./src/app/services/general/waze.service.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/services/node/node.service.ts"), __webpack_require__("./src/app/services/navigation/mapping-navigation-data.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/services/general/sound.service.ts"), __webpack_require__("./src/app/services/general/date-timer-service.ts"), __webpack_require__("./src/app/services/event/current-event-details.service.ts"), __webpack_require__("./src/app/services/employees/employees.service.ts"), __webpack_require__("./src/app/services/supplies/supplies.service.ts"), __webpack_require__("./src/app/services/quick-report/quick-report.service.ts"), __webpack_require__("./src/app/services/report/report.service.ts"), __webpack_require__("./src/app/services/car/car-check-service.ts"), __webpack_require__("./src/app/services/prevent-fire/prevent-fire.service.ts"), __webpack_require__("./src/app/services/chat/chat.service.ts"), __webpack_require__("./src/app/services/general/reboot.service.ts"), __webpack_require__("./src/app/services/queue/queue.service.ts"), __webpack_require__("./src/app/services/layers/layers.service.ts"), __webpack_require__("./src/app/services/general/log.service.ts"), __webpack_require__("./src/app/shared-components/event-general-info/event-number-pipe/event-first-number.pipe.ts"), __webpack_require__("./src/app/shared-components/event-general-info/event-number-pipe/event-last-number.pipe.ts"), __webpack_require__("./src/app/services/pipes/date-hours.pipe.ts"), __webpack_require__("./src/app/services/pipes/before-hours.pipe.ts"), __webpack_require__("./src/app/services/pipes/date-format.pipe.ts"), __webpack_require__("./src/app/services/pipes/cut-text.ts"), __webpack_require__("./src/app/services/pipes/formatted-cut-text.ts"), __webpack_require__("./src/app/services/pipes/date-timer-pipe.ts"), __webpack_require__("./src/app/services/general/keep.service.ts"), __webpack_require__("./src/app/services/general/keep-alive.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, platform_browser_1, core_1, app_routing_module_1, core_module_1, common_1, forms_1, router_1, http_1, ng2_pop_over_1, core_2, app_config_1, http_2, event_list_component_1, event_general_info_component_1, app_component_1, default_layout_component_1, home_layout_component_1, emap_component_1, detailsbar_component_1, menu_component_1, menu_item_button_component_1, car_check_component_1, car_check_cell_component_1, car_check_status_component_1, car_status_component_1, car_check_start_component_1, event_type_label_component_1, event_dots_component_1, designed_select_component_1, event_details_component_1, current_status_component_1, current_event_component_1, server_autocomplete_component_1, employees_team_component_1, employee_component_1, employee_set_component_1, supplies_component_1, quick_report_component_1, report_component_1, used_equipment_component_1, prevent_fire_component_1, prevent_fire_item_component_1, prevent_fire_details_component_1, company_details_component_1, prevention_table_component_1, loader_component_1, logs_component_1, MapsStorage_1, OfflineStorage_1, map_state_service_1, navigation_service_1, timer_service_1, event_list_service_1, event_details_service_1, home_service_1, device_service_1, gps_service_1, projection_service_1, waze_service_1, connection_service_1, node_service_1, mapping_navigation_data_service_1, content_service_1, alertify_service_1, sound_service_1, date_timer_service_1, current_event_details_service_1, employees_service_1, supplies_service_1, quick_report_service_1, report_service_1, car_check_service_1, prevent_fire_service_1, chat_service_1, reboot_service_1, queue_service_1, layers_service_1, log_service_1, event_first_number_pipe_1, event_last_number_pipe_1, date_hours_pipe_1, before_hours_pipe_1, date_format_pipe_1, cut_text_1, formatted_cut_text_1, date_timer_pipe_1, keep_service_1, keep_alive_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function initConfig(config) {
        return function () { return config.load(); };
    }
    exports.initConfig = initConfig;
    var AppModule = (function () {
        function AppModule() {
        }
        return AppModule;
    }());
    AppModule = __decorate([
        core_1.NgModule({
            exports: [
                emap_component_1.EmapComponent,
                detailsbar_component_1.DetailsbarComponent,
                default_layout_component_1.DefaultLayoutComponent,
                menu_component_1.MenuComponent,
                event_list_component_1.EventListComponent,
                event_general_info_component_1.EventGeneralInfoComponent,
                car_check_component_1.CarCheckComponent,
                home_layout_component_1.HomeLayoutComponent,
                event_type_label_component_1.EventTypeLabelComponent,
                menu_item_button_component_1.MenuItemButtonComponent,
                event_dots_component_1.EventDotsComponent,
                event_first_number_pipe_1.EventFirstNumberPipe,
                event_last_number_pipe_1.EventLastNumberPipe,
                date_hours_pipe_1.DateHoursPipe,
                before_hours_pipe_1.BeforeHoursPipe,
                date_format_pipe_1.DateFormatPipe,
                cut_text_1.CutTextPipe,
                formatted_cut_text_1.FormattedCutTextPipe,
                date_timer_pipe_1.DateTimerPipe,
                event_details_component_1.EventDetailsComponent,
                current_event_component_1.CurrentEventComponent,
                employees_team_component_1.EmployeesTeamComponent,
                employee_component_1.EmployeeComponent,
                employee_set_component_1.EmployeeSetComponent,
                supplies_component_1.SuppliesComponent,
                quick_report_component_1.QuickReportComponent,
                car_check_start_component_1.CarCheckStartComponent,
                car_check_cell_component_1.CarCheckCellComponent,
                car_check_status_component_1.CarCheckStatusComponent,
                current_status_component_1.CurrentStatusComponent,
                designed_select_component_1.DesignedSelectComponent,
                prevent_fire_component_1.PreventFireComponent,
                prevent_fire_item_component_1.PreventFireItemComponent,
                prevent_fire_details_component_1.PreventFireDetailsComponent,
                company_details_component_1.CompanyDetailsComponent,
                prevention_table_component_1.PreventionTableComponent,
                report_component_1.ReportComponent,
                server_autocomplete_component_1.ServerAutocomplete,
                car_status_component_1.CarStatusComponent,
                loader_component_1.LoaderComponent,
                used_equipment_component_1.UsedEquipmentComponent,
                logs_component_1.LogsComponent
            ],
            declarations: [
                emap_component_1.EmapComponent,
                detailsbar_component_1.DetailsbarComponent,
                app_component_1.AppComponent,
                default_layout_component_1.DefaultLayoutComponent,
                menu_component_1.MenuComponent,
                event_list_component_1.EventListComponent,
                event_general_info_component_1.EventGeneralInfoComponent,
                car_check_component_1.CarCheckComponent,
                home_layout_component_1.HomeLayoutComponent,
                event_type_label_component_1.EventTypeLabelComponent,
                menu_item_button_component_1.MenuItemButtonComponent,
                event_dots_component_1.EventDotsComponent,
                event_first_number_pipe_1.EventFirstNumberPipe,
                event_last_number_pipe_1.EventLastNumberPipe,
                date_hours_pipe_1.DateHoursPipe,
                before_hours_pipe_1.BeforeHoursPipe,
                date_format_pipe_1.DateFormatPipe,
                cut_text_1.CutTextPipe,
                formatted_cut_text_1.FormattedCutTextPipe,
                date_timer_pipe_1.DateTimerPipe,
                event_details_component_1.EventDetailsComponent,
                current_event_component_1.CurrentEventComponent,
                employees_team_component_1.EmployeesTeamComponent,
                employee_component_1.EmployeeComponent,
                employee_set_component_1.EmployeeSetComponent,
                supplies_component_1.SuppliesComponent,
                quick_report_component_1.QuickReportComponent,
                car_check_start_component_1.CarCheckStartComponent,
                car_check_cell_component_1.CarCheckCellComponent,
                car_check_status_component_1.CarCheckStatusComponent,
                current_status_component_1.CurrentStatusComponent,
                designed_select_component_1.DesignedSelectComponent,
                prevent_fire_component_1.PreventFireComponent,
                prevent_fire_item_component_1.PreventFireItemComponent,
                prevent_fire_details_component_1.PreventFireDetailsComponent,
                company_details_component_1.CompanyDetailsComponent,
                prevention_table_component_1.PreventionTableComponent,
                report_component_1.ReportComponent,
                server_autocomplete_component_1.ServerAutocomplete,
                car_status_component_1.CarStatusComponent,
                loader_component_1.LoaderComponent,
                used_equipment_component_1.UsedEquipmentComponent,
                logs_component_1.LogsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                core_module_1.CoreModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                http_2.HttpModule,
                ng2_pop_over_1.PopoverModule
            ],
            providers: [
                MapsStorage_1.MapsStorage,
                map_state_service_1.MapStateService,
                event_list_service_1.EventListService,
                OfflineStorage_1.OfflineStorage,
                event_details_service_1.EventDetailsService,
                home_service_1.HomeService,
                device_service_1.DeviceService,
                gps_service_1.GPSService,
                projection_service_1.ProjectionService,
                node_service_1.NodeService,
                connection_service_1.ConnectionService,
                navigation_service_1.NavigationService,
                mapping_navigation_data_service_1.MappingNavigationDataService,
                content_service_1.ContentService,
                alertify_service_1.AlertifyService,
                waze_service_1.WazeService,
                current_event_details_service_1.CurrentEventDetailsService,
                employees_service_1.EmployeesService,
                supplies_service_1.SuppliesService,
                quick_report_service_1.QuickReportService,
                timer_service_1.TimerService,
                sound_service_1.SoundService,
                car_check_service_1.CarCheckService,
                prevent_fire_service_1.PreventFireService,
                report_service_1.ReportService,
                before_hours_pipe_1.BeforeHoursPipe,
                chat_service_1.ChatService,
                date_timer_service_1.DateTimerService,
                reboot_service_1.RebootService,
                layers_service_1.LayersService,
                queue_service_1.QueueService,
                keep_service_1.KeepAliveService,
                keep_alive_service_1.KeepAliveMonitorService,
                log_service_1.LogService,
                app_config_1.AppConfig,
                { provide: core_2.APP_INITIALIZER,
                    useFactory: initConfig,
                    deps: [app_config_1.AppConfig],
                    multi: true }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    exports.AppModule = AppModule;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/car/car-check-cell/car-check-cell.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cell-wrapper\" [ngClass]=\"cellWrapperClass\" id=\"{{ cell.carCellId }}\">\r\n    <div [className]=\"'header'\">\r\n        <span [className]=\"'header-text'\">{{ cell.carCellName }}</span>\r\n        <span class=\"image-sprite\" [ngClass]=\"{ 'tab-icn-dd': isCellShow, 'tab-icn-dd-up': !isCellShow }\"\r\n        (click)=\"isCellShow = !isCellShow\"></span>\r\n    </div>  \r\n    <div *ngIf=\"isCellShow\">\r\n        <div [className]=\"'equipment-table'\">\r\n            <div [className]=\"'equipment-row'\">\r\n                <span [className]=\"'equipment-header-cell equipment-first-cell'\">{{ content ? content['cell-equipment-text'] : '' }}</span>\r\n                <span [className]=\"'equipment-header-cell equipment-second-cell'\">{{ content ? content['cell-equipment-amount'] : '' }}</span>\r\n                <span [className]=\"'equipment-header-cell equipment-third-cell'\"></span>\r\n          </div>\r\n            <div *ngIf=\"cell.cellEquipments && cell.cellEquipments.length > 0\">\r\n                <div [className]=\"'equipment-row'\" *ngFor=\"let equipment of cell.cellEquipments; let i = index\" \r\n                (click)=\"selectAction(equipment);popOver.toggle($event)\">\r\n                    <span class=\"equipment-cell equipment-first-cell\" [ngClass]=\"{ 'grayed' : (i+1)%2 === 0 }\">{{ equipment.equipmentDesc }}</span>\r\n                    <span class=\"equipment-cell equipment-second-cell\" [ngClass]=\"{ 'grayed' : (i+1)%2 === 0 }\">{{ equipment.quantityRequired }}</span>\r\n                    <span class=\"equipment-cell equipment-third-cell\" [ngClass]=\"{ 'grayed' : (i+1)%2 === 0 }\"><div class=\"dots\"></div></span>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"!cell.cellEquipments || cell.cellEquipments.length == 0\" [className]=\"'error-wrapper'\">\r\n                <span [className]=\"'error'\">{{ content ? content['no-equipment'] : '' }}</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div [className]=\"'note-tables-wrapper'\">\r\n            <div [className]=\"'note-table'\">\r\n                <div [className]=\"'note-row'\">\r\n                    <span [className]=\"'note-header-cell'\">{{ content ? content['open-damage-text'] : '' }}</span>\r\n                </div>\r\n\r\n                <div *ngIf=\"isDamageShow()\" [className]=\"'damage-row-wrapper'\">\r\n                    <div *ngFor=\"let equipment of cell.cellEquipments\"> \r\n                        <div *ngIf=\"equipment.openDamageList != null && equipment.openDamageList.length > 0\">\r\n                            <div *ngFor=\"let damage of equipment.openDamageList\">\r\n                                <div *ngIf=\"damage.equipmentDamageTypeId == 1\" [className]=\"'damage-row'\">\r\n                                    <span class=\"damage-cell damage-first-cell\">{{ damage.equipmentInfo.equipmentDesc }}</span>\r\n                                    <span class=\"damage-cell damage-second-cell\">{{ damage.damageDesc }}</span>\r\n                                    <span [className]=\"'damage-cell damage-third-cell button-wrapper'\">\r\n                                        <button [className]=\"'fix-btn'\" (click)=\"actionSelectionType=0;closeDamage(damage.carEquipmentDamageId)\">\r\n                                            {{ content ? content['fix-button-text'] : '' }}\r\n                                        </button>\r\n                                    </span>                                    \r\n                                    <div [className]=\"'damage-open-by'\">\r\n                                        <span class=\"damage-opener\">{{ content ? content['open-by'] : '' }} {{  damage.damageCreateEmployee.employeeName }}</span>\r\n                                        <span class=\"damage-date\">{{ damage.damageCreateEmployee.createdDate | dateFormat }}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div [className]=\"'error-wrapper'\" *ngIf=\"!isDamageShow()\">\r\n                    <span [className]=\"'error'\">{{ content ? content['no-damage'] : '' }}</span>\r\n                </div>\r\n\r\n            </div>\r\n    \r\n            <div [className]=\"'note-table'\">\r\n                <div [className]=\"'note-row'\">\r\n                    <span [className]=\"'note-header-cell'\">{{ content ? content['lacks'] : '' }}</span>\r\n                </div>\r\n\r\n                <div *ngIf=\"isLackShow()\" [className]=\"'damage-row-wrapper'\">\r\n                    <div *ngFor=\"let equipment of cell.cellEquipments\"> \r\n                        <div *ngIf=\"equipment.openDamageList != null && equipment.openDamageList.length > 0\">\r\n                            <div  *ngFor=\"let lack of equipment.openDamageList\">\r\n                                <div *ngIf=\"lack.equipmentDamageTypeId == 2\" [className]=\"'damage-row'\">\r\n                                    <span class=\"damage-cell lack-second-cell\">{{ lack.equipmentInfo.equipmentDesc }}</span>\r\n                                    <span class=\"damage-cell lack-last-cell custom\">{{ content ? content['lack-text'] : '' }} {{ lack.lackQuantity }} {{ lack.equipmentInfo.unitDesc }}</span>\r\n                                    <span [className]=\"'button-wrapper'\">\r\n                                        <button [className]=\"'fix-btn'\" (click)=\"popup.show($event);actionSelectionType=1;selectedEquipment=lack.equipmentInfo;carEquipmentDamageId=lack.carEquipmentDamageId;\">\r\n                                            {{ content ? content['update-button-text'] : '' }}\r\n                                        </button>\r\n                                    </span>    \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div [className]=\"'error-wrapper'\" *ngIf=\"!isLackShow()\">\r\n                    <span [className]=\"'error'\">{{ content ? content['no-lack'] : '' }}</span>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div [className]=\"'note-table treat'\">\r\n                <div [className]=\"'note-row'\">\r\n                    <span [className]=\"'note-header-cell'\">{{ content ? content['treatment'] : '' }}</span>\r\n                </div>\r\n                \r\n                <div *ngIf=\"isTreatShow()\" [className]=\"'damage-row-wrapper'\">\r\n                    <div *ngFor=\"let equipment of cell.cellEquipments\"> \r\n                        <div *ngIf=\"equipment.closedDamageList != null && equipment.closedDamageList.length > 0\">\r\n                            <div *ngFor=\"let damage of equipment.closedDamageList\">\r\n                                <div *ngIf=\"damage.equipmentDamageTypeId == 3\" [className]=\"'damage-row'\">\r\n                                    <span class=\"damage-cell damage-first-cell\">{{ damage.equipmentInfo.equipmentDesc }}</span>\r\n                                    <span class=\"damage-cell damage-second-cell treat\">{{ damage.treatmentDesc }}</span>\r\n                                    <span class=\"damage-cell damage-third-cell\">{{ damage.damageCreateEmployee.createdDate | dateFormat }}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div [className]=\"'error-wrapper'\" *ngIf=\"!isTreatShow()\">\r\n                    <span [className]=\"'error'\">{{ content ? content['no-treatment'] : '' }}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>  \r\n</div>\r\n\r\n<pop-over #popOver [my]=\"'top right'\" [at]=\"'bottom left'\">\r\n    <div class=\"selection-pop-over\">\r\n        <span  [className]=\"'choose-button'\" (click)=\"popOver.hide($event);popup.show($event);actionSelectionType=0;\">{{ content ? content['enterDamage'] : '' }}</span>\r\n        <span  [className]=\"'choose-button'\" (click)=\"popOver.hide($event);popup.show($event);actionSelectionType=1;\">{{ content ? content['enterLack'] : '' }}</span>\r\n        <span  [className]=\"'choose-button last'\" (click)=\"popOver.hide($event);popup.show($event);actionSelectionType=2;\">{{ content ? content['enterTreatment'] : '' }}</span>\r\n    </div>\r\n</pop-over>\r\n\r\n<pop-over #popup>\r\n    <div class=\"popup\">\r\n        <detailsbar [menuType]='menuType' \r\n            [detailsbarType]='detailsbarType'\r\n            [data]='getNavigationData()'>\r\n        </detailsbar>\r\n\r\n        <div [className]=\"'popup-wrapper'\" *ngIf=\"selectedEquipment\">\r\n            <div [className]=\"'input-label'\" *ngIf=\"actionSelectionType == 1\">\r\n                {{ selectedEquipment.equipmentDesc }} {{ selectedEquipment.quantityRequired }} {{ selectedEquipment.unitDesc }} \r\n            </div>\r\n            <div [className]=\"'input-wrapper'\">\r\n                <input [value]=\"inputVal\" (input)=\"inputVal = $event.target.value\" [maxLength]=\"actionSelectionType == 1 ? 4 : 100\">                \r\n            </div>\r\n            <div *ngIf=\"!isValid\">\r\n                <span [className]=\"'error-star'\">*</span>\r\n                <span [className]=\"'notification'\">{{ content ? content.mustNumber : '' }}</span>\r\n            </div>\r\n        </div>\r\n    </div>    \r\n    <div [className]=\"'overlay'\"></div>\r\n</pop-over>\r\n"

/***/ }),

/***/ "./src/app/car/car-check-cell/car-check-cell.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/car/car-equipment-damage-types.ts"), __webpack_require__("./src/app/shared-classes/common/menu-types.ts"), __webpack_require__("./src/app/shared-classes/common/detailsbar-types.ts"), __webpack_require__("./src/app/shared-classes/common/action-selection-types.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, car_equipment_damage_types_1, menu_types_1, detailsbar_types_1, action_selection_types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CarCheckCellComponent = (function () {
        function CarCheckCellComponent() {
            this.onSaveDamage = new core_1.EventEmitter();
            this.onCloseDamage = new core_1.EventEmitter();
            this.isCellShow = true;
            this.menuType = menu_types_1.menuTypes.nomenu;
            this.detailsbarType = detailsbar_types_1.detailsbarTypes.default;
            this.inputVal = '';
            this.isValid = true;
            this.carEquipmentDamageId = -1;
        }
        CarCheckCellComponent.prototype.isDamageShow = function () {
            if (this.cell.cellEquipments == null || this.cell.cellEquipments.length == 0) {
                return false;
            }
            for (var index = 0; index < this.cell.cellEquipments.length; index++) {
                var equipment = this.cell.cellEquipments[index];
                if (equipment == null || equipment.openDamageList.length == 0) {
                    continue;
                }
                for (var i = 0; i < equipment.openDamageList.length; i++) {
                    if (equipment.openDamageList[i].equipmentDamageTypeId == car_equipment_damage_types_1.EquipmentDamageType.Damage) {
                        return true;
                    }
                }
            }
            return false;
        };
        CarCheckCellComponent.prototype.isLackShow = function () {
            if (this.cell.cellEquipments == null || this.cell.cellEquipments.length == 0) {
                return false;
            }
            for (var index = 0; index < this.cell.cellEquipments.length; index++) {
                var equipment = this.cell.cellEquipments[index];
                if (equipment == null || equipment.openDamageList.length == 0) {
                    continue;
                }
                for (var i = 0; i < equipment.openDamageList.length; i++) {
                    if (equipment.openDamageList[i].equipmentDamageTypeId == car_equipment_damage_types_1.EquipmentDamageType.Lack) {
                        return true;
                    }
                }
            }
            return false;
        };
        CarCheckCellComponent.prototype.isTreatShow = function () {
            if (this.cell.cellEquipments == null || this.cell.cellEquipments.length == 0) {
                return false;
            }
            for (var index = 0; index < this.cell.cellEquipments.length; index++) {
                var equipment = this.cell.cellEquipments[index];
                if (equipment == null || equipment.closedDamageList.length == 0) {
                    continue;
                }
                for (var i = 0; i < equipment.closedDamageList.length; i++) {
                    if (equipment.closedDamageList[i].equipmentDamageTypeId == car_equipment_damage_types_1.EquipmentDamageType.Immediate) {
                        return true;
                    }
                }
            }
            return false;
        };
        CarCheckCellComponent.prototype.selectAction = function (equipment) {
            this.selectedEquipment = equipment;
        };
        CarCheckCellComponent.prototype.getNavigationData = function () {
            var _this = this;
            return {
                buttonRight: {
                    callback: function () {
                        _this.popup.hide();
                        _this.inputVal = '';
                        _this.carEquipmentDamageId = -1;
                    },
                    class: "image-sprite tab-icn-x"
                },
                buttonLeft: {
                    callback: function () {
                        _this.saveDamage();
                    },
                    class: "image-sprite tab-icn-ok"
                },
                title: this.getTitle()
            };
        };
        CarCheckCellComponent.prototype.saveDamage = function () {
            if (!this.isInputValid()) {
                this.inputVal = '';
                return;
            }
            if (this.carEquipmentDamageId != -1) {
                this.closeDamage(this.carEquipmentDamageId);
            }
            else {
                if (this.actionSelectionType == action_selection_types_1.ActionSelectionTypes.Lack && this.isLackExists()) {
                    var damageID = this.getEquipmentDamageID();
                    if (damageID != -1) {
                        this.closeDamage(damageID);
                    }
                }
                else {
                    this.onSaveDamage.emit({ inputVal: this.inputVal, actionSelectionType: this.actionSelectionType, carEquipmentId: this.selectedEquipment.carEquipmentId, cellId: this.cell.carCellId });
                }
            }
            this.popup.hide();
            this.inputVal = '';
            this.carEquipmentDamageId = -1;
        };
        CarCheckCellComponent.prototype.isLackExists = function () {
            if (this.cell.cellEquipments == null || this.cell.cellEquipments.length == 0) {
                return false;
            }
            for (var index = 0; index < this.cell.cellEquipments.length; index++) {
                var equipment = this.cell.cellEquipments[index];
                if (equipment == null || equipment.openDamageList.length == 0) {
                    continue;
                }
                for (var i = 0; i < equipment.openDamageList.length; i++) {
                    if (equipment.openDamageList[i].equipmentInfo.equipmentId == this.selectedEquipment.equipmentId && equipment.openDamageList[i].equipmentDamageTypeId == car_equipment_damage_types_1.EquipmentDamageType.Lack) {
                        return true;
                    }
                }
            }
            return false;
        };
        CarCheckCellComponent.prototype.getEquipmentDamageID = function () {
            if (this.cell.cellEquipments == null || this.cell.cellEquipments.length == 0) {
                return -1;
            }
            for (var index = 0; index < this.cell.cellEquipments.length; index++) {
                var equipment = this.cell.cellEquipments[index];
                if (equipment == null || equipment.openDamageList.length == 0) {
                    continue;
                }
                for (var i = 0; i < equipment.openDamageList.length; i++) {
                    if (equipment.openDamageList[i].equipmentInfo.equipmentId == this.selectedEquipment.equipmentId && equipment.openDamageList[i].equipmentDamageTypeId == car_equipment_damage_types_1.EquipmentDamageType.Lack) {
                        return equipment.openDamageList[i].carEquipmentDamageId;
                    }
                }
            }
            return -1;
        };
        CarCheckCellComponent.prototype.isInputValid = function () {
            if (this.actionSelectionType == action_selection_types_1.ActionSelectionTypes.Damage || this.actionSelectionType == action_selection_types_1.ActionSelectionTypes.Treat) {
                this.isValid = this.inputVal && this.inputVal.trim() != '';
            }
            else if (this.actionSelectionType == action_selection_types_1.ActionSelectionTypes.Lack) {
                this.isValid = this.inputVal && this.inputVal.trim() != '' && /^[0-9]*$/.test(this.inputVal.trim());
            }
            return this.isValid;
        };
        CarCheckCellComponent.prototype.getTitle = function () {
            if (this.actionSelectionType == action_selection_types_1.ActionSelectionTypes.Damage) {
                return this.content.enterDamage;
            }
            else if (this.actionSelectionType == action_selection_types_1.ActionSelectionTypes.Lack) {
                return this.content.enterLack;
            }
            else if (this.actionSelectionType == action_selection_types_1.ActionSelectionTypes.Treat) {
                return this.content.enterTreatment;
            }
        };
        CarCheckCellComponent.prototype.closeDamage = function (carEquipmentDamageId) {
            this.onCloseDamage.emit({ inputVal: this.inputVal,
                actionSelectionType: this.actionSelectionType,
                carEquipmentDamageId: carEquipmentDamageId,
                cellId: this.cell.carCellId
            });
        };
        return CarCheckCellComponent;
    }());
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
    ], CarCheckCellComponent.prototype, "onSaveDamage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
    ], CarCheckCellComponent.prototype, "onCloseDamage", void 0);
    __decorate([
        core_1.ViewChild('popup'),
        __metadata("design:type", Object)
    ], CarCheckCellComponent.prototype, "popup", void 0);
    CarCheckCellComponent = __decorate([
        core_1.Component({
            selector: 'car-check-cell',
            template: __webpack_require__("./src/app/car/car-check-cell/car-check-cell.component.html"),
            inputs: ['cellWrapperClass', 'cell', 'content']
        }),
        __metadata("design:paramtypes", [])
    ], CarCheckCellComponent);
    exports.CarCheckCellComponent = CarCheckCellComponent;
    var _a, _b;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=car-check-cell.component.js.map

/***/ }),

/***/ "./src/app/car/car-check-start/car-check-start.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'car-check-wrapper'\">\r\n    <span [className]=\"'image-sprite car-check-background'\"></span>\r\n    <div [className]=\"'data-wrapper'\">\r\n        <div [className]=\"'row'\">\r\n            <div [className]=\"'cell'\">\r\n                <div [className]=\"'label-text'\">{{ content ? content.employeeText: '' }}</div>\r\n                <designed-select (onValueChange)=\"valueChanged($event)\" [watermark]=\"content.chooseName\" [dataList]=\"employees\"></designed-select>\r\n                <div *ngIf=\"!isEmployeeValid\">\r\n                    <span [className]=\"'error-star'\">*</span>\r\n                    <span [className]=\"'notification'\">{{ content ? content.required : '' }}</span>\r\n                </div>\r\n            </div>\r\n            <div [className]=\"'cell'\">\r\n                <div [className]=\"'label-text'\">{{ content ? content.mkText: '' }}</div>\r\n                <div [className]=\"'input-wrapper'\">\r\n                    <input [value]=\"carKm != 0 ? carKm : ''\" (input)=\"carKm = $event.target.value\" type=\"number\">\r\n                    <span [className]=\"'type'\">\r\n                        <span>{{ content ? content.mk : '' }}</span>\r\n                    </span>\r\n                </div>\r\n                <div *ngIf=\"!isMkValid\">\r\n                    <span [className]=\"'error-star'\">*</span>\r\n                    <span [className]=\"'notification'\">{{ content ? content.mustNumber : '' }}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div [className]=\"'row'\">\r\n            <div [className]=\"'start-btn'\" (click)=\"startCheck()\">{{ content ? content.startButtonText : '' }}</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/car/car-check-start/car-check-start.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/shared-classes/common/navigation-data.ts"), __webpack_require__("./src/app/services/car/car-check-service.ts"), __webpack_require__("./src/app/shared-classes/car/car-check-data.ts"), __webpack_require__("./src/app/shared-classes/request/start-car-check.request.ts"), __webpack_require__("./src/app/shared-classes/common/drop-down-data.ts"), __webpack_require__("./src/app/shared-classes/common/route-path.ts"), __webpack_require__("./src/app/shared-classes/common/base-component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, map_state_service_1, content_service_1, home_service_1, navigation_service_1, navigation_data_1, car_check_service_1, car_check_data_1, start_car_check_request_1, drop_down_data_1, route_path_1, base_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CarCheckStartComponent = (function (_super) {
        __extends(CarCheckStartComponent, _super);
        function CarCheckStartComponent(mapStateService, contentService, carCheckService, homeService, navigationService) {
            var _this = _super.call(this, contentService, 'car-check-start') || this;
            _this.homeService = homeService;
            _this.navigationService = navigationService;
            _this.isMkValid = true;
            _this.isEmployeeValid = true;
            _this.carKm = '';
            _this.employeeSelected = new drop_down_data_1.DropDownData();
            mapStateService.changeMapState(false);
            _this.routes = new route_path_1.RoutePath();
            homeService.getCar().then(function (response) {
                var request = new start_car_check_request_1.StartCarCheckRequest(response.data.carId, response.data.positionStation.unionId);
                carCheckService.getEmployeesCarCheck(request).then(function (res) {
                    if (res.isSuccessWithResult()) {
                        _this.employees = res.data.options;
                    }
                });
            });
            return _this;
        }
        CarCheckStartComponent.prototype.startCheck = function () {
            var _this = this;
            if (this.isDataValid()) {
                this.homeService.getCar().then(function (response) {
                    _this.navigationService.navigate(new navigation_data_1.NavigationData(_this.routes.CAR_CHECK, new car_check_data_1.CarCheckData('', response.data.carId, parseInt(_this.employeeSelected.value), parseInt(_this.carKm.trim()))));
                });
            }
        };
        CarCheckStartComponent.prototype.isDataValid = function () {
            this.isMkValid = this.carKm.trim() != '' && /^[0-9]*$/.test(this.carKm.trim());
            this.isEmployeeValid = this.employeeSelected != null && this.employeeSelected.value != undefined;
            return this.isMkValid && this.isEmployeeValid;
        };
        CarCheckStartComponent.prototype.valueChanged = function (value) {
            this.employeeSelected = value;
        };
        return CarCheckStartComponent;
    }(base_component_1.BaseComponent));
    CarCheckStartComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/car/car-check-start/car-check-start.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _a || Object, typeof (_b = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _b || Object, typeof (_c = typeof car_check_service_1.CarCheckService !== "undefined" && car_check_service_1.CarCheckService) === "function" && _c || Object, typeof (_d = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _d || Object, typeof (_e = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _e || Object])
    ], CarCheckStartComponent);
    exports.CarCheckStartComponent = CarCheckStartComponent;
    var _a, _b, _c, _d, _e;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=car-check-start.component.js.map

/***/ }),

/***/ "./src/app/car/car-check-status/car-check-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"cellWrapperClass\" id=\"{{ cellId }}\">\r\n    <div class=\"damage-cell-wrapper first\">\r\n        <div [className]=\"'header'\">\r\n            <span [className]=\"'header-text'\">{{ content ? content['open-damage-text'] : '' }}</span>\r\n            <span class=\"image-sprite\" [ngClass]=\"{ 'tab-icn-dd': isCellShow, 'tab-icn-dd-up': !isCellShow }\" (click)=\"isCellShow = !isCellShow\"></span>\r\n        </div>  \r\n        <div *ngIf=\"isCellShow\">\r\n            <div [className]=\"'damage-table'\">\r\n                <div *ngIf=\"isDamageShow()\">\r\n                    <div *ngFor=\"let damage of data\">\r\n                        <div *ngIf=\"damage.equipmentDamageTypeId == 1\" [className]=\"'damage-row'\">\r\n                            <span class=\"damage-cell damage-first-cell\">{{ damage.cellName }}</span>\r\n                            <span class=\"damage-cell damage-second-cell\">{{ damage.equipmentInfo.equipmentDesc }}</span>\r\n                            <span class=\"damage-cell damage-third-cell\">{{ damage.damageDesc }}</span>\r\n                            <div [className]=\"'damage-open-by'\">\r\n                                <span class=\"damage-opener\">{{ content ? content['open-by'] : '' }} {{  damage.damageCreateEmployee.employeeName }}</span>\r\n                                <span class=\"damage-date\">{{ damage.damageCreateEmployee.createdDate | dateFormat }}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div [className]=\"'error-wrapper'\"  *ngIf=\"!isDamageShow()\">\r\n                    <span [className]=\"'error'\">{{ content ? content['no-equipment'] : '' }}</span>\r\n                </div>\r\n            </div>\r\n        </div>  \r\n    </div>\r\n\r\n    <div class=\"damage-cell-wrapper\">\r\n        <div [className]=\"'header'\">\r\n            <span [className]=\"'header-text'\">{{ content ? content['lacks'] : '' }}</span>\r\n            <span class=\"image-sprite\" [ngClass]=\"{ 'tab-icn-dd': isDamageCellShow, 'tab-icn-dd-up': !isDamageCellShow }\" (click)=\"isDamageCellShow = !isDamageCellShow\"></span>\r\n        </div>  \r\n        <div *ngIf=\"isDamageCellShow\">\r\n            <div [className]=\"'damage-table'\">\r\n                <div *ngIf=\"isLackShow()\">\r\n                    <div *ngFor=\"let lack of data\">\r\n                        <div *ngIf=\"lack.equipmentDamageTypeId == 2\" [className]=\"'damage-row'\">\r\n                            <span class=\"damage-cell damage-first-cell\">{{ lack.cellName }}</span>\r\n                            <span class=\"damage-cell lack-second-cell\">{{ lack.equipmentInfo.equipmentDesc }}</span>\r\n                            <span class=\"lack-last-cell\">{{ content ? content['lack-text'] : '' }} {{ lack.lackQuantity }} {{ lack.equipmentInfo.unitDesc }}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div [className]=\"'error-wrapper'\"  *ngIf=\"!isLackShow()\">\r\n                    <span [className]=\"'error'\">{{ content ? content['no-equipment'] : '' }}</span>\r\n                </div>\r\n            </div>\r\n        </div>  \r\n    </div>\r\n \r\n</div>"

/***/ }),

/***/ "./src/app/car/car-check-status/car-check-status.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/car/car-equipment-damage-types.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, car_equipment_damage_types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CarCheckStatusComponent = (function () {
        function CarCheckStatusComponent() {
            this.isCellShow = true;
            this.isDamageCellShow = true;
        }
        CarCheckStatusComponent.prototype.isDamageShow = function () {
            if (this.data == null || this.data.length == 0) {
                return false;
            }
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].equipmentDamageTypeId == car_equipment_damage_types_1.EquipmentDamageType.Damage) {
                    return true;
                }
            }
            return false;
        };
        CarCheckStatusComponent.prototype.isLackShow = function () {
            if (this.data == null || this.data.length == 0) {
                return false;
            }
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].equipmentDamageTypeId == car_equipment_damage_types_1.EquipmentDamageType.Lack) {
                    return true;
                }
            }
            return false;
        };
        return CarCheckStatusComponent;
    }());
    CarCheckStatusComponent = __decorate([
        core_1.Component({
            selector: 'car-check-status',
            template: __webpack_require__("./src/app/car/car-check-status/car-check-status.component.html"),
            inputs: ['cellWrapperClass', 'cellId', 'content', 'data']
        }),
        __metadata("design:paramtypes", [])
    ], CarCheckStatusComponent);
    exports.CarCheckStatusComponent = CarCheckStatusComponent;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=car-check-status.component.js.map

/***/ }),

/***/ "./src/app/car/car-check/car-check.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'car-check-wrapper'\" *ngIf=\"carCheckModel && carCheckModel.car && carCheckModel.car.cells\">\r\n    <div [className]=\"'menu-wrapper'\">\r\n        <menu [menuType]='carCheckMenuType' [data]='{ cells: carCheckModel.car.cells }' [currentCell]='currentCell' (onItemClicked)=\"itemClicked($event)\"></menu>\r\n    </div>\r\n    <div [className]=\"'cells-wrapper'\"  (scroll)=\"cellWrapperScroll()\">\r\n        <car-check-status [cellId]=\"STATUSCELL\" [content]=\"content\" [data]=\"carCheckModel.customDamageList\" [cellWrapperClass]=\"'car-check'\"></car-check-status>\r\n        <car-check-cell [cell]=\"cell\" [content]=\"content\" *ngFor=\"let cell of carCheckModel.car.cells\" \r\n        (onSaveDamage)=\"save($event)\" (onCloseDamage)=\"close($event)\"></car-check-cell>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/car/car-check/car-check.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/navigation/mapping-navigation-data.service.ts"), __webpack_require__("./src/app/shared-classes/common/menu-types.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/shared-classes/request/car-check.request.ts"), __webpack_require__("./src/app/services/car/car-check-service.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/shared-classes/car/car-check-data.ts"), __webpack_require__("./src/app/shared-classes/common/action-selection-types.ts"), __webpack_require__("./src/app/shared-classes/request/add-equipment-request.ts"), __webpack_require__("./src/app/shared-classes/request/add-equipment-lack-request.ts"), __webpack_require__("./src/app/shared-classes/request/close-damage-request.ts"), __webpack_require__("./src/app/shared-classes/request/close-lack-request.ts"), __webpack_require__("./src/app/shared-classes/request/save-car-check-finish.ts"), __webpack_require__("./src/app/shared-classes/common/navigation-data.ts"), __webpack_require__("./src/app/shared-classes/common/base-component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, map_state_service_1, content_service_1, mapping_navigation_data_service_1, menu_types_1, home_service_1, car_check_request_1, car_check_service_1, navigation_service_1, car_check_data_1, action_selection_types_1, add_equipment_request_1, add_equipment_lack_request_1, close_damage_request_1, close_lack_request_1, save_car_check_finish_1, navigation_data_1, base_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CarCheckComponent = (function (_super) {
        __extends(CarCheckComponent, _super);
        function CarCheckComponent(mapStateService, contentService, mappingNavigationDataService, navigationService, homeService, carCheckService) {
            var _this = _super.call(this, contentService, 'car-check') || this;
            _this.homeService = homeService;
            _this.carCheckService = carCheckService;
            _this.STATUSCELL = 999;
            _this.carCheckMenuType = menu_types_1.menuTypes.carCheck;
            _this.currentCell = 0;
            mapStateService.changeMapState(false);
            var data = navigationService.getNavigationData();
            var request = null;
            if (data instanceof car_check_data_1.CarCheckData) {
                request = new car_check_request_1.CarCheckRequest(data.carId, data.employeeId, data.carKm.toString());
            }
            else {
                request = new car_check_request_1.CarCheckRequest(data.car.carId, data.checker.employeeId, data.car.carKm.toString());
            }
            carCheckService.getCarCheck(request).then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.carCheckModel = response.data;
                    if (_this.carCheckModel && _this.carCheckModel.car && _this.carCheckModel.car.cells && _this.carCheckModel.car.cells.length > 0) {
                        _this.currentCell = _this.STATUSCELL;
                    }
                }
            });
            _this.checkSaveEmitter = mappingNavigationDataService.$checkSaveEmitter.subscribe(function (result) {
                var request = new save_car_check_finish_1.SaveCarCheckFinish(_this.carCheckModel.car.carId, _this.carCheckModel.carCheckId);
                _this.carCheckService.finishCarCheck(request).then(function (response) {
                    if (response.isSuccessWithResult()) {
                        navigationService.navigate(new navigation_data_1.NavigationData(''));
                    }
                });
            });
            return _this;
        }
        CarCheckComponent.prototype.ngOnDestroy = function () {
            this.checkSaveEmitter.unsubscribe();
        };
        CarCheckComponent.prototype.cellWrapperScroll = function () {
            var elem = document.getElementById(this.STATUSCELL.toString());
            if (elem && this.isScrolledIntoView(elem)) {
                this.currentCell = this.STATUSCELL;
            }
            else {
                for (var index = 0; index < this.carCheckModel.car.cells.length; index++) {
                    var elem_1 = document.getElementById(this.carCheckModel.car.cells[index].carCellId.toString());
                    if (elem_1 && this.isScrolledIntoView(elem_1)) {
                        this.currentCell = this.carCheckModel.car.cells[index].carCellId;
                    }
                }
            }
        };
        CarCheckComponent.prototype.isScrolledIntoView = function (elem) {
            var docViewTop = 0;
            var docViewBottom = window.outerHeight - 50;
            var bounding = elem.getBoundingClientRect();
            var elemTop = bounding.top;
            var elementBottom = elemTop + bounding.height;
            return (elemTop > docViewTop && elemTop < docViewBottom) || (elemTop < docViewTop && elementBottom > docViewBottom);
        };
        CarCheckComponent.prototype.save = function (savedElement) {
            if (savedElement.actionSelectionType == action_selection_types_1.ActionSelectionTypes.Damage) {
                this.saveDamage(this.carCheckModel.car.carId, savedElement.carEquipmentId, savedElement.inputVal);
            }
            else if (savedElement.actionSelectionType == action_selection_types_1.ActionSelectionTypes.Lack) {
                this.saveLack(this.carCheckModel.car.carId, savedElement.carEquipmentId, savedElement.inputVal);
            }
            else if (savedElement.actionSelectionType == action_selection_types_1.ActionSelectionTypes.Treat) {
                this.saveTreat(this.carCheckModel.car.carId, savedElement.carEquipmentId, savedElement.inputVal);
            }
        };
        CarCheckComponent.prototype.itemClicked = function (item) {
            this.currentCell = item;
            window.location.hash = '';
            window.location.hash = "#" + this.currentCell;
        };
        CarCheckComponent.prototype.saveDamage = function (carId, carEquipmentId, input) {
            var _this = this;
            var request = new add_equipment_request_1.AddEquipmentRequest(carId, this.carCheckModel.carCheckId, carEquipmentId, this.carCheckModel.checker.employeeId, input);
            this.carCheckService.addEquipmentDamage(request).then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.carCheckService.addEquipmentDamageList(response.data);
                }
            });
        };
        CarCheckComponent.prototype.saveTreat = function (carId, carEquipmentId, input) {
            var _this = this;
            var request = new add_equipment_request_1.AddEquipmentRequest(carId, this.carCheckModel.carCheckId, carEquipmentId, this.carCheckModel.checker.employeeId, input);
            this.carCheckService.addEquipmentTreat(request).then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.carCheckService.addEquipmentDamageList(response.data, false);
                }
            });
        };
        CarCheckComponent.prototype.saveLack = function (carId, carEquipmentId, input) {
            var _this = this;
            var request = new add_equipment_lack_request_1.AddEquipmentLackRequest(carId, this.carCheckModel.carCheckId, carEquipmentId, this.carCheckModel.checker.employeeId, input);
            this.carCheckService.addEquipmentLack(request).then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.carCheckService.addEquipmentDamageList(response.data);
                }
            });
        };
        CarCheckComponent.prototype.close = function (closeElement) {
            if (closeElement.actionSelectionType == action_selection_types_1.ActionSelectionTypes.Damage) {
                this.closeDamage(closeElement);
            }
            else if (closeElement.actionSelectionType == action_selection_types_1.ActionSelectionTypes.Lack) {
                this.updateLack(closeElement);
            }
        };
        CarCheckComponent.prototype.closeDamage = function (closeElement) {
            var _this = this;
            var request = new close_damage_request_1.CloseDamageRequest(this.carCheckModel.car.carId, closeElement.carEquipmentDamageId, this.carCheckModel.checker.employeeId);
            this.carCheckService.closeEquipmentDamage(request).then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.carCheckService.removeFromDamageList(closeElement.cellId, closeElement.carEquipmentDamageId);
                }
            });
        };
        CarCheckComponent.prototype.updateLack = function (closeElement) {
            var _this = this;
            var request = new close_lack_request_1.CloseLackRequest(this.carCheckModel.car.carId, closeElement.carEquipmentDamageId, this.carCheckModel.carCheckId, closeElement.inputVal, this.carCheckModel.checker.employeeId);
            this.carCheckService.updateEquipmentLack(request).then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.carCheckService.updateLackList(closeElement.cellId, closeElement.carEquipmentDamageId, closeElement.inputVal);
                }
                else {
                    _this.carCheckService.removeFromDamageList(closeElement.cellId, closeElement.carEquipmentDamageId);
                }
            });
        };
        return CarCheckComponent;
    }(base_component_1.BaseComponent));
    CarCheckComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/car/car-check/car-check.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _a || Object, typeof (_b = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _b || Object, typeof (_c = typeof mapping_navigation_data_service_1.MappingNavigationDataService !== "undefined" && mapping_navigation_data_service_1.MappingNavigationDataService) === "function" && _c || Object, typeof (_d = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _d || Object, typeof (_e = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _e || Object, typeof (_f = typeof car_check_service_1.CarCheckService !== "undefined" && car_check_service_1.CarCheckService) === "function" && _f || Object])
    ], CarCheckComponent);
    exports.CarCheckComponent = CarCheckComponent;
    var _a, _b, _c, _d, _e, _f;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=car-check.component.js.map

/***/ }),

/***/ "./src/app/car/car-status/car-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'car-check-wrapper car-status-wrapper'\" *ngIf=\"carCheckModel && carCheckModel.customDamageList && carCheckModel.customDamageList.length > 0\">\r\n    <car-check-status [cellId]=\"999\" [content]=\"content\" [data]=\"carCheckModel.customDamageList\"  [cellWrapperClass]=\"'car-check-status'\"></car-check-status>\r\n</div>\r\n<div [className]=\"'error-wrapper'\"  *ngIf=\"!carCheckModel || !carCheckModel.customDamageList || carCheckModel.customDamageList.length == 0\">\r\n    <span [className]=\"'error'\">{{ content ? content['no-car-status'] : '' }}</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/car/car-status/car-status.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/common/base-component.ts"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/services/car/car-check-service.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/shared-classes/request/car-data.request.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, base_component_1, map_state_service_1, content_service_1, navigation_service_1, car_check_service_1, home_service_1, car_data_request_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CarStatusComponent = (function (_super) {
        __extends(CarStatusComponent, _super);
        function CarStatusComponent(mapStateService, contentService, navigationService, carCheckService, homeService) {
            var _this = _super.call(this, contentService, 'car-check') || this;
            _this.carCheckService = carCheckService;
            mapStateService.changeMapState(false);
            homeService.getCar().then(function (homeResponse) {
                carCheckService.GetCarStatus(new car_data_request_1.CarDataRequest(homeResponse.data.carId)).then(function (response) {
                    if (response.isSuccessWithResult()) {
                        _this.carCheckModel = response.data;
                    }
                });
            });
            return _this;
        }
        return CarStatusComponent;
    }(base_component_1.BaseComponent));
    CarStatusComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/car/car-status/car-status.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _a || Object, typeof (_b = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _b || Object, typeof (_c = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _c || Object, typeof (_d = typeof car_check_service_1.CarCheckService !== "undefined" && car_check_service_1.CarCheckService) === "function" && _d || Object, typeof (_e = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _e || Object])
    ], CarStatusComponent);
    exports.CarStatusComponent = CarStatusComponent;
    var _a, _b, _c, _d, _e;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=car-status.component.js.map

/***/ }),

/***/ "./src/app/core/authentication.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./node_modules/rxjs/Rx.js"), __webpack_require__("./node_modules/rxjs/add/operator/map.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, http_service_1, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthenticationService = (function () {
        function AuthenticationService(httpService) {
            this.httpService = httpService;
            this.tokenStorageKeyName = 'nstCurrentUser';
            // set token if saved in local storage
            var currentUser = JSON.parse(localStorage.getItem(this.tokenStorageKeyName));
            this.token = currentUser && currentUser.token;
        }
        AuthenticationService.prototype.login = function (username, password) {
            var o = new rxjs_1.Observable();
            return o.map(function () { return true; });
            /*return this.httpService.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
                .map((response: Response) => {
                    // login successful if there's a jwt token in the response
                    let token = response.json() && response.json().token;
                    if (token) {
                        // set token property
                        this.token = token;
     
                        // store username and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem(this.tokenStorageKeyName, JSON.stringify({ username: username, token: token }));
     
                        // return true to indicate successful login
                        return true;
                    } else {
                        // return false to indicate failed login
                        return false;
                    }
                });*/
        };
        AuthenticationService.prototype.logout = function () {
            // clear token remove user from local storage to log user out
            this.token = null;
            localStorage.removeItem(this.tokenStorageKeyName);
        };
        return AuthenticationService;
    }());
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object])
    ], AuthenticationService);
    exports.AuthenticationService = AuthenticationService;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/core/authentication.service.ts"), __webpack_require__("./src/app/core/emap.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, http_service_1, authentication_service_1, emap_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CoreModule = CoreModule_1 = (function () {
        function CoreModule(parentModule) {
            if (parentModule) {
                throw new Error('CoreModule is already loaded. Import it in the AppModule only');
            }
        }
        CoreModule.forRoot = function () {
            return {
                ngModule: CoreModule_1,
                providers: [
                    http_service_1.HttpService,
                    authentication_service_1.AuthenticationService,
                    emap_service_1.EmapService /*,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: NoopInterceptor,
                        multi: true,
                    }*/
                ]
            };
        };
        return CoreModule;
    }());
    CoreModule = CoreModule_1 = __decorate([
        core_1.NgModule({}),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    exports.CoreModule = CoreModule;
    var CoreModule_1;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "./src/app/core/emap.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/stores/maps/MapsStorage.ts"), __webpack_require__("./src/app/shared-classes/common/custom-promise.ts"), __webpack_require__("./src/app/shared-classes/esri/LayerType.ts"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/stores/offlineStorage/OfflineStorage.ts"), __webpack_require__("./src/app/services/node/node.service.ts"), __webpack_require__("./src/app/app.config.ts"), __webpack_require__("./src/app/shared-classes/esri/Extent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, MapsStorage_1, custom_promise_1, LayerType_1, http_service_1, connection_service_1, OfflineStorage_1, node_service_1, app_config_1, Extent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmapService = (function () {
        function EmapService(mapsStorage, httpService, connectionService, store, nodeService, config) {
            this.httpService = httpService;
            this.connectionService = connectionService;
            this.store = store;
            this.nodeService = nodeService;
            this.config = config;
            this.mapsStorage = null;
            this.mapPromise = {};
            if (this.mapsStorage == undefined) {
                this.mapsStorage = mapsStorage;
            }
        }
        EmapService.prototype.getMapConfiguration = function (key) {
            var _this = this;
            if (this.mapConfiguration != null) {
                return new Promise(function (resolve, reject) {
                    resolve(_this.mapConfiguration);
                });
            }
            this.mapConfiguration = {
                backgrounds: [{
                        caption: 'רחובות ומבנים',
                        urlTemplate: 'https://map.govmap.gov.il/280218N2G6G8/${0}/${1}/${2}.png',
                        dpi: 96,
                        extent: { xmin: -368691.7703835408, ymin: 332268.22453644907, xmax: 776691.7703835408, ymax: 857731.7754635509, spatialReference: { wkid: 2039 } },
                        id: 'streets_buildings',
                        layerType: 2,
                        imageFormat: 'png32',
                        minScale: 3000000,
                        maxScale: 0,
                        offline: false,
                        origin: { "x": -5403700, "y": 7116700, "spatialReference": { "wkid": 2039 } },
                        tileHeight: 256,
                        tileWidth: 256,
                        visible: true,
                        lodIndex: 0
                    },
                    {
                        caption: 'תצלום אוויר',
                        urlTemplate: 'http://map.govmap.gov.il/031017O1R2T3/${0}/${1}/${2}.jpg',
                        dpi: 96,
                        extent: { xmin: -368691.7703835408, ymin: 332268.22453644907, xmax: 776691.7703835408, ymax: 857731.7754635509, spatialReference: { wkid: 2039 } },
                        id: 'ortho',
                        layerType: 2,
                        imageFormat: 'jpg',
                        minScale: 3000000,
                        maxScale: 0,
                        offline: false,
                        origin: { "x": -5403700, "y": 7116700, "spatialReference": { "wkid": 2039 } },
                        tileHeight: 256,
                        tileWidth: 256,
                        visible: true,
                        lodIndex: 0
                    },
                    {
                        caption: 'מפה לא מקוונת',
                        urlTemplate: 'file://ortho_offline/${0}/${1}/${2}.jpg',
                        dpi: 96,
                        extent: { xmin: -368691.7703835408, ymin: 332268.22453644907, xmax: 776691.7703835408, ymax: 857731.7754635509, spatialReference: { wkid: 2039 } },
                        id: 'ortho_offline',
                        layerType: 2,
                        imageFormat: 'jpeg',
                        minScale: 3000000,
                        maxScale: 0,
                        offline: true,
                        origin: { "x": -5403700, "y": 7116700, "spatialReference": { "wkid": 2039 } },
                        tileHeight: 256,
                        tileWidth: 256,
                        visible: true,
                        lodIndex: 1
                    }],
                backgroundToggle: ["streets_buildings", "ortho"],
                lods: [[{
                            "level": 0,
                            "resolution": 793.751587503175,
                            "scale": 3000000
                        },
                        {
                            "level": 1,
                            "resolution": 264.583862501058,
                            "scale": 1000000
                        },
                        {
                            "level": 2,
                            "resolution": 132.291931250529,
                            "scale": 500000
                        },
                        {
                            "level": 3,
                            "resolution": 66.1459656252646,
                            "scale": 250000
                        },
                        {
                            "level": 4,
                            "resolution": 26.4583862501058,
                            "scale": 100000
                        },
                        {
                            "level": 5,
                            "resolution": 13.2291931250529,
                            "scale": 50000
                        },
                        {
                            "level": 6,
                            "resolution": 6.61459656252646,
                            "scale": 25000
                        },
                        {
                            "level": 7,
                            "resolution": 2.64583862501058,
                            "scale": 10000
                        },
                        {
                            "level": 8,
                            "resolution": 1.32291931250529,
                            "scale": 5000
                        },
                        {
                            "level": 9,
                            "resolution": 0.661459656252646,
                            "scale": 2500
                        },
                        {
                            "level": 10,
                            "resolution": 0.330729828126323,
                            "scale": 1250
                        }], [{
                            "level": 0,
                            "resolution": 793.751587503175,
                            "scale": 3000000
                        },
                        {
                            "level": 1,
                            "resolution": 264.583862501058,
                            "scale": 1000000
                        },
                        {
                            "level": 2,
                            "resolution": 132.291931250529,
                            "scale": 500000
                        },
                        {
                            "level": 3,
                            "resolution": 66.1459656252646,
                            "scale": 250000
                        }]],
                options: {
                    autoResize: false,
                    displayGraphicsOnPan: true,
                    fadeOnZoom: true,
                    nav: false,
                    logo: false,
                    navigationMode: 'css-transforms',
                    force3DTransforms: true,
                    slider: false,
                    zoom: 0,
                    extent: { xmin: -368691.7703835408, ymin: 332268.22453644907, xmax: 776691.7703835408, ymax: 857731.7754635509, spatialReference: { wkid: 2039 } },
                    center: { "x": 204000, "y": 595000, "spatialReference": { "wkid": 2039 } }
                },
                layers: [{
                        caption: "תחנות אוטובוס",
                        layerName: "BUS_STOPS",
                        layerType: LayerType_1.LayerType.AGS_DYNAMIC,
                        minScale: 25001,
                        maxScale: 0,
                        visible: true,
                        resource: "additionaldata"
                    },
                    {
                        caption: "אנטנות סלולאריות",
                        layerName: "CELL_ACTIVE",
                        layerType: LayerType_1.LayerType.AGS_DYNAMIC,
                        minScale: 26001,
                        maxScale: 0,
                        visible: true,
                        resource: "additionaldata"
                    },
                    {
                        caption: "כבאיות",
                        layerName: "CARS",
                        layerType: LayerType_1.LayerType.GRAPHIC,
                        visible: true,
                        symbol: {
                            "angle": 0,
                            "xoffset": 0,
                            "yoffset": 0,
                            "type": "esriPMS",
                            "url": "images/layer_symbols/fire_truck.png",
                            "width": 32,
                            "height": 32
                        }
                    },
                    {
                        caption: "ניידות משטרה",
                        layerName: "POLICE_OPEN_EVENTS",
                        layerType: LayerType_1.LayerType.GRAPHIC,
                        visible: true,
                        symbol: {
                            "angle": 0,
                            "xoffset": 0,
                            "yoffset": 0,
                            "type": "esriPMS",
                            "url": "images/layer_symbols/police_car.png",
                            "width": 32,
                            "height": 32
                        }
                    }
                ],
                services: {
                    0: {
                        "additionaldata": {
                            opacity: 1,
                            imageFormat: "png32",
                            restUrl: "http://govmap/arcgis/rest/services/AdditionalData/MapServer"
                        }
                    }
                },
                proxy: {
                    proxyUrl: "https://ags.govmap.gov.il/proxy/proxy.ashx",
                    urlPrefix: "",
                    useProxy: true
                }
            };
            this.mapConfiguration.options.extent = new Extent_1.Extent({ xmin: -368691.7703835408, ymin: 332268.22453644907, xmax: 776691.7703835408, ymax: 857731.7754635509, spatialReference: { wkid: 2039 } });
            return new Promise(function (resolve, reject) {
                resolve(_this.mapConfiguration);
            });
        };
        EmapService.prototype.getMapServerConfiguration = function () {
            var _this = this;
            if (this.mapConfiguration != null) {
                return new Promise(function (resolve, reject) {
                    resolve(_this.mapConfiguration);
                });
            }
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Main/GetMapConfig/';
                _this.httpService.post(url, null).subscribe(function (response) {
                    _this.mapConfiguration = response;
                    _this.mapConfiguration.options.extent = new Extent_1.Extent({ xmin: -368691.7703835408, ymin: 332268.22453644907, xmax: 776691.7703835408, ymax: 857731.7754635509, spatialReference: { wkid: 2039 } });
                    resolve(_this.mapConfiguration);
                }, function (err) {
                    resolve(null);
                });
            });
        };
        EmapService.prototype.getMap = function (key) {
            if (!(key in this.mapPromise)) {
                this.mapPromise[key] = new custom_promise_1.CustomPromise();
            }
            return this.mapPromise[key];
        };
        EmapService.prototype.addMap = function (key, map) {
            var _this = this;
            if (this.mapPromise.hasOwnProperty(key)) {
                map.getMapPromise().then(function (map) {
                    _this.mapPromise[key].resolve(map);
                });
                return;
            }
            this.mapPromise[key] = map.getMapPromise();
        };
        EmapService.prototype.removeMap = function (key) {
            delete this.mapPromise[key];
        };
        return EmapService;
    }());
    EmapService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof MapsStorage_1.MapsStorage !== "undefined" && MapsStorage_1.MapsStorage) === "function" && _a || Object, typeof (_b = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _b || Object, typeof (_c = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _c || Object, typeof (_d = typeof OfflineStorage_1.OfflineStorage !== "undefined" && OfflineStorage_1.OfflineStorage) === "function" && _d || Object, typeof (_e = typeof node_service_1.NodeService !== "undefined" && node_service_1.NodeService) === "function" && _e || Object, typeof (_f = typeof app_config_1.AppConfig !== "undefined" && app_config_1.AppConfig) === "function" && _f || Object])
    ], EmapService);
    exports.EmapService = EmapService;
    var _a, _b, _c, _d, _e, _f;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=emap.service.js.map

/***/ }),

/***/ "./src/app/core/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js"), __webpack_require__("./node_modules/rxjs/Rx.js"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/app.config.ts"), __webpack_require__("./src/app/services/queue/queue.service.ts"), __webpack_require__("./src/app/shared-classes/offline/fire-truck-offline-action-types.ts"), __webpack_require__("./src/app/shared-classes/offline/fire-truck-offline-action.ts"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/services/general/log.service.ts"), __webpack_require__("./src/app/shared-classes/common/log-info.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts"), __webpack_require__("./src/app/shared-classes/common/log-types.ts"), __webpack_require__("./node_modules/rxjs/add/operator/finally.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, http_1, Rx_1, connection_service_1, app_config_1, queue_service_1, fire_truck_offline_action_types_1, fire_truck_offline_action_1, StorageResponse_1, alertify_service_1, log_service_1, log_info_1, ApplicationResponseStatus_1, log_types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpService = (function () {
        function HttpService(http, connectionService, queueService, config, alertifyService, logService) {
            this.http = http;
            this.connectionService = connectionService;
            this.queueService = queueService;
            this.config = config;
            this.alertifyService = alertifyService;
            this.logService = logService;
            this.baseWebApiSchema = config.getConfig('base_web_api_schema');
            this.baseWebApiDomain = config.getConfig('base_web_api_domain');
            this.baseWebApiProject = config.getConfig('base_web_api_project');
            this.baseWebApi = this.baseWebApiSchema + "://" + this.baseWebApiDomain + "/" + this.baseWebApiProject;
            this.$loadingStateEmitter = new core_1.EventEmitter();
        }
        HttpService.prototype.get = function (url) {
            return this.http.get(url, this.getRequestOptions());
        };
        HttpService.prototype.post = function (url, params, actionType) {
            if (actionType === void 0) { actionType = fire_truck_offline_action_types_1.FireTruckOfflineActionTypes.NONE; }
            if (this.connectionService.isOffline() && actionType != fire_truck_offline_action_types_1.FireTruckOfflineActionTypes.NONE) {
                this.queueService.addItem(new fire_truck_offline_action_1.FireTruckOfflineAction(actionType, params));
                return Rx_1.Observable.create(function (observer) {
                    return observer.next(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                });
            }
            else {
                return this.serverPost(url, params);
            }
        };
        HttpService.prototype.getRequestOptions = function () {
            var httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
            return { headers: httpHeaders };
        };
        HttpService.prototype.serverPost = function (url, params) {
            var _this = this;
            this.logService.addItem(new log_info_1.LogInfo("go to: " + url, "http", 'server', log_types_1.LogTypes.debugger));
            this.$loadingStateEmitter.emit(true);
            return this.http.post(url, params, this.getRequestOptions())
                .map(function (response) {
                _this.logService.addItem(new log_info_1.LogInfo("return from: " + url, "http", 'server', log_types_1.LogTypes.debugger));
                if (response.hasOwnProperty("resultStatus") && response["resultStatus"] != ApplicationResponseStatus_1.ApplicationResponseStatus.Success) {
                    var message = "Exception occured in serverPost - response faild. Reason: " + response["errorMessage"];
                    _this.logService.addItem(new log_info_1.LogInfo(message, url, 'server'));
                }
                return response;
            }).catch(function (error) {
                var message = "Exception occured in serverPost - probably no connection";
                var source = "HttpService";
                if (error && error.message) {
                    message = error.message;
                    if (error.error && error.error.target && error.error.target.__zone_symbol__xhrURL) {
                        source = error.error.target.__zone_symbol__xhrURL;
                    }
                }
                _this.logService.addItem(new log_info_1.LogInfo(message, source, 'connection'));
                return Rx_1.Observable.throw(error.json().error || 'error occured in serverPost');
            }).finally(function () {
                _this.logService.addItem(new log_info_1.LogInfo("finally from: " + url, "http", 'server', log_types_1.LogTypes.debugger));
                _this.$loadingStateEmitter.emit(false);
            });
        };
        return HttpService;
    }());
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object, typeof (_b = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _b || Object, typeof (_c = typeof queue_service_1.QueueService !== "undefined" && queue_service_1.QueueService) === "function" && _c || Object, typeof (_d = typeof app_config_1.AppConfig !== "undefined" && app_config_1.AppConfig) === "function" && _d || Object, typeof (_e = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _e || Object, typeof (_f = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _f || Object])
    ], HttpService);
    exports.HttpService = HttpService;
    var _a, _b, _c, _d, _e, _f;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "./src/app/employees/employee-set/employee-set.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'employees-set-wrapper'\" *ngIf=\"employeeSet && employeeSet.employees.length > 0\">\r\n    <div [className]=\"'image-wrapper'\">\r\n        <span [className]=\"'image-sprite popup-icn-arrows'\" (click)=\"employeesClicked()\"></span>             \r\n    </div>\r\n    <div [className]=\"'seperator-set'\"></div>\r\n    <div [className]=\"'employees-set'\">\r\n        <div [className]=\"'team-name'\">{{ employeeSet ? employeeSet.carInfo.carCallCode : ''}}</div>\r\n        <div [className]=\"'employees-container'\">\r\n            <employee \r\n                [item]=\"employee\" \r\n                *ngFor=\"let employee of employeeSet.employees; let emloyeeIndex = index\"\r\n                (onClick)=\"addEmployee(employee, emloyeeIndex)\">  \r\n            </employee> \r\n        </div>       \r\n    </div>\r\n</div>  "

/***/ }),

/***/ "./src/app/employees/employee-set/employee-set.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeeSetComponent = (function () {
        function EmployeeSetComponent() {
            this.onClick = new core_1.EventEmitter();
            this.onEmployeeClick = new core_1.EventEmitter();
        }
        EmployeeSetComponent.prototype.employeesClicked = function () {
            this.onClick.emit({ employees: this.employeeSet.employees, index: this.index });
        };
        EmployeeSetComponent.prototype.addEmployee = function (employee, employeeIndex) {
            this.onEmployeeClick.emit({ employee: employee, index: this.index, emloyeeIndex: employeeIndex });
        };
        EmployeeSetComponent.prototype.ngOnInit = function () { };
        EmployeeSetComponent.prototype.ngOnDestroy = function () { };
        return EmployeeSetComponent;
    }());
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
    ], EmployeeSetComponent.prototype, "onClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
    ], EmployeeSetComponent.prototype, "onEmployeeClick", void 0);
    EmployeeSetComponent = __decorate([
        core_1.Component({
            selector: 'employee-set',
            template: __webpack_require__("./src/app/employees/employee-set/employee-set.component.html"),
            inputs: ['employeeSet', 'index']
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeSetComponent);
    exports.EmployeeSetComponent = EmployeeSetComponent;
    var _a, _b;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=employee-set.component.js.map

/***/ }),

/***/ "./src/app/employees/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"employeeType == 0\" class=\"employee-wrapper\" [ngClass]=\"{'last': isLastElement }\" (click)=\"employeeClicked()\">\r\n    <span [className]=\"'image-sprite fireman-small'\"></span>\r\n    <span [className]=\"'employee-name'\">{{ item ? (item.employeeName  | cutText : 12) : '' }}</span>\r\n</div>  \r\n<div *ngIf=\"employeeType == 1\" [className]=\"'team-employee'\" (click)=\"employeeClicked()\">\r\n    <span [className]=\"'image-sprite fireman-big'\"></span>\r\n    <span [className]=\"'team-employee-name'\">{{ item.employeeName | cutText : 12 }}</span>    \r\n</div>"

/***/ }),

/***/ "./src/app/employees/employee/employee.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/employees/employee-view-type.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, employee_view_type_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeeComponent = (function () {
        function EmployeeComponent() {
            this.onClick = new core_1.EventEmitter();
            this.employeeType = employee_view_type_1.EmployeeViewType.small;
        }
        EmployeeComponent.prototype.employeeClicked = function () {
            this.onClick.emit({ employee: this.item, index: this.index });
        };
        EmployeeComponent.prototype.ngOnInit = function () {
        };
        EmployeeComponent.prototype.ngOnDestroy = function () {
        };
        return EmployeeComponent;
    }());
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
    ], EmployeeComponent.prototype, "onClick", void 0);
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'employee',
            template: __webpack_require__("./src/app/employees/employee/employee.component.html"),
            inputs: ['item', 'isLastElement', 'index', 'employeeType']
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeComponent);
    exports.EmployeeComponent = EmployeeComponent;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=employee.component.js.map

/***/ }),

/***/ "./src/app/employees/employees-team/employees-team.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'employees-team-wrapper'\">\r\n    <div [className]=\"'right-container'\">\r\n        <div [className]=\"'title'\">{{ content ? content.team + ' ' + teamName  : '' }}</div>\r\n        <div [className]=\"'seperator'\"></div>\r\n        <div [className]=\"'title btn'\" (click)=\"deleteAllTeam()\">{{ content ? content.deleteAllTeamButton  : '' }}</div>\r\n        <div [className]=\"'seperator'\"></div>\r\n        <div [className]=\"'team-wrapper'\">\r\n            <employee \r\n                [item]=\"employee\" \r\n                (onClick)=\"removeEmployee($event)\"         \r\n                *ngFor=\"let employee of currentEventTeam; let i = index\"\r\n                [index]=\"i\"\r\n                [employeeType]=\"employeeView\">\r\n            </employee>\r\n\r\n            <div [className]=\"'error-wrapper'\"  *ngIf=\"!isValid\">\r\n                <span [className]=\"'error'\">{{ content ? content.emptyEmployeesToSave : '' }}</span>\r\n            </div>\r\n        </div>       \r\n    </div> \r\n    <div [className]=\"'left-container'\">\r\n        <div [className]=\"'title'\">{{ content ? content.addTeamEmployee  : '' }}</div>\r\n        <div [className]=\"'seperator'\"></div>\r\n        <div [className]=\"'rows-wrapper'\">            \r\n            <div [className]=\"'employee-sets-wrapper'\"\r\n                *ngIf=\"avalibleEmployeesModel && avalibleEmployeesModel.availableTeams && avalibleEmployeesModel.availableTeams.length > 0\">\r\n                <employee-set \r\n                    [employeeSet]=\"team\" \r\n                    (onClick)=\"addEmployees($event)\"\r\n                    (onEmployeeClick)=\"addQuickEmployee($event)\"\r\n                    *ngFor=\"let team of avalibleEmployeesModel.availableTeams; let i = index\"\r\n                    [index]=\"i\">                    \r\n                </employee-set>\r\n            </div>\r\n            <div [className]=\"'avalible-employees'\"\r\n                 *ngIf=\"avalibleEmployeesModel && avalibleEmployeesModel.availableEmployees && avalibleEmployeesModel.availableEmployees.length > 0\">\r\n                <employee \r\n                    [item]=\"employee\" \r\n                    (onClick)=\"addEmployee($event)\"         \r\n                    *ngFor=\"let employee of avalibleEmployeesModel.availableEmployees; let i = index\"\r\n                    [isLastElement]=\"(i+1)%4 === 0\" \r\n                    [index]=\"i\">\r\n                </employee>\r\n            </div>\r\n            <div [className]=\"'error-wrapper'\"  *ngIf=\"isLoaded && avalibleEmployeesModel.availableTeams.length == 0 && avalibleEmployeesModel.availableEmployees.length == 0\">\r\n                <span [className]=\"'error'\">{{ content ? content['employeeToAddError'] : '' }}</span>\r\n            </div>\r\n        </div>\r\n    </div> \r\n</div>  "

/***/ }),

/***/ "./src/app/employees/employees-team/employees-team.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/navigation/mapping-navigation-data.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/shared-classes/employees/avalible-employees-model.ts"), __webpack_require__("./src/app/services/employees/employees.service.ts"), __webpack_require__("./src/app/shared-classes/request/employees-request.ts"), __webpack_require__("./src/app/shared-classes/employees/employee-view-type.ts"), __webpack_require__("./src/app/services/general/device.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/shared-classes/common/base-component.ts"), __webpack_require__("./src/app/shared-classes/request/save-employees-request.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, mapping_navigation_data_service_1, content_service_1, navigation_service_1, home_service_1, avalible_employees_model_1, employees_service_1, employees_request_1, employee_view_type_1, device_service_1, alertify_service_1, base_component_1, save_employees_request_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeesTeamComponent = (function (_super) {
        __extends(EmployeesTeamComponent, _super);
        function EmployeesTeamComponent(mappingNavigationDataService, contentService, navigationService, homeService, employeesService, deviceService, alertifyService) {
            var _this = _super.call(this, contentService, 'employee-team') || this;
            _this.mappingNavigationDataService = mappingNavigationDataService;
            _this.contentService = contentService;
            _this.navigationService = navigationService;
            _this.homeService = homeService;
            _this.employeesService = employeesService;
            _this.deviceService = deviceService;
            _this.alertifyService = alertifyService;
            _this.teamName = '';
            _this.isLoaded = false;
            _this.isValid = true;
            _this.teamEmployeeSaveEmitter = _this.mappingNavigationDataService.$teamEmployeeSaveEmitter.subscribe(function (result) {
                if (_this.currentEventTeam == null || _this.currentEventTeam.length == 0) {
                    _this.isValid = false;
                }
                else {
                    var request = new save_employees_request_1.SaveEmployeesRequest();
                    request.carId = _this.carId;
                    request.employees = _this.currentEventTeam;
                    _this.employeesService.updateCurrentEventTeam(request).then(function (res) {
                        if (res.isSuccess()) {
                            var data = _this.navigationService.getNavigationData();
                            if (data && data.onCloseCallback) {
                                data.onCloseCallback();
                            }
                            else {
                                _this.navigationService.goBack();
                            }
                        }
                    });
                }
            });
            _this.employeeView = employee_view_type_1.EmployeeViewType.big;
            _this.homeService.getCar().then(function (res) {
                if (res.isSuccessWithResult()) {
                    _this.teamName = res.data.carCallCode;
                    _this.carId = res.data.carId;
                }
            });
            _this.setAvalibleEmployees(_this.deviceService.getDeviceId());
            _this.setTeamEmployees();
            _this.currentEventTeam = Array();
            _this.avalibleEmployeesModel = new avalible_employees_model_1.AvalibleEmployeesModel();
            return _this;
        }
        EmployeesTeamComponent.prototype.deleteAllTeam = function () {
            var tempArray = new Array();
            for (var i = 0; i < this.currentEventTeam.length; i++) {
                tempArray.push(this.currentEventTeam[i]);
            }
            for (var i = 0; i < tempArray.length; i++) {
                this.removeEmployee({ employee: tempArray[i], index: i });
            }
            this.currentEventTeam = Array();
        };
        EmployeesTeamComponent.prototype.setTeamEmployees = function () {
            var _this = this;
            this.homeService.getTeamEmployees().then(function (response) {
                if (response.isSuccessWithResult()) {
                    for (var i = 0; i < response.data.length; i++) {
                        _this.currentEventTeam.push(response.data[i]);
                        _this.currentEventTeam[i].teamCarId = null;
                    }
                }
            });
        };
        EmployeesTeamComponent.prototype.setAvalibleEmployees = function (deviceId) {
            var _this = this;
            var request = new employees_request_1.EmployeesRequest(deviceId);
            this.employeesService.getItem(request).then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.avalibleEmployeesModel.availableEmployees = response.data.availableEmployees;
                    _this.avalibleEmployeesModel.availableTeams = response.data.availableTeams;
                    _this.isLoaded = true;
                }
            });
        };
        EmployeesTeamComponent.prototype.addEmployees = function (emp) {
            this.isValid = true;
            this.currentEventTeam = this.currentEventTeam.concat(emp.employees);
            this.avalibleEmployeesModel.availableTeams[emp.index].employees = [];
        };
        EmployeesTeamComponent.prototype.addEmployee = function (emp) {
            this.isValid = true;
            var employee = emp.employee;
            var index = emp.index;
            this.currentEventTeam.unshift(employee);
            this.avalibleEmployeesModel.availableEmployees.splice(index, 1);
        };
        EmployeesTeamComponent.prototype.removeEmployee = function (emp) {
            var employee = emp.employee;
            var index = emp.index;
            if (employee.teamCarId) {
                for (var i = 0; i < this.avalibleEmployeesModel.availableTeams.length; i++) {
                    if (employee.teamCarId == this.avalibleEmployeesModel.availableTeams[i].carInfo.carId) {
                        this.avalibleEmployeesModel.availableTeams[i].employees.push(employee);
                    }
                }
            }
            else {
                this.avalibleEmployeesModel.availableEmployees.push(employee);
            }
            this.currentEventTeam.splice(index, 1);
        };
        EmployeesTeamComponent.prototype.addQuickEmployee = function (emp) {
            this.isValid = true;
            var employee = emp.employee;
            var index = emp.index;
            var emloyeeIndex = emp.emloyeeIndex;
            this.currentEventTeam.unshift(employee);
            this.avalibleEmployeesModel.availableTeams[index].employees.splice(emloyeeIndex, 1);
        };
        EmployeesTeamComponent.prototype.ngOnDestroy = function () {
            this.teamEmployeeSaveEmitter.unsubscribe();
        };
        return EmployeesTeamComponent;
    }(base_component_1.BaseComponent));
    EmployeesTeamComponent = __decorate([
        core_1.Component({
            selector: 'employees-team',
            template: __webpack_require__("./src/app/employees/employees-team/employees-team.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof mapping_navigation_data_service_1.MappingNavigationDataService !== "undefined" && mapping_navigation_data_service_1.MappingNavigationDataService) === "function" && _a || Object, typeof (_b = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _b || Object, typeof (_c = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _c || Object, typeof (_d = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _d || Object, typeof (_e = typeof employees_service_1.EmployeesService !== "undefined" && employees_service_1.EmployeesService) === "function" && _e || Object, typeof (_f = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" && _f || Object, typeof (_g = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _g || Object])
    ], EmployeesTeamComponent);
    exports.EmployeesTeamComponent = EmployeesTeamComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=employees-team.component.js.map

/***/ }),

/***/ "./src/app/events/current-status/current-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'current-status-wrapper'\">\r\n   <div [className]=\"'status-wrapper'\">\r\n        <div [className]=\"'cell-wrapper'\">\r\n            <div [className]=\"'header'\">\r\n                <span [className]=\"'header-text'\">{{ content ? content['teams-at-event'] : '' }}</span>\r\n                <span class=\"image-sprite\" [ngClass]=\"{ 'tab-icn-dd-up': isTeamsCellShow, 'tab-icn-dd': !isTeamsCellShow }\" \r\n                (click)=\"isTeamsCellShow=!isTeamsCellShow; resizeMap()\"></span>\r\n            </div>  \r\n            <div *ngIf=\"isTeamsCellShow\">\r\n                <div [className]=\"'teams table'\">\r\n                    <div>\r\n                        <div [className]=\"'comander-wrapper'\" *ngIf=\"currentStatus != null && currentStatus.generalInfo != null\">\r\n                            <span [className]=\"'image-sprite fireman-small'\"></span>\r\n                            <span [className]=\"'comander-name'\">{{  currentStatus && currentStatus.generalInfo && currentStatus.generalInfo.CommanderName ? (currentStatus.generalInfo.CommanderName | cutText : 15) : '' }}</span>\r\n                            <span [className]=\"'comander-role'\">{{  currentStatus && currentStatus.generalInfo && currentStatus.generalInfo.commanderEmployeeTypeDesc ? (currentStatus.generalInfo.commanderEmployeeTypeDesc | cutText : 15) : '' }}</span>                           \r\n                        </div>\r\n                        <div [className]=\"'summery-wrapper'\">\r\n                            <span *ngIf=\"currentStatus.carsSummary == 1\">{{ content ? content['car-summery'] : '' }} {{ currentStatus.carsSummary }},</span>\r\n                            <span *ngIf=\"currentStatus.carsSummary > 1\">{{ currentStatus.carsSummary }} {{ content ? content['cars-summery'] : '' }},</span>\r\n                            <span *ngIf=\"currentStatus.employeesSummary > 0\">{{ currentStatus.employeesSummary }} {{ content && currentStatus.employeesSummary > 1 ? content['employees-summery'] : content['employee-summery']  }}</span>\r\n                        </div>\r\n                        <div [className]=\"'statuses-wrapper at-event'\" \r\n                            *ngIf=\"currentStatus.atEvent != null && currentStatus.atEvent.length > 0\">\r\n                            <div [className]=\"'statuses-label'\">\r\n                                {{ content ? content['at-event'] : '' }}\r\n                            </div>\r\n                            <div [className]=\"'statuses-list'\">\r\n                                <div *ngFor=\"let status of currentStatus.atEvent\">\r\n                                    <span [className]=\"'statuses-cell type-text'\">{{ status.typeName }}</span>\r\n                                    <span [className]=\"'statuses-cell'\">\r\n                                        <span [className]=\"'image-sprite vector-smart-object'\"></span>\r\n                                        <span [className]=\"'count'\">{{ status.typeCount }}</span>\r\n                                    </span>\r\n                                    <span [className]=\"'statuses-cell borded'\">\r\n                                        <span [className]=\"'image-sprite layer-616'\"></span>\r\n                                        <span [className]=\"'count'\">{{ status.employeesCounter }}</span>\r\n                                    </span>\r\n                                    <span class=\"image-sprite\" (click)=\"status.isOpen = !status.isOpen\"\r\n                                        [ngClass]=\"{ 'tab-icn-dd': status.isOpen, 'tab-icn-dd-up': !status.isOpen }\">\r\n                                    </span>\r\n                                    <div *ngIf=\"status.isOpen\">\r\n                                        <div *ngFor=\"let car of status.carTeams\" [className]=\"'status-detail'\">\r\n                                            <div [className]=\"'car-name-wrapper'\">\r\n                                                <span [className]=\"'car-name'\">{{ car.carInfo.carCallCode }}</span>\r\n                                            </div>      \r\n                                            <div [className]=\"'employee-container'\">\r\n                                                <span *ngFor=\"let employee of car.employees\" [className]=\"'holder'\">\r\n                                                    <span [className]=\"'employee-name'\">{{ employee.employeeName }}</span>\r\n                                                    <span [className]=\"'employee-role'\">{{ employee.employeeRoleDesc }}</span>\r\n                                                </span>\r\n                                            </div>                                                                        \r\n                                        </div>       \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div [className]=\"'statuses-wrapper to-event'\" \r\n                            *ngIf=\"currentStatus.toEvent != null && currentStatus.toEvent.length > 0\">\r\n                            <div [className]=\"'statuses-label'\">\r\n                              {{ content ? content['to-event'] : '' }}\r\n                            </div>\r\n                            <div [className]=\"'statuses-list'\">\r\n                                <div *ngFor=\"let status of currentStatus.toEvent\">\r\n                                    <div>\r\n                                        <span [className]=\"'statuses-cell type-text'\">{{ status.typeName }}</span>\r\n                                        <span [className]=\"'statuses-cell'\">\r\n                                            <span [className]=\"'image-sprite vector-smart-object'\"></span>\r\n                                            <span [className]=\"'count'\">{{ status.typeCount }}</span>\r\n                                        </span>\r\n                                        <span [className]=\"'statuses-cell borded'\">\r\n                                            <span [className]=\"'image-sprite layer-616'\"></span>\r\n                                            <span [className]=\"'count'\">{{ status.employeesCounter }}</span>  \r\n                                        </span>\r\n                                        <span class=\"image-sprite\" (click)=\"status.isOpen = !status.isOpen\"\r\n                                            [ngClass]=\"{ 'tab-icn-dd': status.isOpen, 'tab-icn-dd-up': !status.isOpen }\">\r\n                                        </span>\r\n                                    </div>\r\n                                    <div *ngIf=\"status.isOpen\">\r\n                                        <div *ngFor=\"let car of status.carTeams\" [className]=\"'status-detail'\">\r\n                                            <div [className]=\"'car-name-wrapper'\">\r\n                                                <span [className]=\"'car-name'\">{{ car.carInfo.carCallCode }}</span>\r\n                                            </div>      \r\n                                            <div [className]=\"'employee-container'\">\r\n                                                <span *ngFor=\"let employee of car.employees\" [className]=\"'holder'\">\r\n                                                    <span [className]=\"'employee-name'\">{{ employee.employeeName }}</span>\r\n                                                    <span [className]=\"'employee-role'\">{{ employee.employeeRoleDesc }}</span>\r\n                                                </span>\r\n                                            </div>                                                                        \r\n                                        </div>                                       \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div [className]=\"'error-wrapper'\"  *ngIf=\"(currentStatus.atEvent == null || currentStatus.atEvent.length == 0) && (currentStatus.toEvent == null || currentStatus.toEvent.length == 0)\">\r\n                        <span [className]=\"'error'\">{{ content ? content['no-teams'] : '' }}</span>\r\n                    </div>\r\n                </div>\r\n            </div>  \r\n        </div>\r\n        <div [className]=\"'reports cell-wrapper'\">\r\n            <div [className]=\"'header'\">\r\n                <span [className]=\"'header-anchor'\" *ngIf=\"isLoadAllLogsShow\" (click)=\"loadAllLogs()\">{{ content ? content['load-all'] : '' }}</span>    \r\n                <span [className]=\"'header-text'\">{{ content ? content['reports'] : '' }}</span>\r\n                <span class=\"image-sprite\" [ngClass]=\"{ 'tab-icn-dd-up': isReportsCellShow, 'tab-icn-dd': !isReportsCellShow }\" \r\n                (click)=\"isReportsCellShow = !isReportsCellShow; resizeMap()\"></span>\r\n            </div>  \r\n            <div *ngIf=\"isReportsCellShow\">\r\n                <div [className]=\"'table'\">\r\n                    <div>\r\n                        <div [className]=\"'counts-row'\">\r\n                            <div [className]=\"'report-count'\">\r\n                                <span [className]=\"'count-text'\">{{ content ? content['reports-number'] : '' }}</span>\r\n                                <span [className]=\"'count-value report-number'\">{{ currentStatus ? currentStatus.log.totalLogReports : 0 }}</span>        \r\n                            </div>\r\n                            <div [className]=\"'report-count'\">\r\n                                <span [className]=\"'count-text'\">{{ content ? content['assumes-number'] : '' }}</span>\r\n                                <span [className]=\"'count-value assumes-number'\">{{ currentStatus ? currentStatus.log.totalLogReports_Assessments : 0 }}</span>        \r\n                            </div>\r\n                        </div>\r\n                        <div [className]=\"'logs-wrapper'\" \r\n                            *ngIf=\"currentStatus != null && currentStatus.log && currentStatus.log.latestLogs && currentStatus.log.latestLogs.length > 0\">\r\n                            <div *ngFor=\"let log of currentStatus.log.latestLogs; let last=last\" class=\"logs-row\" [ngClass]=\"{ 'last': last }\">\r\n                                <span class=\"image-sprite\" [ngClass]=\"{ 'icn-car-black' : log.isCarReport, 'icn-fireman-black' : !log.isCarReport }\"></span>\r\n                                <div class=\"log\" [ngClass]=\"{ 'middle' : log.reportDesc == null || log.reportDesc == '' }\">\r\n                                    <div [className]=\"'log-reporter'\">\r\n                                        <span >{{ log.reporterName }}</span>\r\n                                        <span>({{ log.reportTypeDesc }})</span>\r\n                                    </div>\r\n                                    <span [className]=\"'log-desc'\">{{ log.reportDesc }}</span>\r\n                                </div>\r\n                                <span [className]=\"'log-time'\">{{ log.reportTime  | dateHours }}</span>                                \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div [className]=\"'error-wrapper'\"  *ngIf=\"currentStatus == null || !currentStatus.log || !currentStatus.log.latestLogs || currentStatus.log.latestLogs.length == 0\">\r\n                        <span [className]=\"'error'\">{{ content ? content['no-reports'] : '' }}</span>\r\n                    </div>\r\n                </div>\r\n            </div>  \r\n        </div>\r\n        <div [className]=\"'areas cell-wrapper'\">\r\n            <div [className]=\"'header'\">\r\n                <span [className]=\"'header-text'\">{{ content ? content['areas'] : '' }}</span>\r\n                <span class=\"image-sprite\" [ngClass]=\"{ 'tab-icn-dd-up': isAreasCellShow, 'tab-icn-dd': !isAreasCellShow }\" \r\n                (click)=\"isAreasCellShow = !isAreasCellShow; resizeMap()\"></span>\r\n            </div>  \r\n            <div *ngIf=\"isAreasCellShow\">\r\n                <div [className]=\"'area table'\">\r\n                    <div>\r\n                        <div [className]=\"'areas-list'\" *ngIf=\"currentStatus.areas != null && currentStatus.areas.length > 0\">\r\n                            <div *ngFor=\"let area of currentStatus.areas; let last=last\" class=\"area-row\" [ngClass]=\"{ 'last': last }\">\r\n                                <div [className]=\"'area'\">\r\n                                    <span class=\"area-cell area-name\">{{ area.areaName }}</span>\r\n                                    <span class=\"area-cell area-commander\">{{ area.areaCommanderName }}</span>\r\n                                    <span class=\"area-cell area-freq\">{{ area.areaFreq }}</span>\r\n                                    <div class=\"last-cell\">\r\n                                        <span [className]=\"'image-sprite vector-smart-object'\"></span>\r\n                                        <span [className]=\"'count'\">{{ area.carTeams.length }}</span>\r\n                                        <span *ngIf=\"area.carTeams.length > 1\" class=\"image-sprite\" (click)=\"area.isOpen = !area.isOpen\"\r\n                                            [ngClass]=\"{ 'tab-icn-dd': area.isOpen, 'tab-icn-dd-up': !area.isOpen }\"></span>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"area.isOpen\">\r\n                                    <div *ngFor=\"let car of area.carTeams\" [className]=\"'area-detail'\">\r\n                                        <div [className]=\"'car-name-wrapper'\">\r\n                                            <span [className]=\"'car-name'\">{{ car.carInfo.carCallCode }}</span>\r\n                                        </div>      \r\n                                        <div [className]=\"'employee-container'\">\r\n                                            <span *ngFor=\"let employee of car.employees\">\r\n                                                <span [className]=\"'employee-name'\">{{ employee.employeeName }}</span>\r\n                                                <span [className]=\"'employee-role'\">{{ employee.employeeRoleDesc }}</span>\r\n                                            </span>\r\n                                        </div>                                                                        \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div [className]=\"'error-wrapper'\"  *ngIf=\"currentStatus.areas == null || currentStatus.areas.length == 0\">\r\n                            <span [className]=\"'error'\">{{ content ? content['no-areas'] : '' }}</span>\r\n                        </div>\r\n                    </div>                   \r\n                </div>\r\n            </div>  \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"map-wrapper\" [ngStyle]=\"{ 'width': mapWidth, 'height': mapHeight }\">\r\n        <emap [mapID]=\"'statusMap'\" [mapWidth]=\"mapWidth\" [mapHeight]=\"mapHeight\" [isHideButtons]=\"isHideMapButtons\" ></emap>\r\n    </div>  \r\n</div> "

/***/ }),

/***/ "./src/app/events/current-status/current-status.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/event/current-event-details.service.ts"), __webpack_require__("./src/app/shared-classes/common/menu-types.ts"), __webpack_require__("./src/app/shared-classes/common/detailsbar-types.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/core/emap.service.ts"), __webpack_require__("./src/app/services/general/projection.service.ts"), __webpack_require__("./node_modules/timers-browserify/main.js"), __webpack_require__("./src/app/services/event/event-details.service.ts"), __webpack_require__("./src/app/shared-classes/common/base-component.ts"), __webpack_require__("./src/app/shared-classes/request/event-request.ts"), __webpack_require__("./src/app/services/mapState/map-state.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, current_event_details_service_1, menu_types_1, detailsbar_types_1, navigation_service_1, content_service_1, emap_service_1, projection_service_1, timers_1, event_details_service_1, base_component_1, event_request_1, map_state_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CurrentStatusComponent = (function (_super) {
        __extends(CurrentStatusComponent, _super);
        function CurrentStatusComponent(currentEventDetailsService, eventDetailsService, navigationService, contentService, emapService, projService, mapStateService) {
            var _this = _super.call(this, contentService, 'current-status') || this;
            _this.currentEventDetailsService = currentEventDetailsService;
            _this.eventDetailsService = eventDetailsService;
            _this.emapService = emapService;
            _this.projService = projService;
            _this.menuType = menu_types_1.menuTypes.nomenu;
            _this.detailsbarType = detailsbar_types_1.detailsbarTypes.minimizeEvent;
            _this.isTeamsCellShow = true;
            _this.isReportsCellShow = true;
            _this.isAreasCellShow = true;
            _this.mapWidth = "1443px";
            _this.mapHeight = "240px";
            _this.isHideMapButtons = true;
            _this.isLoadAllLogsShow = true;
            mapStateService.changeMapState(false);
            var data = navigationService.getNavigationData();
            if (_this.currentEventDetailsService.isCurrentEventById(data.eventId)) {
                _this.currentStatus = currentEventDetailsService.getCurrentStatus();
            }
            else {
                _this.currentStatus = eventDetailsService.getCurrentStatus();
            }
            _this.eventUpdated = eventDetailsService.$eventUpdatedEmitter.subscribe(function (eventInfo) {
                _this.updateStatus(eventDetailsService.getCurrentStatus());
            });
            _this.currentEventUpdated = _this.currentEventDetailsService.$currentEventUpdatedEmitter.subscribe(function (eventInfo) {
                _this.updateStatus(currentEventDetailsService.getCurrentStatus());
            });
            _this.currentStatusUpdated = _this.currentEventDetailsService.$currentStatusUpdatedEmitter.subscribe(function (eventInfo) {
                _this.updateStatus(currentEventDetailsService.getCurrentStatus());
            });
            _this.currentEventAdded = _this.currentEventDetailsService.$currentEventAddedEmitter.subscribe(function (eventInfo) {
                _this.updateStatus(currentEventDetailsService.getCurrentStatus());
            });
            return _this;
        }
        CurrentStatusComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.currentStatus && this.currentStatus.generalInfo && this.currentStatus.generalInfo.lat && this.currentStatus.generalInfo.lon) {
                this.emapService.getMap("statusMap").then(function (map) {
                    var coords = _this.projService.transformWGS1984ToITM(_this.currentStatus.generalInfo.lat, _this.currentStatus.generalInfo.lon);
                    map.setCenter({ x: coords.x, y: coords.y, level: map.getNumberOfLevels() - 1 });
                });
            }
        };
        CurrentStatusComponent.prototype.ngOnDestroy = function () {
            this.eventUpdated.unsubscribe();
            this.currentEventUpdated.unsubscribe();
            this.currentEventAdded.unsubscribe();
            this.currentStatusUpdated.unsubscribe();
        };
        CurrentStatusComponent.prototype.resizeMap = function () {
            var upperTableHeight = !this.isTeamsCellShow && !this.isReportsCellShow ? 240 : 0;
            var lowerTableHeight = !this.isAreasCellShow ? 90 : 0;
            this.mapHeight = (240 + upperTableHeight + lowerTableHeight) + "px";
            this.emapService.getMap("statusMap").then(function (map) {
                timers_1.setTimeout(function () {
                    map.resize(true);
                    map.reposition();
                }, 0);
            });
        };
        CurrentStatusComponent.prototype.loadAllLogs = function () {
            var _this = this;
            this.eventDetailsService.getAllEventLogs(new event_request_1.EventRequest(this.currentStatus.generalInfo.eventId)).then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.currentStatus.log = response.data;
                    _this.isLoadAllLogsShow = false;
                }
            });
        };
        CurrentStatusComponent.prototype.updateStatus = function (currentStatus) {
            this.currentStatus.areas = currentStatus.areas;
            this.currentStatus.atEvent = currentStatus.atEvent;
            this.currentStatus.generalInfo = currentStatus.generalInfo;
            this.currentStatus.log = currentStatus.log;
            this.currentStatus.toEvent = currentStatus.toEvent;
            this.currentStatus.carsSummary = currentStatus.carsSummary;
            this.currentStatus.employeesSummary = currentStatus.employeesSummary;
        };
        return CurrentStatusComponent;
    }(base_component_1.BaseComponent));
    CurrentStatusComponent = __decorate([
        core_1.Component({
            selector: 'current-status',
            template: __webpack_require__("./src/app/events/current-status/current-status.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof current_event_details_service_1.CurrentEventDetailsService !== "undefined" && current_event_details_service_1.CurrentEventDetailsService) === "function" && _a || Object, typeof (_b = typeof event_details_service_1.EventDetailsService !== "undefined" && event_details_service_1.EventDetailsService) === "function" && _b || Object, typeof (_c = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _c || Object, typeof (_d = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _d || Object, typeof (_e = typeof emap_service_1.EmapService !== "undefined" && emap_service_1.EmapService) === "function" && _e || Object, typeof (_f = typeof projection_service_1.ProjectionService !== "undefined" && projection_service_1.ProjectionService) === "function" && _f || Object, typeof (_g = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _g || Object])
    ], CurrentStatusComponent);
    exports.CurrentStatusComponent = CurrentStatusComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=current-status.component.js.map

/***/ }),

/***/ "./src/app/events/event-details/event-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'event-details-wrapper'\">\r\n    <event-general-info *ngIf=\"eventInfo\"\r\n    [eventGeneralInfo]=\"eventInfo.generalInfo\"></event-general-info>\r\n    <div [className]=\"'buttons-wrapper'\">            \r\n        <div [className]=\"'button'\" \r\n            (click)=\"home()\">\r\n            <span>{{ content ? content.home : '' }}</span>\r\n        </div>\r\n        <div [className]=\"'button'\" \r\n            (click)=\"currentStatus()\"\r\n            *ngIf=\"eventDetailsType != 2 && eventId != -1\">\r\n            <span>{{ content ? content.currentStatus : '' }}</span>\r\n        </div>      \r\n        <div [className]=\"'button'\" \r\n            (click)=\"preventionFiles()\"\r\n            *ngIf=\"eventDetailsType != 2 && eventId != -1\">\r\n            <span>{{ content ? content.preventionFiles  : '' }}</span>\r\n        </div>\r\n        <div [className]=\"'button'\"\r\n        (click)=\"employeeTeam()\">\r\n            <span>{{ content ? content.employeeTeam : '' }}</span>\r\n        </div>\r\n        <div [className]=\"'button'\" \r\n            (click)=\"activeEvents()\">\r\n            <span>{{ content ? content.activeEvents : '' }}</span>\r\n        </div>\r\n        <div [className]=\"'button'\" \r\n            (click)=\"carStatus()\"\r\n            *ngIf=\"eventDetailsType == 1 && eventId != -1\">\r\n            <span>{{ content ? content.carStatus : '' }}</span>\r\n        </div>\r\n        <div [className]=\"'button'\" \r\n            (click)=\"updateControlTime()\"\r\n            *ngIf=\"eventDetailsType == 1 && currentEventStatus == 3 && eventId != -1 && (eventInfo.generalInfo.controlTime == null || eventInfo.generalInfo.controlTime == '')\">\r\n            <span>{{ content ? content.getControl : '' }}</span>\r\n        </div>\r\n        <div [className]=\"'button'\" \r\n            (click)=\"tools()\"\r\n            *ngIf=\"eventDetailsType == 1 && (currentEventStatus == 3 || currentEventStatus == 6)  && eventId != -1 && !isOfflineShow\">\r\n            <span>{{ content ? content.tools : '' }}</span>\r\n        </div>\r\n        <div [className]=\"'button'\" \r\n            (click)=\"additionalDetails()\"\r\n            *ngIf=\"eventDetailsType == 1 && (currentEventStatus == 3 || currentEventStatus == 6) && eventId != -1 && !isOfflineShow\">\r\n            <span>{{ content ? content.additionalDetails : '' }}</span>\r\n        </div>\r\n        <div [className]=\"'button'\" \r\n            (click)=\"anotherEvent()\"\r\n            *ngIf=\"eventDetailsType == 1 && eventId != -1 && !isOfflineShow\">\r\n            <span>{{ content ? content.anotherEvent : '' }}</span>\r\n        </div>\r\n        <div [className]=\"'button'\" \r\n            (click)=\"cancelEvent()\"\r\n            *ngIf=\"eventDetailsType == 1 && !isOfflineShow\">\r\n            <span>{{ content ? content.cancelEvent : '' }}</span>\r\n        </div>       \r\n    </div> \r\n    <div [className]=\"'additional-buttons'\" *ngIf=\"eventDetailsType == 1\">\r\n        <div [className]=\"'button'\" (click)=\"report()\">\r\n            <span [className]=\"'image-sprite shape-1-copy-3'\"></span>\r\n        </div>\r\n        <div [className]=\"'button'\" (click)=\"chat()\" *ngIf=\"eventInfo && eventId != -1 && !isOfflineShow\">\r\n            <span [className]=\"'image-sprite shape-1'\"></span>\r\n        </div>  \r\n        <div [className]=\"'button'\" (click)=\"openLayers()\">\r\n            <span class=\"fa fa-tasks\"></span>\r\n        </div>  \r\n    </div>\r\n    <div [className]=\"'process-wrapper'\">\r\n\r\n        <div [className]=\"'process-state'\" [style.color]=\"eventDetailsType == 1 && currentDispatchTime ? '#4eccff' : '#ffffff'\">\r\n            <span [className]=\"'event-start'\">{{ content ? content.dispatch : '' }}</span>\r\n            <span [className]=\"'event-time'\" \r\n                *ngIf=\"eventDetailsType == 1 && currentDispatchTime\"\r\n                [style.border]=\"eventDetailsType == 1 && currentDispatchTime ? '3px solid #4eccff' : '3px solid #ffffff'\">            \r\n                {{ currentDispatchTime }}\r\n            </span> \r\n            <span [className]=\"'event-dot'\" [style.border]=\"eventDetailsType == 1 && currentDispatchTime ? '3px solid #4eccff' : '3px solid #ffffff'\">\r\n                <span [className]=\"'inner-event-dot'\" *ngIf=\"eventDetailsType == 1 && currentDispatchTime\"></span>\r\n            </span>\r\n            <span [className]=\"'process-line'\" [style.background-color]=\"eventDetailsType == 1 && currentDispatchTime ? '#4eccff' : '#ffffff'\"></span>\r\n        </div>\r\n\r\n        <div [className]=\"'process-state'\" [style.color]=\"eventDetailsType == 1 && currentExitTime ? '#4eccff' : '#ffffff'\">\r\n                <span [className]=\"'event-start'\">{{ content ? content.exit : '' }}</span>\r\n                <span [className]=\"'event-time'\" \r\n                    *ngIf=\"eventDetailsType == 1 && currentExitTime\"                \r\n                    [style.border]=\"eventDetailsType == 1 && currentExitTime ? '3px solid #4eccff' : '3px solid #ffffff'\">            \r\n                    {{ currentExitTime }}\r\n                </span> \r\n                <span [className]=\"'event-dot'\" [style.border]=\"eventDetailsType == 1 && currentExitTime  ? '3px solid #4eccff' : '3px solid #ffffff'\">\r\n                    <span [className]=\"'inner-event-dot'\" *ngIf=\"eventDetailsType == 1 && currentExitTime\"></span>\r\n                </span>\r\n                <span [className]=\"'process-line'\" [style.background-color]=\"eventDetailsType == 1 && currentExitTime ? '#4eccff' : '#ffffff'\"></span>\r\n            </div>\r\n\r\n            <div [className]=\"'process-state'\" [style.color]=\"eventDetailsType == 1 && currentArrivalTime ? '#4eccff' : '#ffffff'\">\r\n                <span [className]=\"'event-start'\">{{ content ? content.arrival : '' }}</span>\r\n                <span [className]=\"'event-time'\" \r\n                    *ngIf=\"eventDetailsType == 1 && currentArrivalTime\" \r\n                    [style.border]=\"eventDetailsType == 1 && currentArrivalTime ? '3px solid #4eccff' : '3px solid #ffffff'\">            \r\n                    {{ currentArrivalTime }}\r\n                </span> \r\n                <span [className]=\"'event-dot'\" [style.border]=\"eventDetailsType == 1 && currentArrivalTime ? '3px solid #4eccff' : '3px solid #ffffff'\">\r\n                    <span [className]=\"'inner-event-dot'\" *ngIf=\"eventDetailsType == 1 && currentArrivalTime\"></span>\r\n                </span>\r\n                <span [className]=\"'process-line'\" [style.background-color]=\"eventDetailsType == 1 && currentArrivalTime ? '#4eccff' : '#ffffff'\"></span>\r\n            </div>\r\n            <div [className]=\"'process-state'\" [style.color]=\"eventDetailsType == 1 && currentFinishTime ? '#4eccff' : '#ffffff'\">\r\n                <span [className]=\"'event-start'\">{{ content ? content.finish : '' }}</span>\r\n                <span [className]=\"'event-time'\" \r\n                    *ngIf=\"eventDetailsType == 1 && currentFinishTime\"\r\n                    [style.border]=\"eventDetailsType == 1 && currentFinishTime ? '3px solid #4eccff' : '3px solid #ffffff'\">            \r\n                    {{ currentFinishTime }}\r\n                </span> \r\n                <span [className]=\"'event-dot'\" [style.border]=\"eventDetailsType == 1 && currentFinishTime ? '3px solid #4eccff' : '3px solid #ffffff'\">\r\n                    <span [className]=\"'inner-event-dot'\" *ngIf=\"eventDetailsType == 1 && currentFinishTime\"></span>\r\n                </span>\r\n                <span [className]=\"'process-line'\" [style.background-color]=\"eventDetailsType == 1 && currentFinishTime ? '#4eccff' : '#ffffff'\"></span>\r\n            </div>\r\n\r\n            <div [className]=\"'process-state'\" [style.color]=\"eventDetailsType == 1 && currentBackOnStationTime ? '#4eccff' : '#ffffff'\">\r\n                <span [className]=\"'event-start'\">{{ content ? content.returnToStation : '' }}</span>\r\n                <span [className]=\"'event-time last'\" \r\n                    *ngIf=\"eventDetailsType == 1 && currentBackOnStationTime\"\r\n                    [style.border]=\"eventDetailsType == 1 && currentBackOnStationTime ? '3px solid #4eccff' : '3px solid #ffffff'\">            \r\n                    {{ currentBackOnStationTime }}\r\n                </span> \r\n                <span [className]=\"'event-dot'\" [style.border]=\"eventDetailsType == 1 && currentBackOnStationTime ? '3px solid #4eccff' : '3px solid #ffffff'\">\r\n                    <span [className]=\"'inner-event-dot'\" *ngIf=\"eventDetailsType == 1 && currentBackOnStationTime\"></span>\r\n                </span>\r\n            </div>\r\n    </div>  \r\n    <div [className]=\"'finish-report'\" (click)=\"changeMissionStatus()\">\r\n        <span [className]=\"'disable-finish-report'\" *ngIf=\"isChangeStatusInProgress\">\r\n            <i class=\"fas fa-spinner fa-pulse fa-4x\"></i>\r\n        </span>\r\n        <span [className]=\"'finish-report-text'\">\r\n            {{ reportButtonText }}\r\n        </span>\r\n    </div>\r\n</div> \r\n<div [className]=\"'overlay'\" *ngIf=\"isAutsShow || !isChatHide || isLayersShow\"></div>   \r\n\r\n<div [className]=\"'auts-popup'\" *ngIf=\"isAutsShow\">\r\n    <detailsbar [menuType]='menuType' \r\n        [detailsbarType]='detailsbarType'\r\n        [data]='navigationData'>\r\n    </detailsbar>\r\n\r\n    <div [className]=\"'km-wrapper'\">\r\n        <div [className]=\"'input-wrapper'\">\r\n            <input [value]=\"suppliesModel.carKM\" (input)=\"suppliesModel.carKM = $event.target.value\" type=\"number\">\r\n            <span [className]=\"'type'\">\r\n                <span>{{ content ? content.km : '' }}</span>\r\n            </span>\r\n        </div>\r\n        <div *ngIf=\"!isMkValid\">\r\n            <span [className]=\"'notification'\">{{ content ? content.mustNumber : '' }}</span>\r\n        </div>\r\n    </div>\r\n</div> \r\n\r\n<div [className]=\"'chat-wrapper'\"  [hidden]=\"isChatHide\">\r\n    <div [className]=\"'chat-header'\">\r\n        <div [className]=\"'back-wrapper'\" (click)=\"closeChat()\">\r\n            <span [className]=\"'image-sprite back'\"></span>\r\n        </div>\r\n        <span [className]=\"'chat-header-text'\">{{ content ? content.chatTitle : '' }} {{ eventInfo && eventInfo.generalInfo ? eventInfo.generalInfo.eventNumber : '' }}</span>\r\n        <div [className]=\"'truck-image'\">\r\n            <span [className]=\"'truck-image-wrapper'\">\r\n                <span [className]=\"'image-sprite onmap-icn-car2'\"></span>   \r\n            </span>\r\n        </div>       \r\n    </div>\r\n    <div [className]=\"'chat-body'\" #scrollMe>\r\n        <div *ngFor=\"let message of chatMessages\">\r\n            <div class=\"message-wrapper\" [ngClass]=\"{ 'myMessage': message.isMyMessage }\">                \r\n                <div [className]=\"'message-owner'\" [ngStyle]=\"{ 'color': message.ownerColor }\">{{ message.messageOwner }}</div>                 \r\n                <div [className]=\"'message-content'\">{{ message.messageContent }}</div> \r\n                <div [className]=\"'message-time'\">{{ message.messageTime | dateHours }}</div> \r\n            </div>\r\n        </div>\r\n    </div> \r\n    <div [className]=\"'chat-footer'\">\r\n        <textarea rows=\"3\" [className]=\"'chat-input'\" placeholder=\"{{ content ? content.chatPlaceholder : '' }}\"\r\n            [value]=\"message\" (input)=\"message = $event.target.value\" ></textarea>\r\n        <div [className]=\"'send-wrapper'\" (click)=\"sendMessage()\">\r\n            <span class=\"image-sprite\"\r\n            [ngClass]=\"{ 'popup-icn-send2': message && message.length > 0, 'popup-icn-send2-disabled': !message || message.length == 0 }\"></span>   \r\n        </div>\r\n    </div> \r\n</div>  \r\n\r\n<div [className]=\"'layers-popup'\" *ngIf=\"isLayersShow\">\r\n    <detailsbar [menuType]='menuType' \r\n        [detailsbarType]='detailsbarType'\r\n        [data]='layersNavigationData'>\r\n    </detailsbar>\r\n\r\n    <div [className]=\"'layers-wrapper'\" *ngIf=\"layerList && layerList.length > 0\">\r\n        <div *ngFor=\"let layer of layerList\">\r\n            <div class=\"layer-container\">\r\n                <input type=\"checkbox\" id=\"checkboxInput{{layer.layerName}}\" [checked]=\"layer.visible\" \r\n                    (change)=\"layer.visible = !layer.visible;layerClicked(layer)\" />\r\n                <label for=\"checkboxInput{{layer.layerName}}\">\r\n                    <span>{{layer.caption}}</span>\r\n                </label>\r\n            </div>             \r\n        </div>\r\n    </div>\r\n</div> "

/***/ }),

/***/ "./src/app/events/event-details/event-details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/event/event-info.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/shared-classes/event/event-details-types.ts"), __webpack_require__("./src/app/shared-classes/event/event-details-data.ts"), __webpack_require__("./src/app/shared-classes/common/menu-types.ts"), __webpack_require__("./src/app/shared-classes/common/navigation-data.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/event/event-details.service.ts"), __webpack_require__("./src/app/shared-classes/request/event-request.ts"), __webpack_require__("./src/app/services/event/current-event-details.service.ts"), __webpack_require__("./src/app/shared-classes/event/event-details-status.ts"), __webpack_require__("./src/app/services/pipes/date-hours.pipe.ts"), __webpack_require__("./src/app/shared-classes/employees/employee-team-data.ts"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/shared-classes/request/change-mission-status-request.ts"), __webpack_require__("./node_modules/moment/moment.js"), __webpack_require__("./src/app/core/emap.service.ts"), __webpack_require__("./src/app/services/node/node.service.ts"), __webpack_require__("./src/app/shared-classes/common/detailsbar-types.ts"), __webpack_require__("./src/app/services/supplies/supplies.service.ts"), __webpack_require__("./src/app/services/general/device.service.ts"), __webpack_require__("./src/app/shared-classes/request/launch-mission-status-request.ts"), __webpack_require__("./src/app/shared-classes/request/control-time-request.ts"), __webpack_require__("./src/app/shared-classes/request/supplies.request.ts"), __webpack_require__("./src/app/shared-classes/supplies/supplies-model.ts"), __webpack_require__("./src/app/shared-classes/car/car-team.ts"), __webpack_require__("./src/app/shared-classes/common/active-mission.ts"), __webpack_require__("./src/app/shared-classes/request/save.supplies.request.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/services/event-list/event-list.service.ts"), __webpack_require__("./src/app/shared-classes/request/event-list-request.ts"), __webpack_require__("./src/app/shared-classes/event/event-control-status-types.ts"), __webpack_require__("./src/app/services/general/projection.service.ts"), __webpack_require__("./src/app/services/chat/chat.service.ts"), __webpack_require__("./src/app/shared-classes/common/route-path.ts"), __webpack_require__("./src/app/services/general/waze.service.ts"), __webpack_require__("./src/app/services/general/gps.service.ts"), __webpack_require__("./src/app/shared-classes/common/status-code.ts"), __webpack_require__("./src/app/shared-classes/request/kabaut-point.ts"), __webpack_require__("./src/app/shared-classes/request/new-mission-status-request.ts"), __webpack_require__("./src/app/shared-classes/request/cancel-mission-request.ts"), __webpack_require__("./src/app/shared-classes/request/update-new-mission-status-request.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/shared-classes/common/status.ts"), __webpack_require__("./src/app/services/layers/layers.service.ts"), __webpack_require__("./src/app/shared-classes/event/event-force-info.ts"), __webpack_require__("./src/app/services/general/log.service.ts"), __webpack_require__("./src/app/shared-classes/common/log-info.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, event_info_1, navigation_service_1, event_details_types_1, event_details_data_1, menu_types_1, navigation_data_1, content_service_1, event_details_service_1, event_request_1, current_event_details_service_1, event_details_status_1, date_hours_pipe_1, employee_team_data_1, map_state_service_1, home_service_1, change_mission_status_request_1, moment, emap_service_1, node_service_1, detailsbar_types_1, supplies_service_1, device_service_1, launch_mission_status_request_1, control_time_request_1, supplies_request_1, supplies_model_1, car_team_1, active_mission_1, save_supplies_request_1, alertify_service_1, event_list_service_1, event_list_request_1, event_control_status_types_1, projection_service_1, chat_service_1, route_path_1, waze_service_1, gps_service_1, status_code_1, kabaut_point_1, new_mission_status_request_1, cancel_mission_request_1, update_new_mission_status_request_1, connection_service_1, status_1, layers_service_1, event_force_info_1, log_service_1, log_info_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventDetailsComponent = (function () {
        function EventDetailsComponent(navigationService, contentService, eventService, currentEventDetailsService, mapStateService, homeService, emapService, nodeService, suppliesService, deviceService, alertifyService, eventListService, projectionService, chatService, wazeService, gpsService, connectionService, layersService, logService) {
            var _this = this;
            this.navigationService = navigationService;
            this.contentService = contentService;
            this.eventService = eventService;
            this.currentEventDetailsService = currentEventDetailsService;
            this.mapStateService = mapStateService;
            this.homeService = homeService;
            this.emapService = emapService;
            this.nodeService = nodeService;
            this.suppliesService = suppliesService;
            this.deviceService = deviceService;
            this.alertifyService = alertifyService;
            this.eventListService = eventListService;
            this.projectionService = projectionService;
            this.chatService = chatService;
            this.wazeService = wazeService;
            this.gpsService = gpsService;
            this.connectionService = connectionService;
            this.layersService = layersService;
            this.logService = logService;
            this.menuType = menu_types_1.menuTypes.nomenu;
            this.detailsbarType = detailsbar_types_1.detailsbarTypes.default;
            this.isAutsShow = false;
            this.isMkValid = true;
            this.isChatHide = true;
            this.message = null;
            this.isLayersShow = false;
            this.isChangeStatusInProgress = false;
            this.mapStateService.changeMapState(true);
            this.contentService.load().then(function () {
                _this.content = _this.contentService.getContent('event-details');
                _this.navigationData = _this.getAutsNavigationData();
                _this.layersNavigationData = _this.getLayersNavigationData();
            });
            this.suppliesModel = new supplies_model_1.SuppliesModel();
            this.routes = new route_path_1.RoutePath();
            this.layerList = new Array();
            this.chatBroadcast = this.chatService.$chatBroadcastEmitter.subscribe(function () {
                setTimeout(function () {
                    _this.scrollToBottom();
                }, 0);
            });
            this.activeMissionUpdated = this.currentEventDetailsService.$currentActiveMissionUpdatedEmitter.subscribe(function (mission) {
                _this.logService.addItem(new log_info_1.LogInfo("activeMissionUpdated", "details", 'server'));
                _this.isChangeStatusInProgress = false;
                _this.setActiveMissionStatuses(mission);
                if (mission.currentMissionStatus.missionStatusId == event_details_status_1.EventDetailsStatus.Finish && !_this.isOfflineShow) {
                    var data = new navigation_data_1.NavigationData(_this.routes.SUPPLIES, { eventId: _this.eventId, eventDetailsType: _this.eventDetailsType, onSaveCallback: function () {
                            _this.currentEventDetailsService.getCurrentCarTeam().then(function (response) {
                                if (response.isSuccessWithResult() && response.data.carInfo && response.data.carInfo.positionStation && response.data.carInfo.positionStation.coord && response.data.carInfo.positionStation.coord.lat && response.data.carInfo.positionStation.coord.lon) {
                                    _this.wazeService.navigate(response.data.carInfo.positionStation.coord.lat, response.data.carInfo.positionStation.coord.lon);
                                }
                                else {
                                    _this.alertifyService.warring(_this.content.noCoordsFound);
                                }
                                _this.navigationService.goBack();
                            });
                        }, onCloseCallback: function () {
                            _this.currentEventDetailsService.getCurrentCarTeam().then(function (response) {
                                if (response.isSuccessWithResult() && response.data.carInfo && response.data.carInfo.positionStation && response.data.carInfo.positionStation.coord && response.data.carInfo.positionStation.coord.lat && response.data.carInfo.positionStation.coord.lon) {
                                    _this.wazeService.navigate(response.data.carInfo.positionStation.coord.lat, response.data.carInfo.positionStation.coord.lon);
                                }
                                else {
                                    _this.alertifyService.warring(_this.content.noCoordsFound);
                                }
                            });
                        }
                    });
                    _this.navigationService.navigate(data);
                }
                else if (mission.currentMissionStatus.missionStatusId == event_details_status_1.EventDetailsStatus.BackOnStation && !_this.isOfflineShow) {
                    _this.currentEventDetailsService.getCurrentCarTeam().then(function (res) {
                        if (res.isSuccessWithResult()) {
                            _this.suppliesService.getSupplies(new supplies_request_1.SuppliesRequest(res.data.carInfo.carId, res.data.activeMission.missionId)).then(function (supResponse) {
                                if (supResponse.isSuccessWithResult()) {
                                    _this.suppliesModel = supResponse.data;
                                    _this.isAutsShow = true;
                                }
                            });
                        }
                    });
                }
            });
            this.currentEventAddedEmitter = this.currentEventDetailsService.$currentEventAddedEmitter.subscribe(function (eventInfo) {
                _this.getCurrentEvent();
            });
            this.currentEventUpdated = this.currentEventDetailsService.$currentEventUpdatedEmitter.subscribe(function (eventInfo) {
                _this.logService.addItem(new log_info_1.LogInfo("currentEventUpdated", "details", 'server'));
                _this.isChangeStatusInProgress = false;
                _this.getCurrentEvent(false);
            });
            this.currentEventLocationUpdated = this.currentEventDetailsService.$currentEventLocationUpdatedEmitter.subscribe(function (eventInfo) {
                _this.getCurrentEvent(true, true);
            });
            this.eventUpdated = this.eventService.$eventUpdatedEmitter.subscribe(function (eventInfo) {
                _this.logService.addItem(new log_info_1.LogInfo("eventUpdated", "details", 'server'));
                _this.getEvent(eventInfo.generalInfo.eventId, false);
            });
            this.eventLocationUpdated = this.eventService.$eventLocationUpdatedEmitter.subscribe(function (eventInfo) {
                _this.getEvent(eventInfo.generalInfo.eventId);
            });
            this.currentEventRemoved = this.currentEventDetailsService.$currentEventRemovedEmitter.subscribe(function (eventId) {
                if (_this.eventInfo && _this.eventInfo.generalInfo && eventId == _this.eventInfo.generalInfo.eventId) {
                    _this.navigationService.navigate(new navigation_data_1.NavigationData(_this.routes.HOME));
                }
            });
            this.stateChangedEvent = this.connectionService.stateChanged.subscribe(function (result) {
                _this.isOfflineShow = _this.connectionService.isOffline();
            });
            this.deviceBack = this.deviceService.$deviceBackEmitter.subscribe(function (e) {
                if (_this.isAutsShow && !_this.isAutsValid()) {
                    e.preventDefault();
                }
                else {
                    _this.navigationService.goBack();
                }
            });
        }
        EventDetailsComponent.prototype.ngOnInit = function () {
            this.layersService.setDefaultLayersVisibility('myMap');
            this.isOfflineShow = this.connectionService.isOffline();
            var data = this.navigationService.getNavigationData();
            this.getReportButtonText();
            if (data == null) {
                this.eventInfo = new event_info_1.EventInfo();
                this.eventDetailsType = event_details_types_1.EventDetailsTypes.CreateEvent;
                this.eventId = -1;
            }
            else {
                this.eventId = data.eventId;
                this.eventDetailsType = data.eventDetailsType;
                if (!this.eventDetailsType) {
                    if (this.currentEventDetailsService.isCurrentEventById(this.eventId)) {
                        this.eventDetailsType = event_details_types_1.EventDetailsTypes.CurrentEvent;
                    }
                    else {
                        this.eventDetailsType = event_details_types_1.EventDetailsTypes.CarRequest;
                    }
                }
                if (this.eventDetailsType == event_details_types_1.EventDetailsTypes.CurrentEvent) {
                    this.getCurrentEvent(true, data.isNew);
                }
                else {
                    this.getEvent(this.eventId);
                }
            }
        };
        EventDetailsComponent.prototype.scrollToBottom = function () {
            try {
                this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
            }
            catch (err) { }
        };
        EventDetailsComponent.prototype.ngOnDestroy = function () {
            this.layersService.setVisibleLayers('myMap', []);
            this.activeMissionUpdated.unsubscribe();
            this.eventUpdated.unsubscribe();
            this.eventLocationUpdated.unsubscribe();
            this.currentEventUpdated.unsubscribe();
            this.currentEventLocationUpdated.unsubscribe();
            this.currentEventRemoved.unsubscribe();
            this.currentEventAddedEmitter.unsubscribe();
            this.chatBroadcast.unsubscribe();
            this.deviceBack.unsubscribe();
            this.stateChangedEvent.unsubscribe();
        };
        EventDetailsComponent.prototype.zoomToLatLon = function (lat, lon) {
            var _this = this;
            document.getElementById('myMap').style.height = "662px";
            document.getElementById('myMap').style.width = "1443px";
            this.emapService.getMap('myMap').then(function (map) {
                setTimeout(function () {
                    map.resize(true);
                    setTimeout(function () {
                        var coords = _this.projectionService.transformWGS1984ToITM(lat, lon);
                        map.setCenter({ x: coords.x, y: coords.y, level: map.getNumberOfLevels() - 1 });
                        map.setMapMarker(coords.x, coords.y);
                    }, 0);
                }, 0);
            });
        };
        EventDetailsComponent.prototype.getEvent = function (eventId, isZoom) {
            var _this = this;
            if (isZoom === void 0) { isZoom = true; }
            this.eventService.getItem(new event_request_1.EventRequest(eventId)).then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.eventInfo = response.data;
                    _this.eventDetailsType = event_details_types_1.EventDetailsTypes.CarRequest;
                    _this.currentEventStatus = null;
                    _this.currentDispatchTime = null;
                    _this.currentExitTime = null;
                    _this.currentArrivalTime = null;
                    _this.currentFinishTime = null;
                    _this.currentBackOnStationTime = null;
                    if (isZoom && _this.eventInfo.generalInfo.lat && _this.eventInfo.generalInfo.lon) {
                        _this.zoomToLatLon(_this.eventInfo.generalInfo.lat, _this.eventInfo.generalInfo.lon);
                    }
                }
            });
        };
        EventDetailsComponent.prototype.getCurrentEvent = function (isZoom, isLaunchWaze) {
            var _this = this;
            if (isZoom === void 0) { isZoom = true; }
            if (isLaunchWaze === void 0) { isLaunchWaze = false; }
            this.currentEventDetailsService.getItem().then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.eventInfo = response.data;
                    _this.eventId = _this.eventInfo.generalInfo.eventId;
                    _this.eventDetailsType = event_details_types_1.EventDetailsTypes.CurrentEvent;
                    if (isZoom && _this.eventInfo.generalInfo.lat && _this.eventInfo.generalInfo.lon) {
                        _this.zoomToLatLon(_this.eventInfo.generalInfo.lat, _this.eventInfo.generalInfo.lon);
                    }
                    if (isLaunchWaze && _this.eventInfo.generalInfo.lat && _this.eventInfo.generalInfo.lon) {
                        _this.wazeService.navigate(_this.eventInfo.generalInfo.lat, _this.eventInfo.generalInfo.lon);
                    }
                }
            });
            this.currentEventDetailsService.getCurrentCarTeam().then(function (res) {
                if (res.isSuccessWithResult()) {
                    _this.setActiveMissionStatuses(res.data.activeMission);
                }
            });
        };
        EventDetailsComponent.prototype.setActiveMissionStatuses = function (mission) {
            var filterPipe = new date_hours_pipe_1.DateHoursPipe();
            this.currentEventStatus = mission.currentMissionStatus.missionStatusId;
            this.currentDispatchTime = mission.statusDispatch ? filterPipe.transform(mission.statusDispatch.missionStatusTime) : null;
            this.currentExitTime = mission.statusExit ? filterPipe.transform(mission.statusExit.missionStatusTime) : null;
            this.currentArrivalTime = mission.statusArrival ? filterPipe.transform(mission.statusArrival.missionStatusTime) : null;
            this.currentFinishTime = mission.statusFinish ? filterPipe.transform(mission.statusFinish.missionStatusTime) : null;
            this.currentBackOnStationTime = mission.statusBackOnStation ? filterPipe.transform(mission.statusBackOnStation.missionStatusTime) : null;
            this.getReportButtonText();
        };
        EventDetailsComponent.prototype.getReportButtonText = function () {
            var stageText = this.content.exit;
            if (this.eventDetailsType == event_details_types_1.EventDetailsTypes.CarRequest || (this.eventDetailsType == event_details_types_1.EventDetailsTypes.CurrentEvent && this.currentEventStatus == event_details_status_1.EventDetailsStatus.Dispatch)) {
                stageText = this.content.exit;
            }
            else if (this.eventDetailsType == event_details_types_1.EventDetailsTypes.CurrentEvent && this.currentEventStatus == event_details_status_1.EventDetailsStatus.Exit) {
                stageText = this.content.arrival;
            }
            else if (this.eventDetailsType == event_details_types_1.EventDetailsTypes.CurrentEvent && this.currentEventStatus == event_details_status_1.EventDetailsStatus.Arraival) {
                stageText = this.content.finish;
            }
            else if (this.eventDetailsType == event_details_types_1.EventDetailsTypes.CurrentEvent && this.currentEventStatus == event_details_status_1.EventDetailsStatus.Finish) {
                stageText = this.content.returnToStation;
            }
            this.reportButtonText = stageText;
        };
        EventDetailsComponent.prototype.home = function () {
            this.navigationService.navigate(new navigation_data_1.NavigationData(this.routes.HOME));
        };
        EventDetailsComponent.prototype.currentStatus = function () {
            this.navigationService.navigate(new navigation_data_1.NavigationData(this.routes.CURRENT_STATUS, { eventId: this.eventId, eventDetailsType: this.eventDetailsType }));
        };
        EventDetailsComponent.prototype.preventionFiles = function () {
            this.navigationService.navigate(new navigation_data_1.NavigationData(this.routes.PREVENT_FIRE, { eventId: this.eventId, eventDetailsType: this.eventDetailsType }));
        };
        EventDetailsComponent.prototype.employeeTeam = function (isOnCloseCallback, carId, eventId) {
            var _this = this;
            if (isOnCloseCallback === void 0) { isOnCloseCallback = false; }
            this.currentEventDetailsService.getItem().then(function (res) {
                var data = null;
                if (_this.eventInfo.generalInfo != null) {
                    data = new employee_team_data_1.EmployeesTeamData(_this.eventInfo.generalInfo.eventNumber, _this.eventInfo.generalInfo.eventId);
                    if (isOnCloseCallback) {
                        data.onCloseCallback = function () {
                            _this.navigationService.goBack();
                            _this.sendLaunchMission(carId, eventId);
                        };
                    }
                }
                data.isBack = !res.isSuccessWithResult();
                _this.mapStateService.changeMapState(false);
                _this.navigationService.navigate(new navigation_data_1.NavigationData(_this.routes.EMPLOYEES_TEAM, data));
            });
        };
        EventDetailsComponent.prototype.activeEvents = function () {
            var data = null;
            if (this.eventInfo && this.eventInfo.generalInfo) {
                data = new event_details_data_1.EventDetailsData(this.eventInfo.generalInfo.eventId, this.eventDetailsType);
            }
            this.mapStateService.changeMapState(false);
            this.navigationService.navigate(new navigation_data_1.NavigationData(this.routes.EVENTS, data));
        };
        EventDetailsComponent.prototype.carStatus = function () {
            var _this = this;
            this.homeService.getCar().then(function (homeResponse) {
                _this.navigationService.navigate(new navigation_data_1.NavigationData(_this.routes.CAR_STATUS, { eventId: _this.eventId, eventDetailsType: _this.eventDetailsType, carName: homeResponse.data.carCallCode }));
            });
        };
        EventDetailsComponent.prototype.updateControlTime = function () {
            var _this = this;
            this.homeService.getCar().then(function (response) {
                var request = new control_time_request_1.ControlTimeRequest(response.data.carId, _this.eventId, moment().format("YYYY/MM/DD HH:mm"), event_control_status_types_1.EventControlStatusTypes.InControl);
                _this.currentEventDetailsService.updateControlTime(request);
            });
            if (this.isOfflineShow) {
                this.currentEventDetailsService.getItem().then(function (response) {
                    response.data.generalInfo.controlTime = moment().format("YYYY/MM/DD HH:mm");
                    _this.currentEventDetailsService.updateItem(response.data);
                });
            }
        };
        EventDetailsComponent.prototype.tools = function () {
            var _this = this;
            var data = new navigation_data_1.NavigationData(this.routes.SUPPLIES, { eventId: this.eventId, eventDetailsType: this.eventDetailsType, onSaveCallback: function () {
                    _this.navigationService.goBack();
                }
            });
            this.navigationService.navigate(data);
        };
        EventDetailsComponent.prototype.additionalDetails = function () {
            var data = null;
            if (this.eventInfo.generalInfo != null) {
                data = new event_details_data_1.EventDetailsData(this.eventInfo.generalInfo.eventId, this.eventDetailsType);
            }
            this.mapStateService.changeMapState(false);
            this.navigationService.navigate(new navigation_data_1.NavigationData(this.routes.REPORT, data));
        };
        EventDetailsComponent.prototype.anotherEvent = function () {
            var pThis = this;
            var config = new alertify_service_1.PromtConfig(this.content.confirmTitleChangeEvent, this.content.confirmTextChangeEvent, function () {
                pThis.cancelMission(true);
            }, function (clicked) {
            }, 'event-details-promt');
            this.alertifyService.promt(config);
        };
        EventDetailsComponent.prototype.chat = function () {
            var _this = this;
            this.chatMessages = new Array();
            this.chatService.connectChatRoom(this.eventInfo.generalInfo.eventId).then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.chatMessages = response.data;
                    setTimeout(function () {
                        _this.scrollToBottom();
                    }, 0);
                }
                _this.isChatHide = false;
            });
        };
        EventDetailsComponent.prototype.closeChat = function () {
            var _this = this;
            this.chatService.disConnectChatRoom(this.eventInfo.generalInfo.eventId).then(function (response) {
                _this.chatMessages = new Array();
                _this.message = null;
                _this.isChatHide = true;
            });
        };
        EventDetailsComponent.prototype.sendMessage = function () {
            var _this = this;
            if (this.message == null || this.message.trim().length == 0) {
                return;
            }
            this.chatService.sendMessage(this.message, this.eventInfo.generalInfo.eventId);
            this.message = '';
            setTimeout(function () {
                _this.scrollToBottom();
            }, 0);
        };
        EventDetailsComponent.prototype.cancelEvent = function () {
            var pThis = this;
            var config = new alertify_service_1.PromtConfig(this.content.confirmTitleCancelEvent, this.content.confirmTextCancelEvent, function () {
                pThis.cancelMission();
            }, function () {
                console.log("cancel");
            }, 'event-details-promt');
            this.alertifyService.promt(config);
        };
        EventDetailsComponent.prototype.cancelMission = function (isAnotherEvent) {
            var _this = this;
            if (isAnotherEvent === void 0) { isAnotherEvent = false; }
            this.currentEventDetailsService.getCurrentCarTeam().then(function (response) {
                if (response.isSuccessWithResult()) {
                    var requst = new cancel_mission_request_1.CancelMissionRequest(response.data.activeMission.missionId, response.data.carInfo.carId);
                    _this.currentEventDetailsService.cancelMission(requst).then(function (res) {
                        if (isAnotherEvent) {
                            _this.navigateToAnotherEvent(response.data.carInfo.positionStation.unionId);
                        }
                        else {
                            _this.navigationService.navigate(new navigation_data_1.NavigationData(''));
                        }
                    });
                }
            });
        };
        EventDetailsComponent.prototype.navigateToAnotherEvent = function (unionId) {
            var _this = this;
            var deviceId = this.deviceService.getDeviceId();
            this.eventListService.getList(new event_list_request_1.EventListRequest(deviceId, unionId)).then(function (res) {
                if (res.isSuccessWithResult()) {
                    if (res.data.length == 0) {
                        _this.navigationService.navigate(new navigation_data_1.NavigationData(''));
                    }
                    else if (res.data.length == 1) {
                        var eventType = event_details_types_1.EventDetailsTypes.CarRequest;
                        if (_this.currentEventDetailsService.isCurrentEventById(res.data[0].eventId)) {
                            eventType = event_details_types_1.EventDetailsTypes.CurrentEvent;
                        }
                        var data = new event_details_data_1.EventDetailsData(res.data[0].eventId, eventType);
                        _this.navigationService.navigate(new navigation_data_1.NavigationData(_this.routes.EVENT_DETAILS, data));
                    }
                    else {
                        _this.navigationService.navigate(new navigation_data_1.NavigationData(_this.routes.EVENTS));
                    }
                }
            });
        };
        EventDetailsComponent.prototype.report = function () {
            var data = null;
            if (this.eventInfo.generalInfo != null) {
                data = new event_details_data_1.EventDetailsData(this.eventInfo.generalInfo.eventId, this.eventDetailsType);
            }
            this.mapStateService.changeMapState(false);
            this.navigationService.navigate(new navigation_data_1.NavigationData(this.routes.QUICK_REPORT, data));
        };
        EventDetailsComponent.prototype.sendNewMission = function () {
            var _this = this;
            this.homeService.getCar().then(function (homeResponse) {
                var request = new new_mission_status_request_1.NewMissionStatusRequest(homeResponse.data.carId);
                request.exitTime = moment().format("YYYY/MM/DD HH:mm");
                _this.currentEventDetailsService.addNewMission(request).then(function (response) {
                    _this.isChangeStatusInProgress = false;
                });
            });
        };
        EventDetailsComponent.prototype.sendLaunchMission = function (carId, eventId) {
            var _this = this;
            this.suppliesModel = new supplies_model_1.SuppliesModel();
            var request = new launch_mission_status_request_1.LaunchMissionStatusRequest(carId, eventId);
            request.launchTime = moment().format("YYYY/MM/DD HH:mm");
            this.currentEventDetailsService.launchMission(request).then(function (response) {
                _this.isChangeStatusInProgress = false;
                if (_this.eventInfo && _this.eventInfo.generalInfo) {
                    _this.wazeService.navigate(_this.eventInfo.generalInfo.lat, _this.eventInfo.generalInfo.lon);
                }
            });
        };
        EventDetailsComponent.prototype.sendChangeMission = function (carId, eventId, nextState) {
            var _this = this;
            var request = new change_mission_status_request_1.ChangeMissionStatusRequest();
            request.carId = carId;
            request.eventId = eventId;
            request.missionStatusId = nextState;
            request.statusTime = moment().format("YYYY/MM/DD HH:mm");
            this.gpsService.getPosition().then(function (gpsResponse) {
                if (gpsResponse.status == status_code_1.StatusCode.SUCCESS) {
                    request.coord = new kabaut_point_1.KabautPoint();
                    request.coord.lat = gpsResponse.success.lat;
                    request.coord.lon = gpsResponse.success.lon;
                    request.coord.x_itm = gpsResponse.success.x;
                    request.coord.y_itm = gpsResponse.success.y;
                    request.coord.locationTime = moment().format("YYYY/MM/DD HH:mm");
                }
                _this.currentEventDetailsService.changeMissionStatus(request).then(function (res) {
                    _this.isChangeStatusInProgress = false;
                });
            }, function (e) {
                _this.currentEventDetailsService.changeMissionStatus(request).then(function (res) {
                    _this.isChangeStatusInProgress = false;
                });
            });
        };
        EventDetailsComponent.prototype.sendChangeVirtualMission = function (carId, nextState) {
            var request = new update_new_mission_status_request_1.UpdateNewMissionStatusRequest(carId, nextState);
            request.statusTime = moment().format("YYYY/MM/DD HH:mm");
            this.currentEventDetailsService.updateNewMissionStatus(request);
        };
        EventDetailsComponent.prototype.changeMissionStatus = function () {
            var _this = this;
            if (this.isChangeStatusInProgress) {
                return;
            }
            if (!this.isOfflineShow) {
                this.isChangeStatusInProgress = true;
            }
            this.homeService.getCar().then(function (homeResponse) {
                var carId = homeResponse.data.carId;
                _this.currentEventDetailsService.getCurrentCarTeam().then(function (res) {
                    if (!res.isSuccessWithResult()) {
                        if (_this.eventId == -1) {
                            _this.sendNewMission();
                        }
                        else {
                            _this.launchMissionTeamEmployees(carId, _this.eventId);
                            _this.setOfflineLaunch();
                        }
                    }
                    else {
                        var currentStep = res.data.activeMission.currentMissionStatus.missionStatusId;
                        var nextState = _this.getNextState(currentStep);
                        if (res.data.activeMission.eventId != _this.eventId) {
                            _this.manualChangeEvent(carId, res.data.activeMission.missionId, _this.eventId);
                        }
                        else if (res.data.activeMission.eventId == -1) {
                            if (currentStep == event_details_status_1.EventDetailsStatus.BackOnStation) {
                                _this.sendNewMission();
                                _this.setOfflineCurrentStep(res.data, event_details_status_1.EventDetailsStatus.Exit);
                            }
                            else {
                                _this.sendChangeVirtualMission(carId, nextState);
                                _this.setOfflineCurrentStep(res.data, nextState);
                            }
                        }
                        else {
                            if (currentStep == event_details_status_1.EventDetailsStatus.BackOnStation) {
                                _this.launchMissionTeamEmployees(carId, res.data.activeMission.eventId);
                                _this.setOfflineCurrentStep(res.data, event_details_status_1.EventDetailsStatus.Exit);
                            }
                            else {
                                _this.sendChangeMission(carId, res.data.activeMission.eventId, nextState);
                                _this.setOfflineCurrentStep(res.data, nextState);
                            }
                        }
                    }
                });
            });
        };
        EventDetailsComponent.prototype.setOfflineCurrentStep = function (carTeam, nextState) {
            if (!this.isOfflineShow) {
                return;
            }
            var stepTime = moment().format("YYYY/MM/DD HH:mm");
            var filterPipe = new date_hours_pipe_1.DateHoursPipe();
            var status = new status_1.Status();
            status.missionStatusId = nextState;
            status.missionStatusTime = stepTime;
            carTeam.activeMission.currentMissionStatus.missionStatusId = nextState;
            switch (carTeam.activeMission.currentMissionStatus.missionStatusId) {
                case event_details_status_1.EventDetailsStatus.Dispatch:
                case event_details_status_1.EventDetailsStatus.Exit:
                    carTeam.activeMission.statusDispatch = status;
                    carTeam.activeMission.statusExit = status;
                    carTeam.activeMission.statusArrival = null;
                    carTeam.activeMission.statusFinish = null;
                    carTeam.activeMission.statusBackOnStation = null;
                    break;
                case event_details_status_1.EventDetailsStatus.Arraival:
                    carTeam.activeMission.statusArrival = status;
                    break;
                case event_details_status_1.EventDetailsStatus.Finish:
                    carTeam.activeMission.statusFinish = status;
                    break;
                case event_details_status_1.EventDetailsStatus.BackOnStation:
                    carTeam.activeMission.statusBackOnStation = status;
                    this.isAutsShow = true;
                    break;
            }
            this.currentEventDetailsService.updateAcitveMission(carTeam);
        };
        EventDetailsComponent.prototype.setOfflineLaunch = function () {
            var _this = this;
            if (!this.isOfflineShow) {
                return;
            }
            var stepTime = moment().format("YYYY/MM/DD HH:mm");
            var filterPipe = new date_hours_pipe_1.DateHoursPipe();
            var status = new status_1.Status();
            status.missionStatusId = event_details_status_1.EventDetailsStatus.Exit;
            status.missionStatusTime = stepTime;
            this.homeService.getCar().then(function (response) {
                var carTeam = new car_team_1.CarTeam();
                carTeam.carInfo = response.data;
                carTeam.activeMission = new active_mission_1.ActiveMission();
                carTeam.activeMission.eventId = _this.eventInfo.generalInfo.eventId;
                carTeam.activeMission.currentMissionStatus = new status_1.Status();
                carTeam.activeMission.currentMissionStatus.missionStatusId = event_details_status_1.EventDetailsStatus.Exit;
                carTeam.activeMission.statusDispatch = status;
                carTeam.activeMission.statusExit = status;
                carTeam.activeMission.statusArrival = null;
                carTeam.activeMission.statusFinish = null;
                carTeam.activeMission.statusBackOnStation = null;
                _this.eventInfo.forcesInfo = new event_force_info_1.EventForceInfo();
                _this.eventInfo.forcesInfo.activeTeams = new Array();
                _this.eventInfo.forcesInfo.activeTeams.push(carTeam);
                _this.currentEventDetailsService.addItem(_this.eventInfo, false);
                _this.eventDetailsType = event_details_types_1.EventDetailsTypes.CurrentEvent;
                _this.setOfflineCurrentStep(carTeam, event_details_status_1.EventDetailsStatus.Exit);
            });
        };
        EventDetailsComponent.prototype.manualChangeEvent = function (carId, currentMissionId, newEventId) {
            var pThis = this;
            var config = new alertify_service_1.PromtConfig(this.content.confirmTitleCancelEvent, this.content.confirmTextCancelEvent, function () {
                var requst = new cancel_mission_request_1.CancelMissionRequest(currentMissionId, carId);
                pThis.currentEventDetailsService.cancelMission(requst).then(function (res) {
                    if (newEventId != -1) {
                        pThis.launchMissionTeamEmployees(carId, newEventId);
                    }
                    else {
                        pThis.sendNewMission();
                    }
                });
            }, function () {
                pThis.isChangeStatusInProgress = false;
            }, 'event-details-promt');
            this.alertifyService.promt(config);
        };
        EventDetailsComponent.prototype.launchMissionTeamEmployees = function (carId, eventId) {
            var _this = this;
            this.homeService.getTeamEmployees().then(function (response) {
                if (response.isSuccessWithResult() && response.data.length > 0) {
                    _this.confirmEmployees(response.data, carId, eventId);
                }
                else {
                    setTimeout(function () {
                        _this.employeeTeam(true, carId, eventId);
                    }, 1000);
                }
            });
        };
        EventDetailsComponent.prototype.confirmEmployees = function (employees, carId, eventId) {
            var pThis = this;
            var config = new alertify_service_1.PromtConfig(this.content.emloyeesConfirm, this.alertifyService.createEmloyeesConfirm(employees), function () {
                pThis.employeeTeam(true, carId, eventId);
            }, function () {
                pThis.sendLaunchMission(carId, eventId);
            }, 'event-details-promt');
            config.cancelText = this.content.okText;
            config.okText = this.content.cancelText;
            this.alertifyService.promt(config);
        };
        EventDetailsComponent.prototype.getNextState = function (status) {
            switch (status) {
                case event_details_status_1.EventDetailsStatus.Dispatch:
                    return event_details_status_1.EventDetailsStatus.Exit;
                case event_details_status_1.EventDetailsStatus.Exit:
                    return event_details_status_1.EventDetailsStatus.Arraival;
                case event_details_status_1.EventDetailsStatus.Arraival:
                    return event_details_status_1.EventDetailsStatus.Finish;
                case event_details_status_1.EventDetailsStatus.Finish:
                    return event_details_status_1.EventDetailsStatus.BackOnStation;
                default:
                    return event_details_status_1.EventDetailsStatus.Dispatch;
            }
        };
        EventDetailsComponent.prototype.getAutsNavigationData = function () {
            var _this = this;
            return {
                buttonLeft: {
                    callback: function () {
                        _this.saveAuts();
                    },
                    class: "image-sprite tab-icn-ok"
                },
                title: this.content.autsTitle
            };
        };
        EventDetailsComponent.prototype.getLayersNavigationData = function () {
            var _this = this;
            return {
                buttonRight: {
                    callback: function () {
                        _this.isLayersShow = false;
                    },
                    class: "image-sprite tab-icn-x"
                },
                title: this.content.layersTitle
            };
        };
        EventDetailsComponent.prototype.openLayers = function () {
            var _this = this;
            if (this.isLayersShow) {
                return;
            }
            this.isLayersShow = true;
            this.emapService.getMap('myMap').then(function (map) {
                _this.layerList = map.getMapLayers();
            });
        };
        EventDetailsComponent.prototype.layerClicked = function (layer) {
            if (!layer || layer.layerName.trim() == '') {
                return;
            }
            this.emapService.getMap('myMap').then(function (map) {
                map.setVisibleLayer([layer]);
            });
        };
        EventDetailsComponent.prototype.saveAuts = function () {
            var _this = this;
            if (this.isAutsValid()) {
                this.currentEventDetailsService.getCurrentCarTeam().then(function (response) {
                    var request = new save_supplies_request_1.SaveSuppliesRequest();
                    request.carId = response.data.carInfo.carId;
                    request.MissionEquipmentData = _this.suppliesModel;
                    request.MissionEquipmentData.missionId = response.data.activeMission.missionId;
                    _this.suppliesService.saveAuts(request).then(function (res) {
                        if (res.isSuccess()) {
                            _this.isAutsShow = false;
                            _this.activeEvents();
                        }
                    });
                });
            }
        };
        EventDetailsComponent.prototype.isAutsValid = function () {
            this.isMkValid = this.suppliesModel.carKM && this.suppliesModel.carKM.toString().trim() != '' && /^[+]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(this.suppliesModel.carKM.toString().trim());
            return this.isMkValid;
        };
        return EventDetailsComponent;
    }());
    __decorate([
        core_1.ViewChild('scrollMe'),
        __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
    ], EventDetailsComponent.prototype, "myScrollContainer", void 0);
    EventDetailsComponent = __decorate([
        core_1.Component({
            selector: 'event-details',
            template: __webpack_require__("./src/app/events/event-details/event-details.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _b || Object, typeof (_c = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _c || Object, typeof (_d = typeof event_details_service_1.EventDetailsService !== "undefined" && event_details_service_1.EventDetailsService) === "function" && _d || Object, typeof (_e = typeof current_event_details_service_1.CurrentEventDetailsService !== "undefined" && current_event_details_service_1.CurrentEventDetailsService) === "function" && _e || Object, typeof (_f = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _f || Object, typeof (_g = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _g || Object, typeof (_h = typeof emap_service_1.EmapService !== "undefined" && emap_service_1.EmapService) === "function" && _h || Object, typeof (_j = typeof node_service_1.NodeService !== "undefined" && node_service_1.NodeService) === "function" && _j || Object, typeof (_k = typeof supplies_service_1.SuppliesService !== "undefined" && supplies_service_1.SuppliesService) === "function" && _k || Object, typeof (_l = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" && _l || Object, typeof (_m = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _m || Object, typeof (_o = typeof event_list_service_1.EventListService !== "undefined" && event_list_service_1.EventListService) === "function" && _o || Object, typeof (_p = typeof projection_service_1.ProjectionService !== "undefined" && projection_service_1.ProjectionService) === "function" && _p || Object, typeof (_q = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" && _q || Object, typeof (_r = typeof waze_service_1.WazeService !== "undefined" && waze_service_1.WazeService) === "function" && _r || Object, typeof (_s = typeof gps_service_1.GPSService !== "undefined" && gps_service_1.GPSService) === "function" && _s || Object, typeof (_t = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _t || Object, typeof (_u = typeof layers_service_1.LayersService !== "undefined" && layers_service_1.LayersService) === "function" && _u || Object, typeof (_v = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _v || Object])
    ], EventDetailsComponent);
    exports.EventDetailsComponent = EventDetailsComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-details.component.js.map

/***/ }),

/***/ "./src/app/events/event-list/event-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'event-list-wrapper'\">\r\n    <div [className]=\"'event-list-container'\" *ngIf=\"eventsList && eventsList.length > 0\">\r\n        <event-general-info *ngFor=\"let event of eventsList\" \r\n        [eventGeneralInfo]=\"event\"\r\n        (click)=\"navigate(routes.EVENT_DETAILS, event.eventId)\"></event-general-info> \r\n    </div>\r\n    <div [className]=\"'error-wrapper'\" *ngIf=\"!eventsList || eventsList.length == 0\">\r\n        <span [className]=\"'error'\">{{ content ? content.emptyEventsList : '' }}</span>\r\n    </div>\r\n</div>  "

/***/ }),

/***/ "./src/app/events/event-list/event-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/event-list/event-list.service.ts"), __webpack_require__("./src/app/shared-classes/request/event-list-request.ts"), __webpack_require__("./src/app/services/general/device.service.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/shared-classes/common/navigation-data.ts"), __webpack_require__("./src/app/shared-classes/event/event-details-types.ts"), __webpack_require__("./src/app/shared-classes/event/event-details-data.ts"), __webpack_require__("./src/app/services/event/current-event-details.service.ts"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/shared-classes/common/route-path.ts"), __webpack_require__("./src/app/shared-classes/common/base-component.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/general/reboot.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, event_list_service_1, event_list_request_1, device_service_1, home_service_1, navigation_service_1, navigation_data_1, event_details_types_1, event_details_data_1, current_event_details_service_1, map_state_service_1, route_path_1, base_component_1, content_service_1, reboot_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventListComponent = (function (_super) {
        __extends(EventListComponent, _super);
        function EventListComponent(eventListService, deviceService, homeService, navigationService, currentEventDetailsService, mapStateService, rebootService, contentService) {
            var _this = _super.call(this, contentService, "event-list") || this;
            _this.eventListService = eventListService;
            _this.deviceService = deviceService;
            _this.homeService = homeService;
            _this.navigationService = navigationService;
            _this.currentEventDetailsService = currentEventDetailsService;
            _this.mapStateService = mapStateService;
            _this.rebootService = rebootService;
            _this.contentService = contentService;
            _this.dotsCounter = 5;
            _this.routes = new route_path_1.RoutePath();
            _this.rebootFired = _this.rebootService.$rebootFired.subscribe(function () {
                _this.getActiveEvents();
            });
            return _this;
        }
        EventListComponent.prototype.ngOnInit = function () {
            this.mapStateService.changeMapState(false);
            this.getActiveEvents();
        };
        EventListComponent.prototype.ngOnDestroy = function () {
            this.rebootFired.unsubscribe();
        };
        EventListComponent.prototype.getActiveEvents = function () {
            var _this = this;
            var deviceId = this.deviceService.getDeviceId();
            this.homeService.getItem().then(function (response) {
                if (response.isSuccessWithResult()) {
                    var fireTruckData = response.data.fireTruckInfo;
                    _this.eventListService.getList(new event_list_request_1.EventListRequest(deviceId, fireTruckData.carInfo.positionStation.unionId)).then(function (res) {
                        if (res.isSuccessWithResult()) {
                            _this.eventsList = res.data;
                        }
                    });
                }
            });
        };
        EventListComponent.prototype.navigate = function (navigationUrl, eventId) {
            var eventType = event_details_types_1.EventDetailsTypes.CarRequest;
            if (this.currentEventDetailsService.isCurrentEventById(eventId)) {
                eventType = event_details_types_1.EventDetailsTypes.CurrentEvent;
            }
            var data = new event_details_data_1.EventDetailsData(eventId, eventType);
            this.navigationService.navigate(new navigation_data_1.NavigationData(navigationUrl, data));
        };
        return EventListComponent;
    }(base_component_1.BaseComponent));
    EventListComponent = __decorate([
        core_1.Component({
            selector: 'event-list',
            template: __webpack_require__("./src/app/events/event-list/event-list.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof event_list_service_1.EventListService !== "undefined" && event_list_service_1.EventListService) === "function" && _a || Object, typeof (_b = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" && _b || Object, typeof (_c = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _c || Object, typeof (_d = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _d || Object, typeof (_e = typeof current_event_details_service_1.CurrentEventDetailsService !== "undefined" && current_event_details_service_1.CurrentEventDetailsService) === "function" && _e || Object, typeof (_f = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _f || Object, typeof (_g = typeof reboot_service_1.RebootService !== "undefined" && reboot_service_1.RebootService) === "function" && _g || Object, typeof (_h = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _h || Object])
    ], EventListComponent);
    exports.EventListComponent = EventListComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-list.component.js.map

/***/ }),

/***/ "./src/app/events/prevent-fire/company-details/company-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'company-details-wrapper'\">\r\n    <div [className]=\"'details-cell'\">\r\n        <div [className]=\"'details-row'\">\r\n            <div [className]=\"'company-wrapper'\">\r\n                <span [className]=\"'company-name'\">{{ data.businessInfo.clientName }}</span>\r\n                <event-dots [dotsCounter]=\"dotsCounter\" [selectedDotsCounter]=\"data.category.categoryRiskId\"></event-dots>\r\n            </div>\r\n        <div [className]=\"'is-fire-wrapper'\">\r\n            <span [className]=\"'fire'\">{{ content['is-fire-text'] }}</span>\r\n            <span [className]=\"'is-fire'\">{{ data.isFireInPast ? content['yes'] : content['no'] }}</span>\r\n        </div>\r\n        </div>\r\n        <div [className]=\"'details-row last'\">\r\n            <span [className]=\"'address'\">{{ data.locationFullDesc }}</span>\r\n            <span [className]=\"'homas'\">{{ content['homas-text'] }}</span>\r\n            <span [className]=\"'is-homas'\">{{ data.isHomas ? content['yes'] : content['no'] }}</span>\r\n        </div>\r\n    </div>\r\n    <div [className]=\"'details-cell arrow'\">\r\n        <span class=\"image-sprite\" (click)=\"data.isOpen = !data.isOpen\"\r\n            [ngClass]=\"{ 'tab-icn-dd': data.isOpen, 'tab-icn-dd-up': !data.isOpen }\"></span>\r\n    </div>   \r\n</div> "

/***/ }),

/***/ "./src/app/events/prevent-fire/company-details/company-details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CompanyDetailsComponent = (function () {
        function CompanyDetailsComponent() {
            this.dotsCounter = 5;
        }
        return CompanyDetailsComponent;
    }());
    CompanyDetailsComponent = __decorate([
        core_1.Component({
            selector: 'company-details',
            template: __webpack_require__("./src/app/events/prevent-fire/company-details/company-details.component.html"),
            inputs: ['data', 'content']
        }),
        __metadata("design:paramtypes", [])
    ], CompanyDetailsComponent);
    exports.CompanyDetailsComponent = CompanyDetailsComponent;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=company-details.component.js.map

/***/ }),

/***/ "./src/app/events/prevent-fire/prevent-fire-details/prevent-fire-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'prevent-fire-details-wrapper'\">\r\n    <company-details [data]=\"prevention\" [content]=\"content\"></company-details>\r\n\r\n    <div *ngIf=\"prevention.isOpen\" [className]=\"'details-wrapper'\">\r\n        <div [className]=\"'main-contact'\" *ngFor=\"let contact of prevention.contacts\">\r\n            <div *ngIf=\"contact.isMain && contact.contactName\">\r\n                <span [className]=\"'contact-label'\">{{ content ? content['contact-text'] : '' }} </span>\r\n                <span [className]=\"'contact'\">\r\n                    {{ contact.contactName }} \r\n                    <span *ngIf=\"contact.contactTypeDesc\"> - {{ contact.contactTypeDesc }}</span>\r\n                </span>\r\n                <span [className]=\"'contact-label'\" *ngIf=\"contact.contactPhone\">{{ content ? content['contact-tel-text'] : '' }} </span>\r\n                <span [className]=\"'contact'\" *ngIf=\"contact.contactPhone\">{{ contact.contactPhone }} </span>\r\n            </div>\r\n        </div>\r\n\r\n        <prevention-table [data]=\"prevention.caseOperationInfos\" [content]=\"content\"></prevention-table>\r\n    </div>\r\n</div> "

/***/ }),

/***/ "./src/app/events/prevent-fire/prevent-fire-details/prevent-fire-details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PreventFireDetailsComponent = (function () {
        function PreventFireDetailsComponent() {
        }
        return PreventFireDetailsComponent;
    }());
    PreventFireDetailsComponent = __decorate([
        core_1.Component({
            selector: 'prevent-fire-details',
            template: __webpack_require__("./src/app/events/prevent-fire/prevent-fire-details/prevent-fire-details.component.html"),
            inputs: ['prevention', 'content']
        }),
        __metadata("design:paramtypes", [])
    ], PreventFireDetailsComponent);
    exports.PreventFireDetailsComponent = PreventFireDetailsComponent;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=prevent-fire-details.component.js.map

/***/ }),

/***/ "./src/app/events/prevent-fire/prevent-fire-item/prevent-fire-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'prevent-fire-item-wrapper'\" (click)=\"itemClicked()\">\r\n    <div [className]=\"'prevent-fire-row first'\">\r\n        <span [className]=\"'prevent-fire-address'\">\r\n            {{ data.fullAddressDesc }}\r\n            <span *ngIf=\"data.buildingName\">({{ data.buildingName }})</span>\r\n        </span>\r\n        <span [className]=\"'prevent-fire-type'\">{{ data.buildingTypeDesc }}</span>\r\n    </div>\r\n    <div [className]=\"'prevent-fire-row'\">\r\n        <span [className]=\"'prevent-fire-text'\">\r\n            {{ content['level-text'] }}\r\n        </span>\r\n        <span [className]=\"'prevent-fire-value prevent-fire-level'\"> \r\n             {{ data.maxCategoryRiskDesc }}\r\n        </span>\r\n        <span [className]=\"'prevent-fire-homas'\">\r\n            {{ content['homas-text'] }}\r\n        </span>\r\n        <span [className]=\"'prevent-fire-value last'\"> \r\n            {{ data.isContainHomas ? content['yes'] : content['no'] }}\r\n        </span>\r\n    </div>\r\n    <div [className]=\"'prevent-fire-row'\">\r\n            <span [className]=\"'prevent-fire-text'\">\r\n                {{ content['floor-text'] }}\r\n            </span>\r\n            <span [className]=\"'prevent-fire-value'\"> \r\n                 {{ data.numberOfFloors }}\r\n            </span>\r\n            <span [className]=\"'prevent-fire-homas'\">\r\n                {{ content['is-fire-text'] }}\r\n            </span>\r\n            <span [className]=\"'prevent-fire-value last'\"> \r\n                {{ data.isFireInPast ? content['yes'] : content['no'] }}\r\n            </span>\r\n        </div>\r\n</div> "

/***/ }),

/***/ "./src/app/events/prevent-fire/prevent-fire-item/prevent-fire-item.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PreventFireItemComponent = (function () {
        function PreventFireItemComponent() {
            this.onItemClicked = new core_1.EventEmitter();
        }
        PreventFireItemComponent.prototype.itemClicked = function () {
            this.onItemClicked.emit(this.data);
        };
        return PreventFireItemComponent;
    }());
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
    ], PreventFireItemComponent.prototype, "onItemClicked", void 0);
    PreventFireItemComponent = __decorate([
        core_1.Component({
            selector: 'prevent-fire-item',
            template: __webpack_require__("./src/app/events/prevent-fire/prevent-fire-item/prevent-fire-item.component.html"),
            inputs: ['data', 'content']
        }),
        __metadata("design:paramtypes", [])
    ], PreventFireItemComponent);
    exports.PreventFireItemComponent = PreventFireItemComponent;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=prevent-fire-item.component.js.map

/***/ }),

/***/ "./src/app/events/prevent-fire/prevent-fire.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'prevent-fire-wrapper'\">\r\n    <div [className]=\"'prevent-fire'\">\r\n        <div [className]=\"'prevent-fire-list'\">\r\n            <div *ngIf=\"preventFireModel != null && preventFireModel.aroundEventBuildings && preventFireModel.aroundEventBuildings.length > 0 && content\">\r\n                <div *ngFor=\"let item of preventFireModel.aroundEventBuildings\" class=\"item\" [ngClass]=\"{ 'selected' : selectedItem.buildingId == item.buildingId }\">\r\n                    <prevent-fire-item [data]=\"item\" [content]=\"content\" (onItemClicked)=\"itemClicked($event)\"></prevent-fire-item>\r\n                </div>\r\n            </div>\r\n            <div [className]=\"'error-wrapper'\"  *ngIf=\"preventFireModel == null || preventFireModel.aroundEventBuildings == null || preventFireModel.aroundEventBuildings.length == 0\">\r\n                <span [className]=\"'error'\">{{ content ? content['no-items'] : '' }}</span>\r\n            </div>\r\n        </div>        \r\n        <div [className]=\"'prevent-fire-details'\">\r\n            <div *ngIf=\"preventionDetailsList && preventionDetailsList.length > 0\">\r\n                <div *ngFor=\"let prevention of preventionDetailsList\" class=\"details-wrapper\">\r\n                    <prevent-fire-details [prevention]=\"prevention\" [content]=\"content\"></prevent-fire-details>\r\n                </div>\r\n            </div>            \r\n            <div [className]=\"'error-wrapper'\"  *ngIf=\"preventionDetailsList == null || preventionDetailsList.length == 0\">\r\n                <span [className]=\"'error'\">{{ content ? content['no-details'] : '' }}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> "

/***/ }),

/***/ "./src/app/events/prevent-fire/prevent-fire.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/event/current-event-details.service.ts"), __webpack_require__("./src/app/shared-classes/common/menu-types.ts"), __webpack_require__("./src/app/shared-classes/common/detailsbar-types.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/event/event-details.service.ts"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/services/prevent-fire/prevent-fire.service.ts"), __webpack_require__("./src/app/shared-classes/request/prevent-fire-request.ts"), __webpack_require__("./src/app/shared-classes/request/prevention-details-request.ts"), __webpack_require__("./src/app/shared-classes/common/base-component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, current_event_details_service_1, menu_types_1, detailsbar_types_1, navigation_service_1, content_service_1, event_details_service_1, map_state_service_1, prevent_fire_service_1, prevent_fire_request_1, prevention_details_request_1, base_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PreventFireComponent = (function (_super) {
        __extends(PreventFireComponent, _super);
        function PreventFireComponent(navigationService, currentEventDetailsService, eventDetailsService, preventFireService, contentService, mapStateService) {
            var _this = _super.call(this, contentService, 'prevent-fire') || this;
            _this.navigationService = navigationService;
            _this.currentEventDetailsService = currentEventDetailsService;
            _this.eventDetailsService = eventDetailsService;
            _this.preventFireService = preventFireService;
            _this.menuType = menu_types_1.menuTypes.nomenu;
            _this.detailsbarType = detailsbar_types_1.detailsbarTypes.minimizeEvent;
            mapStateService.changeMapState(false);
            _this.preventionDetailsList = new Array();
            var data = navigationService.getNavigationData();
            var request = new prevent_fire_request_1.PreventFireRequest(data.eventId);
            _this.preventFireService.getPreventionInfo(request).then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.preventFireModel = response.data;
                    if (_this.preventFireModel.aroundEventBuildings && _this.preventFireModel.aroundEventBuildings.length > 0) {
                        _this.selectedItem = _this.preventFireModel.aroundEventBuildings[0];
                        _this.preventionDetailsList = _this.preventFireModel.selectedBuildingCaseList;
                    }
                }
            });
            return _this;
        }
        PreventFireComponent.prototype.itemClicked = function (item) {
            this.selectedItem = item;
            this.getDetailsList();
        };
        PreventFireComponent.prototype.getDetailsList = function () {
            var _this = this;
            if (this.selectedItem == null) {
                return;
            }
            this.preventFireService.getPreventionDetails(new prevention_details_request_1.PreventionDetailsRequest(this.selectedItem.buildingId)).then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.preventionDetailsList = response.data;
                }
            });
        };
        return PreventFireComponent;
    }(base_component_1.BaseComponent));
    PreventFireComponent = __decorate([
        core_1.Component({
            selector: 'prevent-fire-model',
            template: __webpack_require__("./src/app/events/prevent-fire/prevent-fire.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _a || Object, typeof (_b = typeof current_event_details_service_1.CurrentEventDetailsService !== "undefined" && current_event_details_service_1.CurrentEventDetailsService) === "function" && _b || Object, typeof (_c = typeof event_details_service_1.EventDetailsService !== "undefined" && event_details_service_1.EventDetailsService) === "function" && _c || Object, typeof (_d = typeof prevent_fire_service_1.PreventFireService !== "undefined" && prevent_fire_service_1.PreventFireService) === "function" && _d || Object, typeof (_e = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _e || Object, typeof (_f = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _f || Object])
    ], PreventFireComponent);
    exports.PreventFireComponent = PreventFireComponent;
    var _a, _b, _c, _d, _e, _f;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=prevent-fire.component.js.map

/***/ }),

/***/ "./src/app/events/prevent-fire/prevention-table/prevention-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'prevention-wrapper'\" *ngIf=\"data.length > 0\">\r\n    <div [className]=\"'prevention-cell'\"  *ngFor=\"let item of data\">\r\n        <span  [className]=\"'prevention-desc'\">{{ item.infoTypeDesc }}</span>\r\n        <span [className]=\"'prevention-val'\">{{ item.infoDesc }}</span>\r\n    </div>\r\n</div>\r\n<div [className]=\"'error-wrapper'\"   *ngIf=\"data.length == 0\">\r\n    <span [className]=\"'error'\">{{ content ? content['no-details'] : '' }}</span>\r\n</div> "

/***/ }),

/***/ "./src/app/events/prevent-fire/prevention-table/prevention-table.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PreventionTableComponent = (function () {
        function PreventionTableComponent() {
        }
        return PreventionTableComponent;
    }());
    PreventionTableComponent = __decorate([
        core_1.Component({
            selector: 'prevention-table',
            template: __webpack_require__("./src/app/events/prevent-fire/prevention-table/prevention-table.component.html"),
            inputs: ['data', 'content']
        }),
        __metadata("design:paramtypes", [])
    ], PreventionTableComponent);
    exports.PreventionTableComponent = PreventionTableComponent;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=prevention-table.component.js.map

/***/ }),

/***/ "./src/app/images/Sprite.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Sprite.910774ba112cf1dea974.png";

/***/ }),

/***/ "./src/app/images/map-icons.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "map-icons.c17585ccd497fe691e5d.png";

/***/ }),

/***/ "./src/app/layouts/default-layout/default-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"default-layout\" [ngClass]=\"additionalClass\">\r\n    <div [className]=\"'detailsbar-wrapper'\">\r\n        <detailsbar [menuType]='menuType' \r\n        [detailsbarType]='detailsbarType'\r\n        [data]='navigationData'></detailsbar>\r\n    </div>\r\n\r\n    <router-outlet (activate)=\"componentAdded($event)\"></router-outlet>   \r\n    \r\n    <current-event [event]=\"currentEvent\" *ngIf=\"currentEvent && !navigationData.isCurrentEventHide\"></current-event>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layouts/default-layout/default-layout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/common/detailsbar-types.ts"), __webpack_require__("./src/app/shared-classes/common/menu-types.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/services/navigation/mapping-navigation-data.service.ts"), __webpack_require__("./src/app/services/event/current-event-details.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, detailsbar_types_1, menu_types_1, navigation_service_1, mapping_navigation_data_service_1, current_event_details_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DefaultLayoutComponent = (function () {
        function DefaultLayoutComponent(navigationService, navDataService, currentEventDetailsService) {
            var _this = this;
            this.navigationService = navigationService;
            this.navDataService = navDataService;
            this.currentEventDetailsService = currentEventDetailsService;
            this.menuType = menu_types_1.menuTypes.nomenu;
            this.detailsbarType = detailsbar_types_1.detailsbarTypes.default;
            this.currentEventAdded = this.currentEventDetailsService.$currentEventAddedEmitter.subscribe(function (event) {
                _this.currentEvent = event.generalInfo;
            });
            this.currentEventRemoved = this.currentEventDetailsService.$currentEventRemovedEmitter.subscribe(function (event) {
                _this.currentEvent = null;
            });
        }
        DefaultLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.currentEventDetailsService.getItem().then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.currentEvent = response.data.generalInfo;
                }
            });
        };
        DefaultLayoutComponent.prototype.ngOnDestroy = function () {
            this.currentEventAdded.unsubscribe();
            this.currentEventRemoved.unsubscribe();
        };
        DefaultLayoutComponent.prototype.componentAdded = function () {
            var router = this.navigationService.getRouter();
            this.navigationData = this.navDataService.getNavDataByRouteUrl(router.url);
            if (this.navigationData.hasOwnProperty("parentClass")) {
                this.additionalClass = this.navigationData.parentClass;
            }
            if (this.navigationData.hasOwnProperty("detailsbarType")) {
                this.detailsbarType = this.navigationData.detailsbarType;
            }
            if (this.navigationData.hasOwnProperty("menuType")) {
                this.menuType = this.navigationData.menuType;
            }
        };
        return DefaultLayoutComponent;
    }());
    DefaultLayoutComponent = __decorate([
        core_1.Component({
            selector: 'default-layout',
            template: __webpack_require__("./src/app/layouts/default-layout/default-layout.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _a || Object, typeof (_b = typeof mapping_navigation_data_service_1.MappingNavigationDataService !== "undefined" && mapping_navigation_data_service_1.MappingNavigationDataService) === "function" && _b || Object, typeof (_c = typeof current_event_details_service_1.CurrentEventDetailsService !== "undefined" && current_event_details_service_1.CurrentEventDetailsService) === "function" && _c || Object])
    ], DefaultLayoutComponent);
    exports.DefaultLayoutComponent = DefaultLayoutComponent;
    var _a, _b, _c;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=default-layout.component.js.map

/***/ }),

/***/ "./src/app/layouts/home-layout/home-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'home-layout'\">\r\n\r\n    <div [className]=\"'detailsbar-wrapper'\">\r\n            <detailsbar [menuType]='detailsbarMenuType' \r\n            [detailsbarType]='detailsbarType'\r\n            [data]='homeData'></detailsbar>\r\n    </div>\r\n\r\n    <span [className]=\"'image-sprite background-image'\"></span> \r\n\r\n    <div [className]=\"'menu-wrapper'\">\r\n        <menu [menuType]='homeMenuType' [data]='homeData ? homeData.numberOfActiveEvents : 0'></menu>\r\n    </div>\r\n    <current-event [event]=\"currentEvent\" *ngIf=\"currentEvent\"></current-event>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layouts/home-layout/home-layout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/common/menu-types.ts"), __webpack_require__("./src/app/shared-classes/common/detailsbar-types.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/services/event/current-event-details.service.ts"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/shared-classes/common/base-component.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/general/reboot.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, menu_types_1, detailsbar_types_1, home_service_1, current_event_details_service_1, map_state_service_1, base_component_1, content_service_1, reboot_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HomeLayoutComponent = (function (_super) {
        __extends(HomeLayoutComponent, _super);
        function HomeLayoutComponent(homeService, currentEventDetailsService, mapStateService, rebootService, contentService) {
            var _this = _super.call(this, contentService, 'home-page') || this;
            _this.homeService = homeService;
            _this.currentEventDetailsService = currentEventDetailsService;
            _this.mapStateService = mapStateService;
            _this.rebootService = rebootService;
            _this.detailsbarMenuType = menu_types_1.menuTypes.nomenu;
            _this.homeMenuType = menu_types_1.menuTypes.home;
            _this.detailsbarType = detailsbar_types_1.detailsbarTypes.home;
            _this.currentEventAdded = _this.currentEventDetailsService.$currentEventAddedEmitter.subscribe(function (event) {
                _this.currentEvent = event.generalInfo;
            });
            _this.currentEventRemoved = _this.currentEventDetailsService.$currentEventRemovedEmitter.subscribe(function (event) {
                _this.currentEvent = null;
            });
            _this.rebootFired = _this.rebootService.$rebootFired.subscribe(function (event) {
                _this.getHomePageModel();
            });
            return _this;
        }
        HomeLayoutComponent.prototype.ngOnInit = function () {
            this.mapStateService.changeMapState(false);
            this.getHomePageModel();
        };
        HomeLayoutComponent.prototype.ngOnDestroy = function () {
            this.currentEventAdded.unsubscribe();
            this.currentEventRemoved.unsubscribe();
            this.rebootFired.unsubscribe();
        };
        HomeLayoutComponent.prototype.getHomePageModel = function () {
            var _this = this;
            this.homeService.getItem().then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.homeData = response.data;
                    if (response.data.fireTruckInfo.activeAtEvent) {
                        _this.currentEventDetailsService.addItem(_this.homeData.fireTruckInfo.activeAtEvent, false);
                        _this.currentEvent = _this.homeData.fireTruckInfo.activeAtEvent.generalInfo;
                    }
                    else {
                        _this.currentEventDetailsService.getItem().then(function (res) {
                            if (res.isSuccessWithResult()) {
                                _this.currentEvent = res.data.generalInfo;
                            }
                        });
                    }
                }
            });
        };
        return HomeLayoutComponent;
    }(base_component_1.BaseComponent));
    HomeLayoutComponent = __decorate([
        core_1.Component({
            selector: 'home-layout',
            template: __webpack_require__("./src/app/layouts/home-layout/home-layout.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _a || Object, typeof (_b = typeof current_event_details_service_1.CurrentEventDetailsService !== "undefined" && current_event_details_service_1.CurrentEventDetailsService) === "function" && _b || Object, typeof (_c = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _c || Object, typeof (_d = typeof reboot_service_1.RebootService !== "undefined" && reboot_service_1.RebootService) === "function" && _d || Object, typeof (_e = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _e || Object])
    ], HomeLayoutComponent);
    exports.HomeLayoutComponent = HomeLayoutComponent;
    var _a, _b, _c, _d, _e;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=home-layout.component.js.map

/***/ }),

/***/ "./src/app/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'logs-list'\">\r\n    <div [className]=\"'logs-container'\" *ngIf=\"logs && logs.length > 0\">\r\n        <div [className]=\"'logs-actions'\">     \r\n            <i class=\"glyphicon glyphicon-trash delete\" (click)=\"deleteAll()\"></i>\r\n        </div>\r\n        <div *ngFor=\"let log of logs\" [className]=\"'log-row'\">\r\n            <span [className]=\"'log-time'\">{{ log.timeStamp }}</span>            \r\n            <span [className]=\"'log-desc'\">{{ log.logDesc }}</span>\r\n            <span [className]=\"'log-type'\">{{ log.logTypeDesc }}</span>\r\n            <div>\r\n                <span [className]=\"'label'\">{{ content ? content.logSource : '' }} : </span>\r\n                <span [className]=\"'log-source'\">{{ log.source }}</span>\r\n            </div>\r\n            <div>\r\n                <span [className]=\"'label'\">{{ content ? content.logMessage : '' }} : </span>\r\n                <span [className]=\"'log-message'\">{{ log.message }}</span>\r\n            </div>\r\n        </div> \r\n    </div>\r\n    <div [className]=\"'error-wrapper'\" *ngIf=\"!logs || logs.length == 0\">\r\n        <span [className]=\"'error'\">{{ content ? content.emptyLogs : '' }}</span>\r\n    </div>\r\n</div>  "

/***/ }),

/***/ "./src/app/logs/logs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/common/base-component.ts"), __webpack_require__("./src/app/services/general/log.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, base_component_1, log_service_1, content_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogsComponent = (function (_super) {
        __extends(LogsComponent, _super);
        function LogsComponent(logService, contentService) {
            var _this = _super.call(this, contentService, "logs") || this;
            _this.logService = logService;
            _this.contentService = contentService;
            _this.logs = new Array();
            return _this;
        }
        LogsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.logService.getList().then(function (response) {
                _this.logs = response.data;
            });
        };
        LogsComponent.prototype.deleteAll = function () {
            this.logService.clearList();
            this.logs = new Array();
        };
        return LogsComponent;
    }(base_component_1.BaseComponent));
    LogsComponent = __decorate([
        core_1.Component({
            selector: 'logs',
            template: __webpack_require__("./src/app/logs/logs.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _a || Object, typeof (_b = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _b || Object])
    ], LogsComponent);
    exports.LogsComponent = LogsComponent;
    var _a, _b;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=logs.component.js.map

/***/ }),

/***/ "./src/app/quick-report/quick-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'quick-report-wrapper'\">\r\n    <input [value]=\"newReport\" (input)=\"newReport = $event.target.value\"  placeholder=\"{{ content ? content.manualReportInput : '' }}\"/>\r\n    <div [className]=\"'error-wrapper'\">\r\n        <span [className]=\"'error-star'\" *ngIf=\"!isReasonValid\">*</span>\r\n        <span [className]=\"'notification'\" *ngIf=\"!isReasonValid\">{{ content ? content.required : '' }}</span>\r\n    </div>\r\n    <div [className]=\"'button-wrapper'\" (click)=\"customReport()\">\r\n        <span [className]=\"'image-sprite popup-icn-send1'\"></span>\r\n    </div>\r\n    <div [className]=\"'menu-wrapper'\">\r\n        <menu [menuType]='menuType'></menu>\r\n    </div>    \r\n</div>  \r\n"

/***/ }),

/***/ "./src/app/quick-report/quick-report.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/common/menu-types.ts"), __webpack_require__("./src/app/services/quick-report/quick-report.service.ts"), __webpack_require__("./src/app/shared-classes/quick-report/quick-report-types.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/shared-classes/common/base-component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, menu_types_1, quick_report_service_1, quick_report_types_1, content_service_1, navigation_service_1, base_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QuickReportComponent = (function (_super) {
        __extends(QuickReportComponent, _super);
        function QuickReportComponent(quickReportService, navigationService, contentService) {
            var _this = _super.call(this, contentService, 'supplies') || this;
            _this.quickReportService = quickReportService;
            _this.navigationService = navigationService;
            _this.newReport = '';
            _this.menuType = menu_types_1.menuTypes.quickReport;
            _this.isReasonValid = true;
            return _this;
        }
        QuickReportComponent.prototype.customReport = function () {
            var _this = this;
            this.isReasonValid = true;
            if (!this.newReport || this.newReport.trim() == '') {
                this.isReasonValid = false;
                return;
            }
            var data = this.navigationService.getNavigationData();
            this.quickReportService.sendQuickReport(data.eventId, quick_report_types_1.QuickReportTypes.Custom, this.newReport).then(function (response) {
                if (response.isSuccess()) {
                    _this.navigationService.goBack();
                }
            });
        };
        QuickReportComponent.prototype.ngOnInit = function () {
        };
        return QuickReportComponent;
    }(base_component_1.BaseComponent));
    QuickReportComponent = __decorate([
        core_1.Component({
            selector: 'quick-report',
            template: __webpack_require__("./src/app/quick-report/quick-report.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof quick_report_service_1.QuickReportService !== "undefined" && quick_report_service_1.QuickReportService) === "function" && _a || Object, typeof (_b = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _b || Object, typeof (_c = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _c || Object])
    ], QuickReportComponent);
    exports.QuickReportComponent = QuickReportComponent;
    var _a, _b, _c;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=quick-report.component.js.map

/***/ }),

/***/ "./src/app/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'report-wrapper'\">    \r\n    <div [className]=\"'tables-wrapper'\">\r\n        <div [className]=\"'table odd owner-table'\">\r\n            <div [className]=\"'header'\">{{ content ? content['owner-header'] : '' }}</div>\r\n            <div [className]=\"'body'\">\r\n                <designed-select \r\n                    [selectedValue]=\"ownerTypeSelected\"\r\n                    (onValueChange)=\"ownerValueChanged($event)\" \r\n                    [watermark]=\"content.ownerTypePlaceholder\" \r\n                    [dataList]=\"ownerTypeList\">\r\n                </designed-select>\r\n                <input placeholder=\"{{ content ? content.idPlaceholder : '' }}\"\r\n                    [value]=\"this.reportData.relatedBusiness.TZ_HP\" \r\n                    (input)=\"this.reportData.relatedBusiness.TZ_HP = $event.target.value\" \r\n                    maxlength=\"10\"/>\r\n                <input placeholder=\"{{ content ? content.namePlaceholder : '' }}\"\r\n                    [value]=\"reportData.relatedBusiness.name ? reportData.relatedBusiness.name : ''\" \r\n                    (input)=\"reportData.relatedBusiness.name = $event.target.value\" maxlength=\"50\"/>\r\n                <input placeholder=\"{{ content ? content.phonePlaceholder : '' }}\" \r\n                    [value]=\"reportData.relatedBusiness.phone ? reportData.relatedBusiness.phone : ''\" \r\n                    (input)=\"reportData.relatedBusiness.phone = $event.target.value\" maxlength=\"20\"/>\r\n                <textarea placeholder=\"{{ content ? content.notes : '' }}\"\r\n                    [value]=\"reportData.relatedBusiness.remarks ? reportData.relatedBusiness.remarks : ''\" \r\n                    (input)=\"reportData.relatedBusiness.remarks = $event.target.value\" maxlength=\"100\" ></textarea>\r\n            </div>\r\n        </div>\r\n        <div [className]=\"'table location-table'\">\r\n            <div [className]=\"'header'\">{{ content ? content['details-header'] : '' }}</div>\r\n            <div [className]=\"'body'\">\r\n                <sac [placeholder]=\"content ? content.eventTypePlaceholder : ''\" \r\n                    [search]=\"eventTypeSearch\" \r\n                    (onValueSelected)=\"eventTypeSelected($event)\"\r\n                    [data]=\"eventTypeList\"\r\n                    [selectedItem]=\"selectedEventType\"\r\n                    [searchcolumn]=\"'text'\"></sac>\r\n                <designed-select \r\n                    (onValueChange)=\"byValueChanged($event)\" \r\n                    [selectedValue]=\"byTypeSelected\"\r\n                    [dataList]=\"byTypeList\">\r\n                </designed-select>\r\n                <div *ngIf=\"byTypeSelected\">\r\n                    <div [ngSwitch]=\"byTypeSelected.value\">\r\n                        <div *ngSwitchCase=\"1\">\r\n                            <sac [placeholder]=\"content ? content.cityPlaceholder : ''\" \r\n                                [search]=\"citySearch\" \r\n                                [data]=\"cityList\"\r\n                                [selectedItem]=\"selectedCity\"\r\n                                (onValueSelected)=\"citySelected($event)\"\r\n                                [searchcolumn]=\"'text'\"></sac>\r\n                            <sac [placeholder]=\"content ? content.streetPlaceholder : ''\" \r\n                                [search]=\"streetSearch\" \r\n                                [data]=\"streetList\"\r\n                                [searchcolumn]=\"'text'\"\r\n                                [selectedItem]=\"selectedStreet\"\r\n                                (onValueSelected)=\"streetSelected($event)\"\r\n                                [isDisabled]=\"!selectedCity.value\"></sac>\r\n                            <div [className]=\"'inputs-row'\">\r\n                                <div [className]=\"'small-input small-input-wrapper'\">    \r\n                                    <sac [placeholder]=\"content ? content.numberPlaceholder : ''\" \r\n                                        [search]=\"streetNumberSearch\" \r\n                                        [data]=\"streetNumberList\"\r\n                                        [searchcolumn]=\"'text'\"\r\n                                        (onValueSelected)=\"streetNumberSelected($event)\"\r\n                                        [selectedItem]=\"selectedStreetNumber\"\r\n                                        [isDisabled]=\"!selectedStreet.value\"></sac>\r\n                                </div>  \r\n                                <input [className]=\"'small-input'\" \r\n                                    placeholder=\"{{ content ? content.entrencePlaceholder : '' }}\" \r\n                                    [value]=\"reportData.actualEventLocation.homeEntry\" \r\n                                    (input)=\"reportData.actualEventLocation.homeEntry = $event.target.value\" \r\n                                    maxlength=\"10\"/>\r\n                                <input type=\"number\"\r\n                                    [className]=\"'small-input last'\" \r\n                                    placeholder=\"{{ content ? content.apartPlaceholder : '' }}\" \r\n                                    [value]=\"reportData.actualEventLocation.flatNumber\" \r\n                                    (input)=\"reportData.actualEventLocation.flatNumber = $event.target.value\" \r\n                                    maxlength=\"10\"/>\r\n                                <span [className]=\"'input-error'\" *ngIf=\"!isFlatValid()\" >{{ content ? content.numberError : '' }}</span>\r\n                            </div>\r\n                            <div [className]=\"'inputs-row'\">\r\n                                <input type=\"number\"\r\n                                    [className]=\"'small-input'\" \r\n                                    placeholder=\"{{ content ? content.floorPlaceholder : '' }}\" \r\n                                    [value]=\"reportData.actualEventLocation.floorNumber\" \r\n                                    (input)=\"reportData.actualEventLocation.floorNumber = $event.target.value\" \r\n                                    maxlength=\"10\"/>\r\n                                <input type=\"number\"\r\n                                    [className]=\"'small-input'\" \r\n                                    placeholder=\"{{ content ? content.maxFloorPlaceholder : '' }}\" \r\n                                    [value]=\"reportData.actualEventLocation.numberOfFloors\" \r\n                                    (input)=\"reportData.actualEventLocation.numberOfFloors = $event.target.value\" \r\n                                    maxlength=\"10\"/>\r\n                                \r\n                                <span [className]=\"'input-error floor-number'\" *ngIf=\"!isFloorValid()\">{{ content ? content.numberError : '' }}</span>\r\n                                <span [className]=\"'input-error number-of-floors'\" *ngIf=\"!isNumberOfFloors()\">{{ content ? content.numberError : '' }}</span>\r\n                                <span [className]=\"'input-error floor-number'\" *ngIf=\"isFloorValid() && isNumberOfFloors() && !isFloorsValid()\">{{ content ? content.floorsError : '' }}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngSwitchCase=\"4\">\r\n                            <sac [placeholder]=\"content ? content.cityPlaceholder : ''\" \r\n                                [search]=\"citySearch\" \r\n                                [data]=\"cityList\"\r\n                                (onValueSelected)=\"citySelected($event)\"\r\n                                [selectedItem]=\"selectedCity\"\r\n                                [searchcolumn]=\"'text'\">\r\n                            </sac>\r\n                            <div [className]=\"'small-input small-input-wrapper'\">    \r\n                                <sac [placeholder]=\"content ? content.roadPlaceholder : ''\" \r\n                                    [search]=\"roadSearch\" \r\n                                    [selectedItem]=\"selectedRoad\"\r\n                                    [data]=\"roadList\"\r\n                                    (onValueSelected)=\"roadSelected($event)\"\r\n                                    [searchcolumn]=\"'text'\"\r\n                                    [isDisabled]=\"!selectedCity.value\">\r\n                                </sac>\r\n                            </div>  \r\n                            <div [className]=\"'small-input small-input-wrapper'\">    \r\n                                <sac [placeholder]=\"content ? content.roadMilePlaceholder : ''\" \r\n                                    [search]=\"roadMileSearch\" \r\n                                    [selectedItem]=\"selectedRoadMile\"\r\n                                    [data]=\"roadMileList\"\r\n                                    (onValueSelected)=\"roadMileSelected($event)\"\r\n                                    [searchcolumn]=\"'text'\"\r\n                                    [isDisabled]=\"!selectedRoad.value\">\r\n                                </sac>\r\n                            </div>                       \r\n                        </div>\r\n                        <div *ngSwitchCase=\"3\">\r\n                            <sac [placeholder]=\"content ? content.junctionPlaceholder : ''\" \r\n                                [search]=\"junctionSearch\" \r\n                                [selectedItem]=\"selectedJunction\"\r\n                                [data]=\"junctionList\"\r\n                                (onValueSelected)=\"junctionSelected($event)\"\r\n                                [searchcolumn]=\"'text'\">\r\n                            </sac>                     \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div [className]=\"'table odd'\">\r\n            <div [className]=\"'header'\">{{ content ? content['desc-header'] : '' }}</div>\r\n            <div [className]=\"'body'\">\r\n                <textarea [className]=\"'desc'\" placeholder=\"{{ content ? content.descPlaceholder : '' }}\"\r\n                [value]=\"reportData.eventCommanderReportRemarks\" (input)=\"reportData.eventCommanderReportRemarks = $event.target.value\" maxlength=\"2000\" ></textarea>\r\n            </div>\r\n        </div>\r\n        <div [className]=\"'table'\">\r\n            <div [className]=\"'header'\">{{ content ? content['outcomes-header'] : '' }}</div>\r\n            <div [className]=\"'body'\">\r\n                <designed-select  \r\n                    [className]=\"'outcome'\" \r\n                    (onValueChange)=\"outcomeValueChanged($event)\" \r\n                    [watermark]=\"content.outcomeTypePlaceholder\" \r\n                    [selectedValue]=\"outcomeTypeSelected\"\r\n                    [dataList]=\"outcomeTypeList\"></designed-select>\r\n                <textarea placeholder=\"{{ content ? content.notes : '' }}\"\r\n                    [value]=\"reportData.reportRemarks\" (input)=\"reportData.reportRemarks = $event.target.value\" maxlength=\"100\" ></textarea>\r\n                <textarea placeholder=\"{{ content ? content.burnedThingsPlaceholder : '' }}\"\r\n                    [value]=\"reportData.burnedContent\" (input)=\"reportData.burnedContent = $event.target.value\" maxlength=\"100\" ></textarea>\r\n                <input placeholder=\"{{ content ? content.burnedAreaPlaceholder : '' }}\" \r\n                    [value]=\"reportData.areaDamage\" (input)=\"reportData.areaDamage = $event.target.value\" maxlength=\"7\"/>\r\n            </div>\r\n        </div>\r\n        <div [className]=\"'table odd bottom'\">\r\n            <div [className]=\"'header'\">{{ content ? content['injured-header'] : '' }}</div>\r\n            <div [className]=\"'body inputs-row'\">\r\n              <span [className]=\"'injured-cell'\">{{ content ? content['injured-level'] : '' }}</span>\r\n              <span [className]=\"'injured-cell fireman-cell'\">{{ content ? content['injured-fireman'] : '' }}</span>\r\n              <span [className]=\"'injured-cell civilian-cell'\">{{ content ? content['injured-civilian'] : '' }}</span>\r\n\r\n              <div [className]=\"'inputs-row'\">\r\n                <span [className]=\"'injured-cell'\">{{ content ? content['injured-light'] : '' }}</span>\r\n                <input type=\"number\" [className]=\"'injured-input'\" [value]=\"reportData.eventInjured.employeeLight\" (input)=\"reportData.eventInjured.employeeLight = $event.target.value\" maxlength=\"10\"/>\r\n                <input type=\"number\" [className]=\"'injured-input'\" [value]=\"reportData.eventInjured.otherLight\" (input)=\"reportData.eventInjured.otherLight = $event.target.value\" maxlength=\"10\"/>\r\n\r\n                <span [className]=\"'input-error employee-error'\" *ngIf=\"!isEmployeeLightValid()\">{{ content ? content.numberError : '' }}</span>\r\n                <span [className]=\"'input-error other-error'\" *ngIf=\"!isOtherLightValid()\">{{ content ? content.numberError : '' }}</span>\r\n              </div>\r\n              <div [className]=\"'inputs-row'\">\r\n                <span [className]=\"'injured-cell'\">{{ content ? content['injured-middle'] : '' }}</span>\r\n                <input type=\"number\" [className]=\"'injured-input'\" [value]=\"reportData.eventInjured.employeeMedium\" (input)=\"reportData.eventInjured.employeeMedium = $event.target.value\" maxlength=\"10\"/>\r\n                <input type=\"number\" [className]=\"'injured-input'\" [value]=\"reportData.eventInjured.otherMedium\" (input)=\"reportData.eventInjured.otherMedium = $event.target.value\" maxlength=\"10\"/>\r\n\r\n                <span [className]=\"'input-error employee-error'\" *ngIf=\"!isEmployeeMediumValid()\">{{ content ? content.numberError : '' }}</span>\r\n                <span [className]=\"'input-error other-error'\" *ngIf=\"!isOtherMediumValid()\">{{ content ? content.numberError : '' }}</span>\r\n              </div>    \r\n              <div [className]=\"'inputs-row'\">\r\n                <span [className]=\"'injured-cell'\">{{ content ? content['injured-hard'] : '' }}</span>\r\n                <input type=\"number\" [className]=\"'injured-input'\" [value]=\"reportData.eventInjured.employeeDifficult\" (input)=\"reportData.eventInjured.employeeDifficult = $event.target.value\" maxlength=\"10\"/>\r\n                <input type=\"number\" [className]=\"'injured-input'\" [value]=\"reportData.eventInjured.otherDifficult\" (input)=\"reportData.eventInjured.otherDifficult = $event.target.value\" maxlength=\"10\"/>\r\n\r\n                <span [className]=\"'input-error employee-error'\" *ngIf=\"!isEmployeeDifficultValid()\">{{ content ? content.numberError : '' }}</span>\r\n                <span [className]=\"'input-error other-error'\" *ngIf=\"!isOtherDifficultValid()\">{{ content ? content.numberError : '' }}</span>\r\n              </div>    \r\n              <div [className]=\"'inputs-row'\">\r\n                <span [className]=\"'injured-cell'\">{{ content ? content['injured-death'] : '' }}</span>\r\n                <input type=\"number\" [className]=\"'injured-input'\" [value]=\"reportData.eventInjured.employeeKilled\" (input)=\"reportData.eventInjured.employeeKilled = $event.target.value\" maxlength=\"10\"/>\r\n                <input type=\"number\" [className]=\"'injured-input'\" [value]=\"reportData.eventInjured.otherKilled\" (input)=\"reportData.eventInjured.otherKilled = $event.target.value\" maxlength=\"10\"/>\r\n\r\n                <span [className]=\"'input-error employee-error'\" *ngIf=\"!isEmployeeKilledValid()\">{{ content ? content.numberError : '' }}</span>\r\n                <span [className]=\"'input-error other-error'\" *ngIf=\"!isOtherKilledValid()\">{{ content ? content.numberError : '' }}</span>\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div [className]=\"'table bottom'\">\r\n            <div [className]=\"'header'\">{{ content ? content['ustage-header'] : '' }}</div>\r\n            <div [className]=\"'body used-equipment'\">\r\n                <button [className]=\"'add-used-equipment'\" (click)=\"addUsedEquipment()\">\r\n                    <span [className]=\"btn-text\">{{ content ? content['add-button'] : '' }}</span>\r\n                    <span [className]=\"'icn-dd-small image-sprite'\"></span>\r\n                </button>\r\n\r\n                <div [className]=\"'used-equipment-wrapper'\">\r\n                    <div *ngFor=\"let item of reportData.reportEquipments; let index=index;\"> \r\n                        <used-equipment \r\n                            [dataList]=\"usedEquipmentList\" \r\n                            [dataSearch]=\"usedEquipmentSearch\" \r\n                            [selected]=\"item\"\r\n                            [itemIndex]=\"index\"\r\n                            (onValueChange)=\"usedEquipmentSelected($event)\">\r\n                        </used-equipment> \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>  \r\n"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/services/event/current-event-details.service.ts"), __webpack_require__("./src/app/services/event/event-details.service.ts"), __webpack_require__("./src/app/shared-classes/common/drop-down-data.ts"), __webpack_require__("./src/app/services/report/report.service.ts"), __webpack_require__("./src/app/services/navigation/mapping-navigation-data.service.ts"), __webpack_require__("./src/app/shared-classes/common/base-component.ts"), __webpack_require__("./src/app/shared-classes/request/get-event-report-data-request.ts"), __webpack_require__("./src/app/shared-classes/report/event-report-data.ts"), __webpack_require__("./src/app/shared-classes/report/used-equipment.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, content_service_1, navigation_service_1, map_state_service_1, current_event_details_service_1, event_details_service_1, drop_down_data_1, report_service_1, mapping_navigation_data_service_1, base_component_1, get_event_report_data_request_1, event_report_data_1, used_equipment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReportComponent = (function (_super) {
        __extends(ReportComponent, _super);
        function ReportComponent(navigationService, currentEventDetailsService, eventDetailsService, reportService, contentService, mapStateService, mappingNavigationDataService) {
            var _this = _super.call(this, contentService, 'report') || this;
            _this.navigationService = navigationService;
            _this.currentEventDetailsService = currentEventDetailsService;
            _this.eventDetailsService = eventDetailsService;
            _this.reportService = reportService;
            mapStateService.changeMapState(false);
            var navData = _this.navigationService.getNavigationData();
            _this.eventId = navData.eventId;
            _this.ownerTypeList = new Array();
            _this.byTypeList = new Array();
            _this.outcomeTypeList = new Array();
            _this.reportData = new event_report_data_1.EventReportData();
            _this.eventTypeList = new Array();
            _this.usedEquipmentList = new Array();
            _this.selectedCity = new drop_down_data_1.DropDownData();
            _this.selectedEventType = new drop_down_data_1.DropDownData();
            _this.selectedStreet = new drop_down_data_1.DropDownData();
            _this.selectedStreetNumber = new drop_down_data_1.DropDownData();
            _this.selectedRoad = new drop_down_data_1.DropDownData();
            _this.selectedRoadMile = new drop_down_data_1.DropDownData();
            _this.selectedJunction = new drop_down_data_1.DropDownData();
            var request = new get_event_report_data_request_1.GetEventReportDataRequest();
            request.eventId = _this.eventId;
            _this.reportService.getReportModel(request).then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.ownerTypeList = response.data.ownerTypeIds;
                    _this.byTypeList = response.data.locationTypes;
                    _this.outcomeTypeList = response.data.eventCloseReasons;
                    _this.reportData = response.data.reportData;
                    _this.initilizeData();
                }
            });
            _this.reportSaveEmitter = mappingNavigationDataService.$reportSaveEmitter.subscribe(function (result) {
                _this.saveReport();
            });
            _this.eventTypeSearch = function (searchVal, eventTypeId) {
                if (eventTypeId === void 0) { eventTypeId = null; }
                _this.reportService.getEventTypes(searchVal).then(function (response) {
                    if (response && response.data && response.data.length > 0) {
                        _this.eventTypeList = response.data;
                        if (eventTypeId) {
                            for (var index = 0; index < _this.eventTypeList.length; index++) {
                                if (_this.eventTypeList[index].value == eventTypeId) {
                                    _this.selectedEventType = _this.eventTypeList[index];
                                    break;
                                }
                            }
                        }
                    }
                    else {
                        _this.eventTypeList = new Array();
                        _this.selectedEventType = new drop_down_data_1.DropDownData();
                    }
                });
            };
            _this.citySearch = function (searchVal, reportData) {
                if (reportData === void 0) { reportData = null; }
                if (searchVal.length > 0) {
                    _this.reportService.getCities(searchVal).then(function (response) {
                        if (response && response.data && response.data.length > 0) {
                            _this.cityList = response.data;
                            if (reportData != null && reportData.actualEventLocation && reportData.actualEventLocation.cityId) {
                                for (var index = 0; index < _this.cityList.length; index++) {
                                    if (_this.cityList[index].value == reportData.actualEventLocation.cityId) {
                                        _this.selectedCity = _this.cityList[index];
                                        if (reportData.actualEventLocation.streetDesc) {
                                            _this.streetSearch(reportData.actualEventLocation.streetDesc, reportData);
                                            break;
                                        }
                                        else if (reportData.actualEventLocation.roadDesc) {
                                            _this.roadSearch(reportData.actualEventLocation.streetDesc, reportData);
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            _this.cityList = new Array();
                            _this.selectedCity = new drop_down_data_1.DropDownData();
                            _this.selectedStreet = new drop_down_data_1.DropDownData();
                            _this.selectedStreetNumber = new drop_down_data_1.DropDownData();
                        }
                    });
                }
                else {
                    _this.cityList = new Array();
                    _this.selectedCity = new drop_down_data_1.DropDownData();
                    _this.selectedStreet = new drop_down_data_1.DropDownData();
                    _this.selectedStreetNumber = new drop_down_data_1.DropDownData();
                }
            };
            _this.streetSearch = function (searchVal, reportData) {
                if (reportData === void 0) { reportData = null; }
                if (_this.selectedCity != null && searchVal.length > 0) {
                    _this.reportService.getStreets(searchVal, _this.selectedCity.value).then(function (response) {
                        if (response && response.data && response.data.length > 0) {
                            _this.streetList = response.data;
                            if (reportData != null && reportData.actualEventLocation && reportData.actualEventLocation.streetId) {
                                for (var index = 0; index < _this.streetList.length; index++) {
                                    if (_this.streetList[index].value == reportData.actualEventLocation.streetId) {
                                        _this.selectedStreet = _this.streetList[index];
                                        if (reportData.actualEventLocation.houseNumberDesc) {
                                            _this.streetNumberSearch(reportData.actualEventLocation.houseNumberDesc, reportData);
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            _this.streetList = new Array();
                            _this.selectedStreet = new drop_down_data_1.DropDownData();
                            _this.selectedStreetNumber = new drop_down_data_1.DropDownData();
                        }
                    });
                }
                else {
                    _this.streetList = new Array();
                    _this.selectedStreet = new drop_down_data_1.DropDownData();
                    _this.selectedStreetNumber = new drop_down_data_1.DropDownData();
                }
            };
            _this.streetNumberSearch = function (searchVal, reportData) {
                if (reportData === void 0) { reportData = null; }
                if (_this.selectedStreet != null && searchVal.length > 0) {
                    _this.reportService.getStreetNumbers(searchVal, _this.selectedStreet.value).then(function (response) {
                        if (response && response.data && response.data.length > 0) {
                            _this.streetNumberList = response.data;
                            if (reportData != null && reportData.actualEventLocation && reportData.actualEventLocation.houseNumberId) {
                                for (var index = 0; index < _this.streetNumberList.length; index++) {
                                    if (_this.streetNumberList[index].value == reportData.actualEventLocation.houseNumberId) {
                                        _this.selectedStreetNumber = _this.streetNumberList[index];
                                        break;
                                    }
                                }
                            }
                        }
                        else {
                            _this.streetNumberList = new Array();
                            _this.selectedStreetNumber = new drop_down_data_1.DropDownData();
                        }
                    });
                }
            };
            _this.junctionSearch = function (searchVal, reportData) {
                if (reportData === void 0) { reportData = null; }
                if (searchVal.length > 0) {
                    _this.reportService.getJunctions(searchVal).then(function (response) {
                        if (response && response.data && response.data.length > 0) {
                            _this.junctionList = response.data;
                            if (reportData != null && reportData.actualEventLocation && reportData.actualEventLocation.junctionId) {
                                for (var index = 0; index < _this.junctionList.length; index++) {
                                    if (_this.junctionList[index].value == reportData.actualEventLocation.junctionId) {
                                        _this.selectedJunction = _this.junctionList[index];
                                        break;
                                    }
                                }
                            }
                        }
                        else {
                            _this.junctionList = new Array();
                            _this.selectedJunction = new drop_down_data_1.DropDownData();
                        }
                    });
                }
                else {
                    _this.junctionList = new Array();
                    _this.selectedJunction = new drop_down_data_1.DropDownData();
                }
            };
            _this.roadSearch = function (searchVal, reportData) {
                if (reportData === void 0) { reportData = null; }
                if (_this.selectedCity != null && searchVal.length > 0) {
                    _this.reportService.getRoads(searchVal, _this.selectedCity.value).then(function (response) {
                        if (response && response.data && response.data.length > 0) {
                            _this.roadList = response.data;
                            if (reportData != null && reportData.actualEventLocation && reportData.actualEventLocation.roadId) {
                                for (var index = 0; index < _this.roadList.length; index++) {
                                    if (_this.roadList[index].value == reportData.actualEventLocation.roadId) {
                                        _this.selectedRoad = _this.roadList[index];
                                        if (reportData.actualEventLocation.roadMilestoneDesc) {
                                            _this.roadMileSearch(reportData.actualEventLocation.roadMilestoneDesc, reportData);
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            _this.roadList = new Array();
                            _this.selectedRoad = new drop_down_data_1.DropDownData();
                            _this.selectedRoadMile = new drop_down_data_1.DropDownData();
                        }
                    });
                }
                else {
                    _this.roadList = new Array();
                    _this.selectedRoad = new drop_down_data_1.DropDownData();
                    _this.selectedRoadMile = new drop_down_data_1.DropDownData();
                }
            };
            _this.roadMileSearch = function (searchVal, reportData) {
                if (reportData === void 0) { reportData = null; }
                if (_this.selectedRoad != null && searchVal.length > 0) {
                    _this.reportService.getRoadMiles(searchVal, _this.selectedRoad.text).then(function (response) {
                        if (response && response.data && response.data.length > 0) {
                            _this.roadMileList = response.data;
                            if (reportData && reportData.actualEventLocation && reportData.actualEventLocation.roadMilestoneId) {
                                for (var index = 0; index < _this.roadMileList.length; index++) {
                                    if (_this.roadMileList[index].value == reportData.actualEventLocation.roadMilestoneId) {
                                        _this.selectedRoadMile = _this.roadMileList[index];
                                        break;
                                    }
                                }
                            }
                        }
                        else {
                            _this.roadMileList = new Array();
                            _this.selectedRoadMile = new drop_down_data_1.DropDownData();
                        }
                    });
                }
            };
            _this.usedEquipmentSearch = function (searchVal, reportData) {
                if (reportData === void 0) { reportData = null; }
                _this.reportService.getUsedEquipment(searchVal).then(function (response) {
                    if (response && response.data && response.data.length > 0) {
                        _this.usedEquipmentList = response.data;
                    }
                    else {
                        _this.usedEquipmentList = new Array();
                    }
                });
            };
            return _this;
        }
        ReportComponent.prototype.addUsedEquipment = function () {
            if (!this.reportData.reportEquipments) {
                this.reportData.reportEquipments = new Array();
            }
            this.reportData.reportEquipments.unshift(new used_equipment_1.UsedEquipment());
        };
        ReportComponent.prototype.ownerValueChanged = function (value) {
            this.ownerTypeSelected = value;
            this.reportData.relatedBusiness.ownerTypeId = value.value;
            this.reportData.relatedBusiness.isPrivateOwner = value.value == 1;
        };
        ReportComponent.prototype.byValueChanged = function (value) {
            this.byTypeSelected = value;
            this.reportData.actualLocationTypeId = value.value;
            this.reportData.actualLocationTypeDesc = value.text;
        };
        ReportComponent.prototype.outcomeValueChanged = function (value) {
            this.outcomeTypeSelected = value;
            this.reportData.eventCloseReasonId = value.value;
        };
        ReportComponent.prototype.eventTypeSelected = function (value) {
            this.selectedEventType = value;
            this.reportData.actualEventType.eventTypeFullDesc = value.text;
            this.reportData.actualEventType.eventTypeId = value.value;
        };
        ReportComponent.prototype.citySelected = function (value) {
            this.selectedCity = value;
            this.reportData.actualEventLocation.cityId = value.value;
            this.reportData.actualEventLocation.cityDesc = value.text;
        };
        ReportComponent.prototype.streetSelected = function (value) {
            this.selectedStreet = value;
            this.reportData.actualEventLocation.streetId = value.value;
            this.reportData.actualEventLocation.streetDesc = value.text;
        };
        ReportComponent.prototype.streetNumberSelected = function (value) {
            this.selectedStreetNumber = value;
            this.reportData.actualEventLocation.houseNumberId = value.value;
            this.reportData.actualEventLocation.houseNumberDesc = value.text;
        };
        ReportComponent.prototype.junctionSelected = function (value) {
            this.selectedJunction = value;
            this.reportData.actualEventLocation.junctionId = value.value;
            this.reportData.actualEventLocation.junctionDesc = value.text;
        };
        ReportComponent.prototype.usedEquipmentSelected = function (event) {
            this.reportData.reportEquipments[event.itemIndex] = event.item;
        };
        ReportComponent.prototype.roadSelected = function (value) {
            this.selectedRoad = value;
            this.reportData.actualEventLocation.roadId = value.value;
            this.reportData.actualEventLocation.roadDesc = value.text;
        };
        ReportComponent.prototype.roadMileSelected = function (value) {
            this.selectedRoadMile = value;
            this.reportData.actualEventLocation.roadMilestoneId = value.value;
            this.reportData.actualEventLocation.roadMilestoneDesc = value.text;
        };
        ReportComponent.prototype.initilizeData = function () {
            if (this.reportData == null) {
                return;
            }
            this.setByType();
            this.setOwnerType();
            this.setOutcomeType();
            if (this.reportData.actualEventType.eventTypeId) {
                this.eventTypeSearch(this.reportData.actualEventType.eventTypeFullDesc, this.reportData.actualEventType.eventTypeId);
            }
            if (this.reportData.actualLocationTypeId == 1 && this.reportData.actualEventLocation.cityId) {
                this.citySearch(this.reportData.actualEventLocation.cityDesc, this.reportData);
            }
            else if (this.reportData.actualLocationTypeId == 3 && this.reportData.actualEventLocation.junctionId) {
                this.junctionSearch(this.reportData.actualEventLocation.junctionDesc, this.reportData);
            }
            else if (this.reportData.actualLocationTypeId == 4 && this.reportData.actualEventLocation.roadId) {
                if (this.reportData.actualEventLocation.cityId != null && this.reportData.actualEventLocation.cityDesc != null) {
                    this.selectedCity.value = this.reportData.actualEventLocation.cityId;
                    this.selectedCity.text = this.reportData.actualEventLocation.cityDesc;
                }
                this.roadSearch(this.reportData.actualEventLocation.roadDesc, this.reportData);
            }
        };
        ReportComponent.prototype.setByType = function () {
            if (this.reportData.actualLocationTypeId != 0 && this.reportData.actualLocationTypeDesc != null) {
                for (var index = 0; index < this.byTypeList.length; index++) {
                    if (this.byTypeList[index].value == this.reportData.actualLocationTypeId) {
                        this.byTypeSelected = this.byTypeList[index];
                        break;
                    }
                }
            }
        };
        ReportComponent.prototype.setOutcomeType = function () {
            if (this.reportData.eventCloseReasonId != null && this.reportData.eventCloseReasonId != 0) {
                for (var index = 0; index < this.outcomeTypeList.length; index++) {
                    if (this.outcomeTypeList[index].value == this.reportData.eventCloseReasonId) {
                        this.outcomeTypeSelected = this.outcomeTypeList[index];
                        break;
                    }
                }
            }
        };
        ReportComponent.prototype.setOwnerType = function () {
            if (this.reportData.relatedBusiness.ownerTypeId != null && this.reportData.relatedBusiness.ownerTypeId != 0) {
                for (var index = 0; index < this.ownerTypeList.length; index++) {
                    if (this.ownerTypeList[index].value == this.reportData.relatedBusiness.ownerTypeId) {
                        this.ownerTypeSelected = this.ownerTypeList[index];
                        this.reportData.relatedBusiness.isPrivateOwner = this.ownerTypeSelected.value == 1;
                        break;
                    }
                }
            }
        };
        ReportComponent.prototype.saveReport = function () {
            var _this = this;
            if ((this.byTypeSelected.value == 1 && (!this.isFlatValid() || !this.isFloorsValid() || !this.isFloorValid() || !this.isNumberOfFloors())) || (!this.isEventInjuredValid())) {
                return;
            }
            this.reportService.saveEventReport(this.reportData).then(function (response) {
                if (response.isSuccess()) {
                    _this.navigationService.goBack();
                }
            });
        };
        ReportComponent.prototype.isFlatValid = function () {
            return !this.reportData.actualEventLocation.flatNumber || this.reportData.actualEventLocation.flatNumber.toString().trim() == '' || /^[+]?([0-9])*$/.test(this.reportData.actualEventLocation.flatNumber.toString().trim());
        };
        ReportComponent.prototype.isFloorValid = function () {
            return !this.reportData.actualEventLocation.floorNumber || this.reportData.actualEventLocation.floorNumber.toString().trim() == '' || /^[+]?([0-9])*$/.test(this.reportData.actualEventLocation.floorNumber.toString().trim());
        };
        ReportComponent.prototype.isNumberOfFloors = function () {
            return !this.reportData.actualEventLocation.numberOfFloors || this.reportData.actualEventLocation.numberOfFloors.toString().trim() == '' || /^[+]?([0-9])*$/.test(this.reportData.actualEventLocation.numberOfFloors.toString().trim());
        };
        ReportComponent.prototype.isFloorsValid = function () {
            return ((!this.reportData.actualEventLocation.floorNumber || this.reportData.actualEventLocation.floorNumber.toString().trim() == '')
                || (!this.reportData.actualEventLocation.numberOfFloors || this.reportData.actualEventLocation.numberOfFloors.toString().trim() == '')
                || (parseInt(this.reportData.actualEventLocation.numberOfFloors.toString().trim()) > 0 && parseInt(this.reportData.actualEventLocation.floorNumber.toString().trim()) > 0
                    && parseInt(this.reportData.actualEventLocation.numberOfFloors.toString().trim()) >= parseInt(this.reportData.actualEventLocation.floorNumber.toString().trim())));
        };
        ReportComponent.prototype.isEmployeeLightValid = function () {
            return !this.reportData.eventInjured.employeeLight || this.reportData.eventInjured.employeeLight.toString().trim() == '' || /^[+]?([0-9])*$/.test(this.reportData.eventInjured.employeeLight.toString().trim());
        };
        ReportComponent.prototype.isOtherLightValid = function () {
            return !this.reportData.eventInjured.otherLight || this.reportData.eventInjured.otherLight.toString().trim() == '' || /^[+]?([0-9])*$/.test(this.reportData.eventInjured.otherLight.toString().trim());
        };
        ReportComponent.prototype.isEmployeeMediumValid = function () {
            return !this.reportData.eventInjured.employeeMedium || this.reportData.eventInjured.employeeMedium.toString().trim() == '' || /^[+]?([0-9])*$/.test(this.reportData.eventInjured.employeeMedium.toString().trim());
        };
        ReportComponent.prototype.isOtherMediumValid = function () {
            return !this.reportData.eventInjured.otherMedium || this.reportData.eventInjured.otherMedium.toString().trim() == '' || /^[+]?([0-9])*$/.test(this.reportData.eventInjured.otherMedium.toString().trim());
        };
        ReportComponent.prototype.isEmployeeDifficultValid = function () {
            return !this.reportData.eventInjured.employeeDifficult || this.reportData.eventInjured.employeeDifficult.toString().trim() == '' || /^[+]?([0-9])*$/.test(this.reportData.eventInjured.employeeDifficult.toString().trim());
        };
        ReportComponent.prototype.isOtherDifficultValid = function () {
            return !this.reportData.eventInjured.otherDifficult || this.reportData.eventInjured.otherDifficult.toString().trim() == '' || /^[+]?([0-9])*$/.test(this.reportData.eventInjured.otherDifficult.toString().trim());
        };
        ReportComponent.prototype.isEmployeeKilledValid = function () {
            return !this.reportData.eventInjured.employeeKilled || this.reportData.eventInjured.employeeKilled.toString().trim() == '' || /^[+]?([0-9])*$/.test(this.reportData.eventInjured.employeeKilled.toString().trim());
        };
        ReportComponent.prototype.isOtherKilledValid = function () {
            return !this.reportData.eventInjured.otherKilled || this.reportData.eventInjured.otherKilled.toString().trim() == '' || /^[+]?([0-9])*$/.test(this.reportData.eventInjured.otherKilled.toString().trim());
        };
        ReportComponent.prototype.isEventInjuredValid = function () {
            return this.isEmployeeLightValid()
                && this.isOtherLightValid()
                && this.isEmployeeMediumValid()
                && this.isOtherMediumValid()
                && this.isEmployeeDifficultValid()
                && this.isOtherDifficultValid()
                && this.isEmployeeKilledValid()
                && this.isOtherKilledValid();
        };
        ReportComponent.prototype.ngOnDestroy = function () {
            this.reportSaveEmitter.unsubscribe();
        };
        return ReportComponent;
    }(base_component_1.BaseComponent));
    ReportComponent = __decorate([
        core_1.Component({
            selector: 'report',
            template: __webpack_require__("./src/app/report/report.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _a || Object, typeof (_b = typeof current_event_details_service_1.CurrentEventDetailsService !== "undefined" && current_event_details_service_1.CurrentEventDetailsService) === "function" && _b || Object, typeof (_c = typeof event_details_service_1.EventDetailsService !== "undefined" && event_details_service_1.EventDetailsService) === "function" && _c || Object, typeof (_d = typeof report_service_1.ReportService !== "undefined" && report_service_1.ReportService) === "function" && _d || Object, typeof (_e = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _e || Object, typeof (_f = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _f || Object, typeof (_g = typeof mapping_navigation_data_service_1.MappingNavigationDataService !== "undefined" && mapping_navigation_data_service_1.MappingNavigationDataService) === "function" && _g || Object])
    ], ReportComponent);
    exports.ReportComponent = ReportComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ "./src/app/report/used-equipment/used-equipment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"used-equipment\">\r\n    <sac \r\n        [placeholder]=\"watermark ? watermark : ''\" \r\n        [search]=\"dataSearch\"        \r\n        [data]=\"dataList\"\r\n        (onValueSelected)=\"itemSelected($event)\"\r\n        [selectedItem]=\"selected\"\r\n        [searchcolumn]=\"'serviceSectionArticleDesc'\">\r\n    </sac>\r\n    <input type=\"number\" [className]=\"'amount'\" [value]=\"selected.amountUsed ? selected.amountUsed : ''\" (input)=\"selected.amountUsed = $event.target.value\" maxlength=\"4\"/>\r\n    <span [className]=\"'unit'\">{{ selected ? selected.unitDesc : '' }}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/report/used-equipment/used-equipment.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UsedEquipmentComponent = (function () {
        function UsedEquipmentComponent() {
            this.onValueChange = new core_1.EventEmitter();
            this.selected = null;
        }
        UsedEquipmentComponent.prototype.itemSelected = function (value) {
            this.selected = value;
            this.onValueChange.emit({ item: value, itemIndex: this.itemIndex });
        };
        return UsedEquipmentComponent;
    }());
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
    ], UsedEquipmentComponent.prototype, "onValueChange", void 0);
    UsedEquipmentComponent = __decorate([
        core_1.Component({
            selector: 'used-equipment',
            template: __webpack_require__("./src/app/report/used-equipment/used-equipment.component.html"),
            inputs: ['watermark', 'dataList', 'dataSearch', 'selected', 'itemIndex']
        }),
        __metadata("design:paramtypes", [])
    ], UsedEquipmentComponent);
    exports.UsedEquipmentComponent = UsedEquipmentComponent;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=used-equipment.component.js.map

/***/ }),

/***/ "./src/app/route/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js"), __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/route/guards/auth.guard.ts"), __webpack_require__("./src/app/route/guards/changes-not-saves.guard.ts"), __webpack_require__("./src/app/layouts/default-layout/default-layout.component.ts"), __webpack_require__("./src/app/layouts/home-layout/home-layout.component.ts"), __webpack_require__("./src/app/events/event-list/event-list.component.ts"), __webpack_require__("./src/app/logs/logs.component.ts"), __webpack_require__("./src/app/employees/employees-team/employees-team.component.ts"), __webpack_require__("./src/app/car/car-check/car-check.component.ts"), __webpack_require__("./src/app/car/car-status/car-status.component.ts"), __webpack_require__("./src/app/car/car-check-start/car-check-start.component.ts"), __webpack_require__("./src/app/events/event-details/event-details.component.ts"), __webpack_require__("./src/app/supplies/supplies.component.ts"), __webpack_require__("./src/app/quick-report/quick-report.component.ts"), __webpack_require__("./src/app/events/current-status/current-status.component.ts"), __webpack_require__("./src/app/events/prevent-fire/prevent-fire.component.ts"), __webpack_require__("./src/app/report/report.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, router_1, core_1, auth_guard_1, changes_not_saves_guard_1, default_layout_component_1, home_layout_component_1, event_list_component_1, logs_component_1, employees_team_component_1, car_check_component_1, car_status_component_1, car_check_start_component_1, event_details_component_1, supplies_component_1, quick_report_component_1, current_status_component_1, prevent_fire_component_1, report_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            component: home_layout_component_1.HomeLayoutComponent,
            data: { pageTitle: '' },
            children: [
                {
                    path: '',
                    component: home_layout_component_1.HomeLayoutComponent
                },
            ]
        },
        {
            path: '',
            component: default_layout_component_1.DefaultLayoutComponent,
            data: { pageTitle: '' },
            children: [
                {
                    path: 'events',
                    component: event_list_component_1.EventListComponent
                },
                {
                    path: 'employees-team',
                    component: employees_team_component_1.EmployeesTeamComponent
                },
                {
                    path: 'logs',
                    component: logs_component_1.LogsComponent
                },
                {
                    path: 'car-check',
                    component: car_check_component_1.CarCheckComponent
                },
                {
                    path: 'car-status',
                    component: car_status_component_1.CarStatusComponent
                },
                {
                    path: 'car-check-start',
                    component: car_check_start_component_1.CarCheckStartComponent
                },
                {
                    path: 'supplies',
                    component: supplies_component_1.SuppliesComponent
                },
                {
                    path: 'quick-report',
                    component: quick_report_component_1.QuickReportComponent
                },
                {
                    path: 'current-status',
                    component: current_status_component_1.CurrentStatusComponent
                },
                {
                    path: 'prevent-fire',
                    component: prevent_fire_component_1.PreventFireComponent
                },
                {
                    path: 'report',
                    component: report_component_1.ReportComponent
                }
            ]
        },
        {
            path: 'event-details',
            component: event_details_component_1.EventDetailsComponent
        }
    ];
    var AppRoutingModule = (function () {
        function AppRoutingModule() {
        }
        return AppRoutingModule;
    }());
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: [
                auth_guard_1.AuthGuard,
                changes_not_saves_guard_1.ChangesNotSavedGuard
            ]
        })
    ], AppRoutingModule);
    exports.AppRoutingModule = AppRoutingModule;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/route/guards/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthGuard = (function () {
        function AuthGuard() {
        }
        AuthGuard.prototype.canActivate = function () {
            return true;
        };
        return AuthGuard;
    }());
    AuthGuard = __decorate([
        core_1.Injectable()
    ], AuthGuard);
    exports.AuthGuard = AuthGuard;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "./src/app/route/guards/changes-not-saves.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChangesNotSavedGuard = (function () {
        function ChangesNotSavedGuard() {
        }
        ChangesNotSavedGuard.prototype.canDeactivate = function (component, route, state) {
            return window.confirm("Are you sure?");
        };
        return ChangesNotSavedGuard;
    }());
    ChangesNotSavedGuard = __decorate([
        core_1.Injectable()
    ], ChangesNotSavedGuard);
    exports.ChangesNotSavedGuard = ChangesNotSavedGuard;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=changes-not-saves.guard.js.map

/***/ }),

/***/ "./src/app/services/base/ArrayStorage.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArrayStorage = (function () {
        function ArrayStorage(contentService) {
            var _this = this;
            this.contentService = contentService;
            this.errorMsgPromise = contentService.load().then(function () {
                _this.content = contentService.getContent('messages');
            });
        }
        ArrayStorage.prototype.addItem = function (item) {
            throw new Error("Method not implemented.");
        };
        ArrayStorage.prototype.removeItem = function (itemID) {
            throw new Error("Method not implemented.");
        };
        ArrayStorage.prototype.getItemsByProperty = function (prop) {
            throw new Error("Method not implemented.");
        };
        ArrayStorage.prototype.getItemById = function (id) {
            throw new Error("Method not implemented.");
        };
        ArrayStorage.prototype.getItemIndex = function (item) {
            throw new Error("Method not implemented.");
        };
        ArrayStorage.prototype.getList = function (request) {
            throw new Error("Method not implemented.");
        };
        ArrayStorage.prototype.addList = function (items) {
            throw new Error("Method not implemented.");
        };
        ArrayStorage.prototype.removeList = function () {
            throw new Error("Method not implemented.");
        };
        ArrayStorage.prototype.isItemExists = function (item) {
            throw new Error("Method not implemented.");
        };
        ;
        return ArrayStorage;
    }());
    exports.ArrayStorage = ArrayStorage;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=ArrayStorage.js.map

/***/ }),

/***/ "./src/app/services/base/DictionaryStorage.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/shared-classes/IDictionary.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, StorageResponse_1, IDictionary_1, ApplicationResponseStatus_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DictionaryStorage = (function () {
        function DictionaryStorage() {
            this.dictionary = new Array();
        }
        DictionaryStorage.prototype.addItem = function (key, item) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (item == undefined || key == undefined) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given item or key is null."));
                    return;
                }
                _this.isItemExists(key).then(function (response) {
                    if (response.isSuccess()) {
                        _this.getItem(key).then(function (response) {
                            if (response.isSuccessWithResult) {
                                response.data = item;
                                resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
                            }
                            else {
                                resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("no item to update with given key."));
                            }
                        });
                        return;
                    }
                    _this.dictionary.push(new IDictionary_1.Dictionary(key, item));
                    resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                });
            });
        };
        DictionaryStorage.prototype.removeItem = function (key) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (key == undefined) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given key is null."));
                    return;
                }
                _this.isItemExists(key).then(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the item with the given key does not exists in list."));
                        return;
                    }
                    _this.getItemIndex(key).then(function (response) {
                        if (!response.isSuccessWithResult()) {
                            resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse(response.errorMessage));
                            return;
                        }
                        _this.dictionary.splice(response.data, 1);
                        resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                    });
                });
            });
        };
        DictionaryStorage.prototype.getItem = function (key) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var keyTrim = key.trim();
                if (keyTrim == "") {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given key is null."));
                    return;
                }
                _this.getItemIndex(keyTrim).then(function (response) {
                    if (!response.isSuccessWithResult()) {
                        resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse(response.errorMessage));
                        return;
                    }
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.dictionary[response.data].value));
                });
            });
        };
        DictionaryStorage.prototype.getItemIndex = function (key) {
            if (key == undefined) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given key is null."));
                });
            }
            if (this.dictionary == undefined || this.dictionary.length == 0) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the item list is empty."));
                });
            }
            var _loop_1 = function (index) {
                obj = this_1.dictionary[index];
                if (obj.key == key) {
                    return { value: new Promise(function (resolve, reject) {
                            resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(index));
                        }) };
                }
            };
            var this_1 = this, obj;
            for (var index = 0; index < this.dictionary.length; index++) {
                var state_1 = _loop_1(index);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the item with given key does not exists in list."));
            });
        };
        DictionaryStorage.prototype.isItemExists = function (key) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (_this.dictionary == undefined || _this.dictionary.length == 0 || key == undefined) {
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    return;
                }
                for (var i = 0; i < _this.dictionary.length; i++) {
                    if (_this.dictionary[i].key === key) {
                        resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                        return;
                    }
                }
                resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
            });
        };
        DictionaryStorage.prototype.getItems = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.dictionary));
            });
        };
        return DictionaryStorage;
    }());
    exports.DictionaryStorage = DictionaryStorage;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=DictionaryStorage.js.map

/***/ }),

/***/ "./src/app/services/base/ItemStorage.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItemStorage = (function () {
        function ItemStorage(contentService) {
            var _this = this;
            this.contentService = contentService;
            this.errorMsgPromise = contentService.load().then(function () {
                _this.content = contentService.getContent('messages');
            });
        }
        ItemStorage.prototype.addItem = function (item) {
            throw new Error("Method not implemented.");
        };
        ItemStorage.prototype.removeItem = function (itemId) {
            throw new Error("Method not implemented.");
        };
        ItemStorage.prototype.getItem = function (request) {
            throw new Error("Method not implemented.");
        };
        ItemStorage.prototype.updateItem = function (item) {
            throw new Error("Method not implemented.");
        };
        ;
        return ItemStorage;
    }());
    exports.ItemStorage = ItemStorage;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=ItemStorage.js.map

/***/ }),

/***/ "./src/app/services/base/StorageResponse.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/shared-classes/response/ApplicationResponse.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ApplicationResponse_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StorageResponse = (function (_super) {
        __extends(StorageResponse, _super);
        function StorageResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return StorageResponse;
    }(ApplicationResponse_1.ApplicationResponse));
    exports.StorageResponse = StorageResponse;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=StorageResponse.js.map

/***/ }),

/***/ "./src/app/services/car/car-check-service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/services/base/ItemStorage.ts"), __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ItemStorage_1, core_1, http_service_1, StorageResponse_1, content_service_1, alertify_service_1, ApplicationResponseStatus_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CarCheckService = (function (_super) {
        __extends(CarCheckService, _super);
        function CarCheckService(httpService, alertifyService, contentService) {
            var _this = _super.call(this, contentService) || this;
            _this.httpService = httpService;
            _this.alertifyService = alertifyService;
            return _this;
        }
        CarCheckService.prototype.getActiveCarCheck = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'CarCheck/GetActiveCarCheck/';
                _this.httpService.post(url, request).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    if (response.data != null && response.data.activeCarCheckData != null) {
                        response.data.activeCarCheckData.customDamageList = _this.setCustomDamageList(response.data.activeCarCheckData.car.cells);
                        _this.storageItem = response.data.activeCarCheckData;
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response.data.activeCarCheckData));
                    }
                    else {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(null));
                    }
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        CarCheckService.prototype.getCarCheck = function (request) {
            var _this = this;
            if (this.storageItem) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storageItem));
                });
            }
            else {
                return new Promise(function (resolve, reject) {
                    var url = _this.httpService.baseWebApi + 'CarCheck/StartCarCheck/';
                    _this.httpService.post(url, request).subscribe(function (response) {
                        if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                            _this.errorMsgPromise.then(function () {
                                _this.alertifyService.error(_this.content.getDataErrorMessage);
                                resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                            });
                        }
                        else {
                            response.data.activeCarCheckData.customDamageList = _this.setCustomDamageList(response.data.activeCarCheckData.car.cells);
                            _this.storageItem = response.data.activeCarCheckData;
                            resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response.data.activeCarCheckData));
                        }
                    }, function (err) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    });
                });
            }
        };
        CarCheckService.prototype.GetCarStatus = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'CarCheck/GetCarData/';
                _this.httpService.post(url, request).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    else {
                        response.data.customDamageList = _this.setCustomDamageList(response.data.cells);
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response.data));
                    }
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        CarCheckService.prototype.getEmployeesCarCheck = function (request) {
            var _this = this;
            if (this.storageItem) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.startStorageItem));
                });
            }
            else {
                return new Promise(function (resolve, reject) {
                    var url = _this.httpService.baseWebApi + 'CarCheck/GetStartCarCheckInfo/';
                    _this.httpService.post(url, request).subscribe(function (response) {
                        if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                            _this.errorMsgPromise.then(function () {
                                _this.alertifyService.error(_this.content.getDataErrorMessage);
                                resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                            });
                        }
                        else {
                            _this.startStorageItem = response.data.currentWatchEmployees;
                            resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response.data.currentWatchEmployees));
                        }
                    }, function (err) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    });
                });
            }
        };
        CarCheckService.prototype.setCustomDamageList = function (cells) {
            var array = Array();
            if (cells == null || cells.length == 0) {
                return array;
            }
            for (var index = 0; index < cells.length; index++) {
                var cell = cells[index];
                if (cell == null || cell.cellEquipments == null || cell.cellEquipments.length == 0) {
                    continue;
                }
                for (var i = 0; i < cell.cellEquipments.length; i++) {
                    var cellEquipment = cell.cellEquipments[i];
                    if (cellEquipment == null || cellEquipment.openDamageList == null || cellEquipment.openDamageList.length == 0) {
                        continue;
                    }
                    for (var j = 0; j < cellEquipment.openDamageList.length; j++) {
                        cellEquipment.openDamageList[j].cellName = cell.carCellName;
                        array.push(cellEquipment.openDamageList[j]);
                    }
                }
            }
            return array;
        };
        CarCheckService.prototype.addEquipmentDamage = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'CarCheck/AddNewCarEquipmentDamage/';
                _this.httpService.post(url, request).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.saveDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response.data.damageData));
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.saveDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            });
        };
        CarCheckService.prototype.addEquipmentLack = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'CarCheck/AddNewCarEquipmentLack/';
                _this.httpService.post(url, request).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.saveDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response.data.damageData));
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.saveDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            });
        };
        CarCheckService.prototype.addEquipmentTreat = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'CarCheck/AddNewCarEquipmentDamageRecord/';
                _this.httpService.post(url, request).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.saveDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response.data.damageData));
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.saveDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            });
        };
        CarCheckService.prototype.addEquipmentDamageList = function (item, isAddToRoot) {
            if (isAddToRoot === void 0) { isAddToRoot = true; }
            if (!this.storageItem || !item || !item.equipmentInfo) {
                return;
            }
            if (isAddToRoot) {
                this.storageItem.customDamageList.unshift(item);
            }
            for (var index = 0; index < this.storageItem.car.cells.length; index++) {
                var cell = this.storageItem.car.cells[index];
                if (cell == null || cell.cellEquipments == null || cell.cellEquipments.length == 0) {
                    continue;
                }
                for (var i = 0; i < cell.cellEquipments.length; i++) {
                    var cellEquipment = cell.cellEquipments[i];
                    if (cellEquipment != null && cellEquipment.equipmentId == item.equipmentInfo.equipmentId) {
                        item.cellName = cell.carCellName;
                        if (isAddToRoot) {
                            if (!cellEquipment.openDamageList) {
                                cellEquipment.openDamageList = new Array();
                            }
                            cellEquipment.openDamageList.unshift(item);
                        }
                        else {
                            if (!cellEquipment.closedDamageList) {
                                cellEquipment.closedDamageList = new Array();
                            }
                            cellEquipment.closedDamageList.unshift(item);
                        }
                    }
                }
            }
        };
        CarCheckService.prototype.removeFromDamageList = function (cellId, carEquipmentDamageId) {
            for (var index = 0; index < this.storageItem.customDamageList.length; index++) {
                if (this.storageItem.customDamageList[index].carEquipmentDamageId == carEquipmentDamageId) {
                    this.storageItem.customDamageList.splice(index, 1);
                    break;
                }
            }
            for (var index = 0; index < this.storageItem.car.cells.length; index++) {
                var cell = this.storageItem.car.cells[index];
                if (cell == null || cell.cellEquipments == null || cell.cellEquipments.length == 0 || cellId != cell.carCellId) {
                    continue;
                }
                for (var i = 0; i < cell.cellEquipments.length; i++) {
                    var cellEquipment = cell.cellEquipments[i];
                    if (!cellEquipment || !cellEquipment.openDamageList || cellEquipment.openDamageList.length == 0) {
                        continue;
                    }
                    for (var j = 0; j < cellEquipment.openDamageList.length; j++) {
                        if (cellEquipment.openDamageList[j].carEquipmentDamageId == carEquipmentDamageId) {
                            cellEquipment.openDamageList.splice(j, 1);
                            return;
                        }
                    }
                }
            }
        };
        CarCheckService.prototype.updateLackList = function (cellId, carEquipmentDamageId, inputVal) {
            for (var index = 0; index < this.storageItem.customDamageList.length; index++) {
                if (this.storageItem.customDamageList[index].carEquipmentDamageId == carEquipmentDamageId) {
                    this.storageItem.customDamageList[index].lackQuantity = inputVal;
                    break;
                }
            }
            for (var index = 0; index < this.storageItem.car.cells.length; index++) {
                var cell = this.storageItem.car.cells[index];
                if (cell == null || cell.cellEquipments == null || cell.cellEquipments.length == 0 || cellId != cell.carCellId) {
                    continue;
                }
                for (var i = 0; i < cell.cellEquipments.length; i++) {
                    var cellEquipment = cell.cellEquipments[i];
                    if (!cellEquipment || !cellEquipment.openDamageList || cellEquipment.openDamageList.length == 0) {
                        continue;
                    }
                    for (var j = 0; j < cellEquipment.openDamageList.length; j++) {
                        if (cellEquipment.openDamageList[j].carEquipmentDamageId == carEquipmentDamageId) {
                            cellEquipment.openDamageList[j].lackQuantity = inputVal;
                            return;
                        }
                    }
                }
            }
        };
        CarCheckService.prototype.closeEquipmentDamage = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'CarCheck/CloseCarEquipmentDamage/';
                _this.httpService.post(url, request).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.updateDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.updateDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            });
        };
        CarCheckService.prototype.updateEquipmentLack = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'CarCheck/UpdateCarEquipmentLack/';
                _this.httpService.post(url, request).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.updateDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response.data.damageData));
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.updateDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            });
        };
        CarCheckService.prototype.finishCarCheck = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'CarCheck/FinishCarCheck/';
                _this.httpService.post(url, request).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.saveDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        _this.storageItem = null;
                        _this.startStorageItem = null;
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.saveDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            });
        };
        return CarCheckService;
    }(ItemStorage_1.ItemStorage));
    CarCheckService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object, typeof (_b = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _b || Object, typeof (_c = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _c || Object])
    ], CarCheckService);
    exports.CarCheckService = CarCheckService;
    var _a, _b, _c;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=car-check-service.js.map

/***/ }),

/***/ "./src/app/services/chat/chat.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/stores/offlineStorage/OfflineStorage.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/services/general/device.service.ts"), __webpack_require__("./src/app/shared-classes/common/chat-message.ts"), __webpack_require__("./src/app/services/node/node.service.ts"), __webpack_require__("./src/app/app.config.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./node_modules/moment/moment.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, StorageResponse_1, http_service_1, OfflineStorage_1, connection_service_1, device_service_1, chat_message_1, node_service_1, app_config_1, home_service_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChatService = (function () {
        function ChatService(httpService, store, connectionService, deviceService, nodeService, config, homeService) {
            var _this = this;
            this.httpService = httpService;
            this.store = store;
            this.connectionService = connectionService;
            this.deviceService = deviceService;
            this.nodeService = nodeService;
            this.config = config;
            this.homeService = homeService;
            this.namespace = this.config.getConfig('node_host') + this.config.getConfig('chat_namespace');
            this.homeService.getCar().then(function (response) {
                _this.carName = response.data.carCallCode;
                _this.nodeService.createSocket(_this.namespace);
            });
            this.$chatBroadcastEmitter = new core_1.EventEmitter();
        }
        ChatService.prototype.connectChatRoom = function (eventId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.nodeService.registerChatEvent(_this.namespace, eventId.toString());
                _this.chatHistoryEmitter = _this.nodeService.$chatHistoryEmitter.subscribe(function (messages) {
                    _this.storeArray = new Array();
                    if (messages == null || messages.length == 0) {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storeArray));
                        return;
                    }
                    for (var i = 0; i < messages.length; i++) {
                        var item = new chat_message_1.ChatMessage(messages[i].dateSent.replace('Z', ''), messages[i].data, messages[i].sender, messages[i].sender == _this.carName);
                        _this.storeArray.push(item);
                    }
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storeArray));
                });
                _this.chatServerBroadcastEmitter = _this.nodeService.$chatServerBroadcastEmitter.subscribe(function (message) {
                    var item = new chat_message_1.ChatMessage(message.expire, message.data, message.sender, false);
                    _this.storeArray.push(item);
                    _this.$chatBroadcastEmitter.emit(true);
                });
            });
        };
        ChatService.prototype.disConnectChatRoom = function (eventId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.nodeService.unRegisterChatEvent(_this.namespace, eventId.toString());
                _this.chatServerBroadcastEmitter.unsubscribe();
                _this.chatHistoryEmitter.unsubscribe();
                resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
            });
        };
        ChatService.prototype.sendMessage = function (message, eventId) {
            this.nodeService.sendChatMessage(this.namespace, message, eventId.toString());
            var item = new chat_message_1.ChatMessage(moment().format("YYYY/MM/DD HH:mm"), message, this.carName, true);
            this.storeArray.push(item);
        };
        return ChatService;
    }());
    ChatService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object, typeof (_b = typeof OfflineStorage_1.OfflineStorage !== "undefined" && OfflineStorage_1.OfflineStorage) === "function" && _b || Object, typeof (_c = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _c || Object, typeof (_d = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" && _d || Object, typeof (_e = typeof node_service_1.NodeService !== "undefined" && node_service_1.NodeService) === "function" && _e || Object, typeof (_f = typeof app_config_1.AppConfig !== "undefined" && app_config_1.AppConfig) === "function" && _f || Object, typeof (_g = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _g || Object])
    ], ChatService);
    exports.ChatService = ChatService;
    var _a, _b, _c, _d, _e, _f, _g;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "./src/app/services/connection/connection.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/common/connection-state-types.ts"), __webpack_require__("./src/app/services/general/log.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, connection_state_types_1, log_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConnectionService = (function () {
        function ConnectionService(logService) {
            this.logService = logService;
            this.connectionState = connection_state_types_1.ConnectionStateTypes.online;
            this.stateChanged = new core_1.EventEmitter();
        }
        ConnectionService.prototype.isOffline = function () {
            return this.connectionState == connection_state_types_1.ConnectionStateTypes.offline;
        };
        ConnectionService.prototype.onChangeState = function (state) {
            this.connectionState = state;
            var stateDesc = "";
            switch (this.connectionState) {
                case connection_state_types_1.ConnectionStateTypes.offline:
                    stateDesc = "offline";
                    break;
                case connection_state_types_1.ConnectionStateTypes.online:
                    stateDesc = "online";
                    break;
                case connection_state_types_1.ConnectionStateTypes.resume:
                    stateDesc = "resume";
                    break;
            }
            this.stateChanged.emit(state);
        };
        return ConnectionService;
    }());
    ConnectionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _a || Object])
    ], ConnectionService);
    exports.ConnectionService = ConnectionService;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=connection.service.js.map

/***/ }),

/***/ "./src/app/services/employees/employees.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/services/base/ItemStorage.ts"), __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/stores/offlineStorage/OfflineStorage.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/shared-classes/offline/fire-truck-offline-action-types.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ItemStorage_1, core_1, http_service_1, StorageResponse_1, connection_service_1, OfflineStorage_1, alertify_service_1, content_service_1, fire_truck_offline_action_types_1, ApplicationResponseStatus_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeesService = (function (_super) {
        __extends(EmployeesService, _super);
        function EmployeesService(httpService, connectionService, store, alertifyService, contentService) {
            var _this = _super.call(this, contentService) || this;
            _this.httpService = httpService;
            _this.connectionService = connectionService;
            _this.store = store;
            _this.alertifyService = alertifyService;
            _this.localStorageKey = "avalibleEmployees";
            return _this;
        }
        EmployeesService.prototype.getItem = function (request) {
            var _this = this;
            var pThis = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Events/GetAvailableForcesForCarAssignment/';
                _this.httpService.post(url, request).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    else {
                        if (response && response.data && response.data.carAssigmentOptions) {
                            _this.storageItem = response.data.carAssigmentOptions;
                            _this.store.setItem(_this.localStorageKey, JSON.stringify(_this.storageItem));
                        }
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storageItem));
                    }
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        EmployeesService.prototype.addItem = function (item) {
            if (!item) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given item is null or empty."));
                });
            }
            this.storageItem.availableEmployees = item.availableEmployees;
            this.storageItem.availableTeams = item.availableTeams;
            this.store.setItem(this.localStorageKey, JSON.stringify(item));
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        EmployeesService.prototype.removeItem = function (itemId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.storageItem = null;
                _this.store.removeItem(_this.localStorageKey);
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        EmployeesService.prototype.updateCurrentEventTeam = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Events/SaveCarTeam/';
                _this.httpService.post(url, request, fire_truck_offline_action_types_1.FireTruckOfflineActionTypes.SaveCarTeam).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.saveDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        _this.alertifyService.success(_this.content.successMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.saveDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            });
        };
        return EmployeesService;
    }(ItemStorage_1.ItemStorage));
    EmployeesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object, typeof (_b = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _b || Object, typeof (_c = typeof OfflineStorage_1.OfflineStorage !== "undefined" && OfflineStorage_1.OfflineStorage) === "function" && _c || Object, typeof (_d = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _d || Object, typeof (_e = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _e || Object])
    ], EmployeesService);
    exports.EmployeesService = EmployeesService;
    var _a, _b, _c, _d, _e;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=employees.service.js.map

/***/ }),

/***/ "./src/app/services/event-list/event-list.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/services/base/ArrayStorage.ts"), __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/stores/offlineStorage/OfflineStorage.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts"), __webpack_require__("./src/app/services/general/device.service.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/shared-classes/request/event-list-request.ts"), __webpack_require__("./src/app/services/general/log.service.ts"), __webpack_require__("./src/app/shared-classes/common/log-info.ts"), __webpack_require__("./src/app/shared-classes/common/log-types.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ArrayStorage_1, core_1, StorageResponse_1, http_service_1, connection_service_1, OfflineStorage_1, content_service_1, alertify_service_1, ApplicationResponseStatus_1, device_service_1, home_service_1, event_list_request_1, log_service_1, log_info_1, log_types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventListService = (function (_super) {
        __extends(EventListService, _super);
        function EventListService(store, httpService, connectionService, deviceService, homeService, contentService, alertifyService, logService) {
            var _this = _super.call(this, contentService) || this;
            _this.store = store;
            _this.httpService = httpService;
            _this.connectionService = connectionService;
            _this.deviceService = deviceService;
            _this.homeService = homeService;
            _this.alertifyService = alertifyService;
            _this.logService = logService;
            _this.localStorageKey = "eventListModel";
            return _this;
        }
        EventListService.prototype.addItem = function (item) {
            var _this = this;
            if (item == undefined) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given item is null."));
                });
            }
            this.isItemExists(item).then(function (response) {
                if (response.isSuccess()) {
                    _this.getItemIndex(item).then(function (response) {
                        if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                            return new Promise(function (resolve, reject) {
                                resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse(response.errorMessage));
                            });
                        }
                        _this.storageList[response.data] = item;
                        return new Promise(function (resolve, reject) {
                            resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                        });
                    });
                }
                else if (_this.storageList) {
                    _this.storageList.unshift(item);
                    _this.store.setItem(_this.localStorageKey, JSON.stringify(_this.storageList));
                }
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                });
            });
        };
        EventListService.prototype.isItemExists = function (item) {
            if (this.storageList == undefined || this.storageList.length == 0) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            }
            for (var index = 0; index < this.storageList.length; index++) {
                if (item.eventId == this.storageList[index].eventId) {
                    return new Promise(function (resolve, reject) {
                        resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                    });
                }
            }
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
            });
        };
        EventListService.prototype.removeItem = function (itemID) {
            var _this = this;
            if (this.storageList == undefined || this.storageList.length == 0) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the item list is empty."));
                });
            }
            this.getItemById(itemID).then(function (response) {
                if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                    return new Promise(function (resolve, reject) {
                        resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse(response.errorMessage));
                    });
                }
                _this.getItemIndex(response.data).then(function (res) {
                    if (res.isFail()) {
                        return new Promise(function (resolve, reject) {
                            resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse(res.errorMessage));
                        });
                    }
                    _this.storageList.splice(res.data, 1);
                    return new Promise(function (resolve, reject) {
                        resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                    });
                });
            });
        };
        EventListService.prototype.getItemById = function (id) {
            var _this = this;
            if (this.storageList == undefined || this.storageList.length == 0) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the item list is empty."));
                });
            }
            var _loop_1 = function (index) {
                if (this_1.storageList[index].eventId == id) {
                    return { value: new Promise(function (resolve, reject) {
                            resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storageList[index]));
                        }) };
                }
            };
            var this_1 = this;
            for (var index = 0; index < this.storageList.length; index++) {
                var state_1 = _loop_1(index);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the item does not exists in list."));
            });
        };
        EventListService.prototype.getItemIndex = function (item) {
            if (item == undefined) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given item is null."));
                });
            }
            if (this.storageList == undefined || this.storageList.length == 0) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the item list is empty."));
                });
            }
            var _loop_2 = function (index) {
                if (this_2.storageList[index].eventId == item.eventId) {
                    return { value: new Promise(function (resolve, reject) {
                            resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(index));
                        }) };
                }
            };
            var this_2 = this;
            for (var index = 0; index < this.storageList.length; index++) {
                var state_2 = _loop_2(index);
                if (typeof state_2 === "object")
                    return state_2.value;
            }
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the item does not exists in list."));
            });
        };
        EventListService.prototype.getList = function (request) {
            var _this = this;
            if (this.connectionService.isOffline()) {
                this.storageList = JSON.parse(this.store.getItem(this.localStorageKey));
            }
            if (this.storageList != null) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storageList));
                });
            }
            else {
                var pThis = this;
                return new Promise(function (resolve, reject) {
                    var url = _this.httpService.baseWebApi + 'events/GetActiveEvents/';
                    _this.httpService.post(url, request).subscribe(function (response) {
                        if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                            _this.errorMsgPromise.then(function () {
                                _this.alertifyService.error(_this.content.getDataErrorMessage);
                                resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                            });
                        }
                        else {
                            _this.storageList = response.data.activeEvents;
                            _this.addList(_this.storageList);
                            resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storageList));
                        }
                    }, function (err) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    });
                });
            }
        };
        EventListService.prototype.addList = function (items) {
            if (items == undefined || items.length == 0) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given items list is null or empty."));
                });
            }
            this.store.setItem(this.localStorageKey, JSON.stringify(items));
            this.storageList = items;
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        EventListService.prototype.removeList = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.storageList = null;
                _this.store.removeItem(_this.localStorageKey);
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        EventListService.prototype.reboot = function () {
            var _this = this;
            this.logService.addItem(new log_info_1.LogInfo('event list reboot start', 'EventListService', 'reboot', log_types_1.LogTypes.info));
            return new Promise(function (resolve, reject) {
                _this.logService.addItem(new log_info_1.LogInfo('event list remove start', 'EventListService', 'reboot', log_types_1.LogTypes.info));
                _this.removeList().then(function () {
                    _this.logService.addItem(new log_info_1.LogInfo('event list remove end', 'EventListService', 'reboot', log_types_1.LogTypes.info));
                    var deviceId = _this.deviceService.getDeviceId();
                    _this.logService.addItem(new log_info_1.LogInfo('get home page model start', 'EventListService', 'reboot', log_types_1.LogTypes.info));
                    _this.homeService.getItem().then(function (response) {
                        if (response.isSuccessWithResult()) {
                            _this.logService.addItem(new log_info_1.LogInfo('get home page model end', 'EventListService', 'reboot', log_types_1.LogTypes.info));
                            var fireTruckData = response.data.fireTruckInfo;
                            _this.logService.addItem(new log_info_1.LogInfo('event list get list start', 'EventListService', 'reboot', log_types_1.LogTypes.info));
                            _this.getList(new event_list_request_1.EventListRequest(deviceId, fireTruckData.carInfo.positionStation.unionId)).then(function () {
                                _this.logService.addItem(new log_info_1.LogInfo('event list get list end', 'EventListService', 'reboot', log_types_1.LogTypes.info));
                                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                            });
                        }
                    });
                });
            });
        };
        return EventListService;
    }(ArrayStorage_1.ArrayStorage));
    EventListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof OfflineStorage_1.OfflineStorage !== "undefined" && OfflineStorage_1.OfflineStorage) === "function" && _a || Object, typeof (_b = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _b || Object, typeof (_c = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _c || Object, typeof (_d = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" && _d || Object, typeof (_e = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _e || Object, typeof (_f = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _f || Object, typeof (_g = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _g || Object, typeof (_h = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _h || Object])
    ], EventListService);
    exports.EventListService = EventListService;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-list.service.js.map

/***/ }),

/***/ "./src/app/services/event/current-event-details.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/services/base/ItemStorage.ts"), __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/stores/offlineStorage/OfflineStorage.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/services/general/device.service.ts"), __webpack_require__("./src/app/shared-classes/event/event-details-types.ts"), __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/shared-classes/common/navigation-data.ts"), __webpack_require__("./src/app/shared-classes/event/event-details-data.ts"), __webpack_require__("./src/app/shared-classes/event/current-status-model.ts"), __webpack_require__("./src/app/shared-classes/common/route-path.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/shared-classes/offline/fire-truck-offline-action-types.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ItemStorage_1, core_1, http_service_1, StorageResponse_1, connection_service_1, OfflineStorage_1, home_service_1, device_service_1, event_details_types_1, core_2, navigation_service_1, navigation_data_1, event_details_data_1, current_status_model_1, route_path_1, content_service_1, alertify_service_1, fire_truck_offline_action_types_1, ApplicationResponseStatus_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CurrentEventDetailsService = (function (_super) {
        __extends(CurrentEventDetailsService, _super);
        function CurrentEventDetailsService(httpService, connectionService, store, deviceService, homeService, navigationService, contentService, alertifyService) {
            var _this = _super.call(this, contentService) || this;
            _this.httpService = httpService;
            _this.connectionService = connectionService;
            _this.store = store;
            _this.deviceService = deviceService;
            _this.homeService = homeService;
            _this.navigationService = navigationService;
            _this.alertifyService = alertifyService;
            _this.localStorageKey = "currentEventInfo";
            _this.$currentEventAddedEmitter = new core_2.EventEmitter();
            _this.$currentEventUpdatedEmitter = new core_2.EventEmitter();
            _this.$currentEventLocationUpdatedEmitter = new core_2.EventEmitter();
            _this.$currentEventRemovedEmitter = new core_2.EventEmitter();
            _this.$currentActiveMissionUpdatedEmitter = new core_2.EventEmitter();
            _this.$currentStatusUpdatedEmitter = new core_2.EventEmitter();
            _this.routes = new route_path_1.RoutePath();
            return _this;
        }
        CurrentEventDetailsService.prototype.getItem = function () {
            var _this = this;
            if (this.connectionService.isOffline()) {
                this.storageItem = JSON.parse(this.store.getItem(this.localStorageKey));
            }
            if (this.storageItem != null) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storageItem));
                });
            }
            else {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(null));
                });
            }
        };
        CurrentEventDetailsService.prototype.addItem = function (item, isRedirect) {
            if (isRedirect === void 0) { isRedirect = true; }
            if (!item) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given item is null or empty."));
                });
            }
            this.storageItem = item;
            this.store.setItem(this.localStorageKey, JSON.stringify(item));
            if (isRedirect) {
                this.homeService.setActiveAtEvent(item);
                var data = new event_details_data_1.EventDetailsData(this.storageItem.generalInfo.eventId, event_details_types_1.EventDetailsTypes.CurrentEvent, true);
                this.navigationService.navigate(new navigation_data_1.NavigationData(this.routes.EVENT_DETAILS, data));
                if (this.storageItem.generalInfo.eventId == -1) {
                    this.$currentEventUpdatedEmitter.emit(this.storageItem);
                }
            }
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        CurrentEventDetailsService.prototype.updateItemLog = function (info) {
            if (!info || !info.eventLog || !this.storageItem) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given log is null or empty."));
                });
            }
            if (info.generalInfo.eventId == this.storageItem.generalInfo.eventId) {
                this.storageItem.eventLog = info.eventLog;
                this.addItem(this.storageItem, false);
                this.$currentStatusUpdatedEmitter.emit(this.storageItem);
            }
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        CurrentEventDetailsService.prototype.updateItem = function (item) {
            if (!item) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given item is null or empty."));
                });
            }
            if (!this.storageItem) {
                this.addItem(item);
            }
            else if (item.generalInfo.eventId == this.storageItem.generalInfo.eventId) {
                this.update(item);
                this.$currentEventUpdatedEmitter.emit(this.storageItem);
            }
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        CurrentEventDetailsService.prototype.updateItemLocation = function (item) {
            if (!item) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given item is null or empty."));
                });
            }
            if (item.generalInfo.eventId == this.storageItem.generalInfo.eventId) {
                this.update(item);
                this.$currentEventLocationUpdatedEmitter.emit(this.storageItem);
            }
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        CurrentEventDetailsService.prototype.update = function (item) {
            this.storageItem.areas = item.areas;
            this.storageItem.eventLog = item.eventLog;
            this.storageItem.forcesInfo = item.forcesInfo;
            this.storageItem.generalInfo = item.generalInfo;
            this.store.setItem(this.localStorageKey, JSON.stringify(item));
        };
        CurrentEventDetailsService.prototype.isCurrentEventByCarId = function (item) {
            var _this = this;
            if (!item || !item.forcesInfo || !item.forcesInfo.activeTeams || item.forcesInfo.activeTeams.length == 0) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            }
            return new Promise(function (resolve, reject) {
                _this.homeService.getCar().then(function (response) {
                    if (response.isSuccessWithResult()) {
                        for (var index = 0; index < item.forcesInfo.activeTeams.length; index++) {
                            if (item.forcesInfo.activeTeams[index].carInfo.carId == response.data.carId) {
                                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                                return;
                            }
                        }
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                });
            });
        };
        CurrentEventDetailsService.prototype.isCurrentEventById = function (itemId) {
            return this.storageItem != null && this.storageItem.generalInfo.eventId == itemId;
        };
        CurrentEventDetailsService.prototype.getCurrentCarTeam = function () {
            var _this = this;
            if (!this.storageItem) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(null));
                });
            }
            return new Promise(function (resolve, reject) {
                _this.homeService.getCar().then(function (response) {
                    if (response.isSuccessWithResult()) {
                        for (var index = 0; index < _this.storageItem.forcesInfo.activeTeams.length; index++) {
                            if (_this.storageItem.forcesInfo.activeTeams[index].carInfo.carId == response.data.carId) {
                                resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storageItem.forcesInfo.activeTeams[index]));
                                break;
                            }
                        }
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(null));
                    }
                });
            });
        };
        CurrentEventDetailsService.prototype.removeItem = function (itemId) {
            if (itemId === void 0) { itemId = -1; }
            if (!this.storageItem) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given log is null or empty."));
                });
            }
            if (itemId == this.storageItem.generalInfo.eventId || itemId == -1) {
                this.storageItem = null;
                this.store.removeItem(this.localStorageKey);
                this.$currentEventRemovedEmitter.emit(itemId);
                this.homeService.removeAtEvent();
            }
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        CurrentEventDetailsService.prototype.cancelMission = function (request) {
            var _this = this;
            var pThis = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Events/CancelMission/';
                _this.httpService.post(url, request, fire_truck_offline_action_types_1.FireTruckOfflineActionTypes.MissionStatusUpdate).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.updateDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        _this.alertifyService.success(_this.content.successMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.updateDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            });
        };
        CurrentEventDetailsService.prototype.changeMissionStatus = function (request) {
            var _this = this;
            var pThis = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Events/UpdateMissionStatus/';
                _this.httpService.post(url, request, fire_truck_offline_action_types_1.FireTruckOfflineActionTypes.MissionStatusUpdate).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.updateDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        _this.alertifyService.success(_this.content.successMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.updateDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            });
        };
        CurrentEventDetailsService.prototype.launchMission = function (request) {
            var _this = this;
            var pThis = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Events/LaunchToEvent/';
                _this.httpService.post(url, request, fire_truck_offline_action_types_1.FireTruckOfflineActionTypes.LaunchToEvent).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.updateDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        _this.alertifyService.success(_this.content.successMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.updateDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            });
        };
        CurrentEventDetailsService.prototype.addNewMission = function (request) {
            var _this = this;
            var pThis = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Events/AddNewVirtualMission/';
                _this.httpService.post(url, request, fire_truck_offline_action_types_1.FireTruckOfflineActionTypes.MissionStatusUpdate).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.updateDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        _this.alertifyService.success(_this.content.successMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.updateDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            });
        };
        CurrentEventDetailsService.prototype.updateAcitveMission = function (carTeam) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.homeService.getCar().then(function (homeResponse) {
                    if (carTeam.activeMission.eventId != _this.storageItem.generalInfo.eventId) {
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        return;
                    }
                    for (var index = 0; index < _this.storageItem.forcesInfo.activeTeams.length; index++) {
                        if (_this.storageItem.forcesInfo.activeTeams[index].carInfo.carId == carTeam.carInfo.carId) {
                            _this.storageItem.forcesInfo.activeTeams[index] = carTeam;
                            _this.store.setItem(_this.localStorageKey, JSON.stringify(_this.storageItem));
                            _this.homeService.setActiveAtEvent(_this.storageItem);
                            if (homeResponse.data.carId == carTeam.carInfo.carId) {
                                _this.$currentActiveMissionUpdatedEmitter.emit(_this.storageItem.forcesInfo.activeTeams[index].activeMission);
                            }
                            else {
                                _this.$currentStatusUpdatedEmitter.emit(_this.storageItem);
                            }
                            resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
                            break;
                        }
                    }
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            });
        };
        CurrentEventDetailsService.prototype.updateControlTime = function (request) {
            var _this = this;
            var pThis = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Events/UpdateEventControlStatus/';
                _this.httpService.post(url, request, fire_truck_offline_action_types_1.FireTruckOfflineActionTypes.UpdateEventControlTime).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.updateDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        _this.alertifyService.success(_this.content.successMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.updateDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            });
        };
        CurrentEventDetailsService.prototype.getCurrentStatus = function () {
            return new current_status_model_1.CurrentStatusModel(this.storageItem);
        };
        CurrentEventDetailsService.prototype.updateNewMissionStatus = function (request) {
            var _this = this;
            var pThis = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Events/UpdateVirtualMissionStatus/';
                _this.httpService.post(url, request, fire_truck_offline_action_types_1.FireTruckOfflineActionTypes.MissionStatusUpdate).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.updateDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        _this.alertifyService.success(_this.content.successMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.updateDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            });
        };
        return CurrentEventDetailsService;
    }(ItemStorage_1.ItemStorage));
    CurrentEventDetailsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object, typeof (_b = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _b || Object, typeof (_c = typeof OfflineStorage_1.OfflineStorage !== "undefined" && OfflineStorage_1.OfflineStorage) === "function" && _c || Object, typeof (_d = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" && _d || Object, typeof (_e = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _e || Object, typeof (_f = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _f || Object, typeof (_g = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _g || Object, typeof (_h = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _h || Object])
    ], CurrentEventDetailsService);
    exports.CurrentEventDetailsService = CurrentEventDetailsService;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=current-event-details.service.js.map

/***/ }),

/***/ "./src/app/services/event/event-details.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/services/base/ItemStorage.ts"), __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/stores/offlineStorage/OfflineStorage.ts"), __webpack_require__("./src/app/shared-classes/event/current-status-model.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ItemStorage_1, core_1, http_service_1, StorageResponse_1, connection_service_1, OfflineStorage_1, current_status_model_1, content_service_1, alertify_service_1, ApplicationResponseStatus_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventDetailsService = (function (_super) {
        __extends(EventDetailsService, _super);
        function EventDetailsService(httpService, connectionService, contentService, store, alertifyService) {
            var _this = _super.call(this, contentService) || this;
            _this.httpService = httpService;
            _this.connectionService = connectionService;
            _this.store = store;
            _this.alertifyService = alertifyService;
            _this.localStorageKey = "eventInfo";
            _this.$eventUpdatedEmitter = new core_1.EventEmitter();
            _this.$eventLocationUpdatedEmitter = new core_1.EventEmitter();
            return _this;
        }
        EventDetailsService.prototype.getItem = function (request) {
            var _this = this;
            if (this.connectionService.isOffline()) {
                this.storageItem = JSON.parse(this.store.getItem(this.localStorageKey));
            }
            if (this.storageItem != null && this.storageItem.generalInfo.eventId == request.eventId) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storageItem));
                });
            }
            else {
                var pThis = this;
                return new Promise(function (resolve, reject) {
                    var url = _this.httpService.baseWebApi + 'Events/GetEventDetails/';
                    _this.httpService.post(url, request).subscribe(function (response) {
                        if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                            _this.errorMsgPromise.then(function () {
                                _this.alertifyService.error(_this.content.getDataErrorMessage);
                                resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                            });
                        }
                        else {
                            _this.storageItem = response.data.eventInfo;
                            _this.store.setItem(_this.localStorageKey, JSON.stringify(_this.storageItem));
                            resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storageItem));
                        }
                    }, function (err) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    });
                });
            }
        };
        EventDetailsService.prototype.addItem = function (item) {
            if (!item) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given item is null or empty."));
                });
            }
            this.storageItem = item;
            this.store.setItem(this.localStorageKey, JSON.stringify(this.storageItem));
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        EventDetailsService.prototype.updateItem = function (item) {
            if (!item || !this.storageItem) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given item is null or empty."));
                });
            }
            if (item.generalInfo.eventId == this.storageItem.generalInfo.eventId) {
                this.update(item);
                this.$eventUpdatedEmitter.emit(this.storageItem);
            }
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        EventDetailsService.prototype.updateItemLocation = function (item) {
            if (!item || !this.storageItem) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given item is null or empty."));
                });
            }
            this.update(item);
            this.$eventLocationUpdatedEmitter.emit(this.storageItem);
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        EventDetailsService.prototype.updateItemLog = function (info) {
            if (!info || !info.eventLog || !this.storageItem) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given log is null or empty."));
                });
            }
            if (info.generalInfo.eventId == this.storageItem.generalInfo.eventId) {
                this.storageItem.eventLog = info.eventLog;
                this.store.setItem(this.localStorageKey, JSON.stringify(this.storageItem));
            }
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        EventDetailsService.prototype.removeItem = function (itemId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.storageItem) {
                    return new Promise(function (resolve, reject) {
                        resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given log is null or empty."));
                    });
                }
                if (itemId == _this.storageItem.generalInfo.eventId) {
                    _this.storageItem = null;
                    _this.store.removeItem(_this.localStorageKey);
                }
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        EventDetailsService.prototype.getCurrentStatus = function () {
            return new current_status_model_1.CurrentStatusModel(this.storageItem);
        };
        EventDetailsService.prototype.update = function (item) {
            this.storageItem.areas = item.areas;
            this.storageItem.eventLog = item.eventLog;
            this.storageItem.forcesInfo = item.forcesInfo;
            this.storageItem.generalInfo = item.generalInfo;
            this.store.setItem(this.localStorageKey, JSON.stringify(this.storageItem));
        };
        EventDetailsService.prototype.getAllEventLogs = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Events/GetEventLogReports/';
                _this.httpService.post(url, request).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    else {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response.data));
                    }
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        return EventDetailsService;
    }(ItemStorage_1.ItemStorage));
    EventDetailsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object, typeof (_b = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _b || Object, typeof (_c = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _c || Object, typeof (_d = typeof OfflineStorage_1.OfflineStorage !== "undefined" && OfflineStorage_1.OfflineStorage) === "function" && _d || Object, typeof (_e = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _e || Object])
    ], EventDetailsService);
    exports.EventDetailsService = EventDetailsService;
    var _a, _b, _c, _d, _e;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-details.service.js.map

/***/ }),

/***/ "./src/app/services/general/alertify.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./node_modules/alertifyjs/build/alertify.js"), __webpack_require__("./src/app/shared-classes/alertify/alertify-types.ts"), __webpack_require__("./src/app/shared-components/event-general-info/event-number-pipe/event-last-number.pipe.ts"), __webpack_require__("./src/app/shared-components/event-general-info/event-number-pipe/event-first-number.pipe.ts"), __webpack_require__("./src/app/app.config.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, alertify, alertify_types_1, event_last_number_pipe_1, event_first_number_pipe_1, app_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AlertifyService = (function () {
        function AlertifyService(config) {
            this.config = config;
            this.notifyStaticClass = 'alertify-notifier';
            this.promtStaticClass = 'ajs-dialog';
            alertify.defaults = {
                // dialogs defaults
                autoReset: true,
                basic: false,
                closable: true,
                closableByDimmer: true,
                frameless: false,
                maintainFocus: true,
                maximizable: true,
                modal: true,
                movable: true,
                moveBounded: false,
                overflow: true,
                padding: true,
                pinnable: true,
                pinned: true,
                preventBodyShift: false,
                resizable: true,
                startMaximized: false,
                transition: 'pulse',
                // notifier defaults
                notifier: {
                    // auto-dismiss wait time (in seconds)  
                    delay: 5,
                    // default position
                    position: 'bottom-right',
                    // adds a close button to notifier messages
                    closeButton: false
                },
                // language resources 
                glossary: {
                    // dialogs default title
                    title: '',
                    // ok button text
                    ok: 'אישור',
                    // cancel button text
                    cancel: 'ביטול'
                },
                // theme settings
                theme: {
                    // class name attached to prompt dialog input textbox.
                    input: 'ajs-input',
                    // class name attached to ok button
                    ok: 'ajs-ok',
                    // class name attached to cancel button 
                    cancel: 'ajs-cancel'
                }
            };
        }
        AlertifyService.prototype.promt = function (config) {
            var pThis = this;
            switch (config.type) {
                case alertify_types_1.AlertifyTypes.confirm:
                    alertify.confirm(config.title, config.msg, config.okCallback, config.cancelCallback).set('labels', { ok: config.okText, cancel: config.cancelText });
                    //alertify.confirm('Confirm Title', 'Confirm Message', function(){ alertify.success('Ok') }
                    //, function(){ alertify.error('Cancel')});
                    break;
                case alertify_types_1.AlertifyTypes.promt:
                    alertify.prompt(config.title, config.msg, config.watermark, config.okCallback, config.cancelCallback).set('labels', { ok: config.okText, cancel: config.cancelText });
                    //alertify.prompt( 'Prompt Title', 'Prompt Message', 'Prompt Value'
                    //, function(evt, value) { alertify.success('You entered: ' + value) }
                    //, function() { alertify.error('Cancel') });
                    break;
            }
            if (config.customClass) {
                this.setAdditionalClass(this.promtStaticClass, config.customClass);
            }
            return null;
        };
        AlertifyService.prototype.notify = function (msg, type, customClass, dismisstedCallback, delay) {
            if (customClass === void 0) { customClass = null; }
            if (dismisstedCallback === void 0) { dismisstedCallback = null; }
            if (delay === void 0) { delay = 10; }
            // a delay value of 0 will keep this open
            var pThis = this;
            switch (type) {
                case alertify_types_1.AlertifyTypes.success:
                    alertify.success(msg, delay, dismisstedCallback);
                    break;
                case alertify_types_1.AlertifyTypes.warning:
                    alertify.warning(msg, delay, dismisstedCallback);
                    break;
                case alertify_types_1.AlertifyTypes.error:
                    alertify.error(msg, delay, dismisstedCallback);
                    break;
                case alertify_types_1.AlertifyTypes.message:
                    alertify.message(msg, delay, dismisstedCallback);
                    break;
                case alertify_types_1.AlertifyTypes.notify:
                    alertify.notify(msg, customClass, delay, dismisstedCallback);
                    break;
            }
            if (customClass) {
                this.setAdditionalClass(this.notifyStaticClass, customClass);
            }
            return null;
        };
        AlertifyService.prototype.eventNotification = function (alertifyData) {
            this.notify(alertifyData.message, alertifyData.alertType, 'node-messages');
        };
        AlertifyService.prototype.createEmloyeesConfirm = function (employees) {
            var html = '';
            for (var index = 0; index < employees.length; index++) {
                html = html + '<span>' + employees[index].employeeName + '</span>,';
            }
            return html.slice(0, -1);
        };
        AlertifyService.prototype.setAdditionalClass = function (staticClass, className) {
            if (className === void 0) { className = null; }
            var elLogs = document.querySelector("." + staticClass);
            if (elLogs && elLogs.className.indexOf(className) == -1) {
                elLogs.className = elLogs.className + " " + className;
            }
        };
        AlertifyService.prototype.clearAdditionalClass = function (staticClass, className) {
            var elLogs = document.querySelector("." + staticClass);
            if (elLogs && elLogs.className.indexOf(className) != -1 && elLogs.childElementCount == 1) {
                elLogs.className = elLogs.className.replace(className, '');
            }
        };
        AlertifyService.prototype.clearNotifyAdditionalClass = function (className) {
            this.clearAdditionalClass(this.notifyStaticClass, className);
        };
        AlertifyService.prototype.clearPromtAdditionalClass = function (className) {
            this.clearAdditionalClass(this.promtStaticClass, className);
        };
        AlertifyService.prototype.createEventDetailNotification = function (event) {
            var lastFilter = new event_last_number_pipe_1.EventLastNumberPipe();
            var firstFilter = new event_first_number_pipe_1.EventFirstNumberPipe();
            var html = '';
            html = '<span class=\'event-type-label\' style="background-color: ' + event.parentEventTypeColor + '">' + event.parentEventTypeDesc + '</span>';
            html = html + '<span class=\'counter large\'>' + lastFilter.transform(event.eventNumber, 3) + '</span>';
            html = html + '<span class=\'counter small\'>' + firstFilter.transform(event.eventNumber, 3) + '</span>';
            html = html + '<div class=\'desc\'>' + event.eventDesc + " - " + event.eventTypeDesc + '</div> ';
            html = html + '<div class=\'location\'>' + event.eventLocationDesc + '</div> ';
            return html;
        };
        AlertifyService.prototype.error = function (msg) {
            this.notify(msg, alertify_types_1.AlertifyTypes.error, 'node-messages');
        };
        AlertifyService.prototype.warring = function (msg) {
            this.notify(msg, alertify_types_1.AlertifyTypes.warning, 'node-messages');
        };
        AlertifyService.prototype.success = function (msg) {
            this.notify(msg, alertify_types_1.AlertifyTypes.success, 'node-messages');
        };
        AlertifyService.prototype.debugAlert = function (msg) {
            if (this.config.getConfig('is_debug_mode')) {
                alert(msg);
            }
        };
        return AlertifyService;
    }());
    AlertifyService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof app_config_1.AppConfig !== "undefined" && app_config_1.AppConfig) === "function" && _a || Object])
    ], AlertifyService);
    exports.AlertifyService = AlertifyService;
    var PromtConfig = (function () {
        function PromtConfig(title, msg, okCallback, cancelCallback, customClass) {
            if (customClass === void 0) { customClass = null; }
            this.type = alertify_types_1.AlertifyTypes.confirm;
            this.watermark = null;
            this.cancelText = "ביטול";
            this.okText = "אישור";
            this.title = title;
            this.msg = msg;
            this.customClass = customClass;
            this.okCallback = okCallback;
            this.cancelCallback = cancelCallback;
        }
        return PromtConfig;
    }());
    exports.PromtConfig = PromtConfig;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=alertify.service.js.map

/***/ }),

/***/ "./src/app/services/general/content.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js"), __webpack_require__("./node_modules/rxjs/Rx.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, http_1, Rx_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContentService = (function () {
        function ContentService(http) {
            this.http = http;
            this.content = null;
        }
        ContentService.prototype.getContent = function (key) {
            if (!key || key == '') {
                return "";
            }
            return this.content[key];
        };
        ContentService.prototype.load = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (_this.content) {
                    resolve(true);
                }
                else {
                    var request = _this.http.get('additional-files/he.content.json');
                    if (request) {
                        request
                            .map(function (res) { return res.json(); })
                            .catch(function (error) {
                            console.error('Error reading content file');
                            resolve(error);
                            return Rx_1.Observable.throw(error.json().error || 'Server error');
                        })
                            .subscribe(function (responseData) {
                            _this.content = responseData;
                            resolve(true);
                        });
                    }
                    else {
                        console.error('content file is not valid');
                        resolve(true);
                    }
                }
            });
        };
        return ContentService;
    }());
    ContentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], ContentService);
    exports.ContentService = ContentService;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=content.service.js.map

/***/ }),

/***/ "./src/app/services/general/date-timer-service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./node_modules/rxjs/Rx.js"), __webpack_require__("./node_modules/moment/moment.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, rxjs_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateTimerService = (function () {
        // value : date as string
        // unit : (second, minute, hour, day, month, year) units to count
        function DateTimerService(value, unit) {
            if (unit === void 0) { unit = DatePartUnitTypes.Minute; }
            moment.locale('he');
            switch (unit) {
                case DatePartUnitTypes.Day:
                    this.timer = rxjs_1.Observable.interval(1000).map(function (tick) { return moment(value).startOf('day').fromNow(); }).share();
                    break;
                case DatePartUnitTypes.Hour:
                    this.timer = rxjs_1.Observable.interval(1000).map(function (tick) { return moment(value).startOf('hour').fromNow(); }).share();
                    break;
                case DatePartUnitTypes.Month:
                    this.timer = rxjs_1.Observable.interval(1000).map(function (tick) { return moment(value).startOf('month').fromNow(); }).share();
                    break;
                case DatePartUnitTypes.Second:
                    this.timer = rxjs_1.Observable.interval(1000).map(function (tick) { return moment(value).startOf('second').fromNow(); }).share();
                    break;
                case DatePartUnitTypes.Year:
                    this.timer = rxjs_1.Observable.interval(1000).map(function (tick) { return moment(value).startOf('year').fromNow(); }).share();
                    break;
                case DatePartUnitTypes.Minute:
                default:
                    this.timer = rxjs_1.Observable.interval(1000).map(function (tick) { return moment(value).startOf('minute').fromNow(); }).share();
                    break;
            }
        }
        DateTimerService.prototype.getBeforeHours = function () {
            return this.timer;
        };
        return DateTimerService;
    }());
    DateTimerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [String, Number])
    ], DateTimerService);
    exports.DateTimerService = DateTimerService;
    var DatePartUnitTypes;
    (function (DatePartUnitTypes) {
        DatePartUnitTypes[DatePartUnitTypes["Second"] = 0] = "Second";
        DatePartUnitTypes[DatePartUnitTypes["Minute"] = 1] = "Minute";
        DatePartUnitTypes[DatePartUnitTypes["Hour"] = 2] = "Hour";
        DatePartUnitTypes[DatePartUnitTypes["Day"] = 3] = "Day";
        DatePartUnitTypes[DatePartUnitTypes["Month"] = 4] = "Month";
        DatePartUnitTypes[DatePartUnitTypes["Year"] = 5] = "Year";
    })(DatePartUnitTypes = exports.DatePartUnitTypes || (exports.DatePartUnitTypes = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=date-timer-service.js.map

/***/ }),

/***/ "./src/app/services/general/device.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/app.config.ts"), __webpack_require__("./src/app/shared-classes/common/connection-state-types.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/shared-classes/common/route-path.ts"), __webpack_require__("./src/app/services/general/keep-alive.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, connection_service_1, app_config_1, connection_state_types_1, navigation_service_1, route_path_1, keep_alive_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DeviceService = (function () {
        function DeviceService(connectionService, config, navigationService, zone, keepService) {
            var _this = this;
            this.connectionService = connectionService;
            this.config = config;
            this.navigationService = navigationService;
            this.zone = zone;
            this.keepService = keepService;
            this.keepService.networkCurrentStatus.subscribe(function (connected) {
                //if (connected && !this.keepService.NetworkLastStatus){
                if (connected) {
                    _this.keepService.stop();
                    connectionService.onChangeState(connection_state_types_1.ConnectionStateTypes.online);
                    //this.keepService.NetworkLastStatus = true;
                }
                else if (!connected && _this.keepService.NetworkLastStatus) {
                    //connectionService.onChangeState(ConnectionStateTypes.offline);
                    //this.keepService.NetworkLastStatus = false;
                }
            });
            this.device_info = config.getConfig('default_device_information');
            var isDebugMode = config.getConfig('is_debug_mode');
            this.$deviceBackEmitter = new core_1.EventEmitter();
            this.routes = new route_path_1.RoutePath();
            this.cordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
            if (window.device && !isDebugMode) {
                this.device_info.uuid = window.device.uuid.toLowerCase();
            }
            if (this.cordovaApp) {
                document.addEventListener('online', function (e) {
                    _this.zone.run(function () {
                        _this.keepService.start("https://jsonplaceholder.typicode.com/todos/1", 1000);
                        // this.keepService.runTimer();
                    });
                }, false);
                document.addEventListener('offline', function (e) {
                    _this.zone.run(function () {
                        _this.keepService.updatedNetworkCurrentStatus(false);
                        connectionService.onChangeState(connection_state_types_1.ConnectionStateTypes.offline);
                    });
                }, false);
                document.addEventListener('backbutton', function (e) {
                    _this.zone.run(function () {
                        if (_this.navigationService.getRouter().url == _this.routes.EVENT_DETAILS) {
                            _this.$deviceBackEmitter.emit(e);
                        }
                        else {
                            _this.navigationService.goBack();
                        }
                    });
                }, false);
            }
            else {
                window.addEventListener('online', function (e) {
                    _this.keepService.start("https://jsonplaceholder.typicode.com/todos/1", 1000);
                    //connectionService.onChangeState(ConnectionStateTypes.online);
                    // this.keepService.runTimer();
                }, false);
                window.addEventListener('offline', function (e) {
                    connectionService.onChangeState(connection_state_types_1.ConnectionStateTypes.offline);
                }, false);
                window.addEventListener('backbutton', function (e) {
                    if (_this.navigationService.getRouter().url == _this.routes.EVENT_DETAILS) {
                        _this.$deviceBackEmitter.emit(e);
                    }
                    else {
                        _this.navigationService.goBack();
                    }
                }, false);
            }
        }
        DeviceService.prototype.getDeviceId = function () {
            return this.device_info.uuid;
        };
        DeviceService.prototype.isCorodva = function () {
            return this.cordovaApp;
        };
        return DeviceService;
    }());
    DeviceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _a || Object, typeof (_b = typeof app_config_1.AppConfig !== "undefined" && app_config_1.AppConfig) === "function" && _b || Object, typeof (_c = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _c || Object, typeof (_d = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _d || Object, typeof (_e = typeof keep_alive_service_1.KeepAliveMonitorService !== "undefined" && keep_alive_service_1.KeepAliveMonitorService) === "function" && _e || Object])
    ], DeviceService);
    exports.DeviceService = DeviceService;
    var _a, _b, _c, _d, _e;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=device.service.js.map

/***/ }),

/***/ "./src/app/services/general/gps.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/general/projection.service.ts"), __webpack_require__("./src/app/shared-classes/common/status-code.ts"), __webpack_require__("./node_modules/rxjs/Observable.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, projection_service_1, status_code_1, Observable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GPSService = (function () {
        function GPSService(projService) {
            this.projService = projService;
            this._watchPosition = null;
        }
        GPSService.prototype.getPosition = function () {
            var pThis = this;
            return new Promise(function (resolve, reject) {
                if (navigator.geolocation == null || navigator.geolocation.getCurrentPosition == null || navigator.platform.indexOf("Win") != -1) {
                    return reject(pThis.getErrorMessageResult(pThis._gpsError));
                }
                navigator.geolocation.getCurrentPosition(function (e) {
                    resolve(pThis.getSuccessResult(e));
                }, function (e) {
                    reject(pThis.getErrorResult(e));
                }, { maximumAge: 3000, timeout: 10000, enableHighAccuracy: true });
            });
        };
        GPSService.prototype.watchPosition = function () {
            var _this = this;
            var pThis = this;
            if (pThis._watchPosition == null) {
                pThis._watchPosition = new Observable_1.Observable(function (observer) {
                    if (navigator.geolocation == null || navigator.geolocation.watchPosition == null) {
                        observer.error(pThis.getErrorMessageResult(pThis._gpsError));
                    }
                    pThis._navigatorWatchHandler = navigator.geolocation.watchPosition(function (e) {
                        observer.next(pThis.getSuccessResult(e));
                    }, function (e) {
                        _this.clearNavigator();
                        observer.error(pThis.getErrorResult(e));
                    }, { maximumAge: 3000, timeout: 10000, enableHighAccuracy: true });
                });
            }
            return pThis._watchPosition;
        };
        GPSService.prototype.stopWatchPosition = function () {
            this.clearNavigator();
        };
        GPSService.prototype.clearNavigator = function () {
            navigator.geolocation.clearWatch(this._navigatorWatchHandler);
            this._navigatorWatchHandler = null;
            this._watchPosition = null;
        };
        GPSService.prototype.getErrorMessageResult = function (e) {
            var error = {
                msg: ""
            };
            error.msg = e;
            return this.setResult(status_code_1.StatusCode.FAIL, null, error);
        };
        GPSService.prototype.getErrorResult = function (e, isHighAccuracy) {
            var error = {
                msg: ""
            };
            switch (e.code) {
                case e.PERMISSION_DENIED:
                    error.msg = this._gpsPerrmissionDenied;
                    break;
                case e.POSITION_UNAVAILABLE:
                    error.msg = this._gpsNotAvailable;
                    break;
                case e.TIMEOUT:
                    if (!isHighAccuracy)
                        error.msg = this._gpsNotAvailable;
                    break;
                case e.UNKNOWN_ERROR:
                    error.msg = this._gpsError;
                    break;
            }
            return this.setResult(status_code_1.StatusCode.FAIL, null, error);
        };
        GPSService.prototype.getSuccessResult = function (e) {
            var success;
            success = {
                accuracy: e.coords.accuracy,
                heading: e.coords.heading,
                lat: e.coords.latitude,
                lon: e.coords.longitude,
                speed: e.coords.speed
            };
            success = this.projectCoordinates(success);
            return this.setResult(status_code_1.StatusCode.SUCCESS, success, null);
        };
        GPSService.prototype.projectCoordinates = function (success) {
            var coords = this.projService.transformWGS1984ToITM(success.lat, success.lon);
            success.x = coords.x;
            success.y = coords.y;
            return success;
        };
        GPSService.prototype.setResult = function (status, success, error) {
            var result;
            result = {
                status: status,
                error: error,
                success: success
            };
            return result;
        };
        return GPSService;
    }());
    GPSService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof projection_service_1.ProjectionService !== "undefined" && projection_service_1.ProjectionService) === "function" && _a || Object])
    ], GPSService);
    exports.GPSService = GPSService;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=gps.service.js.map

/***/ }),

/***/ "./src/app/services/general/keep-alive.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./node_modules/rxjs/Rx.js"), __webpack_require__("./src/app/services/general/log.service.ts"), __webpack_require__("./node_modules/rxjs/Rx.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, http_service_1, alertify_service_1, rxjs_1, log_service_1, rxjs_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KeepAliveMonitorService = (function () {
        function KeepAliveMonitorService(httpService, alertifyService, logService) {
            this.httpService = httpService;
            this.alertifyService = alertifyService;
            this.logService = logService;
            this._networkCurrentStatus = new rxjs_2.BehaviorSubject(false);
            this.networkCurrentStatus = this._networkCurrentStatus.asObservable();
            this._networkLastStatus = false;
            //new BehaviorSubject<boolean>(false);
            //networkLastStatus = this._networkLastStatus.asObservable();
            this.numbers = rxjs_1.Observable.interval(1000);
        }
        KeepAliveMonitorService.prototype.start = function (url, tick) {
            var _this = this;
            this.keepAliveTimer = rxjs_1.Observable.interval(tick).subscribe(function (tick) {
                _this.httpService.get(url).subscribe(function (datd) {
                    _this.updatedNetworkCurrentStatus(true);
                }, (function (err) {
                    _this.updatedNetworkCurrentStatus(false);
                }));
            });
        };
        KeepAliveMonitorService.prototype.stop = function () {
            this.keepAliveTimer.unsubscribe();
        };
        KeepAliveMonitorService.prototype.updatedNetworkCurrentStatus = function (alive) {
            this._networkCurrentStatus.next(alive);
        };
        KeepAliveMonitorService.prototype.updatedNetworkLastStatus = function (alive) {
            //this._networkLastStatus.next(alive);
            this._networkLastStatus = alive;
        };
        Object.defineProperty(KeepAliveMonitorService.prototype, "NetworkLastStatus", {
            get: function () {
                return this._networkLastStatus;
            },
            set: function (status) {
                this._networkLastStatus = status;
            },
            enumerable: true,
            configurable: true
        });
        return KeepAliveMonitorService;
    }());
    KeepAliveMonitorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object, typeof (_b = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _b || Object, typeof (_c = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _c || Object])
    ], KeepAliveMonitorService);
    exports.KeepAliveMonitorService = KeepAliveMonitorService;
    var _a, _b, _c;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=keep-alive.service.js.map

/***/ }),

/***/ "./src/app/services/general/keep.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/base/ItemStorage.ts"), __webpack_require__("./node_modules/rxjs/Rx.js"), __webpack_require__("./src/app/services/general/log.service.ts"), __webpack_require__("./src/app/shared-classes/common/log-info.ts"), __webpack_require__("./src/app/shared-classes/common/log-types.ts"), __webpack_require__("./node_modules/rxjs/Rx.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, http_service_1, ApplicationResponseStatus_1, alertify_service_1, content_service_1, ItemStorage_1, rxjs_1, log_service_1, log_info_1, log_types_1, rxjs_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KeepAliveService = (function (_super) {
        __extends(KeepAliveService, _super);
        function KeepAliveService(httpService, alertifyService, logService, contentService) {
            var _this = _super.call(this, contentService) || this;
            _this.httpService = httpService;
            _this.alertifyService = alertifyService;
            _this.logService = logService;
            _this._timer = new rxjs_2.BehaviorSubject(null);
            _this.timer = _this._timer.asObservable();
            _this.numbers = rxjs_1.Observable.interval(2000);
            return _this;
            //this.numbers = Observable.timer(config.getConfig('keep_alive_interval'), config.getConfig('keep_alive_interval'));
            //numbers.subscribe(x => this.keep());
        }
        KeepAliveService.prototype.runTimer = function () {
            var _this = this;
            this.keepAliveTimer = this.numbers.subscribe(function (tick) {
                _this.keep();
            });
        };
        KeepAliveService.prototype.updatedAlive = function (alive) {
            this._timer.next(alive);
        };
        KeepAliveService.prototype.keep = function () {
            var _this = this;
            var url = 'http://httpbin.org/post'; //this.httpService.baseWebApi + 'Main/KeepAlive/';
            this.logService.addItem(new log_info_1.LogInfo('KEEP ALIVE', url, 'keep alive', log_types_1.LogTypes.info));
            this.httpService.post(url, null).subscribe(function (response) {
                _this.logService.addItem(new log_info_1.LogInfo('KEEP ALIVE Came Back', url, 'keep alive back', log_types_1.LogTypes.error));
                _this.updatedAlive(true);
                _this.keepAliveTimer.unsubscribe();
                if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                    _this.logService.addItem(new log_info_1.LogInfo('KEEP ALIVE FAILD', url, 'keep alive', log_types_1.LogTypes.error));
                    //this.alertifyService.error(this.content.getDataErrorMessage);
                }
            }, function (err) {
                _this.errorMsgPromise.then(function () {
                    _this.logService.addItem(new log_info_1.LogInfo('KEEP ALIVE CONNECTION EXCEPTION', url, 'keep alive', log_types_1.LogTypes.error));
                    _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                });
            });
        };
        return KeepAliveService;
    }(ItemStorage_1.ItemStorage));
    KeepAliveService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object, typeof (_b = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _b || Object, typeof (_c = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _c || Object, typeof (_d = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _d || Object])
    ], KeepAliveService);
    exports.KeepAliveService = KeepAliveService;
    var _a, _b, _c, _d;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=keep.service.js.map

/***/ }),

/***/ "./src/app/services/general/log.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/common/log-info.ts"), __webpack_require__("./src/app/stores/offlineStorage/OfflineStorage.ts"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./node_modules/rxjs/Rx.js"), __webpack_require__("./src/app/app.config.ts"), __webpack_require__("./node_modules/moment/moment.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, log_info_1, OfflineStorage_1, StorageResponse_1, rxjs_1, app_config_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogService = (function () {
        function LogService(store, config) {
            var _this = this;
            this.store = store;
            this.localStorageKey = "LogList";
            var numbers = rxjs_1.Observable.timer(1000, config.getConfig('clear_logs_time_period'));
            numbers.subscribe(function (x) {
                var time = moment().format("HH:mm");
                if (time == config.getConfig('clear_logs_time')) {
                    _this.clearList();
                    _this.addItem(new log_info_1.LogInfo('the log has been deleted at : ' + moment().format("HH:mm:ss"), 'LogService', 'Log Action'));
                }
            });
        }
        LogService.prototype.addItem = function (item) {
            if (item == undefined) {
                return;
            }
            var storageList = JSON.parse(this.store.getItem(this.localStorageKey));
            if (!storageList) {
                storageList = Array();
            }
            storageList.unshift(item);
            this.store.setItem(this.localStorageKey, JSON.stringify(storageList));
        };
        LogService.prototype.clearList = function () {
            this.store.removeItem(this.localStorageKey);
        };
        LogService.prototype.getList = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var storageList = JSON.parse(_this.store.getItem(_this.localStorageKey));
                resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(storageList));
            });
        };
        return LogService;
    }());
    LogService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof OfflineStorage_1.OfflineStorage !== "undefined" && OfflineStorage_1.OfflineStorage) === "function" && _a || Object, typeof (_b = typeof app_config_1.AppConfig !== "undefined" && app_config_1.AppConfig) === "function" && _b || Object])
    ], LogService);
    exports.LogService = LogService;
    var _a, _b;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=log.service.js.map

/***/ }),

/***/ "./src/app/services/general/projection.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./node_modules/proj4/lib/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, proj4x) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var proj4 = proj4x.default;
    var ProjectionService = (function () {
        function ProjectionService() {
            this.projHash = {};
            proj4.defs("EPSG:4141", "+title=Israel TM MAPI:4141 (7 param datum shift) +proj=tmerc +lat_0=31.73439361111111 +lon_0=35.20451694444445 +k=1.0000067 +x_0=219529.584 +y_0=626907.39 +ellps=GRS80 +towgs84=23.8085,17.5937,17.8010,-0.3306,-1.85706,1.64828,-5.4374");
            this.projHash["EPSG:4141"] = proj4.Proj("EPSG:4141");
            this.projHash["EPSG:4326"] = proj4.Proj("EPSG:4326");
        }
        ProjectionService.prototype.transformITMToWGS1984 = function (x, y) {
            return proj4.transform(this.projHash["EPSG:4141"], this.projHash["EPSG:4326"], proj4.Point(x, y));
        };
        ProjectionService.prototype.transformWGS1984ToITM = function (lat, lon) {
            return proj4.transform(this.projHash["EPSG:4326"], this.projHash["EPSG:4141"], proj4.Point(lon, lat));
        };
        return ProjectionService;
    }());
    ProjectionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ProjectionService);
    exports.ProjectionService = ProjectionService;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=projection.service.js.map

/***/ }),

/***/ "./src/app/services/general/reboot.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/shared-classes/request/offline-actions-request.ts"), __webpack_require__("./src/app/services/queue/queue.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/services/base/ItemStorage.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts"), __webpack_require__("./src/app/services/general/log.service.ts"), __webpack_require__("./src/app/shared-classes/common/log-info.ts"), __webpack_require__("./src/app/shared-classes/common/log-types.ts"), __webpack_require__("./src/app/services/event-list/event-list.service.ts"), __webpack_require__("./src/app/services/general/device.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, http_service_1, connection_service_1, home_service_1, StorageResponse_1, offline_actions_request_1, queue_service_1, content_service_1, alertify_service_1, ItemStorage_1, ApplicationResponseStatus_1, log_service_1, log_info_1, log_types_1, event_list_service_1, device_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RebootService = (function (_super) {
        __extends(RebootService, _super);
        function RebootService(httpService, homeService, queueService, alertifyService, logService, eventListService, deviceService, contentService, connectionService) {
            var _this = _super.call(this, contentService) || this;
            _this.httpService = httpService;
            _this.homeService = homeService;
            _this.queueService = queueService;
            _this.alertifyService = alertifyService;
            _this.logService = logService;
            _this.eventListService = eventListService;
            _this.deviceService = deviceService;
            _this.connectionService = connectionService;
            _this.$rebootFired = new core_1.EventEmitter();
            return _this;
        }
        RebootService.prototype.sendAllQueuedItems = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.queueService.getList().then(function (queueResponse) {
                    if (queueResponse.isSuccessWithResult() && queueResponse.data.length > 0) {
                        var queueList_1 = queueResponse.data;
                        _this.homeService.getCar().then(function (homeResponse) {
                            var carId = homeResponse.data.carId;
                            var request = new offline_actions_request_1.OfflineActionsRequest(_this.deviceService.getDeviceId(), carId, queueList_1);
                            var url = _this.httpService.baseWebApi + 'Main/UpdateOfflineActions/';
                            _this.logService.addItem(new log_info_1.LogInfo('update items array length: ' + queueList_1.length, 'RebootService: sendAllQueuedItems', 'reboot', log_types_1.LogTypes.debugger));
                            _this.httpService.post(url, request).subscribe(function (response) {
                                if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                                    _this.alertifyService.error(_this.content.updateDataErrorMessage);
                                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                                }
                                else {
                                    _this.queueService.removeList();
                                    resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                                }
                            }, function (err) {
                                _this.alertifyService.error(_this.content.updateDataErrorMessage);
                                resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                            });
                        });
                    }
                    else {
                        _this.rebootSystem().then(function () {
                            resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                        });
                    }
                });
            });
        };
        RebootService.prototype.rebootSystem = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.logService.addItem(new log_info_1.LogInfo('reboot system start', 'RebootService: System reboot start', 'reboot', log_types_1.LogTypes.info));
                _this.homeService.reboot().then(function () {
                    _this.eventListService.reboot().then(function () {
                        _this.logService.addItem(new log_info_1.LogInfo('success', 'RebootService: System reboot completed', 'reboot', log_types_1.LogTypes.info));
                        _this.$rebootFired.emit(true);
                        resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                    });
                });
            });
        };
        return RebootService;
    }(ItemStorage_1.ItemStorage));
    RebootService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object, typeof (_b = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _b || Object, typeof (_c = typeof queue_service_1.QueueService !== "undefined" && queue_service_1.QueueService) === "function" && _c || Object, typeof (_d = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _d || Object, typeof (_e = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _e || Object, typeof (_f = typeof event_list_service_1.EventListService !== "undefined" && event_list_service_1.EventListService) === "function" && _f || Object, typeof (_g = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" && _g || Object, typeof (_h = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _h || Object, typeof (_j = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _j || Object])
    ], RebootService);
    exports.RebootService = RebootService;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=reboot.service.js.map

/***/ }),

/***/ "./src/app/services/general/sound.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/app.config.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, app_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SoundService = (function () {
        function SoundService(config) {
            this.config = config;
            this.audio = new Audio();
        }
        SoundService.prototype.play = function (soundFilePath) {
            if (soundFilePath === void 0) { soundFilePath = this.config.getConfig('event_added_sound'); }
            this.audio.src = soundFilePath;
            this.audio.play();
        };
        return SoundService;
    }());
    SoundService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof app_config_1.AppConfig !== "undefined" && app_config_1.AppConfig) === "function" && _a || Object])
    ], SoundService);
    exports.SoundService = SoundService;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sound.service.js.map

/***/ }),

/***/ "./src/app/services/general/timer-service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./node_modules/rxjs/Rx.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TimerService = (function () {
        function TimerService(count, interval) {
            this.timer = rxjs_1.Observable.interval(interval).map(function (tick) { return count--; }).share();
        }
        TimerService.prototype.getCount = function () {
            return this.timer;
        };
        return TimerService;
    }());
    TimerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [Number, Number])
    ], TimerService);
    exports.TimerService = TimerService;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=timer-service.js.map

/***/ }),

/***/ "./src/app/services/general/waze.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/app.config.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, connection_service_1, app_config_1, alertify_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WazeService = (function () {
        function WazeService(connectionService, config, alertifyService) {
            this.connectionService = connectionService;
            this.config = config;
            this.alertifyService = alertifyService;
        }
        WazeService.prototype.navigate = function (lat, lon) {
            if (typeof launchnavigator === 'undefined' || launchnavigator === null) {
                this.alertifyService.error("נווט לא זוהה או לא קיים");
                return;
            }
            launchnavigator.isAppAvailable(launchnavigator.APP.WAZE, function (isAvailable) {
                var app;
                if (isAvailable) {
                    app = launchnavigator.APP.WAZE;
                }
                else {
                    app = launchnavigator.APP.USER_SELECT;
                }
                launchnavigator.navigate([lat, lon], {
                    app: app
                });
            });
        };
        return WazeService;
    }());
    WazeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _a || Object, typeof (_b = typeof app_config_1.AppConfig !== "undefined" && app_config_1.AppConfig) === "function" && _b || Object, typeof (_c = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _c || Object])
    ], WazeService);
    exports.WazeService = WazeService;
    var _a, _b, _c;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=waze.service.js.map

/***/ }),

/***/ "./src/app/services/home/home.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/home/home-model.ts"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/services/base/ItemStorage.ts"), __webpack_require__("./src/app/stores/offlineStorage/OfflineStorage.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/app.config.ts"), __webpack_require__("./src/app/services/general/device.service.ts"), __webpack_require__("./src/app/shared-classes/request/device-request.ts"), __webpack_require__("./node_modules/moment/moment.js"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts"), __webpack_require__("./src/app/services/general/log.service.ts"), __webpack_require__("./src/app/shared-classes/common/log-info.ts"), __webpack_require__("./src/app/shared-classes/common/log-types.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, home_model_1, StorageResponse_1, http_service_1, ItemStorage_1, OfflineStorage_1, connection_service_1, content_service_1, app_config_1, device_service_1, device_request_1, moment, alertify_service_1, ApplicationResponseStatus_1, log_service_1, log_info_1, log_types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HomeService = (function (_super) {
        __extends(HomeService, _super);
        function HomeService(store, httpService, connectionService, contentService, appConfig, deviceService, alertifyService, logService) {
            var _this = _super.call(this, contentService) || this;
            _this.store = store;
            _this.httpService = httpService;
            _this.connectionService = connectionService;
            _this.appConfig = appConfig;
            _this.deviceService = deviceService;
            _this.alertifyService = alertifyService;
            _this.logService = logService;
            _this.localStorageKey = "homeModel";
            _this.homeModel = null;
            contentService.load().then(function () {
                _this.contentDetailsBar = contentService.getContent('details-bar-home');
            });
            return _this;
        }
        HomeService.prototype.getItem = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (_this.homeModel != null) {
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.homeModel));
                }
                else {
                    var request = new device_request_1.DeviceRequest(_this.deviceService.getDeviceId());
                    var url = _this.httpService.baseWebApi + 'home/GetHomePageInfo/';
                    _this.httpService.post(url, request).subscribe(function (response) {
                        if (response.resultStatus != ApplicationResponseStatus_1.ApplicationResponseStatus.Success) {
                            _this.errorMsgPromise.then(function () {
                                _this.alertifyService.error(_this.content.getDataErrorMessage);
                                resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                            });
                        }
                        else {
                            _this.homeModel = new home_model_1.HomeModel();
                            _this.homeModel = response.data;
                            _this.homeModel.systemName = _this.contentDetailsBar.systemName;
                            _this.homeModel.versionName = _this.contentDetailsBar.version + _this.appConfig.getConfig('version');
                            _this.homeModel.title = _this.getDayPart();
                            _this.addItem(_this.homeModel);
                            resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.homeModel));
                        }
                    }, function (err) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    });
                }
            });
        };
        HomeService.prototype.getCar = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.getItem().then(function (response) {
                    if (response.isSuccessWithResult()) {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.homeModel.fireTruckInfo.carInfo));
                    }
                    else {
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                });
            });
        };
        HomeService.prototype.getTeamEmployees = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.getItem().then(function (response) {
                    if (response.isSuccessWithResult()) {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.homeModel.fireTruckInfo.employees));
                    }
                    else {
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                });
            });
        };
        HomeService.prototype.addItem = function (item) {
            if (item == undefined) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given item is null."));
                });
            }
            this.store.setItem(this.localStorageKey, JSON.stringify(item));
            this.homeModel = item;
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        HomeService.prototype.removeItem = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.homeModel = null;
                _this.store.removeItem(_this.localStorageKey);
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        HomeService.prototype.reboot = function () {
            var _this = this;
            this.logService.addItem(new log_info_1.LogInfo('home reboot start', 'HomeService', 'reboot', log_types_1.LogTypes.info));
            return new Promise(function (resolve, reject) {
                _this.logService.addItem(new log_info_1.LogInfo('home remove start', 'HomeService', 'reboot', log_types_1.LogTypes.info));
                _this.removeItem().then(function () {
                    _this.logService.addItem(new log_info_1.LogInfo('home remove end', 'HomeService', 'reboot', log_types_1.LogTypes.info));
                    _this.logService.addItem(new log_info_1.LogInfo('home get start', 'HomeService', 'reboot', log_types_1.LogTypes.info));
                    _this.getItem().then(function () {
                        _this.logService.addItem(new log_info_1.LogInfo('home get end', 'HomeService', 'reboot', log_types_1.LogTypes.info));
                        resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
                    });
                });
            });
        };
        HomeService.prototype.updateActiveEventCount = function (isAdded) {
            if (isAdded) {
                this.homeModel.numberOfActiveEvents++;
            }
            else {
                this.homeModel.numberOfActiveEvents--;
            }
            this.addItem(this.homeModel);
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        HomeService.prototype.setActiveEventCount = function (counter) {
            this.homeModel.numberOfActiveEvents = counter;
            this.addItem(this.homeModel);
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        HomeService.prototype.updateTeamEmployees = function (employees) {
            var _this = this;
            if (!employees || employees.length == 0) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given items is null."));
                });
            }
            return new Promise(function (resolve, reject) {
                _this.homeModel.fireTruckInfo.employees = employees;
                _this.addItem(_this.homeModel);
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        HomeService.prototype.removeAtEvent = function () {
            if (this.homeModel && this.homeModel.fireTruckInfo && this.homeModel.fireTruckInfo.activeAtEvent) {
                this.homeModel.fireTruckInfo.activeAtEvent = null;
                this.addItem(this.homeModel);
            }
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        HomeService.prototype.setActiveAtEvent = function (item) {
            if (item == undefined) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given item is null."));
                });
            }
            this.homeModel.fireTruckInfo.activeAtEvent = item;
            this.store.setItem(this.localStorageKey, JSON.stringify(this.homeModel));
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        HomeService.prototype.updateFireTruckData = function (item) {
            if (item == undefined) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given item is null."));
                });
            }
            this.homeModel.fireTruckInfo = item;
            this.store.setItem(this.localStorageKey, JSON.stringify(this.homeModel));
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        HomeService.prototype.getDayPart = function () {
            var hour = moment().hour();
            if (hour > 4 && hour < 12) {
                return this.contentDetailsBar.morning;
            }
            else if (hour > 11 && hour < 16) {
                return this.contentDetailsBar.afternoon;
            }
            else if (hour > 15 && hour < 21) {
                return this.contentDetailsBar.evening;
            }
            else {
                return this.contentDetailsBar.night;
            }
        };
        return HomeService;
    }(ItemStorage_1.ItemStorage));
    HomeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof OfflineStorage_1.OfflineStorage !== "undefined" && OfflineStorage_1.OfflineStorage) === "function" && _a || Object, typeof (_b = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _b || Object, typeof (_c = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _c || Object, typeof (_d = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _d || Object, typeof (_e = typeof app_config_1.AppConfig !== "undefined" && app_config_1.AppConfig) === "function" && _e || Object, typeof (_f = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" && _f || Object, typeof (_g = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _g || Object, typeof (_h = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _h || Object])
    ], HomeService);
    exports.HomeService = HomeService;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ "./src/app/services/layers/layers.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/services/base/ArrayStorage.ts"), __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts"), __webpack_require__("./src/app/shared-classes/esri/LayerType.ts"), __webpack_require__("./src/app/shared-classes/esri/GeometryType.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/stores/offlineStorage/OfflineStorage.ts"), __webpack_require__("./src/app/core/emap.service.ts"), __webpack_require__("./src/app/shared-classes/esri/Point.ts"), __webpack_require__("./src/app/app.config.ts"), __webpack_require__("./src/app/services/node/node.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ArrayStorage_1, core_1, StorageResponse_1, http_service_1, content_service_1, alertify_service_1, ApplicationResponseStatus_1, LayerType_1, GeometryType_1, connection_service_1, OfflineStorage_1, emap_service_1, Point_1, app_config_1, node_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LayersService = (function (_super) {
        __extends(LayersService, _super);
        function LayersService(httpService, contentService, connectionService, store, config, emapService, nodeService, alertifyService) {
            var _this = _super.call(this, contentService) || this;
            _this.httpService = httpService;
            _this.connectionService = connectionService;
            _this.store = store;
            _this.config = config;
            _this.emapService = emapService;
            _this.nodeService = nodeService;
            _this.alertifyService = alertifyService;
            _this.mapLayerUpdateHandlers = {};
            return _this;
        }
        LayersService.prototype.getServerMapLayers = function (mapId) {
            var _this = this;
            if (this.storageList != null) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storageList));
                });
            }
            else {
                return new Promise(function (resolve, reject) {
                    var url = _this.httpService.baseWebApi + 'Layers/GetMapLayers/';
                    //let request = { ServiceNames: ['additionaldata', 'userlayers', 'sitedata'], LayerNames: ['bridge_three', 'schools', '1'] };
                    var request = null;
                    _this.httpService.post(url, request).subscribe(function (response) {
                        if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                            _this.errorMsgPromise.then(function () {
                                _this.alertifyService.error(_this.content.getDataErrorMessage);
                                resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                            });
                        }
                        if (response.data.length > 0) {
                            _this.storageList = response.data;
                            resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storageList));
                        }
                        else {
                            resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(new Array()));
                        }
                    }, function (err) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    });
                });
            }
        };
        LayersService.prototype.setDefaultLayersVisibility = function (mapId) {
            this.emapService.getMap(mapId).then(function (map) {
                var mapLayers = map.getMapLayers();
                if (!mapLayers) {
                    ;
                    return;
                }
                var defaultVisibleLayers = new Array();
                for (var index = 0; index < mapLayers.length; index++) {
                    if (mapLayers[index].visibleOnLoad) {
                        mapLayers[index].visible = mapLayers[index].visibleOnLoad;
                        defaultVisibleLayers.push(mapLayers[index]);
                    }
                }
                if (defaultVisibleLayers.length > 0) {
                    map.setVisibleLayer(defaultVisibleLayers);
                }
            });
        };
        // layers: Dictionary<Layer>,
        // backgrounds: Array<BackgroundLayer>,
        // options: esri.MapOptions // only needed: extent, center
        LayersService.prototype.getLayersData = function (layers) {
            //getting graphic layers initial data from server
            var _this = this;
            if (this.connectionService.isOffline()) {
                var response_1 = {};
                var storeData = JSON.parse(this.store.getItem('GraphicsLayersInitData'));
                if (storeData == null) {
                    return new Promise(function (resolve, reject) {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response_1));
                    });
                }
                for (var i = 0; i < layers.length; i++) {
                    if (layers[i] in storeData) {
                        response_1[layers[i]] = storeData[layers[i]];
                    }
                }
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response_1));
                });
            }
            else {
                var pThis = this;
                return new Promise(function (resolve, reject) {
                    var url = _this.httpService.baseWebApi + 'Map/GetMapLayers/';
                    _this.httpService.post(url, { 'layerNames': layers }).subscribe(function (response) {
                        var storeData = JSON.parse(_this.store.getItem('GraphicsLayersInitData')) || {};
                        var keys = Object.keys(response.data.layers);
                        for (var i = 0; i < keys.length; i++) {
                            storeData[keys[i]] = response.data.layers[keys[i]];
                        }
                        _this.store.setItem('GraphicsLayersInitData', JSON.stringify(storeData));
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response.data.layers));
                    }, function (err) {
                        console.log(err);
                    });
                });
            }
        };
        LayersService.prototype.getVisibleLayersData = function (mapId, layers) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.emapService.getMap(mapId).then(function (map) {
                    var mapLayers = map.getMapLayers();
                    if (!mapLayers) {
                        resolve(null);
                        return;
                    }
                    if (layers.length === 0) {
                        for (var j = 0; j < mapLayers.length; j++) {
                            var layer = mapLayers[j];
                            layer.visible = false;
                        }
                    }
                    else {
                        for (var j = 0; j < mapLayers.length; j++) {
                            var layer = mapLayers[j];
                            layer.visible = layers.indexOf(layer.layerName) !== -1;
                        }
                    }
                    resolve(mapLayers);
                });
            });
        };
        LayersService.prototype.updateRealtimeLayer = function (mapId, layerName, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (data === null || data === undefined || data.length === 0)
                        return [2 /*return*/];
                    this.emapService.getMap(mapId).then(function (map) {
                        var layer = map.getGraphicLayer(layerName);
                        if (layer === null)
                            return;
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            switch (obj.geometry.type) {
                                case GeometryType_1.GeometryType.POINT:
                                    layer.moveGraphic(obj.data.id, new Point_1.Point(obj.geometry.x, obj.geometry.y));
                                    break;
                            }
                        }
                    });
                    return [2 /*return*/];
                });
            });
        };
        LayersService.prototype.setVisibleLayers = function (mapId, layerNames) {
            var _this = this;
            this.emapService.getMap(mapId).then(function (map) {
                _this.getVisibleLayersData(mapId, layerNames).then(function (layers) {
                    if (layers == null) {
                        return;
                    }
                    map.setVisibleLayer(layers);
                    for (var i = 0; i < layers.length; i++) {
                        var layer = layers[i];
                        if (layer.layerType !== LayerType_1.LayerType.GRAPHIC) {
                            continue;
                        }
                        if (!(mapId in _this.mapLayerUpdateHandlers)) {
                            _this.mapLayerUpdateHandlers[mapId] = {};
                        }
                        if (!(layer.layerName in _this.mapLayerUpdateHandlers[mapId])) {
                            _this.mapLayerUpdateHandlers[mapId][layer.layerName] = new Array();
                        }
                        var namespace = _this.config.getConfig('node_host') + _this.config.getConfig('node_namespace');
                        if (layer.visible) {
                            _this.mapLayerUpdateHandlers[mapId][layer.layerName].push(_this.nodeService.registerLayerUpdateEvent(namespace, layer.layerName, function (data) {
                                _this.updateRealtimeLayer(mapId, data.layer, data.data);
                            }));
                        }
                        else {
                            for (var i_1 = 0; i_1 < _this.mapLayerUpdateHandlers[mapId][layer.layerName].length; i_1++) {
                                _this.nodeService.unRegisterLayerUpdateEvent(namespace, layer.layerName, _this.mapLayerUpdateHandlers[mapId][layer.layerName][i_1]);
                            }
                        }
                    }
                });
            });
        };
        LayersService.prototype.getLayers = function (url) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.httpService.get(url).subscribe(function (response) {
                    resolve(response);
                }, function (err) {
                    console.log(err);
                });
            });
        };
        return LayersService;
    }(ArrayStorage_1.ArrayStorage));
    LayersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object, typeof (_b = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _b || Object, typeof (_c = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _c || Object, typeof (_d = typeof OfflineStorage_1.OfflineStorage !== "undefined" && OfflineStorage_1.OfflineStorage) === "function" && _d || Object, typeof (_e = typeof app_config_1.AppConfig !== "undefined" && app_config_1.AppConfig) === "function" && _e || Object, typeof (_f = typeof emap_service_1.EmapService !== "undefined" && emap_service_1.EmapService) === "function" && _f || Object, typeof (_g = typeof node_service_1.NodeService !== "undefined" && node_service_1.NodeService) === "function" && _g || Object, typeof (_h = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _h || Object])
    ], LayersService);
    exports.LayersService = LayersService;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=layers.service.js.map

/***/ }),

/***/ "./src/app/services/mapState/map-state.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MapStateService = (function () {
        function MapStateService() {
            this.mapStateChangedEvent$ = new core_1.EventEmitter();
        }
        MapStateService.prototype.changeMapState = function (isMapVisible) {
            this.mapStateChangedEvent$.emit(isMapVisible);
        };
        return MapStateService;
    }());
    MapStateService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MapStateService);
    exports.MapStateService = MapStateService;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=map-state.service.js.map

/***/ }),

/***/ "./src/app/services/navigation/mapping-navigation-data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/shared-classes/common/navigation-data.ts"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/services/event/current-event-details.service.ts"), __webpack_require__("./node_modules/moment/moment.js"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/shared-classes/car/car-check-data.ts"), __webpack_require__("./src/app/services/event/event-details.service.ts"), __webpack_require__("./src/app/shared-classes/common/detailsbar-types.ts"), __webpack_require__("./src/app/shared-classes/common/route-path.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, navigation_service_1, content_service_1, navigation_data_1, map_state_service_1, current_event_details_service_1, moment, home_service_1, car_check_data_1, event_details_service_1, detailsbar_types_1, route_path_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MappingNavigationDataService = (function () {
        function MappingNavigationDataService(navigationService, contentService, mapStateService, currentEventDetailsService, eventDetailsService, homeService) {
            this.navigationService = navigationService;
            this.contentService = contentService;
            this.mapStateService = mapStateService;
            this.currentEventDetailsService = currentEventDetailsService;
            this.eventDetailsService = eventDetailsService;
            this.homeService = homeService;
            this.content = this.contentService.getContent('mapping-data');
            this.$teamEmployeeSaveEmitter = new core_1.EventEmitter();
            this.$suppliesSaveEmitter = new core_1.EventEmitter();
            this.$suppliesCloseEmitter = new core_1.EventEmitter();
            this.$checkSaveEmitter = new core_1.EventEmitter();
            this.$reportSaveEmitter = new core_1.EventEmitter();
            this.routes = new route_path_1.RoutePath();
        }
        MappingNavigationDataService.prototype.getNavDataByRouteUrl = function (routeUrl) {
            switch (routeUrl) {
                case this.routes.EVENTS: {
                    return this.getEventsData();
                }
                case this.routes.LOGS: {
                    return this.getLogsData();
                }
                case this.routes.EMPLOYEES_TEAM: {
                    return this.getTeamEmployeeData();
                }
                case this.routes.SUPPLIES: {
                    return this.getSuppliesData();
                }
                case this.routes.QUICK_REPORT: {
                    return this.getQuickReportData();
                }
                case this.routes.CAR_CHECK: {
                    return this.getCarCheckData();
                }
                case this.routes.CAR_STATUS: {
                    return this.getCarStatusData();
                }
                case this.routes.CAR_CHECK_START: {
                    return this.getCarCheckStartData();
                }
                case this.routes.CURRENT_STATUS: {
                    return this.getMinimizeEventDetailsBarData("current-status");
                }
                case this.routes.PREVENT_FIRE: {
                    return this.getMinimizeEventDetailsBarData("prevent-fire");
                }
                case this.routes.REPORT: {
                    return this.getReportDetailsBarData();
                }
                default: {
                    return null;
                }
            }
        };
        MappingNavigationDataService.prototype.getEventsData = function () {
            var _this = this;
            return {
                parentClass: "events",
                buttonRight: {
                    callback: function () {
                        _this.navigationService.goBack();
                    },
                    class: "image-sprite back"
                },
                buttonLeft: {
                    callback: function () {
                        _this.navigationService.navigate(new navigation_data_1.NavigationData(_this.routes.EVENT_DETAILS));
                        _this.mapStateService.changeMapState(true);
                    },
                    class: "image-sprite shape-706"
                },
                title: this.content["events-title"]
            };
        };
        MappingNavigationDataService.prototype.getLogsData = function () {
            var _this = this;
            return {
                parentClass: "logs",
                buttonRight: {
                    callback: function () {
                        _this.navigationService.goBack();
                    },
                    class: "image-sprite back"
                },
                title: this.content["logs-title"],
                isCurrentEventHide: true
            };
        };
        MappingNavigationDataService.prototype.getTeamEmployeeData = function () {
            var _this = this;
            var data = this.navigationService.getNavigationData();
            var btnRight = data && !data.isBack ? null : {
                callback: function () {
                    _this.navigationService.goBack();
                },
                class: "image-sprite back"
            };
            return {
                parentClass: "employees",
                buttonRight: btnRight,
                buttonLeft: {
                    callback: function () {
                        _this.$teamEmployeeSaveEmitter.emit("$teamEmployeeEmitter");
                    },
                    class: "image-sprite tab-icn-ok"
                },
                title: this.content["team-employee-title"],
                isCurrentEventHide: true
            };
        };
        MappingNavigationDataService.prototype.getSuppliesData = function () {
            var _this = this;
            return {
                parentClass: "supplies",
                buttonRight: {
                    callback: function () {
                        _this.navigationService.goBack();
                        _this.$suppliesCloseEmitter.emit("$suppliesCloseEmitter");
                    },
                    class: "image-sprite back"
                },
                buttonLeft: {
                    callback: function () {
                        _this.$suppliesSaveEmitter.emit("$suppliesSaveEmitter");
                    },
                    class: "image-sprite tab-icn-ok"
                },
                title: this.content["supplies-title"],
                isCurrentEventHide: true
            };
        };
        MappingNavigationDataService.prototype.getQuickReportData = function () {
            var _this = this;
            return {
                parentClass: "quick-report",
                buttonRight: {
                    callback: function () {
                        _this.navigationService.goBack();
                    },
                    class: "image-sprite back"
                },
                buttonLeft: {},
                title: this.content["quickReport-title"],
                isCurrentEventHide: true
            };
        };
        MappingNavigationDataService.prototype.getCarCheckData = function () {
            var _this = this;
            var title = this.content["car-check-title"];
            var carName = '';
            var data = this.navigationService.getNavigationData();
            if (data instanceof car_check_data_1.CarCheckData) {
                title = title + " " + data.carName;
            }
            else {
                title = title + " " + data.car.carCallCode;
            }
            return {
                parentClass: "car-check",
                buttonRight: {
                    callback: function () {
                        _this.navigationService.navigate(new navigation_data_1.NavigationData(''));
                    },
                    class: "image-sprite back"
                },
                buttonLeft: {
                    callback: function () {
                        _this.$checkSaveEmitter.emit("$checkSaveEmitter");
                    },
                    class: "image-sprite tab-icn-ok"
                },
                title: title
            };
        };
        MappingNavigationDataService.prototype.getCarStatusData = function () {
            var _this = this;
            var data = this.navigationService.getNavigationData();
            return {
                parentClass: "car-status",
                buttonRight: {
                    callback: function () {
                        _this.navigationService.goBack();
                    },
                    class: "image-sprite back"
                },
                buttonLeft: {
                    text: moment().format("DD.MM.YYYY"),
                    class: "text"
                },
                title: this.content["car-status-title"] + " " + data.carName
            };
        };
        MappingNavigationDataService.prototype.getCarCheckStartData = function () {
            var _this = this;
            var title = this.content["car-check-title"];
            var data = this.navigationService.getNavigationData();
            if (data) {
                title = title + " " + data.carName;
            }
            return {
                parentClass: "car-check-start",
                buttonRight: {
                    callback: function () {
                        _this.navigationService.navigate(new navigation_data_1.NavigationData(''));
                    },
                    class: "image-sprite back"
                },
                buttonLeft: {
                    text: moment().format("DD.MM.YYYY"),
                    class: "text"
                },
                title: title
            };
        };
        MappingNavigationDataService.prototype.getMinimizeEventDetailsBarData = function (className) {
            var _this = this;
            var data = this.navigationService.getNavigationData();
            var eventGeneralInfo = null;
            if (this.currentEventDetailsService.isCurrentEventById(data.eventId)) {
                eventGeneralInfo = this.currentEventDetailsService.getCurrentStatus().generalInfo;
            }
            else {
                eventGeneralInfo = this.eventDetailsService.getCurrentStatus().generalInfo;
            }
            return {
                detailsbarType: detailsbar_types_1.detailsbarTypes.minimizeEvent,
                parentClass: className,
                eventGeneralInfo: eventGeneralInfo,
                buttonRight: {
                    callback: function () {
                        _this.navigationService.goBack();
                    },
                    class: "image-sprite back"
                },
                buttonLeft: null,
                isCurrentEventHide: true
            };
        };
        MappingNavigationDataService.prototype.getReportDetailsBarData = function () {
            var _this = this;
            var data = this.getMinimizeEventDetailsBarData("report");
            data.buttonLeft = {
                callback: function () {
                    _this.$reportSaveEmitter.emit("$reportSaveEmitter");
                },
                class: "image-sprite tab-icn-ok"
            };
            return data;
        };
        return MappingNavigationDataService;
    }());
    MappingNavigationDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _a || Object, typeof (_b = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _b || Object, typeof (_c = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _c || Object, typeof (_d = typeof current_event_details_service_1.CurrentEventDetailsService !== "undefined" && current_event_details_service_1.CurrentEventDetailsService) === "function" && _d || Object, typeof (_e = typeof event_details_service_1.EventDetailsService !== "undefined" && event_details_service_1.EventDetailsService) === "function" && _e || Object, typeof (_f = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _f || Object])
    ], MappingNavigationDataService);
    exports.MappingNavigationDataService = MappingNavigationDataService;
    var _a, _b, _c, _d, _e, _f;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=mapping-navigation-data.service.js.map

/***/ }),

/***/ "./src/app/services/navigation/navigation.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js"), __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, router_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavigationService = (function () {
        function NavigationService(route, router, location) {
            this.route = route;
            this.router = router;
            this.location = location;
        }
        NavigationService.prototype.navigate = function (navigationData) {
            this.data = navigationData.data;
            if (!navigationData.params) {
                this.router.navigate([navigationData.navigateTo]);
            }
            else {
                this.router.navigate([navigationData.navigateTo, navigationData.params]);
            }
        };
        NavigationService.prototype.getRouter = function () {
            return this.router;
        };
        NavigationService.prototype.getNavigationData = function () {
            return this.data;
        };
        NavigationService.prototype.goBack = function () {
            this.location.back();
        };
        return NavigationService;
    }());
    NavigationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _c || Object])
    ], NavigationService);
    exports.NavigationService = NavigationService;
    var _a, _b, _c;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=navigation.service.js.map

/***/ }),

/***/ "./src/app/services/node/node.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/services/event-list/event-list.service.ts"), __webpack_require__("./src/app/shared-classes/node/fire-truck/shalhevet-fire-truck-push-message-trigger.ts"), __webpack_require__("./src/app/services/event/event-details.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/services/event/current-event-details.service.ts"), __webpack_require__("./src/app/shared-classes/event/event-details-data.ts"), __webpack_require__("./src/app/shared-classes/event/event-details-types.ts"), __webpack_require__("./src/app/shared-classes/common/navigation-data.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./node_modules/socket.io-client/lib/index.js"), __webpack_require__("./src/app/shared-classes/node/realtime-layers/realtime-layer-push-message-trigger.ts"), __webpack_require__("./node_modules/timers-browserify/main.js"), __webpack_require__("./src/app/shared-classes/event/event-details-status.ts"), __webpack_require__("./src/app/shared-classes/alertify/alertify-types.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/shared-classes/common/route-path.ts"), __webpack_require__("./src/app/services/general/sound.service.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/services/general/device.service.ts"), __webpack_require__("./src/app/app.config.ts"), __webpack_require__("./src/app/shared-classes/common/log-info.ts"), __webpack_require__("./src/app/services/general/log.service.ts"), __webpack_require__("./src/app/shared-classes/common/log-types.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, StorageResponse_1, home_service_1, event_list_service_1, shalhevet_fire_truck_push_message_trigger_1, event_details_service_1, alertify_service_1, current_event_details_service_1, event_details_data_1, event_details_types_1, navigation_data_1, navigation_service_1, io, realtime_layer_push_message_trigger_1, timers_1, event_details_status_1, alertify_types_1, content_service_1, route_path_1, sound_service_1, connection_service_1, device_service_1, app_config_1, log_info_1, log_service_1, log_types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LAYER_UPDATE_EVENT_POSTFIX = '_REALTIME_DATA';
    var NodeService = (function () {
        function NodeService(homeService, eventListService, eventDetailsService, alertifyService, currentEventDetailsService, navigationService, contentService, soundService, connectionService, config, deviceService, logService) {
            var _this = this;
            this.homeService = homeService;
            this.eventListService = eventListService;
            this.eventDetailsService = eventDetailsService;
            this.alertifyService = alertifyService;
            this.currentEventDetailsService = currentEventDetailsService;
            this.navigationService = navigationService;
            this.contentService = contentService;
            this.soundService = soundService;
            this.connectionService = connectionService;
            this.config = config;
            this.deviceService = deviceService;
            this.logService = logService;
            this.realtimeLayerDataEvents = {};
            this.handlerIndex = 0;
            this.sockets = {};
            this.routes = new route_path_1.RoutePath();
            this.$chatHistoryEmitter = new core_1.EventEmitter();
            this.$chatServerBroadcastEmitter = new core_1.EventEmitter();
            this.contentService.load().then(function () {
                _this.content = _this.contentService.getContent('messages');
            });
        }
        NodeService.prototype.createSocket = function (namespace) {
            var _this = this;
            if (this.sockets.hasOwnProperty(namespace)) {
                return;
            }
            var data = {
                query: this.config.getConfig('node_handshake_id') + "=" + this.deviceService.getDeviceId(),
                transports: ['websocket'],
                upgrade: false
            };
            this.sockets[namespace] = io.connect(namespace, data);
            this.sockets[namespace].on('disconnect', function () {
                _this.logService.addItem(new log_info_1.LogInfo("SOCKET DISCONNECTED: " + JSON.stringify(data), "node service", 'socket state', log_types_1.LogTypes.info));
            });
            this.sockets[namespace].on('connect', function () {
                _this.logService.addItem(new log_info_1.LogInfo("CONNECT SOCKET : " + JSON.stringify(data), "node service", 'socket state', log_types_1.LogTypes.info));
            });
            this.sockets[namespace].on('connect_error', function (err) {
                _this.logService.addItem(new log_info_1.LogInfo("SOCKET ERROR: " + JSON.stringify(err), "node service", 'socket state', log_types_1.LogTypes.info));
            });
        };
        NodeService.prototype.getSocket = function (namespace) {
            if (this.sockets.hasOwnProperty(namespace)) {
                return null;
            }
            return this.sockets[namespace];
        };
        NodeService.prototype.registerNodeFireTruckEvent = function (namespace, event) {
            var _this = this;
            this.sockets[namespace].on(event, function (message) {
                _this.handleNodeMessage(message);
            });
        };
        NodeService.prototype.registerNodeAlertifyEvent = function (namespace, event) {
            var _this = this;
            this.sockets[namespace].on(event, function (message) {
                _this.handleAlertifyMessage(message);
            });
        };
        NodeService.prototype.registerChatEvent = function (namespace, event) {
            var _this = this;
            this.sockets[namespace].emit('clientFirstConnection', event);
            this.sockets[namespace].on('serverBroadcastMessage', function (message) {
                _this.$chatServerBroadcastEmitter.emit(message);
            });
            this.sockets[namespace].on('serverUdpateChatHistory', function (messagesHistoryArray) {
                _this.$chatHistoryEmitter.emit(messagesHistoryArray);
            });
        };
        NodeService.prototype.sendChatMessage = function (namespace, message, eventId) {
            this.sockets[namespace].emit('clientSubmitMessage', { messageVal: message, room: eventId });
        };
        NodeService.prototype.unRegisterChatEvent = function (namespace, event) {
            this.sockets[namespace].off('serverBroadcastMessage');
            this.sockets[namespace].off('serverUdpateChatHistory');
        };
        NodeService.prototype.getLayerUpdateEventName = function (layerName) {
            return (layerName + LAYER_UPDATE_EVENT_POSTFIX);
        };
        NodeService.prototype.isLayerUpdateEventRegistered = function (layerName) {
            return this.getLayerUpdateEventName(layerName) in this.realtimeLayerDataEvents;
        };
        NodeService.prototype.getLayerUpdateSubscribers = function (layerName) {
            return (this.isLayerUpdateEventRegistered(layerName)) ? this.realtimeLayerDataEvents[this.getLayerUpdateEventName(layerName)] : {};
        };
        NodeService.prototype.registerLayerUpdateEvent = function (namespace, layerName, callback) {
            if (!this.isLayerUpdateEventRegistered(layerName)) {
                this.realtimeLayerDataEvents[this.getLayerUpdateEventName(layerName)] = {}; //init empty  subscribers for event            
            }
            if (Object.keys(this.realtimeLayerDataEvents[this.getLayerUpdateEventName(layerName)]).length === 0) {
                this.registerNodeLayerUpdateEvent(namespace, this.getLayerUpdateEventName(layerName)); // registring node event
            }
            this.realtimeLayerDataEvents[this.getLayerUpdateEventName(layerName)][this.handlerIndex] = callback;
            this.handlerIndex++;
            return this.handlerIndex - 1;
        };
        NodeService.prototype.unRegisterLayerUpdateEvent = function (namespace, layerName, handlerId) {
            if (!this.isLayerUpdateEventRegistered(layerName)) {
                return;
            }
            delete this.realtimeLayerDataEvents[this.getLayerUpdateEventName(layerName)][handlerId];
            if (Object.keys(this.realtimeLayerDataEvents[this.getLayerUpdateEventName(layerName)]).length === 0) {
                this.unregisterNodeLayerUpdateEvent(namespace, this.getLayerUpdateEventName(layerName)); // unregister node event
            }
        };
        NodeService.prototype.registerNodeLayerUpdateEvent = function (namespace, event) {
            var _this = this;
            this.sockets[namespace].on(event, function (message) {
                console.log("namespace: " + namespace + " event: " + event + " data recivied: " + message);
                _this.handleRealtimeLayer(message);
            });
        };
        NodeService.prototype.unregisterNodeLayerUpdateEvent = function (namespace, event) {
            var _this = this;
            this.sockets[namespace].off(event, function (message) {
                _this.handleRealtimeLayer(message);
            });
        };
        NodeService.prototype.demoRealtimePush = function () {
            var _this = this;
            var obj = {
                data: {
                    layer: "POLICE_CAR",
                    data: [{
                            geometry: {
                                id: 543,
                                x: 181455,
                                y: 656842,
                                type: 0
                            }
                        },
                        {
                            geometry: {
                                id: 5431,
                                x: 181598,
                                y: 656834,
                                type: 0
                            }
                        }]
                },
                pushMessageTrigger: realtime_layer_push_message_trigger_1.RealtimeLayerPushMessageTrigger.UpdateLayerData
            };
            timers_1.setInterval(function () {
                obj.data.data[0].geometry.x = obj.data.data[0].geometry.x + (Math.floor(Math.random() * 100) + 1);
                obj.data.data[0].geometry.y = obj.data.data[0].geometry.y + (Math.floor(Math.random() * 100) + 1);
                obj.data.data[1].geometry.x = obj.data.data[1].geometry.x + (Math.floor(Math.random() * 100) + 1);
                obj.data.data[1].geometry.y = obj.data.data[1].geometry.y + (Math.floor(Math.random() * 100) + 1);
                _this.handleRealtimeLayer(obj);
            }, 1000);
        };
        NodeService.prototype.handleRealtimeLayer = function (message) {
            if (message === undefined || message.data === undefined || message.data.data === undefined) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("message from node server is null or undefined."));
                });
            }
            var layerData = message.data.data;
            this.upadateRealtimeLayer(layerData);
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("layer updated"));
            });
        };
        NodeService.prototype.upadateRealtimeLayer = function (msgData) {
            var subscribers = this.getLayerUpdateSubscribers(msgData.layer);
            for (var key in subscribers) {
                if (subscribers.hasOwnProperty(key)) {
                    var callback = subscribers[key];
                    try {
                        callback(msgData);
                    }
                    catch (e) {
                        console.log('error in upadateRealtimeLayer: ' + e);
                    }
                }
            }
        };
        NodeService.prototype.handleNodeMessage = function (message) {
            this.logService.addItem(new log_info_1.LogInfo("PUSH NODE DATA RECIEVED : " + JSON.stringify(message.data), "node service", 'debugger'));
            if (message === undefined || message.data === undefined) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("message from node server is null or undefined."));
                });
            }
            console.log("PUSH NODE DATA RECIEVED : " + JSON.stringify(message.data));
            var fireTruckData = message.data;
            switch (fireTruckData.pushMessageTrigger) {
                case shalhevet_fire_truck_push_message_trigger_1.ShalhevetFireTruckPushMessageTrigger.ActiveEventAdded:
                    {
                        this.eventAdded(fireTruckData.data);
                    }
                    break;
                case shalhevet_fire_truck_push_message_trigger_1.ShalhevetFireTruckPushMessageTrigger.ActiveEventClosed:
                    {
                        this.eventClosed(fireTruckData.data);
                    }
                    break;
                case shalhevet_fire_truck_push_message_trigger_1.ShalhevetFireTruckPushMessageTrigger.ActiveEventInfoUpdated:
                    {
                        this.eventUpdated(fireTruckData.data);
                    }
                    break;
                case shalhevet_fire_truck_push_message_trigger_1.ShalhevetFireTruckPushMessageTrigger.ActiveEventLocationUpdated:
                    {
                        this.eventLocationUpdated(fireTruckData.data);
                    }
                    break;
                case shalhevet_fire_truck_push_message_trigger_1.ShalhevetFireTruckPushMessageTrigger.ActiveEventLogChanged:
                    {
                        this.eventDetailsService.updateItemLog(fireTruckData.data);
                        this.currentEventDetailsService.updateItemLog(fireTruckData.data);
                    }
                    break;
                case shalhevet_fire_truck_push_message_trigger_1.ShalhevetFireTruckPushMessageTrigger.ActiveEventForcesChanged:
                    {
                        this.eventForceChanged(fireTruckData.data);
                    }
                    break;
                case shalhevet_fire_truck_push_message_trigger_1.ShalhevetFireTruckPushMessageTrigger.ActiveEventMissionStatusChanged:
                    {
                        this.currentEventDetailsService.updateAcitveMission(fireTruckData.data);
                    }
                    break;
                case shalhevet_fire_truck_push_message_trigger_1.ShalhevetFireTruckPushMessageTrigger.FireTruckInfoChange:
                    {
                        this.homeService.updateFireTruckData(fireTruckData.data);
                        this.eventUpdated(fireTruckData.data.activeAtEvent);
                        if (fireTruckData.data.activeAtEvent == null) {
                            this.currentEventDetailsService.removeItem(); //remove virtual event
                        }
                    }
                    break;
                case shalhevet_fire_truck_push_message_trigger_1.ShalhevetFireTruckPushMessageTrigger.ActiveEventAreaChanged:
                    {
                        this.eventUpdated(fireTruckData.data);
                    }
            }
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        NodeService.prototype.handleAlertifyMessage = function (message) {
            if (message === undefined || message.data === undefined) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("message from node server is null or undefined."));
                });
            }
            console.log("PUSH ALERTIFY DATA RECIEVED : " + JSON.stringify(message.data));
            this.alertifyService.eventNotification(message.data);
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        NodeService.prototype.eventClosed = function (eventId) {
            this.homeService.updateActiveEventCount(false);
            this.eventListService.removeItem(eventId);
            this.eventDetailsService.removeItem(eventId);
            this.currentEventDetailsService.removeItem(eventId);
            this.navigateToEvents();
        };
        NodeService.prototype.eventUpdated = function (fireTruckData) {
            var _this = this;
            if (fireTruckData == null) {
                return;
            }
            if (fireTruckData.generalInfo.eventId != -1) {
                this.eventListService.addItem(fireTruckData.generalInfo);
            }
            this.currentEventDetailsService.isCurrentEventByCarId(fireTruckData).then(function (response) {
                if (response.isSuccess()) {
                    _this.currentEventDetailsService.updateItem(fireTruckData);
                }
                else if (fireTruckData.generalInfo.eventId != -1) {
                    _this.eventDetailsService.updateItem(fireTruckData);
                }
            });
        };
        NodeService.prototype.eventLocationUpdated = function (fireTruckData) {
            var _this = this;
            if (fireTruckData == null) {
                return;
            }
            this.eventListService.addItem(fireTruckData.generalInfo);
            this.eventDetailsService.updateItemLocation(fireTruckData);
            this.currentEventDetailsService.isCurrentEventByCarId(fireTruckData).then(function (response) {
                if (response.isSuccess()) {
                    _this.currentEventDetailsService.updateItemLocation(fireTruckData);
                }
            });
        };
        NodeService.prototype.eventAdded = function (fireTruckData) {
            var _this = this;
            if (fireTruckData == null) {
                return;
            }
            this.homeService.updateActiveEventCount(true);
            this.eventListService.addItem(fireTruckData.generalInfo);
            this.currentEventDetailsService.getCurrentCarTeam().then(function (response) {
                if ((!response.isSuccessWithResult())
                    || response.data.activeMission.currentMissionStatus.missionStatusId == event_details_status_1.EventDetailsStatus.Finish
                    || response.data.activeMission.currentMissionStatus.missionStatusId == event_details_status_1.EventDetailsStatus.BackOnStation) {
                    var pThis_1 = _this;
                    _this.soundService.play();
                    _this.alertifyService.notify(_this.alertifyService.createEventDetailNotification(fireTruckData.generalInfo), alertify_types_1.AlertifyTypes.notify, "event-details-notification", function (clicked) {
                        pThis_1.alertifyService.clearNotifyAdditionalClass("event-details-notification");
                        if (!clicked) {
                            return;
                        }
                        pThis_1.eventDetailsService.updateItemLocation(fireTruckData);
                        var data = new event_details_data_1.EventDetailsData(fireTruckData.generalInfo.eventId, event_details_types_1.EventDetailsTypes.CarRequest, true);
                        pThis_1.navigationService.navigate(new navigation_data_1.NavigationData(pThis_1.routes.EVENT_DETAILS, data));
                    }, 30);
                }
            });
        };
        NodeService.prototype.eventForceChanged = function (fireTruckData) {
            var _this = this;
            if (fireTruckData == null) {
                return;
            }
            this.eventListService.addItem(fireTruckData.generalInfo);
            this.eventDetailsService.updateItem(fireTruckData);
            this.currentEventDetailsService.isCurrentEventByCarId(fireTruckData).then(function (response) {
                if (response.isSuccess()) {
                    if (_this.currentEventDetailsService.isCurrentEventById(fireTruckData.generalInfo.eventId)) {
                        _this.currentEventDetailsService.updateItem(fireTruckData);
                        _this.currentEventDetailsService.getCurrentCarTeam().then(function (response) {
                            if (response.data.activeMission.currentMissionStatus.missionStatusId == event_details_status_1.EventDetailsStatus.Dispatch) {
                                var data = new event_details_data_1.EventDetailsData(fireTruckData.generalInfo.eventId, event_details_types_1.EventDetailsTypes.CarRequest);
                                _this.navigationService.navigate(new navigation_data_1.NavigationData(_this.routes.EVENT_DETAILS, data));
                            }
                        });
                    }
                    else {
                        _this.currentEventDetailsService.addItem(fireTruckData, true);
                    }
                }
                else {
                    _this.currentEventDetailsService.removeItem(fireTruckData.generalInfo.eventId);
                }
            });
        };
        NodeService.prototype.navigateToEvents = function () {
            this.navigationService.navigate(new navigation_data_1.NavigationData(this.routes.EVENTS));
        };
        return NodeService;
    }());
    NodeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _a || Object, typeof (_b = typeof event_list_service_1.EventListService !== "undefined" && event_list_service_1.EventListService) === "function" && _b || Object, typeof (_c = typeof event_details_service_1.EventDetailsService !== "undefined" && event_details_service_1.EventDetailsService) === "function" && _c || Object, typeof (_d = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _d || Object, typeof (_e = typeof current_event_details_service_1.CurrentEventDetailsService !== "undefined" && current_event_details_service_1.CurrentEventDetailsService) === "function" && _e || Object, typeof (_f = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _f || Object, typeof (_g = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _g || Object, typeof (_h = typeof sound_service_1.SoundService !== "undefined" && sound_service_1.SoundService) === "function" && _h || Object, typeof (_j = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _j || Object, typeof (_k = typeof app_config_1.AppConfig !== "undefined" && app_config_1.AppConfig) === "function" && _k || Object, typeof (_l = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" && _l || Object, typeof (_m = typeof log_service_1.LogService !== "undefined" && log_service_1.LogService) === "function" && _m || Object])
    ], NodeService);
    exports.NodeService = NodeService;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=node.service.js.map

/***/ }),

/***/ "./src/app/services/pipes/before-hours.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./node_modules/moment/moment.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BeforeHoursPipe = (function () {
        function BeforeHoursPipe() {
        }
        BeforeHoursPipe.prototype.transform = function (value) {
            moment.locale('he');
            return moment(value).startOf('minute').fromNow();
        };
        return BeforeHoursPipe;
    }());
    BeforeHoursPipe = __decorate([
        core_1.Pipe({
            name: 'beforeHours'
        })
    ], BeforeHoursPipe);
    exports.BeforeHoursPipe = BeforeHoursPipe;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=before-hours.pipe.js.map

/***/ }),

/***/ "./src/app/services/pipes/cut-text.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CutTextPipe = (function () {
        function CutTextPipe() {
        }
        CutTextPipe.prototype.transform = function (text, requeredLength) {
            if (!text || text.length == 0) {
                return '';
            }
            if (text.length > requeredLength) {
                return text.substring(0, requeredLength) + '...';
            }
            else {
                return text;
            }
        };
        return CutTextPipe;
    }());
    CutTextPipe = __decorate([
        core_1.Pipe({
            name: 'cutText'
        })
    ], CutTextPipe);
    exports.CutTextPipe = CutTextPipe;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=cut-text.js.map

/***/ }),

/***/ "./src/app/services/pipes/date-format.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./node_modules/moment/moment.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateFormatPipe = (function () {
        function DateFormatPipe() {
        }
        DateFormatPipe.prototype.transform = function (value) {
            moment.locale('he');
            return moment(value).format("DD.MM.YYYY");
        };
        return DateFormatPipe;
    }());
    DateFormatPipe = __decorate([
        core_1.Pipe({
            name: 'dateFormat'
        })
    ], DateFormatPipe);
    exports.DateFormatPipe = DateFormatPipe;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=date-format.pipe.js.map

/***/ }),

/***/ "./src/app/services/pipes/date-hours.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./node_modules/moment/moment.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateHoursPipe = (function () {
        function DateHoursPipe() {
        }
        DateHoursPipe.prototype.transform = function (value) {
            moment.locale('he');
            return moment(value).format("HH:mm");
        };
        return DateHoursPipe;
    }());
    DateHoursPipe = __decorate([
        core_1.Pipe({
            name: 'dateHours'
        })
    ], DateHoursPipe);
    exports.DateHoursPipe = DateHoursPipe;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=date-hours.pipe.js.map

/***/ }),

/***/ "./src/app/services/pipes/date-timer-pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./node_modules/rxjs/Observable.js"), __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, Observable_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateTimerPipe = (function (_super) {
        __extends(DateTimerPipe, _super);
        function DateTimerPipe(ref) {
            return _super.call(this, ref) || this;
        }
        DateTimerPipe.prototype.transform = function (obj) {
            if (obj instanceof Date) {
                this.value = obj;
                if (!this.timer) {
                    this.timer = this.getObservable();
                }
                return _super.prototype.transform.call(this, this.timer);
            }
            return _super.prototype.transform.call(this, obj);
        };
        DateTimerPipe.prototype.getObservable = function () {
            var _this = this;
            return Observable_1.Observable.interval(1000).startWith(0).map(function () {
                return new Date(new Date().getTime() - _this.value.getTime());
            });
        };
        ;
        return DateTimerPipe;
    }(common_1.AsyncPipe));
    DateTimerPipe = __decorate([
        core_1.Pipe({
            name: 'dateTimer',
            pure: false
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof core_1.ChangeDetectorRef !== "undefined" && core_1.ChangeDetectorRef) === "function" && _a || Object])
    ], DateTimerPipe);
    exports.DateTimerPipe = DateTimerPipe;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=date-timer-pipe.js.map

/***/ }),

/***/ "./src/app/services/pipes/formatted-cut-text.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FormattedCutTextPipe = (function () {
        function FormattedCutTextPipe() {
        }
        FormattedCutTextPipe.prototype.transform = function (text, requeredLength, firstLetterCount, lastLetterCount) {
            if (!text || text.length == 0) {
                return '';
            }
            if (requeredLength < text.length && requeredLength > firstLetterCount + lastLetterCount) {
                return text.substring(0, firstLetterCount) + '...' + text.substring(text.length - lastLetterCount, text.length);
            }
            else {
                return text;
            }
        };
        return FormattedCutTextPipe;
    }());
    FormattedCutTextPipe = __decorate([
        core_1.Pipe({
            name: 'formattedCutText'
        })
    ], FormattedCutTextPipe);
    exports.FormattedCutTextPipe = FormattedCutTextPipe;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=formatted-cut-text.js.map

/***/ }),

/***/ "./src/app/services/prevent-fire/prevent-fire.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/services/base/ItemStorage.ts"), __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ItemStorage_1, core_1, http_service_1, StorageResponse_1, content_service_1, alertify_service_1, ApplicationResponseStatus_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PreventFireService = (function (_super) {
        __extends(PreventFireService, _super);
        function PreventFireService(httpService, contentService, alertifyService) {
            var _this = _super.call(this, contentService) || this;
            _this.httpService = httpService;
            _this.alertifyService = alertifyService;
            return _this;
        }
        PreventFireService.prototype.getPreventionInfo = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Events/GetEventPreventionInfo/';
                _this.httpService.post(url, request).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    else {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response.data));
                    }
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        PreventFireService.prototype.getPreventionDetails = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Events/GetBuildingCaseList/';
                _this.httpService.post(url, request).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    else {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response.data));
                    }
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        return PreventFireService;
    }(ItemStorage_1.ItemStorage));
    PreventFireService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object, typeof (_b = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _b || Object, typeof (_c = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _c || Object])
    ], PreventFireService);
    exports.PreventFireService = PreventFireService;
    var _a, _b, _c;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=prevent-fire.service.js.map

/***/ }),

/***/ "./src/app/services/queue/queue.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/base/ArrayStorage.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/stores/offlineStorage/OfflineStorage.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, ArrayStorage_1, content_service_1, StorageResponse_1, OfflineStorage_1, connection_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QueueService = (function (_super) {
        __extends(QueueService, _super);
        function QueueService(contentService, store, connectionService) {
            var _this = _super.call(this, contentService) || this;
            _this.store = store;
            _this.connectionService = connectionService;
            _this.storageList = new Array();
            _this.localStorageKey = "queueList";
            return _this;
        }
        QueueService.prototype.addItem = function (item) {
            if (item == undefined) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateErrorResponse("the given item is null."));
                });
            }
            this.storageList.push(item);
            this.store.setItem(this.localStorageKey, JSON.stringify(this.storageList));
            console.log(this.storageList);
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        QueueService.prototype.getList = function (request) {
            var _this = this;
            if (request === void 0) { request = null; }
            if (this.connectionService.isOffline()) {
                this.storageList = JSON.parse(this.store.getItem(this.localStorageKey));
            }
            if (this.storageList != null) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storageList));
                });
            }
            else {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            }
        };
        QueueService.prototype.removeList = function () {
            this.storageList = new Array();
            this.store.removeItem(this.localStorageKey);
            return new Promise(function (resolve, reject) {
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        return QueueService;
    }(ArrayStorage_1.ArrayStorage));
    QueueService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _a || Object, typeof (_b = typeof OfflineStorage_1.OfflineStorage !== "undefined" && OfflineStorage_1.OfflineStorage) === "function" && _b || Object, typeof (_c = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _c || Object])
    ], QueueService);
    exports.QueueService = QueueService;
    var _a, _b, _c;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=queue.service.js.map

/***/ }),

/***/ "./src/app/services/quick-report/quick-report.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/stores/offlineStorage/OfflineStorage.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/shared-classes/quick-report/quick-report-types.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/services/general/device.service.ts"), __webpack_require__("./src/app/shared-classes/request/save-quick-report-request.ts"), __webpack_require__("./src/app/shared-classes/common/drop-down-data.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/services/base/ItemStorage.ts"), __webpack_require__("./src/app/shared-classes/offline/fire-truck-offline-action-types.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, StorageResponse_1, http_service_1, OfflineStorage_1, connection_service_1, quick_report_types_1, home_service_1, device_service_1, save_quick_report_request_1, drop_down_data_1, content_service_1, alertify_service_1, ItemStorage_1, fire_truck_offline_action_types_1, ApplicationResponseStatus_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QuickReportService = (function (_super) {
        __extends(QuickReportService, _super);
        function QuickReportService(httpService, connectionService, homeService, deviceService, contentService, store, alertifyService) {
            var _this = _super.call(this, contentService) || this;
            _this.httpService = httpService;
            _this.connectionService = connectionService;
            _this.homeService = homeService;
            _this.deviceService = deviceService;
            _this.store = store;
            _this.alertifyService = alertifyService;
            _this.localStoragenotQualifedReasonsKey = "notQualifedReasonsKey";
            return _this;
        }
        QuickReportService.prototype.getNotQualifedReasons = function () {
            var _this = this;
            if (this.connectionService.isOffline()) {
                this.notQualifedReasons = JSON.parse(this.store.getItem(this.localStoragenotQualifedReasonsKey));
            }
            else if (this.notQualifedReasons != null) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.notQualifedReasons));
                });
            }
            else {
                return new Promise(function (resolve, reject) {
                    var url = _this.httpService.baseWebApi + 'Events/GetCarInEventInactiveReasons/';
                    _this.httpService.post(url, null).subscribe(function (response) {
                        if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                            _this.errorMsgPromise.then(function () {
                                _this.alertifyService.error(_this.content.getDataErrorMessage);
                                resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                            });
                        }
                        else {
                            _this.notQualifedReasons = Array();
                            for (var index = 0; index < response.data.options.length; index++) {
                                if (response.data.options[index].value != '' && response.data.options[index].text != '') {
                                    var data = new drop_down_data_1.DropDownData();
                                    data.value = response.data.options[index].value;
                                    data.text = response.data.options[index].text;
                                    _this.notQualifedReasons.push(data);
                                }
                            }
                            _this.store.setItem(_this.localStoragenotQualifedReasonsKey, JSON.stringify(_this.notQualifedReasons));
                            resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.notQualifedReasons));
                        }
                    }, function (err) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    });
                });
            }
        };
        QuickReportService.prototype.sendQuickReport = function (eventId, reportType, reportDesc) {
            var _this = this;
            if (reportDesc === void 0) { reportDesc = null; }
            if (!reportType || (reportType == quick_report_types_1.QuickReportTypes.Broken && !reportDesc)) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
            }
            return new Promise(function (resolve, reject) {
                _this.homeService.getCar().then(function (response) {
                    var deviceId = _this.deviceService.getDeviceId();
                    var request = new save_quick_report_request_1.SaveQuickReportRequest(deviceId);
                    request.carId = response.data.carId;
                    request.eventLogReportTypeId = reportType;
                    request.eventId = eventId;
                    request.reportDesc = reportDesc;
                    var url = null;
                    if (request.eventId != -1) {
                        url = _this.httpService.baseWebApi + 'Events/AddNewEventLogReport/';
                    }
                    else {
                        url = _this.httpService.baseWebApi + 'Events/AddNewVirtualMissionLogReport/';
                    }
                    _this.httpService.post(url, request, fire_truck_offline_action_types_1.FireTruckOfflineActionTypes.EventReport).subscribe(function (response) {
                        if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                            _this.errorMsgPromise.then(function () {
                                _this.alertifyService.error(_this.content.getDataErrorMessage);
                                resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                            });
                        }
                        else {
                            _this.alertifyService.success(_this.content.successMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
                        }
                    }, function (err) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    });
                });
            });
        };
        return QuickReportService;
    }(ItemStorage_1.ItemStorage));
    QuickReportService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object, typeof (_b = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _b || Object, typeof (_c = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _c || Object, typeof (_d = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" && _d || Object, typeof (_e = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _e || Object, typeof (_f = typeof OfflineStorage_1.OfflineStorage !== "undefined" && OfflineStorage_1.OfflineStorage) === "function" && _f || Object, typeof (_g = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _g || Object])
    ], QuickReportService);
    exports.QuickReportService = QuickReportService;
    var _a, _b, _c, _d, _e, _f, _g;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=quick-report.service.js.map

/***/ }),

/***/ "./src/app/services/report/report.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/stores/offlineStorage/OfflineStorage.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/services/base/ItemStorage.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, StorageResponse_1, http_service_1, OfflineStorage_1, connection_service_1, ItemStorage_1, content_service_1, alertify_service_1, ApplicationResponseStatus_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReportService = (function (_super) {
        __extends(ReportService, _super);
        function ReportService(httpService, store, connectionService, contentService, alertifyService) {
            var _this = _super.call(this, contentService) || this;
            _this.httpService = httpService;
            _this.store = store;
            _this.connectionService = connectionService;
            _this.alertifyService = alertifyService;
            _this.localStorageKey = "reportModelKey";
            _this.isDataNew = true;
            return _this;
        }
        ReportService.prototype.getReportModel = function (request) {
            var _this = this;
            if (this.storageItem != null && this.storageItem.reportData.eventId == request.eventId && !this.isDataNew) {
                return new Promise(function (resolve, reject) {
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storageItem));
                });
            }
            else {
                return new Promise(function (resolve, reject) {
                    var url = _this.httpService.baseWebApi + 'Events/GetEventReportData/';
                    _this.isDataNew = false;
                    _this.httpService.post(url, request).subscribe(function (response) {
                        if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                            _this.errorMsgPromise.then(function () {
                                _this.alertifyService.error(_this.content.getDataErrorMessage);
                                resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                            });
                        }
                        _this.storageItem = response.data;
                        _this.store.setItem(_this.localStorageKey, JSON.stringify(_this.storageItem));
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(_this.storageItem));
                    }, function (err) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    });
                });
            }
        };
        ReportService.prototype.saveEventReport = function (eventReportRequest) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.isDataNew = true;
                var url = _this.httpService.baseWebApi + 'Events/SaveEventReportData/';
                _this.httpService.post(url, eventReportRequest).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.saveDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
                }, function (err) {
                    _this.alertifyService.error(_this.content.saveDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        ReportService.prototype.getEventTypes = function (searchVal) {
            var _this = this;
            var url = this.httpService.baseWebApi + 'Main/GetActiveEventTypes/?search=' + searchVal;
            return new Promise(function (resolve, reject) {
                _this.httpService.get(url).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    resolve(response);
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        ReportService.prototype.getCities = function (searchVal) {
            var _this = this;
            var url = this.httpService.baseWebApi + 'Main/GetCities/?search=' + searchVal;
            return new Promise(function (resolve, reject) {
                _this.httpService.get(url).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    resolve(response);
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        ReportService.prototype.getStreets = function (searchVal, cityId) {
            var _this = this;
            var url = this.httpService.baseWebApi + 'Main/GetStreets/?search=' + searchVal + '&cityId=' + cityId;
            return new Promise(function (resolve, reject) {
                _this.httpService.get(url).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    resolve(response);
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        ReportService.prototype.getStreetNumbers = function (searchVal, streetId) {
            var _this = this;
            var url = this.httpService.baseWebApi + 'Main/GetStreetNumbers/?search=' + searchVal + '&streetId=' + streetId;
            return new Promise(function (resolve, reject) {
                _this.httpService.get(url).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    resolve(response);
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        ReportService.prototype.getJunctions = function (searchVal) {
            var _this = this;
            var url = this.httpService.baseWebApi + 'Main/GetJunctions/?search=' + searchVal;
            return new Promise(function (resolve, reject) {
                _this.httpService.get(url).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    resolve(response);
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        ReportService.prototype.getRoads = function (searchVal, cityId) {
            var _this = this;
            var url = this.httpService.baseWebApi + 'Main/GetRoads/?search=' + searchVal + '&cityId=' + cityId;
            return new Promise(function (resolve, reject) {
                _this.httpService.get(url).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    resolve(response);
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        ReportService.prototype.getRoadMiles = function (searchVal, roadName) {
            var _this = this;
            var url = this.httpService.baseWebApi + 'Main/GetRoadMilestones/?search=' + searchVal + '&roadName=' + roadName;
            return new Promise(function (resolve, reject) {
                _this.httpService.get(url).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    resolve(response);
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        ReportService.prototype.getUsedEquipment = function (searchVal) {
            var _this = this;
            var url = this.httpService.baseWebApi + 'Main/GetServiceSectionArticles/?search=' + searchVal;
            return new Promise(function (resolve, reject) {
                _this.httpService.get(url).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    resolve(response);
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        return ReportService;
    }(ItemStorage_1.ItemStorage));
    ReportService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object, typeof (_b = typeof OfflineStorage_1.OfflineStorage !== "undefined" && OfflineStorage_1.OfflineStorage) === "function" && _b || Object, typeof (_c = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _c || Object, typeof (_d = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _d || Object, typeof (_e = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _e || Object])
    ], ReportService);
    exports.ReportService = ReportService;
    var _a, _b, _c, _d, _e;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=report.service.js.map

/***/ }),

/***/ "./src/app/services/supplies/supplies.service.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/core/http.service.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/stores/offlineStorage/OfflineStorage.ts"), __webpack_require__("./src/app/services/base/StorageResponse.ts"), __webpack_require__("./src/app/services/base/ItemStorage.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/shared-classes/offline/fire-truck-offline-action-types.ts"), __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, http_service_1, connection_service_1, OfflineStorage_1, StorageResponse_1, ItemStorage_1, content_service_1, alertify_service_1, fire_truck_offline_action_types_1, ApplicationResponseStatus_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SuppliesService = (function (_super) {
        __extends(SuppliesService, _super);
        function SuppliesService(httpService, connectionService, store, contentService, alertifyService) {
            var _this = _super.call(this, contentService) || this;
            _this.httpService = httpService;
            _this.connectionService = connectionService;
            _this.store = store;
            _this.alertifyService = alertifyService;
            return _this;
        }
        SuppliesService.prototype.getSupplies = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Events/GetCarEquipmentUseInMission/';
                _this.httpService.post(url, request).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.errorMsgPromise.then(function () {
                            _this.alertifyService.error(_this.content.getDataErrorMessage);
                            resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                        });
                    }
                    else {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(response.data));
                    }
                }, function (err) {
                    _this.errorMsgPromise.then(function () {
                        _this.alertifyService.warring(_this.content.getConnectionErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    });
                });
            });
        };
        SuppliesService.prototype.saveSupplies = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Events/UpdateCarEquipmentUseInMission/';
                _this.httpService.post(url, request).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.saveDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.saveDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        SuppliesService.prototype.saveAuts = function (request) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.httpService.baseWebApi + 'Events/UpdateCarKmInMission/';
                _this.httpService.post(url, request, fire_truck_offline_action_types_1.FireTruckOfflineActionTypes.UpdateCarKM).subscribe(function (response) {
                    if (response.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail) {
                        _this.alertifyService.error(_this.content.saveDataErrorMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                    }
                    else {
                        _this.alertifyService.success(_this.content.successMessage);
                        resolve(new StorageResponse_1.StorageResponse().CreateResultResponse(true));
                    }
                }, function (err) {
                    _this.alertifyService.error(_this.content.saveDataErrorMessage);
                    resolve(new StorageResponse_1.StorageResponse().CreateFailResponse());
                });
                resolve(new StorageResponse_1.StorageResponse().CreateSuccessResponse());
            });
        };
        return SuppliesService;
    }(ItemStorage_1.ItemStorage));
    SuppliesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object, typeof (_b = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _b || Object, typeof (_c = typeof OfflineStorage_1.OfflineStorage !== "undefined" && OfflineStorage_1.OfflineStorage) === "function" && _c || Object, typeof (_d = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _d || Object, typeof (_e = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _e || Object])
    ], SuppliesService);
    exports.SuppliesService = SuppliesService;
    var _a, _b, _c, _d, _e;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=supplies.service.js.map

/***/ }),

/***/ "./src/app/shared-classes/IDictionary.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dictionary = (function () {
        function Dictionary(key, value) {
            this.key = key;
            this.value = value;
        }
        return Dictionary;
    }());
    exports.Dictionary = Dictionary;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=IDictionary.js.map

/***/ }),

/***/ "./src/app/shared-classes/alertify/alertify-types.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AlertifyTypes;
    (function (AlertifyTypes) {
        AlertifyTypes[AlertifyTypes["success"] = 0] = "success";
        AlertifyTypes[AlertifyTypes["warning"] = 1] = "warning";
        AlertifyTypes[AlertifyTypes["error"] = 2] = "error";
        AlertifyTypes[AlertifyTypes["message"] = 3] = "message";
        AlertifyTypes[AlertifyTypes["notify"] = 4] = "notify";
        AlertifyTypes[AlertifyTypes["confirm"] = 6] = "confirm";
        AlertifyTypes[AlertifyTypes["promt"] = 7] = "promt";
    })(AlertifyTypes = exports.AlertifyTypes || (exports.AlertifyTypes = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=alertify-types.js.map

/***/ }),

/***/ "./src/app/shared-classes/car/car-check-data.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CarCheckData = (function () {
        function CarCheckData(carName, carId, employeeId, carKm) {
            if (carId === void 0) { carId = 0; }
            if (employeeId === void 0) { employeeId = 0; }
            if (carKm === void 0) { carKm = 0; }
            this.carName = carName;
            this.carId = carId;
            this.employeeId = employeeId;
            this.carKm = carKm;
        }
        return CarCheckData;
    }());
    exports.CarCheckData = CarCheckData;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=car-check-data.js.map

/***/ }),

/***/ "./src/app/shared-classes/car/car-equipment-damage-types.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EquipmentDamageType;
    (function (EquipmentDamageType) {
        EquipmentDamageType[EquipmentDamageType["Damage"] = 1] = "Damage";
        EquipmentDamageType[EquipmentDamageType["Lack"] = 2] = "Lack";
        EquipmentDamageType[EquipmentDamageType["Immediate"] = 3] = "Immediate";
    })(EquipmentDamageType = exports.EquipmentDamageType || (exports.EquipmentDamageType = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=car-equipment-damage-types.js.map

/***/ }),

/***/ "./src/app/shared-classes/car/car-team.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CarTeam = (function () {
        function CarTeam() {
        }
        return CarTeam;
    }());
    exports.CarTeam = CarTeam;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=car-team.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/action-selection-types.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ActionSelectionTypes;
    (function (ActionSelectionTypes) {
        ActionSelectionTypes[ActionSelectionTypes["Damage"] = 0] = "Damage";
        ActionSelectionTypes[ActionSelectionTypes["Lack"] = 1] = "Lack";
        ActionSelectionTypes[ActionSelectionTypes["Treat"] = 2] = "Treat";
    })(ActionSelectionTypes = exports.ActionSelectionTypes || (exports.ActionSelectionTypes = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=action-selection-types.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/active-mission.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ActiveMission = (function () {
        function ActiveMission() {
        }
        return ActiveMission;
    }());
    exports.ActiveMission = ActiveMission;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=active-mission.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/base-component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseComponent = (function () {
        function BaseComponent(contentService, contentKey) {
            if (contentKey === void 0) { contentKey = null; }
            var _this = this;
            if (contentKey != null && contentKey.trim() != '') {
                contentService.load().then(function () {
                    _this.content = contentService.getContent(contentKey);
                });
            }
        }
        BaseComponent.prototype.ngOnInit = function () {
        };
        BaseComponent.prototype.ngOnDestroy = function () {
        };
        return BaseComponent;
    }());
    exports.BaseComponent = BaseComponent;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=base-component.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/chat-message.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChatMessage = (function () {
        function ChatMessage(messageTime, messageContent, messageOwner, isMyMessage) {
            this.isMyMessage = false;
            this.ownerColor = '';
            this.messageTime = messageTime;
            this.messageContent = messageContent;
            this.messageOwner = messageOwner;
            this.isMyMessage = isMyMessage;
            this.ownerColor = isMyMessage ? '#4eccff' : this.getRandomColor();
        }
        ChatMessage.prototype.getRandomColor = function () {
            return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        };
        return ChatMessage;
    }());
    exports.ChatMessage = ChatMessage;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=chat-message.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/connection-state-types.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConnectionStateTypes;
    (function (ConnectionStateTypes) {
        ConnectionStateTypes[ConnectionStateTypes["online"] = 0] = "online";
        ConnectionStateTypes[ConnectionStateTypes["offline"] = 1] = "offline";
        ConnectionStateTypes[ConnectionStateTypes["resume"] = 2] = "resume";
    })(ConnectionStateTypes = exports.ConnectionStateTypes || (exports.ConnectionStateTypes = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=connection-state-types.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/custom-promise.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomPromise = (function () {
        function CustomPromise(promise) {
            if (!(this instanceof CustomPromise)) {
                return new CustomPromise(promise);
            }
            this.promise = promise || new Promise(this.promiseExecutor.bind(this));
        }
        CustomPromise.prototype.asPromise = function () {
            return this.promise;
        };
        CustomPromise.prototype.then = function (onfulfilled, onrejected) {
            return new CustomPromise(this.promise.then(onfulfilled, onrejected));
        };
        CustomPromise.prototype.catch = function (onrejected) {
            return new CustomPromise(this.promise.catch(onrejected));
        };
        CustomPromise.prototype.resolve = function (value) {
            this.resolveFunction(value);
        };
        CustomPromise.prototype.reject = function (reason) {
            this.rejectFunction(reason);
        };
        CustomPromise.prototype.promiseExecutor = function (resolve, reject) {
            this.resolveFunction = resolve;
            this.rejectFunction = reject;
        };
        return CustomPromise;
    }());
    exports.CustomPromise = CustomPromise;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=custom-promise.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/detailsbar-types.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var detailsbarTypes;
    (function (detailsbarTypes) {
        detailsbarTypes[detailsbarTypes["home"] = 0] = "home";
        detailsbarTypes[detailsbarTypes["minimizeEvent"] = 1] = "minimizeEvent";
        detailsbarTypes[detailsbarTypes["default"] = 2] = "default";
    })(detailsbarTypes = exports.detailsbarTypes || (exports.detailsbarTypes = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=detailsbar-types.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/drop-down-data.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DropDownData = (function () {
        function DropDownData() {
        }
        return DropDownData;
    }());
    exports.DropDownData = DropDownData;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=drop-down-data.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/log-info.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/shared-classes/common/log-types.ts"), __webpack_require__("./node_modules/moment/moment.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, log_types_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogInfo = (function () {
        function LogInfo(message, source, logDesc, logType) {
            if (logType === void 0) { logType = log_types_1.LogTypes.error; }
            this.timeStamp = moment().format("YYYY/MM/DD HH:mm:ss");
            this.message = message;
            this.source = source;
            this.logDesc = logDesc;
            this.logType = logType;
            this.logTypeDesc = this.getTypeDesc();
        }
        LogInfo.prototype.getTypeDesc = function () {
            switch (this.logType) {
                case log_types_1.LogTypes.error:
                    return 'Error';
                case log_types_1.LogTypes.debugger:
                    return 'Debugger';
                case log_types_1.LogTypes.info:
                    return 'Info';
            }
        };
        return LogInfo;
    }());
    exports.LogInfo = LogInfo;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=log-info.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/log-types.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogTypes;
    (function (LogTypes) {
        LogTypes[LogTypes["error"] = 0] = "error";
        LogTypes[LogTypes["debugger"] = 1] = "debugger";
        LogTypes[LogTypes["info"] = 2] = "info";
    })(LogTypes = exports.LogTypes || (exports.LogTypes = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=log-types.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/menu-types.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var menuTypes;
    (function (menuTypes) {
        menuTypes[menuTypes["detailsbar"] = 0] = "detailsbar";
        menuTypes[menuTypes["events"] = 1] = "events";
        menuTypes[menuTypes["home"] = 2] = "home";
        menuTypes[menuTypes["nomenu"] = 3] = "nomenu";
        menuTypes[menuTypes["quickReport"] = 4] = "quickReport";
        menuTypes[menuTypes["carCheck"] = 5] = "carCheck";
    })(menuTypes = exports.menuTypes || (exports.menuTypes = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=menu-types.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/navigation-data.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavigationData = (function () {
        function NavigationData(navigateTo, data, params) {
            if (data === void 0) { data = null; }
            if (params === void 0) { params = null; }
            this.navigateTo = navigateTo;
            this.data = data;
            this.params = params;
        }
        return NavigationData;
    }());
    exports.NavigationData = NavigationData;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=navigation-data.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/route-path.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RoutePath = (function () {
        function RoutePath() {
            this.HOME = "";
            this.EVENTS = "/events";
            this.EMPLOYEES_TEAM = "/employees-team";
            this.SUPPLIES = "/supplies";
            this.QUICK_REPORT = "/quick-report";
            this.CAR_CHECK = "/car-check";
            this.CAR_CHECK_START = "/car-check-start";
            this.CURRENT_STATUS = "/current-status";
            this.CAR_STATUS = "/car-status";
            this.PREVENT_FIRE = "/prevent-fire";
            this.REPORT = "/report";
            this.EVENT_DETAILS = "/event-details";
            this.LOGS = "/logs";
        }
        return RoutePath;
    }());
    exports.RoutePath = RoutePath;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=route-path.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/sequence.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sequence = (function () {
        function Sequence() {
            this._sequence = 0;
        }
        Sequence.prototype.set = function (seq_count) {
            this._sequence = seq_count;
        };
        Sequence.prototype.next = function () {
            this._sequence++;
            return this._sequence;
        };
        Sequence.prototype.initialize = function () {
            this.set(0);
        };
        return Sequence;
    }());
    exports.Sequence = Sequence;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sequence.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/status-code.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StatusCode;
    (function (StatusCode) {
        StatusCode[StatusCode["SUCCESS"] = 0] = "SUCCESS";
        StatusCode[StatusCode["FAIL"] = 1] = "FAIL";
        StatusCode[StatusCode["VALIDATED"] = 2] = "VALIDATED";
        StatusCode[StatusCode["NOT_VALIDATED"] = 3] = "NOT_VALIDATED";
    })(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=status-code.js.map

/***/ }),

/***/ "./src/app/shared-classes/common/status.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Status = (function () {
        function Status() {
        }
        return Status;
    }());
    exports.Status = Status;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=status.js.map

/***/ }),

/***/ "./src/app/shared-classes/employees/avalible-employees-model.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AvalibleEmployeesModel = (function () {
        function AvalibleEmployeesModel() {
        }
        return AvalibleEmployeesModel;
    }());
    exports.AvalibleEmployeesModel = AvalibleEmployeesModel;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=avalible-employees-model.js.map

/***/ }),

/***/ "./src/app/shared-classes/employees/employee-team-data.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeesTeamData = (function () {
        function EmployeesTeamData(eventNum, eventId) {
            this.eventNum = eventNum;
            this.eventId = eventId;
        }
        return EmployeesTeamData;
    }());
    exports.EmployeesTeamData = EmployeesTeamData;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=employee-team-data.js.map

/***/ }),

/***/ "./src/app/shared-classes/employees/employee-view-type.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeeViewType;
    (function (EmployeeViewType) {
        EmployeeViewType[EmployeeViewType["small"] = 0] = "small";
        EmployeeViewType[EmployeeViewType["big"] = 1] = "big";
    })(EmployeeViewType = exports.EmployeeViewType || (exports.EmployeeViewType = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=employee-view-type.js.map

/***/ }),

/***/ "./src/app/shared-classes/esri/Circle.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("esri/geometry/Circle"), __webpack_require__("./src/app/shared-classes/esri/Point.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, esriCircle, Point_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Circle = (function (_super) {
        __extends(Circle, _super);
        function Circle(p1, p2, p3) {
            var _this = this;
            var point = null;
            if (typeof (p1) === "object") {
                point = new Point_1.Point(p1);
                p3 = p2;
            }
            else {
                point = new Point_1.Point(p1, p2);
            }
            _this = _super.call(this, point, {
                radius: p3
            }) || this;
            return _this;
        }
        return Circle;
    }(esriCircle));
    exports.Circle = Circle;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=Circle.js.map

/***/ }),

/***/ "./src/app/shared-classes/esri/DynamicMapServiceLayer.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("esri/layers/ArcGISDynamicMapServiceLayer")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ArcGISDynamicMapServiceLayer) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DynamicMapServiceLayer = (function (_super) {
        __extends(DynamicMapServiceLayer, _super);
        function DynamicMapServiceLayer(url, options) {
            var _this = _super.call(this, url, options) || this;
            _this.layerMapping = {};
            return _this;
        }
        DynamicMapServiceLayer.prototype.addLayerMapping = function (layerName, layerId) {
            this.layerMapping[layerName.toUpperCase()] = layerId;
        };
        DynamicMapServiceLayer.prototype.removeLayerMapping = function (layerName) {
            delete this.layerMapping[layerName.toUpperCase()];
        };
        DynamicMapServiceLayer.prototype.getLayerID = function (layerName) {
            if (this.isLayerExists(layerName)) {
                return this.layerMapping[layerName.toUpperCase()];
            }
            return null;
        };
        DynamicMapServiceLayer.prototype.isLayerExists = function (layerName) {
            return this.layerMapping.hasOwnProperty(layerName.toUpperCase());
        };
        return DynamicMapServiceLayer;
    }(ArcGISDynamicMapServiceLayer));
    exports.DynamicMapServiceLayer = DynamicMapServiceLayer;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=DynamicMapServiceLayer.js.map

/***/ }),

/***/ "./src/app/shared-classes/esri/Extent.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("esri/geometry/Extent")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, esriExtent) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Extent = (function (_super) {
        __extends(Extent, _super);
        function Extent(p1, p2, p3, p4) {
            var _this = this;
            var dstExtent = {
                "spatialReference": { "wkid": 2039 }
            };
            if (typeof (p1) === "object") {
                dstExtent = Object.assign(dstExtent, p1);
            }
            else
                dstExtent = Object.assign(dstExtent, {
                    xmin: p1,
                    ymin: p2,
                    xmax: p3,
                    ymax: p4
                });
            console.log(JSON.stringify(dstExtent));
            _this = _super.call(this, dstExtent) || this;
            return _this;
        }
        return Extent;
    }(esriExtent));
    exports.Extent = Extent;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=Extent.js.map

/***/ }),

/***/ "./src/app/shared-classes/esri/GeometryType.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GeometryType;
    (function (GeometryType) {
        GeometryType[GeometryType["POINT"] = 0] = "POINT";
        GeometryType[GeometryType["POLYLINE"] = 1] = "POLYLINE";
        GeometryType[GeometryType["POLYGON"] = 2] = "POLYGON";
    })(GeometryType = exports.GeometryType || (exports.GeometryType = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=GeometryType.js.map

/***/ }),

/***/ "./src/app/shared-classes/esri/GraphicLayerType.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphicLayerType;
    (function (GraphicLayerType) {
        GraphicLayerType[GraphicLayerType["DEFAULT"] = "_DEFAULT"] = "DEFAULT";
        GraphicLayerType[GraphicLayerType["SELECTION"] = "_SELECTION"] = "SELECTION";
        GraphicLayerType[GraphicLayerType["GPS"] = "_GPS"] = "GPS";
        GraphicLayerType[GraphicLayerType["DRAWING"] = "_DRAWING"] = "DRAWING";
    })(GraphicLayerType = exports.GraphicLayerType || (exports.GraphicLayerType = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=GraphicLayerType.js.map

/***/ }),

/***/ "./src/app/shared-classes/esri/GraphicsLayer.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("esri/graphic"), __webpack_require__("esri/layers/GraphicsLayer"), __webpack_require__("./src/app/shared-classes/common/sequence.ts"), __webpack_require__("./node_modules/rxjs/Observable.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Graphic, esriGraphicsLayer, sequence_1, Observable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphicsLayer = (function (_super) {
        __extends(GraphicsLayer, _super);
        function GraphicsLayer(options) {
            var _this = _super.call(this, options) || this;
            _this.m_graphics = {};
            _this.sequence = new sequence_1.Sequence();
            _this.click = new Observable_1.Observable(function (observer) {
                _this.on("click", function (eventArgs) {
                    try {
                        observer.next({
                            graphic: eventArgs.graphic || eventArgs.event.graphic,
                            mouseX: eventArgs.x,
                            mouseY: eventArgs.y
                        });
                    }
                    catch (e) {
                    }
                });
            });
            return _this;
        }
        GraphicsLayer.prototype.count = function () {
            return this.graphics.length;
        };
        GraphicsLayer.prototype.clearGraphics = function () {
            this.clear();
            this.m_graphics = {};
            this.sequence.initialize();
        };
        GraphicsLayer.prototype.hasGraphic = function (p1, p2) {
            //check if graphic exists in the requested layer
            if (p1 === null || p1 === undefined)
                return false;
            if (typeof p1 === "number")
                return this.m_graphics.hasOwnProperty(p1);
            if (typeof p1 === "string" && p2 !== undefined && p2 !== null) {
                return (this.getGraphicByAttribute(p1, p2) !== null);
            }
        };
        GraphicsLayer.prototype.getGraphic = function (p1, p2) {
            if (!(this.hasGraphic(p1, p2)))
                return null;
            if (typeof p1 === "number")
                return this.m_graphics[p1];
            if (typeof p1 === "string" && p2 !== undefined && p2 !== null) {
                return this.getGraphicByAttribute(p1, p2);
            }
        };
        GraphicsLayer.prototype.getGraphicByAttribute = function (att_name, att_value) {
            for (var id in this.graphics) {
                if ("name" in this.graphics[id].attributes && this.graphics[id].attributes[att_name] == att_value)
                    return this.graphics[id];
            }
            return null;
        };
        GraphicsLayer.prototype.refresh = function () {
            this.redraw();
        };
        GraphicsLayer.prototype.removeGraphic = function (p1, p2) {
            //removing specific graphic from requested layer
            if (p1 == undefined || p1 == null)
                return;
            var graphic;
            if (typeof p1 === "object" && p1 instanceof Graphic) {
                graphic = p1;
            }
            else {
                graphic = this.getGraphic(p1, p2);
            }
            delete this.m_graphics[graphic.attributes["id"]];
            this.remove(graphic);
        };
        GraphicsLayer.prototype.moveGraphic = function (id, geometry) {
            //change graphic geometry        
            if (!this.hasGraphic(id))
                return;
            this.getGraphic(id).setGeometry(geometry);
        };
        GraphicsLayer.prototype.addGraphic = function (geometry, symbol, attributes) {
            if (attributes === null || attributes === undefined) {
                attributes = {};
            }
            if (!attributes.hasOwnProperty('id')) {
                attributes['id'] = this.sequence.next();
            }
            var graphic = new Graphic(geometry, symbol, attributes);
            this.add(graphic);
            this.m_graphics[attributes['id']] = graphic;
            return attributes['id'];
        };
        GraphicsLayer.prototype.onClick = function () {
            return this.click;
        };
        return GraphicsLayer;
    }(esriGraphicsLayer));
    exports.GraphicsLayer = GraphicsLayer;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=GraphicsLayer.js.map

/***/ }),

/***/ "./src/app/shared-classes/esri/LayerType.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LayerType;
    (function (LayerType) {
        LayerType[LayerType["AGS_DYNAMIC"] = 0] = "AGS_DYNAMIC";
        LayerType[LayerType["GRAPHIC"] = 1] = "GRAPHIC";
        LayerType[LayerType["BACKGROUND"] = 2] = "BACKGROUND";
    })(LayerType = exports.LayerType || (exports.LayerType = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=LayerType.js.map

/***/ }),

/***/ "./src/app/shared-classes/esri/Point.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("esri/geometry/Point")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, esriPoint) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Point = (function (_super) {
        __extends(Point, _super);
        function Point(p1, p2) {
            var _this = this;
            var dstPoint = {
                "spatialReference": { "wkid": 2039 }
            };
            if (typeof (p1) === "object")
                dstPoint = Object.assign(dstPoint, p1);
            else {
                if (typeof p1 == 'string')
                    p1 = parseFloat(p1);
                if (typeof p2 == 'string')
                    p2 = parseFloat(p2);
                dstPoint = Object.assign(dstPoint, { "x": p1, "y": p2 });
            }
            _this = _super.call(this, dstPoint) || this;
            return _this;
        }
        return Point;
    }(esriPoint));
    exports.Point = Point;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=Point.js.map

/***/ }),

/***/ "./src/app/shared-classes/esri/WebTiledLayer.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("esri/layers/WebTiledLayer"), __webpack_require__("esri/SpatialReference")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, esriWebTiledLayer, SpatialReference) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WebTiledLayer = (function (_super) {
        __extends(WebTiledLayer, _super);
        function WebTiledLayer(options) {
            var _this = _super.call(this, options.templateUrl, options) || this;
            _this.spatialReference = new SpatialReference({ "wkid": 2039 });
            _this.initialExtent = options.initialExtent;
            _this.fullExtent = options.fullExtent;
            _this.tileInfo = options.tileInfo;
            _this.urlTemplate = options.templateUrl;
            _this.layerName = options.layerName;
            _this.loaded = true;
            _this.getUrlFunction = options.getUrlFunction;
            if (options.templateUrl.indexOf('file://') !== -1) {
                _this.urlTemplate = '../' + ((options.templateUrl.split('//'))[1]); //removing file://, added this in first place because esri get exception without it
            }
            return _this;
        }
        WebTiledLayer.prototype.getTileUrl = function (level, row, column) {
            return this.getUrlFunction(level, row, column, this);
        };
        return WebTiledLayer;
    }(esriWebTiledLayer));
    exports.WebTiledLayer = WebTiledLayer;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=WebTiledLayer.js.map

/***/ }),

/***/ "./src/app/shared-classes/esri/WebTiledLayerOptions.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WebTiledLayerOptions = (function () {
        function WebTiledLayerOptions(obj) {
            this.fullExtent = ("fullExtent" in obj) ? obj.fullExtent : undefined;
            this.initialExtent = ("initialExtent" in obj) ? obj.initialExtent : undefined;
            this.tileInfo = ("tileInfo" in obj) ? obj.tileInfo : undefined;
            this.layerName = ("layerName" in obj) ? obj.layerName : undefined;
            this.templateUrl = ("urlTemplate" in obj) ? obj.urlTemplate : undefined;
            this.getUrlFunction = ("getUrlFunction" in obj) ? obj.getUrlFunction : undefined;
            this.id = ("id" in obj) ? obj.id : undefined;
            this.visible = ("visible" in obj) ? obj.visible : undefined;
            this.opacity = ("opacity" in obj) ? obj.opacity : undefined;
        }
        return WebTiledLayerOptions;
    }());
    exports.WebTiledLayerOptions = WebTiledLayerOptions;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=WebTiledLayerOptions.js.map

/***/ }),

/***/ "./src/app/shared-classes/esri/custom-map.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("esri/map"), __webpack_require__("dojo/string"), __webpack_require__("esri/layers/TileInfo"), __webpack_require__("esri/SpatialReference"), __webpack_require__("esri/symbols/SimpleMarkerSymbol"), __webpack_require__("esri/symbols/PictureMarkerSymbol"), __webpack_require__("esri/symbols/SimpleFillSymbol"), __webpack_require__("esri/symbols/SimpleLineSymbol"), __webpack_require__("esri/Color"), __webpack_require__("esri/layers/ImageParameters"), __webpack_require__("esri/config"), __webpack_require__("esri/urlUtils"), __webpack_require__("esri/symbols/jsonUtils"), __webpack_require__("./src/app/shared-classes/esri/WebTiledLayer.ts"), __webpack_require__("./src/app/shared-classes/event/event-types.ts"), __webpack_require__("./src/app/shared-classes/esri/WebTiledLayerOptions.ts"), __webpack_require__("./src/app/shared-classes/esri/Point.ts"), __webpack_require__("./src/app/shared-classes/esri/Extent.ts"), __webpack_require__("./src/app/shared-classes/esri/Circle.ts"), __webpack_require__("./src/app/shared-classes/esri/GraphicLayerType.ts"), __webpack_require__("./src/app/shared-classes/esri/DynamicMapServiceLayer.ts"), __webpack_require__("./src/app/shared-classes/esri/LayerType.ts"), __webpack_require__("./src/app/shared-classes/esri/GraphicsLayer.ts"), __webpack_require__("./src/app/shared-classes/esri/GeometryType.ts"), __webpack_require__("./src/app/shared-classes/common/custom-promise.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, esriMap, dojoString, TileInfo, SpatialReference, SimpleMarkerSymbol, PictureMarkerSymbol, SimpleFillSymbol, SimpleLineSymbol, Color, ImageParameters, esriConfig, urlUtils, jsonUtils, WebTiledLayer_1, event_types_1, WebTiledLayerOptions_1, Point_1, Extent_1, Circle_1, GraphicLayerType_1, DynamicMapServiceLayer_1, LayerType_1, GraphicsLayer_1, GeometryType_1, custom_promise_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomMap = (function (_super) {
        __extends(CustomMap, _super);
        function CustomMap(containerID, mapConfiguration, gpsService, layerService) {
            var _this = _super.call(this, containerID, mapConfiguration.options) || this;
            _this.gpsService = gpsService;
            _this.layerService = layerService;
            _this.containerID = "container";
            _this.graphic_layers = {};
            _this.loadedMapResources = {};
            _this.containerID = containerID;
            _this.active_background = new Array();
            _this.mapConfiguration = mapConfiguration;
            _this.gpsMarker = {
                point: null,
                circle: null
            };
            _this.marker = {
                point: null
            };
            if (_this.mapConfiguration.proxy.useProxy) {
                urlUtils.addProxyRule({
                    urlPrefix: _this.mapConfiguration.proxy.urlPrefix,
                    proxyUrl: _this.mapConfiguration.proxy.proxyUrl
                });
                esriConfig.defaults.io.alwaysUseProxy = true;
                esriConfig.defaults.io.corsDetection = false;
            }
            _this.promise = new custom_promise_1.CustomPromise();
            _this.addEvent(event_types_1.EventTypes.MAP_LOAD, function () {
                //initializing graphic layers            
                var lineSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 0, 255]), 2);
                //Initializing selection default symbol
                _this.defaultSelectionSymbol = {
                    point: new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 10, lineSymbol, new Color([0, 0, 255])),
                    polyline: lineSymbol,
                    polygon: new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, lineSymbol, new Color([0, 0, 255, 0.50]))
                };
                for (var gLayer in GraphicLayerType_1.GraphicLayerType) {
                    _this.addGrapichLayer(gLayer);
                }
                _this.promise.resolve(_this);
            });
            return _this;
        }
        CustomMap.prototype.getMapLayers = function () {
            if (!this.mapConfiguration || !this.mapConfiguration.layers || this.mapConfiguration.layers.length == 0) {
                return new Array();
            }
            return this.mapConfiguration.layers;
        };
        CustomMap.prototype.setMapLayers = function (layers) {
            if (!layers || layers.length == 0) {
                return;
            }
            this.mapConfiguration.layers = layers;
        };
        CustomMap.prototype.getMapPromise = function () {
            return this.promise;
        };
        CustomMap.prototype.addGrapichLayer = function (layerId) {
            this.graphic_layers[layerId] = new GraphicsLayer_1.GraphicsLayer();
            this.addLayer(this.graphic_layers[layerId]);
            return this.graphic_layers[layerId];
        };
        CustomMap.prototype.getGraphicLayer = function (layerId) {
            if (!(layerId in this.graphic_layers)) {
                return null;
            }
            return this.graphic_layers[layerId];
        };
        CustomMap.prototype.getSelectionSymbol = function (geometry) {
            switch (geometry.type) {
                case 'point':
                    return this.defaultSelectionSymbol.point;
                case 'polyline':
                    return this.defaultSelectionSymbol.polyline;
                case 'polygon':
                    return this.defaultSelectionSymbol.polygon;
            }
        };
        CustomMap.prototype.SetMapSelection = function (geometries, symbol) {
            if (geometries === null || geometries === undefined || geometries.length === 0)
                return -1;
            var layer = this.getGraphicLayer(GraphicLayerType_1.GraphicLayerType.SELECTION);
            if (symbol === undefined || symbol === null) {
                symbol = this.getSelectionSymbol(geometries[0]);
            }
            geometries.forEach(function (geometry) {
                layer.addGraphic(geometry, symbol);
            });
        };
        CustomMap.prototype.clearMapSelection = function () {
            var layer = this.getGraphicLayer(GraphicLayerType_1.GraphicLayerType.SELECTION);
            layer.clearGraphics();
        };
        CustomMap.prototype.setGPSMarker = function (x, y, accuracy) {
            var point = new Point_1.Point(x, y);
            var circle = new Circle_1.Circle(x, y, accuracy);
            var layer = this.getGraphicLayer(GraphicLayerType_1.GraphicLayerType.GPS);
            if (this.gpsMarker.point == null) {
                var pSymbol = new PictureMarkerSymbol({
                    url: "images/gps.png",
                    width: 48,
                    height: 48
                });
                var fillSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, null, new Color([130, 177, 255, 0.25]));
                this.gpsMarker.circle = layer.addGraphic(circle, fillSymbol);
                this.gpsMarker.point = layer.addGraphic(point, pSymbol);
            }
            else {
                layer.moveGraphic(this.gpsMarker.point, point);
                layer.moveGraphic(this.gpsMarker.circle, circle);
            }
            return circle.getExtent();
        };
        CustomMap.prototype.removeGpsMarker = function () {
            var layer = this.getGraphicLayer(GraphicLayerType_1.GraphicLayerType.GPS);
            layer.removeGraphic(this.gpsMarker.point);
            layer.removeGraphic(this.gpsMarker.circle);
            this.gpsMarker = {
                point: null,
                circle: null
            };
        };
        CustomMap.prototype.setMapMarker = function (x, y) {
            var point = new Point_1.Point(x, y);
            var layer = this.getGraphicLayer(GraphicLayerType_1.GraphicLayerType.DEFAULT);
            if (this.marker.point == null) {
                var pSymbol = new PictureMarkerSymbol({
                    url: "images/marker.png",
                    width: 48,
                    height: 48
                });
                var fillSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, null, new Color([130, 177, 255, 0.25]));
                this.marker.point = layer.addGraphic(point, pSymbol);
            }
            else {
                layer.moveGraphic(this.marker.point, point);
            }
        };
        CustomMap.prototype.removeMapMarker = function () {
            var layer = this.getGraphicLayer(GraphicLayerType_1.GraphicLayerType.DEFAULT);
            layer.removeGraphic(this.marker.point);
            this.marker = {
                point: null
            };
        };
        CustomMap.prototype.gpsOn = function () {
            var _this = this;
            this.gpsService.watchPosition().subscribe(function (result) {
                _this.zoomToExtent(_this.setGPSMarker(result.success.x, result.success.y, result.success.accuracy));
            }, function (result) {
                console.log(result.error.msg);
            });
        };
        CustomMap.prototype.gpsOff = function () {
            this.gpsService.clearNavigator();
            this.removeGpsMarker();
        };
        CustomMap.prototype.setCenter = function (p1) {
            var mapPoint;
            mapPoint = (p1 && typeof p1 == "object" && ('x' in p1 && 'y' in p1)) ? new Point_1.Point(p1.x, p1.y) : null;
            var level = (typeof p1 == "number") ? p1 : p1.level;
            if ((mapPoint == undefined || mapPoint == null) && (level == undefined || level == null)) {
                return;
            }
            if (mapPoint != undefined || mapPoint !== null) {
                if (level != undefined || level != null) {
                    return this.centerAndZoom(mapPoint, level);
                }
                else {
                    return this.centerAt(mapPoint);
                }
            }
            else if ((mapPoint === undefined || mapPoint === null) && this.isLevelInRange(level))
                return this.setLevel(level);
        };
        CustomMap.prototype.isLevelInRange = function (level) {
            return this.getZoomLevelResolution(level) != -1;
        };
        CustomMap.prototype.getZoomLevelResolution = function (level) {
            var lods = this.__tileInfo.lods;
            return (level in lods) ? lods[level].resolution : -1;
        };
        CustomMap.prototype.getNumberOfLevels = function () {
            return this.__tileInfo.lods.length - 1;
        };
        CustomMap.prototype.zoomIn = function () {
            this.setCenter(this.getLevel() + 1);
        };
        CustomMap.prototype.zoomOut = function () {
            this.setCenter(this.getLevel() - 1);
        };
        CustomMap.prototype.zoomToExtent = function (p1, p2, p3, p4) {
            var extentPointFactor = 50;
            var oExtent;
            if (typeof (p1) == "object") {
                oExtent = p1;
            }
            else {
                oExtent = new Extent_1.Extent(p1, p2, p3, p4);
            }
            if (p1 == p3 && p2 == p4) {
                oExtent.xmin = oExtent.xmin - extentPointFactor;
                oExtent.ymin = oExtent.ymin - extentPointFactor;
                oExtent.xmax = oExtent.xmax + extentPointFactor;
                oExtent.ymax = oExtent.ymax + extentPointFactor;
            }
            this.setExtent(oExtent, true);
        };
        CustomMap.prototype.addEvent = function (event, callback) {
            if (!this.eventHandler)
                this.eventHandler = new MapEventHandler(this);
            return this.eventHandler.addEvent(event, callback);
        };
        CustomMap.prototype.clearBackground = function () {
            for (var i = 0; i < this.active_background.length; i++) {
                this.removeLayer(this.active_background[i]);
            }
            this.active_background = new Array();
        };
        CustomMap.prototype.addWebTiledLayer = function (background, clear) {
            if (clear === void 0) { clear = true; }
            if (clear) {
                this.clearBackground();
            }
            var tileInfo = new TileInfo({
                rows: background.tileWidth,
                cols: background.tileHeight,
                dpi: background.dpi,
                format: background.imageFormat,
                origin: new Point_1.Point(background.origin),
                spatialReference: new SpatialReference(background.origin.spatialReference),
                lods: this.mapConfiguration.lods[background.lodIndex]
            });
            var webTiledLayerOptions = new WebTiledLayerOptions_1.WebTiledLayerOptions({
                id: background.id,
                tileInfo: tileInfo,
                initialExtent: (background.hasOwnProperty('extent')) ? new Extent_1.Extent(background.extent) : this.mapConfiguration.options.extent,
                fullExtent: (background.hasOwnProperty('extent')) ? new Extent_1.Extent(background.extent) : this.mapConfiguration.options.extent,
                visible: true,
                getUrlFunction: this.getTileUrl,
                urlTemplate: background.urlTemplate
            });
            var layer = new WebTiledLayer_1.WebTiledLayer(webTiledLayerOptions);
            this.addLayer(layer);
            this.active_background.push(layer); //adding to array to support combined backgrounds
            //patching esri js api to support different background lods on the same map
            this.__tileInfo = tileInfo;
            //////////////////////////////////////////////////////////////////////////
        };
        CustomMap.prototype.getTileUrl = function (level, row, column, layer) {
            return dojoString.substitute(layer.urlTemplate, ["L" + dojoString.pad(level.toString(), 2, '0'),
                "R" + dojoString.pad(row.toString(16), 8, '0'),
                "C" + dojoString.pad(column.toString(16), 8, '0')]);
        };
        CustomMap.prototype.getMapDynamicResource = function (resource) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.mapConfiguration.services[LayerType_1.LayerType.AGS_DYNAMIC].hasOwnProperty(resource)) {
                    reject();
                }
                if (_this.loadedMapResources.hasOwnProperty(resource)) {
                    resolve(_this.loadedMapResources[resource]);
                    return;
                }
                var serviceConfig = _this.mapConfiguration.services[LayerType_1.LayerType.AGS_DYNAMIC][resource];
                var imageParams = new ImageParameters();
                imageParams.format = serviceConfig.imageFormat;
                var mService = new DynamicMapServiceLayer_1.DynamicMapServiceLayer(serviceConfig.restUrl, {
                    id: resource,
                    imageParameters: imageParams,
                    opacity: serviceConfig.opacity,
                    visible: true
                });
                mService.suspend(); //suspend layer from drawing
                mService.on("error", function (e) {
                    console.log("error adding resource: " + resource + " error: " + e);
                    reject();
                });
                mService.on("load", function () {
                    //overriding service object, esri js API has bug while re-ordering layerinfos if the defaultVisiblity in the service is false            
                    var dyn = mService.createDynamicLayerInfosFromLayerInfos();
                    for (var i = 0; i < dyn.length; i++) {
                        dyn[i].defaultVisibility = true;
                    }
                    mService.setDynamicLayerInfos(dyn, true);
                    mService.setVisibleLayers([-1], true);
                    //////////////////////////////////////////////////////
                    //getting layer descriptions from AGS rest api
                    var layersRestUrl = (_this.mapConfiguration.proxy.useProxy) ? (_this.mapConfiguration.proxy.proxyUrl + "?") : "";
                    layersRestUrl += serviceConfig.restUrl + "/layers?f=json";
                    _this.layerService.getLayers(layersRestUrl).then(function (response) {
                        for (var i_1 = 0; i_1 < response.layers.length; i_1++) {
                            var description = JSON.parse(response.layers[i_1].description);
                            if (!description.hasOwnProperty("layerName")) {
                                continue;
                            }
                            mService.addLayerMapping(description.layerName, response.layers[i_1].id);
                        }
                        _this.loadedMapResources[resource] = mService;
                        mService.resume();
                        resolve(mService);
                    });
                });
                _this.addLayer(mService);
            });
        };
        CustomMap.prototype.getGeometry = function (geometry) {
            switch (geometry.type) {
                case GeometryType_1.GeometryType.POINT:
                    return new Point_1.Point(geometry.x, geometry.y);
            }
            return null;
        };
        CustomMap.prototype.setVisibleLayer = function (layersList) {
            var _this = this;
            var mapping = {};
            //mapping requested layers according to layer type
            for (var i = 0; i < layersList.length; i++) {
                if (!mapping.hasOwnProperty(layersList[i].layerType)) {
                    mapping[layersList[i].layerType] = new Array();
                }
                mapping[layersList[i].layerType].push(layersList[i]);
            }
            //looping each type of layer
            for (var key in mapping) {
                if (mapping.hasOwnProperty(key)) {
                    var layers = mapping[key];
                    switch (parseInt(key)) {
                        case LayerType_1.LayerType.AGS_DYNAMIC:
                            //grouping layers according to resource name
                            var resources = {};
                            for (var i = 0; i < layers.length; i++) {
                                if (!resources.hasOwnProperty(layers[i].resource)) {
                                    resources[layers[i].resource] = new Array();
                                }
                                resources[layers[i].resource].push(layers[i]);
                            }
                            var _loop_1 = function (resource) {
                                if (resources.hasOwnProperty(resource)) {
                                    var cLayers_1 = resources[resource];
                                    this_1.getMapDynamicResource(resource).then(function (mService) {
                                        //getting visible layers in service
                                        var visibleLayers = mService.visibleLayers.concat([]);
                                        //removing -1 from service
                                        if (visibleLayers.indexOf(-1) !== -1) {
                                            visibleLayers = [];
                                        }
                                        //looping requested layers in the service
                                        for (var j = 0; j < cLayers_1.length; j++) {
                                            var layer = cLayers_1[j];
                                            var layerID = mService.getLayerID(cLayers_1[j].layerName);
                                            var index = visibleLayers.indexOf(layerID);
                                            if (layer.visible && index === -1) {
                                                visibleLayers.push(layerID);
                                            }
                                            else if (!layer.visible && index !== -1) {
                                                visibleLayers.splice(index, 1);
                                            }
                                        }
                                        //setting visibility in the service
                                        mService.setVisibleLayers(visibleLayers, false);
                                    });
                                }
                            };
                            var this_1 = this;
                            //looping each resource
                            for (var resource in resources) {
                                _loop_1(resource);
                            }
                            break;
                        case LayerType_1.LayerType.GRAPHIC:
                            var _loop_2 = function (i) {
                                var layer = layers[i];
                                var gLayer = this_2.getGraphicLayer(layer.layerName);
                                if (!layer.visible && gLayer === null) {
                                    return "continue";
                                }
                                if (!layer.visible && gLayer !== null) {
                                    gLayer.hide();
                                    return "continue";
                                }
                                if (gLayer !== null) {
                                    gLayer.show();
                                    return "continue";
                                }
                                gLayer = this_2.addGrapichLayer(layer.layerName);
                                var symbol = jsonUtils.fromJson(layer.symbol);
                                this_2.layerService.getLayersData([layer.layerName]).then(function (response) {
                                    if (response.data !== null && layer.layerName in response.data) {
                                        var layer_data = response.data[layer.layerName];
                                        for (var i_2 = 0; i_2 < layer_data.length; i_2++) {
                                            var obj = layer_data[i_2];
                                            gLayer.addGraphic(_this.getGeometry(obj.geometry), symbol, obj.data);
                                        }
                                    }
                                });
                            };
                            var this_2 = this;
                            for (var i = 0; i < layers.length; i++) {
                                _loop_2(i);
                            }
                        default:
                            break;
                    }
                }
            }
        };
        return CustomMap;
    }(esriMap));
    exports.CustomMap = CustomMap;
    var MapEventHandler = (function () {
        function MapEventHandler(map) {
            this.disabled = false;
            this.map = map;
            this.callbacks = {};
            for (var e in event_types_1.EventTypes) {
                var key = parseInt(e);
                this.callbacks[key] = new Array();
            }
            var ptrThis = this;
            map.on("extent-change", function (data) {
                ptrThis.executeCallbacks(event_types_1.EventTypes.EXTENT_CHANGE, {
                    delta: data.delta,
                    extent: data.extent,
                    levelChange: data.levelChange,
                    lod: data.lod
                });
            });
            map.on("load", function (data) {
                ptrThis.executeCallbacks(event_types_1.EventTypes.MAP_LOAD, data);
            });
            map.on("dbl-click", function (data) {
                ptrThis.executeCallbacks(event_types_1.EventTypes.DOUBLE_CLICK, {
                    'mapPoint': data.mapPoint,
                    'screenPoint': data.screenPoint
                });
            });
            map.on("click", function (data) {
                ptrThis.executeCallbacks(event_types_1.EventTypes.CLICK, {
                    'mapPoint': data.mapPoint,
                    'screenPoint': data.screenPoint
                });
            });
            map.on("pan", function (data) {
                ptrThis.executeCallbacks(event_types_1.EventTypes.PAN, {
                    delta: data.delta,
                    extent: data.extent
                });
            });
            map.on("mouse-move", function (data) {
                ptrThis.executeCallbacks(event_types_1.EventTypes.MOUSE_MOVE, {
                    'mapPoint': data.mapPoint,
                    'screenPoint': data.screenPoint
                });
            });
            map.on("mouse-over", function (data) {
                ptrThis.executeCallbacks(event_types_1.EventTypes.MOUSE_OVER, {
                    'data': data
                });
            });
            map.on("mouse-down", function (data) {
                if (data.button === 2) {
                    ptrThis.executeCallbacks(event_types_1.EventTypes.RIGHT_CLICK, {
                        mapPoint: data.mapPoint,
                        screenPoint: data.screenPoint
                    });
                }
                if (data.button === 1) {
                    ptrThis.executeCallbacks(event_types_1.EventTypes.MOUSE_DOWN, {
                        mapPoint: data.mapPoint,
                        screenPoint: data.screenPoint
                    });
                }
            });
            map.on("mouse-drag-start", function (data) {
                ptrThis.executeCallbacks(event_types_1.EventTypes.MOUSE_DRAG_START, {
                    mapPoint: data.mapPoint,
                    screenPoint: data.screenPoint
                });
            });
            map.on("mouse-drag", function (data) {
                ptrThis.executeCallbacks(event_types_1.EventTypes.MOUSE_DRAG, {
                    mapPoint: data.mapPoint,
                    screenPoint: data.screenPoint
                });
            });
            map.on("resize", function (data) {
                ptrThis.executeCallbacks(event_types_1.EventTypes.RESIZE, {});
            });
        }
        MapEventHandler.prototype.addEvent = function (event, callback) {
            return this.callbacks[event].push(callback) - 1;
        };
        MapEventHandler.prototype.removeEvent = function (event, handler) {
            if (event in this.callbacks && handler in this.callbacks[event])
                delete this.callbacks[event][handler];
        };
        MapEventHandler.prototype.disableAllEvents = function () {
            this.disabled = true;
            this.map.disablePan();
            this.map.disableScrollWheelZoom();
        };
        MapEventHandler.prototype.enableAllEvents = function () {
            this.disabled = false;
            this.map.enablePan();
            this.map.enableScrollWheelZoom();
        };
        MapEventHandler.prototype.executeCallbacks = function (event, data) {
            if (this.disabled)
                return;
            for (var i = 0; i < this.callbacks[event].length; i++) {
                if (this.callbacks[event] == null)
                    continue;
                try {
                    this.callbacks[event][i](data);
                }
                catch (e) { }
            }
        };
        return MapEventHandler;
    }());
    exports.MapEventHandler = MapEventHandler;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=custom-map.js.map

/***/ }),

/***/ "./src/app/shared-classes/event/current-status-model.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CurrentStatusModel = (function () {
        function CurrentStatusModel(eventInfo) {
            this.employeesSummary = 0;
            this.atEvent = Array();
            this.toEvent = Array();
            this.areas = Array();
            this.setCurrentStatusForces(eventInfo.forcesInfo);
            this.setCurrentStatusAreas(eventInfo.areas, eventInfo.forcesInfo);
            this.log = eventInfo.eventLog;
            this.generalInfo = eventInfo.generalInfo;
        }
        CurrentStatusModel.prototype.setCurrentStatusForces = function (forcesInfo) {
            if (forcesInfo == null || forcesInfo.activeTeams == null || forcesInfo.activeTeams.length == 0) {
                return;
            }
            for (var index = 0; index < forcesInfo.activeTeams.length; index++) {
                var activeTeam = forcesInfo.activeTeams[index];
                if (activeTeam.isCarInTheWayToEvent) {
                    this.setToEvent(activeTeam);
                }
                else {
                    this.setAtEvent(activeTeam);
                }
                this.employeesSummary = this.employeesSummary + activeTeam.employees.length;
            }
            for (var index = 0; index < this.atEvent.length; index++) {
                this.atEvent[index].carTeams = this.atEvent[index].carTeams.sort(function (a, b) { return a.isExternalEventUnionForce < b.isExternalEventUnionForce ? -1 : 1; });
            }
            for (var index = 0; index < this.toEvent.length; index++) {
                this.toEvent[index].carTeams = this.toEvent[index].carTeams.sort(function (a, b) { return a.isExternalEventUnionForce < b.isExternalEventUnionForce ? -1 : 1; });
            }
            this.atEvent = this.atEvent.sort(function (a, b) { return a.typeName < b.typeName ? -1 : 1; });
            this.toEvent = this.toEvent.sort(function (a, b) { return a.typeName < b.typeName ? -1 : 1; });
            this.carsSummary = forcesInfo.activeTeams.length;
        };
        CurrentStatusModel.prototype.setCurrentStatusAreas = function (areas, forcesInfo) {
            if (forcesInfo == null || forcesInfo.activeTeams == null || forcesInfo.activeTeams.length == 0 || areas == null || areas.length == 0) {
                return;
            }
            var _loop_1 = function (i) {
                var area = areas[i];
                var newArea = new CurrentStatusArea(area.areaName, area.areaCommanderName, area.areaRadioFrq);
                for (var index = 0; index < forcesInfo.activeTeams.length; index++) {
                    var team = forcesInfo.activeTeams[index];
                    if (team.eventAreaId == area.eventAreaId) {
                        newArea.carTeams.push(team);
                    }
                }
                found = this_1.areas.find(function (element) {
                    return element.areaName == area.areaName;
                });
                if (!found) {
                    this_1.areas.push(newArea);
                }
            };
            var this_1 = this, found;
            for (var i = 0; i < areas.length; i++) {
                _loop_1(i);
            }
        };
        CurrentStatusModel.prototype.setToEvent = function (team) {
            for (var index = 0; index < this.toEvent.length; index++) {
                if (this.toEvent[index].typeName == team.carInfo.carTypeDesc) {
                    this.toEvent[index].typeCount++;
                    this.toEvent[index].employeesCounter = this.toEvent[index].employeesCounter + team.employees.length;
                    this.toEvent[index].carTeams.push(team);
                    return;
                }
            }
            var currentStatus = new CurentStatusForce(team.carInfo.carTypeDesc, 1, team.employees.length);
            currentStatus.carTeams.push(team);
            this.toEvent.push(currentStatus);
        };
        CurrentStatusModel.prototype.setAtEvent = function (team) {
            for (var index = 0; index < this.atEvent.length; index++) {
                if (this.atEvent[index].typeName == team.carInfo.carTypeDesc) {
                    this.atEvent[index].typeCount++;
                    this.atEvent[index].employeesCounter = this.atEvent[index].employeesCounter + team.employees.length;
                    this.atEvent[index].carTeams.push(team);
                    return;
                }
            }
            var currentStatus = new CurentStatusForce(team.carInfo.carTypeDesc, 1, team.employees.length);
            currentStatus.carTeams.push(team);
            this.atEvent.push(currentStatus);
        };
        return CurrentStatusModel;
    }());
    exports.CurrentStatusModel = CurrentStatusModel;
    var CurentStatusForce = (function () {
        function CurentStatusForce(typeName, typeCount, employeesCounter) {
            this.isOpen = false;
            this.typeCount = typeCount;
            this.typeName = typeName;
            this.employeesCounter = employeesCounter;
            this.carTeams = Array();
        }
        return CurentStatusForce;
    }());
    exports.CurentStatusForce = CurentStatusForce;
    var CurrentStatusArea = (function () {
        function CurrentStatusArea(areaName, areaCommanderName, areaFreq) {
            this.isOpen = false;
            this.areaName = areaName;
            this.areaCommanderName = areaCommanderName;
            this.areaFreq = areaFreq;
            this.carTeams = Array();
        }
        return CurrentStatusArea;
    }());
    exports.CurrentStatusArea = CurrentStatusArea;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=current-status-model.js.map

/***/ }),

/***/ "./src/app/shared-classes/event/event-control-status-types.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventControlStatusTypes;
    (function (EventControlStatusTypes) {
        EventControlStatusTypes[EventControlStatusTypes["InControl"] = 1] = "InControl";
        EventControlStatusTypes[EventControlStatusTypes["OutOfControl"] = 2] = "OutOfControl";
    })(EventControlStatusTypes = exports.EventControlStatusTypes || (exports.EventControlStatusTypes = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-control-status-types.js.map

/***/ }),

/***/ "./src/app/shared-classes/event/event-details-data.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventDetailsData = (function () {
        function EventDetailsData(eventId, eventDetailsType, isNew, eventNum) {
            if (isNew === void 0) { isNew = false; }
            if (eventNum === void 0) { eventNum = null; }
            this.eventId = eventId;
            this.eventDetailsType = eventDetailsType;
            this.isNew = isNew;
            this.eventNum = eventNum;
        }
        return EventDetailsData;
    }());
    exports.EventDetailsData = EventDetailsData;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-details-data.js.map

/***/ }),

/***/ "./src/app/shared-classes/event/event-details-status.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventDetailsStatus;
    (function (EventDetailsStatus) {
        EventDetailsStatus[EventDetailsStatus["Dispatch"] = 1] = "Dispatch";
        EventDetailsStatus[EventDetailsStatus["Exit"] = 2] = "Exit";
        EventDetailsStatus[EventDetailsStatus["Arraival"] = 3] = "Arraival";
        EventDetailsStatus[EventDetailsStatus["Finish"] = 6] = "Finish";
        EventDetailsStatus[EventDetailsStatus["BackOnStation"] = 7] = "BackOnStation";
    })(EventDetailsStatus = exports.EventDetailsStatus || (exports.EventDetailsStatus = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-details-status.js.map

/***/ }),

/***/ "./src/app/shared-classes/event/event-details-types.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventDetailsTypes;
    (function (EventDetailsTypes) {
        EventDetailsTypes[EventDetailsTypes["CarRequest"] = 0] = "CarRequest";
        EventDetailsTypes[EventDetailsTypes["CurrentEvent"] = 1] = "CurrentEvent";
        EventDetailsTypes[EventDetailsTypes["CreateEvent"] = 2] = "CreateEvent";
    })(EventDetailsTypes = exports.EventDetailsTypes || (exports.EventDetailsTypes = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-details-types.js.map

/***/ }),

/***/ "./src/app/shared-classes/event/event-force-info.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventForceInfo = (function () {
        function EventForceInfo() {
        }
        return EventForceInfo;
    }());
    exports.EventForceInfo = EventForceInfo;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-force-info.js.map

/***/ }),

/***/ "./src/app/shared-classes/event/event-info.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventInfo = (function () {
        function EventInfo() {
        }
        return EventInfo;
    }());
    exports.EventInfo = EventInfo;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-info.js.map

/***/ }),

/***/ "./src/app/shared-classes/event/event-types.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventTypes;
    (function (EventTypes) {
        EventTypes[EventTypes["PAN"] = 0] = "PAN";
        EventTypes[EventTypes["EXTENT_CHANGE"] = 1] = "EXTENT_CHANGE";
        EventTypes[EventTypes["MAP_LOAD"] = 2] = "MAP_LOAD";
        EventTypes[EventTypes["CLICK"] = 3] = "CLICK";
        EventTypes[EventTypes["DOUBLE_CLICK"] = 4] = "DOUBLE_CLICK";
        EventTypes[EventTypes["MOUSE_MOVE"] = 5] = "MOUSE_MOVE";
        EventTypes[EventTypes["RIGHT_CLICK"] = 6] = "RIGHT_CLICK";
        EventTypes[EventTypes["LAYER_ERROR"] = 7] = "LAYER_ERROR";
        EventTypes[EventTypes["MOUSE_OVER"] = 8] = "MOUSE_OVER";
        EventTypes[EventTypes["MOUSE_DRAG_START"] = 9] = "MOUSE_DRAG_START";
        EventTypes[EventTypes["MOUSE_DRAG"] = 10] = "MOUSE_DRAG";
        EventTypes[EventTypes["RESIZE"] = 11] = "RESIZE";
        EventTypes[EventTypes["MOUSE_DOWN"] = 12] = "MOUSE_DOWN";
    })(EventTypes = exports.EventTypes || (exports.EventTypes = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-types.js.map

/***/ }),

/***/ "./src/app/shared-classes/home/home-model.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HomeModel = (function () {
        function HomeModel() {
        }
        return HomeModel;
    }());
    exports.HomeModel = HomeModel;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=home-model.js.map

/***/ }),

/***/ "./src/app/shared-classes/node/fire-truck/shalhevet-fire-truck-push-message-trigger.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ShalhevetFireTruckPushMessageTrigger;
    (function (ShalhevetFireTruckPushMessageTrigger) {
        ShalhevetFireTruckPushMessageTrigger[ShalhevetFireTruckPushMessageTrigger["ActiveEventAdded"] = 1] = "ActiveEventAdded";
        ShalhevetFireTruckPushMessageTrigger[ShalhevetFireTruckPushMessageTrigger["ActiveEventInfoUpdated"] = 2] = "ActiveEventInfoUpdated";
        ShalhevetFireTruckPushMessageTrigger[ShalhevetFireTruckPushMessageTrigger["ActiveEventForcesChanged"] = 3] = "ActiveEventForcesChanged";
        ShalhevetFireTruckPushMessageTrigger[ShalhevetFireTruckPushMessageTrigger["ActiveEventLogChanged"] = 4] = "ActiveEventLogChanged";
        ShalhevetFireTruckPushMessageTrigger[ShalhevetFireTruckPushMessageTrigger["ActiveEventClosed"] = 5] = "ActiveEventClosed";
        ShalhevetFireTruckPushMessageTrigger[ShalhevetFireTruckPushMessageTrigger["ActiveEventMissionStatusChanged"] = 6] = "ActiveEventMissionStatusChanged";
        ShalhevetFireTruckPushMessageTrigger[ShalhevetFireTruckPushMessageTrigger["ActiveEventAreaChanged"] = 7] = "ActiveEventAreaChanged";
        ShalhevetFireTruckPushMessageTrigger[ShalhevetFireTruckPushMessageTrigger["ActiveEventLocationUpdated"] = 8] = "ActiveEventLocationUpdated";
        ShalhevetFireTruckPushMessageTrigger[ShalhevetFireTruckPushMessageTrigger["FireTruckInfoChange"] = 9] = "FireTruckInfoChange";
        ShalhevetFireTruckPushMessageTrigger[ShalhevetFireTruckPushMessageTrigger["MapLayerDataChanged"] = 100] = "MapLayerDataChanged";
    })(ShalhevetFireTruckPushMessageTrigger = exports.ShalhevetFireTruckPushMessageTrigger || (exports.ShalhevetFireTruckPushMessageTrigger = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=shalhevet-fire-truck-push-message-trigger.js.map

/***/ }),

/***/ "./src/app/shared-classes/node/realtime-layers/realtime-layer-push-message-trigger.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RealtimeLayerPushMessageTrigger;
    (function (RealtimeLayerPushMessageTrigger) {
        RealtimeLayerPushMessageTrigger[RealtimeLayerPushMessageTrigger["UpdateLayerData"] = 1] = "UpdateLayerData";
    })(RealtimeLayerPushMessageTrigger = exports.RealtimeLayerPushMessageTrigger || (exports.RealtimeLayerPushMessageTrigger = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=realtime-layer-push-message-trigger.js.map

/***/ }),

/***/ "./src/app/shared-classes/offline/fire-truck-offline-action-types.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FireTruckOfflineActionTypes;
    (function (FireTruckOfflineActionTypes) {
        FireTruckOfflineActionTypes[FireTruckOfflineActionTypes["NONE"] = 0] = "NONE";
        FireTruckOfflineActionTypes[FireTruckOfflineActionTypes["MissionStatusUpdate"] = 1] = "MissionStatusUpdate";
        FireTruckOfflineActionTypes[FireTruckOfflineActionTypes["EventReport"] = 2] = "EventReport";
        FireTruckOfflineActionTypes[FireTruckOfflineActionTypes["SaveCarTeam"] = 3] = "SaveCarTeam";
        FireTruckOfflineActionTypes[FireTruckOfflineActionTypes["UpdateEventControlTime"] = 4] = "UpdateEventControlTime";
        FireTruckOfflineActionTypes[FireTruckOfflineActionTypes["UpdateCarKM"] = 5] = "UpdateCarKM";
        FireTruckOfflineActionTypes[FireTruckOfflineActionTypes["LaunchToEvent"] = 6] = "LaunchToEvent";
    })(FireTruckOfflineActionTypes = exports.FireTruckOfflineActionTypes || (exports.FireTruckOfflineActionTypes = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=fire-truck-offline-action-types.js.map

/***/ }),

/***/ "./src/app/shared-classes/offline/fire-truck-offline-action.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/moment/moment.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FireTruckOfflineAction = (function () {
        function FireTruckOfflineAction(offlineActionType, actionData) {
            this.offlineActionType = offlineActionType;
            this.actionRealTime = moment().format("YYYY/MM/DD HH:mm:ss");
            this.actionData = JSON.stringify(actionData);
        }
        return FireTruckOfflineAction;
    }());
    exports.FireTruckOfflineAction = FireTruckOfflineAction;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=fire-truck-offline-action.js.map

/***/ }),

/***/ "./src/app/shared-classes/quick-report/quick-report-types.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QuickReportTypes;
    (function (QuickReportTypes) {
        QuickReportTypes[QuickReportTypes["NONE"] = 0] = "NONE";
        QuickReportTypes[QuickReportTypes["AgainstTraffic"] = 9] = "AgainstTraffic";
        QuickReportTypes[QuickReportTypes["Smoke"] = 11] = "Smoke";
        QuickReportTypes[QuickReportTypes["RedLight"] = 6] = "RedLight";
        QuickReportTypes[QuickReportTypes["Broken"] = 12] = "Broken";
        QuickReportTypes[QuickReportTypes["CarActive"] = 14] = "CarActive";
        QuickReportTypes[QuickReportTypes["Accident"] = 13] = "Accident";
        QuickReportTypes[QuickReportTypes["Loaded"] = 5] = "Loaded";
        QuickReportTypes[QuickReportTypes["Custom"] = 2] = "Custom";
    })(QuickReportTypes = exports.QuickReportTypes || (exports.QuickReportTypes = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=quick-report-types.js.map

/***/ }),

/***/ "./src/app/shared-classes/report/event-injured-data.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventInjuredData = (function () {
        function EventInjuredData() {
        }
        return EventInjuredData;
    }());
    exports.EventInjuredData = EventInjuredData;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-injured-data.js.map

/***/ }),

/***/ "./src/app/shared-classes/report/event-location-data.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventLocationData = (function () {
        function EventLocationData() {
        }
        return EventLocationData;
    }());
    exports.EventLocationData = EventLocationData;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-location-data.js.map

/***/ }),

/***/ "./src/app/shared-classes/report/event-related-business.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventRelatedBusiness = (function () {
        function EventRelatedBusiness() {
        }
        return EventRelatedBusiness;
    }());
    exports.EventRelatedBusiness = EventRelatedBusiness;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-related-business.js.map

/***/ }),

/***/ "./src/app/shared-classes/report/event-report-data.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/shared-classes/report/event-injured-data.ts"), __webpack_require__("./src/app/shared-classes/report/event-type.ts"), __webpack_require__("./src/app/shared-classes/report/event-related-business.ts"), __webpack_require__("./src/app/shared-classes/report/event-location-data.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, event_injured_data_1, event_type_1, event_related_business_1, event_location_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventReportData = (function () {
        function EventReportData() {
            this.eventInjured = new event_injured_data_1.EventInjuredData();
            this.actualEventLocation = new event_location_data_1.EventLocationData();
            this.actualEventType = new event_type_1.EventType();
            this.relatedBusiness = new event_related_business_1.EventRelatedBusiness();
            this.reportEquipments = new Array();
        }
        return EventReportData;
    }());
    exports.EventReportData = EventReportData;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-report-data.js.map

/***/ }),

/***/ "./src/app/shared-classes/report/event-type.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventType = (function () {
        function EventType() {
        }
        return EventType;
    }());
    exports.EventType = EventType;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-type.js.map

/***/ }),

/***/ "./src/app/shared-classes/report/used-equipment.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UsedEquipment = (function () {
        function UsedEquipment() {
        }
        return UsedEquipment;
    }());
    exports.UsedEquipment = UsedEquipment;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=used-equipment.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/active-car-check.request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ActiveCarCheckRequest = (function () {
        function ActiveCarCheckRequest(carId) {
            this.carId = carId;
        }
        return ActiveCarCheckRequest;
    }());
    exports.ActiveCarCheckRequest = ActiveCarCheckRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=active-car-check.request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/add-equipment-lack-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/shared-classes/request/add-equipment-request-base.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, add_equipment_request_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AddEquipmentLackRequest = (function (_super) {
        __extends(AddEquipmentLackRequest, _super);
        function AddEquipmentLackRequest(carId, carCheckId, carEquipmentId, reportedEmployeeId, input) {
            var _this = _super.call(this, carId, carCheckId, carEquipmentId, reportedEmployeeId) || this;
            _this.lackQuantity = input;
            return _this;
        }
        return AddEquipmentLackRequest;
    }(add_equipment_request_base_1.AddEquipmentRequestBase));
    exports.AddEquipmentLackRequest = AddEquipmentLackRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=add-equipment-lack-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/add-equipment-request-base.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AddEquipmentRequestBase = (function () {
        function AddEquipmentRequestBase(carId, carCheckId, carEquipmentId, reportedEmployeeId) {
            this.carId = carId;
            this.carCheckId = carCheckId;
            this.carEquipmentId = carEquipmentId;
            this.reportedEmployeeId = reportedEmployeeId;
        }
        return AddEquipmentRequestBase;
    }());
    exports.AddEquipmentRequestBase = AddEquipmentRequestBase;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=add-equipment-request-base.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/add-equipment-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/shared-classes/request/add-equipment-request-base.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, add_equipment_request_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AddEquipmentRequest = (function (_super) {
        __extends(AddEquipmentRequest, _super);
        function AddEquipmentRequest(carId, carCheckId, carEquipmentId, reportedEmployeeId, input) {
            var _this = _super.call(this, carId, carCheckId, carEquipmentId, reportedEmployeeId) || this;
            _this.damageDesc = input;
            return _this;
        }
        return AddEquipmentRequest;
    }(add_equipment_request_base_1.AddEquipmentRequestBase));
    exports.AddEquipmentRequest = AddEquipmentRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=add-equipment-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/cancel-mission-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/moment/moment.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CancelMissionRequest = (function () {
        function CancelMissionRequest(missionId, carId) {
            this.activeMissionId = missionId;
            this.cancelTime = moment().format("YYYY/MM/DD HH:mm");
            this.cancelDateTime = new Date();
            this.carId = carId;
        }
        return CancelMissionRequest;
    }());
    exports.CancelMissionRequest = CancelMissionRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=cancel-mission-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/car-check.request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CarCheckRequest = (function () {
        function CarCheckRequest(carId, checkerEmployeeId, carKm) {
            if (carKm === void 0) { carKm = null; }
            this.carId = carId;
            this.checkerEmployeeId = checkerEmployeeId;
            this.carKm = carKm;
            this.carCheckTypeId = 1;
        }
        return CarCheckRequest;
    }());
    exports.CarCheckRequest = CarCheckRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=car-check.request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/car-data.request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CarDataRequest = (function () {
        function CarDataRequest(carId) {
            this.carId = carId;
        }
        return CarDataRequest;
    }());
    exports.CarDataRequest = CarDataRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=car-data.request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/change-mission-status-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChangeMissionStatusRequest = (function () {
        function ChangeMissionStatusRequest() {
        }
        return ChangeMissionStatusRequest;
    }());
    exports.ChangeMissionStatusRequest = ChangeMissionStatusRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=change-mission-status-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/close-damage-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CloseDamageRequest = (function () {
        function CloseDamageRequest(carId, carEquipmentDamageId, closeEmployeeId) {
            this.carId = carId;
            this.carEquipmentDamageId = carEquipmentDamageId;
            this.closeEmployeeId = closeEmployeeId;
        }
        return CloseDamageRequest;
    }());
    exports.CloseDamageRequest = CloseDamageRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=close-damage-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/close-lack-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/shared-classes/request/add-equipment-lack-request.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, add_equipment_lack_request_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CloseLackRequest = (function (_super) {
        __extends(CloseLackRequest, _super);
        function CloseLackRequest(carId, carEquipmentDamageId, carCheckId, input, closeEmployeeId) {
            var _this = _super.call(this, carId, carCheckId, 0, closeEmployeeId, input) || this;
            _this.carEquipmentDamageId = carEquipmentDamageId;
            return _this;
        }
        return CloseLackRequest;
    }(add_equipment_lack_request_1.AddEquipmentLackRequest));
    exports.CloseLackRequest = CloseLackRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=close-lack-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/control-time-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlTimeRequest = (function () {
        function ControlTimeRequest(carId, eventId, updateTime, eventControlStatus) {
            this.carId = carId;
            this.eventId = eventId;
            this.updateTime = updateTime;
            this.eventControlStatusId = eventControlStatus;
        }
        return ControlTimeRequest;
    }());
    exports.ControlTimeRequest = ControlTimeRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=control-time-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/device-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DeviceRequest = (function () {
        function DeviceRequest(deviceId) {
            this.deviceId = deviceId;
        }
        return DeviceRequest;
    }());
    exports.DeviceRequest = DeviceRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=device-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/employees-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/shared-classes/request/device-request.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, device_request_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeesRequest = (function (_super) {
        __extends(EmployeesRequest, _super);
        function EmployeesRequest(id) {
            return _super.call(this, id) || this;
        }
        return EmployeesRequest;
    }(device_request_1.DeviceRequest));
    exports.EmployeesRequest = EmployeesRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=employees-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/event-list-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventListRequest = (function () {
        function EventListRequest(deviceId, unionId) {
            this.deviceId = deviceId;
            this.unionId = unionId;
        }
        return EventListRequest;
    }());
    exports.EventListRequest = EventListRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-list-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/event-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventRequest = (function () {
        function EventRequest(id) {
            this.eventId = id;
        }
        return EventRequest;
    }());
    exports.EventRequest = EventRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/get-event-report-data-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GetEventReportDataRequest = (function () {
        function GetEventReportDataRequest() {
        }
        return GetEventReportDataRequest;
    }());
    exports.GetEventReportDataRequest = GetEventReportDataRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=get-event-report-data-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/kabaut-point.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KabautPoint = (function () {
        function KabautPoint() {
        }
        return KabautPoint;
    }());
    exports.KabautPoint = KabautPoint;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=kabaut-point.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/launch-mission-status-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LaunchMissionStatusRequest = (function () {
        function LaunchMissionStatusRequest(carId, eventId) {
            this.eventId = eventId;
            this.carId = carId;
            this.launchDateTime = new Date();
        }
        return LaunchMissionStatusRequest;
    }());
    exports.LaunchMissionStatusRequest = LaunchMissionStatusRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=launch-mission-status-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/new-mission-status-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NewMissionStatusRequest = (function () {
        function NewMissionStatusRequest(carId) {
            this.exitDateTime = new Date();
            this.carId = carId;
        }
        return NewMissionStatusRequest;
    }());
    exports.NewMissionStatusRequest = NewMissionStatusRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=new-mission-status-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/offline-actions-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OfflineActionsRequest = (function () {
        function OfflineActionsRequest(deviceId, carId, items) {
            this.carId = carId;
            this.offlineActions = items;
            this.deviceId = deviceId;
        }
        return OfflineActionsRequest;
    }());
    exports.OfflineActionsRequest = OfflineActionsRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=offline-actions-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/prevent-fire-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/shared-classes/request/event-request.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, event_request_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PreventFireRequest = (function (_super) {
        __extends(PreventFireRequest, _super);
        function PreventFireRequest(id) {
            return _super.call(this, id) || this;
        }
        return PreventFireRequest;
    }(event_request_1.EventRequest));
    exports.PreventFireRequest = PreventFireRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=prevent-fire-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/prevention-details-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PreventionDetailsRequest = (function () {
        function PreventionDetailsRequest(buildingId) {
            this.buildingId = buildingId;
        }
        return PreventionDetailsRequest;
    }());
    exports.PreventionDetailsRequest = PreventionDetailsRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=prevention-details-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/save-car-check-finish.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SaveCarCheckFinish = (function () {
        function SaveCarCheckFinish(carId, carCheckId) {
            this.carId = carId;
            this.carCheckId = carCheckId;
        }
        return SaveCarCheckFinish;
    }());
    exports.SaveCarCheckFinish = SaveCarCheckFinish;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=save-car-check-finish.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/save-employees-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SaveEmployeesRequest = (function () {
        function SaveEmployeesRequest() {
        }
        return SaveEmployeesRequest;
    }());
    exports.SaveEmployeesRequest = SaveEmployeesRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=save-employees-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/save-quick-report-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/shared-classes/request/device-request.ts"), __webpack_require__("./node_modules/moment/moment.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, device_request_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SaveQuickReportRequest = (function (_super) {
        __extends(SaveQuickReportRequest, _super);
        function SaveQuickReportRequest(deviceId) {
            var _this = _super.call(this, deviceId) || this;
            _this.reportTime = moment().format("YYYY/MM/DD HH:mm");
            return _this;
        }
        return SaveQuickReportRequest;
    }(device_request_1.DeviceRequest));
    exports.SaveQuickReportRequest = SaveQuickReportRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=save-quick-report-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/save.supplies.request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SaveSuppliesRequest = (function () {
        function SaveSuppliesRequest() {
        }
        return SaveSuppliesRequest;
    }());
    exports.SaveSuppliesRequest = SaveSuppliesRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=save.supplies.request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/start-car-check.request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StartCarCheckRequest = (function () {
        function StartCarCheckRequest(carId, unionId) {
            this.carId = carId;
            this.unionId = unionId;
        }
        return StartCarCheckRequest;
    }());
    exports.StartCarCheckRequest = StartCarCheckRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=start-car-check.request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/supplies.request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SuppliesRequest = (function () {
        function SuppliesRequest(carId, missionId) {
            this.carId = carId;
            this.missionId = missionId;
        }
        return SuppliesRequest;
    }());
    exports.SuppliesRequest = SuppliesRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=supplies.request.js.map

/***/ }),

/***/ "./src/app/shared-classes/request/update-new-mission-status-request.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UpdateNewMissionStatusRequest = (function () {
        function UpdateNewMissionStatusRequest(carId, missionStatusId) {
            this.statusDateTime = new Date();
            this.carId = carId;
            this.missionStatusId = missionStatusId;
        }
        return UpdateNewMissionStatusRequest;
    }());
    exports.UpdateNewMissionStatusRequest = UpdateNewMissionStatusRequest;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=update-new-mission-status-request.js.map

/***/ }),

/***/ "./src/app/shared-classes/response/ApplicationResponse.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/shared-classes/response/ApplicationResponseStatus.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ApplicationResponseStatus_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApplicationResponse = (function () {
        function ApplicationResponse() {
        }
        ApplicationResponse.prototype.constractor = function () {
            this.errorMessage = '';
            this.successMessage = '';
            this.data = null;
            this.resultStatus = ApplicationResponseStatus_1.ApplicationResponseStatus.Success;
        };
        ApplicationResponse.prototype.isSuccess = function () {
            return this.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Success;
        };
        ApplicationResponse.prototype.isSuccessWithResult = function () {
            return this.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Success && this.data != null;
        };
        ApplicationResponse.prototype.isFail = function () {
            return this.resultStatus == ApplicationResponseStatus_1.ApplicationResponseStatus.Fail;
        };
        ApplicationResponse.prototype.CreateSuccessResponse = function () {
            var response = new ApplicationResponse();
            response.resultStatus = ApplicationResponseStatus_1.ApplicationResponseStatus.Success;
            return response;
        };
        ApplicationResponse.prototype.CreateFailResponse = function () {
            var response = new ApplicationResponse();
            response.resultStatus = ApplicationResponseStatus_1.ApplicationResponseStatus.Fail;
            return response;
        };
        ApplicationResponse.prototype.CreateErrorResponse = function (error) {
            var response = this.CreateFailResponse();
            response.errorMessage = error;
            return response;
        };
        ApplicationResponse.prototype.CreateResultResponse = function (result) {
            var response = this.CreateSuccessResponse();
            response.data = result;
            return response;
        };
        return ApplicationResponse;
    }());
    exports.ApplicationResponse = ApplicationResponse;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=ApplicationResponse.js.map

/***/ }),

/***/ "./src/app/shared-classes/response/ApplicationResponseStatus.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApplicationResponseStatus = (function () {
        function ApplicationResponseStatus() {
        }
        return ApplicationResponseStatus;
    }());
    ApplicationResponseStatus.Fail = 0;
    ApplicationResponseStatus.Success = 1;
    exports.ApplicationResponseStatus = ApplicationResponseStatus;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=ApplicationResponseStatus.js.map

/***/ }),

/***/ "./src/app/shared-classes/supplies/supplies-model.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SuppliesModel = (function () {
        function SuppliesModel() {
        }
        return SuppliesModel;
    }());
    exports.SuppliesModel = SuppliesModel;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=supplies-model.js.map

/***/ }),

/***/ "./src/app/shared-components/current-event/current-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'active-event'\" *ngIf=\"isStatusValid\"    \r\n    (click)=\"navigate(routes.EVENT_DETAILS, event.eventId)\">\r\n    <div *ngIf=\"event && event.eventId != -1\">\r\n        <div [className]=\"'counter-wrapper'\">\r\n            <span [className]=\"'counter large'\">{{ event.eventNumber | eventLastNumberPipe : 3 }}</span>\r\n            <span [className]=\"'counter small'\">{{ event.eventNumber | eventFirstNumberPipe : 3  }}</span>\r\n        </div>\r\n        <event-dots [dotsCounter]=\"dotsCounter\" [selectedDotsCounter]=\"event.eventLevelId\"></event-dots>\r\n    </div>  \r\n    <div *ngIf=\"event && event.eventId == -1\">\r\n        <span [className]=\"'virtual-event'\">{{ content ? content.virtualEvent : '' }}</span>\r\n    </div>\r\n</div> "

/***/ }),

/***/ "./src/app/shared-components/current-event/current-event.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/event/event-details-types.ts"), __webpack_require__("./src/app/shared-classes/event/event-details-data.ts"), __webpack_require__("./src/app/shared-classes/common/navigation-data.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/shared-classes/common/route-path.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/shared-classes/common/base-component.ts"), __webpack_require__("./src/app/services/event/current-event-details.service.ts"), __webpack_require__("./src/app/shared-classes/event/event-details-status.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, event_details_types_1, event_details_data_1, navigation_data_1, navigation_service_1, route_path_1, content_service_1, base_component_1, current_event_details_service_1, event_details_status_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CurrentEventComponent = (function (_super) {
        __extends(CurrentEventComponent, _super);
        function CurrentEventComponent(navigationService, contentService, currentEventDetailsService) {
            var _this = _super.call(this, contentService, "virtual-event") || this;
            _this.navigationService = navigationService;
            _this.contentService = contentService;
            _this.currentEventDetailsService = currentEventDetailsService;
            _this.dotsCounter = 5;
            _this.isStatusValid = true;
            _this.routes = new route_path_1.RoutePath();
            _this.currentEventDetailsService.getCurrentCarTeam().then(function (result) {
                var carTeam = result.data;
                _this.isStatusValid = carTeam.activeMission.currentMissionStatus.missionStatusId != event_details_status_1.EventDetailsStatus.BackOnStation;
            });
            _this.activeMissionUpdated = _this.currentEventDetailsService.$currentActiveMissionUpdatedEmitter.subscribe(function (mission) {
                _this.isStatusValid = mission.currentMissionStatus.missionStatusId != event_details_status_1.EventDetailsStatus.BackOnStation;
            });
            return _this;
        }
        CurrentEventComponent.prototype.navigate = function (navigationUrl, eventId) {
            var data = new event_details_data_1.EventDetailsData(eventId, event_details_types_1.EventDetailsTypes.CurrentEvent);
            this.navigationService.navigate(new navigation_data_1.NavigationData(navigationUrl, data));
        };
        CurrentEventComponent.prototype.ngOnDestroy = function () {
            this.activeMissionUpdated.unsubscribe();
        };
        return CurrentEventComponent;
    }(base_component_1.BaseComponent));
    CurrentEventComponent = __decorate([
        core_1.Component({
            selector: 'current-event',
            template: __webpack_require__("./src/app/shared-components/current-event/current-event.component.html"),
            inputs: ['event']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _a || Object, typeof (_b = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _b || Object, typeof (_c = typeof current_event_details_service_1.CurrentEventDetailsService !== "undefined" && current_event_details_service_1.CurrentEventDetailsService) === "function" && _c || Object])
    ], CurrentEventComponent);
    exports.CurrentEventComponent = CurrentEventComponent;
    var _a, _b, _c;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=current-event.component.js.map

/***/ }),

/***/ "./src/app/shared-components/designed-select/designed-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"select-div\">\r\n    <label>\r\n        <select [disabled]=\"isDisabled\" [(ngModel)]=\"selectedValue\" (change)=\"onChange($event)\">\r\n            <option *ngFor=\"let data of dataList\" [ngValue]=\"data\">{{ data.text }}</option>                \r\n        </select>\r\n    </label>\r\n</div>"

/***/ }),

/***/ "./src/app/shared-components/designed-select/designed-select.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DesignedSelectComponent = (function () {
        function DesignedSelectComponent() {
            this.onValueChange = new core_1.EventEmitter();
            this.selectedValue = null;
            this.isDisabled = false;
        }
        DesignedSelectComponent.prototype.onChange = function (val) {
            this.onValueChange.emit(this.selectedValue);
        };
        DesignedSelectComponent.prototype.ngOnChanges = function (changes) {
            if (this.dataList && this.dataList.length > 0) {
                if (this.watermark && !this.isValueExists(this.watermark)) {
                    this.dataList.unshift({ value: null, text: this.watermark });
                }
                if (changes.isDisabled || !this.selectedValue) {
                    this.selectedValue = this.dataList[0];
                    this.onValueChange.emit(this.selectedValue);
                }
            }
        };
        DesignedSelectComponent.prototype.isValueExists = function (str) {
            for (var index = 0; index < this.dataList.length; index++) {
                if (this.dataList[index].text == str) {
                    return true;
                }
            }
            return false;
        };
        return DesignedSelectComponent;
    }());
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
    ], DesignedSelectComponent.prototype, "onValueChange", void 0);
    DesignedSelectComponent = __decorate([
        core_1.Component({
            selector: 'designed-select',
            template: __webpack_require__("./src/app/shared-components/designed-select/designed-select.component.html"),
            inputs: ['watermark', 'dataList', 'isDisabled', 'selectedValue']
        }),
        __metadata("design:paramtypes", [])
    ], DesignedSelectComponent);
    exports.DesignedSelectComponent = DesignedSelectComponent;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=designed-select.component.js.map

/***/ }),

/***/ "./src/app/shared-components/detailsbar/detailsbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'details-bar'\">\r\n    <div *ngIf=\"menuType != 3\" [className]=\"'glyphicon glyphicon-align-justify'\" (click)=\"isShowMenu = !isShowMenu\">\r\n        <menu *ngIf=\"isShowMenu\" [menuType]=\"menuType\"></menu>\r\n    </div>\r\n    <div [ngSwitch]=\"detailsbarType\">\r\n        <div *ngSwitchCase=\"0\" [className]=\"'home-details-bar'\">            \r\n            <span [className]=\"'image-sprite logo'\" (click)=\"navigate(routes.LOGS, false)\"></span>\r\n            <span [className]=\"'system-name'\">{{ data ? data.systemName : '' }}</span>\r\n            <span [className]=\"'car-name'\">\r\n                {{ data ? homeService.getDayPart() : '' }}, {{ data ? data.fireTruckInfo.carInfo.carCallCode : '' }}\r\n            </span>\r\n            <!-- <i class=\"glyphicon glyphicon-list-alt logs\" (click)=\"navigate(routes.LOGS, false)\"></i>             -->\r\n            <span [className]=\"'version'\" (click)=\"showDevice()\">{{ data ? data.versionName : '' }}</span>\r\n\r\n        </div>\r\n        <div *ngSwitchCase=\"1\"  [className]=\"'minimize-event-details-bar'\"> \r\n            <span [className]=\"'right-button'\"            \r\n                (click)=\"data.buttonRight.callback()\">\r\n                <span [className]=\"'seperator'\"></span> \r\n                <span [ngClass]=\"data.buttonRight.class\"></span>\r\n            </span>\r\n            <div [className]=\"'event-general-info'\"> \r\n                <event-general-info *ngIf=\"data.eventGeneralInfo\" [eventGeneralInfo]=\"data.eventGeneralInfo\"></event-general-info>           \r\n            </div>\r\n            <span [className]=\"'left-button'\" *ngIf=\"data && data.buttonLeft && data.buttonLeft.callback\" \r\n                (click)=\"data.buttonLeft.callback()\">\r\n                <span [ngClass]=\"data.buttonLeft.class\"></span>\r\n                <span [className]=\"'seperator'\"></span> \r\n            </span>\r\n        </div>\r\n        <div *ngSwitchCase=\"2\" [className]=\"'default-details-bar'\">\r\n            <span [className]=\"'right-button'\" *ngIf=\"data && data.buttonRight\"            \r\n                (click)=\"data.buttonRight.callback()\">\r\n                <span [className]=\"'seperator'\"></span> \r\n                <span [ngClass]=\"data.buttonRight.class\"></span>\r\n            </span>\r\n              \r\n            <span [className]=\"'title-text'\" *ngIf=\"data && data.title\">\r\n                {{ data.title }}\r\n            </span>               \r\n\r\n            <span [className]=\"'left-button'\" *ngIf=\"data && data.buttonLeft && data.buttonLeft.callback\" \r\n                (click)=\"data.buttonLeft.callback()\">\r\n                <span [ngClass]=\"data.buttonLeft.class\"></span>\r\n                <span [className]=\"'seperator'\"></span> \r\n            </span>\r\n            <span [className]=\"'left-button'\" *ngIf=\"data && data.buttonLeft && data.buttonLeft.text\">\r\n                <span [ngClass]=\"data.buttonLeft.class\">{{ data.buttonLeft.text }}</span>\r\n                <span [className]=\"'seperator'\"></span> \r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared-components/detailsbar/detailsbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/common/menu-types.ts"), __webpack_require__("./src/app/shared-classes/common/detailsbar-types.ts"), __webpack_require__("./src/app/services/general/device.service.ts"), __webpack_require__("./src/app/services/general/alertify.service.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/shared-classes/common/navigation-data.ts"), __webpack_require__("./src/app/shared-classes/common/route-path.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, menu_types_1, detailsbar_types_1, device_service_1, alertify_service_1, home_service_1, navigation_service_1, map_state_service_1, navigation_data_1, route_path_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DetailsbarComponent = (function () {
        function DetailsbarComponent(deviceService, alertifyService, homeService, navigationService, mapStateService) {
            this.deviceService = deviceService;
            this.alertifyService = alertifyService;
            this.homeService = homeService;
            this.navigationService = navigationService;
            this.mapStateService = mapStateService;
            this.isShowMenu = false;
            this.routes = new route_path_1.RoutePath();
            this.menuType = menu_types_1.menuTypes.detailsbar;
            this.detailsbarType = detailsbar_types_1.detailsbarTypes.default;
        }
        DetailsbarComponent.prototype.ngOnInit = function () {
        };
        DetailsbarComponent.prototype.ngAfterViewInit = function () {
        };
        // destroy map
        DetailsbarComponent.prototype.ngOnDestroy = function () {
        };
        DetailsbarComponent.prototype.navigate = function (navUrl, isMapVisible) {
            this.navigationService.navigate(new navigation_data_1.NavigationData(navUrl));
            this.mapStateService.changeMapState(isMapVisible);
        };
        DetailsbarComponent.prototype.showDevice = function () {
            this.alertifyService.success(this.deviceService.getDeviceId());
        };
        return DetailsbarComponent;
    }());
    DetailsbarComponent = __decorate([
        core_1.Component({
            selector: 'detailsbar',
            template: __webpack_require__("./src/app/shared-components/detailsbar/detailsbar.component.html"),
            inputs: ['detailsbarType', 'menuType', 'data']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" && _a || Object, typeof (_b = typeof alertify_service_1.AlertifyService !== "undefined" && alertify_service_1.AlertifyService) === "function" && _b || Object, typeof (_c = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _c || Object, typeof (_d = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _d || Object, typeof (_e = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _e || Object])
    ], DetailsbarComponent);
    exports.DetailsbarComponent = DetailsbarComponent;
    var _a, _b, _c, _d, _e;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=detailsbar.component.js.map

/***/ }),

/***/ "./src/app/shared-components/emap/emap.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"{{ mapID }}\" class=\"map-container\" style=\"width:1443px; height:662px;direction:ltr\" [ngStyle]=\"{ 'width': mapWidth, 'height': mapHeight }\" [ngClass]=\"mapClass\"> </div>\r\n\r\n\r\n\r\n<div [className]=\"'map-buttons-wrapper'\" [hidden]=\"isHideButtons\">\r\n    <span [className]=\"'map-button'\"><span class=\"map-icons-sprite\" [ngClass]=\"{'streets-bg': defaultBackground, 'ortho-bg': !defaultBackground}\" (click)=toggleBackgournd();></span></span>            \r\n    <span [className]=\"'map-button'\"><span [className]=\"'event-location map-icons-sprite'\" (click)=\"zoomToEvent()\"></span></span>            \r\n    <span [className]=\"'map-button'\"><span class=\"map-icons-sprite\" [ngClass]=\"{'gps-location': !gpsOn, 'gps-location-on': gpsOn}\" (click)=\"gpsToggle()\"></span></span>       \r\n    <!-- <span [className]=\"'zoom-buttons'\"><span [className]=\"'zoom-in map-icons-sprite'\" (click)=\"emap.zoomIn()\"></span></span>       \r\n    <span [className]=\"'zoom-seperator map-icons-sprite'\"></span>\r\n    <span [className]=\"'zoom-buttons'\"><span [className]=\"'zoom-out map-icons-sprite'\" (click)=\"emap.zoomOut()\"></span></span>        -->\r\n    <!-- <span [className]=\"'zoom-buttons'\"><span [className]=\"'zoom-out map-icons-sprite'\" (click)=\"navigateTo()\"></span></span>       -->\r\n</div>"

/***/ }),

/***/ "./src/app/shared-components/emap/emap.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/esri/custom-map.ts"), __webpack_require__("./src/app/core/emap.service.ts"), __webpack_require__("./src/app/shared-classes/event/event-types.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/shared-classes/esri/Extent.ts"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/services/general/gps.service.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/services/event/current-event-details.service.ts"), __webpack_require__("./src/app/services/event/event-details.service.ts"), __webpack_require__("./src/app/services/general/projection.service.ts"), __webpack_require__("./src/app/services/general/waze.service.ts"), __webpack_require__("./src/app/services/layers/layers.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, custom_map_1, emap_service_1, event_types_1, connection_service_1, Extent_1, map_state_service_1, gps_service_1, navigation_service_1, current_event_details_service_1, event_details_service_1, projection_service_1, waze_service_1, layers_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmapComponent = (function () {
        function EmapComponent(service, connectionService, mapStateService, gpsService, navigationService, currentEventDetailsService, eventDetailsService, projectionService, wazeService, layersService) {
            this.service = service;
            this.connectionService = connectionService;
            this.mapStateService = mapStateService;
            this.gpsService = gpsService;
            this.navigationService = navigationService;
            this.currentEventDetailsService = currentEventDetailsService;
            this.eventDetailsService = eventDetailsService;
            this.projectionService = projectionService;
            this.wazeService = wazeService;
            this.layersService = layersService;
            this.mapWidth = '1443px';
            this.mapHeight = '662px';
            this.defaultBackground = true;
            this.gpsOn = false;
            this.backgroundToggleIndex = 0;
            this.isHideButtons = false;
        }
        EmapComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            //get hardcoded basic map config
            //this.service.getMapConfiguration(this.mapID).then((mapConfiguration: MapConfiguration) => {  
            this.service.getMapServerConfiguration().then(function (mapConfiguration) {
                _this.mapConfiguration = mapConfiguration;
                //creating map
                _this.emap = new custom_map_1.CustomMap(_this.mapID, mapConfiguration, _this.gpsService, _this.layersService);
                _this.emap.addEvent(event_types_1.EventTypes.MAP_LOAD, function () {
                    setTimeout(function () {
                        _this.mapStateService.changeMapState(false);
                        _this.service.addMap(_this.mapID, _this.emap);
                        //get server map configuration layers and place it in ma config
                        _this.layersService.getServerMapLayers(_this.mapID).then(function (response) {
                            if (response.isSuccessWithResult()) {
                                _this.service.getMap(_this.mapID).then(function (map) {
                                    map.setMapLayers(response.data);
                                });
                            }
                        });
                    }, 1000);
                });
                //Setting Background 
                _this.setDefaultBackground();
                _this.connectionService.stateChanged.subscribe(function (ConnectionStateTypes) {
                    return _this.setDefaultBackground();
                });
            });
        };
        EmapComponent.prototype.calculateExtentByCenter = function (p, resolution) {
            var mWidth = (resolution * (parseInt(this.mapWidth) / 2));
            var mHeight = (resolution * (parseInt(this.mapHeight) / 2));
            return new Extent_1.Extent({
                xmin: p.x - mWidth,
                ymin: p.y - mHeight,
                xmax: p.x + mWidth,
                ymax: p.y + mHeight,
                spatialReference: { wkid: 2039 }
            });
        };
        EmapComponent.prototype.zoomToEvent = function () {
            var _this = this;
            var eventData = this.navigationService.getNavigationData();
            if (eventData === null) {
                return;
            }
            if (this.currentEventDetailsService.isCurrentEventById(eventData.eventId)) {
                this.currentEventDetailsService.getItem().then(function (evnetInfo) {
                    _this.zoomToLatLon(evnetInfo.data.generalInfo.lat, evnetInfo.data.generalInfo.lon, _this.emap.getNumberOfLevels() - 1);
                });
            }
            else
                this.eventDetailsService.getItem({ eventId: eventData.eventId }).then(function (evnetInfo) {
                    _this.zoomToLatLon(evnetInfo.data.generalInfo.lat, evnetInfo.data.generalInfo.lon, _this.emap.getNumberOfLevels() - 1);
                });
        };
        EmapComponent.prototype.zoomToLatLon = function (lat, lon, level) {
            this.gpsOn = false;
            this.emap.gpsOff();
            var coords = this.projectionService.transformWGS1984ToITM(lat, lon);
            this.emap.setCenter({ x: coords.x, y: coords.y, level: level });
        };
        EmapComponent.prototype.gpsToggle = function () {
            if (this.gpsOn) {
                this.emap.gpsOff();
            }
            else {
                this.emap.gpsOn();
            }
            this.gpsOn = !this.gpsOn;
        };
        EmapComponent.prototype.toggleBackgournd = function () {
            if (this.connectionService.isOffline()) {
                for (var i = 0; i < this.mapConfiguration.backgrounds.length; i++) {
                    if (this.mapConfiguration.backgrounds[i].offline) {
                        this.emap.addWebTiledLayer(this.mapConfiguration.backgrounds[i]);
                        return;
                    }
                }
            }
            else {
                this.backgroundToggleIndex++;
                if (this.backgroundToggleIndex > this.mapConfiguration.backgroundToggle.length - 1) {
                    this.backgroundToggleIndex = 0;
                }
                this.emap.addWebTiledLayer(this.mapConfiguration.backgrounds[this.backgroundToggleIndex]);
                this.defaultBackground = !this.defaultBackground;
            }
        };
        EmapComponent.prototype.setDefaultBackground = function () {
            if (this.connectionService.isOffline()) {
                for (var i = 0; i < this.mapConfiguration.backgrounds.length; i++) {
                    if (this.mapConfiguration.backgrounds[i].offline) {
                        this.emap.addWebTiledLayer(this.mapConfiguration.backgrounds[i]);
                        return;
                    }
                }
            }
            else {
                for (var i = 0; i < this.mapConfiguration.backgrounds.length; i++) {
                    if (this.mapConfiguration.backgrounds[i].visible && !this.mapConfiguration.backgrounds[i].offline) {
                        this.emap.addWebTiledLayer(this.mapConfiguration.backgrounds[this.backgroundToggleIndex]);
                        return;
                    }
                }
                console.log('No Visible Background Exists!');
            }
        };
        EmapComponent.prototype.navigateTo = function () {
            this.wazeService.navigate(31.92794, 34.78495);
        };
        // destroy map
        EmapComponent.prototype.ngOnDestroy = function () {
            if (this.emap) {
                this.service.removeMap(this.mapID);
                this.emap.destroy();
            }
        };
        return EmapComponent;
    }());
    EmapComponent = __decorate([
        core_1.Component({
            selector: 'emap',
            template: __webpack_require__("./src/app/shared-components/emap/emap.component.html"),
            inputs: ['mapID', 'mapClass', 'mapWidth', 'mapHeight', 'isHideButtons'],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof emap_service_1.EmapService !== "undefined" && emap_service_1.EmapService) === "function" && _a || Object, typeof (_b = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _b || Object, typeof (_c = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _c || Object, typeof (_d = typeof gps_service_1.GPSService !== "undefined" && gps_service_1.GPSService) === "function" && _d || Object, typeof (_e = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _e || Object, typeof (_f = typeof current_event_details_service_1.CurrentEventDetailsService !== "undefined" && current_event_details_service_1.CurrentEventDetailsService) === "function" && _f || Object, typeof (_g = typeof event_details_service_1.EventDetailsService !== "undefined" && event_details_service_1.EventDetailsService) === "function" && _g || Object, typeof (_h = typeof projection_service_1.ProjectionService !== "undefined" && projection_service_1.ProjectionService) === "function" && _h || Object, typeof (_j = typeof waze_service_1.WazeService !== "undefined" && waze_service_1.WazeService) === "function" && _j || Object, typeof (_k = typeof layers_service_1.LayersService !== "undefined" && layers_service_1.LayersService) === "function" && _k || Object])
    ], EmapComponent);
    exports.EmapComponent = EmapComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=emap.component.js.map

/***/ }),

/***/ "./src/app/shared-components/event-general-info/event-dots/event-dots.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'dots-wrapper'\" #dotWrapper></div>"

/***/ }),

/***/ "./src/app/shared-components/event-general-info/event-dots/event-dots.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventDotsComponent = (function () {
        function EventDotsComponent(renderer) {
            this.renderer = renderer;
        }
        EventDotsComponent.prototype.ngOnInit = function () {
            for (var index = 0; index < this.dotsCounter; index++) {
                var span = this.renderer.createElement('span');
                this.renderer.addClass(span, (index < this.selectedDotsCounter && this.selectedDotsCounter <= this.dotsCounter) ? 'dot-selected' : 'dot');
                this.dotWrapper.nativeElement.appendChild(span);
            }
        };
        return EventDotsComponent;
    }());
    __decorate([
        core_1.ViewChild('dotWrapper'),
        __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
    ], EventDotsComponent.prototype, "dotWrapper", void 0);
    EventDotsComponent = __decorate([
        core_1.Component({
            selector: 'event-dots',
            template: __webpack_require__("./src/app/shared-components/event-general-info/event-dots/event-dots.component.html"),
            inputs: ['dotsCounter', 'selectedDotsCounter']
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof core_1.Renderer2 !== "undefined" && core_1.Renderer2) === "function" && _b || Object])
    ], EventDotsComponent);
    exports.EventDotsComponent = EventDotsComponent;
    var _a, _b;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-dots.component.js.map

/***/ }),

/***/ "./src/app/shared-components/event-general-info/event-general-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'event-info'\">    \r\n    <div [className]=\"'first-col'\">\r\n        <event-type-label *ngIf=\"eventGeneralInfo\"\r\n            [eventItemText]=\"eventGeneralInfo.parentEventTypeDesc\" \r\n            [eventItemColor]=\"eventGeneralInfo.parentEventTypeColor\">\r\n        </event-type-label>\r\n        <span *ngIf=\"eventGeneralInfo && eventGeneralInfo.controlTime\" [className]=\"'in-control-wrapper'\">\r\n            <i class=\"fas fa-check fa-2x\"></i>\r\n        </span>\r\n        <div [className]=\"'counter-wrapper'\">\r\n            <span [className]=\"'counter large'\" *ngIf=\"eventGeneralInfo && eventGeneralInfo.eventId != -1\">\r\n                {{ eventGeneralInfo.eventNumber | eventLastNumberPipe : 3 }}\r\n            </span>\r\n            <span [className]=\"'counter small'\" *ngIf=\"eventGeneralInfo && eventGeneralInfo.eventId != -1\">\r\n                {{ eventGeneralInfo.eventNumber | eventFirstNumberPipe : 3 }}\r\n            </span>\r\n        </div>\r\n        <event-dots [dotsCounter]=\"dotsCounter\" *ngIf=\"eventGeneralInfo && eventGeneralInfo.eventId != -1\"\r\n            [selectedDotsCounter]=\"eventGeneralInfo.eventLevelId\">\r\n        </event-dots>\r\n    </div>\r\n    <div [className]=\"'double-seperator'\"></div>\r\n    <div [className]=\"'second-col'\">\r\n        <div [className]=\"'desc'\" *ngIf=\"eventGeneralInfo\">\r\n           {{ eventGeneralInfo.eventDesc != null && eventGeneralInfo.eventDesc != '' ? (eventGeneralInfo.eventTypeDesc + ' - ' + eventGeneralInfo.eventDesc | cutText : 95) : (eventGeneralInfo.eventTypeDesc | cutText : 95) }}\r\n        </div> \r\n        <div [className]=\"'location'\">\r\n            {{ eventGeneralInfo ? eventGeneralInfo.eventLocationDesc : '' }}\r\n        </div> \r\n    </div>\r\n    <div [className]=\"'double-seperator'\"></div>\r\n    <div [className]=\"'third-col'\">\r\n        <div [className]=\"'hours-days'\">\r\n            <span [className]=\"'image-sprite icn-clock'\"  *ngIf=\"eventGeneralInfo && eventGeneralInfo.eventId != -1\"></span>\r\n            <span [className]=\"'hours'\" [ngStyle]=\"{ 'color': isSpecialColor ? 'red' : 'white'}\" \r\n                *ngIf=\"eventGeneralInfo && eventGeneralInfo.eventId != -1\">\r\n                {{ eventGeneralInfo.eventStartDate | dateHours}}\r\n            </span>\r\n            <span [className]=\"'days'\" [ngStyle]=\"{ 'color': isSpecialColor ? 'red' : 'white'}\" \r\n                *ngIf=\"eventGeneralInfo && eventGeneralInfo.eventId != -1\">\r\n                {{ eventStartDate }}\r\n            </span>       \r\n        </div>\r\n        <div [className]=\"'car-status'\">  \r\n            <div [className]=\"'wrapper'\">              \r\n                <span [className]=\"'employee'\" *ngIf=\"eventGeneralInfo && eventGeneralInfo.eventId != -1\">\r\n                    {{ eventGeneralInfo.totalActiveEmployee }}\r\n                </span>\r\n                <span [className]=\"'image-sprite layer-616'\" *ngIf=\"eventGeneralInfo && eventGeneralInfo.eventId != -1\"></span>\r\n            </div>\r\n            <span [className]=\"'seperator'\" *ngIf=\"eventGeneralInfo\"></span>   \r\n            <div [className]=\"'wrapper'\">         \r\n                <span [className]=\"'car'\" *ngIf=\"eventGeneralInfo && eventGeneralInfo.eventId != -1\">\r\n                    {{ eventGeneralInfo.totalActiveCar }}\r\n                </span>\r\n                <span [className]=\"'image-sprite vector-smart-object'\" *ngIf=\"eventGeneralInfo && eventGeneralInfo.eventId != -1\"></span>\r\n            </div>  \r\n         </div>\r\n        <div [className]=\"'tel-number'\">\r\n            <span [className]=\"'image-sprite phone'\" *ngIf=\"eventGeneralInfo && eventGeneralInfo.eventId != -1\"></span>\r\n            <span [className]=\"'tel'\" *ngIf=\"eventGeneralInfo && eventGeneralInfo.eventId != -1\">\r\n                {{ eventGeneralInfo.reporterPhone }}\r\n            </span>\r\n            <span [className]=\"'person'\" *ngIf=\"eventGeneralInfo && eventGeneralInfo.eventId != -1\">\r\n                  {{ eventGeneralInfo.reporterPhone ? (eventGeneralInfo.reporterName | cutText : 10) : (eventGeneralInfo.reporterName | cutText : 25) }}\r\n            </span>\r\n        </div>\r\n    </div>\r\n </div>  "

/***/ }),

/***/ "./src/app/shared-components/event-general-info/event-general-info.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./node_modules/moment/moment.js"), __webpack_require__("./src/app/app.config.ts"), __webpack_require__("./src/app/services/general/date-timer-service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, moment, app_config_1, date_timer_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventGeneralInfoComponent = (function () {
        function EventGeneralInfoComponent(config) {
            this.config = config;
            this.dotsCounter = 5;
        }
        EventGeneralInfoComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.eventGeneralInfo) {
                var diff = this.config.getConfig('bold_event_time');
                var now = moment();
                var startDate = moment(this.eventGeneralInfo.eventStartDate);
                this.isSpecialColor = Math.abs(startDate.diff(now, 'minutes')) <= diff;
                this.dateTimerService = new date_timer_service_1.DateTimerService(this.eventGeneralInfo.eventStartDate);
                this.clearTimer = this.dateTimerService.getBeforeHours().subscribe(function (time) {
                    _this.eventStartDate = time;
                });
            }
        };
        EventGeneralInfoComponent.prototype.ngOnDestroy = function () {
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
        };
        return EventGeneralInfoComponent;
    }());
    EventGeneralInfoComponent = __decorate([
        core_1.Component({
            selector: 'event-general-info',
            template: __webpack_require__("./src/app/shared-components/event-general-info/event-general-info.component.html"),
            inputs: ['eventGeneralInfo', 'eventInfoType']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof app_config_1.AppConfig !== "undefined" && app_config_1.AppConfig) === "function" && _a || Object])
    ], EventGeneralInfoComponent);
    exports.EventGeneralInfoComponent = EventGeneralInfoComponent;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-general-info.component.js.map

/***/ }),

/***/ "./src/app/shared-components/event-general-info/event-number-pipe/event-first-number.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventFirstNumberPipe = (function () {
        function EventFirstNumberPipe() {
        }
        EventFirstNumberPipe.prototype.transform = function (value, lastLettersCounter) {
            var sNumber = value.toString();
            if (sNumber.length < lastLettersCounter) {
                return sNumber;
            }
            return sNumber.substring(0, sNumber.length - lastLettersCounter);
        };
        return EventFirstNumberPipe;
    }());
    EventFirstNumberPipe = __decorate([
        core_1.Pipe({
            name: 'eventFirstNumberPipe'
        })
    ], EventFirstNumberPipe);
    exports.EventFirstNumberPipe = EventFirstNumberPipe;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-first-number.pipe.js.map

/***/ }),

/***/ "./src/app/shared-components/event-general-info/event-number-pipe/event-last-number.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventLastNumberPipe = (function () {
        function EventLastNumberPipe() {
        }
        EventLastNumberPipe.prototype.transform = function (value, lastLettersCounter) {
            var sNumber = value.toString();
            if (sNumber.length < lastLettersCounter) {
                return sNumber;
            }
            return sNumber.substring(sNumber.length - lastLettersCounter, sNumber.length);
        };
        return EventLastNumberPipe;
    }());
    EventLastNumberPipe = __decorate([
        core_1.Pipe({
            name: 'eventLastNumberPipe'
        })
    ], EventLastNumberPipe);
    exports.EventLastNumberPipe = EventLastNumberPipe;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-last-number.pipe.js.map

/***/ }),

/***/ "./src/app/shared-components/event-general-info/event-type-label/event-type-label.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'event-type-label'\" [style.background-color] = \"eventItemColor\">{{ eventItemText }}</div>"

/***/ }),

/***/ "./src/app/shared-components/event-general-info/event-type-label/event-type-label.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventTypeLabelComponent = (function () {
        function EventTypeLabelComponent() {
        }
        return EventTypeLabelComponent;
    }());
    EventTypeLabelComponent = __decorate([
        core_1.Component({
            selector: 'event-type-label',
            template: __webpack_require__("./src/app/shared-components/event-general-info/event-type-label/event-type-label.component.html"),
            inputs: ['eventItemText', 'eventItemColor']
        }),
        __metadata("design:paramtypes", [])
    ], EventTypeLabelComponent);
    exports.EventTypeLabelComponent = EventTypeLabelComponent;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-type-label.component.js.map

/***/ }),

/***/ "./src/app/shared-components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'loader-wrapper'\" *ngIf=\"isShowLoader\">\r\n    <i class=\"fas fa-spinner fa-pulse fa-5x\"></i>\r\n    <span [className]=\"'loading-text'\">{{ loadingText }}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/shared-components/loader/loader.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/core/http.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, http_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoaderComponent = (function () {
        function LoaderComponent(httpService) {
            var _this = this;
            this.isShowLoader = false;
            this.loadingEmitter = httpService.$loadingStateEmitter.subscribe(function (state) {
                _this.isShowLoader = state;
            });
        }
        LoaderComponent.prototype.ngOnInit = function () {
        };
        LoaderComponent.prototype.ngAfterViewInit = function () {
        };
        LoaderComponent.prototype.ngOnDestroy = function () {
            this.loadingEmitter.unsubscribe();
        };
        return LoaderComponent;
    }());
    LoaderComponent = __decorate([
        core_1.Component({
            selector: 'loader',
            template: __webpack_require__("./src/app/shared-components/loader/loader.component.html"),
            inputs: ['loadingText']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof http_service_1.HttpService !== "undefined" && http_service_1.HttpService) === "function" && _a || Object])
    ], LoaderComponent);
    exports.LoaderComponent = LoaderComponent;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "./src/app/shared-components/menu/menu-item/menu-item-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"menu-button\" [disabled]=\"isDisable\" [ngClass]=\"itemClass\" \r\n    (click)=\"itemClicked()\">\r\n    <div [className]=\"'circle'\" *ngIf=\"data != null\"\r\n        [style.background-color] = \"circleColor\">\r\n        <span [className]=\"'events-count'\">{{ data }}</span>\r\n    </div> \r\n    <div [className]=\"'image-wrapper'\">\r\n        <span [ngClass]=\"imageClass\"></span>            \r\n    </div>\r\n    <div [className]=\"'seperator-top'\"></div>\r\n    <div [className]=\"'seperator-bottom'\"></div>\r\n    <div [className]=\"'text-wrapper'\">\r\n        <span>{{ buttonText ? buttonText : '' }}</span>   \r\n    </div>\r\n</button>"

/***/ }),

/***/ "./src/app/shared-components/menu/menu-item/menu-item-button.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MenuItemButtonComponent = (function () {
        function MenuItemButtonComponent() {
            this.onClick = new core_1.EventEmitter();
            this.isDisable = false;
        }
        MenuItemButtonComponent.prototype.itemClicked = function () {
            this.onClick.emit();
        };
        return MenuItemButtonComponent;
    }());
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
    ], MenuItemButtonComponent.prototype, "onClick", void 0);
    MenuItemButtonComponent = __decorate([
        core_1.Component({
            selector: 'menu-item-button',
            template: __webpack_require__("./src/app/shared-components/menu/menu-item/menu-item-button.component.html"),
            inputs: ['itemClass', 'data', 'imageClass', 'buttonText', 'circleColor', "isDisable"]
        }),
        __metadata("design:paramtypes", [])
    ], MenuItemButtonComponent);
    exports.MenuItemButtonComponent = MenuItemButtonComponent;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=menu-item-button.component.js.map

/***/ }),

/***/ "./src/app/shared-components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'menu-container'\" *ngIf=\"menuType != 2\"></div>\r\n<div [className]=\"'menu-container'\" *ngIf=\"menuType == 2\">          \r\n    <menu-item-button\r\n        (onClick)=\"navigate(routes.EVENTS, false)\"\r\n        [data]=\"data\" \r\n        [imageClass]=\"'image-sprite star'\" \r\n        [buttonText]=\"content ? content['star-button'] : ''\"\r\n        [circleColor]=\"data > 0 ? '#ae0d0d' : '#268a0f'\">\r\n    </menu-item-button>    \r\n    <menu-item-button\r\n        (onClick)=\"navigateToEmployees()\"\r\n        [data]=null\r\n        [imageClass]=\"'image-sprite fireman-huge'\" \r\n        [buttonText]=\"content ? content['employee-button'] : ''\">\r\n    </menu-item-button>\r\n    <menu-item-button\r\n        (onClick)=\"navigateToCarCheck()\"\r\n        [data]=null\r\n        [imageClass]=\"'image-sprite tools'\" \r\n        [buttonText]=\"content ? content['options-button'] : ''\">\r\n    </menu-item-button>   \r\n        <menu-item-button\r\n        (onClick)=\"navigateToCarStatus()\"\r\n        [data]=null\r\n        [imageClass]=\"'image-sprite big-car'\" \r\n        [buttonText]=\"content ? content['car-button'] : ''\">\r\n    </menu-item-button>\r\n</div>\r\n<div [className]=\"'menu-container'\" *ngIf=\"menuType == 4\">        \r\n    <menu-item-button\r\n        (onClick)=\"report(9)\"\r\n        [data]=null\r\n        [imageClass]=\"'image-sprite report-icn-against-traffic'\" \r\n        [buttonText]=\"content ? content['against-traffic'] : ''\">\r\n    </menu-item-button>  \r\n    <menu-item-button\r\n        (onClick)=\"report(11)\"\r\n        [data]=null\r\n        [imageClass]=\"'image-sprite report-icn-smoke'\" \r\n        [buttonText]=\"content ? content['smoke'] : ''\">\r\n    </menu-item-button> \r\n    <menu-item-button\r\n        (onClick)=\"report(6)\"\r\n        [data]=null\r\n        [itemClass]=\"'last'\" \r\n        [imageClass]=\"'image-sprite report-icn-red-light'\" \r\n        [buttonText]=\"content ? content['red-light'] : ''\">\r\n    </menu-item-button>        \r\n    <menu-item-button\r\n        (onClick)=\"showPopup()\"\r\n        [data]=\"data\" \r\n        [imageClass]=\"'image-sprite report-icn-broken'\" \r\n        [buttonText]=\"content ? content['broken'] : ''\">\r\n    </menu-item-button> \r\n    <menu-item-button\r\n        (onClick)=\"report(13)\" \r\n        [data]=null\r\n        [imageClass]=\"'image-sprite report-icn-accident'\" \r\n        [buttonText]=\"content ? content['accident'] : ''\">\r\n    </menu-item-button>        \r\n    <menu-item-button\r\n        (onClick)=\"report(5)\"\r\n        [data]=\"data\" \r\n        [itemClass]=\"'last'\"         \r\n        [imageClass]=\"'image-sprite report-icn-loaded'\" \r\n        [buttonText]=\"content ? content['loaded'] : ''\"\r\n        [circleColor]=\"data > 0 ? '#ae0d0d' : '#268a0f'\">\r\n    </menu-item-button>   \r\n</div>\r\n<div [className]=\"'menu-container'\" *ngIf=\"menuType == 5\">      \r\n    <div [className]=\"'buttons-wrapper'\">           \r\n        <div class=\"button\" [ngClass]=\"{ 'clicked' : currentCell == 999 }\" (click)=\"itemClicked(999)\">\r\n            <span>{{ content ? content['car-status'] : '' }}</span>\r\n        </div> \r\n        <div class=\"button\" [ngClass]=\"{ 'clicked' : currentCell == cell.carCellId }\" *ngFor=\"let cell of data.cells\" \r\n        (click)=\"itemClicked(cell.carCellId)\">\r\n            <span>{{ cell.carCellName ? cell.carCellName : '' }}</span>\r\n        </div>\r\n    </div>\r\n</div>  \r\n\r\n<div [className]=\"'overlay'\" *ngIf=\"isNotQualifiedShow\"></div>   \r\n<div [className]=\"'qualified-popup'\" *ngIf=\"isNotQualifiedShow\">\r\n    <detailsbar [menuType]='qualifiedMenuType' \r\n        [detailsbarType]='detailsbarType'\r\n        [data]='navigationData'>\r\n    </detailsbar>\r\n\r\n    <div [className]=\"'wrapper'\">\r\n        <div *ngIf=\"isQualified\" [className]=\"'text-wrapper'\">\r\n                <span [className]=\"'good-text'\">{{ content ? content.good : '' }}</span>\r\n                <span (click)=\"isQualified=false;reasonSelected=''\" [className]=\"'image-sprite popup-icn-toggle-on'\"></span>\r\n            </div>        \r\n        <div *ngIf=\"!isQualified\" [className]=\"'text-wrapper'\">\r\n            <span [className]=\"'good-text'\">{{ content ? content.notGood : '' }}</span>\r\n            <span (click)=\"isQualified=true;reasonSelected=''\" [className]=\"'image-sprite popup-icn-toggle-off'\"></span>\r\n        </div>        \r\n        <div *ngIf=\"!isQualified\">\r\n            <designed-select (onValueChange)=\"valueChanged($event)\" [watermark]=\"content.reason\" [dataList]=\"reasonsList\"></designed-select>\r\n            <div *ngIf=\"!isReasonValid\" [className]=\"'error-wrapper'\">\r\n                <span [className]=\"'error-star'\">*</span>\r\n                <span [className]=\"'notification'\">{{ content ? content.required : '' }}</span>\r\n            </div>\r\n        </div> \r\n    </div> \r\n</div> "

/***/ }),

/***/ "./src/app/shared-components/menu/menu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/shared-classes/common/menu-types.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/connection/connection.service.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/shared-classes/common/navigation-data.ts"), __webpack_require__("./src/app/services/quick-report/quick-report.service.ts"), __webpack_require__("./src/app/shared-classes/quick-report/quick-report-types.ts"), __webpack_require__("./src/app/shared-classes/common/detailsbar-types.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/services/car/car-check-service.ts"), __webpack_require__("./src/app/shared-classes/request/active-car-check.request.ts"), __webpack_require__("./src/app/shared-classes/car/car-check-data.ts"), __webpack_require__("./src/app/shared-classes/common/drop-down-data.ts"), __webpack_require__("./src/app/shared-classes/common/route-path.ts"), __webpack_require__("./src/app/services/event/current-event-details.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, menu_types_1, content_service_1, connection_service_1, navigation_service_1, map_state_service_1, navigation_data_1, quick_report_service_1, quick_report_types_1, detailsbar_types_1, home_service_1, car_check_service_1, active_car_check_request_1, car_check_data_1, drop_down_data_1, route_path_1, current_event_details_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MenuComponent = (function () {
        function MenuComponent(contentService, connectionService, navigationService, mapStateService, quickReportService, homeService, carCheckService, currentEventDetailsService) {
            var _this = this;
            this.contentService = contentService;
            this.connectionService = connectionService;
            this.navigationService = navigationService;
            this.mapStateService = mapStateService;
            this.quickReportService = quickReportService;
            this.homeService = homeService;
            this.carCheckService = carCheckService;
            this.currentEventDetailsService = currentEventDetailsService;
            this.onItemClicked = new core_1.EventEmitter();
            this.isOffline = false;
            this.isNotQualifiedShow = false;
            this.isQualified = false;
            this.reasonSelected = new drop_down_data_1.DropDownData();
            this.detailsbarType = detailsbar_types_1.detailsbarTypes.default;
            this.qualifiedMenuType = menu_types_1.menuTypes.nomenu;
            this.isReasonValid = true;
            this.routes = new route_path_1.RoutePath();
            this.contentService.load().then(function () {
                _this.content = _this.contentService.getContent('menu-home');
                _this.navigationData = _this.setMappingNavigationData();
            });
            this.connectionService.stateChanged.subscribe(function (state) {
                _this.isOffline = _this.connectionService.isOffline();
            });
        }
        MenuComponent.prototype.navigate = function (navUrl, isMapVisible) {
            this.navigationService.navigate(new navigation_data_1.NavigationData(navUrl));
            this.mapStateService.changeMapState(isMapVisible);
        };
        MenuComponent.prototype.navigateToEmployees = function () {
            var _this = this;
            this.currentEventDetailsService.getItem().then(function (res) {
                _this.navigationService.navigate(new navigation_data_1.NavigationData(_this.routes.EMPLOYEES_TEAM, { isBack: !res.isSuccessWithResult() }));
                _this.mapStateService.changeMapState(false);
            });
        };
        MenuComponent.prototype.valueChanged = function (value) {
            this.reasonSelected = value;
        };
        MenuComponent.prototype.navigateToCarCheck = function () {
            var _this = this;
            this.homeService.getCar().then(function (response) {
                _this.carCheckService.getActiveCarCheck(new active_car_check_request_1.ActiveCarCheckRequest(response.data.carId)).then(function (res) {
                    if (res.isSuccessWithResult()) {
                        _this.navigationService.navigate(new navigation_data_1.NavigationData(_this.routes.CAR_CHECK, res.data));
                    }
                    else {
                        _this.navigationService.navigate(new navigation_data_1.NavigationData(_this.routes.CAR_CHECK_START, new car_check_data_1.CarCheckData(response.data.carCallCode)));
                    }
                    _this.mapStateService.changeMapState(false);
                });
            });
        };
        MenuComponent.prototype.navigateToCarStatus = function () {
            var _this = this;
            this.homeService.getCar().then(function (response) {
                _this.navigationService.navigate(new navigation_data_1.NavigationData(_this.routes.CAR_STATUS, { carName: response.data.carCallCode }));
            });
        };
        MenuComponent.prototype.itemClicked = function (cellId) {
            this.onItemClicked.emit(cellId);
        };
        MenuComponent.prototype.showPopup = function () {
            var _this = this;
            this.isNotQualifiedShow = true;
            this.quickReportService.getNotQualifedReasons().then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.reasonsList = response.data;
                }
            });
        };
        MenuComponent.prototype.report = function (reportType) {
            var data = this.navigationService.getNavigationData();
            this.quickReportService.sendQuickReport(data.eventId, reportType);
            this.navigationService.goBack();
        };
        MenuComponent.prototype.sendQualifiedReport = function () {
            this.isReasonValid = this.isQualified || (!this.isQualified && this.reasonSelected && this.reasonSelected.value != undefined);
            if (this.isReasonValid) {
                var data = this.navigationService.getNavigationData();
                this.quickReportService.sendQuickReport(data.eventId, this.isQualified ? quick_report_types_1.QuickReportTypes.CarActive : quick_report_types_1.QuickReportTypes.Broken, this.reasonSelected.text);
                this.navigationService.goBack();
            }
        };
        MenuComponent.prototype.setMappingNavigationData = function () {
            var _this = this;
            return {
                buttonRight: {
                    callback: function () {
                        _this.isNotQualifiedShow = false;
                    },
                    class: "image-sprite tab-icn-x"
                },
                buttonLeft: {
                    callback: function () {
                        _this.sendQualifiedReport();
                    },
                    class: "image-sprite tab-icn-ok"
                },
                title: this.content.qualifiedTitle
            };
        };
        return MenuComponent;
    }());
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
    ], MenuComponent.prototype, "onItemClicked", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            template: __webpack_require__("./src/app/shared-components/menu/menu.component.html"),
            inputs: ['menuType', 'data', 'currentCell']
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _b || Object, typeof (_c = typeof connection_service_1.ConnectionService !== "undefined" && connection_service_1.ConnectionService) === "function" && _c || Object, typeof (_d = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _d || Object, typeof (_e = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _e || Object, typeof (_f = typeof quick_report_service_1.QuickReportService !== "undefined" && quick_report_service_1.QuickReportService) === "function" && _f || Object, typeof (_g = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _g || Object, typeof (_h = typeof car_check_service_1.CarCheckService !== "undefined" && car_check_service_1.CarCheckService) === "function" && _h || Object, typeof (_j = typeof current_event_details_service_1.CurrentEventDetailsService !== "undefined" && current_event_details_service_1.CurrentEventDetailsService) === "function" && _j || Object])
    ], MenuComponent);
    exports.MenuComponent = MenuComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "./src/app/shared-components/server-autocomplete/server-autocomplete.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sac-wrapper\" [ngClass]=\"customClass\">\r\n    <input [className]=\"'search-input'\" \r\n        placeholder=\"{{ placeholder ? placeholder : '' }}\"       \r\n        (focus)=\"isResultShow = true\"\r\n        [disabled]=\"isDisabled\"\r\n        [ngModel]=\"selectedItem[searchcolumn] | formattedCutText : 50 : 25 : 20\"\r\n        (ngModelChange)=\"selectedItem[searchcolumn]=$event\"\r\n        (input)=\"search(selectedItem[searchcolumn])\" />\r\n    \r\n    <div [className]=\"'search-results'\" *ngIf=\"selectedItem && selectedItem[searchcolumn] && selectedItem[searchcolumn].length > 0 && isResultShow\">\r\n        <div *ngIf=\"data && data.length > 0\">\r\n            <div [className]=\"'search-row'\" *ngFor=\"let item of data\" (click)=\"ItemSelected(item)\">{{ item[searchcolumn] }}</div>\r\n        </div>\r\n        <div *ngIf=\"data == null || data.length == 0\" [className]=\"'no-results'\">{{ noDataText }}</div>\r\n    </div>\r\n</div> "

/***/ }),

/***/ "./src/app/shared-components/server-autocomplete/server-autocomplete.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ServerAutocomplete = (function () {
        function ServerAutocomplete() {
            this.onValueSelected = new core_1.EventEmitter();
            this.placeholder = 'הזן ערך';
            this.selectedItem = {};
            this.noDataText = 'אין נתונים';
            this.isResultShow = false;
            this.isDisabled = false;
        }
        ServerAutocomplete.prototype.ngAfterViewInit = function () {
        };
        ServerAutocomplete.prototype.ItemSelected = function (val) {
            this.selectedItem = val;
            this.isResultShow = false;
            this.onValueSelected.emit(val);
        };
        return ServerAutocomplete;
    }());
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
    ], ServerAutocomplete.prototype, "onValueSelected", void 0);
    ServerAutocomplete = __decorate([
        core_1.Component({
            selector: 'sac',
            template: __webpack_require__("./src/app/shared-components/server-autocomplete/server-autocomplete.component.html"),
            inputs: ['customClass', 'placeholder', 'search', 'data', 'noDataText', 'searchcolumn', 'isDisabled', 'selectedItem']
        }),
        __metadata("design:paramtypes", [])
    ], ServerAutocomplete);
    exports.ServerAutocomplete = ServerAutocomplete;
    var _a;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=server-autocomplete.component.js.map

/***/ }),

/***/ "./src/app/stores/maps/MapsStorage.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./src/app/services/base/DictionaryStorage.ts"), __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, DictionaryStorage_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MapsStorage = (function (_super) {
        __extends(MapsStorage, _super);
        function MapsStorage() {
            return _super.call(this) || this;
        }
        return MapsStorage;
    }(DictionaryStorage_1.DictionaryStorage));
    MapsStorage = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MapsStorage);
    exports.MapsStorage = MapsStorage;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=MapsStorage.js.map

/***/ }),

/***/ "./src/app/stores/offlineStorage/OfflineStorage.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OfflineStorage = (function () {
        function OfflineStorage() {
        }
        ;
        OfflineStorage.prototype.setItem = function (key, data) {
            if (key === undefined || data === undefined) {
                return;
            }
            localStorage.setItem(key, data);
        };
        OfflineStorage.prototype.getItem = function (key) {
            if (key === undefined || localStorage.length == 0) {
                return null;
            }
            return localStorage.getItem(key);
        };
        OfflineStorage.prototype.isItemExists = function (key) {
            if (key === undefined || localStorage.length == 0) {
                return false;
            }
            var item = localStorage.getItem(key);
            return item != undefined && item != null;
        };
        OfflineStorage.prototype.removeItem = function (key) {
            if (key === undefined || localStorage.length == 0 || !this.isItemExists(key)) {
                return;
            }
            localStorage.removeItem(key);
        };
        return OfflineStorage;
    }());
    OfflineStorage = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], OfflineStorage);
    exports.OfflineStorage = OfflineStorage;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=OfflineStorage.js.map

/***/ }),

/***/ "./src/app/supplies/supplies.component.html":
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'supplies-wrapper'\">\r\n    <span [className]=\"'image-sprite supplies-background'\"></span>\r\n    <div [className]=\"'supplies-data-wrapper'\">\r\n        <div [className]=\"'supplies-row'\">\r\n            <div [className]=\"'supplies-cell'\">\r\n                <div [className]=\"'label-text'\">{{ content ? content.pump: '' }}</div>\r\n                <div [className]=\"'input-wrapper'\">\r\n                    <input [value]=\"suppliesModel.pumpMinute\" (input)=\"suppliesModel.pumpMinute = $event.target.value\" type=\"number\">\r\n                    <span [className]=\"'type'\">\r\n                        <span>{{ content ? content.minutes : '' }}</span>\r\n                    </span>\r\n                </div>\r\n                <div *ngIf=\"!isPumpValid\">\r\n                    <span [className]=\"'notification'\">{{ content ? content.mustDigit : '' }}</span>\r\n                </div>\r\n            </div>\r\n            <div [className]=\"'supplies-cell'\">\r\n                <div [className]=\"'label-text'\">{{ content ? content.water: '' }}</div>\r\n                <div [className]=\"'input-wrapper'\">\r\n                    <input [value]=\"suppliesModel.water\" (input)=\"suppliesModel.water = $event.target.value\" type=\"number\">\r\n                    <span [className]=\"'type'\">\r\n                        <span>{{ content ? content.mk : '' }}</span>\r\n                    </span>\r\n                </div>\r\n                <div *ngIf=\"!isWaterValid\">\r\n                    <span [className]=\"'notification'\">{{ content ? content.mustNumber : '' }}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div [className]=\"'supplies-row'\">\r\n            <div [className]=\"'supplies-cell'\">\r\n                <div [className]=\"'label-text'\">{{ content ? content.pouder: '' }}</div>\r\n                <div [className]=\"'input-wrapper'\">\r\n                    <input [value]=\"suppliesModel.powder\" (input)=\"suppliesModel.powder = $event.target.value\" type=\"number\">\r\n                    <span [className]=\"'type'\">\r\n                        <span>{{ content ? content.kilo : '' }}</span>\r\n                    </span>\r\n                </div>\r\n                <div *ngIf=\"!isPouderValid\">\r\n                    <span [className]=\"'notification'\">{{ content ? content.mustNumber : '' }}</span>\r\n                </div>\r\n            </div>\r\n            <div [className]=\"'supplies-cell'\">\r\n                <div [className]=\"'label-text'\">{{ content ? content.foam: '' }}</div>\r\n                <div [className]=\"'input-wrapper'\">\r\n                    <input [value]=\"suppliesModel.foam\" (input)=\"suppliesModel.foam = $event.target.value\" type=\"number\">\r\n                    <span [className]=\"'type'\">\r\n                        <span>{{ content ? content.liter : '' }}</span>\r\n                    </span>\r\n                </div>\r\n                <div *ngIf=\"!isFoamValid\">\r\n                    <span [className]=\"'notification'\">{{ content ? content.mustNumber : '' }}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"isQualified\">\r\n            <span [className]=\"'good-text'\">{{ content ? content.good : '' }}</span>\r\n            <span (click)=\"qualifiedStateChanged(false)\" [className]=\"'image-sprite popup-icn-toggle-on'\"></span>\r\n        </div>        \r\n        <div *ngIf=\"!isQualified\">\r\n            <span [className]=\"'good-text'\">{{ content ? content.notGood : '' }}</span>\r\n            <span (click)=\"qualifiedStateChanged(true)\" [className]=\"'image-sprite popup-icn-toggle-off'\"></span>\r\n        </div>        \r\n        <div>\r\n            <designed-select \r\n                [hidden]=\"isQualified\" \r\n                (onValueChange)=\"valueChanged($event)\" \r\n                [watermark]=\"content.reason\" \r\n                [dataList]=\"reasonsList\">\r\n            </designed-select>\r\n            <div *ngIf=\"!isReasonValid\" [className]=\"'error-wrapper'\">\r\n                <span [className]=\"'error-star'\">*</span>\r\n                <span [className]=\"'notification'\">{{ content ? content.required : '' }}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/supplies/supplies.component.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./src/app/services/mapState/map-state.service.ts"), __webpack_require__("./src/app/services/general/content.service.ts"), __webpack_require__("./src/app/services/navigation/mapping-navigation-data.service.ts"), __webpack_require__("./src/app/shared-classes/request/save.supplies.request.ts"), __webpack_require__("./src/app/services/general/device.service.ts"), __webpack_require__("./src/app/services/supplies/supplies.service.ts"), __webpack_require__("./src/app/services/quick-report/quick-report.service.ts"), __webpack_require__("./src/app/services/home/home.service.ts"), __webpack_require__("./src/app/services/navigation/navigation.service.ts"), __webpack_require__("./src/app/shared-classes/quick-report/quick-report-types.ts"), __webpack_require__("./src/app/shared-classes/request/supplies.request.ts"), __webpack_require__("./src/app/services/event/current-event-details.service.ts"), __webpack_require__("./src/app/shared-classes/supplies/supplies-model.ts"), __webpack_require__("./src/app/shared-classes/common/base-component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, map_state_service_1, content_service_1, mapping_navigation_data_service_1, save_supplies_request_1, device_service_1, supplies_service_1, quick_report_service_1, home_service_1, navigation_service_1, quick_report_types_1, supplies_request_1, current_event_details_service_1, supplies_model_1, base_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SuppliesComponent = (function (_super) {
        __extends(SuppliesComponent, _super);
        function SuppliesComponent(mapStateService, contentService, mappingNavigationDataService, deviceService, suppliesService, quickReportService, homeService, navigationService, currentEventDetailsService) {
            var _this = _super.call(this, contentService, 'supplies') || this;
            _this.navigationService = navigationService;
            _this.currentEventDetailsService = currentEventDetailsService;
            _this.isPumpValid = true;
            _this.isWaterValid = true;
            _this.isPouderValid = true;
            _this.isFoamValid = true;
            _this.isQualified = true;
            _this.isReasonValid = true;
            _this.suppliesModel = new supplies_model_1.SuppliesModel();
            mapStateService.changeMapState(false);
            quickReportService.getNotQualifedReasons().then(function (response) {
                if (response.isSuccessWithResult()) {
                    _this.reasonsList = response.data;
                }
            });
            currentEventDetailsService.getCurrentCarTeam().then(function (response) {
                if (response.isSuccessWithResult()) {
                    suppliesService.getSupplies(new supplies_request_1.SuppliesRequest(response.data.carInfo.carId, response.data.activeMission.missionId)).then(function (res) {
                        if (res.isSuccessWithResult()) {
                            _this.suppliesModel = res.data;
                        }
                    });
                }
            });
            _this.suppliesSaveEmitter = mappingNavigationDataService.$suppliesSaveEmitter.subscribe(function (result) {
                var navigationData = navigationService.getNavigationData();
                if (_this.isDataValid()) {
                    currentEventDetailsService.getCurrentCarTeam().then(function (response) {
                        var request = new save_supplies_request_1.SaveSuppliesRequest();
                        request.carId = response.data.carInfo.carId;
                        request.MissionEquipmentData = _this.suppliesModel;
                        suppliesService.saveSupplies(request).then(function (res) {
                            if (navigationData.onSaveCallback) {
                                navigationData.onSaveCallback();
                            }
                        });
                    });
                    quickReportService.sendQuickReport(navigationData.eventId, _this.isQualified ? quick_report_types_1.QuickReportTypes.CarActive : quick_report_types_1.QuickReportTypes.Broken, _this.reasonSelected ? _this.reasonSelected.text : null);
                }
            });
            _this.suppliesCloseEmitter = mappingNavigationDataService.$suppliesCloseEmitter.subscribe(function (result) {
                var navigationData = navigationService.getNavigationData();
                if (navigationData.onCloseCallback) {
                    navigationData.onCloseCallback();
                }
            });
            return _this;
        }
        SuppliesComponent.prototype.ngOnDestroy = function () {
            this.suppliesSaveEmitter.unsubscribe();
            this.suppliesCloseEmitter.unsubscribe();
        };
        SuppliesComponent.prototype.valueChanged = function (value) {
            this.reasonSelected = value;
            this.isPumpValid = this.isWaterValid = this.isPouderValid = this.isFoamValid = this.isReasonValid = true;
        };
        SuppliesComponent.prototype.isDataValid = function () {
            this.isPumpValid = this.isWaterValid = this.isPouderValid = this.isFoamValid = this.isReasonValid = true;
            this.isPumpValid = !this.suppliesModel.pumpMinute || this.suppliesModel.pumpMinute.toString().trim() == '' || /^[+]?([0-9])*$/.test(this.suppliesModel.pumpMinute.toString().trim());
            this.isWaterValid = !this.suppliesModel.water || this.suppliesModel.water.toString().trim() == '' || /^[+]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(this.suppliesModel.water.toString().trim());
            this.isPouderValid = !this.suppliesModel.powder || this.suppliesModel.powder.toString().trim() == '' || /^[+]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(this.suppliesModel.powder.toString().trim());
            this.isFoamValid = !this.suppliesModel.foam || this.suppliesModel.foam.toString().trim() == '' || /^[+]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(this.suppliesModel.foam.toString().trim());
            this.isReasonValid = this.isQualified || (!this.isQualified && this.reasonSelected != null && this.reasonSelected.value != undefined);
            return this.isPumpValid && this.isWaterValid && this.isPouderValid && this.isFoamValid && this.isReasonValid;
        };
        SuppliesComponent.prototype.qualifiedStateChanged = function (state) {
            this.isQualified = state;
            this.isPumpValid = this.isWaterValid = this.isPouderValid = this.isFoamValid = this.isReasonValid = true;
        };
        return SuppliesComponent;
    }(base_component_1.BaseComponent));
    SuppliesComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/supplies/supplies.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof map_state_service_1.MapStateService !== "undefined" && map_state_service_1.MapStateService) === "function" && _a || Object, typeof (_b = typeof content_service_1.ContentService !== "undefined" && content_service_1.ContentService) === "function" && _b || Object, typeof (_c = typeof mapping_navigation_data_service_1.MappingNavigationDataService !== "undefined" && mapping_navigation_data_service_1.MappingNavigationDataService) === "function" && _c || Object, typeof (_d = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" && _d || Object, typeof (_e = typeof supplies_service_1.SuppliesService !== "undefined" && supplies_service_1.SuppliesService) === "function" && _e || Object, typeof (_f = typeof quick_report_service_1.QuickReportService !== "undefined" && quick_report_service_1.QuickReportService) === "function" && _f || Object, typeof (_g = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _g || Object, typeof (_h = typeof navigation_service_1.NavigationService !== "undefined" && navigation_service_1.NavigationService) === "function" && _h || Object, typeof (_j = typeof current_event_details_service_1.CurrentEventDetailsService !== "undefined" && current_event_details_service_1.CurrentEventDetailsService) === "function" && _j || Object])
    ], SuppliesComponent);
    exports.SuppliesComponent = SuppliesComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=supplies.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.environment = {
        production: false
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js"), __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js"), __webpack_require__("./src/app/app.module.ts"), __webpack_require__("./src/environments/environment.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, platform_browser_dynamic_1, app_module_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (environment_1.environment.production) {
        core_1.enableProdMode();
    }
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "dojo/string":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dojo_string__;

/***/ }),

/***/ "esri/Color":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Color__;

/***/ }),

/***/ "esri/SpatialReference":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_SpatialReference__;

/***/ }),

/***/ "esri/config":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_config__;

/***/ }),

/***/ "esri/geometry/Circle":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Circle__;

/***/ }),

/***/ "esri/geometry/Extent":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__;

/***/ }),

/***/ "esri/geometry/Point":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__;

/***/ }),

/***/ "esri/graphic":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_graphic__;

/***/ }),

/***/ "esri/layers/ArcGISDynamicMapServiceLayer":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_ArcGISDynamicMapServiceLayer__;

/***/ }),

/***/ "esri/layers/GraphicsLayer":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__;

/***/ }),

/***/ "esri/layers/ImageParameters":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_ImageParameters__;

/***/ }),

/***/ "esri/layers/TileInfo":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_TileInfo__;

/***/ }),

/***/ "esri/layers/WebTiledLayer":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_WebTiledLayer__;

/***/ }),

/***/ "esri/map":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_map__;

/***/ }),

/***/ "esri/symbols/PictureMarkerSymbol":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_symbols_PictureMarkerSymbol__;

/***/ }),

/***/ "esri/symbols/SimpleFillSymbol":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleFillSymbol__;

/***/ }),

/***/ "esri/symbols/SimpleLineSymbol":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleLineSymbol__;

/***/ }),

/***/ "esri/symbols/SimpleMarkerSymbol":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleMarkerSymbol__;

/***/ }),

/***/ "esri/symbols/jsonUtils":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_symbols_jsonUtils__;

/***/ }),

/***/ "esri/urlUtils":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_esri_urlUtils__;

/***/ })

},[0])});;
//# sourceMappingURL=main.bundle.js.map