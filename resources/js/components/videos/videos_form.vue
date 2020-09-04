<template>
  <div class v-loading="isLoading" element-loading-text="Loading...">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-4">
          <el-input
            placeholder="link Youtube"
            v-model="YoutubeApi.q"
            @keypress.native.enter="getVideos()"
            @blur="getVideos()"
          ></el-input>
        </div>
      </div>
      <br />
      <div class="card" v-loading="isLoading" v-if="show">
        <div class="row">
          <div class="col-md-3">
            <img :src="video.thumbnails.high.url" class="img-fluid" />
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h6>{{video.title}}</h6>
              <span class="text-primary">{{moment(video.publishedAt).format("LLLL")}}</span>
              <p>{{video.description}}</p>
              <p>{{video.kategori}}</p>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" @click="Insert()">Simpan</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import urlBase from "@/js/url";
import moment from "moment";
export default {
  data() {
    return {
      page: {
        submitType: "insert",
        notification: "Data Berhasil Disimpan",
      },
      isLoading: true,
      roles: {
        role_id: null,
        role: null,
        is_active: true,
      },
      data: [],
      roles: {
        role_id: null,
        role: null,
        is_active: true,
      },
      options: [
        {
          value: "inilahchannel",
          label: "inilah Channel",
        },
        {
          value: "podcast",
          label: "podcast",
        },
      ],
      isLoading: true,
      show: false,
      YoutubeApi: {
        part: "snippet",
        key: "AIzaSyAwyJtfRbDYPtcEOOEPkZbdzw3j0IfHN1U",
        q: null,
        type: "video",
      },
      video: {
        kategori: this.$route.query.v,
        thumbnails: {
          high: {},
        },
      },
      disabled: true,
      links: [],
      state2: "",
      beritaTerkait: {
        berita_id: 0,
        berita_terkait: "false",
      },
    };
  },
  created() {
    this.$parent.page.show = false;
    this.isLoading = false;
  },
  mounted() {},
  watch: {
    data: function () {
      this.isLoading = false;
    },
  },
  computed: {
    terkaitberita: {
      get: function () {
        return this.state2;
      },
      // setter
      set: function (newValue) {
        if (newValue.length == 0) {
          this.beritaTerkait.berita_id = 0;
          this.beritaTerkait.berita_terkait = "false";
        }
        this.state2 = newValue;
      },
    },
  },
  methods: {
    moment(arg) {
      moment.locale("id");
      return moment(arg);
    },
    getVideos() {
      this.show = true;
      this.axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: this.YoutubeApi,
        })
        .then(
          (r) => (
            console.log(r.data),
            (this.isLoading = false),
            (this.video = r.data.items[0].snippet),
            this.$set(this.video, "is_active", "true"),
            this.$set(this.video, "url", this.YoutubeApi.q),
            this.$set(this.video, "berita", this.beritaTerkait),
            this.$set(this.video, "kategori", this.$route.query.v)
          )
        );
    },
    querySearch(queryString, cb) {
      var links = this.links;
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links;
      // call callback function to return suggestions
      cb(results);
    },
    createFilter(queryString) {
      return (a) => {
        return a.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1;
      };
    },
    selectedTerkait(item) {
      this.beritaTerkait.berita_id = item.id_berita;
      this.beritaTerkait.berita_terkait = true;

      this.$set(this.video, "berita", this.beritaTerkait);
    },
    GetBerita() {
      this.axios
        .post(urlBase.web + "/Masterberita", {
          type: "AllBerita",
        })
        .then((r) => (console.log(r.data), (this.links = r.data)));
    },
    Insert() {
      this.isLoading = true;
      this.axios
        .post(urlBase.web + "/MasterVideos", {
          type: "Insert",
          data: this.video,
        })
        .then((r) => {
          this.$parent.page.show = true;
          this.$parent.refresh();
          this.$router.push({
            name: "videos",
            query: {
              v: this.$route.query.v,
            },
          });

          this.$notify({
            title: "Info",
            message: this.page.notification,
            type: "success",
          });
        });
    },
  },
};
</script>