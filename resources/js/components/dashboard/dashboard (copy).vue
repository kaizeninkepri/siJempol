<template>
  <div class="mg-t-120">
    <div class="br-pagebody">
      <el-row class="pd-5" :gutter="10">
        <el-col :md="24" class="mg-b-20">
          <el-row :gutter="10">
            <el-col :md="6">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <ion-icon
                    name="layers-outline"
                    class="tx-50 tx-primary"
                  ></ion-icon>
                  <div class="mg-l-20">
                    <p
                      class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                    >
                      Izin / Non izin
                    </p>
                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">
                      {{ keabsahan.length }}
                    </p>
                    <span class="tx-11 tx-roboto tx-primary"
                      >Validasi Keabsahan Berkas</span
                    >
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :md="6">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <ion-icon
                    name="mail-outline"
                    class="tx-50 tx-warning"
                  ></ion-icon>
                  <div class="mg-l-20">
                    <p
                      class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                    >
                      Permintaan Surat
                    </p>
                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">
                      {{ teknis.length }}
                    </p>
                    <span class="tx-11 tx-roboto tx-warning"
                      >Untuk OPD Teknis</span
                    >
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :md="6">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <ion-icon
                    name="mail-open-outline"
                    class="tx-50 tx-teal"
                  ></ion-icon>
                  <div class="mg-l-20">
                    <p
                      class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                    >
                      Balasan Surat
                    </p>
                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">
                      {{ balasanteknis }}
                    </p>
                    <span class="tx-11 tx-roboto tx-teal">Dari OPD Teknis</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :md="6">
              <el-card v-loading="page.isLoading">
                <div class="pd-5 d-flex align-items-center">
                  <ion-icon
                    name="receipt-outline"
                    class="tx-50 tx-success"
                  ></ion-icon>
                  <div class="mg-l-20">
                    <p
                      class="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase mg-b-10"
                    >
                      DRAFT
                    </p>
                    <p class="tx-24 tx-lato tx-bold mg-b-2 lh-1">0</p>
                    <span class="tx-11 tx-roboto tx-success"
                      >SURAT KEPUTUSAN</span
                    >
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row class="mg-t-10" :gutter="10">
            <el-col :md="18">
              <el-card style="border-radius: 8px; background: #f3f6f9">
                <div
                  class="d-flex align-items-center justify-content-between mg-b-30"
                >
                  <div>
                    <h6
                      class="tx-15 tx-uppercase tx-inverse tx-semibold tx-spacing-1"
                    >
                      VALIDASI KEABSAHAN BERKAS PERMOHONAN
                    </h6>
                    <p class="mg-b-0 tx-gray-600">
                      jumlah data {{ keabsahan.length }}
                    </p>
                  </div>
                  <div class="wd-230">
                    <el-input
                      placeholder="Cari Data Permohonan ..."
                      prefix-icon="el-icon-search"
                      v-model="permohonan.search"
                    ></el-input>
                  </div>
                </div>
                <table
                  class="table-custom table-valign-middle mg-b-0 table-hover"
                >
                  <tbody>
                    <tr
                      v-for="(i, Index) in keabsahan.slice(
                        permohonan.list,
                        permohonan.end
                      )"
                      :key="Index"
                    >
                      <td class="pd-l-0-force">
                        <div class="tx-13 tx-bold mg-b-0">
                          {{ i.perusahaan.fullname }}
                        </div>
                        <div
                          class="tx-12 tx-roboto mg-b-1 tx-primary"
                          v-if="i.perusahaan.kategori != 'perorangan'"
                        >
                          {{ i.pemohon.nama }}
                        </div>
                        <p class="tx-12 tx-roboto">
                          {{ i.pemohon.contact }} / {{ i.pemohon.email }}
                        </p>
                      </td>
                      <td class="pd-l-0-force">
                        <div>
                          <p class="tx-13 tx-bold mg-b-0 tx-teal">
                            {{ i.izin.nama_izin }}
                          </p>
                          <p class="tx-12 tx-roboto mg-b-0">
                            {{ i.opd.opd }} / {{ i.izin.kategori }}
                          </p>
                        </div>
                      </td>
                      <td class="pd-l-0-force">
                        <span class="tx-12 tx-roboto mg-b-0">{{
                          i.lastjam
                        }}</span>
                      </td>
                      <td class="pd-l-0-force">
                        <button
                          type="button"
                          class="btn btn-oblong btn-sm"
                          :class="i.createonkategori"
                        >
                          {{ i.create_on }}
                        </button>
                      </td>
                      <td class="pd-r-0-force tx-center">
                        <router-link
                          :to="{
                            name: 'bo-permohonan-detail',
                            params: { id: i.permohonan_id },
                          }"
                        >
                          <i class="icon ion-more tx-18 lh-0"></i>
                        </router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <el-row justify="end" type="flex">
                  <el-col :md="10">
                    <el-pagination
                      style="float: right"
                      background
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page.sync="permohonan.page"
                      :page-size="permohonan.size"
                      :page-count="permohonan.pagecount"
                      layout="total, prev, pager, next"
                      :total="keabsahan.length"
                    ></el-pagination>
                  </el-col>
                </el-row>
              </el-card>

              <el-card
                class="mg-t-50"
                style="border-radius: 8px; background: #f3f6f9"
              >
                <div
                  class="d-flex align-items-center justify-content-between mg-b-30"
                >
                  <div>
                    <h6
                      class="tx-15 tx-uppercase tx-inverse tx-semibold tx-spacing-1"
                    >
                      PENGIRIMAN TELAAH TEKNIS
                    </h6>
                    <p class="mg-b-0 tx-gray-600">
                      jumlah data {{ teknis.length }}
                    </p>
                  </div>
                  <div class="wd-230">
                    <el-input
                      placeholder="Cari Data Permohonan ..."
                      prefix-icon="el-icon-search"
                      v-model="permohonan.search"
                    ></el-input>
                  </div>
                </div>
                <table
                  class="table-custom table-valign-middle mg-b-0 table-hover"
                >
                  <tbody>
                    <tr
                      v-for="(i, Index) in teknis.slice(
                        permohonan.list,
                        permohonan.end
                      )"
                      :key="Index"
                    >
                      <td class="pd-l-0-force">
                        <div class="tx-13 tx-bold mg-b-0">
                          {{ i.perusahaan.fullname }}
                        </div>
                        <div
                          class="tx-12 tx-roboto mg-b-1 tx-primary"
                          v-if="i.perusahaan.kategori != 'perorangan'"
                        >
                          {{ i.pemohon.nama }}
                        </div>
                        <p class="tx-12 tx-roboto">
                          {{ i.pemohon.contact }} / {{ i.pemohon.email }}
                        </p>
                      </td>
                      <td class="pd-l-0-force">
                        <div>
                          <p class="tx-13 tx-bold mg-b-0 tx-teal">
                            {{ i.izin.nama_izin }}
                          </p>
                          <p class="tx-12 tx-roboto mg-b-0">
                            {{ i.opd.opd }} / {{ i.izin.kategori }}
                          </p>
                        </div>
                      </td>
                      <td class="pd-l-0-force">
                        <span class="tx-12 tx-roboto mg-b-0">{{
                          i.lastjam
                        }}</span>
                      </td>
                      <td class="pd-l-0-force">
                        <button
                          type="button"
                          class="btn btn-oblong btn-sm"
                          :class="i.createonkategori"
                        >
                          {{ i.create_on }}
                        </button>
                      </td>
                      <td class="pd-r-0-force tx-center">
                        <router-link
                          :to="{
                            name: 'bo-surat-permintaan',
                            params: { id: i.permohonan_id },
                          }"
                        >
                          <i class="icon ion-more tx-18 lh-0"></i>
                        </router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <el-row justify="end" type="flex">
                  <el-col :md="10">
                    <el-pagination
                      style="float: right"
                      background
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page.sync="permohonan.page"
                      :page-size="permohonan.size"
                      :page-count="permohonan.pagecount"
                      layout="total, prev, pager, next"
                      :total="keabsahan.length"
                    ></el-pagination>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col :md="6">
              <el-card style="border-radius: 8px; background: #c9f7f5">
                <h6
                  class="tx-15 tx-uppercase tx-inverse tx-semibold tx-spacing-1 mg-b-20"
                >
                  FRONT OFFICE
                </h6>
                <div
                  class="d-flex align-items-center mg-b-20"
                  v-for="i in 4"
                  :key="i"
                >
                  <img
                    :src="url.assets + '/avatar/pr-01.png'"
                    class="wd-40 rounded-circle"
                    alt=""
                  />
                  <div class="mg-l-15">
                    <div class="tx-inverse">Katherine Lumaad</div>
                    <span class="tx-12">klumaad@themepixels.me</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import urlBase from "@/js/url";
