(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BODashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/permohonan.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/permohonan.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _js_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/url */ "./resources/js/url.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  mounted: function mounted() {
    // Overwriting base render method with actual data.
    this.getChart();
  },
  data: function data() {
    return {
      chart: {
        label: [],
        data: []
      },
      myStyles: {
        height: '50px',
        position: 'relative'
      }
    };
  },
  methods: {
    getChart: function getChart() {
      var _this = this;

      this.axios.get(_js_url__WEBPACK_IMPORTED_MODULE_1__["default"].web + "/grafik/permohonan", {
        type: "data",
        status: "proses"
      }).then(function (r) {
        _this.chart.label = r.data[0], _this.chart.data = r.data[1];

        _this.ShowChart();
      });
    },
    ShowChart: function ShowChart() {
      this.renderChart({
        labels: this.chart.label,
        datasets: [{
          label: 'Permohonan Perizinan',
          data: this.chart.data,
          borderColor: "#FC2525",
          borderWidth: 1,
          backgroundColor: '#f87979',
          pointBorderColor: "white",
          pointBackgroundColor: "#455cc7"
        }]
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/url */ "./resources/js/url.js");
/* harmony import */ var _js_components_permohonan_popUpdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/permohonan/popUpdata */ "./resources/js/components/permohonan/popUpdata.vue");
/* harmony import */ var _js_components_surat_modalSurat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/surat/modalSurat */ "./resources/js/components/surat/modalSurat.vue");
/* harmony import */ var _js_components_chart_permohonan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/components/chart/permohonan */ "./resources/js/components/chart/permohonan.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // s

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BarcodeData: _js_components_permohonan_popUpdata__WEBPACK_IMPORTED_MODULE_1__["default"],
    suratTelaah: _js_components_surat_modalSurat__WEBPACK_IMPORTED_MODULE_2__["default"],
    ChartPermohonan: _js_components_chart_permohonan__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      activeName: "first",
      barcode: {
        title: "Cetak Barcode SK"
      },
      keabsahan: {
        data: [],
        size: 5,
        page: 1,
        list: 0,
        end: 5,
        search: null
      },
      telaah: {
        title: null,
        data: [],
        size: 5,
        page: 1,
        list: 0,
        end: 5,
        search: null
      },
      frontoffice: [],
      options: {
        perPage: 2,
        gap: '0.5rem'
      }
    };
  },
  computed: {
    telaahTerkirim: function telaahTerkirim() {
      var total = 0;
      this.telaah.data.forEach(function (e) {
        if (e.suratpermintaan.length >= 1) {
          total = total + 1;
        }
      });
      return total;
    },
    telaahPending: function telaahPending() {
      var total = 0;
      this.telaah.data.forEach(function (e) {
        if (e.suratpermintaan.length <= 0) {
          total = total + 1;
        }
      });
      return total;
    },
    IzinKeabsahan: function IzinKeabsahan() {
      var result = this.keabsahan.data;
      if (!this.keabsahan.search) return result;
      var filterValue = this.keabsahan.search.toLowerCase();

      var filter = function filter(event) {
        return event.perusahaan.fullname.toLowerCase().includes(filterValue) || event.permohonan_code.toLowerCase().includes(filterValue) || event.opd.opd.toLowerCase().includes(filterValue) || event.izin.nama_izin.toLowerCase().includes(filterValue) || event.pemohon.nama.toLowerCase().includes(filterValue);
      };

      return result.filter(filter);
    },
    IzinPermintaanTelaah: function IzinPermintaanTelaah() {
      var result = this.telaah.data;
      if (!this.telaah.search) return result;
      var filterValue = this.telaah.search.toLowerCase();

      var filter = function filter(event) {
        return event.perusahaan.fullname.toLowerCase().includes(filterValue) || event.permohonan_code.toLowerCase().includes(filterValue) || event.opd.opd.toLowerCase().includes(filterValue) || event.izin.nama_izin.toLowerCase().includes(filterValue) || event.pemohon.nama.toLowerCase().includes(filterValue);
      };

      return result.filter(filter);
    }
  },
  created: function created() {
    this.getValidasi();
    this.getTelaah();
    this.getFrontOffice();
  },
  mounted: function mounted() {
    this.$parent.justcollpasedmenu();
  },
  methods: {
    SuratTelaahOnClick: function SuratTelaahOnClick(a, kategori) {
      this.telaah.title = a;
      this.$refs.suratTelaah.onPopUp(kategori);
    },
    handleSizeChange: function handleSizeChange(val) {
      console.log("".concat(val, " items per page"));
    },
    handleCurrentChange: function handleCurrentChange(val) {
      var start = Math.max(0, val - 1);
      var end = this.keabsahan.size;
      var newstart = Math.max(0, start * end);
      var newend = val * end;
      this.keabsahan.list = newstart;
      this.keabsahan.end = newend;
      console.log("current page: ".concat(val));
    },
    handleSizeChangetelaah: function handleSizeChangetelaah(val) {
      console.log("".concat(val, " items per page"));
    },
    handleCurrentChangetelaah: function handleCurrentChangetelaah(val) {
      var start = Math.max(0, val - 1);
      var end = this.telaah.size;
      var newstart = Math.max(0, start * end);
      var newend = val * end;
      this.telaah.list = newstart;
      this.telaah.end = newend;
      console.log("current page: ".concat(val));
    },
    getValidasi: function getValidasi() {
      var _this = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/perizinan/permohonan", {
        type: "PermohonanKeabsahan"
      }).then(function (r) {
        _this.keabsahan.data = r.data;
      });
    },
    getTelaah: function getTelaah() {
      var _this2 = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/perizinan/permohonan", {
        type: "PermohonanPermintaanTelaah"
      }).then(function (r) {
        _this2.telaah.data = r.data;
      });
    },
    getFrontOffice: function getFrontOffice() {
      var _this3 = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/master/users", {
        type: "dataByrole",
        role: "3"
      }).then(function (r) {
        _this3.frontoffice = r.data;
      });
    },
    onClickSuratTerkirim: function onClickSuratTerkirim() {
      alert();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/popUpdata.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/permohonan/popUpdata.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      url: {
        barcode: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + '/pdf/index?type=ttdKadisBarcode&permohonanId'
      },
      barcode: {
        data: [],
        size: 5,
        page: 1,
        list: 0,
        end: 5,
        search: null
      }
    };
  },
  computed: {
    barcodeFilter: function barcodeFilter() {
      var result = this.barcode.data;
      if (!this.barcode.search) return result;
      var filterValue = this.barcode.search.toLowerCase();

      var filter = function filter(event) {
        return event.perusahaan.fullname.toLowerCase().includes(filterValue) || event.permohonan_code.toLowerCase().includes(filterValue) || event.opd.opd.toLowerCase().includes(filterValue) || event.izin.nama_izin.toLowerCase().includes(filterValue) || event.pemohon.nama.toLowerCase().includes(filterValue);
      };

      return result.filter(filter);
    }
  },
  props: ['title'],
  methods: {
    handleSizeChange: function handleSizeChange(val) {
      console.log("".concat(val, " items per page"));
    },
    handleCurrentChange: function handleCurrentChange(val) {
      var start = Math.max(0, val - 1);
      var end = this.barcode.size;
      var newstart = Math.max(0, start * end);
      var newend = val * end;
      this.barcode.list = newstart;
      this.barcode.end = newend;
      console.log("current page: ".concat(val));
    },
    onPopUp: function onPopUp(a) {
      $("#exampleModal").modal();
      this.getTelaah();
    },
    getTelaah: function getTelaah() {
      var _this = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/perizinan/permohonan", {
        type: "PermohonanPermintaanTelaah"
      }).then(function (r) {
        _this.barcode.data = r.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/modalSurat.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/surat/modalSurat.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      surat: {
        data: [],
        size: 10,
        page: 1,
        list: 0,
        end: 10,
        search: null
      }
    };
  },
  computed: {
    suratFilter: function suratFilter() {
      var result = this.surat.data;
      if (!this.surat.search) return result;
      var filterValue = this.surat.search.toLowerCase();

      var filter = function filter(event) {
        return event.permohonan.perusahaan.fullname.toLowerCase().includes(filterValue) || event.nomor.toLowerCase().includes(filterValue) || event.opd.opd.toLowerCase().includes(filterValue) || event.permohonan.izin.nama_izin.toLowerCase().includes(filterValue) || event.perihal.toLowerCase().includes(filterValue);
      };

      return result.filter(filter);
    }
  },
  props: ['title'],
  methods: {
    handleSizeChange: function handleSizeChange(val) {
      console.log("".concat(val, " items per page"));
    },
    handleCurrentChange: function handleCurrentChange(val) {
      var start = Math.max(0, val - 1);
      var end = this.surat.size;
      var newstart = Math.max(0, start * end);
      var newend = val * end;
      this.surat.list = newstart;
      this.surat.end = newend;
      console.log("current page: ".concat(val));
    },
    resetdata: function resetdata() {
      this.surat.page = 1;
      this.surat.search = null;
      this.surat.list = 0, this.surat.end = 10;
    },
    onPopUp: function onPopUp(kategori) {
      this.resetdata();
      $("#modalSurat").modal();
      this.getTelaah(kategori);
    },
    getTelaah: function getTelaah(kategori) {
      var _this = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/surat", {
        type: "getSuratByKategori",
        kategori: kategori
      }).then(function (r) {
        _this.surat.data = r.data;
        console.log(_this.surat.data);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.el-tabs__item {\n    font-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/popUpdata.vue?vue&type=style&index=0&id=690eaa47&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/permohonan/popUpdata.vue?vue&type=style&index=0&id=690eaa47&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal[data-v-690eaa47] {\n    padding: 20px !important;\n}\n.modal .modal-dialog[data-v-690eaa47] {\n    width: 100%;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n}\n.modal .modal-content[data-v-690eaa47] {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n}\n.modal .modal-body[data-v-690eaa47] {\n    overflow-y: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/modalSurat.vue?vue&type=style&index=0&id=2ee4efa6&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/surat/modalSurat.vue?vue&type=style&index=0&id=2ee4efa6&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal[data-v-2ee4efa6] {\n    padding: 20px !important;\n}\n.modal .modal-dialog[data-v-2ee4efa6] {\n    width: 100%;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n}\n.modal .modal-content[data-v-2ee4efa6] {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n}\n.modal .modal-body[data-v-2ee4efa6] {\n    overflow-y: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
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
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
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
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
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
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
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
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
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
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
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
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/popUpdata.vue?vue&type=style&index=0&id=690eaa47&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/permohonan/popUpdata.vue?vue&type=style&index=0&id=690eaa47&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./popUpdata.vue?vue&type=style&index=0&id=690eaa47&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/popUpdata.vue?vue&type=style&index=0&id=690eaa47&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/modalSurat.vue?vue&type=style&index=0&id=2ee4efa6&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/surat/modalSurat.vue?vue&type=style&index=0&id=2ee4efa6&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./modalSurat.vue?vue&type=style&index=0&id=2ee4efa6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/modalSurat.vue?vue&type=style&index=0&id=2ee4efa6&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=template&id=96ac3b44&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/dashboard.vue?vue&type=template&id=96ac3b44& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "br-pagebody" },
        [
          _c(
            "el-row",
            { attrs: { gutter: 20 } },
            [
              _c(
                "el-col",
                { attrs: { md: 16 } },
                [
                  _c(
                    "el-row",
                    { attrs: { gutter: 10 } },
                    [
                      _c(
                        "el-col",
                        { staticClass: "mg-b-20", attrs: { md: 24 } },
                        [
                          _c(
                            "el-card",
                            { staticStyle: { "border-radius": "10px" } },
                            [
                              _c("h4", { staticClass: "tx-bold tx-20" }, [
                                _vm._v("Selamat Datang !")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "mg-b-0" }, [
                                _vm._v("Halaman Beranda Back Office")
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "Dinas penanaman Modal Dan Pelayanan Terpadu Satu Pintu Provinsi Kepulauan Riau"
                                )
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-col",
                        { staticClass: "mg-b-20", attrs: { md: 24 } },
                        [
                          _c(
                            "el-tabs",
                            {
                              model: {
                                value: _vm.activeName,
                                callback: function($$v) {
                                  _vm.activeName = $$v
                                },
                                expression: "activeName"
                              }
                            },
                            [
                              _c(
                                "el-tab-pane",
                                {
                                  attrs: {
                                    label: "VALIDASI KEABSAHAN DOKUMEN",
                                    name: "first"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex align-items-center justify-content-between mg-b-5"
                                    },
                                    [
                                      _c(
                                        "h5",
                                        {
                                          staticClass:
                                            "tx-gray-800 tx-15 tx-bold"
                                        },
                                        [
                                          _vm._v(
                                            "VERIFIKASI BERKAS MASUK\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "el-col",
                                        {
                                          staticClass:
                                            "d-flex align-items-center justify-content-end",
                                          attrs: { md: 8 }
                                        },
                                        [
                                          _c("ion-icon", {
                                            staticClass: "tx-20 tx-primary",
                                            attrs: {
                                              name: "document-text-outline"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "tx-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.keabsahan.data.length
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("el-input", {
                                            staticClass: "col-md-10",
                                            attrs: {
                                              size: "small",
                                              placeholder:
                                                "Ketik Nama perusahaan / izin"
                                            },
                                            model: {
                                              value: _vm.keabsahan.search,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.keabsahan,
                                                  "search",
                                                  $$v
                                                )
                                              },
                                              expression: "keabsahan.search"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-card",
                                    {
                                      staticStyle: { "border-radius": "10px" }
                                    },
                                    [
                                      _c(
                                        "table",
                                        {
                                          staticClass: "table",
                                          staticStyle: { "min-height": "620px" }
                                        },
                                        [
                                          _c("thead", [
                                            _c("tr", [
                                              _c("th", [_vm._v("No")]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _vm._v("Nama Perusahaan")
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Izin")]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _vm._v("Tanggal/Waktu")
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Pengaturan")])
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "tbody",
                                            _vm._l(
                                              _vm.IzinKeabsahan.slice(
                                                _vm.keabsahan.list,
                                                _vm.keabsahan.end
                                              ),
                                              function(i, Index) {
                                                return _c(
                                                  "tr",
                                                  { key: Index },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(Index + 1))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "pd-l-0-force"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "tx-13 tx-bold mg-b-0"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                i.perusahaan
                                                                  .fullname
                                                              )
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        i.perusahaan.kategori !=
                                                        "perorangan"
                                                          ? _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "tx-12 tx-roboto mg-b-1 tx-primary"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    i.pemohon
                                                                      .nama
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass:
                                                              "tx-12 tx-roboto"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                i.pemohon
                                                                  .contact
                                                              ) +
                                                                " / " +
                                                                _vm._s(
                                                                  i.pemohon
                                                                    .email
                                                                )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "pd-l-0-force"
                                                      },
                                                      [
                                                        _c("div", [
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "tx-13 tx-bold mg-b-0 tx-teal"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  i.izin
                                                                    .nama_izin
                                                                )
                                                              )
                                                            ]
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
                                                                _vm._s(
                                                                  i.opd.opd
                                                                ) +
                                                                  " / " +
                                                                  _vm._s(
                                                                    i.izin
                                                                      .kategori
                                                                  )
                                                              )
                                                            ]
                                                          )
                                                        ])
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "pd-l-0-force"
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "tx-12 tx-roboto mg-b-0"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(i.lastjam)
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "pd-l-0-force"
                                                      },
                                                      [
                                                        _c(
                                                          "router-link",
                                                          {
                                                            attrs: {
                                                              to: {
                                                                name:
                                                                  "bo-permohonan-detail",
                                                                params: {
                                                                  id:
                                                                    i.permohonan_id
                                                                }
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "el-button",
                                                              {
                                                                staticStyle: {
                                                                  background:
                                                                    "#0488A1",
                                                                  color:
                                                                    "white",
                                                                  border: "none"
                                                                },
                                                                attrs: {
                                                                  size: "small"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Verifikasi"
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "el-row",
                                        {
                                          attrs: {
                                            justify: "end",
                                            type: "flex"
                                          }
                                        },
                                        [
                                          _c(
                                            "el-col",
                                            { attrs: { md: 10 } },
                                            [
                                              _c("el-pagination", {
                                                staticStyle: { float: "right" },
                                                attrs: {
                                                  background: "",
                                                  "current-page":
                                                    _vm.keabsahan.page,
                                                  "page-size":
                                                    _vm.keabsahan.size,
                                                  "page-count":
                                                    _vm.keabsahan.pagecount,
                                                  layout:
                                                    "total, prev, pager, next",
                                                  total:
                                                    _vm.keabsahan.data.length
                                                },
                                                on: {
                                                  "size-change":
                                                    _vm.handleSizeChange,
                                                  "current-change":
                                                    _vm.handleCurrentChange,
                                                  "update:currentPage": function(
                                                    $event
                                                  ) {
                                                    return _vm.$set(
                                                      _vm.keabsahan,
                                                      "page",
                                                      $event
                                                    )
                                                  },
                                                  "update:current-page": function(
                                                    $event
                                                  ) {
                                                    return _vm.$set(
                                                      _vm.keabsahan,
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
                              ),
                              _vm._v(" "),
                              _c(
                                "el-tab-pane",
                                {
                                  attrs: {
                                    label: "PERMINTAAN TELAAH TEKNIS",
                                    name: "second"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex align-items-center justify-content-between mg-b-5"
                                    },
                                    [
                                      _c(
                                        "h5",
                                        {
                                          staticClass:
                                            "tx-gray-800 tx-15 tx-bold"
                                        },
                                        [
                                          _vm._v(
                                            "PENGIRIMAN TELAAH TEKNIS\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "el-col",
                                        {
                                          staticClass:
                                            "d-flex align-items-center justify-content-end",
                                          attrs: { md: 8 }
                                        },
                                        [
                                          _c("ion-icon", {
                                            staticClass: "tx-20 tx-primary",
                                            attrs: {
                                              name: "document-text-outline"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "tx-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.telaah.data.length)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("el-input", {
                                            staticClass: "col-md-10",
                                            attrs: {
                                              size: "small",
                                              placeholder:
                                                "Ketik Nama perusahaan / izin"
                                            },
                                            model: {
                                              value: _vm.telaah.search,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.telaah,
                                                  "search",
                                                  $$v
                                                )
                                              },
                                              expression: "telaah.search"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-card",
                                    {
                                      staticStyle: { "border-radius": "10px" }
                                    },
                                    [
                                      _c(
                                        "table",
                                        {
                                          staticClass: "table",
                                          staticStyle: { "min-height": "620px" }
                                        },
                                        [
                                          _c("thead", [
                                            _c("tr", [
                                              _c("th", [_vm._v("No")]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _vm._v("Nama Perusahaan")
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Izin")]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _vm._v("Tanggal/Waktu")
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Pengaturan")])
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "tbody",
                                            _vm._l(
                                              _vm.IzinPermintaanTelaah.slice(
                                                _vm.telaah.list,
                                                _vm.telaah.end
                                              ),
                                              function(i, Index) {
                                                return _c(
                                                  "tr",
                                                  { key: Index },
                                                  [
                                                    _c("td", [
                                                      _vm._v(_vm._s(Index + 1))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "pd-l-0-force"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "tx-13 tx-bold mg-b-0"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                i.perusahaan
                                                                  .fullname
                                                              )
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        i.perusahaan.kategori !=
                                                        "perorangan"
                                                          ? _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "tx-12 tx-roboto mg-b-1 tx-primary"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    i.pemohon
                                                                      .nama
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass:
                                                              "tx-12 tx-roboto"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                i.pemohon
                                                                  .contact
                                                              ) +
                                                                " / " +
                                                                _vm._s(
                                                                  i.pemohon
                                                                    .email
                                                                )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "pd-l-0-force"
                                                      },
                                                      [
                                                        _c("div", [
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "tx-13 tx-bold mg-b-0 tx-teal"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  i.izin
                                                                    .nama_izin
                                                                )
                                                              )
                                                            ]
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
                                                                _vm._s(
                                                                  i.opd.opd
                                                                ) +
                                                                  " / " +
                                                                  _vm._s(
                                                                    i.izin
                                                                      .kategori
                                                                  )
                                                              )
                                                            ]
                                                          )
                                                        ])
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "pd-l-0-force"
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "tx-12 tx-roboto mg-b-0"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(i.lastjam)
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "pd-l-0-force"
                                                      },
                                                      [
                                                        _c(
                                                          "router-link",
                                                          {
                                                            attrs: {
                                                              to: {
                                                                name:
                                                                  "bo-surat-permintaan",
                                                                params: {
                                                                  id:
                                                                    i.permohonan_id
                                                                }
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "el-button",
                                                              {
                                                                staticStyle: {
                                                                  background:
                                                                    "#c8b046",
                                                                  color:
                                                                    "white",
                                                                  border: "none"
                                                                },
                                                                attrs: {
                                                                  size: "small"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Upload Surat"
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "el-row",
                                        {
                                          attrs: {
                                            justify: "end",
                                            type: "flex"
                                          }
                                        },
                                        [
                                          _c(
                                            "el-col",
                                            { attrs: { md: 10 } },
                                            [
                                              _c("el-pagination", {
                                                staticStyle: { float: "right" },
                                                attrs: {
                                                  background: "",
                                                  "current-page":
                                                    _vm.telaah.page,
                                                  "page-size": _vm.telaah.size,
                                                  "page-count":
                                                    _vm.telaah.pagecount,
                                                  layout:
                                                    "total, prev, pager, next",
                                                  total: _vm.telaah.data.length
                                                },
                                                on: {
                                                  "size-change":
                                                    _vm.handleSizeChangetelaah,
                                                  "current-change":
                                                    _vm.handleCurrentChangetelaah,
                                                  "update:currentPage": function(
                                                    $event
                                                  ) {
                                                    return _vm.$set(
                                                      _vm.telaah,
                                                      "page",
                                                      $event
                                                    )
                                                  },
                                                  "update:current-page": function(
                                                    $event
                                                  ) {
                                                    return _vm.$set(
                                                      _vm.telaah,
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
                              ),
                              _vm._v(" "),
                              _c(
                                "el-tab-pane",
                                { attrs: { label: "DRAFT SK", name: "third" } },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex align-items-center justify-content-between mg-b-5"
                                    },
                                    [
                                      _c(
                                        "h5",
                                        {
                                          staticClass:
                                            "tx-gray-800 tx-15 tx-bold"
                                        },
                                        [
                                          _vm._v(
                                            "SEDANG DALAM PERBAIKAN\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "el-col",
                                        {
                                          staticClass:
                                            "d-flex align-items-center justify-content-end",
                                          attrs: { md: 8 }
                                        },
                                        [
                                          _c("ion-icon", {
                                            staticClass: "tx-20 tx-primary",
                                            attrs: {
                                              name: "document-text-outline"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "tx-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.telaah.data.length)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("el-input", {
                                            staticClass: "col-md-10",
                                            attrs: {
                                              size: "small",
                                              placeholder:
                                                "Ketik Nama perusahaan / izin"
                                            },
                                            model: {
                                              value: _vm.telaah.search,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.telaah,
                                                  "search",
                                                  $$v
                                                )
                                              },
                                              expression: "telaah.search"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "el-tab-pane",
                                { attrs: { label: "SK", name: "four" } },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex align-items-center justify-content-between mg-b-5"
                                    },
                                    [
                                      _c(
                                        "h5",
                                        {
                                          staticClass:
                                            "tx-gray-800 tx-15 tx-bold"
                                        },
                                        [
                                          _vm._v(
                                            "SEDANG DALAM PERBAIKAN\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "el-col",
                                        {
                                          staticClass:
                                            "d-flex align-items-center justify-content-end",
                                          attrs: { md: 8 }
                                        },
                                        [
                                          _c("ion-icon", {
                                            staticClass: "tx-20 tx-primary",
                                            attrs: {
                                              name: "document-text-outline"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "tx-bold" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.telaah.data.length)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("el-input", {
                                            staticClass: "col-md-10",
                                            attrs: {
                                              size: "small",
                                              placeholder:
                                                "Ketik Nama perusahaan / izin"
                                            },
                                            model: {
                                              value: _vm.telaah.search,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.telaah,
                                                  "search",
                                                  $$v
                                                )
                                              },
                                              expression: "telaah.search"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "el-tab-pane",
                                { attrs: { label: "GRAFIK", name: "five" } },
                                [_c("ChartPermohonan")],
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
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { md: 8 } },
                [
                  _c(
                    "el-row",
                    { attrs: { gutter: 10 } },
                    [
                      _c(
                        "el-col",
                        { staticClass: "mg-b-10", attrs: { md: 12 } },
                        [
                          _c(
                            "el-card",
                            {
                              attrs: {
                                "body-style": {
                                  padding: "10px",
                                  background: "#46B4C8",
                                  color: "white",
                                  minHeight: "120px"
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex align-items-center mg-b-15"
                                },
                                [
                                  _c("ion-icon", {
                                    staticClass: "tx-30",
                                    attrs: { name: "qr-code-outline" }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "mg-l-20" }, [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "tx-24 tx-lato tx-bold mg-b-2 lh-1"
                                      },
                                      [_vm._v("Barcode")]
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "center",
                                [
                                  _c(
                                    "el-button",
                                    {
                                      staticStyle: {
                                        background: "#0488A1",
                                        color: "white",
                                        border: "none"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.$refs.Barcode.onPopUp()
                                        }
                                      }
                                    },
                                    [_vm._v("Cetak Barcode")]
                                  )
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
                        "el-col",
                        { staticClass: "mg-b-10", attrs: { md: 12 } },
                        [
                          _c(
                            "el-card",
                            {
                              attrs: {
                                "body-style": {
                                  padding: "10px",
                                  background: "#455CC7",
                                  color: "white",
                                  minHeight: "120px"
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    " d-flex align-items-center mg-b-15"
                                },
                                [
                                  _c("ion-icon", {
                                    staticClass: "tx-30",
                                    attrs: { name: "barcode-outline" }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "mg-l-20" }, [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "tx-24 tx-lato tx-bold mg-b-2 lh-1"
                                      },
                                      [_vm._v("Checlist")]
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "center",
                                [
                                  _c(
                                    "el-button",
                                    {
                                      staticStyle: {
                                        background: "#122996",
                                        color: "white",
                                        border: "none"
                                      }
                                    },
                                    [_vm._v("Cetak Checklist")]
                                  )
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
                        "el-col",
                        { staticClass: "mg-b-10", attrs: { md: 12 } },
                        [
                          _c(
                            "el-card",
                            {
                              attrs: {
                                "body-style": {
                                  padding: "10px",
                                  background: "#8546C8",
                                  color: "white",
                                  minHeight: "120px"
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: " d-flex align-items-center" },
                                [
                                  _c("ion-icon", {
                                    staticClass: "tx-30",
                                    attrs: { name: "shield-checkmark-outline" }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "mg-l-20" }, [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "tx-24 tx-lato tx-bold mg-b-2 lh-1"
                                      },
                                      [_vm._v("Security")]
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
                        { staticClass: "mg-b-10", attrs: { md: 12 } },
                        [
                          _c(
                            "el-card",
                            {
                              attrs: {
                                "body-style": {
                                  padding: "10px",
                                  background: "#8546C8",
                                  color: "white",
                                  minHeight: "120px"
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: " d-flex align-items-center" },
                                [
                                  _c("ion-icon", {
                                    staticClass: "tx-30",
                                    attrs: { name: "shield-checkmark-outline" }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "mg-l-20" }, [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "tx-24 tx-lato tx-bold mg-b-2 lh-1"
                                      },
                                      [_vm._v("Tracking")]
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
                    [
                      _c(
                        "el-col",
                        { staticClass: "mg-b-20 mg-t-20", attrs: { md: 24 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex align-items-center justify-content-between mg-b-5"
                            },
                            [
                              _c(
                                "h5",
                                { staticClass: "tx-gray-800 tx-15 tx-bold" },
                                [
                                  _vm._v(
                                    "Member Front Office\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "el-col",
                                {
                                  staticClass:
                                    "d-flex align-items-center justify-content-end",
                                  attrs: { md: 12 }
                                },
                                [
                                  _c("el-input", {
                                    staticClass: "col-md-10",
                                    attrs: {
                                      size: "small",
                                      placeholder:
                                        "Ketik Nama perusahaan / izin"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-card",
                            { staticStyle: { "border-radius": "10px" } },
                            [
                              _c("table", { staticClass: "table" }, [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", [_vm._v("No")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Nama")])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.frontoffice, function(i, Index) {
                                    return _c("tr", { key: Index }, [
                                      _c("td", [_vm._v(_vm._s(Index + 1))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(i.email))])
                                    ])
                                  }),
                                  0
                                )
                              ])
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
                    { attrs: { gutter: 10 } },
                    [
                      _c(
                        "el-col",
                        { staticClass: "mg-b-10", attrs: { md: 12 } },
                        [
                          _c(
                            "el-card",
                            {
                              attrs: {
                                "body-style": {
                                  padding: "10px",
                                  background: "#46B4C8",
                                  color: "white",
                                  minHeight: "120px"
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex align-items-center mg-b-15"
                                },
                                [
                                  _c("ion-icon", {
                                    staticClass: "tx-30",
                                    attrs: { name: "mail-unread-outline" }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "mg-l-20" }, [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "tx-20 tx-lato tx-bold mg-b-2 lh-1"
                                      },
                                      [_vm._v("Surat Masuk")]
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "center",
                                [
                                  _c(
                                    "el-button",
                                    {
                                      staticStyle: {
                                        background: "#0488a1",
                                        color: "white",
                                        border: "none"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.SuratTelaahOnClick(
                                            "Surat Masuk",
                                            "2"
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Lihat Data")]
                                  )
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
                        "el-col",
                        { staticClass: "mg-b-10", attrs: { md: 12 } },
                        [
                          _c(
                            "el-card",
                            {
                              attrs: {
                                "body-style": {
                                  padding: "10px",
                                  background: "#C8B046",
                                  color: "white",
                                  minHeight: "120px"
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    " d-flex align-items-center mg-b-15"
                                },
                                [
                                  _c("ion-icon", {
                                    staticClass: "tx-30",
                                    attrs: { name: "mail-open-outline" }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "mg-l-20" }, [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "tx-20 tx-lato tx-bold mg-b-2 lh-1"
                                      },
                                      [_vm._v("Surat Keluar")]
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "center",
                                [
                                  _c(
                                    "el-button",
                                    {
                                      staticStyle: {
                                        background: "#A99127",
                                        color: "white",
                                        border: "none"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.SuratTelaahOnClick(
                                            "Surat Keluar",
                                            "1"
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Lihat Data")]
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
        ],
        1
      ),
      _vm._v(" "),
      _c("suratTelaah", {
        ref: "suratTelaah",
        attrs: { title: _vm.telaah.title }
      }),
      _vm._v(" "),
      _c("BarcodeData", { ref: "Barcode", attrs: { title: _vm.barcode.title } })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pd-x-20 pd-sm-x-30 pd-t-20 pd-sm-t-30" }, [
      _c("h4", { staticClass: "tx-gray-800 mg-b-5 tx-bold" }),
      _vm._v(" "),
      _c("p", { staticClass: "mg-b-0" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/popUpdata.vue?vue&type=template&id=690eaa47&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/permohonan/popUpdata.vue?vue&type=template&id=690eaa47&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c(
                "div",
                { staticClass: "modal-header" },
                [
                  _c("h5", { staticClass: "tx-gray-800 tx-15 tx-bold" }, [
                    _vm._v(_vm._s(_vm.title) + "\n                        ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-end",
                      attrs: { md: 18 }
                    },
                    [
                      _c("el-input", {
                        staticClass: "col-md-10",
                        attrs: {
                          size: "small",
                          placeholder: "Ketik Nama perusahaan / izin"
                        },
                        model: {
                          value: _vm.barcode.search,
                          callback: function($$v) {
                            _vm.$set(_vm.barcode, "search", $$v)
                          },
                          expression: "barcode.search"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(0)
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-body" },
                [
                  _c(
                    "table",
                    {
                      staticClass: "table",
                      staticStyle: { "min-height": "620px" }
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(
                          _vm.barcodeFilter.slice(
                            _vm.barcode.list,
                            _vm.barcode.end
                          ),
                          function(i, Index) {
                            return _c("tr", { key: Index }, [
                              _c("td", [_vm._v(_vm._s(Index + 1))]),
                              _vm._v(" "),
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
                                _c("p", { staticClass: "tx-12 tx-roboto" }, [
                                  _vm._v(
                                    _vm._s(i.pemohon.contact) +
                                      " / " +
                                      _vm._s(i.pemohon.email)
                                  )
                                ])
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
                                    { staticClass: "tx-12 tx-roboto mg-b-0" },
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
                                  { staticClass: "tx-12 tx-roboto mg-b-0" },
                                  [_vm._v(_vm._s(i.lastjam))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "pd-l-0-force" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        _vm.url.barcode + "=" + i.permohonan_id,
                                      download: ""
                                    }
                                  },
                                  [_vm._v("download")]
                                )
                              ])
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
                              "current-page": _vm.barcode.page,
                              "page-size": _vm.barcode.size,
                              "page-count": _vm.barcode.pagecount,
                              layout: "total, prev, pager, next",
                              total: _vm.barcode.data.length
                            },
                            on: {
                              "size-change": _vm.handleSizeChange,
                              "current-change": _vm.handleCurrentChange,
                              "update:currentPage": function($event) {
                                return _vm.$set(_vm.barcode, "page", $event)
                              },
                              "update:current-page": function($event) {
                                return _vm.$set(_vm.barcode, "page", $event)
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
              ),
              _vm._v(" "),
              _vm._m(2)
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nama Perusahaan")]),
        _vm._v(" "),
        _c("th", [_vm._v("Izin")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tanggal/Waktu")]),
        _vm._v(" "),
        _c("th", [_vm._v("Pengaturan")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Tutup")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/modalSurat.vue?vue&type=template&id=2ee4efa6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/surat/modalSurat.vue?vue&type=template&id=2ee4efa6&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "modalSurat",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "modalSurat",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c(
                "div",
                { staticClass: "modal-header" },
                [
                  _c("h5", { staticClass: "tx-gray-800 tx-15 tx-bold" }, [
                    _vm._v(_vm._s(_vm.title) + "\n                    ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-end",
                      attrs: { md: 18 }
                    },
                    [
                      _c("el-input", {
                        staticClass: "col-md-10",
                        attrs: {
                          size: "small",
                          placeholder: "Ketik Nama perusahaan / izin"
                        },
                        model: {
                          value: _vm.surat.search,
                          callback: function($$v) {
                            _vm.$set(_vm.surat, "search", $$v)
                          },
                          expression: "surat.search"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(0)
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-body" },
                [
                  _c("table", { staticClass: "table" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(
                        _vm.suratFilter.slice(_vm.surat.list, _vm.surat.end),
                        function(i, Index) {
                          return _c("tr", { key: Index }, [
                            _c("td", [_vm._v(_vm._s(Index + 1))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(i.nomor))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(i.perihal))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(i.permohonan.izin.nama_izin))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(i.opd.opd))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(i.permohonan.perusahaan.fullname))
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "el-button",
                                  {
                                    attrs: {
                                      type: "primary",
                                      size: "small",
                                      icon: "el-icon-printer"
                                    }
                                  },
                                  [_vm._v("Cetak")]
                                )
                              ],
                              1
                            )
                          ])
                        }
                      ),
                      0
                    )
                  ]),
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
                              "current-page": _vm.surat.page,
                              "page-size": _vm.surat.size,
                              "page-count": _vm.surat.pagecount,
                              layout: "total, prev, pager, next",
                              total: _vm.surat.data.length
                            },
                            on: {
                              "size-change": _vm.handleSizeChange,
                              "current-change": _vm.handleCurrentChange,
                              "update:currentPage": function($event) {
                                return _vm.$set(_vm.surat, "page", $event)
                              },
                              "update:current-page": function($event) {
                                return _vm.$set(_vm.surat, "page", $event)
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
              ),
              _vm._v(" "),
              _vm._m(2)
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nomor Surat")]),
        _vm._v(" "),
        _c("th", [_vm._v("Perihal")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nama Izin")]),
        _vm._v(" "),
        _c("th", [_vm._v("Opd")]),
        _vm._v(" "),
        _c("th", [_vm._v("Perusahaan")]),
        _vm._v(" "),
        _c("th", [_vm._v("Pengaturan")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Tutup")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/chart/permohonan.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/chart/permohonan.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _permohonan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permohonan.vue?vue&type=script&lang=js& */ "./resources/js/components/chart/permohonan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _permohonan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chart/permohonan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chart/permohonan.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/chart/permohonan.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_permohonan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./permohonan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/permohonan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_permohonan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/dashboard.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/dashboard/dashboard.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_96ac3b44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=96ac3b44& */ "./resources/js/components/dashboard/dashboard.vue?vue&type=template&id=96ac3b44&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_96ac3b44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_96ac3b44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/dashboard/dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/dashboard/dashboard.vue?vue&type=template&id=96ac3b44&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/dashboard/dashboard.vue?vue&type=template&id=96ac3b44& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_96ac3b44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=96ac3b44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/dashboard.vue?vue&type=template&id=96ac3b44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_96ac3b44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_96ac3b44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/permohonan/popUpdata.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/permohonan/popUpdata.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popUpdata_vue_vue_type_template_id_690eaa47_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popUpdata.vue?vue&type=template&id=690eaa47&scoped=true& */ "./resources/js/components/permohonan/popUpdata.vue?vue&type=template&id=690eaa47&scoped=true&");
/* harmony import */ var _popUpdata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popUpdata.vue?vue&type=script&lang=js& */ "./resources/js/components/permohonan/popUpdata.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _popUpdata_vue_vue_type_style_index_0_id_690eaa47_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUpdata.vue?vue&type=style&index=0&id=690eaa47&scoped=true&lang=css& */ "./resources/js/components/permohonan/popUpdata.vue?vue&type=style&index=0&id=690eaa47&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _popUpdata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _popUpdata_vue_vue_type_template_id_690eaa47_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _popUpdata_vue_vue_type_template_id_690eaa47_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "690eaa47",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/permohonan/popUpdata.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/permohonan/popUpdata.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/permohonan/popUpdata.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popUpdata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./popUpdata.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/popUpdata.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popUpdata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/permohonan/popUpdata.vue?vue&type=style&index=0&id=690eaa47&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/permohonan/popUpdata.vue?vue&type=style&index=0&id=690eaa47&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_popUpdata_vue_vue_type_style_index_0_id_690eaa47_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./popUpdata.vue?vue&type=style&index=0&id=690eaa47&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/popUpdata.vue?vue&type=style&index=0&id=690eaa47&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_popUpdata_vue_vue_type_style_index_0_id_690eaa47_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_popUpdata_vue_vue_type_style_index_0_id_690eaa47_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_popUpdata_vue_vue_type_style_index_0_id_690eaa47_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_popUpdata_vue_vue_type_style_index_0_id_690eaa47_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_popUpdata_vue_vue_type_style_index_0_id_690eaa47_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/permohonan/popUpdata.vue?vue&type=template&id=690eaa47&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/permohonan/popUpdata.vue?vue&type=template&id=690eaa47&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popUpdata_vue_vue_type_template_id_690eaa47_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./popUpdata.vue?vue&type=template&id=690eaa47&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/permohonan/popUpdata.vue?vue&type=template&id=690eaa47&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popUpdata_vue_vue_type_template_id_690eaa47_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popUpdata_vue_vue_type_template_id_690eaa47_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/surat/modalSurat.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/surat/modalSurat.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalSurat_vue_vue_type_template_id_2ee4efa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalSurat.vue?vue&type=template&id=2ee4efa6&scoped=true& */ "./resources/js/components/surat/modalSurat.vue?vue&type=template&id=2ee4efa6&scoped=true&");
/* harmony import */ var _modalSurat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalSurat.vue?vue&type=script&lang=js& */ "./resources/js/components/surat/modalSurat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _modalSurat_vue_vue_type_style_index_0_id_2ee4efa6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalSurat.vue?vue&type=style&index=0&id=2ee4efa6&scoped=true&lang=css& */ "./resources/js/components/surat/modalSurat.vue?vue&type=style&index=0&id=2ee4efa6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _modalSurat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalSurat_vue_vue_type_template_id_2ee4efa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalSurat_vue_vue_type_template_id_2ee4efa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ee4efa6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/surat/modalSurat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/surat/modalSurat.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/surat/modalSurat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalSurat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./modalSurat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/modalSurat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalSurat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/surat/modalSurat.vue?vue&type=style&index=0&id=2ee4efa6&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/surat/modalSurat.vue?vue&type=style&index=0&id=2ee4efa6&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalSurat_vue_vue_type_style_index_0_id_2ee4efa6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./modalSurat.vue?vue&type=style&index=0&id=2ee4efa6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/modalSurat.vue?vue&type=style&index=0&id=2ee4efa6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalSurat_vue_vue_type_style_index_0_id_2ee4efa6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalSurat_vue_vue_type_style_index_0_id_2ee4efa6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalSurat_vue_vue_type_style_index_0_id_2ee4efa6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalSurat_vue_vue_type_style_index_0_id_2ee4efa6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modalSurat_vue_vue_type_style_index_0_id_2ee4efa6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/surat/modalSurat.vue?vue&type=template&id=2ee4efa6&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/surat/modalSurat.vue?vue&type=template&id=2ee4efa6&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalSurat_vue_vue_type_template_id_2ee4efa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./modalSurat.vue?vue&type=template&id=2ee4efa6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/modalSurat.vue?vue&type=template&id=2ee4efa6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalSurat_vue_vue_type_template_id_2ee4efa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalSurat_vue_vue_type_template_id_2ee4efa6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);