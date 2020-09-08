<template>
  <div class="d-flex align-items-center justify-content-center ht-100v pd-l-100 pd-r-100">
    <div class="col-lg-12 mx-auto">
      <div class="auto-form-wrapper" v-loading="termLoading">
        <el-row :gutter="5">
          <el-col :md="2">
            <center>
              <el-image
                style="width: 75px; height: 100px"
                :src="url.publicImages+'/logo.png'"
                :fit="'fill'"
              ></el-image>
            </center>
          </el-col>
          <el-col :md="10">
            <h4
              class="tx-bold"
            >DINAS PENANAMAN MODAL DAN PELAYANAN TERPADU SATU PINTU PROVINSI KEPULAUAN RIAU</h4>
            <div class="font-size-sm text-muted">Pendaftaran Online Perizinan dan Nonperizinan</div>
          </el-col>
        </el-row>
        <el-steps :active="steps.active" finish-status="success">
          <el-step title="Step 1" description="Identitas Perusahaan"></el-step>
          <el-step title="Step 2" description="Berkas Perusahaan"></el-step>
          <el-step title="Step 3" description="Selesai"></el-step>
        </el-steps>
        <el-form
          :model="perusahaan"
          :label-position="'top'"
          style="min-height:350px"
          ref="pendaftaranRefs"
        >
          <div v-show="steps.body[0]">
            <el-row>
              <el-col :span="11">
                <el-form-item
                  label="NPWP"
                  prop="npwp"
                  :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                >
                  <el-input
                    size="small"
                    v-model="perusahaan.npwp"
                    placeholder="NPWP"
                    class="itemDS"
                    :disabled="readonly"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :md="3">
                <el-form-item
                  label="JENIS USAHA"
                  class="itemWarp"
                  prop="jenis_usaha"
                  :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                >
                  <el-select
                    v-model="perusahaan.jenis_usaha"
                    size="small"
                    placeholder="Jenis Usaha"
                    style="top:-30px !important"
                    prop="jenis_usaha"
                    @change="jenisusahachange()"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-option
                      v-for="item in options.jenis"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="3" v-if="show.kategori">
                <el-form-item
                  label="KATEGORI"
                  class="itemWarp"
                  prop="kategori"
                  :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                >
                  <el-select
                    v-model="perusahaan.kategori"
                    size="small"
                    placeholder="Jenis Usaha"
                    style="top:-30px !important"
                    prop="jenis_usaha"
                    :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                  >
                    <el-option
                      v-for="item in options.kategori"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="11">
                <el-form-item
                  label="NAMA"
                  class="itemWarp"
                  prop="nama"
                  :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                >
                  <el-input
                    size="small"
                    v-model="perusahaan.nama"
                    placeholder="Nama Perusahaan"
                    class="itemDS"
                    style="width: 100% !important;"
                    :disabled="readonly"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :md="9">
                <el-form-item
                  label="EMAIL"
                  class="itemWarp"
                  prop="email"
                  :rules="[{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }, { type:'email', message: 'Email tidak valid', trigger: 'blur' }]"
                >
                  <el-input
                    size="small"
                    v-model="perusahaan.email"
                    placeholder="xxxxx@xxx.com"
                    class="itemDS"
                    style="width: 100% !important;"
                    :disabled="readonly"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :md="6">
                <el-form-item
                  label="PASSWORD"
                  class="itemWarp"
                  prop="password"
                  :rules="[{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }]"
                >
                  <el-input
                    size="small"
                    v-model="perusahaan.password"
                    placeholder="xxxxx"
                    class="itemDS"
                    show-password
                    style="width: 100% !important;"
                    :disabled="readonly"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :md="5">
                <el-form-item
                  label="Telp / Hp"
                  class="itemWarp"
                  prop="contact"
                  :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                >
                  <el-input
                    size="small"
                    v-model="perusahaan.contact"
                    placeholder="(kode area) xxxx.xxxx.xxxx"
                    class="itemDS"
                    style="width: 100% !important;"
                    :disabled="readonly"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :md="18">
                <el-form-item
                  label="ALAMAT"
                  class="itemWarp"
                  prop="alamat"
                  :rules="{ required: true, message: 'field tidak boleh kosong', trigger: 'blur' }"
                >
                  <el-input
                    size="small"
                    type="textarea"
                    v-model="perusahaan.alamat"
                    placeholder="Alamat Perusahaan"
                    class="itemDS"
                    style="width: 100% !important;"
                    :disabled="readonly"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10" v-if="show.kategori">
              <el-divider content-position="left">CONTACT PERSON</el-divider>
              <br />
              <el-col :md="4">
                <el-form-item label="Nama Pemohon" class="itemWarp" prop="pemohon">
                  <el-input
                    size="small"
                    v-model="perusahaan.pemohon"
                    placeholder="Nama Pengurus"
                    class="itemDS"
                    style="width: 100% !important;"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :md="4">
                <el-form-item label="Hp" class="itemWarp" prop="hp">
                  <el-input
                    size="small"
                    v-model="perusahaan.hp"
                    placeholder="hp Pengurus"
                    class="itemDS"
                    style="width: 100% !important;"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
          <div v-show="steps.body[1]" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :md="6" v-for="(u, Uindex) in upload" :key="Uindex">
                <div></div>
                <label :for="u.id" class="custom-file-upload" :class="u.css">
                  <i class="fa fa-cloud-upload"></i>
                  <div>{{u.praname}}</div>
                  <el-button
                    type="primary"
                    size="mini"
                    v-if="u.button"
                    @click="pratinjau(Uindex)"
                  >Pratinjau</el-button>
                </label>
                <input
                  type="file"
                  :id="u.id"
                  @change="changeFile(Uindex, $event)"
                  :accept="accepts"
                />
              </el-col>
            </el-row>
          </div>
          <div v-show="steps.body[2]" style="margin-top:30px">
            <el-row :gutter="5">
              <el-col :md="2">NPWP</el-col>
              <el-col :md="22">{{perusahaan.npwp}}</el-col>
              <el-col :md="2">Nama</el-col>
              <el-col :md="22" v-if="perusahaan.kategori == 'Perorangan'">{{perusahaan.nama}}</el-col>
              <el-col :md="22" v-else>{{perusahaan.kategori}}. {{perusahaan.nama}}</el-col>
              <el-col :md="2">Email / Hp</el-col>
              <el-col :md="22">{{perusahaan.email}} / {{perusahaan.contact}}</el-col>
              <el-col :md="2">Alamat</el-col>
              <el-col :md="22">{{perusahaan.alamat}}</el-col>
            </el-row>
            <el-divider content-position="left">Berkas Perusahaan</el-divider>
            <el-table :data="upload" border style="width: 100%">
              <el-table-column prop="name" label></el-table-column>
              <el-table-column prop="nameFile" label></el-table-column>
              <el-table-column label=" " width="120">
                <template slot-scope="scope">
                  <el-button
                    @click="pratinjau(scope.$index, $event)"
                    type="primary"
                    size="small"
                  >Pratinjau</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-form>
        <hr />
        <el-button type="danger" @click="stepButtonPrevious" v-if="this.steps.active > 1">Sebelumnya</el-button>
        <el-button type="primary" @click="nextStep">{{steps.button}}</el-button>
      </div>
      <!-- <ul class="auth-footer">
            <li>
              <a href="#">Conditions</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
      </ul>-->
      <p class="footer-text text-center">copyright © 2020 DPMPMTSP KEPRI. All rights reserved.</p>
    </div>
    <!-- content-wrapper ends -->
    <div id="myNav" class="overlay-popup" :style="{width: widthPratinjau}">
      <a href="javascript:void(0)" class="closebtn" @click="pratinjauClose()">&times;</a>
      <div class="overlay-popup-content">
        <iframe :src="objectURL"></iframe>
      </div>
    </div>

    <!-- TERM AND CONDITION -->
    <div
      class="modal fade"
      id="TermAndCondition"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      v-loading="termLoading"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Term & Condition</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" id="TermContent">
            <div
              style="color: rgb(75, 75, 75); font-family: KohinoorDevanagari, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; background-color: rgb(243, 243, 243);"
            >Selamat Datang di Situs Web kami! Kami berharap bahwa Anda akan menikmati pengalaman online Anda.</div>
            <div
              style="color: rgb(75, 75, 75); font-family: KohinoorDevanagari, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; background-color: rgb(243, 243, 243);"
            >
              <br />Wyeth Nutrition Parenting Club berkomitmen untuk menjaga kepercayaan dengan pengguna Situs Web kami. Persyaratan di bawah ini mengatur penggunaan Anda atas situs web ini.
              <br />&nbsp;
            </div>
            <ol
              style="margin-bottom: 0px; padding-left: 1.25rem; color: rgb(75, 75, 75); font-family: KohinoorDevanagari, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; background-color: rgb(243, 243, 243);"
            >
              <li>
                Penggunaan yang dapat diterima
                <p style="margin-bottom: 1.5rem;">
                  <br />Silakan menjelajahi Situs Web kami dengan leluasa dan, jika tersedia, kontribusi bahan untuk itu, seperti pertanyaan, posting dan konten multimedia (misalnya gambar, video).
                  <br />&nbsp;
                </p>
                <p style="margin-bottom: 1.5rem;">
                  Namun, penggunaan Situs Web dan bahan yang diposting ke situs ini seharusnya bukan yang ilegal atau yang menyinggung dengan cara apapun. Anda harus berhati-hati untuk tidak:
                  <br />&nbsp;
                </p>
                <ul style="padding-left: 1.25rem;">
                  <li>(a)&nbsp;melanggar hak orang lain untuk privasi;</li>
                  <li>(b)&nbsp;melanggar hak kekayaan intelektual;</li>
                  <li>(c)&nbsp;membuat pernyataan yang memfitnah (termasuk terhadap Wyeth Nutrition), berhubungan dengan pornografi, bersifat rasis atau xenofobia, mempromosikan kebencian atau menghasut kekerasan atau gangguan;</li>
                  <li>(d)&nbsp;mengunggah file yang berisi virus atau dapat menyebabkan masalah keamanan; atau</li>
                  <li>(e)&nbsp;tidak membahayakan integritas Situs Web.</li>
                </ul>
                <p style="margin-bottom: 1.5rem;">
                  <br />Harap dicatat bahwa Wyeth Nutrition dapat menghapus konten apapun dari Situs Web yang dipercaya mungkin ilegal atau menyinggung.
                  <br />&nbsp;
                </p>
              </li>
              <li>
                Perlindungan Data
                <p style="margin-bottom: 1.5rem;">
                  <br />Pernyataan Privasi kami berlaku untuk data pribadi atau bahan yang dibagi bersama pada Situs Web ini. Cari tahu lebih lanjut&nbsp;
                  <a
                    href="https://www.parentingclub.co.id/page/privacy-policy"
                    style="color: rgb(208, 92, 76); touch-action: manipulation; transition: all 0.2s ease-in-out 0s;"
                  >di sini</a>
                  <br />&nbsp;
                </p>
              </li>
              <li>
                Kekayaan Intelektual
                <p style="margin-bottom: 1.5rem;">&nbsp;</p>
                <ul style="padding-left: 1.25rem;">
                  <li>
                    3.1. Konten yang disediakan oleh Wyeth Nutrition
                    <p style="margin-bottom: 1.5rem;">
                      <br />Semua hak kekayaan intelektual, termasuk hak cipta dan merek dagang, bahan yang diterbitkan oleh atau atas nama Wyeth Nutrition di Situs Web (misalnya teks dan gambar) yang dimiliki oleh Wyeth Nutrition atau pemberi lisensinya.
                      <br />&nbsp;
                    </p>
                    <p style="margin-bottom: 1.5rem;">
                      Anda mungkin mereproduksi ekstrak dari Situs Web ini untuk penggunaan pribadi Anda sendiri (misalnya penggunaan non-komersial) asalkan Anda menyimpan semua hak kekayaan intelektual secara utuh dan dengan rasa hormat, termasuk pemberitahuan hak cipta yang mungkin muncul di konten tersebut (misalnya @2014 Wyeth Nutrition).
                      <br />&nbsp;
                    </p>
                  </li>
                  <li>
                    3.2. Konten Anda sediakan
                    <p style="margin-bottom: 1.5rem;">
                      <br />Anda mewakili untuk Wyeth Nutrition bahwa Anda baik sebagai penulis konten yang Anda kontribusikan ke Situs Web ini, ataupun bahwa Anda memiliki hak (yaitu: telah diberi izin oleh pemegang hak) dan mampu memberikan kontribusi atas konten tersebut (misalnya gambar, video, musik) ke Situs Web.
                      <br />&nbsp;
                    </p>
                    <p style="margin-bottom: 1.5rem;">
                      Anda setuju bahwa konten tersebut akan diperlakukan sebagai bukan rahasia dan Anda memberikan Wyeth Nutrition royalti, berkelanjutan, dan lisensi luas secara gratis untuk menggunakan (termasuk untuk mengungkapkan, mereproduksi, mentransmisikan, mempublikasikan, atau menyiarkan) konten yang Anda berikan untuk tujuan yang berkaitan dengan bisnisnya.
                      <br />&nbsp;
                    </p>
                    <p style="margin-bottom: 1.5rem;">
                      Harap dicatat bahwa Wyeth Nutrition bebas untuk memutuskan apakah menggunakan atau tidak menggunakan konten ini dan bahwa Wyeth Nutrition mungkin telah mengembangkan edisi serupa atau telah memperoleh konten tersebut dari sumber lain, dalam hal ini semua hak kekayaan intelektual di konten ini tetap ada pada Wyeth Nutrition dan pemberi lisensinya.
                      <br />&nbsp;
                    </p>
                  </li>
                  <li>
                    3.3. Kewajiban
                    <p style="margin-bottom: 1.5rem;">
                      <br />Sementara Wyeth Nutrition menggunakan semua upaya yang wajar untuk memastikan keakuratan dari bahan pada Situs Web kami dan untuk menghindari gangguan, kami tidak bertanggung jawab atas informasi yang tidak akurat, gangguan, penghentian atau peristiwa lain yang dapat menyebabkan Anda mengalami kerugian, baik secara langsung (misalnya kegagalan komputer) atau tidak langsung (misalnya kehilangan keuntungan). Setiap ketergantungan pada bahan-bahan dalam situs Web ini akan menjadi risiko Anda sendiri.
                      <br />&nbsp;
                    </p>
                    <p style="margin-bottom: 1.5rem;">
                      Situs Web ini mungkin berisi hubungan ke situs-situs web di luar Wyeth Nutrition. Wyeth Nutrition tidak memiliki kontrol atas situs web pihak ketiga tersebut, tidak selalu mendukung mereka dan tidak bertanggung jawab untuk mereka, termasuk untuk konten, akurasi atau fungsi mereka. Sebagai akibatnya, kami mengharapkan agar Anda berhati-hati dalam meninjau pernyataan hukum situs-situs web pihak ketiga tersebut, termasuk menjaga diri tetap mengetahui informasi mengenai perubahan atas mereka.
                      <br />&nbsp;
                    </p>
                    <p style="margin-bottom: 1.5rem;">
                      Anda dapat mengoperasikan situs pihak ketiga dan menginginkan hubungan ke Situs Web ini. Dalam hal ini, Wyeth Nutrition tidak keberatan dengan hubungan seperti itu asalkan Anda menggunakan homepage URL yang tepat dari Situs Web ini (misalnya hubungan yang tidak dalam) dan tidak menyarankan dengan cara apapun yang Anda berafiliasi dengan atau didukung oleh Wyeth Nutrition. Anda tidak harus menggunakan "framing" atau praktik serupa, dan harus memastikan bahwa hubungan ke Situs Web membuka pada jendela baru.
                      <br />&nbsp;
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                Kontak kita
                <p style="margin-bottom: 1.5rem;">
                  <br />Situs ini dioperasikan oleh PT. WYETH NUTRITION SDUAENAM
                  <br />&nbsp;
                </p>
                <p style="margin-bottom: 1.5rem;">
                  Jika Anda memiliki pertanyaan atau komentar tentang Situs Web, jangan ragu untuk menghubungi kami melalui (i) telepon di 080018-21028 atau (ii) surat biasa di Perkantoran Hijau Arkadia, Jl. Let Jen. TB. Simatupang Kav. 88, Jakarta 12520, Indonesia. PO BOX 5555, Jakarta 12000.
                  <br />&nbsp;
                </p>
              </li>
              <li>
                Perubahan
                <p style="margin-bottom: 1.5rem;">
                  <br />Wyeth Nutrition memiliki hak untuk membuat perubahan atas persyaratan penggunaan ini. Silakan lihat halaman ini pada setiap saat untuk meninjau persyaratan penggunaan dan informasi baru.
                  <br />&nbsp;
                </p>
              </li>
              <li>
                Hukum dan yurisdiksi yang mengatur
                <p style="margin-bottom: 1.5rem;">
                  <br />Situs Web ini ditujukan untuk pengguna dari Indonesia saja. Wyeth Nutrition tidak membuat pernyataan bahwa produk dan konten Situs Web ini sesuai atau tersedia di lokasi selain Indonesia.
                  <br />&nbsp;
                </p>
                <p
                  style="margin-bottom: 1.5rem;"
                >Anda dan Wyeth Nutrition setuju bahwa setiap klaim atau sengketa yang berkaitan dengan situs web ini akan diatur oleh hukum Republik dan dibawa ke pengadilan dari Jakarta Selatan di Indonesia.</p>
              </li>
            </ol>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="Submit()">Daftar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import urlBase from "@/js/url";
