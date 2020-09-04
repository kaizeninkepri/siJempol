<template>
  <div class="form-layout form-layout-1" v-loading="isLoading" element-loading-text="Loading...">
    <div class="row mg-b-25">
      <div class="col-lg-3">
        <div class="form-group">
          <label class="form-control-label">
            Nama:
            <span class="tx-danger">*</span>
          </label>
          <input
            class="form-control"
            :class="{ 'is-invalid': $v.modul.nama.$error }"
            type="text"
            v-model.trim="$v.modul.nama.$model"
            placeholder="Nama Modul"
          />
        </div>
      </div>
      <!-- col-4 -->
      <div class="col-lg-3">
        <div class="form-group">
          <label class="form-control-label">
            path/url:
            <span class="tx-danger">*</span>
          </label>
          <input
            class="form-control"
            :class="{ 'is-invalid': $v.modul.url.$error }"
            type="text"
            v-model.trim="$v.modul.url.$model"
            placeholder="url / path modul"
          />
        </div>
      </div>
      <!-- col-4 -->
      <div class="col-lg-2">
        <div class="form-group">
          <label class="form-control-label">
            icon:
            <span class="tx-danger">*</span>
          </label>
          <input class="form-control" type="text" v-model="modul.icon" placeholder="icon Modul" />
        </div>
      </div>
      <div class="col-lg-1">
        <div class="form-group mg-b-10-force">
          <label class="form-control-label">
            Type:
            <span class="tx-danger">*</span>
          </label>
          <select
            class="form-control select2"
            :class="{ 'is-invalid': $v.modul.type.$error }"
            type="text"
            v-model.trim="$v.modul.type.$model"
            data-placeholder="Pilih Type"
            @change="typeOnChange()"
          >
            <option label="--"></option>
            <option value="parent">Parent</option>
            <option value="child">child</option>
          </select>
        </div>
      </div>

      <div class="col-lg-3" v-if="parentBoolean">
        <div class="form-group mg-b-10-force">
          <label class="form-control-label">
            Parent:
            <span class="tx-danger">*</span>
          </label>
          <select class="form-control" v-model="modul.parent_id" data-placeholder="Select Parent">
            <option label="Pilih Parent"></option>
            <option v-for="(s,SIndex) in select" :key="SIndex" :value="s.role_modul_id">{{s.nama}}</option>
          </select>
        </div>
      </div>
      <!-- col-4 -->
    </div>
    <!-- row -->

    <div class="form-layout-footer">
      <button class="btn btn-info" @click="ToDatabase()">Simpan</button>
    </div>
  </div>
</template>
<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import urlBase from "@/js/url";

export default {
  data() {
    return {
      page: {
        submitType: "store"
      },
      isLoading: false,
      modul: {
        role_modul_id: null,
        nama: null,
        url: null,
        icon: null,
        parent_id: 0,
        type: null
      },
      parentBoolean: false,
      select: []
    };
  },
  validations: {
    modul: {
      nama: {
        required
      },
      url: {
        required
      },
      type: {
        required
      }
    }
  },
  mounted() {
    this.$parent.page.title = "Penambahan Data Modul";
    this.$parent.page.show = false;
    if (this.$route.query.v) {
      this.getData(this.$route.query.v);
      this.page.submitType = "update";
    }
    this.getSelect();
  },
  methods: {
    typeOnChange() {
      if (this.modul.type == "child") {
        this.parentBoolean = true;
      } else {
        this.parentBoolean = false;
      }
    },
    ToDatabase() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.isLoading = true;
        this.axios
          .post(urlBase.web + "/roles/modul", {
            type: this.page.submitType,
            data: this.modul
          })
          .then(
            r => (this.isLoading = false),

            this.toParentPage()
          );
      }
    },
    getData(id) {
      this.axios
        .post(urlBase.web + "/roles/modul", {
          type: "dataById",
          data: id
        })
        .then(r => (this.modul = r.data));
    },
    getSelect() {
      this.axios
        .post(urlBase.web + "/roles/modul", {
          type: "select"
        })
        .then(r => (this.select = r.data));
    },
    toParentPage() {
      this.$v.$reset,
        this.$parent.refresh(),
        this.$router.push({
          name: "roles-modul"
        });
      this.$parent.page.show = true;
    }
  }
};
</script>
<style>
.modal-xl {
  width: 1440px !important;
}
</style>