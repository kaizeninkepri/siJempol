(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/fo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/fo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/url */ "./resources/js/url.js");
/* harmony import */ var vue_responsive_video_background_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-responsive-video-background-player */ "./node_modules/vue-responsive-video-background-player/dist/index.common.js");
/* harmony import */ var vue_responsive_video_background_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_responsive_video_background_player__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      page: {
        isLoading: true
      },
      url: {
        assets: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/images"
      },
      permohonan: {
        data: [],
        size: 10,
        page: 1,
        list: 0,
        end: 10
      }
    };
  },
  mounted: function mounted() {
    this.$parent.justExpand();
  },
  created: function created() {
    this.getpermohonan();
  },
  computed: {
    permohonanonline: function permohonanonline() {
      var total = 0;
      this.permohonan.data.forEach(function (e) {
        if (e.create_on == "online") {
          total = total + 1;
        }
      });
      return total;
    },
    permohonanonlineizin: function permohonanonlineizin() {
      var total = 0;
      this.permohonan.data.forEach(function (e) {
        if (e.create_on == "online" && e.izin.kategori == "perizinan") {
          total = total + 1;
        }
      });
      return total;
    },
    permohonanonlinenonizin: function permohonanonlinenonizin() {
      var total = 0;
      this.permohonan.data.forEach(function (e) {
        if (e.create_on == "online" && e.izin.kategori == "nonperizinan") {
          total = total + 1;
        }
      });
      return total;
    },
    walkin: function walkin() {
      var total = 0;
      this.permohonan.data.forEach(function (e) {
        if (e.create_on == "walkin") {
          total = total + 1;
        }
      });
      return total;
    },
    tolak: function tolak() {
      var total = 0;
      this.permohonan.data.forEach(function (e) {
        if (e.create_on == "tolak") {
          total = total + 1;
        }
      });
      return total;
    }
  },
  methods: {
    handleSizeChange: function handleSizeChange(val) {
      console.log("".concat(val, " items per page"));
    },
    handleCurrentChange: function handleCurrentChange(val) {
      var start = Math.max(0, val - 1);
      var end = this.permohonan.size;
      var newstart = Math.max(0, start * end);
      var newend = val * end;
      this.permohonan.list = newstart;
      this.permohonan.end = newend;
      console.log("current page: ".concat(val));
    },
    getpermohonan: function getpermohonan() {
      var _this = this;

      this.page.isLoading = true;
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/perizinan/permohonan", {
        type: "data",
        status: "proses"
      }).then(function (r) {
        return _this.permohonan.data = r.data, _this.page.isLoading = false;
      });
    }
  },
  components: {
    "video-background": vue_responsive_video_background_player__WEBPACK_IMPORTED_MODULE_1___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/url */ "./resources/js/url.js");
/* harmony import */ var vue_content_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-content-loading */ "./node_modules/vue-content-loading/dist/vuecontentloading.js");
/* harmony import */ var vue_content_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_content_loading__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueContentLoading: vue_content_loading__WEBPACK_IMPORTED_MODULE_1___default.a,
    VclFacebook: vue_content_loading__WEBPACK_IMPORTED_MODULE_1__["VclFacebook"],
    VclTable: vue_content_loading__WEBPACK_IMPORTED_MODULE_1__["VclTable"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layanan/daftarIzin.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layanan/daftarIzin.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/url */ "./resources/js/url.js");
