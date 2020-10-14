(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["surat"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/password/gantiPassword.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/password/gantiPassword.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/url */ "./resources/js/url.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var form = function form() {
  return Promise.all(/*! import() | modulForm */[__webpack_require__.e("vendors~Users~modulForm~pemohonPermohonan~roles~surat"), __webpack_require__.e("modulForm")]).then(__webpack_require__.bind(null, /*! @/js/components/roles/modul_form */ "./resources/js/components/roles/modul_form.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      password: null
    };
  },
  validations: {
    password: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    }
  },
  methods: {
    gantiPassword: function gantiPassword() {
      var _this = this;

      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$confirm("Kirim Permohonan ?", "Warning", {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "info"
        }).then(function () {
          _this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_1__["default"].web + "/pemohon", {
            type: "gantipassword",
            password: _this.password
          }).then(function (r) {
            _this.$notify({
              title: "Success",
              message: "File Berhasil Di kirim",
              type: "success"
            });
          });
        })["catch"](function () {
          _this.$message({
            type: "info",
            message: "Pengajuan di batalkan"
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/perizinan/perusahaan/detail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/perizinan/perusahaan/detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/url */ "./resources/js/url.js");
/* harmony import */ var _js_components_perizinan_perusahaan_permohonanList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/perizinan/perusahaan/permohonanList */ "./resources/js/components/perizinan/perusahaan/permohonanList.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      today: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("DD-MM-YYYY"),
      perusahaan: {},
      isLoading: false,
      table: {
        isLoading: false,
        data: [],
        search: null
      },
      form: {
        perusahaan_id: null,
        npwp: null,
        kategori: null,
        nama: null,
        alamat: null,
        email: null,
        contact: null,
        aktif: null,
        type: "insert"
      },
      select: {
        status: [{
          value: "PT",
          label: "PT"
        }, {
          value: "CV",
          label: "CV"
        }, {
          value: "PERORANGAN",
          label: "PERORANGAN"
        }]
      }
    };
  },
  mounted: function mounted() {
    console.log("perusahaan Data");
    this.$parent.$data.activeLink = "perizinan";
    this.$parent.$data.activeName = "Permohonan Data";
  },
  created: function created() {
    this.GetData(this.npwp);
  },
  props: {
    npwp: String,
    rincian: Boolean,
    pengurus: Object
  },
  methods: {
    notif: function notif(s, m, type) {
      this.$notify({
        title: s,
        message: m,
        type: type
      });
    },
    modal_open: function modal_open(type) {
      console.log("modal");
      $("#modal_large").modal(type);
    },
    moment: function moment(arg) {
      moment__WEBPACK_IMPORTED_MODULE_2___default.a.locale("id");

      return moment__WEBPACK_IMPORTED_MODULE_2___default()(arg);
    },
    GetData: function GetData(npwp) {
      var _this = this;

      this.isLoading = true;
      this.perusahaan = {};
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/perizinan/perusahaan", {
        type: "dataBynpwp",
        npwp: npwp
      }).then(function (r) {
        return console.log(r.data), _this.perusahaan = r.data[0], _this.table.data = r.data[0].permohonan, _this.isLoading = false;
      });
    },
    edit: function edit(npwp) {
      var _this2 = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/perizinan/perusahaan", {
        type: "dataBynpwp",
        npwp: npwp
      }).then(function (r) {
        return console.log(r.data), _this2.form = r.data[0];
      });
    },
    deleteTable: function deleteTable(index, row) {
      var _this3 = this;

      this.$confirm("hapus Data ini ?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(function () {
        axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/master/aclGroup", {
          type: "hapus",
          aclId: row.aclGroup_id
        }).then(function (r) {
          return _this3.GetModulGroup();
        });
      })["catch"](function () {
        _this3.$message({
          type: "info",
          message: "Delete canceled"
        });
      });
    },
    submitForm: function submitForm() {
      var _this4 = this;

      this.$refs["perusahaan_form"].validate(function (valid) {
        if (valid) {
          _this4.isLoading = true;

          _this4.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/perizinan/perusahaan", {
            type: "UpdateById",
            data: _this4.form
          }).then(function (r) {
            return _this4.modal_open("hide"), _this4.isLoading = false, _this4.notif(r.data.title, r.data.message, r.data.type), _this4.GetData(_this4.form.npwp), _this4.$refs["perusahaan_form"].resetFields();
          });
        } else {
          return false;
        }
      });
    }
  },
  components: {
    permohonanList: _js_components_perizinan_perusahaan_permohonanList__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/perizinan/perusahaan/permohonanList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/perizinan/perusahaan/permohonanList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/url */ "./resources/js/url.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      today: moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD-MM-YYYY'),
      perusahaan: {},
      isLoading: false,
      table: {
        isLoading: false,
        data: [],
        search: null
      }
    };
  },
  mounted: function mounted() {
    console.log("perusahaan Data");
    this.$parent.$data.activeLink = 'perizinan';
    this.$parent.$data.activeName = 'Permohonan Data';
    this.GetData(this.npwp);
  },
  props: ['npwp'],
  methods: {
    moment: function moment(arg) {
      moment__WEBPACK_IMPORTED_MODULE_1___default.a.locale('id');

      return moment__WEBPACK_IMPORTED_MODULE_1___default()(arg);
    },
    GetData: function GetData(npwp) {
      var _this = this;

      this.isLoading = true;
      this.perusahaan = {};
      axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].urlWeb + '/perizinan/perusahaan', {
        type: "dataBynpwp",
        npwp: npwp
      }).then(function (r) {
        return console.log(r.data), _this.perusahaan = r.data[0], _this.table.data = r.data[0].permohonan, _this.isLoading = false;
      });
    },
    edit: function edit(index, row) {
      var _this2 = this;

      axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].urlWeb + '/master/aclGroup', {
        type: "putsession",
        aclGroup_id: row.aclGroup_id
      }).then(function (r) {
        return _this2.$parent.$data.aclGroup.nama = row.nama, _this2.$parent.$data.aclGroup.is_active = row.is_active, _this2.$parent.$data.aclGroup.aclGroup_id = row.aclGroup_id, _this2.$parent.$data.show.form = true, _this2.$parent.$data.show.data = false, _this2.GetModulGroup();
      });
    },
    deleteTable: function deleteTable(index, row) {
      var _this3 = this;

      this.$confirm('hapus Data ini ?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(function () {
        axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].urlWeb + '/master/aclGroup', {
          type: "hapus",
          aclId: row.aclGroup_id
        }).then(function (r) {
          return _this3.GetModulGroup();
        });
      })["catch"](function () {
        _this3.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      });
    }
  }
});

