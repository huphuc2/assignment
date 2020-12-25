<template>
  <div>
    <b-row class="w-100 bg-light">
      <b-col cols="3" class="border border-success bg-success mh-100">
        <comp-menu />
      </b-col>
      <b-col>
        <comp-header class="sticky-top bg-white w-100" />
        <div class="card ml-3 mt-3 shadow">
          <comp-list-header
            title="Danh sách người dùng"
            buttonTitle="Tạo người dùng"
            create="createUser"
          />
          <comp-table table="employee"/>
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
import { mapGetters, mapActions, mapState } from "vuex";
import CompMenu from "./compMenu/CompMenu.vue";
export default {
  mounted() {
    // Set the initial number of items
    this.totalRows = this.lengthItems;
  },
  computed: {
    ...mapState(["pageNumber", "totalRows", "perPage", "employee"]),
    ...mapGetters(["lengthItems"]),
    setPageNumber() {
      return Math.ceil(this.lengthItems / this.perPage);
    },
    items() {
      return this.employee.items;
    },
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