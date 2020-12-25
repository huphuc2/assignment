<template>
  <div class="height mh-100">
    <div class="text-center">
      <b-img
        :src="'../src/assets/logo.png'"
        width="55px"
        height="55px"
        class="mt-3 cursor"
      ></b-img>
    </div>
    <b-button
      v-b-toggle.collapse-1
      variant="none"
      class="text-white w-100 text-left mt-3 h6 btn-focus text-hover"
    >
      <div class="h6">
        <i class="fa fa-cog mr-2"></i>Cài đặt
        <div class="float-right"><i class="fa fa-sort-down"></i></div></div
    ></b-button>
    <b-collapse id="collapse-1" class="mt-2">
      <div class="text-white w-100 text-left h6 cursor text-hover pt-2 pb-2">
        <router-link tag="div" class="ml-4" :to="{ name: 'listUser' }"
          >Người dùng</router-link
        >
      </div>
      <div class="text-white w-100 text-left h6 cursor text-hover pt-2 pb-2">
        <router-link tag="div" class="ml-4" :to="{ name: 'productList' }"
          >Sản phẩm</router-link
        >
      </div>
    </b-collapse>
    <b-button
      class="text-white h6 w-100 text-left btn-focus text-hover"
      variant="none"
    >
      <div class="h6"><i class="fa fa-calculator mr-1"></i> Quản lý</div>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "comp-menu",
};
</script>

<style scoped>
@import url("./compMenu.css");
</style>