export default {
  data() {
    return {
      termLoading: false,
      widthPratinjau: "0%",
      objectURL: null,
      accepts: ["application/pdf"].join(","),
      perusahaan: {
        password: null,
        jenis_usaha: null,
        perusahaan_id: null,
        perusahaan_code: null,
        npwp: null,
        kategori: null,
        nama: null,
        alamat: null,
        email: null,
        contact: null,
        aktif: null,
        created_on: null,
        fullname: null,
        create_on: "online",
        aktif: "false",
        pemohon: null,
        hp: null,
      },
      upload: [
        {
          name: "Nomor Pokok Wajib Pajak",
          nameFile: "Unggah Berkas NPWP",
          praname: "Unggah Berkas NPWP",
          type: null,
          size: 0,
          objectURL: null,
          id: "npwp",
          button: false,
          files: null,
          css: null,
          fileTemp: null,
        },
        {
          name: "Akta Pendirian / Perubahan",
          nameFile: "Unggah Berkas Akta",
          praname: "Unggah Berkas Akta",
          type: null,
          size: 0,
          objectURL: null,
          id: "akta",
          button: false,
          files: null,
          css: null,
          fileTemp: null,
        },
        {
          name: "NIB OSS",
          nameFile: "Unggah Berkas NIB",
          praname: "Unggah Berkas NIB",
          type: null,
          size: 0,
          objectURL: null,
          id: "nib",
          button: false,
          files: null,
          css: null,
          fileTemp: null,
        },
        {
          name: "Izin Usaha / KBLI",
          nameFile: "Unggah Berkas Izin Usaha / KBLI",
          praname: "Unggah Berkas Izin Usaha / KBLI",
          type: null,
          size: 0,
          objectURL: null,
          id: "kbli",
          button: false,
          files: null,
          css: null,
          fileTemp: null,
        },
      ],
      steps: {
        active: 1,
        button: "selanjutnya",
        body: [true, false, false],
      },
      readonly: false,
      isLoading: false,
      login: {
        username: null,
        password: null,
      },
      url: {
        pendaftaran: urlBase.web + "/pendaftaran",
        publicImages: urlBase.web + "/public/images",
      },
      empty: [],
      options: {
        jenis: [
          {
            value: "Badan Usaha",
            label: "Badan Usaha",
          },
          {
            value: "Perorangan",
            label: "Perorangan",
          },
        ],
        kategori: [
          {
            value: "PT",
            label: "PT",
          },
          {
            value: "CV",
            label: "CV",
          },
          {
            value: "FRIMA",
            label: "FIRMA",
          },
          {
            value: "YAYASAN",
            label: "YAYASAN",
          },
          {
            value: "KOPERASI",
            label: "KOPERASI",
          },
          {
            value: "KELOMPOK MASYARAKAT",
            label: "KELOMPOK MASYARAKAT",
          },
          {
            value: "PERSERODA",
            label: "PERSERODA",
          },
          {
            value: "PERUMDA",
            label: "PERUMDA",
          },
        ],
      },
      show: {
        kategori: false,
      },
    };
  },
  mounted() {},
  methods: {
    term() {
      $("#TermAndCondition").modal("show");
    },
    GetPerusahaan() {
      this.axios
        .post(urlBase.web + "/master/perusahaan", {
          type: "perusahaanById",
        })
        .then((r) => (this.perusahaan = r.data[0]));
    },
    notif(s, m, type) {
      this.$notify({
        title: s,
        message: m,
        type: type,
      });
    },
    redirect() {
      window.location.href = urlBase.web + "/dashboard";
    },
    jenisusahachange() {
      if (this.perusahaan.jenis_usaha == "Perorangan") {
        this.show.kategori = false;
        this.perusahaan.kategori = "PERORANGAN";
      } else {
        this.show.kategori = true;
        this.perusahaan.kategori = null;
      }
    },
    Submit() {
      this.$refs["pendaftaranRefs"].validate((valid) => {
        if (valid) {
          this.termLoading = true;
          this.axios
            .post(urlBase.web + "/master/pendaftaran", {
              type: "daftar",
              perusahaan: this.perusahaan,
              upload: this.upload,
            })
            .then((r) => {
              this.termLoading = false;
              console.log(r);
              window.location.href = urlBase.web + "/pendaftaran/selesai";
              this.termLoading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    nextStep() {
      let next = this.steps.active;
      if (next == 2) {
        // this.Submit();
        this.CheckUpload();
      } else if (next == 3) {
        this.Submit();
      } else {
        this.$refs["pendaftaranRefs"].validate((valid) => {
          if (valid) {
            this.stepButton();
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      }
    },
    stepButton() {
      let next = this.steps.active;

      this.steps.body = [false, false, false];
      this.steps.active++;
      this.steps.body[next] = true;
      if (next == 2) {
        this.steps.button = "Daftar";
      }
    },
    stepButtonPrevious() {
      this.steps.body = [false, false, false];

      if (this.steps.active >= 1) {
        this.steps.active--;
      }
      this.steps.body[this.steps.active - 1] = true;
      console.log(this.steps.active);
      if (this.steps.active > 2) {
        this.steps.button = "Daftar";
      } else {
        this.steps.button = "Selanjutnya";
      }
    },
    changeFile(i, event) {
      if (this.objectURL) {
        URL.revokeObjectURL(this.objectURL);
      }

      const file = event.target.files[0];

      this.upload[i].nameFile = file.name;
      this.upload[i].type = file.type;
      this.upload[i].size = file.size;
      this.upload[i].fileTemp = file;
      this.upload[i].objectURL = URL.createObjectURL(file);
      this.upload[i].button = true;
      this.upload[i].praname = this.upload[i].nameFile.substring(0, 60) + "...";
      this.upload[i].css = "custom-file-upload-success";

      let fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = (e) => {
        this.upload[i].files = e.target.result;
      };
    },
    pratinjau(i) {
      this.widthPratinjau = "100%";
      this.objectURL = URL.createObjectURL(this.upload[i].fileTemp);
    },
    pratinjauClose() {
      this.widthPratinjau = "0%";
    },
    UploadFIle(i) {
      this.axios
        .post(urlBase.web + "/pendaftaran/form", {
          type: "UploadFileKeabsahan",
          upload: this.upload,
          perusahaan: this.perusahaan,
        })
        .then((r) => console.log(r.data));
    },
    CheckUpload() {
      this.empty = [];
      for (var i = 0; i < this.upload.length; i++) {
        if (this.upload[i].files == null) {
          this.empty.push(i);
          this.upload[i].css = "custom-file-upload-error";
        }
      }
      if (!this.empty.length) {
        this.stepButton();
      }
    },
  },
};
</script>
<style scope>
.itemDS {
  top: -30px !important;
  width: 100% !important;
}
.itemWarp {
  margin-top: -40px !important;
  font-size: 9px !important;
}

input[type="file"] {
  display: none;
}
.custom-file-upload {
  border: 3px dashed #ccc;
  display: inline-block;
  padding: 80px 20px 20px 20px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  min-height: 220px;
}

.custom-file-upload-error {
  border: 3px dashed red;
}
.custom-file-upload-success {
  border: 3px dashed green;
}
.overlay-popup {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-popup-content {
  position: relative;
  top: 15%;
  width: 100%;
  text-align: center;
  margin-top: 5px;
  padding: 10px 50px 10px 50px;
}

.overlay-popup a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay-popup a:hover,
.overlay-popup a:focus {
  color: #f1f1f1;
}

.overlay-popup .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay-popup a {
    font-size: 20px;
  }
  .overlay-popup .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
@media screen and (max-width: 450px) {
  object,
  iframe {
    border: 3px solid #cecece;
    background: #e9e9e9;
    width: 100%;
    height: 100px;
    overflow: scroll;
  }
}
object,
iframe {
  border: 3px solid #cecece;
  background: #e9e9e9;
  width: 100%;
  height: 600px;
  overflow: scroll;
}

#TermContent {
  height: 400px;
  overflow: scroll;
}
.el-form-item__error {
  top: 10px !important;
}
</style>