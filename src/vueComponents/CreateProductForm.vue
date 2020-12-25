<template>
  <div>
    <b-row class="w-100 bg-light">
      <b-col cols="3" class="border border-success bg-success mh-100">
        <comp-menu />
      </b-col>
      <b-col>
        <comp-header :userName="userName" class="sticky-top bg-white w-100" />
        <div class="card ml-3 mt-3">
          <div class="card-body">
            <comp-product-create
              :status="status"
              titleProduct="Tên sản phẩm"
              titlePrice="Giá sản phẩm"
            />
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CompHeader from "./CompHeader.vue";
import CompMenu from "./compMenu/CompMenu.vue";
import CompProductCreate from './CompProductCreate.vue';
export default {
  data() {
    return {
      status: false,
      userName: this.$route.params.userName,
    };
  },
  components: { CompMenu, CompHeader, CompProductCreate },
  name: "create-product",
};
</script>

<style>
</style>