import VideoBackground from "vue-responsive-video-background-player";
export default {
  data() {
    return {
      page: {
        isLoading: true,
      },
      url: {
        assets: urlBase.web + "/images",
      },
      permohonan: {
        data: [],
        search: null,
        size: 10,
        page: 1,
        list: 0,
        end: 10,
      },
    };
  },
  created() {
    this.getpermohonan();
  },
  mounted() {
    this.$parent.justExpand();
  },
  computed: {
    keabsahan() {
      let result = this.permohonan.data.filter((p) => p.status == "keabsahan");
      if (!this.permohonan.search) return result;

      const filterValue = this.permohonan.search.toLowerCase();

      const filter = (event) =>
        event.permohonan_code.toLowerCase().includes(filterValue) ||
        event.opd.opd.toLowerCase().includes(filterValue) ||
        event.izin.nama_izin.toLowerCase().includes(filterValue) ||
        event.pemohon.nama.toLowerCase().includes(filterValue);

      return result.filter(filter);
    },
    teknis() {
      let result = this.permohonan.data.filter((p) => p.status == "teknis");
      if (!this.permohonan.search) return result;

      const filterValue = this.permohonan.search.toLowerCase();

      const filter = (event) =>
        event.permohonan_code.toLowerCase().includes(filterValue) ||
        event.opd.opd.toLowerCase().includes(filterValue) ||
        event.izin.nama_izin.toLowerCase().includes(filterValue) ||
        event.pemohon.nama.toLowerCase().includes(filterValue);

      return result.filter(filter);
    },
    balasanteknis() {
      var total = 0;
      this.permohonan.data.forEach((e) => {
        if (e.status == "teknisbalas") {
          total = total + 1;
        }
      });
      return total;
    },
  },
  methods: {
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      var start = Math.max(0, val - 1);
      var end = this.permohonan.size;
      var newstart = Math.max(0, start * end);
      var newend = val * end;

      this.permohonan.list = newstart;
      this.permohonan.end = newend;

      console.log(`current page: ${val}`);
    },
    getpermohonan() {
      this.page.isLoading = true;
      this.axios
        .post(urlBase.web + "/perizinan/permohonan", {
          type: "data",
          status: "bo",
        })
        .then(
          (r) => (
            (this.permohonan.data = r.data), (this.page.isLoading = false)
          )
        );
    },
  },
  components: {
    "video-background": VideoBackground,
  },
};
</script>
<style>
.bo-success {
  background-color: #a8d4b9;
  color: white;
  font-weight: bold;
}
.bo-primary {
  background-color: #8bbee9;
  color: white;
  font-weight: bold;
}
.bo-warning {
  background-color: #ffc17a;
  color: white;
  font-weight: bold;
}
.table-custom {
  width: 100%;
}
.table-custom td {
  padding: 5px;
}
</style>
