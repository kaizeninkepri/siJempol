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
      <!-- media -->
      <nav class="nav nav-inline tx-size-24 mg-b-0 lh-0">
        <router-link
          :to="{ name : 'roles-permission-form'}"
          class="btn btn-primary btn-with-icon"
          v-if="page.show"
        >
          <div class="ht-40 justify-content-between">
            <span class="pd-x-15">Tambah Data</span>
            <span class="icon wd-40">
              <i class="fa fa-file-text-o"></i>
            </span>
          </div>
        </router-link>
        <router-link
          :to="{name : 'roles-permission'}"
          class="btn btn-warning btn-with-icon"
          v-if="!page.show"
          v-on:click.native="page.show = true"
        >
          <div class="ht-40 justify-content-between">
            <span class="icon wd-40">
              <i class="fa fa-arrow-left"></i>
            </span>
            <span class="pd-x-15">kembali</span>
          </div>
        </router-link>
      </nav>
    </div>

    <div class="br-pagebody">
      <div class="br-section-wrapper">
        <dataTables :table="table" ref="dataTables" v-show="page.show"></dataTables>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import urlBase from "@/js/url";
import dataTables from "@/js/datatables/datatables";
export default {
  data() {
    return {
      nama: null,
      page: {
        parent: true,
        name: "Access Control List Modul",
        crud: {
          url: "/roles/modul",
          type: "temp"
        },
        show: true
      },
      isLoading: {
        fullPage: true
      },
      table: {
        api: urlBase.web + "/roles/permission/data",
        editItem: "roles-permission-form",
        deleteItem: urlBase.web + "/roles/permission",
        trackBy: "role_modul_id",
        fields: [
          "role",
          "is_active",
          {
            name: "__slot:actions",
            title: "Actions",
            titleClass: "text-center",
            dataClass: "text-center"
          }
        ]
      }
    };
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name == "roles-permission-form") {
      this.page.show = false;
    } else {
      this.page.show = true;
    }
    next();
    // react to route changes...
    // don't forget to call next()
  },
  methods: {
    refresh() {
      this.$refs.dataTables.refresh();
    }
  },
  components: {
    dataTables
  }
};
</script>