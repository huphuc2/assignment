<template>
  <div>
    <b-table
      outlined
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
    >
      <template #cell(edit)>
        <i class="fas fa-edit float-right mr-4 text-success cursor"></i>
        <!-- <router-link tag="i" class="fas fa-edit float-right mr-4 text-success cursor" :to="{ name: 'edit', params: user }"></router-link> -->
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    table: String
  },
  computed: {
    ...mapState(["currentPage", "perPage", "currentPage", "employee", "product"]),
    value(){
      if(this.table === "employee"){
        return this.employee
      }else return this.product
    },
    fields() {
      return this.value.fields
    },
    items() {
      return this.value.items;
    },
  },
  name: "comp-table",
};
</script>

<style>
</style>