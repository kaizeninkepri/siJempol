<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card" v-loading="isLoading">
          <div class="card-body">
            <div class="row">
              <div class="col-md-7">
                <div class="row">
                  <div class="col-md-6">
                    <span class="text-primary font-size-xs">Nama Perusahaa</span>
                    <br />
                    <span class="font-weight-bold">{{perusahaan.nama}}</span>
                    <br />
                    <span class="text-primary font-size-xs">Npwp</span>
                    <br />
                    <span class="font-weight-bold">{{perusahaan.npwp}}</span>
                    <br />
                  </div>
                  <div class="col-md-6">
                    <span class="text-primary font-size-xs">Contact Person</span>
                    <br />
                    <span class="font-weight-bold">{{perusahaan.contact}}</span>
                    <br />
                    <span class="text-primary font-size-xs">Email</span>
                    <br />
                    <span class="font-weight-bold">{{perusahaan.email}}</span>
                    <br />
                  </div>
                  <div class="col-md-12">
                    <span class="text-primary font-size-xs">Alamat</span>
                    <br />
                    <span class="font-weight-bold">{{perusahaan.alamat}}</span>
                    <br />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row">
                  <div class="col-md-6">
                    <span class="text-primary font-size-xs">Nama Pengurus</span>
                    <br />
                    <span class="font-weight-bold">{{pengurus.nama}}</span>
                    <br />
                    <span class="text-primary font-size-xs">Contact</span>
                    <br />
                    <span class="font-weight-bold">{{pengurus.contact}} / {{pengurus.email}}</span>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card-footer">
            <button
              type="button"
              class="btn btn-xs btn-primary"
              @click="edit(npwp), modal_open('show')"
            >Ubah</button>
          </div>-->
        </div>
      </div>
      <div class="col-md-12">
        <permohonanList v-bind:npwp="npwp" v-if="rincian"></permohonanList>
      </div>
    </div>
    <!----------------- modal ----------------------->
    <div id="modal_large" class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">DATA PERUSAHAAN</h5>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <div class="modal-body">
            <el-form :model="form" ref="perusahaan_form">
              <div class="row">
                <div class="form-group col-md-6">
                  <label>NPWP</label>
                  <el-form-item
                    prop="npwp"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-input placeholder="NPWP Perusahaan" v-model="form.npwp" clearable></el-input>
                  </el-form-item>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label>Kategori</label>
                  <el-form-item
                    prop="kategori"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-select v-model="form.kategori" clearable placeholder="Kategori Perusahaan">
                      <el-option
                        v-for="item in select.status"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="form-group col-md-8">
                  <label>Nama</label>
                  <el-form-item
                    prop="nama"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-input placeholder="nama Perusahaan" v-model="form.nama" clearable></el-input>
                  </el-form-item>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label>Email</label>
                  <el-form-item
                    prop="email"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-input placeholder="Email Perusahaan" v-model="form.email" clearable></el-input>
                  </el-form-item>
                </div>
                <div class="form-group col-md-6">
                  <label>Hp / Telp</label>
                  <el-form-item
                    prop="contact"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-input placeholder="HP / Telp Perusahaan" v-model="form.contact" clearable></el-input>
                  </el-form-item>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-8">
                  <label>Alamat</label>
                  <el-form-item
                    prop="alamat"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-input
                      type="textarea"
                      placeholder="Alamat Perusahaan"
                      v-model="form.alamat"
                      clearable
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="row">
                  <div class="form-group col-md-2">
                    <label for>Active</label>
                    <el-tooltip :content="'active'" placement="top">
                      <el-switch
                        v-model="form.aktif"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        active-value="true"
                        inactive-value="false"
                      ></el-switch>
                    </el-tooltip>
                  </div>
                </div>
              </div>
            </el-form>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
            <button type="button" class="btn bg-primary" @click="submitForm()">Simpan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import urlBase from "@/js/url";
import permohonanList from "@/js/components/perizinan/perusahaan/permohonanList";
import moment from "moment";

export default {
  data() {
    return {
      today: moment().format("DD-MM-YYYY"),
      perusahaan: {},
      isLoading: false,
      table: {
        isLoading: false,
        data: [],
        search: null,
      },
      form: {
        perusahaan_id: null,
        npwp: null,
        kategori: null,
        nama: null,
        alamat: null,
        email: null,
        contact: null,
        aktif: null,
        type: "insert",
      },
      select: {
        status: [
          {
            value: "PT",
            label: "PT",
          },
          {
            value: "CV",
            label: "CV",
          },
          {
            value: "PERORANGAN",
            label: "PERORANGAN",
          },
        ],
      },
    };
  },
  mounted() {
    console.log("perusahaan Data");
    this.$parent.$data.activeLink = "perizinan";
    this.$parent.$data.activeName = "Permohonan Data";
  },
  created() {
    this.GetData(this.npwp);
  },
  props: {
    npwp: String,
    rincian: Boolean,
    pengurus: Object,
  },
  methods: {
    notif(s, m, type) {
      this.$notify({
        title: s,
        message: m,
        type: type,
      });
    },
    modal_open(type) {
      console.log("modal");

      $("#modal_large").modal(type);
    },
    moment(arg) {
      moment.locale("id");
      return moment(arg);
    },
    GetData(npwp) {
      this.isLoading = true;
      this.perusahaan = {};
      this.axios
        .post(urlBase.web + "/perizinan/perusahaan", {
          type: "dataBynpwp",
          npwp: npwp,
        })
        .then(
          (r) => (
            console.log(r.data),
            (this.perusahaan = r.data[0]),
            (this.table.data = r.data[0].permohonan),
            (this.isLoading = false)
          )
        );
    },
    edit(npwp) {
      this.axios
        .post(urlBase.web + "/perizinan/perusahaan", {
          type: "dataBynpwp",
          npwp: npwp,
        })
        .then((r) => (console.log(r.data), (this.form = r.data[0])));
    },
    deleteTable(index, row) {
      this.$confirm("hapus Data ini ?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          axios
            .post(urlBase.web + "/master/aclGroup", {
              type: "hapus",
              aclId: row.aclGroup_id,
            })
            .then((r) => this.GetModulGroup());
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
    },
    submitForm() {
      this.$refs["perusahaan_form"].validate((valid) => {
        if (valid) {
          this.isLoading = true;
          this.axios
            .post(urlBase.web + "/perizinan/perusahaan", {
              type: "UpdateById",
              data: this.form,
            })
            .then(
              (r) => (
                this.modal_open("hide"),
                (this.isLoading = false),
                this.notif(r.data.title, r.data.message, r.data.type),
                this.GetData(this.form.npwp),
                this.$refs["perusahaan_form"].resetFields()
              )
            );
        } else {
          return false;
        }
      });
    },
  },
  components: {
    permohonanList,
  },
};
</script>
