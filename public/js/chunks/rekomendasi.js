(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rekomendasi"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rekomendasi/data.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/rekomendasi/data.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      page: {
        title: "Permohonan Rekomendasi Teknis",
        subtitle: "BACK OFFICE",
        status: null
      },
      online: null,
      url: {
        pdf: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].urlWeb + "/PDF",
        track: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].urlWeb + "/track"
      },
      today: moment().format("DD-MM-YYYY"),
      range: null,
      table: {
        isLoading: false,
        data: [],
        search: null
      },
      show: {
        tanggal: false,
        range: false
      },
      sort: {
        type: null,
        data: null
      },
      options: [{
        value: "range",
        label: "Range Tanggal"
      }, {
        value: "Tanggal",
        label: "Tanggal"
      }],
      pickerOptions: {
        shortcuts: [{
          text: "Minggu Lalu",
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit("pick", [start, end]);
          }
        }, {
          text: "Bulan Lalu",
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit("pick", [start, end]);
          }
        }, {
          text: "3 Bulan Terakhir",
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit("pick", [start, end]);
          }
        }]
      }
    };
  },
  mounted: function mounted() {
    if (this.$route.query.q == "teknisrespon") {
      this.page.title = "Balasan Rekomendasi Teknis";
    }

    this.page.status = this.$route.query.q;
    this.GetData(this.today);
  },
  methods: {
    SortType: function SortType() {
      if (this.sort.type == "Tanggal") {
        this.show.tanggal = true;
        this.show.range = false;
      }

      if (this.sort.type == "range") {
        this.show.tanggal = false;
        this.show.range = true;
      }
    },
    moment: function (_moment) {
      function moment(_x) {
        return _moment.apply(this, arguments);
      }

      moment.toString = function () {
        return _moment.toString();
      };

      return moment;
    }(function (arg) {
      moment.locale("id");
      return moment(arg);
    }),
    GetData: function GetData(date) {
      var _this = this;

      this.table.isLoading = true;
      this.table.data = [];
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/validasi", {
        type: "dataByDate",
        status: this.page.status
      }).then(function (r) {
        return _this.table.data = r.data, _this.table.isLoading = false;
      });
    },
    edit: function edit(index, row) {
      window.location.href = _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/validasi/permohonan/detail/" + row.permohonan_id;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rekomendasi/detail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/rekomendasi/detail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/url */ "./resources/js/url.js");
/* harmony import */ var _js_components_perizinan_perusahaan_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/perizinan/perusahaan/detail */ "./resources/js/components/perizinan/perusahaan/detail.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      permohonanTerima: [{
        id: 1,
        status: "Terima"
      }, {
        id: 2,
        status: "Tolak"
      }],
      page: {
        title: "Permohonan Rekomendasi Teknis",
        subtitle: "BACK OFFICE"
      },
      active: {
        index: 0,
        card: [true, false, false]
      },
      show: {
        formBalasan: false
      },
      id: this.$route.params.id,
      url: {
        file: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web
      },
      table: {
        permintaan: {
          data: [],
          isLoading: false,
          search: null
        },
        balasan: {
          data: [],
          isLoading: false,
          search: null
        }
      },
      opd: [],
      permintaan: {
        nomor: null,
        file: null,
        opd_id: null,
        upload: {
          progress: false,
          disabled: true
        },
        disabled: false,
        validate: {
          file: false
        }
      },
      balasan: {
        stRekom_id: null,
        nomor: null,
        file: null,
        opd_id: 1,
        permohonan: "Terima",
        upload: {
          progress: false,
          disabled: true
        },
        disabled: false,
        validate: {
          file: false
        }
      },
      permohonan: {
        permohonan_id: "1025",
        permohonan_code: "PRMN00996"
      },
      perusahaan_id: null
    };
  },
  mounted: function mounted() {
    console.log("permohonan Data");
    this.$parent.$data.activeLink = "perizinan";
    this.$parent.$data.activeName = "Permohonan Data";
    this.permohonan.permohonan_id = this.$route.params.id;
    this.permohonan.permohonan_code = this.$route.params.code;
    this.perusahaan_id = this.$route.params.perusahaan;

    if (this.$route.query.q == "teknisrespon") {
      this.active.index = 1;
      this.active.card[0] = false;
      this.active.card[1] = true;
      this.active.card[2] = false;
      this.page.title = "Proses Kajian Dan Pengiriman Surat Telaah Rekomendasi Teknis";
      this.page.subtitle = "OPD TEKNIS";
    }

    this.GetOpd();
    this.GetPermintaanData();
  },
  components: {
    perusahaan: _js_components_perizinan_perusahaan_detail__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  //   props:['permohonan'],
  methods: {
    toDraft: function toDraft() {
      var _this = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/surat/rekomendasi", {
        type: "toDraft",
        permohonan_id: this.permohonan.permohonan_id,
        perusahaan_id: this.perusahaan_id
      }).then(function (r) {
        return _this.$router.push({
          name: "sk",
          query: {
            q: "draft"
          }
        });
      });
    },
    toTolak: function toTolak() {
      var _this2 = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/surat/rekomendasi", {
        type: "toTolak",
        permohonan_id: this.permohonan.permohonan_id,
        perusahaan_id: this.perusahaan_id
      }).then(function (r) {
        return _this2.$router.push({
          name: "sk",
          query: {
            q: "draft"
          }
        });
      });
    },
    activeTab: function activeTab(row) {
      var a = row;
      var b = row;
      this.active.card[1] = true;
      this.active.card[0] = false;
      this.active.card[2] = false;
    },
    notif: function notif(s, m, type) {
      this.$notify({
        title: s,
        message: m,
        type: type
      });
    },
    uploadPermintaan: function uploadPermintaan() {
      var _this3 = this;

      if (this.permintaan.file == null) {
        this.permintaan.validate.file = true;
      }

      this.$refs["permintaan_form"].validate(function (valid) {
        if (valid) {
          if (_this3.permintaan.file == null) {
            _this3.permintaan.validate.file = true;
          } else {
            _this3.UploadFIle();

            _this3.openModal("show");
          }
        } else {
          return false;
        }
      });
    },
    uploadBalasan: function uploadBalasan() {
      var _this4 = this;

      if (this.balasan.file == null) {
        this.balasan.validate.file = true;
      }

      this.$refs["balasan_form"].validate(function (valid) {
        if (valid) {
          if (_this4.balasan.file == null) {
            _this4.balasan.validate.file = true;
          } else {
            _this4.UploadFIleBalasan();

            _this4.balasanModal("show");
          }
        } else {
          return false;
        }
      });
    },
    GetOpd: function GetOpd() {
      var _this5 = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/master/opd", {
        type: "dataAll"
      }).then(function (r) {
        return _this5.opd = r.data, _this5.opd[12].aktif = false;
      });
    },
    GetPermintaanData: function GetPermintaanData() {
      var _this6 = this;

      this.table.permintaan.isLoading = true;
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/surat/rekomendasi", {
        type: "RekomendasiByPermohonanId",
        permohonan_id: this.permohonan.permohonan_id
      }).then(function (r) {
        return _this6.table.permintaan.isLoading = false, _this6.table.permintaan.data = r.data;
      });
    },
    openModal: function openModal(type) {
      $("#permintaan_modal").modal(type);
    },
    balasanModal: function balasanModal(type) {
      $("#balasan_modal").modal(type);
    },
    checkUpload: function checkUpload() {
      var que = this.queue;
      var length = this.queue.length; // console.log(que.length)

      if (length > 0) {
        this.UploadFIle(que[0]);
      } else {
        this.show.modal = false;
      }
    },
    moment: function (_moment) {
      function moment(_x) {
        return _moment.apply(this, arguments);
      }

      moment.toString = function () {
        return _moment.toString();
      };

      return moment;
    }(function (arg) {
      moment.locale("id");
      return moment(arg);
    }),
    kirimFile: function kirimFile(row) {
      var _this7 = this;

      var loading = this.table.permintaan.isLoading;
      loading = true;
      this.$confirm("Kirim File Ini ?", "Info", {
        confirmButtonText: "Kirim",
        cancelButtonText: "Batal",
        type: "info"
      }).then(function () {
        _this7.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/surat/rekomendasi", {
          type: "kirimPemintaanOpd",
          stRekom_id: row.stRekom_id,
          nomor: row.nomor_kajian,
          opd: row.opd.opd,
          permohonan_id: _this7.permohonan.permohonan_id,
          perusahaan_id: _this7.perusahaan_id
        }).then(function (r) {
          return console.log(r.data), _this7.GetPermintaanData(), _this7.notif(r.data.title, r.data.message, r.data.type), loading = false;
        });
      })["catch"](function () {
        _this7.$message({
          type: "info",
          message: "Surat Batal Di Kirim"
        });
      });
    },
    hapus: function hapus(row) {
      var _this8 = this;

      var loading = this.table.permintaan.isLoading;
      loading = true;
      this.$confirm("hapus Data ini ?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(function () {
        _this8.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/surat/rekomendasi", {
          type: "deleteByid",
          stRekom_id: row.stRekom_id,
          nomor: row.nomor_kajian
        }).then(function (r) {
          return console.log(r.data), _this8.GetPermintaanData(), _this8.notif(r.data.title, r.data.message, r.data.type), loading = false;
        });
      })["catch"](function () {
        _this8.$message({
          type: "info",
          message: "Delete canceled"
        });
      });
    },
    onFilesChange: function onFilesChange(event) {
      var _this9 = this;

      console.log(event);
      var fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);

      fileReader.onload = function (e) {
        _this9.permintaan.file = e.target.result;
      };
    },
    onFilesChangeBalasan: function onFilesChangeBalasan(event) {
      var _this10 = this;

      console.log(event);
      var fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);

      fileReader.onload = function (e) {
        _this10.balasan.file = e.target.result;
      };
    },
    UploadFIle: function UploadFIle(i) {
      var _this11 = this;

      this.permintaan.upload.progress = true;
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/surat/rekomendasi", {
        type: "UploadSuratTelaah",
        persyaratan: this.permintaan,
        permohonanCode: this.permohonan.permohonan_code,
        permohonan_id: this.permohonan.permohonan_id,
        perusahaan_id: this.perusahaan_id
      }).then(function (r) {
        return _this11.permintaan.upload.progress = false;
      }, this.permintaan.upload.disabled = false, this.$refs.permintaanInputFile.value = "", this.permintaan.validate.file = false);
    },
    resetform: function resetform(data) {
      this.$refs[data].resetFields();
    },
    UploadFIleBalasan: function UploadFIleBalasan(i) {
      var _this12 = this;

      this.balasan.upload.progress = true;
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/surat/rekomendasi", {
        type: "UploadSuratBalasan",
        persyaratan: this.balasan,
        permohonanCode: this.permohonan.permohonan_code,
        permohonan_id: this.permohonan.permohonan_id,
        perusahaan_id: this.perusahaan_id
      }).then(function (r) {
        return _this12.balasan.upload.progress = false, _this12.balasan.upload.disabled = false, _this12.GetPermintaanData(), _this12.$refs["balasan_form"].resetFields(), _this12.$refs.balasanInputFile.value = "", _this12.balasan.validate.file = false, _this12.show.formBalasan = false;
      });
    },
    balasForm: function balasForm(row) {
      this.show.formBalasan = true;
      this.balasan.stRekom_id = row.stRekom_id;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rekomendasi/detail.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/rekomendasi/detail.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.transition-box {\n  margin-bottom: 10px;\n  width: 200px;\n  height: 100px;\n  border-radius: 4px;\n  background-color: #409eff;\n  text-align: center;\n  color: #fff;\n  padding: 40px 20px;\n  box-sizing: border-box;\n  margin-right: 20px;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.5s;\n}\n.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rekomendasi/detail.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/rekomendasi/detail.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rekomendasi/detail.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rekomendasi/data.vue?vue&type=template&id=087efa9c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/rekomendasi/data.vue?vue&type=template&id=087efa9c& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "br-msg-header d-flex justify-content-between" }, [
      _c("div", { staticClass: "pd-x-0 pd-t-30" }, [
        _c("h4", { staticClass: "tx-gray-800 mg-b-5" }, [
          _vm._v(_vm._s(_vm.page.subtitle))
        ]),
        _vm._v(" "),
        _c("h5", { staticClass: "tx-gray-800 mg-b-5" }, [
          _vm._v(_vm._s(_vm.page.title))
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "br-pagebody" },
      [
        _c(
          "el-table",
          {
            directives: [
              {
                name: "loading",
                rawName: "v-loading",
                value: _vm.table.isLoading,
                expression: "table.isLoading"
              }
            ],
            staticStyle: { width: "100%" },
            attrs: {
              data: _vm.table.data.filter(function(data) {
                return (
                  !_vm.table.search ||
                  data.permohonan_code
                    .toLowerCase()
                    .includes(_vm.table.search.toLowerCase()) ||
                  data.perusahaan.fullname
                    .toLowerCase()
                    .includes(_vm.table.search.toLowerCase()) ||
                  data.izin.nama_izin
                    .toLowerCase()
                    .includes(_vm.table.search.toLowerCase()) ||
                  data.opd.opd
                    .toLowerCase()
                    .includes(_vm.table.search.toLowerCase())
                )
              })
            }
          },
          [
            _c("el-table-column", { attrs: { type: "index", width: "50" } }),
            _vm._v(" "),
            _c(
              "el-table-column",
              { attrs: { label: "Identitas Izin", align: "center" } },
              [
                _c("el-table-column", {
                  attrs: {
                    prop: "perusahaan.fullname",
                    label: "Perusahaan",
                    "header-align": "center"
                  }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    prop: "izin.nama_izin",
                    label: "Nama Izin",
                    "header-align": "center"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-table-column",
              { attrs: { label: "Waktu Permohonan", align: "center" } },
              [
                _c("el-table-column", {
                  attrs: {
                    prop: "created_at",
                    label: "Tanggal",
                    align: "center",
                    width: "100"
                  }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    prop: "updated_at",
                    label: "Back Office",
                    align: "center",
                    width: "100"
                  }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    prop: "lastjam",
                    label: "Rentang",
                    align: "center",
                    width: "80"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { align: "center" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function(scope) {
                    return [
                      _c("el-input", {
                        attrs: { size: "mini", placeholder: "Type to search" },
                        model: {
                          value: _vm.table.search,
                          callback: function($$v) {
                            _vm.$set(_vm.table, "search", $$v)
                          },
                          expression: "table.search"
                        }
                      })
                    ]
                  }
                },
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      scope.row.status == "teknis"
                        ? _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "rekomendasi-teknis-id",
                                  params: {
                                    id: scope.row.permohonan_id,
                                    perusahaan:
                                      scope.row.perusahaan.perusahaan_id,
                                    code: scope.row.permohonan_code
                                  }
                                }
                              }
                            },
                            [
                              _c(
                                "el-button",
                                { attrs: { size: "mini", type: "primary" } },
                                [_vm._v("Selengkapnya")]
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      scope.row.status == "tekniskirim"
                        ? _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "rekomendasi-teknis-id",
                                  params: {
                                    id: scope.row.permohonan_id,
                                    perusahaan:
                                      scope.row.perusahaan.perusahaan_id,
                                    code: scope.row.permohonan_code
                                  },
                                  query: { q: "teknisrespon" }
                                }
                              }
                            },
                            [
                              _c(
                                "el-button",
                                { attrs: { size: "mini", type: "primary" } },
                                [_vm._v("Selengkapnya")]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  }
                }
              ])
            })
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
    return _c("div", { staticClass: "br-pageheader pd-y-15 pd-l-20" }, [
      _c("nav", { staticClass: "breadcrumb pd-0 mg-0 tx-12" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rekomendasi/detail.vue?vue&type=template&id=7a85384e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/rekomendasi/detail.vue?vue&type=template&id=7a85384e& ***!
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "br-msg-header d-flex justify-content-between" }, [
      _c("div", { staticClass: "pd-x-0 pd-t-30" }, [
        _c("h4", { staticClass: "tx-gray-800 mg-b-5" }, [
          _vm._v(_vm._s(_vm.page.subtitle))
        ]),
        _vm._v(" "),
        _c("h5", { staticClass: "tx-gray-800 mg-b-5" }, [
          _vm._v(_vm._s(_vm.page.title))
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "br-pagebody" },
      [
        _c(
          "el-steps",
          {
            attrs: {
              direction: "horizontal",
              active: _vm.active.index,
              "process-status": "finish",
              "finish-status": "success"
            }
          },
          [
            _c(
              "el-step",
              {
                attrs: {
                  title: "Permohonan Tela'ah Rekomedasi Teknis",
                  description: "Selesai"
                }
              },
              [
                _c("template", { slot: "title" }, [
                  _c(
                    "div",
                    {
                      on: {
                        click: function($event) {
                          return _vm.activeTab(0)
                        }
                      }
                    },
                    [_vm._v("Permohonan Tela'ah Rekomedasi Teknis")]
                  )
                ])
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "el-step",
              {
                attrs: {
                  title: "Balasan Rekemondasi Teknis",
                  description: "proses"
                },
                on: {
                  click: function($event) {
                    return _vm.activeTab(1)
                  }
                }
              },
              [
                _c("template", { slot: "title" }, [
                  _c(
                    "div",
                    {
                      on: {
                        click: function($event) {
                          return _vm.activeTab(1)
                        }
                      }
                    },
                    [_vm._v("Balasan Rekemondasi Teknis")]
                  )
                ])
              ],
              2
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _vm.active.card[0]
          ? _c("div", [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c(
                      "el-form",
                      {
                        ref: "permintaan_form",
                        attrs: {
                          model: _vm.permintaan,
                          inline: false,
                          "label-position": "top"
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-3" },
                            [
                              _c(
                                "el-form-item",
                                {
                                  attrs: {
                                    prop: "nomor",
                                    label: "Nomor Surat",
                                    rules: {
                                      required: true,
                                      message: "field tidak boleh kosong",
                                      trigger: "blur"
                                    }
                                  }
                                },
                                [
                                  _c("el-input", {
                                    attrs: {
                                      placeholder: "Nomor Surat",
                                      autofocus: true,
                                      disabled: _vm.permintaan.disabled,
                                      clearable: ""
                                    },
                                    model: {
                                      value: _vm.permintaan.nomor,
                                      callback: function($$v) {
                                        _vm.$set(_vm.permintaan, "nomor", $$v)
                                      },
                                      expression: "permintaan.nomor"
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
                            "div",
                            { staticClass: "col-md-3" },
                            [
                              _c(
                                "el-form-item",
                                {
                                  attrs: {
                                    prop: "opd_id",
                                    label: "Organisasi Perangkat Daerah",
                                    "label-position": "top",
                                    rules: {
                                      required: true,
                                      message: "field tidak boleh kosong",
                                      trigger: "change"
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "el-select",
                                    {
                                      attrs: {
                                        placeholder:
                                          "Organisasi Perangkat Daerah",
                                        filterable: "",
                                        disabled: _vm.permintaan.disabled
                                      },
                                      model: {
                                        value: _vm.permintaan.opd_id,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.permintaan,
                                            "opd_id",
                                            $$v
                                          )
                                        },
                                        expression: "permintaan.opd_id"
                                      }
                                    },
                                    _vm._l(_vm.opd, function(item) {
                                      return _c("el-option", {
                                        key: item.opd_id,
                                        attrs: {
                                          label: item.opd,
                                          value: item.opd_id,
                                          disabled: !item.aktif
                                        }
                                      })
                                    }),
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
                            "div",
                            {
                              staticClass: "col-md-3",
                              staticStyle: { "margin-top": "10px" }
                            },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v(
                                  "Scan Surat Permohonan Telaah / Rekomendasi"
                                )
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                ref: "permintaanInputFile",
                                staticClass: "form-control-uniform",
                                staticStyle: { "margin-top": "18px" },
                                attrs: { type: "file" },
                                on: {
                                  change: function($event) {
                                    return _vm.onFilesChange($event)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.permintaan.validate.file
                                ? _c("span", { staticClass: "text-danger" }, [
                                    _vm._v("File Belum di pilih")
                                  ])
                                : _vm._e()
                            ]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-success",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.uploadPermintaan()
                        }
                      }
                    },
                    [_vm._v("Upload")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c(
                      "el-table",
                      {
                        directives: [
                          {
                            name: "loading",
                            rawName: "v-loading",
                            value: _vm.table.permintaan.isLoading,
                            expression: "table.permintaan.isLoading"
                          }
                        ],
                        staticStyle: { width: "100%" },
                        attrs: {
                          data: _vm.table.permintaan.data.filter(function(
                            data
                          ) {
                            return (
                              !_vm.table.permintaan.search ||
                              data.nomor_kajian
                                .toLowerCase()
                                .includes(
                                  _vm.table.permintaan.search.toLowerCase()
                                )
                            )
                          })
                        }
                      },
                      [
                        _c("el-table-column", {
                          attrs: { type: "index", width: "50" }
                        }),
                        _vm._v(" "),
                        _c("el-table-column", {
                          attrs: {
                            prop: "nomor_kajian",
                            label: "Nomor",
                            "header-align": "center"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "el-table-column",
                          {
                            attrs: { label: "Tujuan & Waktu", align: "center" }
                          },
                          [
                            _c("el-table-column", {
                              attrs: {
                                prop: "opd.opd",
                                label: "Organisasi Perangkat Daerah",
                                "header-align": "center"
                              }
                            }),
                            _vm._v(" "),
                            _c("el-table-column", {
                              attrs: {
                                prop: "created_at_kajian",
                                label: "Upload File",
                                "header-align": "center",
                                align: "center"
                              }
                            }),
                            _vm._v(" "),
                            _c("el-table-column", {
                              attrs: {
                                prop: "kirimKajian",
                                label: "Kirim File",
                                "header-align": "center",
                                align: "center"
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(scope) {
                                      return [
                                        scope.row.kirimKajian ==
                                        "Surat Belum Di Kirim"
                                          ? _c(
                                              "div",
                                              [
                                                _c(
                                                  "el-tag",
                                                  { attrs: { type: "danger" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        scope.row.kirimKajian
                                                      )
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          : _c("div", [
                                              _vm._v(
                                                _vm._s(scope.row.kirimKajian)
                                              )
                                            ])
                                      ]
                                    }
                                  }
                                ],
                                null,
                                false,
                                1256759830
                              )
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("el-table-column", {
                          attrs: { align: "right" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "header",
                                fn: function(scope) {
                                  return [
                                    _c("el-input", {
                                      attrs: {
                                        size: "mini",
                                        placeholder: "Type to search"
                                      },
                                      model: {
                                        value: _vm.table.permintaan.search,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.table.permintaan,
                                            "search",
                                            $$v
                                          )
                                        },
                                        expression: "table.permintaan.search"
                                      }
                                    })
                                  ]
                                }
                              },
                              {
                                key: "default",
                                fn: function(scope) {
                                  return [
                                    scope.row.kirimKajian ==
                                    "Surat Belum Di Kirim"
                                      ? _c(
                                          "div",
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-primary",
                                                attrs: {
                                                  href:
                                                    _vm.url.file +
                                                    "/storage/app/permohonan/" +
                                                    _vm.permohonan
                                                      .permohonan_code +
                                                    "/rekomendasi/" +
                                                    scope.row.file_kajian,
                                                  target: "blank"
                                                }
                                              },
                                              [_vm._v("Unduh")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "el-button",
                                              {
                                                attrs: {
                                                  size: "mini",
                                                  type: "warning"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.kirimFile(
                                                      scope.row
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("Kirim File")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "el-button",
                                              {
                                                attrs: {
                                                  size: "mini",
                                                  type: "danger"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.hapus(scope.row)
                                                  }
                                                }
                                              },
                                              [_vm._v("Hapus")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ]
                                }
                              }
                            ],
                            null,
                            false,
                            2816218886
                          )
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.active.card[1]
          ? _c("div", [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c(
                      "el-table",
                      {
                        directives: [
                          {
                            name: "loading",
                            rawName: "v-loading",
                            value: _vm.table.permintaan.isLoading,
                            expression: "table.permintaan.isLoading"
                          }
                        ],
                        staticStyle: { width: "100%" },
                        attrs: {
                          data: _vm.table.permintaan.data.filter(function(
                            data
                          ) {
                            return (
                              !_vm.table.permintaan.search ||
                              data.nomor_kajian
                                .toLowerCase()
                                .includes(
                                  _vm.table.permintaan.search.toLowerCase()
                                )
                            )
                          })
                        }
                      },
                      [
                        _c("el-table-column", {
                          attrs: { type: "index", width: "50" }
                        }),
                        _vm._v(" "),
                        _c(
                          "el-table-column",
                          { attrs: { label: "Nomor Surat", align: "center" } },
                          [
                            _c("el-table-column", {
                              attrs: {
                                prop: "nomor_kajian",
                                label: "Nomor Surat DPMPTSP",
                                "header-align": "center"
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(scope) {
                                      return [
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-8" },
                                            [
                                              _vm._v(
                                                _vm._s(scope.row.nomor_kajian)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("hr"),
                                          _vm._v(" "),
                                          scope.row.file_kajian != null
                                            ? _c(
                                                "div",
                                                { staticClass: "col-md-12" },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-primary",
                                                      attrs: {
                                                        href:
                                                          _vm.url.file +
                                                          "/storage/app/permohonan/" +
                                                          _vm.permohonan
                                                            .permohonan_code +
                                                          "/rekomendasi/" +
                                                          scope.row.file_kajian,
                                                        target: "_blank"
                                                      }
                                                    },
                                                    [_vm._v("Unduh")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-teal",
                                                      attrs: {
                                                        to: {
                                                          name:
                                                            "validasi-permohonan-detail",
                                                          params: {
                                                            id:
                                                              _vm.permohonan
                                                                .permohonan_id
                                                          }
                                                        },
                                                        target: "_blank"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Berkas Persyaratan"
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e()
                                        ])
                                      ]
                                    }
                                  }
                                ],
                                null,
                                false,
                                1972415638
                              )
                            }),
                            _vm._v(" "),
                            _c("el-table-column", {
                              attrs: {
                                prop: "nomor_rekom",
                                label: "Nomor Surat OPD Teknis",
                                "header-align": "center"
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(scope) {
                                      return [
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-8" },
                                            [
                                              _vm._v(
                                                _vm._s(scope.row.nomor_rekom)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          scope.row.file_rekom != null
                                            ? _c(
                                                "div",
                                                { staticClass: "col-md-4" },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-primary",
                                                      attrs: {
                                                        href:
                                                          _vm.url.file +
                                                          "/storage/app/permohonan/" +
                                                          _vm.permohonan
                                                            .permohonan_code +
                                                          "/rekomendasi/" +
                                                          scope.row.nomor_rekom,
                                                        target: "_blank"
                                                      }
                                                    },
                                                    [_vm._v("Unduh")]
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ])
                                      ]
                                    }
                                  }
                                ],
                                null,
                                false,
                                2854900569
                              )
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "el-table-column",
                          {
                            attrs: { label: "Tujuan & Waktu", align: "center" }
                          },
                          [
                            _c("el-table-column", {
                              attrs: {
                                prop: "kirimKajian",
                                label: "Upload File",
                                "header-align": "center",
                                align: "center"
                              }
                            }),
                            _vm._v(" "),
                            _c("el-table-column", {
                              attrs: {
                                prop: "kirimRekom",
                                label: "Kirim",
                                "header-align": "center",
                                align: "center"
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(scope) {
                                      return [
                                        scope.row.kirimRekom ==
                                        "Surat Belum Di Kirim"
                                          ? _c(
                                              "div",
                                              [
                                                _c(
                                                  "el-tag",
                                                  { attrs: { type: "danger" } },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        scope.row.kirimRekom
                                                      )
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          : _c("div", [
                                              _vm._v(
                                                _vm._s(scope.row.kirimRekom)
                                              )
                                            ])
                                      ]
                                    }
                                  }
                                ],
                                null,
                                false,
                                111448110
                              )
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("el-table-column", {
                          attrs: { align: "right" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "header",
                                fn: function(scope) {
                                  return [
                                    _c("el-input", {
                                      attrs: {
                                        size: "mini",
                                        placeholder: "Type to search"
                                      },
                                      model: {
                                        value: _vm.table.permintaan.search,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.table.permintaan,
                                            "search",
                                            $$v
                                          )
                                        },
                                        expression: "table.permintaan.search"
                                      }
                                    })
                                  ]
                                }
                              },
                              {
                                key: "default",
                                fn: function(scope) {
                                  return [
                                    scope.row.kirimRekom ==
                                    "Surat Belum Di Kirim"
                                      ? _c(
                                          "div",
                                          [
                                            _c(
                                              "el-button",
                                              {
                                                attrs: {
                                                  size: "mini",
                                                  type: "warning"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.balasForm(
                                                      scope.row
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("Upload")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ]
                                }
                              }
                            ],
                            null,
                            false,
                            1663079894
                          )
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _vm.show.formBalasan
                ? _c("div", { staticClass: "card" }, [
                    _c(
                      "div",
                      { staticClass: "card-body" },
                      [
                        _c(
                          "el-form",
                          {
                            ref: "balasan_form",
                            attrs: {
                              model: _vm.balasan,
                              inline: false,
                              "label-position": "top"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col-md-3" },
                                [
                                  _c(
                                    "el-form-item",
                                    {
                                      attrs: {
                                        prop: "nomor",
                                        label: "Nomor Surat",
                                        rules: {
                                          required: true,
                                          message: "field tidak boleh kosong",
                                          trigger: "blur"
                                        }
                                      }
                                    },
                                    [
                                      _c("el-input", {
                                        attrs: {
                                          placeholder: "Nomor Surat",
                                          autofocus: true,
                                          disabled: _vm.balasan.disabled,
                                          clearable: ""
                                        },
                                        model: {
                                          value: _vm.balasan.nomor,
                                          callback: function($$v) {
                                            _vm.$set(_vm.balasan, "nomor", $$v)
                                          },
                                          expression: "balasan.nomor"
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
                                "div",
                                { staticClass: "col-md-3" },
                                [
                                  _c(
                                    "el-form-item",
                                    {
                                      attrs: {
                                        prop: "opd_id",
                                        label: "Organisasi Perangkat Daerah",
                                        "label-position": "top",
                                        rules: {
                                          required: true,
                                          message: "field tidak boleh kosong",
                                          trigger: "change"
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "el-select",
                                        {
                                          attrs: {
                                            placeholder:
                                              "Organisasi Perangkat Daerah",
                                            filterable: "",
                                            disabled: _vm.balasan.disabled
                                          },
                                          model: {
                                            value: _vm.balasan.opd_id,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.balasan,
                                                "opd_id",
                                                $$v
                                              )
                                            },
                                            expression: "balasan.opd_id"
                                          }
                                        },
                                        _vm._l(_vm.opd, function(item) {
                                          return _c("el-option", {
                                            key: item.opd_id,
                                            attrs: {
                                              label: item.opd,
                                              value: item.opd_id,
                                              disabled: item.aktif
                                            }
                                          })
                                        }),
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
                                "div",
                                { staticClass: "col-md-3" },
                                [
                                  _c(
                                    "el-form-item",
                                    {
                                      attrs: {
                                        prop: "permohonan",
                                        label: "Terima / Tolak",
                                        "label-position": "top",
                                        rules: {
                                          required: true,
                                          message: "field tidak boleh kosong",
                                          trigger: "change"
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "el-select",
                                        {
                                          attrs: {
                                            placeholder: "Status Surat",
                                            filterable: "",
                                            disabled: _vm.balasan.disabled
                                          },
                                          model: {
                                            value: _vm.balasan.permohonan,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.balasan,
                                                "permohonan",
                                                $$v
                                              )
                                            },
                                            expression: "balasan.permohonan"
                                          }
                                        },
                                        _vm._l(_vm.permohonanTerima, function(
                                          item
                                        ) {
                                          return _c("el-option", {
                                            key: item.id,
                                            attrs: {
                                              label: item.status,
                                              value: item.status
                                            }
                                          })
                                        }),
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
                                "div",
                                {
                                  staticClass: "col-md-3",
                                  staticStyle: { "margin-top": "10px" }
                                },
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v(
                                      "Scan Surat Balasan Telaah / Rekomendasi"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    ref: "balasanInputFile",
                                    staticClass: "form-control-uniform",
                                    staticStyle: { "margin-top": "18px" },
                                    attrs: { type: "file" },
                                    on: {
                                      change: function($event) {
                                        return _vm.onFilesChangeBalasan($event)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.balasan.validate.file
                                    ? _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("File Belum di pilih")]
                                      )
                                    : _vm._e()
                                ]
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-success",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.uploadBalasan()
                            }
                          }
                        },
                        [_vm._v("Upload")]
                      )
                    ])
                  ])
                : _vm._e()
            ])
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "permintaan_modal",
          tabindex: "-1",
          "data-backdrop": "static",
          "data-keyboard": "false"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("h5", { staticClass: "modal-title" }, [
                _vm._v("STATUS UPLOAD")
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    disabled: _vm.permintaan.upload.disabled
                  }
                },
                [_vm._v("×")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("table", { staticClass: "table table-striped" }, [
                _c("tr", [
                  _c("td", [
                    _vm._v("Scan Surat Permohonan Telaah / Rekomendasi")
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { attrs: { width: "300" } },
                    [
                      _vm.permintaan.upload.progress
                        ? _c("div", { staticClass: "progress" }, [_vm._m(1)])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.permintaan.upload.progress
                        ? _c("el-progress", {
                            attrs: { percentage: 100, status: "success" }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-link",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    disabled: _vm.permintaan.upload.disabled
                  },
                  on: {
                    click: function($event) {
                      _vm.resetform("permintaan_form"), _vm.GetPermintaanData()
                    }
                  }
                },
                [_vm._v("Tutup")]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "balasan_modal",
          tabindex: "-1",
          "data-backdrop": "static",
          "data-keyboard": "false"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("h5", { staticClass: "modal-title" }, [
                _vm._v("STATUS UPLOAD")
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    disabled: _vm.balasan.upload.disabled
                  }
                },
                [_vm._v("×")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("table", { staticClass: "table table-striped" }, [
                _c("tr", [
                  _c("td", [_vm._v("Scan Surat balasan Telaah / Rekomendasi")]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { attrs: { width: "300" } },
                    [
                      _vm.permintaan.upload.progress
                        ? _c("div", { staticClass: "progress" }, [_vm._m(2)])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.balasan.upload.progress
                        ? _c("el-progress", {
                            attrs: { percentage: 100, status: "success" }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-link",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    disabled: _vm.balasan.upload.disabled
                  }
                },
                [_vm._v("Tutup")]
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "br-pageheader pd-y-15 pd-l-20" }, [
      _c("nav", { staticClass: "breadcrumb pd-0 mg-0 tx-12" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "progress-bar progress-bar-striped progress-bar-animated",
        staticStyle: { width: "100%" }
      },
      [
        _c("span", { staticStyle: { "margin-top": "20px" } }, [
          _vm._v("Uploading File")
        ]),
        _vm._v(">\n                  ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "progress-bar progress-bar-striped progress-bar-animated",
        staticStyle: { width: "100%" }
      },
      [
        _c("span", { staticStyle: { "margin-top": "20px" } }, [
          _vm._v("Uploading File")
        ]),
        _vm._v(">\n                  ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/rekomendasi/data.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/rekomendasi/data.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_vue_vue_type_template_id_087efa9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.vue?vue&type=template&id=087efa9c& */ "./resources/js/components/rekomendasi/data.vue?vue&type=template&id=087efa9c&");
/* harmony import */ var _data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.vue?vue&type=script&lang=js& */ "./resources/js/components/rekomendasi/data.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _data_vue_vue_type_template_id_087efa9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _data_vue_vue_type_template_id_087efa9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/rekomendasi/data.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/rekomendasi/data.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/rekomendasi/data.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./data.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rekomendasi/data.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/rekomendasi/data.vue?vue&type=template&id=087efa9c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/rekomendasi/data.vue?vue&type=template&id=087efa9c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_data_vue_vue_type_template_id_087efa9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./data.vue?vue&type=template&id=087efa9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rekomendasi/data.vue?vue&type=template&id=087efa9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_data_vue_vue_type_template_id_087efa9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_data_vue_vue_type_template_id_087efa9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/rekomendasi/detail.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/rekomendasi/detail.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_7a85384e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=7a85384e& */ "./resources/js/components/rekomendasi/detail.vue?vue&type=template&id=7a85384e&");
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ "./resources/js/components/rekomendasi/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/rekomendasi/detail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_7a85384e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_7a85384e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/rekomendasi/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/rekomendasi/detail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/rekomendasi/detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rekomendasi/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/rekomendasi/detail.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/rekomendasi/detail.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rekomendasi/detail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/rekomendasi/detail.vue?vue&type=template&id=7a85384e&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/rekomendasi/detail.vue?vue&type=template&id=7a85384e& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_7a85384e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=7a85384e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rekomendasi/detail.vue?vue&type=template&id=7a85384e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_7a85384e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_7a85384e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);