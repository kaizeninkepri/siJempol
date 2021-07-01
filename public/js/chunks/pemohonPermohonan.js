(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pemohonPermohonan"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login/login.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/login/login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var element_ui_lib_theme_chalk_display_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! element-ui/lib/theme-chalk/display.css */ "./node_modules/element-ui/lib/theme-chalk/display.css");
/* harmony import */ var element_ui_lib_theme_chalk_display_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_display_css__WEBPACK_IMPORTED_MODULE_0__);
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
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      url: {
        pendaftaran: _js_url__WEBPACK_IMPORTED_MODULE_1__["default"].web + '/pendaftaran'
      },
      account: {
        email: null,
        password: null
      },
      button: {
        text: 'Login',
        isLoading: false
      },
      error: false
    };
  },
  methods: {
    ToLogin: function ToLogin() {
      var _this = this;

      this.button.text = "Memuat Halaman", this.button.isLoading = true;
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_1__["default"].web + "/login/submit", {
        email: this.account.email,
        password: this.account.password
      }).then(function (r) {
        console.log(r.data);
        r.data.code == '200' ? _this.OnSuccessLogin(r.data) : _this.OnErrorLogin();
      });
    },
    OnErrorLogin: function OnErrorLogin() {
      this.account.password = null;
      this.button.isLoading = false;
      this.button.text = 'login';
      this.error = true;
    },
    OnSuccessLogin: function OnSuccessLogin(url) {
      window.location.href = _js_url__WEBPACK_IMPORTED_MODULE_1__["default"].web + '/' + url.url;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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



var form = function form() {
  return Promise.all(/*! import() | modulForm */[__webpack_require__.e("vendors~Users~modulForm~pemohonPermohonan~roles~surat"), __webpack_require__.e("modulForm")]).then(__webpack_require__.bind(null, /*! @/js/components/roles/modul_form */ "./resources/js/components/roles/modul_form.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      page: {
        title: "DASHBOARD",
        subtitle: "DPMPTSP",
        show: true,
        isLoading: true
      },
      steps: {
        pertama: "tx-primary",
        kedua: "",
        ketiga: ""
      },
      izin: {},
      permohonan: {
        pengurus: {
          perusahaanp_id: null,
          nama: null,
          contact: null,
          email: null,
          perusahaan_id: null,
          identitas_no: null,
          identitas_kategori: "KTP"
        }
      }
    };
  },
  validations: {
    permohonan: {
      pengurus: {
        nama: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        email: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        contact: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        identitas_no: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        }
      }
    }
  },
  mounted: function mounted() {
    this.$parent.collpasedmenu();
    this.page.isLoading = false;
  },
  created: function created() {
    this.GetNamaizin();
  },
  methods: {
    GetNamaizin: function GetNamaizin() {
      var _this = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/opd/izin", {
        type: "izinById",
        id: this.$route.params.id
      }).then(function (r) {
        // console.log(r.data),
        _this.izin = r.data;
      });
    },
    toDatabase: function toDatabase() {
      var _this2 = this;

      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.page.isLoading = true;
        this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/pemohon", {
          type: "insertPermohonan",
          form: this.permohonan,
          peryaratan: this.izin.persyaratan,
          izin: this.izin
        }).then(function (r) {
          return _this2.$router.push({
            name: "pemohon-pengajuan-step",
            params: {
              id: r.data
            }
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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



var form = function form() {
  return Promise.all(/*! import() | modulForm */[__webpack_require__.e("vendors~Users~modulForm~pemohonPermohonan~roles~surat"), __webpack_require__.e("modulForm")]).then(__webpack_require__.bind(null, /*! @/js/components/roles/modul_form */ "./resources/js/components/roles/modul_form.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pratinjau: {
        preview: false,
        objectURL: null,
        title: null
      },
      page: {
        title: "DASHBOARD",
        subtitle: "DPMPTSP",
        show: true,
        isLoading: true
      },
      steps: {
        pertama: "tx-success",
        kedua: "tx-primary",
        ketiga: ""
      },
      izin: {},
      permohonan: {
        pemohon: {
          perusahaanp_id: null,
          nama: null,
          contact: null,
          email: null,
          perusahaan_id: null,
          identitas_no: null,
          identitas_kategori: "KTP"
        },
        persyaratan: []
      },
      queue: []
    };
  },
  validations: {
    permohonan: {
      pemohon: {
        nama: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        email: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        contact: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        identitas_no: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        }
      }
    }
  },
  mounted: function mounted() {
    this.page.isLoading = false;
    this.$parent.justcollpasedmenu();
  },
  created: function created() {
    this.GetPengajuan();
  },
  computed: {
    kirimptsp: function kirimptsp() {
      var terisi = 0;
      var total = 0;
      this.permohonan.persyaratan.forEach(function (c) {
        if (c.status == "uploaded") {
          terisi = terisi + 1;
        }

        total = total + 1;
      });

      if (terisi == total) {
        this.steps.kedua = "tx-success";
        this.steps.ketiga = "tx-primary";
        return true;
      } else {
        this.steps.kedua = "tx-primary";
        this.steps.ketiga = "";
        return false;
      }
    },
    uploadedCek: function uploadedCek() {
      var terisi = 0;
      var total = 0;
      this.permohonan.persyaratan.forEach(function (c) {
        if (c.status != null) {
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
    checkPersyaratanUpload: function checkPersyaratanUpload() {
      this.permohonan.persyaratan.forEach(function (e) {
        if (e.file != null) {
          e.classBind = "";
        } else {
          e.classBind = "errorUpload";
        }
      });
    },
    onFilesChange: function onFilesChange(event, r) {
      var _this = this;

      this.queue.push(r);
      var fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);

      fileReader.onload = function (e) {
        _this.permohonan.persyaratan[r].file = e.target.result;
        _this.permohonan.persyaratan[r].ionClass = true;
        _this.permohonan.persyaratan[r].classBind = "";
        _this.permohonan.persyaratan[r].upload = true;
      };
    },
    GetPengajuan: function GetPengajuan() {
      var _this2 = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/pemohon", {
        type: "pengajuanById",
        id: this.$route.params.id
      }).then(function (r) {
        return _this2.permohonan = r.data;
      });
    },
    checkUpload: function checkUpload() {
      var que = this.queue;
      var length = this.queue.length; // console.log(que.length)

      if (length > 0) {
        this.UploadFIle(que[0]);
      } else {
        this.checkPersyaratanUpload();
      }
    },
    UploadFIle: function UploadFIle(i) {
      var _this3 = this;

      this.permohonan.persyaratan[i].progress = true;
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/pemohon", {
        type: "uploadFile",
        persyaratan: this.permohonan.persyaratan[i],
        permohonanCode: this.permohonan.permohonan_code,
        permohonan_id: this.permohonan.permohonan_id,
        perusahaan: this.permohonan.perusahaan
      }).then(function (r) {
        _this3.$delete(_this3.queue, 0), _this3.checkUpload(), _this3.permohonan.persyaratan[i].progress = false;
        _this3.permohonan.persyaratan[i].upload = false;
        _this3.permohonan.persyaratan[i].pratinjau = true;
        _this3.permohonan.persyaratan[i].file = r.data.file;
        _this3.permohonan.persyaratan[i].status = r.data.status;
      });
    },
    DeleteFIle: function DeleteFIle(i) {
      var _this4 = this;

      this.permohonan.persyaratan[i].progress = true;
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/pemohon", {
        type: "deleteFile",
        persyaratan: this.permohonan.persyaratan[i],
        permohonanCode: this.permohonan.permohonan_code,
        permohonan_id: this.permohonan.permohonan_id,
        perusahaan: this.permohonan.perusahaan
      }).then(function (r) {
        _this4.permohonan.persyaratan[i].progress = false;
        _this4.permohonan.persyaratan[i].pratinjau = false;
        _this4.permohonan.persyaratan[i].ionClass = false;
        _this4.permohonan.persyaratan[i].file = r.data.file;
        _this4.permohonan.persyaratan[i].status = r.data.status;
      });
    },
    OpenPratinjau: function OpenPratinjau(i) {
      this.pratinjau.preview = true;
      this.pratinjau.title = this.permohonan.persyaratan[i].persyaratan;
      this.pratinjau.objectURL = _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].assets + "/" + this.permohonan.perusahaan.npwp + "/" + this.permohonan.permohonan_code + "/persyaratan/" + this.permohonan.persyaratan[i].file;
    },
    kirimPengajuan: function kirimPengajuan() {
      var _this5 = this;

      this.$confirm("Kirim Permohonan ?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "info"
      }).then(function () {
        _this5.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/pemohon", {
          type: "kirimtoptsp",
          permohonan_id: _this5.permohonan.permohonan_id
        }).then(function (r) {
          return _this5.$notify({
            title: "Success",
            message: "File Berhasil Di kirim",
            type: "success"
          });
        }, _this5.$router.push({
          name: "pemohon-dashboard"
        }));
      })["catch"](function () {
        _this5.$message({
          type: "info",
          message: "Pengajuan di batalkan"
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: {
        submit: false
      },
      KategoriBadanUsaha: [{
        nama: "PT"
      }, {
        nama: "CV"
      }, {
        nama: "FIRMA"
      }, {
        nama: "PERDDATA"
      }, {
        nama: "KOMANDITER"
      }, {
        nama: "NEGARA UMUM"
      }, {
        nama: "YAYASAN"
      }, {
        nama: "KELOMPOK MASYARAKAT"
      }],
      colors: [{
        color: "#f56c6c",
        percentage: 20
      }, {
        color: "#e6a23c",
        percentage: 40
      }, {
        color: "#6f7ad3",
        percentage: 60
      }, {
        color: "#1989fa",
        percentage: 80
      }, {
        color: "#5cb87a",
        percentage: 100
      }],
      queue: [],
      url: {
        assets: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].publicData
      },
      jenisshow: true,
      perusahaan: {
        npwp: null,
        perusahaan_code: null,
        kategori: null,
        jenis: null,
        nama: null,
        alamat: null,
        email: null,
        contact: null,
        create_on: "mandiri",
        provinsi: null,
        kota: null,
        kode_pos: null
      },
      user: {
        email: null,
        password: null,
        is_active: false,
        role_id: 5,
        repeatPassword: null
      },
      upload: [{
        name: "Nomor Pokok Wajib Pajak",
        nameFile: "Unggah Berkas NPWP",
        praname: "Unggah Berkas NPWP",
        type: null,
        size: 0,
        objectURL: null,
        id: "npwp",
        button: false,
        files: null,
        css: null,
        fileTemp: null,
        progressBar: 0
      }, {
        name: "NIB OSS",
        nameFile: "Unggah Berkas NIB",
        praname: "Unggah Berkas NIB",
        type: null,
        size: 0,
        objectURL: null,
        id: "nib",
        button: false,
        files: null,
        css: null,
        fileTemp: null,
        progressBar: 0
      }, {
        name: "Izin Usaha / KBLI",
        nameFile: "Unggah Berkas Izin Usaha / KBLI",
        praname: "Unggah Berkas Izin Usaha / KBLI",
        type: null,
        size: 0,
        objectURL: null,
        id: "kbli",
        button: false,
        files: null,
        css: null,
        fileTemp: null,
        progressBar: 0
      }],
      submitStatus: null
    };
  },
  validations: {
    perusahaan: {
      npwp: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(20)
      },
      kategori: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      nama: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      alamat: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      contact: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      provinsi: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      kota: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      jenis: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      kode_pos: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      }
    },
    user: {
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      password: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      repeatPassword: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        sameAsPassword: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["sameAs"])("password")
      }
    }
  },
  watch: {
    // whenever question changes, this function will run
    "perusahaan.email": function perusahaanEmail(oldQuestion) {
      this.user.email = oldQuestion;
    }
  },
  methods: {
    CheckValidationEmail: function CheckValidationEmail() {
      var _this = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/pendaftaran/validation/email", {
        data: this.perusahaan.email
      }).then(function (r) {
        r.data.code == 500 ? (_this.$message.error("Email : " + r.data.text + " Sudah Terdaftar. Silahkan Gunakan Email Yang Lain"), _this.perusahaan.email = null) : null;
      });
    },
    ToPenelitianForm: function ToPenelitianForm() {
      window.location.href = _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + '/pendaftaran/penelitian';
    },
    kategoriAction: function kategoriAction() {
      if (this.perusahaan.kategori == 'perorangan') {
        this.perusahaan.jenis = 'pt';
        this.jenisshow = false;
      } else if (this.perusahaan.kategori == 'penelitian') {
        this.ToPenelitianForm();
      } else {
        this.jenisshow = true;
      }
    },
    pushToSelesai: function pushToSelesai() {
      location.href = _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/pendaftaran/selesai?npwp=" + this.perusahaan.npwp;
    },
    changeFile: function changeFile(i, event) {
      var _this2 = this;

      if (this.objectURL) {
        URL.revokeObjectURL(this.objectURL);
      }

      var file = event.target.files[0];

      if (file.size > 2097152) {
        this.$message.error("File Upload terlalu besar, Maksimal 2 MB");
        return;
      }

      this.queue.push(i);
      this.upload[i].nameFile = file.name;
      this.upload[i].type = file.type;
      this.upload[i].size = file.size;
      this.upload[i].fileTemp = file;
      this.upload[i].objectURL = URL.createObjectURL(file);
      this.upload[i].button = true;
      this.upload[i].praname = this.upload[i].nameFile.substring(0, 60) + "...";
      this.upload[i].css = "custom-file-upload-success";
      var fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);

      fileReader.onload = function (e) {
        _this2.upload[i].files = e.target.result;
      };
    },
    CheckUpload: function CheckUpload() {
      this.empty = [];

      for (var i = 0; i < this.upload.length; i++) {
        if (this.upload[i].files == null) {
          this.empty.push(i);
          this.upload[i].css = "custom-file-upload-error";
        }

        if (this.queue.length > 0) {
          this.ExecuteUpload();
        } else {
          this.loading.submit = false;
          setTimeout(this.pushToSelesai(), 20000);
        }
      }
    },
    ExecuteUpload: function ExecuteUpload() {
      var que = this.queue;
      var length = this.queue.length; // console.log(que.length)

      if (length > 0) {
        this.UploadFIle(que[0]);
      } else {
        this.CheckUpload();
      }
    },
    UploadFIle: function UploadFIle(i) {
      var _this3 = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/master/pendaftaran", {
        type: "UplaodFileSingle",
        upload: this.upload[i],
        perusahaan: this.perusahaan
      }, {
        onUploadProgress: function (progressEvent) {
          this.upload[i].progressBar = parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total));
        }.bind(this)
      }).then(function (r) {
        _this3.$delete(_this3.queue, 0), _this3.ExecuteUpload();
      });
    },
    CheckNpwp: function CheckNpwp() {
      var _this4 = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/perizinan/perusahaan", {
        type: "dataBynpwp",
        npwp: this.perusahaan.npwp
      }).then(function (r) {
        console.log(r);
        r.data == "" ? "" : (_this4.perusahaan = r.data, _this4.$alert("Perusahaan ini Telah Melakukan Pendaftaran, Silahkan Isi Form yang telah di sediakan.", "Informasi", {
          confirmButtonText: "OK",
          callback: function callback(action) {
            _this4.$message({
              type: "info",
              message: "action: ".concat(action)
            });
          }
        }));
      });
    },
    InsertDatabase: function InsertDatabase() {
      var _this5 = this;

      this.loading.submit = true;
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/master/pendaftaran", {
        type: "daftar",
        perusahaan: this.perusahaan,
        user: this.user
      }).then(function (r) {
        _this5.CheckUpload();
      });
    },
    daftar: function daftar() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        this.empty = [];

        for (var i = 0; i < this.upload.length; i++) {
          if (this.upload[i].files == null) {
            this.empty.push(i);
            this.upload[i].css = "custom-file-upload-error";
          }
        }
      } else {
        this.InsertDatabase();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaranSelesai.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pendaftaran/pendaftaranSelesai.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      npwp: this.$route.query.npwp,
      url: {
        assets: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].assets,
        web: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web
      },
      perusahaan: {
        npwp: null,
        perusahaan_code: null,
        kategori: null,
        jenis: null,
        nama: null,
        alamat: null,
        email: null,
        contact: null,
        create_on: "mandiri",
        provinsi: null,
        kota: null,
        kode_pos: null
      }
    };
  },
  created: function created() {
    this.CheckNpwp();
  },
  methods: {
    CheckNpwp: function CheckNpwp() {
      var _this = this;

      this.axios.post(url.web + "/perizinan/perusahaan", {
        type: "dataBynpwp",
        npwp: this.npwp
      }).then(function (r) {
        _this.perusahaan = r.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/penelitian.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pendaftaran/penelitian.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.persyaratanData();

    if (this.id) {
      this.activeHeader();
    }
  },
  data: function data() {
    return {
      AddAnggota: false,
      steps: {
        pertama: {
          text: "tx-primary",
          active: true
        },
        kedua: {
          text: "",
          active: false
        },
        ketiga: {
          text: "",
          active: false
        }
      },
      url: {
        uploadImage: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + '/public/images/upload-image.png'
      },
      id: this.$route.query.id,
      isLoading: false,
      progressBar: 0,
      penelitian: {
        judul: null,
        lokasi: [],
        waktu: null,
        universitas: null,
        permohonan_nomor: null,
        kategori: null,
        email: null,
        password: null,
        permohonan_id: null
      },
      person: [{
        identitas_nomor: null,
        identitas_kategori: null,
        nama: null,
        jenjang: null,
        jurusan: null,
        contact: null,
        email: null,
        alamat: null,
        status: null
      }],
      izin: []
    };
  },
  validations: {
    penelitian: {
      judul: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      lokasi: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      waktu: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      universitas: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      permohonan_nomor: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      kategori: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      password: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      }
    },
    person: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      $each: {
        identitas_kategori: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        identitas_nomor: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        nama: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        jenjang: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        jurusan: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        contact: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        email: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        alamat: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        }
      }
    }
  },
  methods: {
    tambahAnggota: function tambahAnggota() {
      this.person.push({
        identitas_nomor: null,
        identitas_kategori: null,
        nama: null,
        jenjang: null,
        jurusan: null,
        contact: null,
        email: null,
        alamat: null,
        status: null
      });
    },
    TODB: function TODB() {
      var _this = this;

      this.isLoading = true;
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/master/penelitian", {
        type: "insert",
        penelitian: this.penelitian,
        person: this.person,
        persyaratan: this.izin.persyaratan
      }, {
        onUploadProgress: function (progressEvent) {
          this.progressBar = parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total));
        }.bind(this)
      }).then(function (r) {
        _this.isLoading = false;
        window.location.href = _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + '/pemohon/pengajuan/2/' + r.data;
        console.log(r.data);
      });
    },
    Daftar: function Daftar() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.TODB();
      } //  this.TODB();

    },
    activeHeader: function activeHeader() {
      this.steps.pertama.text = "tx-success";
      this.steps.pertama.active = false;
      this.steps.kedua.text = "tx-primary";
      this.steps.kedua.active = true;

      if (this.$route.query.v) {
        this.steps.kedua.text = "tx-success";
        this.steps.kedua.active = false;
        this.steps.ketiga.text = "tx-primary";
        this.steps.ketiga.active = true;
      }
    },
    ChangeKategoriPenelitian: function ChangeKategoriPenelitian() {
      if (this.penelitian.kategori == 'umum') {
        this.AddAnggota = true;
      } else {
        this.AddAnggota = false;
      }
    },
    persyaratanData: function persyaratanData() {
      var _this2 = this;

      this.axios.get(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/pendaftaran/penelitian/penelitianById").then(function (r) {
        _this2.izin = r.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/element-ui/lib/theme-chalk/display.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/element-ui/lib/theme-chalk/display.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width:767px){.hidden-xs-only{display:none!important}}@media only screen and (min-width:768px){.hidden-sm-and-up{display:none!important}}@media only screen and (min-width:768px) and (max-width:991px){.hidden-sm-only{display:none!important}}@media only screen and (max-width:991px){.hidden-sm-and-down{display:none!important}}@media only screen and (min-width:992px){.hidden-md-and-up{display:none!important}}@media only screen and (min-width:992px) and (max-width:1199px){.hidden-md-only{display:none!important}}@media only screen and (max-width:1199px){.hidden-md-and-down{display:none!important}}@media only screen and (min-width:1200px){.hidden-lg-and-up{display:none!important}}@media only screen and (min-width:1200px) and (max-width:1919px){.hidden-lg-only{display:none!important}}@media only screen and (max-width:1919px){.hidden-lg-and-down{display:none!important}}@media only screen and (min-width:1920px){.hidden-xl-only{display:none!important}}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login/login.vue?vue&type=style&index=0&id=ecc2ca70&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/login/login.vue?vue&type=style&index=0&id=ecc2ca70&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.daftarakun[data-v-ecc2ca70]{\n    padding: 10px;\n    color: white;\n    font-weight: bold;\n    border: 1px solid white;\n    border-radius: 10px;\n}\n.daftarakun[data-v-ecc2ca70]:hover{\n    color: black;\n    background: white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.wd-20 {\n  width: 40px;\n}\n.wd-40 {\n  width: 80px;\n}\n.wd-100px {\n  width: 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.wd-20 {\n  width: 40px;\n}\n.wd-40 {\n  width: 80px;\n}\n.wd-100px {\n  width: 100px;\n}\ntr.errorUpload td {\n  background-color: #d7574a;\n  color: white;\n}\n.inputWrapper {\n  height: 32px;\n  width: 64px;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n  /*Using a background color, but you can use a background image to represent a button*/\n  background-color: #ddf;\n}\n.fileInput {\n  cursor: pointer;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 99;\n  /*This makes the button huge. If you want a bigger button, increase the font size*/\n  font-size: 50px;\n  /*Opacity settings for all browsers*/\n  opacity: 0;\n  -moz-opacity: 0;\n  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);\n}\ninput[type=\"file\"] {\n  display: none;\n}\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&id=4e43400c&lang=css&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&id=4e43400c&lang=css&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form-control[data-v-4e43400c] {\n    border-radius: 6px;\n}\ninput[type=\"file\"][data-v-4e43400c] {\n    display: none;\n}\n.custom-file-upload[data-v-4e43400c] {\n    border: 3px dashed #ccc;\n    display: inline-block;\n    padding: 40px 5px 5px 5px;\n    cursor: pointer;\n    width: 100%;\n    text-align: center;\n    vertical-align: middle;\n    min-height: 150px;\n}\n.custom-file-upload-error[data-v-4e43400c] {\n    border: 3px dashed red;\n}\n.custom-file-upload-success[data-v-4e43400c] {\n    border: 3px dashed green;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/penelitian.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pendaftaran/penelitian.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.el-input__inner {\n    background-color: var(--bg-color) !important;\n}\n.el-input__error {\n    color: white !important;\n    border-radius: 5px;\n    background-color: #f6cfcf !important;\n}\n.el-input__error ::-moz-placeholder {\n    color: #333 !important;\n    border-radius: 5px;\n    background-color: #f6cfcf !important;\n}\n.el-input__error :-ms-input-placeholder {\n    color: #333 !important;\n    border-radius: 5px;\n    background-color: #f6cfcf !important;\n}\n.el-input__error ::-ms-input-placeholder {\n    color: #333 !important;\n    border-radius: 5px;\n    background-color: #f6cfcf !important;\n}\n.el-input__error ::placeholder {\n    color: #333 !important;\n    border-radius: 5px;\n    background-color: #f6cfcf !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/element-ui/lib/theme-chalk/display.css":
/*!*************************************************************!*\
  !*** ./node_modules/element-ui/lib/theme-chalk/display.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./display.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/element-ui/lib/theme-chalk/display.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login/login.vue?vue&type=style&index=0&id=ecc2ca70&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/login/login.vue?vue&type=style&index=0&id=ecc2ca70&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=ecc2ca70&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login/login.vue?vue&type=style&index=0&id=ecc2ca70&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pengajuan.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pengajuan2.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&id=4e43400c&lang=css&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&id=4e43400c&lang=css&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./pendaftaran.vue?vue&type=style&index=0&id=4e43400c&lang=css&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&id=4e43400c&lang=css&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/penelitian.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pendaftaran/penelitian.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./penelitian.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/penelitian.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login/login.vue?vue&type=template&id=ecc2ca70&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/login/login.vue?vue&type=template&id=ecc2ca70&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        staticClass: "d-flex align-items-center justify-content-center ht-100v",
        staticStyle: { background: "#d0dcec" }
      },
      [
        _c(
          "div",
          { staticClass: "wd-lg-800 wd-xs-450 bg-white rounded shadow-base" },
          [
            _c(
              "el-row",
              { attrs: { type: "flex" } },
              [
                _c(
                  "el-col",
                  {
                    staticClass: "hidden-sm-down pd-25",
                    staticStyle: { background: "#267dff", color: "white" },
                    attrs: { md: 14 }
                  },
                  [
                    _c("h3", { staticClass: "tx-bold" }, [
                      _vm._v("Selamat Datang")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mg-t-30 mg-b-0" }, [
                      _vm._v('"Proses Perizinan Dengan Jarimu"')
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mg-t-0" }, [
                      _vm._v("Layanan Perizinan Dan Non Perizinan")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mg-t-10 mg-b-0" }, [
                      _vm._v(
                        "Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu"
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mg-b-30" }, [
                      _vm._v("Provinsi Kepulauan Riau")
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "daftarakun mg-t-50",
                        attrs: { href: _vm.url.pendaftaran }
                      },
                      [_vm._v("Daftar Akun")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "el-col",
                  { staticClass: "pd-25", attrs: { md: 10 } },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "signin-logo tx-center tx-28 tx-bold tx-inverse"
                      },
                      [
                        _c("span", { staticClass: "tx-normal" }, [_vm._v("[")]),
                        _vm._v(" SI JEMPOL\n                        "),
                        _c("span", { staticClass: "tx-normal" }, [_vm._v("]")])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "tx-center mg-b-60" }, [
                      _vm._v("DPMPTSP KEPRI")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("el-input", {
                          staticClass: "is-invalid",
                          attrs: {
                            placeholder: "Email / Username ",
                            clearable: ""
                          },
                          model: {
                            value: _vm.account.email,
                            callback: function($$v) {
                              _vm.$set(_vm.account, "email", $$v)
                            },
                            expression: "account.email"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group " },
                      [
                        _c("el-input", {
                          attrs: {
                            placeholder: "password",
                            "show-password": "",
                            clearable: ""
                          },
                          nativeOn: {
                            keyup: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              return _vm.ToLogin()
                            }
                          },
                          model: {
                            value: _vm.account.password,
                            callback: function($$v) {
                              _vm.$set(_vm.account, "password", $$v)
                            },
                            expression: "account.password"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        staticStyle: {
                          width: "100% !important",
                          "margin-bottom": "20px",
                          clear: "both"
                        },
                        attrs: {
                          type: "primary",
                          loading: _vm.button.isLoading
                        },
                        on: {
                          click: function($event) {
                            return _vm.ToLogin()
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.button.text))]
                    ),
                    _vm._v(" "),
                    _vm.error
                      ? _c("el-alert", {
                          attrs: {
                            title: "Username / Password Salah",
                            type: "error",
                            "show-icon": ""
                          }
                        })
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
      ]
    ),
    _vm._v(" --}}\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=template&id=1fe061db&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=template&id=1fe061db& ***!
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
      { staticClass: "br-pagebody pd-t-30" },
      [
        _c(
          "el-row",
          {
            staticClass: "mg-b-20 pd-b-10",
            attrs: { gutter: 10, type: "flex", justify: "center" }
          },
          [
            _c(
              "el-col",
              {
                staticClass: "tx-bold",
                staticStyle: { color: "#333" },
                attrs: { md: 24, justify: "center" }
              },
              [
                _c("h4", { staticClass: "tx-center" }, [
                  _vm._v("PENGISIAN FORMULIR PERMOHONAN LAYANAN")
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "tx-center" }, [
                  _vm._v(_vm._s(_vm.izin.nama_izin))
                ]),
                _vm._v(" "),
                _vm.izin.opd
                  ? _c("h5", { staticClass: "tx-center" }, [
                      _vm._v("Sektor " + _vm._s(_vm.izin.opd.opd))
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
          {
            staticClass: "mg-t-10 mg-b-20 pd-b-10",
            attrs: { gutter: 10, type: "flex", justify: "center" }
          },
          [
            _c("el-col", { attrs: { md: 6 } }, [
              _c(
                "div",
                { staticClass: "pd-5 d-flex align-items-center" },
                [
                  _c("ion-icon", {
                    staticClass: "tx-50",
                    class: _vm.steps.pertama,
                    attrs: { name: "albums-outline" }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "mg-l-20" }, [
                    _c(
                      "p",
                      {
                        staticClass:
                          "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10",
                        class: _vm.steps.pertama
                      },
                      [_vm._v("Langkah Ke - 1")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "tx-15 tx-lato tx-bold mg-b-2 lh-1",
                        class: _vm.steps.pertama
                      },
                      [_vm._v("PENGISIAN FORM PENDAFTARAN")]
                    )
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("el-col", { attrs: { md: 6 } }, [
              _c(
                "div",
                { staticClass: "pd-5 d-flex align-items-center" },
                [
                  _c("ion-icon", {
                    staticClass: "tx-50",
                    class: _vm.steps.kedua,
                    attrs: { name: "cloud-upload-outline" }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "mg-l-20" }, [
                    _c(
                      "p",
                      {
                        staticClass:
                          "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10",
                        class: _vm.steps.kedua
                      },
                      [_vm._v("Langkah ke - 2")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "tx-15 tx-lato tx-bold mg-b-2 lh-1",
                        class: _vm.steps.kedua
                      },
                      [_vm._v("UNGGAH BERKAS PERSYARATAN")]
                    )
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("el-col", { attrs: { md: 6 } }, [
              _c(
                "div",
                { staticClass: "pd-5 d-flex align-items-center" },
                [
                  _c("ion-icon", {
                    staticClass: "tx-50",
                    class: _vm.steps.ketiga,
                    attrs: { name: "paper-plane-outline" }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "mg-l-20" }, [
                    _c(
                      "p",
                      {
                        staticClass:
                          "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10",
                        class: _vm.steps.ketiga
                      },
                      [_vm._v("Langkah Ke - 3")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "tx-15 tx-lato tx-bold mg-b-2 lh-1",
                        class: _vm.steps.ketiga
                      },
                      [_vm._v("KIRIM FILE PERMOHONAN")]
                    )
                  ])
                ],
                1
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "el-row",
          { attrs: { type: "flex", justify: "center" } },
          [
            _c(
              "el-col",
              { attrs: { md: 24 } },
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
                      "el-divider",
                      { attrs: { "content-position": "left" } },
                      [_vm._v("NARAHUBUNG")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mg-t-20 mg-b-20 pd-b-20" }, [
                      _c("div", { staticClass: "col-lg-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "form-control-label" }, [
                            _vm._v(
                              "\n                  Nomor Induk Kependudukan\n                  "
                            ),
                            _c("span", { staticClass: "tx-danger" }, [
                              _vm._v("*")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value:
                                  _vm.$v.permohonan.pengurus.identitas_no
                                    .$model,
                                expression:
                                  "$v.permohonan.pengurus.identitas_no.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid":
                                _vm.$v.permohonan.pengurus.identitas_no.$error
                            },
                            attrs: {
                              type: "text",
                              placeholder: "NIK Pengurus Izin"
                            },
                            domProps: {
                              value:
                                _vm.$v.permohonan.pengurus.identitas_no.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.permohonan.pengurus.identitas_no,
                                  "$model",
                                  $event.target.value.trim()
                                )
                              },
                              blur: function($event) {
                                return _vm.$forceUpdate()
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "form-control-label" }, [
                            _vm._v(
                              "\n                  Nama\n                  "
                            ),
                            _c("span", { staticClass: "tx-danger" }, [
                              _vm._v("*")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.permohonan.pengurus.nama.$model,
                                expression:
                                  "$v.permohonan.pengurus.nama.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid":
                                _vm.$v.permohonan.pengurus.nama.$error
                            },
                            attrs: {
                              type: "text",
                              placeholder: "Nama Pengurus Izin"
                            },
                            domProps: {
                              value: _vm.$v.permohonan.pengurus.nama.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.permohonan.pengurus.nama,
                                  "$model",
                                  $event.target.value.trim()
                                )
                              },
                              blur: function($event) {
                                return _vm.$forceUpdate()
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "form-control-label" }, [
                            _vm._v(
                              "\n                  Hp\n                  "
                            ),
                            _c("span", { staticClass: "tx-danger" }, [
                              _vm._v("*")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value:
                                  _vm.$v.permohonan.pengurus.contact.$model,
                                expression:
                                  "$v.permohonan.pengurus.contact.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid":
                                _vm.$v.permohonan.pengurus.contact.$error
                            },
                            attrs: {
                              type: "text",
                              placeholder: "Hp Pengurus Izin"
                            },
                            domProps: {
                              value: _vm.$v.permohonan.pengurus.contact.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.permohonan.pengurus.contact,
                                  "$model",
                                  $event.target.value.trim()
                                )
                              },
                              blur: function($event) {
                                return _vm.$forceUpdate()
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "form-control-label" }, [
                            _vm._v(
                              "\n                  Email\n                  "
                            ),
                            _c("span", { staticClass: "tx-danger" }, [
                              _vm._v("*")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.permohonan.pengurus.email.$model,
                                expression:
                                  "$v.permohonan.pengurus.email.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid":
                                _vm.$v.permohonan.pengurus.email.$error
                            },
                            attrs: {
                              type: "text",
                              placeholder: "Email Pengurus Izin"
                            },
                            domProps: {
                              value: _vm.$v.permohonan.pengurus.email.$model
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.permohonan.pengurus.email,
                                  "$model",
                                  $event.target.value.trim()
                                )
                              },
                              blur: function($event) {
                                return _vm.$forceUpdate()
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "el-divider",
                      { attrs: { "content-position": "left" } },
                      [_vm._v("KELENGKAPAN BERKAS PERSYARATAN")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "bd bd-gray-300 rounded table-responsive mg-b-20 pd-b-20"
                      },
                      [
                        _c("table", { staticClass: "table mg-b-0" }, [
                          _c("thead", [
                            _c("tr", [
                              _c("th", [_vm._v("No")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Nama Persyaratan")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.izin.persyaratan, function(i, Index) {
                              return _c("tr", { key: Index }, [
                                _c("td", { attrs: { width: "10" } }, [
                                  _vm._v(_vm._s(Index + 1))
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(i.persyaratan))])
                              ])
                            }),
                            0
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary", size: "mini" },
                        on: {
                          click: function($event) {
                            return _vm.toDatabase()
                          }
                        }
                      },
                      [_vm._v("Proses")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=template&id=4778fa32&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=template&id=4778fa32& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "br-pagebody pd-t-30" },
        [
          _c(
            "el-row",
            {
              staticClass: "mg-b-20 pd-b-10",
              attrs: { gutter: 10, type: "flex", justify: "center" }
            },
            [
              _c(
                "el-col",
                {
                  staticClass: "tx-bold",
                  staticStyle: { color: "#333" },
                  attrs: { md: 24, justify: "center" }
                },
                [
                  _c("h4", { staticClass: "tx-center" }, [
                    _vm._v("PENGISIAN FORMULIR PERMOHONAN LAYANAN")
                  ]),
                  _vm._v(" "),
                  _vm.permohonan.izin
                    ? _c("h5", { staticClass: "tx-center" }, [
                        _vm._v(_vm._s(_vm.permohonan.izin.nama_izin))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.permohonan.opd
                    ? _c("h5", { staticClass: "tx-center" }, [
                        _vm._v("Sektor " + _vm._s(_vm.permohonan.opd.opd))
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
            {
              staticClass: "mg-t-10 mg-b-20 pd-b-10",
              attrs: { gutter: 10, type: "flex", justify: "center" }
            },
            [
              _c("el-col", { attrs: { md: 6 } }, [
                _c(
                  "div",
                  { staticClass: "pd-5 d-flex align-items-center" },
                  [
                    _c("ion-icon", {
                      staticClass: "tx-50",
                      class: _vm.steps.pertama,
                      attrs: { name: "albums-outline" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "mg-l-20" }, [
                      _c(
                        "p",
                        {
                          staticClass:
                            "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10",
                          class: _vm.steps.pertama
                        },
                        [_vm._v("Langkah Ke - 1")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass: "tx-15 tx-lato tx-bold mg-b-2 lh-1",
                          class: _vm.steps.pertama
                        },
                        [_vm._v("PENGISIAN FORM PENDAFTARAN")]
                      )
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("el-col", { attrs: { md: 6 } }, [
                _c(
                  "div",
                  { staticClass: "pd-5 d-flex align-items-center" },
                  [
                    _c("ion-icon", {
                      staticClass: "tx-50",
                      class: _vm.steps.kedua,
                      attrs: { name: "cloud-upload-outline" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "mg-l-20" }, [
                      _c(
                        "p",
                        {
                          staticClass:
                            "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10",
                          class: _vm.steps.kedua
                        },
                        [_vm._v("Langkah ke - 2")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass: "tx-15 tx-lato tx-bold mg-b-2 lh-1",
                          class: _vm.steps.kedua
                        },
                        [_vm._v("UNGGAH BERKAS PERSYARATAN")]
                      )
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("el-col", { attrs: { md: 6 } }, [
                _c(
                  "div",
                  { staticClass: "pd-5 d-flex align-items-center" },
                  [
                    _c("ion-icon", {
                      staticClass: "tx-50",
                      class: _vm.steps.ketiga,
                      attrs: { name: "paper-plane-outline" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "mg-l-20" }, [
                      _c(
                        "p",
                        {
                          staticClass:
                            "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10",
                          class: _vm.steps.ketiga
                        },
                        [_vm._v("Langkah Ke - 3")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass: "tx-15 tx-lato tx-bold mg-b-2 lh-1",
                          class: _vm.steps.ketiga
                        },
                        [_vm._v("KIRIM FILE PERMOHONAN")]
                      )
                    ])
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            { attrs: { type: "flex", justify: "center" } },
            [
              _c(
                "el-col",
                { attrs: { md: 24 } },
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
                        "el-divider",
                        { attrs: { "content-position": "left" } },
                        [_vm._v("KELENGKAPAN BERKAS PERSYARATAN")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "bd bd-gray-300 rounded table-responsive mg-b-20 pd-b-20"
                        },
                        [
                          _c("table", { staticClass: "table mg-b-0" }, [
                            _c("thead", [
                              _c("tr", [
                                _c("th", [_vm._v("No")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Nama Persyaratan")]),
                                _vm._v(" "),
                                _c("th"),
                                _vm._v(" "),
                                _c("th", [_vm._v("Unggah Berkas")])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.permohonan.persyaratan, function(
                                i,
                                Index
                              ) {
                                return _c(
                                  "tr",
                                  { key: Index, class: i.classBind },
                                  [
                                    _c("td", { attrs: { width: "10" } }, [
                                      _vm._v(_vm._s(Index + 1))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(i.persyaratan))]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: !i.ionClass,
                                            expression: "!i.ionClass"
                                          }
                                        ]
                                      },
                                      [
                                        _c("ion-icon", {
                                          staticClass: "tx-20 tx-danger",
                                          attrs: {
                                            name: "close-circle-outline"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: i.ionClass,
                                            expression: "i.ionClass"
                                          }
                                        ]
                                      },
                                      [
                                        _c("ion-icon", {
                                          staticClass: "tx-20 tx-success",
                                          attrs: {
                                            name: "checkmark-done-outline"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        i.progress
                                          ? _c(
                                              "div",
                                              { staticClass: "progress" },
                                              [
                                                _c("div", {
                                                  staticClass:
                                                    "progress-bar progress-bar-striped progress-bar-animated",
                                                  staticStyle: {
                                                    width: "100%"
                                                  },
                                                  attrs: {
                                                    role: "progressbar",
                                                    "aria-valuenow": "75",
                                                    "aria-valuemin": "0",
                                                    "aria-valuemax": "100"
                                                  }
                                                })
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        !i.pratinjau
                                          ? _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "custom-file-upload",
                                                attrs: { for: Index }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fa fa-cloud-upload"
                                                }),
                                                _vm._v(
                                                  " Unggah Berkas\n                    "
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        !i.pratinjau
                                          ? _c("input", {
                                              attrs: {
                                                id: Index,
                                                type: "file"
                                              },
                                              on: {
                                                change: function($event) {
                                                  return _vm.onFilesChange(
                                                    $event,
                                                    Index
                                                  )
                                                }
                                              }
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        i.upload
                                          ? _c(
                                              "el-button",
                                              {
                                                attrs: {
                                                  type: "primary",
                                                  size: "mini"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.UploadFIle(Index)
                                                  }
                                                }
                                              },
                                              [_vm._v("Upload")]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        i.pratinjau
                                          ? _c(
                                              "el-button",
                                              {
                                                attrs: {
                                                  type: "primary",
                                                  size: "mini",
                                                  icon: "el-icon-tickets"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.OpenPratinjau(
                                                      Index
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("Pratinjau")]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        i.pratinjau
                                          ? _c(
                                              "el-button",
                                              {
                                                attrs: {
                                                  type: "danger",
                                                  size: "mini",
                                                  icon: "el-icon-delete"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.DeleteFIle(Index)
                                                  }
                                                }
                                              },
                                              [_vm._v("Hapus")]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _vm.permohonan.persyaratan
                        ? _c(
                            "div",
                            [
                              _vm.uploadedCek
                                ? _c(
                                    "el-button",
                                    {
                                      attrs: { type: "primary", size: "mini" },
                                      on: {
                                        click: function($event) {
                                          return _vm.checkUpload()
                                        }
                                      }
                                    },
                                    [_vm._v("Upload")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.kirimptsp
                                ? _c(
                                    "el-button",
                                    {
                                      attrs: {
                                        type: "success",
                                        icon: "el-icon-upload2"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.kirimPengajuan()
                                        }
                                      }
                                    },
                                    [_vm._v("Kirim Pengajuan Permohonan")]
                                  )
                                : _vm._e()
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
      ),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: _vm.pratinjau.title,
            visible: _vm.pratinjau.preview,
            "with-header": true,
            size: "80%",
            direction: "btt"
          },
          on: {
            "update:visible": function($event) {
              return _vm.$set(_vm.pratinjau, "preview", $event)
            }
          }
        },
        [
          _vm.pratinjau.objectURL
            ? _c("iframe", {
                attrs: {
                  src: _vm.pratinjau.objectURL,
                  width: "100%",
                  height: "100%"
                }
              })
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=template&id=4e43400c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=template&id=4e43400c&scoped=true& ***!
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
    {
      staticClass:
        "align-items-center justify-content-center pd-t-50 ht-100v pd-l-100 pd-r-100",
      staticStyle: { background: "#d0dcec" }
    },
    [
      _c(
        "el-card",
        {
          staticStyle: { "border-radius": "5px", border: "none" },
          attrs: { "body-style": { padding: "0px" } }
        },
        [
          _c(
            "el-row",
            [
              _c(
                "el-col",
                { staticStyle: { padding: "20px" }, attrs: { md: 20 } },
                [
                  _c(
                    "h1",
                    {
                      staticClass: "tx-roboto tx-bold tx-20",
                      staticStyle: { color: "#48a5ea" }
                    },
                    [
                      _vm._v(
                        "\n                    IDENTITAS PERUSAHAAN\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mg-t-50" },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-3" }, [
                          _c("div", { staticClass: "form-group tx-gray-600" }, [
                            _c("label", { staticClass: "form-control-label" }, [
                              _vm._v(
                                "\n                                    Nomor Pokok Wajib Pajak:\n                                    "
                              ),
                              _c("span", { staticClass: "tx-danger" }, [
                                _vm._v("*")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.$v.perusahaan.npwp.$model,
                                  expression: "$v.perusahaan.npwp.$model",
                                  modifiers: { trim: true }
                                },
                                {
                                  name: "mask",
                                  rawName: "v-mask",
                                  value: "##.###.###.#-###.###",
                                  expression: "'##.###.###.#-###.###'"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.perusahaan.npwp.$error
                              },
                              attrs: {
                                readonly: _vm.loading.submit,
                                type: "text"
                              },
                              domProps: {
                                value: _vm.$v.perusahaan.npwp.$model
                              },
                              on: {
                                blur: [
                                  function($event) {
                                    return _vm.CheckNpwp()
                                  },
                                  function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                ],
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.perusahaan.npwp,
                                    "$model",
                                    $event.target.value.trim()
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-2" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { staticClass: "form-control-label tx-gray-600" },
                              [
                                _vm._v(
                                  "\n                                    Kategori:\n                                    "
                                ),
                                _c("span", { staticClass: "tx-danger" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.trim",
                                    value: _vm.$v.perusahaan.kategori.$model,
                                    expression: "$v.perusahaan.kategori.$model",
                                    modifiers: { trim: true }
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid":
                                    _vm.$v.perusahaan.kategori.$error
                                },
                                attrs: { readonly: _vm.loading.submit },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.$v.perusahaan.kategori,
                                        "$model",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    function($event) {
                                      return _vm.kategoriAction()
                                    }
                                  ]
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "Badan Usaha" } },
                                  [_vm._v("Badan Usaha")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "perorangan" } },
                                  [_vm._v("Perorangan")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "penelitian" } },
                                  [_vm._v("penelitian")]
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.jenisshow
                          ? _c("div", { staticClass: "col-lg-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "form-control-label tx-gray-600"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Jenis Perusahaan:\n                                    "
                                    ),
                                    _c("span", { staticClass: "tx-danger" }, [
                                      _vm._v("*")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value: _vm.$v.perusahaan.jenis.$model,
                                        expression:
                                          "$v.perusahaan.jenis.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.$v.perusahaan.jenis.$error
                                    },
                                    attrs: { readonly: _vm.loading.submit },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.$v.perusahaan.jenis,
                                          "$model",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.KategoriBadanUsaha, function(
                                    i,
                                    Index
                                  ) {
                                    return _c(
                                      "option",
                                      {
                                        key: Index,
                                        domProps: { value: i.nama }
                                      },
                                      [_vm._v(_vm._s(i.nama))]
                                    )
                                  }),
                                  0
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-4" }, [
                          _c("div", { staticClass: "form-group tx-gray-600" }, [
                            _c("label", { staticClass: "form-control-label" }, [
                              _vm._v(
                                "\n                                    Nama:\n                                    "
                              ),
                              _c("span", { staticClass: "tx-danger" }, [
                                _vm._v("*")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.$v.perusahaan.nama.$model,
                                  expression: "$v.perusahaan.nama.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.perusahaan.nama.$error
                              },
                              attrs: {
                                readonly: _vm.loading.submit,
                                type: "text"
                              },
                              domProps: {
                                value: _vm.$v.perusahaan.nama.$model
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.perusahaan.nama,
                                    "$model",
                                    $event.target.value.trim()
                                  )
                                },
                                blur: function($event) {
                                  return _vm.$forceUpdate()
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-3" }, [
                          _c("div", { staticClass: "form-group tx-gray-600" }, [
                            _c("label", { staticClass: "form-control-label" }, [
                              _vm._v(
                                "\n                                    email:\n                                    "
                              ),
                              _c("span", { staticClass: "tx-danger" }, [
                                _vm._v("*")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.$v.perusahaan.email.$model,
                                  expression: "$v.perusahaan.email.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.perusahaan.email.$error
                              },
                              attrs: {
                                readonly: _vm.loading.submit,
                                type: "text"
                              },
                              domProps: {
                                value: _vm.$v.perusahaan.email.$model
                              },
                              on: {
                                blur: [
                                  function($event) {
                                    return _vm.CheckValidationEmail()
                                  },
                                  function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                ],
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.perusahaan.email,
                                    "$model",
                                    $event.target.value.trim()
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-3" }, [
                          _c("div", { staticClass: "form-group tx-gray-600" }, [
                            _c("label", { staticClass: "form-control-label" }, [
                              _vm._v(
                                "\n                                    Provinsi :\n                                    "
                              ),
                              _c("span", { staticClass: "tx-danger" }, [
                                _vm._v("*")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.$v.perusahaan.provinsi.$model,
                                  expression: "$v.perusahaan.provinsi.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.perusahaan.provinsi.$error
                              },
                              attrs: {
                                readonly: _vm.loading.submit,
                                type: "text"
                              },
                              domProps: {
                                value: _vm.$v.perusahaan.provinsi.$model
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.perusahaan.provinsi,
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
                          _c("div", { staticClass: "form-group tx-gray-600" }, [
                            _c("label", { staticClass: "form-control-label" }, [
                              _vm._v(
                                "\n                                    Kota / Kabupaten:\n                                    "
                              ),
                              _c("span", { staticClass: "tx-danger" }, [
                                _vm._v("*")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.$v.perusahaan.kota.$model,
                                  expression: "$v.perusahaan.kota.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.perusahaan.kota.$error
                              },
                              attrs: {
                                type: "text",
                                readonly: _vm.loading.submit
                              },
                              domProps: {
                                value: _vm.$v.perusahaan.kota.$model
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.perusahaan.kota,
                                    "$model",
                                    $event.target.value.trim()
                                  )
                                },
                                blur: function($event) {
                                  return _vm.$forceUpdate()
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-2" }, [
                          _c("div", { staticClass: "form-group tx-gray-600" }, [
                            _c("label", { staticClass: "form-control-label" }, [
                              _vm._v(
                                "\n                                    Kode Pos :\n                                    "
                              ),
                              _c("span", { staticClass: "tx-danger" }, [
                                _vm._v("*")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.$v.perusahaan.kode_pos.$model,
                                  expression: "$v.perusahaan.kode_pos.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.perusahaan.kode_pos.$error
                              },
                              attrs: {
                                readonly: _vm.loading.submit,
                                type: "text"
                              },
                              domProps: {
                                value: _vm.$v.perusahaan.kode_pos.$model
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.perusahaan.kode_pos,
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
                          _c("div", { staticClass: "form-group tx-gray-600" }, [
                            _c("label", { staticClass: "form-control-label" }, [
                              _vm._v(
                                "\n                                    Telp / Hp:\n                                    "
                              ),
                              _c("span", { staticClass: "tx-danger" }, [
                                _vm._v("*")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.$v.perusahaan.contact.$model,
                                  expression: "$v.perusahaan.contact.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.perusahaan.contact.$error
                              },
                              attrs: {
                                readonly: _vm.loading.submit,
                                type: "text"
                              },
                              domProps: {
                                value: _vm.$v.perusahaan.contact.$model
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.perusahaan.contact,
                                    "$model",
                                    $event.target.value.trim()
                                  )
                                },
                                blur: function($event) {
                                  return _vm.$forceUpdate()
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { staticClass: "form-control-label tx-gray-600" },
                              [
                                _vm._v(
                                  "\n                                    Alamat:\n                                    "
                                ),
                                _c("span", { staticClass: "tx-danger" }, [
                                  _vm._v("*")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.$v.perusahaan.alamat.$model,
                                  expression: "$v.perusahaan.alamat.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.perusahaan.alamat.$error
                              },
                              attrs: {
                                readonly: _vm.loading.submit,
                                id: "",
                                cols: "30",
                                rows: "5"
                              },
                              domProps: {
                                value: _vm.$v.perusahaan.alamat.$model
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.perusahaan.alamat,
                                    "$model",
                                    $event.target.value.trim()
                                  )
                                },
                                blur: function($event) {
                                  return _vm.$forceUpdate()
                                }
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "el-divider",
                        { attrs: { "content-position": "left" } },
                        [_vm._v("Identias Akun")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-3" }, [
                          _c("div", { staticClass: "form-group tx-gray-600" }, [
                            _c("label", { staticClass: "form-control-label" }, [
                              _vm._v(
                                "\n                                    Username :\n                                    "
                              ),
                              _c("span", { staticClass: "tx-danger" }, [
                                _vm._v("*")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.$v.user.email.$model,
                                  expression: "$v.user.email.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control",
                              class: { "is-invalid": _vm.$v.user.email.$error },
                              attrs: { type: "text", readonly: "" },
                              domProps: { value: _vm.$v.user.email.$model },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.user.email,
                                    "$model",
                                    $event.target.value.trim()
                                  )
                                },
                                blur: function($event) {
                                  return _vm.$forceUpdate()
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-3" }, [
                          _c("div", { staticClass: "form-group tx-gray-600" }, [
                            _c("label", { staticClass: "form-control-label" }, [
                              _vm._v(
                                "\n                                    password:\n                                    "
                              ),
                              _c("span", { staticClass: "tx-danger" }, [
                                _vm._v("*")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.$v.user.password.$model,
                                  expression: "$v.user.password.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.user.password.$error
                              },
                              attrs: {
                                type: "text",
                                readonly: _vm.loading.submit
                              },
                              domProps: { value: _vm.$v.user.password.$model },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.user.password,
                                    "$model",
                                    $event.target.value.trim()
                                  )
                                },
                                blur: function($event) {
                                  return _vm.$forceUpdate()
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-3" }, [
                          _c("div", { staticClass: "form-group tx-gray-600" }, [
                            _c("label", { staticClass: "form-control-label" }, [
                              _vm._v(
                                "\n                                    password:\n\n                                    "
                              ),
                              _c("span", { staticClass: "tx-danger" }, [
                                _vm._v("*")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.$v.user.repeatPassword.$model,
                                  expression: "$v.user.repeatPassword.$model"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.user.repeatPassword.$error
                              },
                              attrs: {
                                readonly: _vm.loading.submit,
                                type: "text"
                              },
                              domProps: {
                                value: _vm.$v.user.repeatPassword.$model
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.user.repeatPassword,
                                    "$model",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "el-divider",
                        { attrs: { "content-position": "left" } },
                        [_vm._v("Kelengkapan Berkas")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-row",
                        { attrs: { gutter: 10 } },
                        _vm._l(_vm.upload, function(i, Index) {
                          return _c(
                            "el-col",
                            { key: Index, attrs: { md: 6 } },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "custom-file-upload",
                                  class: i.css,
                                  attrs: { for: i.id }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-cloud-upload"
                                  }),
                                  _vm._v(" "),
                                  !i.files
                                    ? _c("p", [_vm._v(_vm._s(i.name))])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  i.files
                                    ? _c(
                                        "div",
                                        {
                                          staticStyle: {
                                            background: "#c0c8dd",
                                            position: "relative",
                                            color: "#333",
                                            bottom: "-25px"
                                          }
                                        },
                                        [
                                          _c(
                                            "el-row",
                                            [
                                              _c(
                                                "el-col",
                                                {
                                                  staticClass:
                                                    "tx-left tx-bold",
                                                  staticStyle: {
                                                    padding:
                                                      "15px 10px 10px 10px"
                                                  },
                                                  attrs: { md: 20 }
                                                },
                                                [_vm._v(_vm._s(i.name))]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "el-col",
                                                {
                                                  staticStyle: {
                                                    padding: "5px"
                                                  },
                                                  attrs: { md: 4 }
                                                },
                                                [
                                                  _c("el-progress", {
                                                    attrs: {
                                                      width: 35,
                                                      type: "circle",
                                                      percentage: i.progressBar,
                                                      color: _vm.colors
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
                                    : _vm._e()
                                ]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                attrs: { type: "file", id: i.id },
                                on: {
                                  change: function($event) {
                                    return _vm.changeFile(Index, $event)
                                  }
                                }
                              })
                            ]
                          )
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c("el-divider", {
                        attrs: { "content-position": "left" }
                      }),
                      _vm._v(" "),
                      _c(
                        "el-button",
                        {
                          attrs: {
                            type: "primary",
                            loading: _vm.loading.submit
                          },
                          on: { click: _vm.daftar }
                        },
                        [_vm._v("Daftar")]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "el-col",
                {
                  staticClass: "hidden-lg-down",
                  staticStyle: {
                    background: "#48a5ea",
                    padding: "20px",
                    "min-height": "835px"
                  },
                  attrs: { md: 4 }
                },
                [
                  _c(
                    "div",
                    { staticClass: "block" },
                    [
                      _c(
                        "center",
                        [
                          _c(
                            "el-image",
                            {
                              staticStyle: { width: "100px", height: "auto" },
                              attrs: {
                                src: _vm.url.assets + "/images/logo.png"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "image-slot",
                                  attrs: { slot: "placeholder" },
                                  slot: "placeholder"
                                },
                                [
                                  _vm._v(
                                    "\n                                Loading"
                                  ),
                                  _c("span", { staticClass: "dot" }, [
                                    _vm._v("...")
                                  ])
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("center", [
                        _c(
                          "span",
                          {
                            staticClass: "tx-center tx-bold tx-white tx-roboto"
                          },
                          [
                            _vm._v(
                              "Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu Provinsi\n                            Kepulauan Riau"
                            )
                          ]
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("el-divider", { attrs: { "content-position": "left" } }),
                  _vm._v(" "),
                  _vm.$v.$error || _vm.$v.$anyError
                    ? _c(
                        "el-card",
                        {
                          staticStyle: {
                            background: "#f6cfcf",
                            "border-color": "#dc3545"
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Data Field Harus Terisi\n                    "
                          ),
                          !_vm.$v.perusahaan.npwp.minLength
                            ? _c("p", [_vm._v("15 Digit NPWP")])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$v.user.repeatPassword.$error
                            ? _c("span", [
                                _vm._v(
                                  "\n                        Password Tidak Sama"
                                )
                              ])
                            : _vm._e()
                        ]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaranSelesai.vue?vue&type=template&id=d0f5f0f4&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pendaftaran/pendaftaranSelesai.vue?vue&type=template&id=d0f5f0f4& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "align-items-center justify-content-center pd-t-50 ht-100v pd-l-100 pd-r-100",
      staticStyle: { background: "#d0dcec" }
    },
    [
      _c("el-card", [
        _c("div", { staticClass: "row w-100" }, [
          _c("div", { staticClass: "col-md-8 mx-auto" }, [
            _c(
              "div",
              { staticClass: "auto-form-wrapper" },
              [
                _c(
                  "center",
                  { staticClass: "tx-bold" },
                  [
                    _vm._v(
                      "\n            DINAS PENANAMAN MODAL DAN PELAYANAN TERPADU SATU PINTU\n            "
                    ),
                    _c("BR"),
                    _vm._v(" PROVINSI KEPULAUAN RIAU\n          ")
                  ],
                  1
                ),
                _vm._v(" "),
                _c("el-divider", [_vm._v("Pendaftaran Berhasil")]),
                _vm._v(" "),
                _c(
                  "el-row",
                  { attrs: { gutter: 20, type: "flex", justify: "center" } },
                  [
                    _c(
                      "el-col",
                      { attrs: { md: 4 } },
                      [
                        _c(
                          "el-image",
                          {
                            attrs: {
                              src: _vm.url.web + "/public/images/email.png"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "image-slot",
                                attrs: { slot: "placeholder" },
                                slot: "placeholder"
                              },
                              [
                                _vm._v(
                                  "\n                  Loading\n                  "
                                ),
                                _c("span", { staticClass: "dot" }, [
                                  _vm._v("...")
                                ])
                              ]
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
                  { attrs: { gutter: 20, type: "flex", justify: "center" } },
                  [
                    _c(
                      "el-col",
                      { staticClass: "text-center", attrs: { md: 18 } },
                      [
                        _c("p", [
                          _vm._v(
                            "\n                Pendaftaran account anda sudah di terima, 1 step lagi untuk\n                menyelesaikannya. silahkan login dengan email yang telah di\n                isi sebelumnya\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: { href: _vm.url.web + "/login" }
                          },
                          [_vm._v("Masuk Aplikasi SI-JEMPOL")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-success btn-sm",
                            attrs: {
                              target: "_blank",
                              href:
                                _vm.url.web +
                                "/pdf/pendaftaran?npwp=" +
                                _vm.npwp
                            }
                          },
                          [_vm._v("Cetak Tanda Daftar akun")]
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/penelitian.vue?vue&type=template&id=5a615543&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pendaftaran/penelitian.vue?vue&type=template&id=5a615543& ***!
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
  return _c(
    "div",
    {
      staticClass:
        "align-items-center justify-content-center pd-t-50 ht-100v pd-l-100 pd-r-100",
      staticStyle: { background: "#d0dcec" }
    },
    [
      _c(
        "el-row",
        {
          staticClass: "mg-b-20 pd-b-10",
          attrs: { gutter: 10, type: "flex", justify: "center" }
        },
        [
          _c(
            "el-col",
            {
              staticClass: "tx-bold",
              staticStyle: { color: "#333" },
              attrs: { md: 24, justify: "center" }
            },
            [
              _c("h4", { staticClass: "tx-center" }, [
                _vm._v("PENGISIAN FORMULIR PERMOHONAN LAYANAN")
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-row",
        {
          staticClass: "mg-t-10 mg-b-20 pd-b-10",
          attrs: { gutter: 10, type: "flex", justify: "center" }
        },
        [
          _c("el-col", { attrs: { md: 6 } }, [
            _c(
              "div",
              { staticClass: "pd-5 d-flex align-items-center" },
              [
                _c("ion-icon", {
                  staticClass: "tx-50",
                  class: _vm.steps.pertama.text,
                  attrs: { name: "albums-outline" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "mg-l-20" }, [
                  _c(
                    "p",
                    {
                      staticClass:
                        "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10",
                      class: _vm.steps.pertama.text
                    },
                    [_vm._v("Langkah Ke - 1")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "tx-15 tx-lato tx-bold mg-b-2 lh-1",
                      class: _vm.steps.pertama.text
                    },
                    [_vm._v("PENGISIAN FORM PENDAFTARAN")]
                  )
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("el-col", { attrs: { md: 6 } }, [
            _c(
              "div",
              { staticClass: "pd-5 d-flex align-items-center" },
              [
                _c("ion-icon", {
                  staticClass: "tx-50",
                  class: _vm.steps.kedua.text,
                  attrs: { name: "cloud-upload-outline" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "mg-l-20" }, [
                  _c(
                    "p",
                    {
                      staticClass:
                        "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10",
                      class: _vm.steps.kedua.text
                    },
                    [_vm._v("Langkah ke - 2")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "tx-15 tx-lato tx-bold mg-b-2 lh-1",
                      class: _vm.steps.kedua.text
                    },
                    [_vm._v("UNGGAH BERKAS PERSYARATAN")]
                  )
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("el-col", { attrs: { md: 6 } }, [
            _c(
              "div",
              { staticClass: "pd-5 d-flex align-items-center" },
              [
                _c("ion-icon", {
                  staticClass: "tx-50",
                  class: _vm.steps.ketiga,
                  attrs: { name: "paper-plane-outline" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "mg-l-20" }, [
                  _c(
                    "p",
                    {
                      staticClass:
                        "tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10",
                      class: _vm.steps.ketiga.text
                    },
                    [_vm._v("Langkah Ke - 3")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "tx-15 tx-lato tx-bold mg-b-2 lh-1",
                      class: _vm.steps.ketiga.text
                    },
                    [_vm._v("KIRIM FILE PERMOHONAN")]
                  )
                ])
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", { staticClass: "progress" }, [
            _c("div", {
              staticClass: "progress-bar",
              style: { width: _vm.progressBar + "%" },
              attrs: {
                role: "progressbar",
                "aria-valuenow": "50",
                "aria-valuemin": "50",
                "aria-valuemax": "100"
              }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "el-card",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.isLoading,
              expression: "isLoading"
            }
          ],
          staticStyle: { "margin-top": "-3px" },
          attrs: {
            "element-loading-text": "Proses Pengajuan Izin penelitian ..."
          }
        },
        [
          _vm.steps.pertama.active
            ? _c(
                "div",
                [
                  _c("el-divider", { attrs: { "content-position": "left" } }, [
                    _vm._v("DATA PENELITIAN")
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-row",
                    { staticClass: "mg-b-20", attrs: { gutter: 10 } },
                    [
                      _c(
                        "el-col",
                        { staticClass: "mg-b-8", attrs: { md: 4 } },
                        [
                          _c("label", [_vm._v("Kategori Penelitian")]),
                          _vm._v(" "),
                          _c(
                            "el-select",
                            {
                              class: {
                                "el-input__error":
                                  _vm.$v.penelitian.kategori.$error
                              },
                              staticStyle: { width: "100%" },
                              attrs: { placeholder: "Kategori" },
                              on: {
                                change: function($event) {
                                  return _vm.ChangeKategoriPenelitian()
                                }
                              },
                              model: {
                                value: _vm.penelitian.kategori,
                                callback: function($$v) {
                                  _vm.$set(_vm.penelitian, "kategori", $$v)
                                },
                                expression: "penelitian.kategori"
                              }
                            },
                            [
                              _c(
                                "el-option",
                                { attrs: { value: "mahasiswa" } },
                                [_vm._v("Mahasiswa")]
                              ),
                              _vm._v(" "),
                              _c("el-option", { attrs: { value: "umum" } }, [
                                _vm._v("Umum / Instansi / Riset")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-col",
                        { staticClass: "mg-b-8", attrs: { md: 5 } },
                        [
                          _c("label", [_vm._v("Nomor Permohonan")]),
                          _vm._v(" "),
                          _c("el-input", {
                            class: {
                              "el-input__error":
                                _vm.$v.penelitian.permohonan_nomor.$error
                            },
                            attrs: { placeholder: "Universitas / Instansi" },
                            model: {
                              value: _vm.penelitian.permohonan_nomor,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.penelitian,
                                  "permohonan_nomor",
                                  $$v
                                )
                              },
                              expression: "penelitian.permohonan_nomor"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-col",
                        { staticClass: "mg-b-8", attrs: { md: 6 } },
                        [
                          _c("label", [_vm._v("Universitas / Instansi")]),
                          _vm._v(" "),
                          _c("el-input", {
                            class: {
                              "el-input__error":
                                _vm.$v.penelitian.universitas.$error
                            },
                            attrs: { placeholder: "Universitas / Instansi" },
                            model: {
                              value: _vm.penelitian.universitas,
                              callback: function($$v) {
                                _vm.$set(_vm.penelitian, "universitas", $$v)
                              },
                              expression: "penelitian.universitas"
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
                    "el-row",
                    { attrs: { gutter: 10 } },
                    [
                      _c(
                        "el-col",
                        { staticClass: "mg-b-8", attrs: { md: 10 } },
                        [
                          _c("label", [_vm._v("Judul Penelitian")]),
                          _vm._v(" "),
                          _c("el-input", {
                            class: {
                              "el-input__error": _vm.$v.penelitian.judul.$error
                            },
                            attrs: { placeholder: "Judul Penelitian" },
                            model: {
                              value: _vm.penelitian.judul,
                              callback: function($$v) {
                                _vm.$set(_vm.penelitian, "judul", $$v)
                              },
                              expression: "penelitian.judul"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-col",
                        { attrs: { md: 8 } },
                        [
                          _c("label", [_vm._v("Lokasi")]),
                          _vm._v(" "),
                          _c(
                            "el-select",
                            {
                              staticClass: "mg-b-8",
                              class: {
                                "el-input__error":
                                  _vm.$v.penelitian.lokasi.$error
                              },
                              staticStyle: { width: "100%" },
                              attrs: {
                                multiple: "",
                                filterable: "",
                                "allow-create": "",
                                "default-first-option": "",
                                placeholder: "Lokasi Penelitian"
                              },
                              model: {
                                value: _vm.penelitian.lokasi,
                                callback: function($$v) {
                                  _vm.$set(_vm.penelitian, "lokasi", $$v)
                                },
                                expression: "penelitian.lokasi"
                              }
                            },
                            _vm._l(_vm.penelitian.lokasi, function(item) {
                              return _c("el-option", {
                                key: item,
                                attrs: { label: item, value: item }
                              })
                            }),
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-col",
                        { staticClass: "mg-b-8", attrs: { md: 6 } },
                        [
                          _c("label", [_vm._v("Waktu Penelitian")]),
                          _vm._v(" "),
                          _c("el-date-picker", {
                            class: {
                              "el-input__error": _vm.$v.penelitian.waktu.$error
                            },
                            staticStyle: { width: "100%" },
                            attrs: {
                              type: "daterange",
                              "range-separator": "/",
                              "start-placeholder": "Mulai",
                              "end-placeholder": "Selesai"
                            },
                            model: {
                              value: _vm.penelitian.waktu,
                              callback: function($$v) {
                                _vm.$set(_vm.penelitian, "waktu", $$v)
                              },
                              expression: "penelitian.waktu"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-col",
                        { attrs: { md: 4 } },
                        [
                          _c("label", [_vm._v("Email Account")]),
                          _vm._v(" "),
                          _c("el-input", {
                            class: {
                              "el-input__error": _vm.$v.penelitian.email.$error
                            },
                            attrs: { placeholder: "Email Kontak person" },
                            model: {
                              value: _vm.penelitian.email,
                              callback: function($$v) {
                                _vm.$set(_vm.penelitian, "email", $$v)
                              },
                              expression: "penelitian.email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-col",
                        { attrs: { md: 4 } },
                        [
                          _c("label", [_vm._v("Password Account")]),
                          _vm._v(" "),
                          _c("el-input", {
                            class: {
                              "el-input__error": _vm.$v.penelitian.email.$error
                            },
                            attrs: {
                              "show-password": "",
                              placeholder: "Email Kontak person"
                            },
                            model: {
                              value: _vm.penelitian.password,
                              callback: function($$v) {
                                _vm.$set(_vm.penelitian, "password", $$v)
                              },
                              expression: "penelitian.password"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.$v.person.$each.$iter, function(p, Pindex) {
                    return _c(
                      "el-card",
                      { key: Pindex, staticClass: "mg-b-20" },
                      [
                        _c("el-divider", {
                          attrs: { "content-position": "left" }
                        }),
                        _vm._v(" "),
                        _c(
                          "el-row",
                          { staticClass: "mg-b-20", attrs: { gutter: 10 } },
                          [
                            _c(
                              "el-col",
                              { attrs: { md: 3 } },
                              [
                                _c(
                                  "center",
                                  [
                                    _c("el-image", {
                                      staticClass: "mg-t-30",
                                      staticStyle: {
                                        width: "100px",
                                        height: "100px"
                                      },
                                      attrs: {
                                        src: _vm.url.uploadImage,
                                        fit: "fit"
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
                              "el-col",
                              { attrs: { md: 20 } },
                              [
                                _c(
                                  "el-row",
                                  { attrs: { gutter: 10 } },
                                  [
                                    _c(
                                      "el-col",
                                      {
                                        staticClass: "mg-b-8",
                                        attrs: { md: 4 }
                                      },
                                      [
                                        _c("label", [
                                          _vm._v("Kategori Identitas")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "el-select",
                                          {
                                            class: {
                                              "el-input__error":
                                                p.identitas_kategori.$error
                                            },
                                            staticStyle: { width: "100%" },
                                            attrs: { placeholder: "Kategori" },
                                            model: {
                                              value:
                                                p.identitas_kategori.$model,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  p.identitas_kategori,
                                                  "$model",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "p.identitas_kategori.$model"
                                            }
                                          },
                                          [
                                            _c(
                                              "el-option",
                                              { attrs: { value: "KTP" } },
                                              [_vm._v("Kartu Tanda Penduduk")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "el-option",
                                              { attrs: { value: "NIM" } },
                                              [_vm._v("Nomor Induk Mahasiswa")]
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
                                      {
                                        staticClass: "mg-b-8",
                                        attrs: { md: 5 }
                                      },
                                      [
                                        _c("label", [
                                          _vm._v("Nomor Indentitas")
                                        ]),
                                        _vm._v(" "),
                                        _c("el-input", {
                                          class: {
                                            "el-input__error":
                                              p.identitas_nomor.$error
                                          },
                                          attrs: {
                                            placeholder: "Nomor Identitas"
                                          },
                                          model: {
                                            value: p.identitas_nomor.$model,
                                            callback: function($$v) {
                                              _vm.$set(
                                                p.identitas_nomor,
                                                "$model",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "p.identitas_nomor.$model"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "el-col",
                                      {
                                        staticClass: "mg-b-8",
                                        attrs: { md: 5 }
                                      },
                                      [
                                        _c("label", [_vm._v("Nama")]),
                                        _vm._v(" "),
                                        _c("el-input", {
                                          class: {
                                            "el-input__error": p.nama.$error
                                          },
                                          attrs: {
                                            placeholder: "Nomor Identitas"
                                          },
                                          model: {
                                            value: p.nama.$model,
                                            callback: function($$v) {
                                              _vm.$set(p.nama, "$model", $$v)
                                            },
                                            expression: "p.nama.$model"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "el-col",
                                      {
                                        staticClass: "mg-b-8",
                                        attrs: { md: 5 }
                                      },
                                      [
                                        _c("label", [
                                          _vm._v("Jurusan / Fakultas / Jabatan")
                                        ]),
                                        _vm._v(" "),
                                        _c("el-input", {
                                          class: {
                                            "el-input__error": p.jurusan.$error
                                          },
                                          attrs: {
                                            placeholder:
                                              "Jurusan / Fakultas / Kategori"
                                          },
                                          model: {
                                            value: p.jurusan.$model,
                                            callback: function($$v) {
                                              _vm.$set(p.jurusan, "$model", $$v)
                                            },
                                            expression: "p.jurusan.$model"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "el-col",
                                      {
                                        staticClass: "mg-b-8",
                                        attrs: { md: 5 }
                                      },
                                      [
                                        _c("label", [
                                          _vm._v("Jenjang Pendidikan")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "el-select",
                                          {
                                            class: {
                                              "el-input__error":
                                                p.jenjang.$error
                                            },
                                            staticStyle: { width: "100%" },
                                            attrs: { placeholder: "Kategori" },
                                            model: {
                                              value: p.jenjang.$model,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  p.jenjang,
                                                  "$model",
                                                  $$v
                                                )
                                              },
                                              expression: "p.jenjang.$model"
                                            }
                                          },
                                          [
                                            _c(
                                              "el-option",
                                              { attrs: { value: "SLTA" } },
                                              [
                                                _vm._v(
                                                  "Sekolah Lanjutan Tingkat Atas"
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "el-option",
                                              { attrs: { value: "D1" } },
                                              [_vm._v("Diploma 1")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "el-option",
                                              { attrs: { value: "D2" } },
                                              [_vm._v("Diploma 2")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "el-option",
                                              { attrs: { value: "D3" } },
                                              [_vm._v("Diploma 3")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "el-option",
                                              { attrs: { value: "D4" } },
                                              [_vm._v("Diploma 4")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "el-option",
                                              { attrs: { value: "S1" } },
                                              [_vm._v("Starta 1")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "el-option",
                                              { attrs: { value: "S2" } },
                                              [_vm._v("Starta 2")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "el-option",
                                              { attrs: { value: "S3" } },
                                              [_vm._v("Strata 3")]
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
                                  { staticClass: "mg-b-15", attrs: { md: 5 } },
                                  [
                                    _c("label", [_vm._v("Email")]),
                                    _vm._v(" "),
                                    _c("el-input", {
                                      class: {
                                        "el-input__error": p.email.$error
                                      },
                                      attrs: { placeholder: "Email" },
                                      model: {
                                        value: p.email.$model,
                                        callback: function($$v) {
                                          _vm.$set(p.email, "$model", $$v)
                                        },
                                        expression: "p.email.$model"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-col",
                                  { staticClass: "mg-b-8", attrs: { md: 3 } },
                                  [
                                    _c("label", [_vm._v("Telp. / HP")]),
                                    _vm._v(" "),
                                    _c("el-input", {
                                      class: {
                                        "el-input__error": p.contact.$error
                                      },
                                      attrs: { placeholder: "Telp. / HP" },
                                      model: {
                                        value: p.contact.$model,
                                        callback: function($$v) {
                                          _vm.$set(p.contact, "$model", $$v)
                                        },
                                        expression: "p.contact.$model"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-col",
                                  { staticClass: "mg-b-8", attrs: { md: 10 } },
                                  [
                                    _c("label", [_vm._v("Alamat")]),
                                    _vm._v(" "),
                                    _c("el-input", {
                                      class: {
                                        "el-input__error": p.alamat.$error
                                      },
                                      attrs: { placeholder: "Alamat" },
                                      model: {
                                        value: p.alamat.$model,
                                        callback: function($$v) {
                                          _vm.$set(p.alamat, "$model", $$v)
                                        },
                                        expression: "p.alamat.$model"
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
                  })
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.steps.kedua.active
            ? _c("div", [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-bordered table-striped table table-valign-middle mg-b-0 table-hover"
                  },
                  [
                    _c(
                      "tbody",
                      _vm._l(_vm.izin.persyaratan, function(i, Index) {
                        return _c("tr", { key: Index }, [
                          _c("td", [_vm._v(_vm._s(Index + 1))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(i.persyaratan))])
                        ])
                      }),
                      0
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "el-row",
            { attrs: { gutter: 10, type: "flex", justify: "center" } },
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.Daftar()
                    }
                  }
                },
                [_vm._v(" Daftar")]
              ),
              _vm._v(" "),
              _vm.AddAnggota
                ? _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.tambahAnggota()
                        }
                      }
                    },
                    [_vm._v(" Anggota Penelitian")]
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
}
var staticRenderFns = []
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

/***/ "./resources/js/components/login/login.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/login/login.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_ecc2ca70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=ecc2ca70&scoped=true& */ "./resources/js/components/login/login.vue?vue&type=template&id=ecc2ca70&scoped=true&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/components/login/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _login_vue_vue_type_style_index_0_id_ecc2ca70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=ecc2ca70&scoped=true&lang=css& */ "./resources/js/components/login/login.vue?vue&type=style&index=0&id=ecc2ca70&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_ecc2ca70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_ecc2ca70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ecc2ca70",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/login/login.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/login/login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/login/login.vue?vue&type=style&index=0&id=ecc2ca70&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/login/login.vue?vue&type=style&index=0&id=ecc2ca70&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_ecc2ca70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=ecc2ca70&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login/login.vue?vue&type=style&index=0&id=ecc2ca70&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_ecc2ca70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_ecc2ca70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_ecc2ca70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_ecc2ca70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_ecc2ca70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/login/login.vue?vue&type=template&id=ecc2ca70&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/login/login.vue?vue&type=template&id=ecc2ca70&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_ecc2ca70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=ecc2ca70&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/login/login.vue?vue&type=template&id=ecc2ca70&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_ecc2ca70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_ecc2ca70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pemohon/permohonan/pengajuan.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/pemohon/permohonan/pengajuan.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pengajuan_vue_vue_type_template_id_1fe061db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pengajuan.vue?vue&type=template&id=1fe061db& */ "./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=template&id=1fe061db&");
/* harmony import */ var _pengajuan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pengajuan.vue?vue&type=script&lang=js& */ "./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pengajuan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pengajuan.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pengajuan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pengajuan_vue_vue_type_template_id_1fe061db___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pengajuan_vue_vue_type_template_id_1fe061db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pemohon/permohonan/pengajuan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pengajuan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pengajuan.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=template&id=1fe061db&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=template&id=1fe061db& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan_vue_vue_type_template_id_1fe061db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pengajuan.vue?vue&type=template&id=1fe061db& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=template&id=1fe061db&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan_vue_vue_type_template_id_1fe061db___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan_vue_vue_type_template_id_1fe061db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pemohon/permohonan/pengajuan2.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/pemohon/permohonan/pengajuan2.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pengajuan2_vue_vue_type_template_id_4778fa32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pengajuan2.vue?vue&type=template&id=4778fa32& */ "./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=template&id=4778fa32&");
/* harmony import */ var _pengajuan2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pengajuan2.vue?vue&type=script&lang=js& */ "./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pengajuan2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pengajuan2.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pengajuan2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pengajuan2_vue_vue_type_template_id_4778fa32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pengajuan2_vue_vue_type_template_id_4778fa32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pemohon/permohonan/pengajuan2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pengajuan2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pengajuan2.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=template&id=4778fa32&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=template&id=4778fa32& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan2_vue_vue_type_template_id_4778fa32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pengajuan2.vue?vue&type=template&id=4778fa32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan2.vue?vue&type=template&id=4778fa32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan2_vue_vue_type_template_id_4778fa32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pengajuan2_vue_vue_type_template_id_4778fa32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pendaftaran/pendaftaran.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/pendaftaran/pendaftaran.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pendaftaran_vue_vue_type_template_id_4e43400c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pendaftaran.vue?vue&type=template&id=4e43400c&scoped=true& */ "./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=template&id=4e43400c&scoped=true&");
/* harmony import */ var _pendaftaran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pendaftaran.vue?vue&type=script&lang=js& */ "./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pendaftaran_vue_vue_type_style_index_0_id_4e43400c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pendaftaran.vue?vue&type=style&index=0&id=4e43400c&lang=css&scoped=true& */ "./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&id=4e43400c&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pendaftaran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pendaftaran_vue_vue_type_template_id_4e43400c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pendaftaran_vue_vue_type_template_id_4e43400c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4e43400c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pendaftaran/pendaftaran.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./pendaftaran.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&id=4e43400c&lang=css&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&id=4e43400c&lang=css&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_style_index_0_id_4e43400c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./pendaftaran.vue?vue&type=style&index=0&id=4e43400c&lang=css&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&id=4e43400c&lang=css&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_style_index_0_id_4e43400c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_style_index_0_id_4e43400c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_style_index_0_id_4e43400c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_style_index_0_id_4e43400c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_style_index_0_id_4e43400c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=template&id=4e43400c&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=template&id=4e43400c&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_template_id_4e43400c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./pendaftaran.vue?vue&type=template&id=4e43400c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=template&id=4e43400c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_template_id_4e43400c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_template_id_4e43400c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pendaftaran/pendaftaranSelesai.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/pendaftaran/pendaftaranSelesai.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pendaftaranSelesai_vue_vue_type_template_id_d0f5f0f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pendaftaranSelesai.vue?vue&type=template&id=d0f5f0f4& */ "./resources/js/components/pendaftaran/pendaftaranSelesai.vue?vue&type=template&id=d0f5f0f4&");
/* harmony import */ var _pendaftaranSelesai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pendaftaranSelesai.vue?vue&type=script&lang=js& */ "./resources/js/components/pendaftaran/pendaftaranSelesai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pendaftaranSelesai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pendaftaranSelesai_vue_vue_type_template_id_d0f5f0f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pendaftaranSelesai_vue_vue_type_template_id_d0f5f0f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pendaftaran/pendaftaranSelesai.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pendaftaran/pendaftaranSelesai.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pendaftaran/pendaftaranSelesai.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaranSelesai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./pendaftaranSelesai.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaranSelesai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaranSelesai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pendaftaran/pendaftaranSelesai.vue?vue&type=template&id=d0f5f0f4&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/pendaftaran/pendaftaranSelesai.vue?vue&type=template&id=d0f5f0f4& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaranSelesai_vue_vue_type_template_id_d0f5f0f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./pendaftaranSelesai.vue?vue&type=template&id=d0f5f0f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaranSelesai.vue?vue&type=template&id=d0f5f0f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaranSelesai_vue_vue_type_template_id_d0f5f0f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaranSelesai_vue_vue_type_template_id_d0f5f0f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pendaftaran/penelitian.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/pendaftaran/penelitian.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _penelitian_vue_vue_type_template_id_5a615543___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penelitian.vue?vue&type=template&id=5a615543& */ "./resources/js/components/pendaftaran/penelitian.vue?vue&type=template&id=5a615543&");
/* harmony import */ var _penelitian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./penelitian.vue?vue&type=script&lang=js& */ "./resources/js/components/pendaftaran/penelitian.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _penelitian_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./penelitian.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/pendaftaran/penelitian.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _penelitian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _penelitian_vue_vue_type_template_id_5a615543___WEBPACK_IMPORTED_MODULE_0__["render"],
  _penelitian_vue_vue_type_template_id_5a615543___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pendaftaran/penelitian.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pendaftaran/penelitian.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pendaftaran/penelitian.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penelitian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./penelitian.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/penelitian.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penelitian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pendaftaran/penelitian.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pendaftaran/penelitian.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_penelitian_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./penelitian.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/penelitian.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_penelitian_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_penelitian_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_penelitian_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_penelitian_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_penelitian_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pendaftaran/penelitian.vue?vue&type=template&id=5a615543&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pendaftaran/penelitian.vue?vue&type=template&id=5a615543& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_penelitian_vue_vue_type_template_id_5a615543___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./penelitian.vue?vue&type=template&id=5a615543& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/penelitian.vue?vue&type=template&id=5a615543&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_penelitian_vue_vue_type_template_id_5a615543___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_penelitian_vue_vue_type_template_id_5a615543___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);