<template>
  <div v-if="user.role">
    <div class="br-msg-header d-flex justify-content-between">
      <div class="pd-x-0 pd-t-30">
        <h4 class="tx-gray-800 mg-b-5">TRACKING PERMOHONAN</h4>
        <p class="mg-b-0" v-if="user.role">{{user.role.role}}</p>
      </div>
      <div class="wd-230">
        <span class="tx-bold">{{user.role.role}} / Window 1</span>
      </div>
    </div>
    <div class="br-pagebody">
      <el-card>
        <el-row>
          <el-col :span="24">
            <el-autocomplete
              class="inline-input"
              style="width:100%"
              v-model="state1"
              value-key="permohonan_code"
              :fetch-suggestions="querySearch"
              placeholder="ketik NPWP / Nama Perusahaan / Kode Permohonan"
              @select="handleSelect"
            >
              <template slot-scope="{ item }">
                <el-row>
                  <el-col :md="12">
                    <h6 class="tx-gray-800 mg-b-0 pd-b-0 tx-bold">{{item.perusahaan.fullname}}</h6>
                    <p class="mg-b-0 tx-12 pd-b-0">
                      {{item.permohonan_code}},
                      <span
                        class="tx-primary"
                      >{{item.created_at}} ({{item.InhumanMasuk}})</span>
                    </p>
                  </el-col>
                  <el-col :md="12">
                    <span class="tx-primary" style="float:right">{{item.izin.nama_izin}}</span>
                  </el-col>
                </el-row>
              </template>
            </el-autocomplete>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>
<script>
import urlBase from "@/js/url";

export default {
  data() {
    return {
      page: {
        isLoading: false,
      },
      links: [],
      state1: "",
    };
  },
  created() {
    this.getPermohonan();
  },
  computed: {
    user() {
      return this.$store.state.StoreUser.user;
    },
  },
  methods: {
    querySearch(queryString, cb) {
      var links = this.links;
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links;
      // call callback function to return suggestions
      console.log(results);
      cb(results);
    },
    createFilter(queryString) {
      return (link) => {
        return (
          link.permohonan_code
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0 ||
          link.izin.nama_izin
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0 ||
          link.perusahaan.nama
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0 ||
          link.perusahaan.npwp
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      this.$router.push({
        name: "track-byId",
        params: { id: item.idCrypt },
      });
    },
    getPermohonan() {
      this.axios
        .post(urlBase.web + "/master/track", {
          type: "trackForm",
        })
        .then((r) => {
          this.links = r.data;
        });
    },
  },
  mounted() {
    // this.links = this.loadAll();
  },
};
</script>

