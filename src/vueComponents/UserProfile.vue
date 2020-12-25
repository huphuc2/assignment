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
            <comp-profile
              :userName="userName"
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
import CompHeader from "./CompHeader";
import CompMenu from "./compMenu/CompMenu";
import CompListHeader from "./CompListHeader";
import CompProfile from "./compProfile.vue";
export default {
  data() {
    return {
      userName: this.$route.params.userName,
      name: "Phuc",
      firstName: "Dang",
      status: true,
    };
  },
  name: "edit-form",
  components: {
    CompHeader,
    CompMenu,
    CompListHeader,
    CompProfile,
  },
};
</script>

<style>
.sidebar {
  position: fixed;
}
</style>