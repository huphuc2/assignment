<template>
  <div>
    <b-row class="w-100 bg-light">
      <b-col cols="3" class="border border-success bg-success mh-100">
        <comp-menu />
      </b-col>
      <b-col>
        <comp-header class="sticky-top bg-white w-100" />
        <div class="card ml-3 mt-3 shadow">
          <comp-list-header title="Danh sách sản phẩm" buttonTitle="Tạo sản phẩm" create="createproduct"/>
          <comp-table table="product" />
        </div>
        <div class="card-body">
          <comp-pagination />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CompHeader from "./CompHeader";
import CompListHeader from "./CompListHeader";
import CompTable from "./CompTable";
import CompPagination from "./CompPagination";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import CompMenu from './compMenu/CompMenu.vue';
export default {
  data() {
    return {
      userName: this.$route.params.userName,
    };
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.lengthItems;
  },
  computed: {
    setPageNumber() {
      return Math.ceil(this.lengthItems / this.perPage);
    },
    pageNumber: {
      get() {
        return this.$store.state.pageNumber;
      },
      set(pageNumber) {
        this.$store.dispatch("updatePageNumber", setPageNumber);
      },
    },
    totalRows: {
      get() {
        return this.$store.state.totalRows;
      },
      set(totalRows) {
        this.$store.dispatch("updateTotalRows", totalRows);
      },
    },
    perPage() {
      return this.$store.state.perPage;
    },
    ...mapGetters(["lengthItems"]),
  },
  name: "listForm",

  components: {
    CompMenu,
    CompHeader,
    CompListHeader,
    CompTable,
    CompPagination,
  },
};
</script>

<style>
</style>