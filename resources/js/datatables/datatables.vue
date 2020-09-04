<template>
  <div>
    <filterBar></filterBar>
    <vuetable
      v-loading="isLoading.table"
      :track-by="table.trackBy"
      ref="vuetable"
      :api-url="table.api"
      :fields="table.fields"
      pagination-path
      :css="css.table"
      :append-params="moreParams"
      @vuetable:cell-clicked="onCellClicked"
      @vuetable:pagination-data="onPaginationData"
      @vuetable:loading="onLoading"
      @vuetable:loaded="onLoaded"
    >
      <template slot="actions" slot-scope="props">
        <div class="custom-actions">
          <button
            class="btn btn-sm btn-primary"
            @click="onAction('edit-item', props.rowData, props.rowIndex)"
          >
            <i class="fa fa-pencil"></i>
          </button>
          <button
            class="btn btn-danger btn-sm"
            @click="onAction('hapus-item', props.rowData, props.rowIndex)"
          >
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </template>
    </vuetable>
    <div class="vuetable-pagination">
      <vuetable-pagination-info ref="paginationInfo" info-class="pagination-info"></vuetable-pagination-info>
      <vuetable-pagination
        ref="pagination"
        :css="css.pagination"
        @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>
    </div>
  </div>
</template>
<script>
import urlBase from "@/js/url";
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo";
import filterBar from "@/js/filterBar";
import CustomActions from "@/js/datatables/customAction";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedTo: [],
      isLoading: {
        table: true
      },
      css: {
        table: {
          tableClass: "table table-bordered table-striped table-hover",
          ascendingIcon: "glyphicon glyphicon-chevron-up",
          descendingIcon: "glyphicon glyphicon-chevron-down"
        },
        pagination: {
          wrapperClass: "pagination",
          activeClass: "active",
          disabledClass: "disabled",
          pageClass: "page",
          linkClass: "link",
          icons: {
            first: "",
            prev: "",
            next: "",
            last: ""
          }
        },
        icons: {
          first: "glyphicon glyphicon-step-backward",
          prev: "glyphicon glyphicon-chevron-left",
          next: "glyphicon glyphicon-chevron-right",
          last: "glyphicon glyphicon-step-forward"
        }
      },
      moreParams: {}
    };
  },
  created() {
    // this.table.fields.push(this.customAction);
  },
  props: ["table"],
  methods: {
    onLoading() {
      this.isLoading.table = true;
    },
    onLoaded() {
      this.isLoading.table = false;
    },
    allcap(value) {
      return value.toUpperCase();
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    onCellClicked(data, field, event) {
      alert();
      console.log("cellClicked: ", data);
    },
    onAction(action, data, index) {
      if (action == "edit-item") {
        this.$router.push({
          name: this.table.editItem,
          query: { v: data.id }
        });
      } else {
        var urlTable = this.table.deleteItem;
        this.axios
          .post(urlTable, {
            type: "delete",
            data: data
          })
          .then(r => this.refresh());
      }
    },
    refresh() {
      this.$nextTick(() => this.$refs.vuetable.refresh());
    },
    editTo() {
      alert();
    }
  },
  events: {
    "filter-set"(filterText) {
      this.moreParams = {
        filter: filterText
      };
      this.$nextTick(() => this.$refs.vuetable.refresh());
    }
  },
  components: {
    Vuetable,
    filterBar,
    "vuetable-pagination": VuetablePagination,
    "vuetable-pagination-info": VuetablePaginationInfo
  }
};
</script>
<style>
.pagination {
  margin: 0;
  float: right;
}
.pagination a.page {
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 5px 10px;
  margin-right: 2px;
}
.pagination a.page.active {
  color: white;
  background-color: #337ab7;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 5px 10px;
  margin-right: 2px;
}
.pagination a.btn-nav {
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 5px 7px;
  margin-right: 2px;
}
.pagination a.btn-nav.disabled {
  color: lightgray;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 5px 7px;
  margin-right: 2px;
  cursor: not-allowed;
}
.pagination-info {
  float: left;
}
</style>