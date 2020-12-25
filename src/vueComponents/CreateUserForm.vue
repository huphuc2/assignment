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
            <comp-create
              :name="name"
              :firstName="firstName"
              :status="status"
              titleUser="Tên đăng nhập"
              titleName="Tên nhân viên"
              titleFirstName="Họ nhân viên"
            />
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CompCreate from "./compCreate.vue";
import CompHeader from "./CompHeader.vue";
import CompMenu from "./compMenu/CompMenu.vue";
export default {
  data() {
    return {
      userName: "",
      name: "",
      firstName: "",
      status: false,
      userName: this.$route.params.userName,
    };
  },
  components: { CompMenu, CompHeader, CompCreate },
  name: "create-user",
};
</script>

<style>
</style>