/* harmony import */ var _js_components_dashboard_pemohon_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/dashboard/pemohon_skeleton */ "./resources/js/components/dashboard/pemohon_skeleton.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      page: {
        isLoading: true
      },
      table: {
        search: null,
        data: [{
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }, {
          date: "2016-05-02",
          name: "ran",
          address: "No. 189, Grove St, Los Angeles"
        }, {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }, {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }]
      }
    };
  },
  mounted: function mounted() {
    this.page.isLoading = false;
  },
  created: function created() {
    this.getIzin();
  },
  computed: {
    user: function user() {
      return this.$store.state.StoreUser.user;
    }
  },
  methods: {
    getIzin: function getIzin() {
      this.page.isLoading = true;
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/master/opd", {
        type: "namaIzin"
      }).then(function (r) {
        consoloe.log(r.data);
      });
    }
  },
  components: {
    skeleton: _js_components_dashboard_pemohon_skeleton__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.wd-20 {\r\n  width: 40px;\n}\n.wd-40 {\r\n  width: 80px;\n}\n.wd-100px {\r\n  width: 100px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./pemohon_skeleton.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/fo.vue?vue&type=template&id=380657ef&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/fo.vue?vue&type=template&id=380657ef& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mg-t-120" }, [
    _c(
      "div",
      { staticClass: "br-pagebody" },
      [
        _c(
          "el-row",
          { staticClass: "pd-5", attrs: { gutter: 10 } },
          [
            _c(
              "el-col",
              { staticClass: "mg-b-20", attrs: { md: 24 } },
              [
                _c(
                  "el-row",
                  { attrs: { gutter: 10 } },
                  [
                    _c(
                      "el-col",
                      { attrs: { md: 6 } },
                      [
                        _c(
                          "el-card",
                          {
                            directives: [
                              {
                                name: "loading",
                                rawName: "v-loading",
                                value: _vm.page.isLoading,
                                expression: "page.isLoading"
                              }
                            ]
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "pd-5 d-flex align-items-center" },
                              [
                                _c("ion-icon", {
                                  staticClass: "tx-50 tx-primary",
                                  attrs: { name: "mail-unread-outline" }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "mg-l-20" }, [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                                    },
                                    [_vm._v("Izin")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "tx-24 tx-lato tx-bold mg-b-2 lh-1"
                                    },
                                    [_vm._v(_vm._s(_vm.permohonanonlineizin))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "tx-11 tx-roboto tx-primary"
                                    },
                                    [_vm._v("Permohonan Online")]
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { md: 6 } },
                      [
                        _c(
                          "el-card",
                          {
                            directives: [
                              {
                                name: "loading",
                                rawName: "v-loading",
                                value: _vm.page.isLoading,
                                expression: "page.isLoading"
                              }
                            ]
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "pd-5 d-flex align-items-center" },
                              [
                                _c("ion-icon", {
                                  staticClass: "tx-50 tx-warning",
                                  attrs: { name: "mail-unread-outline" }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "mg-l-20" }, [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                                    },
                                    [_vm._v("Non izin")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "tx-24 tx-lato tx-bold mg-b-2 lh-1"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.permohonanonlinenonizin)
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "tx-11 tx-roboto tx-warning"
                                    },
                                    [_vm._v("Permohonan Onnline")]
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { md: 6 } },
                      [
                        _c(
                          "el-card",
                          {
                            directives: [
                              {
                                name: "loading",
                                rawName: "v-loading",
                                value: _vm.page.isLoading,
                                expression: "page.isLoading"
                              }
                            ]
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "pd-5 d-flex align-items-center" },
                              [
                                _c("ion-icon", {
                                  staticClass: "tx-50 tx-danger",
                                  attrs: { name: "copy-outline" }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "mg-l-20" }, [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                                    },
                                    [_vm._v("PENOLAKAN")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "tx-24 tx-lato tx-bold mg-b-2 lh-1"
                                    },
                                    [_vm._v("tolak")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "tx-11 tx-roboto tx-danger"
                                    },
                                    [_vm._v("Administrasi / Kajian Teknis")]
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { md: 6 } },
                      [
                        _c(
                          "el-card",
                          {
                            directives: [
                              {
                                name: "loading",
                                rawName: "v-loading",
                                value: _vm.page.isLoading,
                                expression: "page.isLoading"
                              }
                            ]
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "pd-5 d-flex align-items-center" },
                              [
                                _c("ion-icon", {
                                  staticClass: "tx-50 tx-success",
                                  attrs: { name: "newspaper-outline" }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "mg-l-20" }, [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                                    },
                                    [_vm._v("SURAT KEPUTUSAN")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "tx-24 tx-lato tx-bold mg-b-2 lh-1"
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "tx-11 tx-roboto tx-success"
                                    },
                                    [_vm._v("SK / Izin Terbit")]
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  { staticClass: "mg-t-10" },
                  [
                    _c(
                      "el-card",
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex align-items-center justify-content-between mg-b-30"
                          },
                          [
                            _c("div", [
                              _c(
                                "h6",
                                {
                                  staticClass:
                                    "tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1"
                                },
                                [_vm._v("PERMOHONAN IZIN / NON IZIN")]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "mg-b-0" }, [
                                _vm._v("Online / Walkin")
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "wd-230" },
                              [
                                _c("el-input", {
                                  attrs: {
                                    placeholder: "Cari Data Permohonan ...",
                                    "prefix-icon": "el-icon-search"
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-valign-middle mg-b-0 table-hover"
                          },
                          [
                            _c(
                              "tbody",
                              _vm._l(
                                _vm.permohonan.data.slice(
                                  _vm.permohonan.list,
                                  _vm.permohonan.end
                                ),
                                function(i, Index) {
                                  return _c("tr", { key: Index }, [
                                    _c("td", { staticClass: "pd-l-0-force" }, [
                                      _c(
                                        "div",
                                        { staticClass: "tx-13 tx-bold mg-b-0" },
                                        [_vm._v(_vm._s(i.perusahaan.fullname))]
                                      ),
                                      _vm._v(" "),
                                      i.perusahaan.kategori != "perorangan"
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "tx-12 tx-roboto mg-b-1 tx-primary"
                                            },
                                            [_vm._v(_vm._s(i.pemohon.nama))]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        { staticClass: "tx-12 tx-roboto" },
                                        [
                                          _vm._v(
                                            _vm._s(i.pemohon.contact) +
                                              " / " +
                                              _vm._s(i.pemohon.email)
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "pd-l-0-force" }, [
                                      _c("div", [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "tx-13 tx-bold mg-b-0 tx-teal"
                                          },
                                          [_vm._v(_vm._s(i.izin.nama_izin))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "tx-12 tx-roboto mg-b-0"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(i.opd.opd) +
                                                " / " +
                                                _vm._s(i.izin.kategori)
                                            )
                                          ]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "pd-l-0-force" }, [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "tx-12 tx-roboto mg-b-0"
                                        },
                                        [_vm._v(_vm._s(i.lastjam))]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "pd-l-0-force" }, [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-oblong btn-sm",
                                          class: i.createonkategori,
                                          attrs: { type: "button" }
                                        },
                                        [_vm._v(_vm._s(i.create_on))]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      { staticClass: "pd-r-0-force tx-center" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: {
                                                name: "fo-permohonan-detail",
                                                params: { id: i.permohonan_id }
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "icon ion-more tx-18 lh-0"
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                }
                              ),
                              0
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "el-row",
                          { attrs: { justify: "end", type: "flex" } },
                          [
                            _c(
                              "el-col",
                              { attrs: { md: 10 } },
                              [
                                _c("el-pagination", {
                                  staticStyle: { float: "right" },
                                  attrs: {
                                    background: "",
                                    "current-page": _vm.permohonan.page,
                                    "page-size": _vm.permohonan.size,
                                    "page-count": _vm.permohonan.pagecount,
                                    layout: "total, prev, pager, next",
                                    total: _vm.permohonan.data.length
                                  },
                                  on: {
                                    "size-change": _vm.handleSizeChange,
                                    "current-change": _vm.handleCurrentChange,
                                    "update:currentPage": function($event) {
                                      return _vm.$set(
                                        _vm.permohonan,
                                        "page",
                                        $event
                                      )
                                    },
                                    "update:current-page": function($event) {
                                      return _vm.$set(
                                        _vm.permohonan,
                                        "page",
                                        $event
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=template&id=4d711642&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=template&id=4d711642& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "br-pagebody" },
      [
        _c(
          "el-row",
          { attrs: { gutter: 10 } },
          [
            _c(
              "el-col",
              { attrs: { md: 18 } },
              [
                _c("vue-content-loading", { attrs: { height: 40 } }, [
                  _c("rect", {
                    attrs: { rx: "4", ry: "4", width: "400", height: "30" }
                  })
                ]),
                _vm._v(" "),
                _c("vcl-table")
              ],
              1
            ),
            _vm._v(" "),
            _c("el-col", { attrs: { md: 6 } })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "br-msg-header d-flex justify-content-between" },
      [_c("div", { staticClass: "pd-x-0 pd-t-30" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layanan/daftarIzin.vue?vue&type=template&id=0991ddae&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layanan/daftarIzin.vue?vue&type=template&id=0991ddae& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("transition", { attrs: { mode: "out-in", name: "fade" } }, [
        _vm.page.isLoading
          ? _c("div", { key: "info" }, [_c("skeleton")], 1)
          : _c("div", { key: "warning" }, [
              _c(
                "div",
                { staticClass: "br-msg-header d-flex justify-content-between" },
                [
                  _c("div", { staticClass: "pd-x-0 pd-t-30" }, [
                    _c("h4", { staticClass: "tx-gray-800 mg-b-5" }, [
                      _vm._v("DAFTAR LAYANAN PERIZINAN & NON PERIZINAN")
                    ]),
                    _vm._v(" "),
                    _vm.user.role
                      ? _c("p", { staticClass: "mg-b-0" }, [
                          _vm._v(_vm._s(_vm.user.role.role))
                        ])
                      : _vm._e()
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "br-pagebody" },
                [
                  _c(
                    "el-card",
                    { staticClass: "mg-b-20" },
                    [
                      _c(
                        "el-row",
                        { attrs: { gutter: 10 } },
                        [
                          _c(
                            "el-col",
                            { attrs: { md: 8 } },
                            [
                              _c("el-input", {
                                attrs: {
                                  placeholder: "Cari Nama Izin / Sektor ",
                                  "prefix-icon": "el-icon-search"
                                },
                                model: {
                                  value: _vm.table.search,
                                  callback: function($$v) {
                                    _vm.$set(_vm.table, "search", $$v)
                                  },
                                  expression: "table.search"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-card",
                    [
                      _c(
                        "el-table",
                        {
                          staticStyle: { width: "100%" },
                          attrs: {
                            data: _vm.table.data.filter(function(data) {
                              return (
                                !_vm.table.search ||
                                data.name
                                  .toLowerCase()
                                  .includes(_vm.table.search.toLowerCase())
                              )
                            })
                          }
                        },
                        [
                          _c("el-table-column", {
                            attrs: { type: "index", label: "No", width: "50" }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: { prop: "name", label: "Nama Izin" }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: { prop: "address", label: "Jumlah Izin" }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: { prop: "address", label: "Sektor" }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: { prop: "address", label: "Aksi" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/fo.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/dashboard/fo.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fo_vue_vue_type_template_id_380657ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fo.vue?vue&type=template&id=380657ef& */ "./resources/js/components/dashboard/fo.vue?vue&type=template&id=380657ef&");
/* harmony import */ var _fo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fo.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/fo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _fo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fo_vue_vue_type_template_id_380657ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fo_vue_vue_type_template_id_380657ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/fo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/fo.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/dashboard/fo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./fo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/fo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/fo.vue?vue&type=template&id=380657ef&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/dashboard/fo.vue?vue&type=template&id=380657ef& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fo_vue_vue_type_template_id_380657ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./fo.vue?vue&type=template&id=380657ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/fo.vue?vue&type=template&id=380657ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fo_vue_vue_type_template_id_380657ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fo_vue_vue_type_template_id_380657ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/pemohon_skeleton.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/dashboard/pemohon_skeleton.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pemohon_skeleton_vue_vue_type_template_id_4d711642___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pemohon_skeleton.vue?vue&type=template&id=4d711642& */ "./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=template&id=4d711642&");
/* harmony import */ var _pemohon_skeleton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pemohon_skeleton.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pemohon_skeleton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pemohon_skeleton.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pemohon_skeleton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pemohon_skeleton_vue_vue_type_template_id_4d711642___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pemohon_skeleton_vue_vue_type_template_id_4d711642___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/pemohon_skeleton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pemohon_skeleton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./pemohon_skeleton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pemohon_skeleton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pemohon_skeleton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./pemohon_skeleton.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pemohon_skeleton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pemohon_skeleton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pemohon_skeleton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pemohon_skeleton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pemohon_skeleton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=template&id=4d711642&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=template&id=4d711642& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pemohon_skeleton_vue_vue_type_template_id_4d711642___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./pemohon_skeleton.vue?vue&type=template&id=4d711642& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/pemohon_skeleton.vue?vue&type=template&id=4d711642&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pemohon_skeleton_vue_vue_type_template_id_4d711642___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pemohon_skeleton_vue_vue_type_template_id_4d711642___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layanan/daftarIzin.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/layanan/daftarIzin.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _daftarIzin_vue_vue_type_template_id_0991ddae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daftarIzin.vue?vue&type=template&id=0991ddae& */ "./resources/js/components/layanan/daftarIzin.vue?vue&type=template&id=0991ddae&");
/* harmony import */ var _daftarIzin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./daftarIzin.vue?vue&type=script&lang=js& */ "./resources/js/components/layanan/daftarIzin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _daftarIzin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _daftarIzin_vue_vue_type_template_id_0991ddae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _daftarIzin_vue_vue_type_template_id_0991ddae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layanan/daftarIzin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layanan/daftarIzin.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/layanan/daftarIzin.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_daftarIzin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./daftarIzin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layanan/daftarIzin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_daftarIzin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layanan/daftarIzin.vue?vue&type=template&id=0991ddae&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/layanan/daftarIzin.vue?vue&type=template&id=0991ddae& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_daftarIzin_vue_vue_type_template_id_0991ddae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./daftarIzin.vue?vue&type=template&id=0991ddae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layanan/daftarIzin.vue?vue&type=template&id=0991ddae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_daftarIzin_vue_vue_type_template_id_0991ddae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_daftarIzin_vue_vue_type_template_id_0991ddae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);