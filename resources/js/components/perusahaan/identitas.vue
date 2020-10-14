<template>
  <div>
    <div class="br-pageheader pd-y-15 pd-l-20">
      <nav class="breadcrumb pd-0 mg-0 tx-12"></nav>
    </div>
    <!-- br-pageheader -->

    <div class="br-msg-header d-flex justify-content-between">
      <div class="media align-items-center">
        <div class="media-body mg-l-10">
          <!-- <h4 class="tx-gray-800 mg-b-5">{{page.name}}</h4> -->
        </div>
        <!-- media-body -->
      </div>
    </div>

    <div class="br-pagebody">
      <div
        class="br-section-wrapper"
        v-loading="isLoading"
        element-loading-text="Loading..."
      >
        <div class="row">
          <div class="col-lg-3">
            <div class="form-group">
              <label class="form-control-label">
                Meta Title:
                <span class="tx-danger">*</span>
              </label>
              <input
                class="form-control"
                :class="{ 'is-invalid': $v.identitas.meta_title.$error }"
                type="text"
                v-model.trim="$v.identitas.meta_title.$model"
                placeholder="Meta Title"
              />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group">
              <label class="form-control-label">
                Meta Author:
                <span class="tx-danger">*</span>
              </label>
              <input
                class="form-control"
                :class="{ 'is-invalid': $v.identitas.meta_author.$error }"
                type="text"
                v-model.trim="$v.identitas.meta_author.$model"
                placeholder="Meta Author"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="form-control-label">
                Meta Description:
                <span class="tx-danger">*</span>
              </label>
              <input
                class="form-control"
                :class="{ 'is-invalid': $v.identitas.meta_description.$error }"
                type="text"
                v-model.trim="$v.identitas.meta_description.$model"
                placeholder="Meta Description"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <div class="form-group">
              <label class="form-control-label">
                Login Title:
                <span class="tx-danger">*</span>
              </label>
              <input
                class="form-control"
                :class="{ 'is-invalid': $v.identitas.login_title.$error }"
                type="text"
                v-model.trim="$v.identitas.login_title.$model"
                placeholder="Login Title"
              />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group">
              <label class="form-control-label">
                Login Subtitle:
                <span class="tx-danger">*</span>
              </label>
              <input
                class="form-control"
                :class="{ 'is-invalid': $v.identitas.login_subtitle.$error }"
                type="text"
                v-model.trim="$v.identitas.login_subtitle.$model"
                placeholder="Login Subtitle"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <hr />
          <div class="col-md-12">
            <button type="button" class="btn btn-primary" @click="ToDatabase()">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import urlBase from "@/js/url";
import { required, minLength, between } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      isLoading: true,
      identitas: {
        meta_title: null,
        meta_author: null,
        meta_description: null,
        login_title: null,
        login_subtitle: null,
      },
    };
  },
  validations: {
    identitas: {
      meta_title: {
        required,
      },
      meta_author: {
        required,
      },
      meta_description: {
        required,
      },
      login_title: {
        required,
      },
      login_subtitle: {
        required,
      },
    },
  },
  mounted() {
    this.isLoading = false;
  },
  methods: {
    ToDatabase() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.isLoading = true;
      }
    },
  },
};
</script>