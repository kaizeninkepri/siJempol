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
          :to="{ name : 'videos-form', query:{v : page.subtitle}}"
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
          :to="{name : 'videos', query:{v : page.subtitle}}"
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
        title: "Videos",
        subtitle: this.$route.query.v,
        crud: {
          url: "/roles/modul",
          type: "temp",
        },
        show: true,
      },
      isLoading: {
        fullPage: true,
      },
      table: {
        api: urlBase.web + "/videos/data?v=" + this.$route.query.v,
        editItem: "#",
        deleteItem: urlBase.web + "/roles/permission",
        trackBy: "role_modul_id",
        fields: [
          "title",
          "title",
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
    },
  },
  components: {
    dataTables,
  },
};
</script>