/***/ }),

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

n;

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/permintaan.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/surat/permintaan.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/url */ "./resources/js/url.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        suratpermintaan: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].assets
      },
      page: {
        isLoading: true
      },
      wrap: {
        inbox: true,
        sent: false
      },
      permohonan: {},
      viewSearch: null,
      drawer: {
        isLoading: false,
        show: false,
        innerDrawer: false,
        pratinjauSurat: false
      },
      surat: [],
      petugas: [],
      permintaan: {
        surat_permintaan_id: null,
        nomor: null,
        opd_id: null,
        perihal: null,
        file: null,
        user_id: null,
        status: "terkirim",
        permohonan_id: this.$route.params.id,
        kategori: "1",
        keterangan: null
      },
      role_id: null,
      pratinjau: {
        objectURL: null,
        isLoading: false,
        progressBar: 0,
        title: null
      }
    };
  },
  created: function created() {
    this.getPermohonan();
    this.getsuratpengurusById();
    this.getSurat();
  },
  validations: {
    permintaan: {
      nomor: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      perihal: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      keterangan: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      file: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      }
    }
  },
  computed: {
    inbox: function inbox() {
      var a = this.surat;
      var user = this.$store.state.StoreUser.user;
      this.role_id = user.role.role_id;

      if (user.role.role_id == 4) {
        var inb = a.filter(function (p) {
          return p.kategori === "1";
        });

        if (inb.length > 0) {
          this.viewSearch = inb[0].surat_permintaan_id;
        }

        return inb;
      } else {
        return a.filter(function (p) {
          return p.kategori === "2";
        });
      }
    },
    sent: function sent() {
      var a = this.surat;
      var user = this.$store.state.StoreUser.user;

      if (user.role.role_id == 4) {
        return a.filter(function (p) {
          return p.kategori === "2";
        });
      } else {
        return a.filter(function (p) {
          return p.kategori === "1";
        });
      }
    },
    view: function view() {
      var _this = this;

      var filter = this.surat.filter(function (p) {
        return p.surat_permintaan_id == _this.viewSearch;
      });

      if (this.viewSearch != null) {
        return filter[0];
      }

      return null;
    },
    user: function user() {
      var a = this.$store.state.StoreUser.user;

      if (a.role_id == "4") {
        this.permintaan.kategori = "2";
        this.permintaan.status = "balas";
      } else if (a.role_id == "2") {
        this.permintaan.keterangan = "pengiriman";
        this.permintaan.status = "terkirim";
        this.permintaan.kategori = "1";
      }

      return a;
    },
    permission: function permission() {
      return this.$store.getters["StoreUser/gtrspermissionActive"]("15");
    }
  },
  mounted: function mounted() {
    this.$parent.justcollpasedmenu();
  },
  methods: {
    openView: function openView(i) {
      this.viewSearch = i;
    },
    getSurat: function getSurat() {
      var _this2 = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/surat", {
        type: "getSurat",
        id: this.$route.params.id
      }).then(function (r) {
        _this2.surat = r.data, _this2.page.isLoading = false;
      });
    },
    getPermohonan: function getPermohonan() {
      var _this3 = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/perizinan/permohonan", {
        type: "dataById",
        id: this.$route.params.id
      }).then(function (r) {
        _this3.permohonan = r.data, _this3.page.isLoading = false;
      });
    },
    getsuratpengurusById: function getsuratpengurusById() {
      var _this4 = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/surat", {
        type: "getsuratpengurusById",
        id: this.$route.params.id
      }).then(function (r) {
        _this4.petugas = r.data;
      });
    },
    openDrawer: function openDrawer() {
      this.drawer.show = true;
    },
    handleClose: function handleClose(done) {
      this.$confirm("Yakin untuk Keluar, jika Ya data yang telah di Upload Akan Hilang?").then(function (_) {
        done();
      })["catch"](function (_) {});
    },
    onFilesChange: function onFilesChange(event) {
      var _this5 = this;

      var file = event.target.files[0];

      if (file.size > 2097152) {
        this.$message.error("File Upload terlalu besar, Maksimal 2 MB");
        return;
      }

      this.pratinjau.isLoading = true;
      this.pratinjau.objectURL = URL.createObjectURL(file);
      var fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);

      fileReader.onload = function (e) {
        _this5.permintaan.file = e.target.result;
        _this5.pratinjau.isLoading = false;
      };
    },
    submit: function submit() {
      var _this6 = this;

      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.pratinjau.isLoading = true;
        this.$Progress.start();
        this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/surat", {
          type: "pengirimanSuratTelaah",
          data: this.permintaan,
          role: this.role_id
        }).then(function (r) {
          _this6.pratinjau.isLoading = false;

          _this6.$Progress.finish();

          _this6.drawer.show = false;
          _this6.pratinjau.objectURL = null;
          _this6.permintaan = {
            surat_permintaan_id: null,
            nomor: null,
            opd_id: null,
            perihal: null,
            file: null,
            user_id: null,
            status: "terkirim",
            permohonan_id: _this6.$route.params.id
          };

          _this6.getSurat();

          _this6.wrap.inbox = false;
          _this6.wrap.sent = true;

          _this6.$nextTick(function () {
            _this6.$v.$reset();
          });
        }, function (response) {
          _this6.$Progress.fail();
        });
      }
    },
    pratinjauBerkasPermintaan: function pratinjauBerkasPermintaan() {
      this.pratinjau.objectURL = _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].assets + "/" + this.permohonan.perusahaan.npwp + "/" + this.permohonan.permohonan_code + "/surat/" + this.view.file;
      this.drawer.title = "Surat Permintaan Telaah " + this.permohonan.perusahaan.fullname + "  -  " + this.permohonan.izin.nama_izin + "";
      this.drawer.pratinjauSurat = true;
    },
    closeDrawer: function closeDrawer(done) {
      this.pratinjau.objectURL = null;
      done();
    },
    openSuratTrack: function openSuratTrack() {
      $("#modalShow").modal("show");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/password/gantiPassword.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/password/gantiPassword.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.wd-20 {\r\n  width: 40px;\n}\n.wd-40 {\r\n  width: 80px;\n}\n.wd-100px {\r\n  width: 100px;\n}\r\n", ""]);

// exports


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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/permintaan.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/surat/permintaan.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.is-invalid {\r\n  background: #fdd;\n}\n.wd-20 {\r\n  width: 40px;\n}\n.wd-40 {\r\n  width: 80px;\n}\n.wd-100px {\r\n  width: 100px;\n}\ntr.errorUpload td {\r\n  background-color: #d7574a;\r\n  color: white;\n}\n.inputWrapper {\r\n  height: 32px;\r\n  width: 64px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  cursor: pointer;\r\n  /*Using a background color, but you can use a background image to represent a button*/\r\n  background-color: #ddf;\n}\n.fileInput {\r\n  cursor: pointer;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 99;\r\n  /*This makes the button huge. If you want a bigger button, increase the font size*/\r\n  font-size: 50px;\r\n  /*Opacity settings for all browsers*/\r\n  opacity: 0;\r\n  -moz-opacity: 0;\r\n  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);\n}\ninput[type=\"file\"] {\r\n  display: none;\n}\n.custom-file-upload {\r\n  background: #1479ff;\r\n  color: white;\r\n  display: inline-block;\r\n  padding: 6px 12px;\r\n  cursor: pointer;\n}\nobject,\r\niframe {\r\n  border: 3px solid #cecece;\r\n  background: #e9e9e9;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: scroll;\n}\nembed {\r\n  border: 3px solid #cecece;\r\n  background: #e9e9e9;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: scroll;\n}\n.permintaanTelaah :hover {\r\n  background-color: #ecf5ff;\r\n  cursor: pointer;\n}\r\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/password/gantiPassword.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/password/gantiPassword.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./gantiPassword.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/password/gantiPassword.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/permintaan.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/surat/permintaan.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./permintaan.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/permintaan.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/password/gantiPassword.vue?vue&type=template&id=54d9d59b&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/password/gantiPassword.vue?vue&type=template&id=54d9d59b& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _vm._m(1),
    _vm._v(" "),
    _c("div", { staticClass: "br-pagebody" }, [
      _c("div", { staticClass: "br-section-wrapper" }, [
        _c(
          "div",
          { staticClass: "col-lg-3" },
          [
            _c("div", { staticClass: "form-group" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.trim",
                    value: _vm.$v.password.$model,
                    expression: "$v.password.$model",
                    modifiers: { trim: true }
                  }
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.$v.password.$error },
                attrs: { type: "text", placeholder: "Ganti Password" },
                domProps: { value: _vm.$v.password.$model },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.$v.password,
                      "$model",
                      $event.target.value.trim()
                    )
                  },
                  blur: function($event) {
                    return _vm.$forceUpdate()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "el-button",
              {
                attrs: { type: "primary" },
                on: {
                  click: function($event) {
                    return _vm.gantiPassword()
                  }
                }
              },
              [_vm._v("simpan")]
            )
          ],
          1
        )
      ])
    ])
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
      { staticClass: "br-msg-header d-flex justify-content-between" },
      [
        _c("div", { staticClass: "pd-x-0 pd-t-30" }, [
          _c("h4", { staticClass: "tx-gray-800 mg-b-5" }, [
            _vm._v("Pergantian Hak Akses Pengguna Jasa")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mg-b-0" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-control-label" }, [
      _vm._v("\n            Password Baru:\n            "),
      _c("span", { staticClass: "tx-danger" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/perizinan/perusahaan/detail.vue?vue&type=template&id=21c162ea&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/perizinan/perusahaan/detail.vue?vue&type=template&id=21c162ea& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "loading",
                rawName: "v-loading",
                value: _vm.isLoading,
                expression: "isLoading"
              }
            ],
            staticClass: "card"
          },
          [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-7" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("span", { staticClass: "text-primary font-size-xs" }, [
                        _vm._v("Nama Perusahaa")
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-weight-bold" }, [
                        _vm._v(_vm._s(_vm.perusahaan.nama))
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-primary font-size-xs" }, [
                        _vm._v("Npwp")
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-weight-bold" }, [
                        _vm._v(_vm._s(_vm.perusahaan.npwp))
                      ]),
                      _vm._v(" "),
                      _c("br")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("span", { staticClass: "text-primary font-size-xs" }, [
                        _vm._v("Contact Person")
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-weight-bold" }, [
                        _vm._v(_vm._s(_vm.perusahaan.contact))
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-primary font-size-xs" }, [
                        _vm._v("Email")
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-weight-bold" }, [
                        _vm._v(_vm._s(_vm.perusahaan.email))
                      ]),
                      _vm._v(" "),
                      _c("br")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("span", { staticClass: "text-primary font-size-xs" }, [
                        _vm._v("Alamat")
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-weight-bold" }, [
                        _vm._v(_vm._s(_vm.perusahaan.alamat))
                      ]),
                      _vm._v(" "),
                      _c("br")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("span", { staticClass: "text-primary font-size-xs" }, [
                        _vm._v("Nama Pengurus")
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-weight-bold" }, [
                        _vm._v(_vm._s(_vm.pengurus.nama))
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-primary font-size-xs" }, [
                        _vm._v("Contact")
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-weight-bold" }, [
                        _vm._v(
                          _vm._s(_vm.pengurus.contact) +
                            " / " +
                            _vm._s(_vm.pengurus.email)
                        )
                      ]),
                      _vm._v(" "),
                      _c("br")
                    ])
                  ])
                ])
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _vm.rincian
            ? _c("permohonanList", { attrs: { npwp: _vm.npwp } })
            : _vm._e()
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal_large", tabindex: "-1" }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body" },
              [
                _c(
                  "el-form",
                  { ref: "perusahaan_form", attrs: { model: _vm.form } },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "form-group col-md-6" },
                        [
                          _c("label", [_vm._v("NPWP")]),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              attrs: {
                                prop: "npwp",
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
                                  placeholder: "NPWP Perusahaan",
                                  clearable: ""
                                },
                                model: {
                                  value: _vm.form.npwp,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "npwp", $$v)
                                  },
                                  expression: "form.npwp"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "form-group col-md-4" },
                        [
                          _c("label", [_vm._v("Kategori")]),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              attrs: {
                                prop: "kategori",
                                rules: {
                                  required: true,
                                  message: "field tidak boleh kosong",
                                  trigger: "blur"
                                }
                              }
                            },
                            [
                              _c(
                                "el-select",
                                {
                                  attrs: {
                                    clearable: "",
                                    placeholder: "Kategori Perusahaan"
                                  },
                                  model: {
                                    value: _vm.form.kategori,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "kategori", $$v)
                                    },
                                    expression: "form.kategori"
                                  }
                                },
                                _vm._l(_vm.select.status, function(item) {
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
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-md-8" },
                        [
                          _c("label", [_vm._v("Nama")]),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              attrs: {
                                prop: "nama",
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
                                  placeholder: "nama Perusahaan",
                                  clearable: ""
                                },
                                model: {
                                  value: _vm.form.nama,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "nama", $$v)
                                  },
                                  expression: "form.nama"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "form-group col-md-6" },
                        [
                          _c("label", [_vm._v("Email")]),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              attrs: {
                                prop: "email",
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
                                  placeholder: "Email Perusahaan",
                                  clearable: ""
                                },
                                model: {
                                  value: _vm.form.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "email", $$v)
                                  },
                                  expression: "form.email"
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
                        { staticClass: "form-group col-md-6" },
                        [
                          _c("label", [_vm._v("Hp / Telp")]),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              attrs: {
                                prop: "contact",
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
                                  placeholder: "HP / Telp Perusahaan",
                                  clearable: ""
                                },
                                model: {
                                  value: _vm.form.contact,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "contact", $$v)
                                  },
                                  expression: "form.contact"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "form-group col-md-8" },
                        [
                          _c("label", [_vm._v("Alamat")]),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              attrs: {
                                prop: "alamat",
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
                                  type: "textarea",
                                  placeholder: "Alamat Perusahaan",
                                  clearable: ""
                                },
                                model: {
                                  value: _vm.form.alamat,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "alamat", $$v)
                                  },
                                  expression: "form.alamat"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "form-group col-md-2" },
                          [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Active")
                            ]),
                            _vm._v(" "),
                            _c(
                              "el-tooltip",
                              {
                                attrs: { content: "active", placement: "top" }
                              },
                              [
                                _c("el-switch", {
                                  attrs: {
                                    "active-color": "#13ce66",
                                    "inactive-color": "#ff4949",
                                    "active-value": "true",
                                    "inactive-value": "false"
                                  },
                                  model: {
                                    value: _vm.form.aktif,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "aktif", $$v)
                                    },
                                    expression: "form.aktif"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-link",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn bg-primary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.submitForm()
                    }
                  }
                },
                [_vm._v("Simpan")]
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
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("DATA PERUSAHAAN")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("×")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/perizinan/perusahaan/permohonanList.vue?vue&type=template&id=f2e3dd28&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/perizinan/perusahaan/permohonanList.vue?vue&type=template&id=f2e3dd28& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
          _c("el-table-column", {
            attrs: {
              prop: "izin.nama_izin",
              label: "Nama Izin",
              "header-align": "center"
            }
          }),
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
                  prop: "jam",
                  label: "jam",
                  align: "center",
                  width: "60"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { align: "right" },
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
                    _c(
                      "el-button",
                      {
                        attrs: { size: "mini", type: "success" },
                        on: {
                          click: function($event) {
                            return _vm.edit(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v("Routing Slip")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: { size: "mini" },
                        on: {
                          click: function($event) {
                            return _vm.edit(scope.$index, scope.row)
                          }
                        }
                      },
                      [_vm._v("Detail")]
                    )
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
}
var staticRenderFns = []
render._withStripped = true



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
                                  name: "bo-surat-rekomendasi-permintaan",
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
                                  name: "bo-surat-rekomendasi-permintaan",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/permintaan.vue?vue&type=template&id=7e53c8c6&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/surat/permintaan.vue?vue&type=template&id=7e53c8c6& ***!
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
  return _vm.permission
    ? _c(
        "div",
        { staticClass: "br-pagebody" },
        [
          _c(
            "div",
            { staticClass: "pd-x-20 pd-sm-x-30 pd-t-20 pd-sm-t-30" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex align-items-center justify-content-between"
                },
                [
                  _vm.user.role && _vm.user.role.role_id == "2"
                    ? _c("div", [
                        _c(
                          "h4",
                          { staticClass: "tx-gray-800 mg-b-5 tx-bold" },
                          [
                            _vm._v(
                              "\n          PENGIRIMAN PERMINTAAN SURAT TELAAH\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mg-b-0" }, [
                          _vm._v(_vm._s(_vm.user.role.role))
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.user.role && _vm.user.role.role_id == "4"
                    ? _c("div", [
                        _c(
                          "h4",
                          { staticClass: "tx-gray-800 mg-b-5 tx-bold" },
                          [
                            _vm._v(
                              "\n          PENGIRIMAN SURAT REKOMENDASI\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mg-b-0" }, [
                          _vm._v(_vm._s(_vm.user.role.role))
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "wd-230 tx-right" },
                    [
                      _vm.user.role.role_id == 2
                        ? _c(
                            "router-link",
                            { attrs: { to: { name: "bo-dashboard" } } },
                            [
                              _c("el-button", { attrs: { type: "primary" } }, [
                                _vm._v("Dashbord")
                              ])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.user.role.role_id == 4
                        ? _c(
                            "router-link",
                            { attrs: { to: { name: "opd-dashboard" } } },
                            [
                              _c("el-button", { attrs: { type: "primary" } }, [
                                _vm._v("Dashbord")
                              ])
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "el-row",
                { staticClass: "mg-t-20 pd-t-20" },
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
                      ],
                      staticClass: "mg-t-10 pd-t-10",
                      staticStyle: {
                        "border-radius": "5px",
                        "min-height": "300px"
                      },
                      attrs: { "body-style": { padding: "0px" } }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "clearfix",
                          attrs: { slot: "header" },
                          slot: "header"
                        },
                        [
                          _c(
                            "el-button",
                            {
                              staticStyle: { float: "right", padding: "3px 0" },
                              attrs: { type: "text" }
                            },
                            [
                              _vm.permohonan.perusahaan
                                ? _c("span", { staticClass: "tx-20 tx-bold" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.permohonan.perusahaan.fullname.toUpperCase()
                                      )
                                    )
                                  ])
                                : _vm._e()
                            ]
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
                            { attrs: { md: 3 } },
                            [
                              _c(
                                "el-menu",
                                {
                                  staticClass: "el-menu-vertical-demo",
                                  attrs: { "default-active": "1" }
                                },
                                [
                                  _c(
                                    "el-menu-item",
                                    {
                                      attrs: { index: "1" },
                                      on: {
                                        click: function($event) {
                                          ;(_vm.wrap.inbox = true),
                                            (_vm.wrap.sent = false)
                                        }
                                      }
                                    },
                                    [
                                      _c("ion-icon", {
                                        staticClass: "tx-30",
                                        attrs: {
                                          name: "file-tray-full-outline"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          attrs: { slot: "title" },
                                          slot: "title"
                                        },
                                        [
                                          _vm._v(
                                            "\n                  Surat Masuk\n                  "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-menu-item",
                                    {
                                      attrs: { index: "2" },
                                      on: {
                                        click: function($event) {
                                          ;(_vm.wrap.inbox = false),
                                            (_vm.wrap.sent = true)
                                        }
                                      }
                                    },
                                    [
                                      _c("ion-icon", {
                                        staticClass: "tx-30 tx-success",
                                        attrs: { name: "checkbox-outline" }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          attrs: { slot: "title" },
                                          slot: "title"
                                        },
                                        [_vm._v("Surat keluar")]
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
                            { attrs: { md: 21 } },
                            [
                              _vm.sent.length == 0 && _vm.role_id == 2
                                ? _c(
                                    "el-row",
                                    [
                                      _c(
                                        "center",
                                        { staticClass: "pd-t-50" },
                                        [
                                          _c("h1", [
                                            _vm._v("Surat Belum Di Kirim")
                                          ]),
                                          _vm._v(" "),
                                          JSON.parse(_vm.permission.create)
                                            ? _c(
                                                "el-button",
                                                {
                                                  attrs: {
                                                    type: "primary",
                                                    icon: "el-icon-edit",
                                                    round: ""
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.openDrawer()
                                                    }
                                                  }
                                                },
                                                [_vm._v("Tulis Pesan")]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "el-row",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.wrap.inbox,
                                      expression: "wrap.inbox"
                                    }
                                  ]
                                },
                                [
                                  _c(
                                    "el-col",
                                    {
                                      staticClass: "permintaanTelaah",
                                      attrs: { md: 5 }
                                    },
                                    _vm._l(_vm.inbox, function(inbox, ib) {
                                      return _c(
                                        "div",
                                        {
                                          key: ib,
                                          staticClass:
                                            "pd-30 d-flex align-items-center bd-r bd-3 bd-primary",
                                          on: {
                                            click: function($event) {
                                              return _vm.openView(
                                                inbox.surat_permintaan_id
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("ion-icon", {
                                            staticClass: "tx-50 tx-primary",
                                            attrs: { name: "layers-outline" }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "mg-l-20" },
                                            [
                                              _vm.role_id == "2"
                                                ? _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "tx-20 tx-lato tx-bold mg-b-2 lh-1"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                      Dinas " +
                                                          _vm._s(
                                                            inbox.opd.opd
                                                          ) +
                                                          "\n                    "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.role_id == "4"
                                                ? _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "tx-20 tx-lato tx-bold mg-b-2 lh-1"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                      DPMPTSP\n                    "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              inbox.opd
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "tx-11 tx-roboto tx-primary"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(inbox.waktuHuman)
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    }),
                                    0
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-col",
                                    {
                                      staticStyle: { background: "#f9f9f9" },
                                      attrs: { md: 19 }
                                    },
                                    [
                                      _vm.view
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex align-items-center justify-content-between pd-20"
                                            },
                                            [
                                              _c(
                                                "div",
                                                [
                                                  _c(
                                                    "h6",
                                                    {
                                                      staticClass:
                                                        "tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                      Nomor   : " +
                                                          _vm._s(
                                                            _vm.view.nomor
                                                          ) +
                                                          "\n                    "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "mg-b-10 tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                      Perihal : " +
                                                          _vm._s(
                                                            _vm.view.perihal
                                                          ) +
                                                          "\n                    "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  JSON.parse(
                                                    _vm.permission.create
                                                  )
                                                    ? _c(
                                                        "el-button",
                                                        {
                                                          staticClass:
                                                            "pd-t-10",
                                                          attrs: {
                                                            type: "primary",
                                                            size: "mini",
                                                            icon: "el-icon-view"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.pratinjauBerkasPermintaan()
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm.view.kategori == 2
                                                            ? _c("span", [
                                                                _vm._v(
                                                                  "Berkas Rekomendasi Teknis"
                                                                )
                                                              ])
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _vm.view.kategori == 1
                                                            ? _c("span", [
                                                                _vm._v(
                                                                  "Berkas Surat Permintaan"
                                                                )
                                                              ])
                                                            : _vm._e()
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c(
                                                    "router-link",
                                                    {
                                                      attrs: {
                                                        to: {
                                                          name:
                                                            "bo-permohonan-detail",
                                                          params: {
                                                            id: this.permohonan
                                                              .permohonan_id
                                                          }
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "mg-l-10"
                                                        },
                                                        [
                                                          _c(
                                                            "el-button",
                                                            {
                                                              attrs: {
                                                                type: "text"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Berkas persyaratan"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("i", {
                                                            staticClass:
                                                              "icon ion-more tx-18 lh-0"
                                                          })
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
                                                "div",
                                                { staticClass: "wd-230" },
                                                [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "mg-b-0 tx-8 tx-primary tx-uppercase tx-semibold tx-spacing-1"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                      Tanggal Kirim\n                    "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "mg-b-0 tx-15 tx-uppercase tx-inverse tx-semibold tx-spacing-1"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                      " +
                                                          _vm._s(
                                                            _vm.view.created_at
                                                          ) +
                                                          "\n                      "
                                                      ),
                                                      _c("el-button", {
                                                        staticClass: "pd-t-10",
                                                        attrs: {
                                                          type: "text",
                                                          size: "mini",
                                                          icon: "el-icon-info"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.openSuratTrack()
                                                          }
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.view && _vm.sent.length == 0
                                        ? _c(
                                            "div",
                                            [
                                              _c(
                                                "el-divider",
                                                {
                                                  attrs: {
                                                    "content-position": "right"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "Balasan Surat " +
                                                      _vm._s(_vm.view.perihal)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "center",
                                                [
                                                  JSON.parse(
                                                    _vm.permission.create
                                                  )
                                                    ? _c(
                                                        "el-button",
                                                        {
                                                          attrs: {
                                                            type: "primary",
                                                            icon:
                                                              "el-icon-edit",
                                                            round: ""
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.openDrawer()
                                                            }
                                                          }
                                                        },
                                                        [_vm._v("Tulis Pesan")]
                                                      )
                                                    : _vm._e()
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "el-row",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.wrap.sent,
                                      expression: "wrap.sent"
                                    }
                                  ]
                                },
                                [
                                  _vm.sent.length > 0
                                    ? _c(
                                        "el-table",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: { data: _vm.sent }
                                        },
                                        [
                                          _c("el-table-column", {
                                            attrs: {
                                              type: "index",
                                              width: "50"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("el-table-column", {
                                            attrs: {
                                              prop: "nomor",
                                              label: "Nomor",
                                              width: "180"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("el-table-column", {
                                            attrs: {
                                              prop: "perihal",
                                              label: "perihal",
                                              width: "180"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("el-table-column", {
                                            attrs: {
                                              prop: "waktuHuman",
                                              label: "Tanggal Kirim",
                                              width: "180"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("el-table-column", {
                                            attrs: {
                                              prop: "berkas",
                                              label: "Berkas"
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function(scope) {
                                                    return [
                                                      _c(
                                                        "a",
                                                        {
                                                          attrs: {
                                                            href:
                                                              _vm.url
                                                                .suratpermintaan +
                                                              "/" +
                                                              _vm.permohonan
                                                                .perusahaan
                                                                .npwp +
                                                              "/" +
                                                              _vm.permohonan
                                                                .permohonan_code +
                                                              "/surat/" +
                                                              scope.row.file,
                                                            target: "_blank"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Surat Permintaan"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              false,
                                              1758621763
                                            )
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e()
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
          _c(
            "div",
            { staticClass: "modal zoomIn", attrs: { id: "modalShow" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "modal-dialog modal-lg modal-dialog-vertical-center",
                  attrs: { role: "document" }
                },
                [
                  _c("div", { staticClass: "modal-content bd-0 tx-14" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body pd-25" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-12" },
                          _vm._l(_vm.petugas, function(petugas, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                                staticClass:
                                  "d-flex align-items-center justify-content-between mg-b-5"
                              },
                              [
                                _c("div", [
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "tx-gray-800 tx-12 mg-b-2 tx-bold"
                                    },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(
                                            petugas.kategori.toUpperCase()
                                          ) +
                                          "\n                  "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    { staticClass: "tx-gray-800 tx-10 mg-b-0" },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(petugas.created_at) +
                                          "\n                  "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "wd-230 tx-right" },
                                  [
                                    _c(
                                      "el-button",
                                      { attrs: { type: "text" } },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            petugas.petugas.name.toUpperCase()
                                          )
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(1)
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "el-drawer",
            {
              attrs: {
                title: "Tulis Pesan Pengiriman Permintaan Surat Telaah",
                size: "70%",
                visible: _vm.drawer.show,
                direction: "ttb",
                "before-close": _vm.handleClose
              },
              on: {
                "update:visible": function($event) {
                  return _vm.$set(_vm.drawer, "show", $event)
                }
              }
            },
            [
              _c(
                "el-row",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: _vm.pratinjau.isLoading,
                      expression: "pratinjau.isLoading"
                    }
                  ],
                  staticClass: "pd-20",
                  attrs: {
                    gutter: 20,
                    "element-loading-text":
                      "Uploading & kirim Surat Permintaan..."
                  }
                },
                [
                  _c("el-col", { attrs: { md: 4 } }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "form-control-label" }, [
                        _vm._v("\n            Nomor Surat:\n            "),
                        _c("span", { staticClass: "tx-danger" }, [_vm._v("*")])
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.$v.permintaan.nomor.$model,
                            expression: "$v.permintaan.nomor.$model"
                          }
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.$v.permintaan.nomor.$error },
                        attrs: {
                          type: "text",
                          placeholder: "Ketik Nomor Surat"
                        },
                        domProps: { value: _vm.$v.permintaan.nomor.$model },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.permintaan.nomor,
                              "$model",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("el-col", { attrs: { md: 7 } }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "form-control-label" }, [
                        _vm._v("\n            Perihal:\n            "),
                        _c("span", { staticClass: "tx-danger" }, [_vm._v("*")])
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.$v.permintaan.perihal.$model,
                            expression: "$v.permintaan.perihal.$model"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.$v.permintaan.perihal.$error
                        },
                        attrs: {
                          type: "text",
                          placeholder: "ketik Perihal Surat"
                        },
                        domProps: { value: _vm.$v.permintaan.perihal.$model },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.permintaan.perihal,
                              "$model",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.user.role_id == "4"
                    ? _c("el-col", { attrs: { md: 4 } }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "form-control-label" }, [
                            _vm._v(
                              "\n            Kategori Balasan Surat:\n            "
                            ),
                            _c("span", { staticClass: "tx-danger" }, [
                              _vm._v("*")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.$v.permintaan.keterangan.$model,
                                  expression: "$v.permintaan.keterangan.$model"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid":
                                  _vm.$v.permintaan.keterangan.$error
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Ketik Nomor Surat"
                              },
                              on: {
                                input: _vm.$v.permintaan.keterangan.$touch,
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.$v.permintaan.keterangan,
                                    "$model",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                {
                                  attrs: { value: "", label: "Pilih Kategori" }
                                },
                                [_vm._v("pilih Kategori")]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "terima" } }, [
                                _vm._v("Terima")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "tolak" } }, [
                                _vm._v("Tolak")
                              ])
                            ]
                          )
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("el-col", { attrs: { md: 4 } }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c(
                          "label",
                          {
                            directives: [
                              {
                                name: "loading",
                                rawName: "v-loading",
                                value: _vm.pratinjau.isLoading,
                                expression: "pratinjau.isLoading"
                              }
                            ],
                            staticClass: "form-control-label"
                          },
                          [
                            _vm._v(
                              "\n            Unggah Surat Permintaan:\n            "
                            ),
                            _c("span", { staticClass: "tx-danger" }, [
                              _vm._v("*")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-file-upload",
                            attrs: { for: "permintaan" }
                          },
                          [
                            _c("i", { staticClass: "fa fa-cloud-upload" }),
                            _vm._v(" Unggah Berkas\n          ")
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          attrs: { id: "permintaan", type: "file" },
                          on: {
                            change: function($event) {
                              return _vm.onFilesChange($event)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.pratinjau.objectURL
                          ? _c(
                              "el-button",
                              {
                                on: {
                                  click: function($event) {
                                    _vm.drawer.innerDrawer = true
                                  }
                                }
                              },
                              [_vm._v("Pratinjau")]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("el-col", { attrs: { md: 24 } }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "primary" },
                            on: {
                              click: function($event) {
                                return _vm.submit()
                              }
                            }
                          },
                          [_vm._v("Kirim Surat")]
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-drawer",
                {
                  attrs: {
                    title: "File Surat Permintaan Surat Telaah",
                    "append-to-body": true,
                    size: "100%",
                    visible: _vm.drawer.innerDrawer
                  },
                  on: {
                    "update:visible": function($event) {
                      return _vm.$set(_vm.drawer, "innerDrawer", $event)
                    }
                  }
                },
                [_c("embed", { attrs: { src: _vm.pratinjau.objectURL } })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-drawer",
            {
              attrs: {
                title: _vm.drawer.title,
                "append-to-body": true,
                size: "100%",
                "before-close": _vm.closeDrawer,
                visible: _vm.drawer.pratinjauSurat
              },
              on: {
                "update:visible": function($event) {
                  return _vm.$set(_vm.drawer, "pratinjauSurat", $event)
                }
              }
            },
            [_c("embed", { attrs: { src: _vm.pratinjau.objectURL } })]
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header pd-y-20 pd-x-25" }, [
      _c(
        "h6",
        { staticClass: "tx-14 mg-b-0 tx-uppercase tx-inverse tx-bold" },
        [_vm._v("\n            Informasi Surat\n          ")]
      ),
      _vm._v(" "),
      _c(
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
          staticClass:
            "btn btn-secondary tx-11 tx-uppercase pd-y-12 pd-x-25 tx-mont tx-medium",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("\n            Tutup\n          ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/password/gantiPassword.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/password/gantiPassword.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gantiPassword_vue_vue_type_template_id_54d9d59b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gantiPassword.vue?vue&type=template&id=54d9d59b& */ "./resources/js/components/password/gantiPassword.vue?vue&type=template&id=54d9d59b&");
/* harmony import */ var _gantiPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gantiPassword.vue?vue&type=script&lang=js& */ "./resources/js/components/password/gantiPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _gantiPassword_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gantiPassword.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/password/gantiPassword.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _gantiPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gantiPassword_vue_vue_type_template_id_54d9d59b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gantiPassword_vue_vue_type_template_id_54d9d59b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/password/gantiPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/password/gantiPassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/password/gantiPassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gantiPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./gantiPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/password/gantiPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gantiPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/password/gantiPassword.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/password/gantiPassword.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gantiPassword_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./gantiPassword.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/password/gantiPassword.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gantiPassword_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gantiPassword_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gantiPassword_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gantiPassword_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gantiPassword_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/password/gantiPassword.vue?vue&type=template&id=54d9d59b&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/password/gantiPassword.vue?vue&type=template&id=54d9d59b& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gantiPassword_vue_vue_type_template_id_54d9d59b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./gantiPassword.vue?vue&type=template&id=54d9d59b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/password/gantiPassword.vue?vue&type=template&id=54d9d59b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gantiPassword_vue_vue_type_template_id_54d9d59b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gantiPassword_vue_vue_type_template_id_54d9d59b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/perizinan/perusahaan/detail.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/perizinan/perusahaan/detail.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_21c162ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=21c162ea& */ "./resources/js/components/perizinan/perusahaan/detail.vue?vue&type=template&id=21c162ea&");
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ "./resources/js/components/perizinan/perusahaan/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_21c162ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_21c162ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/perizinan/perusahaan/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/perizinan/perusahaan/detail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/perizinan/perusahaan/detail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/perizinan/perusahaan/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/perizinan/perusahaan/detail.vue?vue&type=template&id=21c162ea&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/perizinan/perusahaan/detail.vue?vue&type=template&id=21c162ea& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_21c162ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=21c162ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/perizinan/perusahaan/detail.vue?vue&type=template&id=21c162ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_21c162ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_21c162ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/perizinan/perusahaan/permohonanList.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/perizinan/perusahaan/permohonanList.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _permohonanList_vue_vue_type_template_id_f2e3dd28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permohonanList.vue?vue&type=template&id=f2e3dd28& */ "./resources/js/components/perizinan/perusahaan/permohonanList.vue?vue&type=template&id=f2e3dd28&");
/* harmony import */ var _permohonanList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permohonanList.vue?vue&type=script&lang=js& */ "./resources/js/components/perizinan/perusahaan/permohonanList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _permohonanList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _permohonanList_vue_vue_type_template_id_f2e3dd28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _permohonanList_vue_vue_type_template_id_f2e3dd28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/perizinan/perusahaan/permohonanList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/perizinan/perusahaan/permohonanList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/perizinan/perusahaan/permohonanList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_permohonanList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./permohonanList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/perizinan/perusahaan/permohonanList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_permohonanList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/perizinan/perusahaan/permohonanList.vue?vue&type=template&id=f2e3dd28&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/perizinan/perusahaan/permohonanList.vue?vue&type=template&id=f2e3dd28& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_permohonanList_vue_vue_type_template_id_f2e3dd28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./permohonanList.vue?vue&type=template&id=f2e3dd28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/perizinan/perusahaan/permohonanList.vue?vue&type=template&id=f2e3dd28&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_permohonanList_vue_vue_type_template_id_f2e3dd28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_permohonanList_vue_vue_type_template_id_f2e3dd28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/components/surat/permintaan.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/surat/permintaan.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _permintaan_vue_vue_type_template_id_7e53c8c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permintaan.vue?vue&type=template&id=7e53c8c6& */ "./resources/js/components/surat/permintaan.vue?vue&type=template&id=7e53c8c6&");
/* harmony import */ var _permintaan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permintaan.vue?vue&type=script&lang=js& */ "./resources/js/components/surat/permintaan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _permintaan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permintaan.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/surat/permintaan.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _permintaan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _permintaan_vue_vue_type_template_id_7e53c8c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _permintaan_vue_vue_type_template_id_7e53c8c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/surat/permintaan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/surat/permintaan.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/surat/permintaan.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_permintaan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./permintaan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/permintaan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_permintaan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/surat/permintaan.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/surat/permintaan.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_permintaan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./permintaan.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/permintaan.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_permintaan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_permintaan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_permintaan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_permintaan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_permintaan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/surat/permintaan.vue?vue&type=template&id=7e53c8c6&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/surat/permintaan.vue?vue&type=template&id=7e53c8c6& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_permintaan_vue_vue_type_template_id_7e53c8c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./permintaan.vue?vue&type=template&id=7e53c8c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/surat/permintaan.vue?vue&type=template&id=7e53c8c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_permintaan_vue_vue_type_template_id_7e53c8c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_permintaan_vue_vue_type_template_id_7e53c8c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);