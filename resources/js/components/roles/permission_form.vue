<template>
  <div class v-loading="isLoading" element-loading-text="Loading...">
    <div class="row mg-b-25">
      <div class="col-lg-3">
        <div class="form-group">
          <label class="form-control-label">
            Role:
            <span class="tx-danger">*</span>
          </label>
          <input class="form-control" type="text" placeholder="Nama Role" v-model="roles.role" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="bd bd-gray-300 rounded table-responsive">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th width="40" class="text-center">NO</th>
                <th>MODUL</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(t,tIndex) in data" :key="tIndex">
                <td width="40" class="text-center">{{tIndex+1}}</td>
                <td>
                  <div class="row">
                    <div class="col-md-8">
                      {{t.parent.nama}} -
                      <span class="text-success">({{t.parent.url}})</span>
                    </div>
                    <div class="wd-80">
                      <el-checkbox v-model="t.parent.crud.create">Create</el-checkbox>
                    </div>
                    <div class="wd-80">
                      <el-checkbox v-model="t.parent.crud.read">Read</el-checkbox>
                    </div>
                    <div class="wd-80">
                      <el-checkbox v-model="t.parent.crud.update">Update</el-checkbox>
                    </div>
                    <div class="wd-80">
                      <el-checkbox v-model="t.parent.crud.delete">Delete</el-checkbox>
                    </div>
                  </div>
                  <div class="row" v-for="(c,cIndex) in t.child" :key="cIndex">
                    <div class="col-md-8">
                      <span class="font-weight-bold text-primary">-</span>
                      {{c.nama}} -
                      <span class="text-success">({{c.url}})</span>
                    </div>
                    <div class="wd-80">
                      <el-checkbox
                        v-model="c.crud.create"
                        @click="checkBoxToChild(tIndex,'create',cIndex)"
                      >Create</el-checkbox>
                    </div>
                    <div class="wd-80">
                      <el-checkbox
                        v-model="c.crud.read"
                        @click="checkBoxToChild(tIndex,'read',cIndex)"
                      >Read</el-checkbox>
                    </div>
                    <div class="wd-80">
                      <el-checkbox
                        v-model="c.crud.update"
                        @click="checkBoxToChild(tIndex,'update',cIndex)"
                      >Update</el-checkbox>
                    </div>
                    <div class="wd-80">
                      <el-checkbox
                        v-model="c.crud.delete"
                        @click="checkBoxToChild(tIndex,'update',cIndex)"
                      >Delete</el-checkbox>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <button class="btn btn-sm btn-primary" @click="toDatabase()">Simpan</button>
      </div>
    </div>
  </div>
</template>
<script>
import urlBase from "@/js/url";
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
    };
  },
  created() {
    this.$parent.page.show = false;

    if (this.$route.query.v) {
      this.roles.role_id = this.$route.query.v;
      this.page.submitType = "update";
      this.page.notification = "Data Berhasil Di Ubah";
      this.getData(this.$route.query.v);
      this.getRole();
    } else {
      this.getSelect();
    }
  },
  mounted() {},
  watch: {
    data: function () {
      this.isLoading = false;
    },
  },
  methods: {
    getData() {
      this.axios
        .post(urlBase.web + "/roles/permission", {
          type: "permissiondataByrolesId",
          data: this.roles.role_id,
        })
        .then((r) => (this.data = r.data));
    },
    getRole() {
      this.axios
        .post(urlBase.web + "/roles/role", {
          type: "dataById",
          roles: this.$route.query.v,
        })
        .then((r) => (this.roles = r.data));
    },
    getSelect() {
      this.axios
        .post(urlBase.web + "/roles/permission", {
          type: "permissiondata",
        })
        .then((r) => {
          this.data = r.data;
        });
    },
    toDatabase() {
      this.axios
        .post(urlBase.web + "/roles/permission", {
          type: this.page.submitType,
          data: this.data,
          roles: this.roles,
        })
        .then((r) => {
          this.$parent.page.show = true;
          this.$parent.refresh();
          this.$router.push({
            name: "roles-permission",
          });

          this.$notify({
            title: "Info",
            message: this.page.notification,
            type: "success",
          });
        });
    },
    checkBoxToChild(index, a, childIndex) {
      this.checkBoxToParent(index, a);
    },
    checkBoxToParent(index, a) {
      if (a == "create") {
        this.data[index].parent.crud.create = true;
        this.data[index].parent.crud.read = true;
      } else if (a == "read") {
        this.data[index].parent.crud.read = true;
      } else if (a == "update") {
        this.data[index].parent.crud.update = true;
        this.data[index].parent.crud.read = true;
      } else if (a == "delete") {
        this.data[index].parent.crud.delete = true;
        this.data[index].parent.crud.read = true;
        this.data[index].parent.crud.delete = true;
      }
    },
  },
};
</script>