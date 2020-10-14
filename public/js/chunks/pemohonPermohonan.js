(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pemohonPermohonan"],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    pushToSelesai: function pushToSelesai() {
      location.href = _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/pendaftaran/selesai?npwp=" + this.perusahaan.npwp;
    },
    changeFile: function changeFile(i, event) {
      var _this = this;

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
        _this.upload[i].files = e.target.result;
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
      var _this2 = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/master/pendaftaran", {
        type: "UplaodFileSingle",
        upload: this.upload[i],
        perusahaan: this.perusahaan
      }, {
        onUploadProgress: function (progressEvent) {
          this.upload[i].progressBar = parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total));
        }.bind(this)
      }).then(function (r) {
        _this2.$delete(_this2.queue, 0), _this2.ExecuteUpload();
      });
    },
    CheckNpwp: function CheckNpwp() {
      var _this3 = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/perizinan/perusahaan", {
        type: "dataBynpwp",
        npwp: this.perusahaan.npwp
      }).then(function (r) {
        console.log(r);
        r.data == "" ? "" : (_this3.perusahaan = r.data, _this3.$alert("Perusahaan ini Telah Melakukan Pendaftaran, Silahkan Isi Form yang telah di sediakan.", "Informasi", {
          confirmButtonText: "OK",
          callback: function callback(action) {
            _this3.$message({
              type: "info",
              message: "action: ".concat(action)
            });
          }
        }));
      });
    },
    InsertDatabase: function InsertDatabase() {
      var _this4 = this;

      this.loading.submit = true;
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/master/pendaftaran", {
        type: "daftar",
        perusahaan: this.perusahaan,
        user: this.user
      }).then(function (r) {
        _this4.CheckUpload();
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pemohon/permohonan/pengajuan.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.wd-20 {\r\n  width: 40px;\n}\n.wd-40 {\r\n  width: 80px;\n}\n.wd-100px {\r\n  width: 100px;\n}\r\n", ""]);

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
exports.push([module.i, "\n.wd-20 {\r\n  width: 40px;\n}\n.wd-40 {\r\n  width: 80px;\n}\n.wd-100px {\r\n  width: 100px;\n}\ntr.errorUpload td {\r\n  background-color: #d7574a;\r\n  color: white;\n}\n.inputWrapper {\r\n  height: 32px;\r\n  width: 64px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  cursor: pointer;\r\n  /*Using a background color, but you can use a background image to represent a button*/\r\n  background-color: #ddf;\n}\n.fileInput {\r\n  cursor: pointer;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 99;\r\n  /*This makes the button huge. If you want a bigger button, increase the font size*/\r\n  font-size: 50px;\r\n  /*Opacity settings for all browsers*/\r\n  opacity: 0;\r\n  -moz-opacity: 0;\r\n  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);\n}\ninput[type=\"file\"] {\r\n  display: none;\n}\n.custom-file-upload {\r\n  border: 1px solid #ccc;\r\n  display: inline-block;\r\n  padding: 6px 12px;\r\n  cursor: pointer;\n}\r\n", ""]);

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
exports.push([module.i, "\n.form-control[data-v-4e43400c] {\n  border-radius: 6px;\n}\ninput[type=\"file\"][data-v-4e43400c] {\n  display: none;\n}\n.custom-file-upload[data-v-4e43400c] {\n  border: 3px dashed #ccc;\n  display: inline-block;\n  padding: 40px 5px 5px 5px;\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n  vertical-align: middle;\n  min-height: 150px;\n}\n.custom-file-upload-error[data-v-4e43400c] {\n  border: 3px dashed red;\n}\n.custom-file-upload-success[data-v-4e43400c] {\n  border: 3px dashed green;\n}\n", ""]);

// exports


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
                    [_vm._v("\n          IDENTITAS PERUSAHAAN\n        ")]
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
                                "\n                  Nomor Pokok Wajib Pajak:\n                  "
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
                                  "\n                  Kategori:\n                  "
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
                                      _vm.$v.perusahaan.kategori,
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
                                  { attrs: { value: "Badan Usaha" } },
                                  [_vm._v("Badan Usaha")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "perorangan" } },
                                  [_vm._v("Perorangan")]
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-2" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { staticClass: "form-control-label tx-gray-600" },
                              [
                                _vm._v(
                                  "\n                  Jenis Perusahaan:\n                  "
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
                                    expression: "$v.perusahaan.jenis.$model",
                                    modifiers: { trim: true }
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.$v.perusahaan.jenis.$error
                                },
                                attrs: { readonly: _vm.loading.submit },
                                on: {
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
                                      _vm.$v.perusahaan.jenis,
                                      "$model",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "PT" } }, [
                                  _vm._v("PT")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CV" } }, [
                                  _vm._v("CV")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "KELOMPOK MASYARAKAT" } },
                                  [
                                    _vm._v(
                                      "\n                    KELOMPOK MASYARAKAT\n                  "
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-4" }, [
                          _c("div", { staticClass: "form-group tx-gray-600" }, [
                            _c("label", { staticClass: "form-control-label" }, [
                              _vm._v(
                                "\n                  Nama:\n                  "
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
                                "\n                  email:\n                  "
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
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.$v.perusahaan.email,
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
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-3" }, [
                          _c("div", { staticClass: "form-group tx-gray-600" }, [
                            _c("label", { staticClass: "form-control-label" }, [
                              _vm._v(
                                "\n                  Provinsi :\n                  "
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
                                "\n                  Kota / Kabupaten:\n                  "
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
                                "\n                  Kode Pos :\n                  "
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
                                "\n                  Telp / Hp:\n                  "
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
                                  "\n                  Alamat:\n                  "
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
                                "\n                  Username :\n                  "
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
                                "\n                  password:\n                  "
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
                                "\n                  password:\n\n                  "
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
                                  _vm._v("\n                Loading"),
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
                              "Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu Provinsi\n              Kepulauan Riau"
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
                            "\n          Data Field Harus Terisi\n          "
                          ),
                          !_vm.$v.perusahaan.npwp.minLength
                            ? _c("p", [_vm._v("15 Digit NPWP")])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$v.user.repeatPassword.$error
                            ? _c("span", [
                                _vm._v("\n            Password Tidak Sama")
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



/***/ })

}]);