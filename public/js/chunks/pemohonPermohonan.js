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
  return Promise.all(/*! import() | modulForm */[__webpack_require__.e("vendors~modulForm~pemohonPermohonan~roles~surat"), __webpack_require__.e("modulForm")]).then(__webpack_require__.bind(null, /*! @/js/components/roles/modul_form */ "./resources/js/components/roles/modul_form.vue"));
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
  return Promise.all(/*! import() | modulForm */[__webpack_require__.e("vendors~modulForm~pemohonPermohonan~roles~surat"), __webpack_require__.e("modulForm")]).then(__webpack_require__.bind(null, /*! @/js/components/roles/modul_form */ "./resources/js/components/roles/modul_form.vue"));
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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _perusahaan;

    return {
      termLoading: false,
      widthPratinjau: "0%",
      objectURL: null,
      accepts: ["application/pdf"].join(","),
      perusahaan: (_perusahaan = {
        password: null,
        jenis_usaha: null,
        perusahaan_id: null,
        perusahaan_code: null,
        npwp: null,
        kategori: null,
        nama: null,
        alamat: null,
        email: null,
        contact: null,
        aktif: null,
        created_on: null,
        fullname: null,
        create_on: "online"
      }, _defineProperty(_perusahaan, "aktif", "false"), _defineProperty(_perusahaan, "pemohon", null), _defineProperty(_perusahaan, "hp", null), _perusahaan),
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
        fileTemp: null
      }, {
        name: "Akta Pendirian / Perubahan",
        nameFile: "Unggah Berkas Akta",
        praname: "Unggah Berkas Akta",
        type: null,
        size: 0,
        objectURL: null,
        id: "akta",
        button: false,
        files: null,
        css: null,
        fileTemp: null
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
        fileTemp: null
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
        fileTemp: null
      }],
      steps: {
        active: 1,
        button: "selanjutnya",
        body: [true, false, false]
      },
      readonly: false,
      isLoading: false,
      login: {
        username: null,
        password: null
      },
      url: {
        pendaftaran: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/pendaftaran",
        publicImages: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/public/images"
      },
      empty: [],
      options: {
        jenis: [{
          value: "Badan Usaha",
          label: "Badan Usaha"
        }, {
          value: "Perorangan",
          label: "Perorangan"
        }],
        kategori: [{
          value: "PT",
          label: "PT"
        }, {
          value: "CV",
          label: "CV"
        }, {
          value: "FRIMA",
          label: "FIRMA"
        }, {
          value: "YAYASAN",
          label: "YAYASAN"
        }, {
          value: "KOPERASI",
          label: "KOPERASI"
        }, {
          value: "KELOMPOK MASYARAKAT",
          label: "KELOMPOK MASYARAKAT"
        }, {
          value: "PERSERODA",
          label: "PERSERODA"
        }, {
          value: "PERUMDA",
          label: "PERUMDA"
        }]
      },
      show: {
        kategori: false
      }
    };
  },
  mounted: function mounted() {},
  methods: {
    term: function term() {
      $("#TermAndCondition").modal("show");
    },
    GetPerusahaan: function GetPerusahaan() {
      var _this = this;

      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/master/perusahaan", {
        type: "perusahaanById"
      }).then(function (r) {
        return _this.perusahaan = r.data[0];
      });
    },
    notif: function notif(s, m, type) {
      this.$notify({
        title: s,
        message: m,
        type: type
      });
    },
    redirect: function redirect() {
      window.location.href = _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/dashboard";
    },
    jenisusahachange: function jenisusahachange() {
      if (this.perusahaan.jenis_usaha == "Perorangan") {
        this.show.kategori = false;
        this.perusahaan.kategori = "PERORANGAN";
      } else {
        this.show.kategori = true;
        this.perusahaan.kategori = null;
      }
    },
    Submit: function Submit() {
      var _this2 = this;

      this.$refs["pendaftaranRefs"].validate(function (valid) {
        if (valid) {
          _this2.termLoading = true;

          _this2.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/master/pendaftaran", {
            type: "daftar",
            perusahaan: _this2.perusahaan,
            upload: _this2.upload
          }).then(function (r) {
            _this2.termLoading = false;
            console.log(r);
            window.location.href = _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/pendaftaran/selesai";
            _this2.termLoading = false;
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    nextStep: function nextStep() {
      var _this3 = this;

      var next = this.steps.active;

      if (next == 2) {
        // this.Submit();
        this.CheckUpload();
      } else if (next == 3) {
        this.Submit();
      } else {
        this.$refs["pendaftaranRefs"].validate(function (valid) {
          if (valid) {
            _this3.stepButton();
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      }
    },
    stepButton: function stepButton() {
      var next = this.steps.active;
      this.steps.body = [false, false, false];
      this.steps.active++;
      this.steps.body[next] = true;

      if (next == 2) {
        this.steps.button = "Daftar";
      }
    },
    stepButtonPrevious: function stepButtonPrevious() {
      this.steps.body = [false, false, false];

      if (this.steps.active >= 1) {
        this.steps.active--;
      }

      this.steps.body[this.steps.active - 1] = true;
      console.log(this.steps.active);

      if (this.steps.active > 2) {
        this.steps.button = "Daftar";
      } else {
        this.steps.button = "Selanjutnya";
      }
    },
    changeFile: function changeFile(i, event) {
      var _this4 = this;

      if (this.objectURL) {
        URL.revokeObjectURL(this.objectURL);
      }

      var file = event.target.files[0];
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
        _this4.upload[i].files = e.target.result;
      };
    },
    pratinjau: function pratinjau(i) {
      this.widthPratinjau = "100%";
      this.objectURL = URL.createObjectURL(this.upload[i].fileTemp);
    },
    pratinjauClose: function pratinjauClose() {
      this.widthPratinjau = "0%";
    },
    UploadFIle: function UploadFIle(i) {
      this.axios.post(_js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web + "/pendaftaran/form", {
        type: "UploadFileKeabsahan",
        upload: this.upload,
        perusahaan: this.perusahaan
      }).then(function (r) {
        return console.log(r.data);
      });
    },
    CheckUpload: function CheckUpload() {
      this.empty = [];

      for (var i = 0; i < this.upload.length; i++) {
        if (this.upload[i].files == null) {
          this.empty.push(i);
          this.upload[i].css = "custom-file-upload-error";
        }
      }

      if (!this.empty.length) {
        this.stepButton();
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      url: {
        assets: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].assets,
        web: _js_url__WEBPACK_IMPORTED_MODULE_0__["default"].web
      }
    };
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.itemDS {\n  top: -30px !important;\n  width: 100% !important;\n}\n.itemWarp {\n  margin-top: -40px !important;\n  font-size: 9px !important;\n}\ninput[type=\"file\"] {\n  display: none;\n}\n.custom-file-upload {\n  border: 3px dashed #ccc;\n  display: inline-block;\n  padding: 80px 20px 20px 20px;\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n  vertical-align: middle;\n  min-height: 220px;\n}\n.custom-file-upload-error {\n  border: 3px dashed red;\n}\n.custom-file-upload-success {\n  border: 3px dashed green;\n}\n.overlay-popup {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.9);\n  overflow-x: hidden;\n  transition: 0.5s;\n}\n.overlay-popup-content {\n  position: relative;\n  top: 15%;\n  width: 100%;\n  text-align: center;\n  margin-top: 5px;\n  padding: 10px 50px 10px 50px;\n}\n.overlay-popup a {\n  padding: 8px;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n.overlay-popup a:hover,\n.overlay-popup a:focus {\n  color: #f1f1f1;\n}\n.overlay-popup .closebtn {\n  position: absolute;\n  top: 20px;\n  right: 45px;\n  font-size: 60px;\n}\n@media screen and (max-height: 450px) {\n.overlay-popup a {\n    font-size: 20px;\n}\n.overlay-popup .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n}\n}\n@media screen and (max-width: 450px) {\nobject,\n  iframe {\n    border: 3px solid #cecece;\n    background: #e9e9e9;\n    width: 100%;\n    height: 100px;\n    overflow: scroll;\n}\n}\nobject,\niframe {\n  border: 3px solid #cecece;\n  background: #e9e9e9;\n  width: 100%;\n  height: 600px;\n  overflow: scroll;\n}\n#TermContent {\n  height: 400px;\n  overflow: scroll;\n}\n.el-form-item__error {\n  top: 10px !important;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./pendaftaran.vue?vue&type=style&index=0&scope=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&scope=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=template&id=4e43400c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=template&id=4e43400c& ***!
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
  return _c(
    "div",
    {
      staticClass:
        "d-flex align-items-center justify-content-center ht-100v pd-l-100 pd-r-100"
    },
    [
      _c("div", { staticClass: "col-lg-12 mx-auto" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "loading",
                rawName: "v-loading",
                value: _vm.termLoading,
                expression: "termLoading"
              }
            ],
            staticClass: "auto-form-wrapper"
          },
          [
            _c(
              "el-row",
              { attrs: { gutter: 5 } },
              [
                _c(
                  "el-col",
                  { attrs: { md: 2 } },
                  [
                    _c(
                      "center",
                      [
                        _c("el-image", {
                          staticStyle: { width: "75px", height: "100px" },
                          attrs: {
                            src: _vm.url.publicImages + "/logo.png",
                            fit: "fill"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("el-col", { attrs: { md: 10 } }, [
                  _c("h4", { staticClass: "tx-bold" }, [
                    _vm._v(
                      "DINAS PENANAMAN MODAL DAN PELAYANAN TERPADU SATU PINTU PROVINSI KEPULAUAN RIAU"
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "font-size-sm text-muted" }, [
                    _vm._v("Pendaftaran Online Perizinan dan Nonperizinan")
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-steps",
              {
                attrs: { active: _vm.steps.active, "finish-status": "success" }
              },
              [
                _c("el-step", {
                  attrs: {
                    title: "Step 1",
                    description: "Identitas Perusahaan"
                  }
                }),
                _vm._v(" "),
                _c("el-step", {
                  attrs: { title: "Step 2", description: "Berkas Perusahaan" }
                }),
                _vm._v(" "),
                _c("el-step", {
                  attrs: { title: "Step 3", description: "Selesai" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-form",
              {
                ref: "pendaftaranRefs",
                staticStyle: { "min-height": "350px" },
                attrs: { model: _vm.perusahaan, "label-position": "top" }
              },
              [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.steps.body[0],
                        expression: "steps.body[0]"
                      }
                    ]
                  },
                  [
                    _c(
                      "el-row",
                      [
                        _c(
                          "el-col",
                          { attrs: { span: 11 } },
                          [
                            _c(
                              "el-form-item",
                              {
                                attrs: {
                                  label: "NPWP",
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
                                  staticClass: "itemDS",
                                  attrs: {
                                    size: "small",
                                    placeholder: "NPWP",
                                    disabled: _vm.readonly
                                  },
                                  model: {
                                    value: _vm.perusahaan.npwp,
                                    callback: function($$v) {
                                      _vm.$set(_vm.perusahaan, "npwp", $$v)
                                    },
                                    expression: "perusahaan.npwp"
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
                      "el-row",
                      { attrs: { gutter: 10 } },
                      [
                        _c(
                          "el-col",
                          { attrs: { md: 3 } },
                          [
                            _c(
                              "el-form-item",
                              {
                                staticClass: "itemWarp",
                                attrs: {
                                  label: "JENIS USAHA",
                                  prop: "jenis_usaha",
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
                                    staticStyle: { top: "-30px !important" },
                                    attrs: {
                                      size: "small",
                                      placeholder: "Jenis Usaha",
                                      prop: "jenis_usaha",
                                      rules: {
                                        required: true,
                                        message: "field tidak boleh kosong",
                                        trigger: "blur"
                                      }
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.jenisusahachange()
                                      }
                                    },
                                    model: {
                                      value: _vm.perusahaan.jenis_usaha,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.perusahaan,
                                          "jenis_usaha",
                                          $$v
                                        )
                                      },
                                      expression: "perusahaan.jenis_usaha"
                                    }
                                  },
                                  _vm._l(_vm.options.jenis, function(item) {
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
                        _vm.show.kategori
                          ? _c(
                              "el-col",
                              { attrs: { md: 3 } },
                              [
                                _c(
                                  "el-form-item",
                                  {
                                    staticClass: "itemWarp",
                                    attrs: {
                                      label: "KATEGORI",
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
                                        staticStyle: {
                                          top: "-30px !important"
                                        },
                                        attrs: {
                                          size: "small",
                                          placeholder: "Jenis Usaha",
                                          prop: "jenis_usaha",
                                          rules: {
                                            required: true,
                                            message: "field tidak boleh kosong",
                                            trigger: "blur"
                                          }
                                        },
                                        model: {
                                          value: _vm.perusahaan.kategori,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.perusahaan,
                                              "kategori",
                                              $$v
                                            )
                                          },
                                          expression: "perusahaan.kategori"
                                        }
                                      },
                                      _vm._l(_vm.options.kategori, function(
                                        item
                                      ) {
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
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "el-col",
                          { attrs: { md: 11 } },
                          [
                            _c(
                              "el-form-item",
                              {
                                staticClass: "itemWarp",
                                attrs: {
                                  label: "NAMA",
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
                                  staticClass: "itemDS",
                                  staticStyle: { width: "100% !important" },
                                  attrs: {
                                    size: "small",
                                    placeholder: "Nama Perusahaan",
                                    disabled: _vm.readonly
                                  },
                                  model: {
                                    value: _vm.perusahaan.nama,
                                    callback: function($$v) {
                                      _vm.$set(_vm.perusahaan, "nama", $$v)
                                    },
                                    expression: "perusahaan.nama"
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
                      "el-row",
                      { attrs: { gutter: 10 } },
                      [
                        _c(
                          "el-col",
                          { attrs: { md: 9 } },
                          [
                            _c(
                              "el-form-item",
                              {
                                staticClass: "itemWarp",
                                attrs: {
                                  label: "EMAIL",
                                  prop: "email",
                                  rules: [
                                    {
                                      required: true,
                                      message: "field tidak boleh kosong",
                                      trigger: "blur"
                                    },
                                    {
                                      type: "email",
                                      message: "Email tidak valid",
                                      trigger: "blur"
                                    }
                                  ]
                                }
                              },
                              [
                                _c("el-input", {
                                  staticClass: "itemDS",
                                  staticStyle: { width: "100% !important" },
                                  attrs: {
                                    size: "small",
                                    placeholder: "xxxxx@xxx.com",
                                    disabled: _vm.readonly
                                  },
                                  model: {
                                    value: _vm.perusahaan.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.perusahaan, "email", $$v)
                                    },
                                    expression: "perusahaan.email"
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
                          { attrs: { md: 6 } },
                          [
                            _c(
                              "el-form-item",
                              {
                                staticClass: "itemWarp",
                                attrs: {
                                  label: "PASSWORD",
                                  prop: "password",
                                  rules: [
                                    {
                                      required: true,
                                      message: "field tidak boleh kosong",
                                      trigger: "blur"
                                    }
                                  ]
                                }
                              },
                              [
                                _c("el-input", {
                                  staticClass: "itemDS",
                                  staticStyle: { width: "100% !important" },
                                  attrs: {
                                    size: "small",
                                    placeholder: "xxxxx",
                                    "show-password": "",
                                    disabled: _vm.readonly
                                  },
                                  model: {
                                    value: _vm.perusahaan.password,
                                    callback: function($$v) {
                                      _vm.$set(_vm.perusahaan, "password", $$v)
                                    },
                                    expression: "perusahaan.password"
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
                          { attrs: { md: 5 } },
                          [
                            _c(
                              "el-form-item",
                              {
                                staticClass: "itemWarp",
                                attrs: {
                                  label: "Telp / Hp",
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
                                  staticClass: "itemDS",
                                  staticStyle: { width: "100% !important" },
                                  attrs: {
                                    size: "small",
                                    placeholder: "(kode area) xxxx.xxxx.xxxx",
                                    disabled: _vm.readonly
                                  },
                                  model: {
                                    value: _vm.perusahaan.contact,
                                    callback: function($$v) {
                                      _vm.$set(_vm.perusahaan, "contact", $$v)
                                    },
                                    expression: "perusahaan.contact"
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
                      "el-row",
                      { attrs: { gutter: 10 } },
                      [
                        _c(
                          "el-col",
                          { attrs: { md: 18 } },
                          [
                            _c(
                              "el-form-item",
                              {
                                staticClass: "itemWarp",
                                attrs: {
                                  label: "ALAMAT",
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
                                  staticClass: "itemDS",
                                  staticStyle: { width: "100% !important" },
                                  attrs: {
                                    size: "small",
                                    type: "textarea",
                                    placeholder: "Alamat Perusahaan",
                                    disabled: _vm.readonly
                                  },
                                  model: {
                                    value: _vm.perusahaan.alamat,
                                    callback: function($$v) {
                                      _vm.$set(_vm.perusahaan, "alamat", $$v)
                                    },
                                    expression: "perusahaan.alamat"
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
                    _vm.show.kategori
                      ? _c(
                          "el-row",
                          { attrs: { gutter: 10 } },
                          [
                            _c(
                              "el-divider",
                              { attrs: { "content-position": "left" } },
                              [_vm._v("CONTACT PERSON")]
                            ),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "el-col",
                              { attrs: { md: 4 } },
                              [
                                _c(
                                  "el-form-item",
                                  {
                                    staticClass: "itemWarp",
                                    attrs: {
                                      label: "Nama Pemohon",
                                      prop: "pemohon"
                                    }
                                  },
                                  [
                                    _c("el-input", {
                                      staticClass: "itemDS",
                                      staticStyle: { width: "100% !important" },
                                      attrs: {
                                        size: "small",
                                        placeholder: "Nama Pengurus"
                                      },
                                      model: {
                                        value: _vm.perusahaan.pemohon,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.perusahaan,
                                            "pemohon",
                                            $$v
                                          )
                                        },
                                        expression: "perusahaan.pemohon"
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
                              { attrs: { md: 4 } },
                              [
                                _c(
                                  "el-form-item",
                                  {
                                    staticClass: "itemWarp",
                                    attrs: { label: "Hp", prop: "hp" }
                                  },
                                  [
                                    _c("el-input", {
                                      staticClass: "itemDS",
                                      staticStyle: { width: "100% !important" },
                                      attrs: {
                                        size: "small",
                                        placeholder: "hp Pengurus"
                                      },
                                      model: {
                                        value: _vm.perusahaan.hp,
                                        callback: function($$v) {
                                          _vm.$set(_vm.perusahaan, "hp", $$v)
                                        },
                                        expression: "perusahaan.hp"
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
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.steps.body[1],
                        expression: "steps.body[1]"
                      }
                    ],
                    staticStyle: { "margin-top": "20px" }
                  },
                  [
                    _c(
                      "el-row",
                      { attrs: { gutter: 20 } },
                      _vm._l(_vm.upload, function(u, Uindex) {
                        return _c("el-col", { key: Uindex, attrs: { md: 6 } }, [
                          _c("div"),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "custom-file-upload",
                              class: u.css,
                              attrs: { for: u.id }
                            },
                            [
                              _c("i", { staticClass: "fa fa-cloud-upload" }),
                              _vm._v(" "),
                              _c("div", [_vm._v(_vm._s(u.praname))]),
                              _vm._v(" "),
                              u.button
                                ? _c(
                                    "el-button",
                                    {
                                      attrs: { type: "primary", size: "mini" },
                                      on: {
                                        click: function($event) {
                                          return _vm.pratinjau(Uindex)
                                        }
                                      }
                                    },
                                    [_vm._v("Pratinjau")]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("input", {
                            attrs: {
                              type: "file",
                              id: u.id,
                              accept: _vm.accepts
                            },
                            on: {
                              change: function($event) {
                                return _vm.changeFile(Uindex, $event)
                              }
                            }
                          })
                        ])
                      }),
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.steps.body[2],
                        expression: "steps.body[2]"
                      }
                    ],
                    staticStyle: { "margin-top": "30px" }
                  },
                  [
                    _c(
                      "el-row",
                      { attrs: { gutter: 5 } },
                      [
                        _c("el-col", { attrs: { md: 2 } }, [_vm._v("NPWP")]),
                        _vm._v(" "),
                        _c("el-col", { attrs: { md: 22 } }, [
                          _vm._v(_vm._s(_vm.perusahaan.npwp))
                        ]),
                        _vm._v(" "),
                        _c("el-col", { attrs: { md: 2 } }, [_vm._v("Nama")]),
                        _vm._v(" "),
                        _vm.perusahaan.kategori == "Perorangan"
                          ? _c("el-col", { attrs: { md: 22 } }, [
                              _vm._v(_vm._s(_vm.perusahaan.nama))
                            ])
                          : _c("el-col", { attrs: { md: 22 } }, [
                              _vm._v(
                                _vm._s(_vm.perusahaan.kategori) +
                                  ". " +
                                  _vm._s(_vm.perusahaan.nama)
                              )
                            ]),
                        _vm._v(" "),
                        _c("el-col", { attrs: { md: 2 } }, [
                          _vm._v("Email / Hp")
                        ]),
                        _vm._v(" "),
                        _c("el-col", { attrs: { md: 22 } }, [
                          _vm._v(
                            _vm._s(_vm.perusahaan.email) +
                              " / " +
                              _vm._s(_vm.perusahaan.contact)
                          )
                        ]),
                        _vm._v(" "),
                        _c("el-col", { attrs: { md: 2 } }, [_vm._v("Alamat")]),
                        _vm._v(" "),
                        _c("el-col", { attrs: { md: 22 } }, [
                          _vm._v(_vm._s(_vm.perusahaan.alamat))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-divider",
                      { attrs: { "content-position": "left" } },
                      [_vm._v("Berkas Perusahaan")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-table",
                      {
                        staticStyle: { width: "100%" },
                        attrs: { data: _vm.upload, border: "" }
                      },
                      [
                        _c("el-table-column", {
                          attrs: { prop: "name", label: "" }
                        }),
                        _vm._v(" "),
                        _c("el-table-column", {
                          attrs: { prop: "nameFile", label: "" }
                        }),
                        _vm._v(" "),
                        _c("el-table-column", {
                          attrs: { label: " ", width: "120" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(scope) {
                                return [
                                  _c(
                                    "el-button",
                                    {
                                      attrs: { type: "primary", size: "small" },
                                      on: {
                                        click: function($event) {
                                          return _vm.pratinjau(
                                            scope.$index,
                                            $event
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Pratinjau")]
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
              ]
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            this.steps.active > 1
              ? _c(
                  "el-button",
                  {
                    attrs: { type: "danger" },
                    on: { click: _vm.stepButtonPrevious }
                  },
                  [_vm._v("Sebelumnya")]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "el-button",
              { attrs: { type: "primary" }, on: { click: _vm.nextStep } },
              [_vm._v(_vm._s(_vm.steps.button))]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("p", { staticClass: "footer-text text-center" }, [
          _vm._v("copyright © 2020 DPMPMTSP KEPRI. All rights reserved.")
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "overlay-popup",
          style: { width: _vm.widthPratinjau },
          attrs: { id: "myNav" }
        },
        [
          _c(
            "a",
            {
              staticClass: "closebtn",
              attrs: { href: "javascript:void(0)" },
              on: {
                click: function($event) {
                  return _vm.pratinjauClose()
                }
              }
            },
            [_vm._v("×")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "overlay-popup-content" }, [
            _c("iframe", { attrs: { src: _vm.objectURL } })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.termLoading,
              expression: "termLoading"
            }
          ],
          staticClass: "modal fade",
          attrs: {
            id: "TermAndCondition",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "modal-dialog modal-xl",
              attrs: { role: "document" }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(0),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.Submit()
                        }
                      }
                    },
                    [_vm._v("Daftar")]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Term & Condition")]
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
    return _c(
      "div",
      { staticClass: "modal-body", attrs: { id: "TermContent" } },
      [
        _c(
          "div",
          {
            staticStyle: {
              color: "rgb(75, 75, 75)",
              "font-family":
                'KohinoorDevanagari, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              "background-color": "rgb(243, 243, 243)"
            }
          },
          [
            _vm._v(
              "Selamat Datang di Situs Web kami! Kami berharap bahwa Anda akan menikmati pengalaman online Anda."
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticStyle: {
              color: "rgb(75, 75, 75)",
              "font-family":
                'KohinoorDevanagari, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              "background-color": "rgb(243, 243, 243)"
            }
          },
          [
            _c("br"),
            _vm._v(
              "Wyeth Nutrition Parenting Club berkomitmen untuk menjaga kepercayaan dengan pengguna Situs Web kami. Persyaratan di bawah ini mengatur penggunaan Anda atas situs web ini.\n            "
            ),
            _c("br"),
            _vm._v(" \n          ")
          ]
        ),
        _vm._v(" "),
        _c(
          "ol",
          {
            staticStyle: {
              "margin-bottom": "0px",
              "padding-left": "1.25rem",
              color: "rgb(75, 75, 75)",
              "font-family":
                'KohinoorDevanagari, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              "background-color": "rgb(243, 243, 243)"
            }
          },
          [
            _c("li", [
              _vm._v(
                "\n              Penggunaan yang dapat diterima\n              "
              ),
              _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                _c("br"),
                _vm._v(
                  "Silakan menjelajahi Situs Web kami dengan leluasa dan, jika tersedia, kontribusi bahan untuk itu, seperti pertanyaan, posting dan konten multimedia (misalnya gambar, video).\n                "
                ),
                _c("br"),
                _vm._v(" \n              ")
              ]),
              _vm._v(" "),
              _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                _vm._v(
                  "\n                Namun, penggunaan Situs Web dan bahan yang diposting ke situs ini seharusnya bukan yang ilegal atau yang menyinggung dengan cara apapun. Anda harus berhati-hati untuk tidak:\n                "
                ),
                _c("br"),
                _vm._v(" \n              ")
              ]),
              _vm._v(" "),
              _c("ul", { staticStyle: { "padding-left": "1.25rem" } }, [
                _c("li", [
                  _vm._v("(a) melanggar hak orang lain untuk privasi;")
                ]),
                _vm._v(" "),
                _c("li", [_vm._v("(b) melanggar hak kekayaan intelektual;")]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "(c) membuat pernyataan yang memfitnah (termasuk terhadap Wyeth Nutrition), berhubungan dengan pornografi, bersifat rasis atau xenofobia, mempromosikan kebencian atau menghasut kekerasan atau gangguan;"
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "(d) mengunggah file yang berisi virus atau dapat menyebabkan masalah keamanan; atau"
                  )
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v("(e) tidak membahayakan integritas Situs Web.")
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                _c("br"),
                _vm._v(
                  "Harap dicatat bahwa Wyeth Nutrition dapat menghapus konten apapun dari Situs Web yang dipercaya mungkin ilegal atau menyinggung.\n                "
                ),
                _c("br"),
                _vm._v(" \n              ")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("\n              Perlindungan Data\n              "),
              _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                _c("br"),
                _vm._v(
                  "Pernyataan Privasi kami berlaku untuk data pribadi atau bahan yang dibagi bersama pada Situs Web ini. Cari tahu lebih lanjut \n                "
                ),
                _c(
                  "a",
                  {
                    staticStyle: {
                      color: "rgb(208, 92, 76)",
                      "touch-action": "manipulation",
                      transition: "all 0.2s ease-in-out 0s"
                    },
                    attrs: {
                      href:
                        "https://www.parentingclub.co.id/page/privacy-policy"
                    }
                  },
                  [_vm._v("di sini")]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" \n              ")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("\n              Kekayaan Intelektual\n              "),
              _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                _vm._v(" ")
              ]),
              _vm._v(" "),
              _c("ul", { staticStyle: { "padding-left": "1.25rem" } }, [
                _c("li", [
                  _vm._v(
                    "\n                  3.1. Konten yang disediakan oleh Wyeth Nutrition\n                  "
                  ),
                  _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                    _c("br"),
                    _vm._v(
                      "Semua hak kekayaan intelektual, termasuk hak cipta dan merek dagang, bahan yang diterbitkan oleh atau atas nama Wyeth Nutrition di Situs Web (misalnya teks dan gambar) yang dimiliki oleh Wyeth Nutrition atau pemberi lisensinya.\n                    "
                    ),
                    _c("br"),
                    _vm._v(" \n                  ")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                    _vm._v(
                      "\n                    Anda mungkin mereproduksi ekstrak dari Situs Web ini untuk penggunaan pribadi Anda sendiri (misalnya penggunaan non-komersial) asalkan Anda menyimpan semua hak kekayaan intelektual secara utuh dan dengan rasa hormat, termasuk pemberitahuan hak cipta yang mungkin muncul di konten tersebut (misalnya @2014 Wyeth Nutrition).\n                    "
                    ),
                    _c("br"),
                    _vm._v(" \n                  ")
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                  3.2. Konten Anda sediakan\n                  "
                  ),
                  _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                    _c("br"),
                    _vm._v(
                      "Anda mewakili untuk Wyeth Nutrition bahwa Anda baik sebagai penulis konten yang Anda kontribusikan ke Situs Web ini, ataupun bahwa Anda memiliki hak (yaitu: telah diberi izin oleh pemegang hak) dan mampu memberikan kontribusi atas konten tersebut (misalnya gambar, video, musik) ke Situs Web.\n                    "
                    ),
                    _c("br"),
                    _vm._v(" \n                  ")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                    _vm._v(
                      "\n                    Anda setuju bahwa konten tersebut akan diperlakukan sebagai bukan rahasia dan Anda memberikan Wyeth Nutrition royalti, berkelanjutan, dan lisensi luas secara gratis untuk menggunakan (termasuk untuk mengungkapkan, mereproduksi, mentransmisikan, mempublikasikan, atau menyiarkan) konten yang Anda berikan untuk tujuan yang berkaitan dengan bisnisnya.\n                    "
                    ),
                    _c("br"),
                    _vm._v(" \n                  ")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                    _vm._v(
                      "\n                    Harap dicatat bahwa Wyeth Nutrition bebas untuk memutuskan apakah menggunakan atau tidak menggunakan konten ini dan bahwa Wyeth Nutrition mungkin telah mengembangkan edisi serupa atau telah memperoleh konten tersebut dari sumber lain, dalam hal ini semua hak kekayaan intelektual di konten ini tetap ada pada Wyeth Nutrition dan pemberi lisensinya.\n                    "
                    ),
                    _c("br"),
                    _vm._v(" \n                  ")
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n                  3.3. Kewajiban\n                  "
                  ),
                  _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                    _c("br"),
                    _vm._v(
                      "Sementara Wyeth Nutrition menggunakan semua upaya yang wajar untuk memastikan keakuratan dari bahan pada Situs Web kami dan untuk menghindari gangguan, kami tidak bertanggung jawab atas informasi yang tidak akurat, gangguan, penghentian atau peristiwa lain yang dapat menyebabkan Anda mengalami kerugian, baik secara langsung (misalnya kegagalan komputer) atau tidak langsung (misalnya kehilangan keuntungan). Setiap ketergantungan pada bahan-bahan dalam situs Web ini akan menjadi risiko Anda sendiri.\n                    "
                    ),
                    _c("br"),
                    _vm._v(" \n                  ")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                    _vm._v(
                      "\n                    Situs Web ini mungkin berisi hubungan ke situs-situs web di luar Wyeth Nutrition. Wyeth Nutrition tidak memiliki kontrol atas situs web pihak ketiga tersebut, tidak selalu mendukung mereka dan tidak bertanggung jawab untuk mereka, termasuk untuk konten, akurasi atau fungsi mereka. Sebagai akibatnya, kami mengharapkan agar Anda berhati-hati dalam meninjau pernyataan hukum situs-situs web pihak ketiga tersebut, termasuk menjaga diri tetap mengetahui informasi mengenai perubahan atas mereka.\n                    "
                    ),
                    _c("br"),
                    _vm._v(" \n                  ")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                    _vm._v(
                      '\n                    Anda dapat mengoperasikan situs pihak ketiga dan menginginkan hubungan ke Situs Web ini. Dalam hal ini, Wyeth Nutrition tidak keberatan dengan hubungan seperti itu asalkan Anda menggunakan homepage URL yang tepat dari Situs Web ini (misalnya hubungan yang tidak dalam) dan tidak menyarankan dengan cara apapun yang Anda berafiliasi dengan atau didukung oleh Wyeth Nutrition. Anda tidak harus menggunakan "framing" atau praktik serupa, dan harus memastikan bahwa hubungan ke Situs Web membuka pada jendela baru.\n                    '
                    ),
                    _c("br"),
                    _vm._v(" \n                  ")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("\n              Kontak kita\n              "),
              _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                _c("br"),
                _vm._v(
                  "Situs ini dioperasikan oleh PT. WYETH NUTRITION SDUAENAM\n                "
                ),
                _c("br"),
                _vm._v(" \n              ")
              ]),
              _vm._v(" "),
              _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                _vm._v(
                  "\n                Jika Anda memiliki pertanyaan atau komentar tentang Situs Web, jangan ragu untuk menghubungi kami melalui (i) telepon di 080018-21028 atau (ii) surat biasa di Perkantoran Hijau Arkadia, Jl. Let Jen. TB. Simatupang Kav. 88, Jakarta 12520, Indonesia. PO BOX 5555, Jakarta 12000.\n                "
                ),
                _c("br"),
                _vm._v(" \n              ")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("\n              Perubahan\n              "),
              _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                _c("br"),
                _vm._v(
                  "Wyeth Nutrition memiliki hak untuk membuat perubahan atas persyaratan penggunaan ini. Silakan lihat halaman ini pada setiap saat untuk meninjau persyaratan penggunaan dan informasi baru.\n                "
                ),
                _c("br"),
                _vm._v(" \n              ")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "\n              Hukum dan yurisdiksi yang mengatur\n              "
              ),
              _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                _c("br"),
                _vm._v(
                  "Situs Web ini ditujukan untuk pengguna dari Indonesia saja. Wyeth Nutrition tidak membuat pernyataan bahwa produk dan konten Situs Web ini sesuai atau tersedia di lokasi selain Indonesia.\n                "
                ),
                _c("br"),
                _vm._v(" \n              ")
              ]),
              _vm._v(" "),
              _c("p", { staticStyle: { "margin-bottom": "1.5rem" } }, [
                _vm._v(
                  "Anda dan Wyeth Nutrition setuju bahwa setiap klaim atau sengketa yang berkaitan dengan situs web ini akan diatur oleh hukum Republik dan dibawa ke pengadilan dari Jakarta Selatan di Indonesia."
                )
              ])
            ])
          ]
        )
      ]
    )
  }
]
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
        "container-fluid page-body-wrapper full-page-wrapper ht-100v mg-t-150",
      staticStyle: { "margin-top": "150px" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "content-wrapper d-flex align-items-center auth auth-bg-1 theme-one"
        },
        [
          _c("div", { staticClass: "row w-100" }, [
            _c("div", { staticClass: "col-md-8 mx-auto" }, [
              _c(
                "div",
                { staticClass: "auto-form-wrapper" },
                [
                  _c("center", [_vm._v("DPMPTSP PROVINSI KEPRI")]),
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
                              "Pendaftaran account anda sudah di terima, 1 step lagi untuk menyelesaikannya. silahkan login dengan email yang telah di isi sebelumnya"
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-primary btn-sm",
                              attrs: {
                                href: "http://appkepri.com/siJempol/login'"
                              }
                            },
                            [_vm._v("masuk SI-JEMPOL")]
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
        ]
      )
    ]
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
/* harmony import */ var _pendaftaran_vue_vue_type_template_id_4e43400c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pendaftaran.vue?vue&type=template&id=4e43400c& */ "./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=template&id=4e43400c&");
/* harmony import */ var _pendaftaran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pendaftaran.vue?vue&type=script&lang=js& */ "./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pendaftaran_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pendaftaran.vue?vue&type=style&index=0&scope=true&lang=css& */ "./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&scope=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pendaftaran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pendaftaran_vue_vue_type_template_id_4e43400c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pendaftaran_vue_vue_type_template_id_4e43400c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./pendaftaran.vue?vue&type=style&index=0&scope=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=style&index=0&scope=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=template&id=4e43400c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=template&id=4e43400c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_template_id_4e43400c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./pendaftaran.vue?vue&type=template&id=4e43400c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pendaftaran/pendaftaran.vue?vue&type=template&id=4e43400c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_template_id_4e43400c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pendaftaran_vue_vue_type_template_id_4e43400c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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