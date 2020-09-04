<template>
  <div>
    <div class="br-pageheader pd-y-15 pd-l-20">
      <nav class="breadcrumb pd-0 mg-0 tx-12"></nav>
    </div>
    <!-- br-pageheader -->

    <div class="br-msg-header d-flex justify-content-between">
      <div class="pd-x-0 pd-t-30">
        <h4 class="tx-gray-800 mg-b-5">{{page.title}}</h4>
        <p class="mg-b-0" @click="refresh()">{{page.subtitle}}</p>
      </div>
      <!-- media -->
      <nav class="nav nav-inline tx-size-24 mg-b-0 lh-0">
        <router-link
          :to="{name : 'artikel-berita-form'}"
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
          :to="{name : 'artikel-berita'}"
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
import CustomActions from "@/js/datatables/customAction";
const form = () =>
  import(
    /* webpackChunkName: "modulForm" */ "@/js/components/roles/modul_form"
  );
export default {
  data() {
    return {
      page: {
        title: "ARTIKEL",
        subtitle: "inilahnews",
        show: true,
      },
      isLoading: {
        fullPage: true,
      },
      table: {
        api: urlBase.web + "/artikel/berita/data",
        editItem: "artikel-berita-form",
        deleteItem: urlBase.web + "/Masterberita",
        trackBy: "id_berita",
        fields: [
          {
            name: "__checkbox",
            titleClass: "text-center width-20",
            dataClass: "text-center width-20",
          },
          {
            name: "__sequence",
            title: "#",
            titleClass: "text-center width-20",
            dataClass: "text-center width-20",
            width: "80px",
          },
          {
            name: "judul",
          },
          {
            name: "tgl_publish",
          },
          {
            name: "dibaca",
          },
          {
            name: "__slot:actions",
            title: "Actions",
            titleClass: "text-center",
            dataClass: "text-center",
          },
        ],
      },
    };
  },
  methods: {
    refresh() {
      this.$refs.dataTables.refresh();
    },
  },
  components: {
    dataTables,
    "modul-form": form,
    "custom-actions": CustomActions,
  },
};
</script>
<style>
.wd-20 {
  width: 40px;
}
.wd-40 {
  width: 80px;
}
.wd-100px {
  width: 100px;
}
</style>
