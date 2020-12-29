(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foPermohonan"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/data.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/permohonan/data.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
        data: [],
        size: 10,
        page: 1,
        list: 0,
        end: 10
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
    },
    tabledata: function tabledata() {
      var result = this.table.data;
      if (!this.table.search) return result.slice(this.table.list, this.table.end);
      var filterValue = this.table.search.toLowerCase();

      var filter = function filter(event) {
        return event.perusahaan.npwp.toLowerCase().includes(filterValue) || event.perusahaan.fullname.toLowerCase().includes(filterValue) || event.izin.nama_izin.toLowerCase().includes(filterValue);
      };

      return result.filter(filter);
    }
  },
  methods: {
    handleSizeChange: function handleSizeChange(val) {
      console.log("".concat(val, " items per page"));
    },
    handleCurrentChange: function handleCurrentChange(val) {
      var start = Math.max(0, val - 1);
      var end = this.table.size;
      var newstart = Math.max(0, start * end);
      var newend = val * end;
      this.table.list = newstart;
      this.table.end = newend;
      console.log("current page: ".concat(val));
    },
    getIzin: function getIzin() {
      var _this = this;

      this.page.isLoading = true;
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/perizinan/permohonan", {
        type: "data",
        status: "fo"
      }).then(function (r) {
        _this.table.data = r.data;
        console.log(r.data);
      });
    }
  },
  components: {
    skeleton: _js_components_dashboard_pemohon_skeleton__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/detail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/permohonan/detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/url */ "./resources/js/url.js");
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
      pratinjau: {
        preview: false,
        objectURL: null,
        title: null,
        persyaratan: {},
        indexOnarray: null
      },
      pratinjauCatatanShow: false,
      permohonan_id: this.$route.params.id,
      permohonan: {
        izin: {},
        opd: {},
        perusahaan: {},
        persyaratan: [],
        pemohon: {}
      },
      track: {},
      options: [{
        label: "Terima Berkas",
        options: [{
          kategori: "terima",
          value: "terima",
          label: "Sesuai Persyaratan"
        }]
      }, {
        label: "Penolakan Berkas",
        options: [{
          kategori: "tolak",
          value: "tidak sesuai judul persyaratan",
          label: "Berkas Tidak Sesuai Judul Persyaratan"
        }, {
          kategori: "tolak",
          value: "Berkas Buram",
          label: "Berkas Tidak Jelas / dibaca"
        }, {
          kategori: "tolak",
          value: "Masa Berlaku Berkas Sudah Kadarluarsa",
          label: "Masa aktif Berkas Kadarluarsa"
        }, {
          kategori: "tolak",
          value: "penolakan dengan catatan",
          label: "Lainnya"
        }]
      }]
    };
  },
  mounted: function mounted() {
    this.$parent.justcollpasedmenu();
    this.permohonan_id = this.$route.params.id;
  },
  created: function created() {
    this.getPermohonan();
  },
  computed: {
    user: function user() {
      return this.$store.state.StoreUser.user;
    },
    VerifikasiPermohonan: function VerifikasiPermohonan() {
      var terisi = 0;
      var total = 0;
      this.permohonan.persyaratan.forEach(function (car) {
        if (car.status == "terima") {
          terisi = terisi + 1;
        }

        total = total + 1;
      });

      if (terisi == total) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    OpenPratinjau: function OpenPratinjau(i) {
      this.pratinjau.preview = true;
      this.pratinjau.indexOnarray = i;
      this.pratinjau.title = this.permohonan.persyaratan[i].persyaratan;
      this.pratinjau.persyaratan = this.permohonan.persyaratan[i];
      this.pratinjau.objectURL = _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].assets + "/" + this.permohonan.perusahaan.npwp + "/" + this.permohonan.permohonan_code + "/persyaratan/" + this.permohonan.persyaratan[i].file;
    },
    handleDrawer: function handleDrawer(done) {
      if (this.pratinjau.persyaratan.catatan == null) {
        this.$alert("Silahkan Pilih Status Berkas", {
          confirmButtonText: "OK"
        });
      } else {
        done();
      }
    },
    toStatusPersyaratan: function toStatusPersyaratan(index, catatan) {
      if (this.pratinjau.persyaratan.catatan == "FO - penolakan dengan catatan") {
        this.pratinjauCatatanShow = true;
      } else {
        this.pratinjauCatatanShow = false;
        var andi = this.StatusBerkasVerifikasi(this.pratinjau.persyaratan.catatan);
        this.permohonan.persyaratan[index].status = andi;
        this.permohonan.persyaratan[index].catatan = this.pratinjau.persyaratan.catatan;
      }
    },
    StatusBerkasVerifikasi: function StatusBerkasVerifikasi(filter) {
      var filter = filter;
      var status = null;
      this.options.forEach(function (car) {
        car.options.forEach(function (a) {
          if (a.value == filter) {
            status = a.kategori;
          } else {
            status == a.kategori;
          }
        });
      });
      return status;
    },
    getPermohonan: function getPermohonan() {
      var _this = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/perizinan/permohonan", {
        type: "dataById",
        id: this.permohonan_id
      }).then(function (r) {
        return _this.permohonan = r.data;
      });
    },
    verifikasiBerkas: function verifikasiBerkas(kategori) {
      var _this2 = this;

      this.$confirm("Verifikasi Permohonan ?", "Warning", {
        inputType: "select",
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "info"
      }).then(function () {
        _this2.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/perizinan/permohonan", {
          type: "VerifikasiFO",
          permohonan_id: _this2.permohonan.permohonan_id,
          kategori: kategori,
          data: _this2.permohonan.persyaratan,
          perusahaan_id: _this2.permohonan.perusahaan_id
        }).then(function (r) {
          return _this2.$notify({
            title: "Success",
            message: "File Berhasil Di kirim",
            type: "success"
          });
        }, _this2.$router.push({
          name: "fo-dashboard"
        }));
      })["catch"](function () {
        _this2.$message({
          type: "info",
          message: "Verifikasi di tunda sementara"
        });
      });
    }
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
exports.push([module.i, "\n.wd-20 {\n  width: 40px;\n}\n.wd-40 {\n  width: 80px;\n}\n.wd-100px {\n  width: 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/detail.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/permohonan/detail.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.verifikasiTolak {\n    border: 1px solid#cf4436;\n\n    color: white;\n    background-color: #e74c3c;\n}\n.verifikasiTerima {\n    border: 1px solid#16a085;\n    color: white;\n    background-color: #16a085;\n}\n.overlay-popup {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 999 !important;\n    top: 0;\n    left: 0;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.9);\n    overflow-x: hidden;\n    transition: 0.5s;\n}\n.overlay-popup-content {\n    position: relative;\n    top: 15%;\n    width: 100%;\n    text-align: center;\n    margin-top: 5px;\n    padding: 10px 50px 10px 50px;\n}\n.overlay-popup a {\n    padding: 8px;\n    text-decoration: none;\n    font-size: 36px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n.overlay-popup a:hover,\n.overlay-popup a:focus {\n    color: #f1f1f1;\n}\n.overlay-popup .closebtn {\n    position: absolute;\n    top: 20px;\n    right: 45px;\n    font-size: 60px;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/detail.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/permohonan/detail.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/detail.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/data.vue?vue&type=template&id=5a653169&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/permohonan/data.vue?vue&type=template&id=5a653169& ***!
  \******************************************************************************************************************************************************************************************************************/
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
                      _vm._v("DATA PERMOHONAN")
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
                                  placeholder: "Cari Nama Perusahaan ",
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
                          attrs: { data: _vm.tabledata }
                        },
                        [
                          _c("el-table-column", {
                            attrs: { type: "index", label: "No", width: "50" }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: {
                              prop: "permohonan_code",
                              label: "Kode Permohonan"
                            }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: {
                              prop: "perusahaan.fullname",
                              label: "Nama Perusahaan"
                            }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: {
                              prop: "izin.nama_izin",
                              label: "Nama Izin"
                            }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: {
                              prop: "lastjam",
                              label: "Tanggal pengjaun"
                            }
                          })
                        ],
                        1
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
                                  "current-page": _vm.table.page,
                                  "page-size": _vm.table.size,
                                  layout: "total, prev, pager, next",
                                  total: _vm.table.data.length
                                },
                                on: {
                                  "size-change": _vm.handleSizeChange,
                                  "current-change": _vm.handleCurrentChange,
                                  "update:currentPage": function($event) {
                                    return _vm.$set(_vm.table, "page", $event)
                                  },
                                  "update:current-page": function($event) {
                                    return _vm.$set(_vm.table, "page", $event)
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
            ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/detail.vue?vue&type=template&id=0af140d0&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/permohonan/detail.vue?vue&type=template&id=0af140d0& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "br-subleft" },
        [
          !_vm.VerifikasiPermohonan
            ? _c(
                "el-card",
                { staticClass: "verifikasiTolak" },
                [
                  _vm._v(
                    "\n            DATA PERMOHONAN BELUM DI VERIFIKASI    \n            "
                  ),
                  _c(
                    "el-button",
                    {
                      attrs: { size: "mini" },
                      on: {
                        click: function($event) {
                          return _vm.verifikasiBerkas("tolak")
                        }
                      }
                    },
                    [_vm._v("Tolak")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.VerifikasiPermohonan
            ? _c(
                "el-card",
                { staticClass: "verifikasiTerima" },
                [
                  _vm._v(
                    "\n            DATA PERMOHONAN BELUM DI VERIFIKASI    \n            "
                  ),
                  _c(
                    "el-button",
                    {
                      attrs: { size: "mini" },
                      on: {
                        click: function($event) {
                          return _vm.verifikasiBerkas("terima")
                        }
                      }
                    },
                    [_vm._v("Terima")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "h6",
            {
              staticClass:
                "tx-uppercase tx-15 mg-t-40 pd-x-10 bd-b pd-b-10 tx-roboto tx-white-7"
            },
            [_vm._v("\n            DATA PERUSAHAAN\n        ")]
          ),
          _vm._v(" "),
          _c("nav", { staticClass: "nav br-nav-mailbox flex-column" }, [
            _c(
              "span",
              {
                staticClass: "nav-link mg-b-0 tx-bold",
                staticStyle: { "margin-bottom": "-10px" }
              },
              [_vm._v("NPWP")]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "nav-link mg-b-0" }, [
              _vm._v(_vm._s(_vm.permohonan.perusahaan.npwp))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "nav-link mg-b-0 tx-bold" }, [
              _vm._v("Nama")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "nav-link mg-b-10" }, [
              _vm._v(_vm._s(_vm.permohonan.perusahaan.fullname))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "nav-link mg-b-2 tx-bold" }, [
              _vm._v("Alamat")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "nav-link mg-b-15" }, [
              _vm._v(_vm._s(_vm.permohonan.perusahaan.alamat))
            ]),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "nav-link mg-b-0 tx-bold",
                staticStyle: { "margin-bottom": "-10px" }
              },
              [_vm._v("HP")]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "nav-link mg-b-5" }, [
              _vm._v(_vm._s(_vm.permohonan.perusahaan.contact))
            ]),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "nav-link mg-b-0 tx-bold",
                staticStyle: { "margin-bottom": "-10px" }
              },
              [_vm._v("Email")]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "nav-link mg-b-10" }, [
              _vm._v(_vm._s(_vm.permohonan.perusahaan.email))
            ])
          ]),
          _vm._v(" "),
          _c(
            "h6",
            {
              staticClass:
                "tx-uppercase tx-15 mg-t-40 pd-x-10 bd-b pd-b-10 tx-roboto tx-white-7"
            },
            [_vm._v("\n            NARAHUBUNG\n        ")]
          ),
          _vm._v(" "),
          _c("nav", { staticClass: "nav br-nav-mailbox flex-column" }, [
            _c(
              "span",
              {
                staticClass: "nav-link mg-b-0 tx-bold",
                staticStyle: { "margin-bottom": "-10px" }
              },
              [_vm._v("Nama")]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "nav-link mg-b-5" }, [
              _vm._v(_vm._s(_vm.permohonan.pemohon.nama))
            ]),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "nav-link mg-b-0 tx-bold",
                staticStyle: { "margin-bottom": "-10px" }
              },
              [_vm._v("HP")]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "nav-link mg-b-5" }, [
              _vm._v(_vm._s(_vm.permohonan.pemohon.contact))
            ]),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "nav-link mg-b-0 tx-bold",
                staticStyle: { "margin-bottom": "-10px" }
              },
              [_vm._v("Email")]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "nav-link mg-b-10" }, [
              _vm._v(_vm._s(_vm.permohonan.pemohon.email))
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "br-contentpanel" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "pd-x-20 pd-sm-x-30 pd-t-20 pd-sm-t-30" },
          [
            _c("h4", { staticClass: "tx-gray-800 mg-b-5" }, [
              _vm._v(_vm._s(_vm.permohonan.izin.nama_izin))
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mg-b-20" }, [
              _vm._v("Sektor " + _vm._s(_vm.permohonan.opd.opd) + ".")
            ]),
            _vm._v(" "),
            _c("el-button", { attrs: { type: "primary", size: "medium" } }, [
              _vm._v("Cetak Checklist Serah Terima")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "br-pagebody" },
          [
            _c(
              "el-row",
              [
                _c(
                  "el-col",
                  { attrs: { md: 24 } },
                  [
                    _c("el-card", [
                      _c(
                        "table",
                        {
                          staticClass:
                            "table table-valign-middle mg-b-0 table-hover"
                        },
                        [
                          _c("thead", [
                            _c("tr", [
                              _c("th", [_vm._v("NO")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("PERSYARATAN")]),
                              _vm._v(" "),
                              _c("th"),
                              _vm._v(" "),
                              _c("th")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.permohonan.persyaratan, function(
                              i,
                              Index
                            ) {
                              return _c("tr", { key: Index }, [
                                _c(
                                  "td",
                                  {
                                    staticClass: "pd-l-0-force tx-center",
                                    attrs: { width: "30" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "tx-13 tx-bold mg-b-0" },
                                      [_vm._v(_vm._s(Index + 1))]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("td", { staticClass: "pd-l-0-force" }, [
                                  _c(
                                    "div",
                                    { staticClass: "tx-13 tx-bold mg-b-0" },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(i.persyaratan) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "pd-l-0-force" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "tx-13 tx-bold mg-b-0" },
                                      [_vm._v(_vm._s(i.catatan))]
                                    ),
                                    _vm._v(" "),
                                    _c("ion-icon", {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: i.status == "terima",
                                          expression: "i.status == 'terima'"
                                        }
                                      ],
                                      staticClass: "tx-20 tx-bold tx-success",
                                      attrs: {
                                        name: "checkmark-done-circle-outline"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("ion-icon", {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: i.status == "tolak",
                                          expression: "i.status == 'tolak'"
                                        }
                                      ],
                                      staticClass: "tx-20 tx-bold tx-danger",
                                      attrs: { name: "close-circle-outline" }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "pd-r-0-force tx-center" },
                                  [
                                    _c(
                                      "el-button",
                                      {
                                        attrs: {
                                          type: "primary",
                                          size: "mini"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.OpenPratinjau(Index)
                                          }
                                        }
                                      },
                                      [
                                        _c("ion-icon", {
                                          staticClass: "tx-12",
                                          attrs: { name: "newspaper-outline" }
                                        }),
                                        _vm._v(
                                          "   Pratinjau\n                                        "
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            }),
                            0
                          )
                        ]
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: _vm.pratinjau.title,
            visible: _vm.pratinjau.preview,
            "with-header": true,
            size: "80%",
            "before-close": _vm.handleDrawer,
            direction: "btt"
          },
          on: {
            "update:visible": function($event) {
              return _vm.$set(_vm.pratinjau, "preview", $event)
            }
          }
        },
        [
          _c("template", { slot: "title" }, [
            _c("div", [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex align-items-center justify-content-between mg-b-30"
                },
                [
                  _c(
                    "div",
                    [
                      _vm.pratinjau.persyaratan
                        ? _c(
                            "el-select",
                            {
                              attrs: { placeholder: "Select" },
                              on: {
                                change: function($event) {
                                  return _vm.toStatusPersyaratan(
                                    _vm.pratinjau.indexOnarray,
                                    _vm.pratinjau.persyaratan
                                  )
                                }
                              },
                              model: {
                                value: _vm.pratinjau.persyaratan.catatan,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.pratinjau.persyaratan,
                                    "catatan",
                                    $$v
                                  )
                                },
                                expression: "pratinjau.persyaratan.catatan"
                              }
                            },
                            _vm._l(_vm.options, function(group) {
                              return _c(
                                "el-option-group",
                                {
                                  key: group.label,
                                  attrs: { label: group.label }
                                },
                                _vm._l(group.options, function(item) {
                                  return _c("el-option", {
                                    key: item.value,
                                    attrs: {
                                      label: item.label,
                                      value: item.value
                                    }
                                  })
                                }),
                                1
                              )
                            }),
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pratinjauCatatanShow
                        ? _c("el-input", {
                            staticClass: "mg-b-10",
                            attrs: {
                              type: "textarea",
                              rows: 10,
                              placeholder: "Ketik Persyaratan Penolakan"
                            },
                            model: {
                              value: _vm.pratinjau.persyaratan.catatan,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.pratinjau.persyaratan,
                                  "catatan",
                                  $$v
                                )
                              },
                              expression: "pratinjau.persyaratan.catatan"
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "wd-130" }, [
                    _c(
                      "h6",
                      {
                        staticClass:
                          "tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1"
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.pratinjau.title) +
                            "\n                        "
                        )
                      ]
                    )
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _vm.pratinjau.objectURL
            ? _c("iframe", {
                attrs: {
                  src: _vm.pratinjau.objectURL,
                  width: "100%",
                  height: "100%"
                }
              })
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "br-pageheader pd-y-15 pd-md-l-20" }, [
      _c("nav", { staticClass: "breadcrumb pd-0 mg-0 tx-12 tx-warning" }, [
        _c("span", { staticClass: "breadcrumb-item", attrs: { href: "#" } }, [
          _c("span", { staticClass: "tx-primary tx-bold" }, [
            _vm._v("FRONT OFFICE PENERIMAAN KELENGKAPAN BERKAS")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/components/permohonan/data.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/permohonan/data.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_vue_vue_type_template_id_5a653169___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.vue?vue&type=template&id=5a653169& */ "./resources/js/components/permohonan/data.vue?vue&type=template&id=5a653169&");
/* harmony import */ var _data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.vue?vue&type=script&lang=js& */ "./resources/js/components/permohonan/data.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _data_vue_vue_type_template_id_5a653169___WEBPACK_IMPORTED_MODULE_0__["render"],
  _data_vue_vue_type_template_id_5a653169___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/permohonan/data.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/permohonan/data.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/permohonan/data.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./data.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/data.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/permohonan/data.vue?vue&type=template&id=5a653169&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/permohonan/data.vue?vue&type=template&id=5a653169& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_data_vue_vue_type_template_id_5a653169___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./data.vue?vue&type=template&id=5a653169& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/data.vue?vue&type=template&id=5a653169&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_data_vue_vue_type_template_id_5a653169___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_data_vue_vue_type_template_id_5a653169___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/permohonan/detail.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/permohonan/detail.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_0af140d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=0af140d0& */ "./resources/js/components/permohonan/detail.vue?vue&type=template&id=0af140d0&");
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ "./resources/js/components/permohonan/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/permohonan/detail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_0af140d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_0af140d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/permohonan/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/permohonan/detail.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/permohonan/detail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/permohonan/detail.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/permohonan/detail.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/detail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/permohonan/detail.vue?vue&type=template&id=0af140d0&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/permohonan/detail.vue?vue&type=template&id=0af140d0& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_0af140d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=0af140d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/detail.vue?vue&type=template&id=0af140d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_0af140d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_0af140d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);