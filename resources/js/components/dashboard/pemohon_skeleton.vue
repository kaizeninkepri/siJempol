<template>
  <div>
    <div class="br-msg-header d-flex justify-content-between">
      <div class="pd-x-0 pd-t-30">
        <!-- <h4 class="tx-gray-800 mg-b-5">{{perusahaan.fullname.toUpperCase()}}</h4>
        <p class="mg-b-0">{{perusahaan.badanusaha}}</p>-->
      </div>
    </div>
    <div class="br-pagebody">
      <el-row :gutter="10">
        <el-col :md="18">
          <vue-content-loading :height="40">
            <rect rx="4" ry="4" width="400" height="30" />
          </vue-content-loading>
          <vcl-table></vcl-table>
        </el-col>
        <el-col :md="6"></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import urlBase from "@/js/url";
import VueContentLoading from "vue-content-loading";
import { VclFacebook, VclInstagram, VclTable } from "vue-content-loading";

export default {
  components: {
    VueContentLoading,
    VclFacebook,
    VclTable,
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
