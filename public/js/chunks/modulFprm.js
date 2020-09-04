(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulFprm"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/roles/modul_form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/roles/modul_form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      modul: {
        role_modul_id: null,
        nama: null,
        url: null,
        icon: null,
        parent_id: 0,
        type: null
      },
      parentBoolean: false
    };
  },
  validations: {
    modul: {
      nama: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      url: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      type: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  },
  methods: {
    ToDatabase: function ToDatabase() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("error");
      } else {
        console.log("tidak error");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/roles/modul_form.vue?vue&type=template&id=1d3369f2&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/roles/modul_form.vue?vue&type=template&id=1d3369f2& ***!
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
  return _c("div", { staticClass: "form-layout form-layout-1" }, [
    _c("div", { staticClass: "row mg-b-25" }, [
      _c("div", { staticClass: "col-lg-3" }, [
        _c("div", { staticClass: "form-group" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.trim",
                value: _vm.$v.modul.nama.$model,
                expression: "$v.modul.nama.$model",
                modifiers: { trim: true }
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.$v.modul.nama.$error },
            attrs: { type: "text", placeholder: "Nama Modul" },
            domProps: { value: _vm.$v.modul.nama.$model },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(
                  _vm.$v.modul.nama,
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
          _vm._m(1),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.trim",
                value: _vm.$v.modul.url.$model,
                expression: "$v.modul.url.$model",
                modifiers: { trim: true }
              }
            ],
            staticClass: "form-control",
            class: { "is-invalid": _vm.$v.modul.url.$error },
            attrs: { type: "text", placeholder: "url / path modul" },
            domProps: { value: _vm.$v.modul.url.$model },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.$v.modul.url, "$model", $event.target.value.trim())
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
          _vm._m(2),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.modul.icon,
                expression: "modul.icon"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "icon Modul" },
            domProps: { value: _vm.modul.icon },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.modul, "icon", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-1" }, [
        _c("div", { staticClass: "form-group mg-b-10-force" }, [
          _vm._m(3),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.trim",
                  value: _vm.$v.modul.type.$model,
                  expression: "$v.modul.type.$model",
                  modifiers: { trim: true }
                }
              ],
              staticClass: "form-control select2",
              class: { "is-invalid": _vm.$v.modul.type.$error },
              attrs: { type: "text", "data-placeholder": "Choose country" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.$v.modul.type,
                    "$model",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { label: "--" } }),
              _vm._v(" "),
              _c("option", { attrs: { value: "parent" } }, [_vm._v("Parent")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "child" } }, [_vm._v("child")])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _vm.parentBoolean
        ? _c("div", { staticClass: "col-lg-3" }, [
            _c("div", { staticClass: "form-group mg-b-10-force" }, [
              _vm._m(4),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.modul.parent_id,
                      expression: "modul.parent_id"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { "data-placeholder": "Choose country" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.modul,
                        "parent_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { label: "Choose country" } }),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "USA" } }, [
                    _vm._v("United States of America")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "UK" } }, [
                    _vm._v("United Kingdom")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "China" } }, [
                    _vm._v("China")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "Japan" } }, [_vm._v("Japan")])
                ]
              )
            ])
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-layout-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-info",
          on: {
            click: function($event) {
              return _vm.ToDatabase()
            }
          }
        },
        [_vm._v("Submit Form")]
      ),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-secondary" }, [_vm._v("Cancel")])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-control-label" }, [
      _vm._v("\n          Nama:\n          "),
      _c("span", { staticClass: "tx-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-control-label" }, [
      _vm._v("\n          path/url:\n          "),
      _c("span", { staticClass: "tx-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-control-label" }, [
      _vm._v("\n          icon:\n          "),
      _c("span", { staticClass: "tx-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-control-label" }, [
      _vm._v("\n          Type:\n          "),
      _c("span", { staticClass: "tx-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-control-label" }, [
      _vm._v("\n          Parent:\n          "),
      _c("span", { staticClass: "tx-danger" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/roles/modul_form.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/roles/modul_form.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modul_form_vue_vue_type_template_id_1d3369f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modul_form.vue?vue&type=template&id=1d3369f2& */ "./resources/js/components/roles/modul_form.vue?vue&type=template&id=1d3369f2&");
/* harmony import */ var _modul_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modul_form.vue?vue&type=script&lang=js& */ "./resources/js/components/roles/modul_form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modul_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modul_form_vue_vue_type_template_id_1d3369f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modul_form_vue_vue_type_template_id_1d3369f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/roles/modul_form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/roles/modul_form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/roles/modul_form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modul_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./modul_form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/roles/modul_form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modul_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/roles/modul_form.vue?vue&type=template&id=1d3369f2&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/roles/modul_form.vue?vue&type=template&id=1d3369f2& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modul_form_vue_vue_type_template_id_1d3369f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./modul_form.vue?vue&type=template&id=1d3369f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/roles/modul_form.vue?vue&type=template&id=1d3369f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modul_form_vue_vue_type_template_id_1d3369f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modul_form_vue_vue_type_template_id_1d3369f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);