<template>
  <div>
    <div class="br-msg-header d-flex justify-content-between">
      <div class="pd-x-0 pd-t-30">
        <h4 class="tx-gray-800 mg-b-5" v-if="permohonan.izin">{{permohonan.izin.nama_izin}}</h4>
        <p class="mg-b-0" v-if="permohonan.opd">Sektor {{permohonan.opd.opd}}</p>
      </div>
    </div>
    <div class="br-pagebody">
      <el-row :gutter="10">
        <el-col :md="12">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in timeline"
              :key="index"
              :timestamp="activity.stepKet"
              :color="activity.color"
              placement="top"
            >
              <el-card>
                <h6>{{activity.pesan}}</h6>
                <p>{{activity.activityTime}}</p>
                <p :style="{color :activity.color} ">
                  {{activity.kategori.toUpperCase() }}
                  <span
                    v-if="activity.kategori == 'pemohon'"
                  >: {{activity.permohonan.pemohon.nama}}</span>
                  <span v-if="activity.kategori == 'FRONT OFFICE'">: {{activity.user.username}}</span>
                </p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-col>
        <el-col :md="12">
          <el-image :src="url.alur">
            <div slot="placeholder" class="image-slot">
              Loading
              <span class="dot">...</span>
            </div>
          </el-image>

          <el-card>
            <div slot="header" class="clearfix">
              <span>DATA PENOLAKAN BERKAS</span>
              <!-- <el-button style="float: right" type="primary">KONSULTASI</el-button> -->
            </div>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>NO</th>
                  <th>Persyaratan</th>
                  <th>status</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(t, tIndex) in persyaratan" :key="tIndex">
                  <td>{{tIndex+1}}</td>
                  <td>{{t.persyaratan}}</td>
                  <td>{{t.status}}</td>
                  <td>{{t.catatan}}</td>
                </tr>
              </tbody>
            </table>
            <br />
            <span
              style="color:red"
            >Apabila data persyaratan telah lengkap, silahkan mengajukan permohonan ulang</span>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import urlBase from "@/js/url";

export default {
  data() {
    return {
      page: {
        isLoading: true,
      },
      url: {
        alur: urlBase.publicData + "/images/alur2.jpg",
      },
      permohonan: [],
      persyaratan: [],
      timeline: [],
    };
  },

  mounted() {
    this.page.isLoading = false;
  },
  created() {
    this.gettrack();
  },
  methods: {
    gettrack() {
      this.axios
        .post(urlBase.web + "/master/track", {
          type: "trackById",
          permohonan_id: this.$route.params.id,
        })
        .then((r) => {
          this.permohonan = r.data.izin;
          this.timeline = r.data.track;
          this.persyaratan = r.data.persyaratan;
        });
    },
  },
};
</script>

