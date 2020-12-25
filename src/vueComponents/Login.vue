<template>
  <div
    id="login"
    class="top_min center border login shadow p-3 mb-5 bg-white rounded"
  >
    <b-img
      center
      :src="'src/assets/logo.png'"
      width="240px"
      height="215px"
      class="top_med"
    ></b-img>
    <b-form-group
      id="userName"
      label="Tên đăng nhập"
      label-for="userName"
      class="text_login left"
    >
      <b-form-input
        id="userName"
        placeholder="Nhập đăng nhập"
        v-model="userName"
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="password"
      label="Mật khẩu"
      label-for="userName"
      class="text_login left"
    >
      <b-form-input id="password" placeholder="Nhập mật khẩu"></b-form-input>
    </b-form-group>
    <div class="d-flex justify-content-center">
      <router-link tag="b-button" class="widthButton left bg-success" :to="{ name: 'listUser', params: { userName } }" append>Đăng nhập</router-link>
    </div>
  </div>
</template>

<script>
import listForm from "./listForm.vue";
export default {
  data() {
    return {
      isActive: false,
      userName: "",
      passWord: "",
    };
  },
  name: "login",
  components: {
    listForm,
  },
  methods: {
    changeForm() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
div.top_min {
  margin-top: 15px;
}
.top_med {
  margin-top: 25px;
}
.left {
  margin-left: 10px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.login {
  width: 400px;
  height: 550px;
}
.text_login {
  color: rgb(38, 182, 38);
  font-weight: bold;
}
::placeholder {
  color: lightgrey;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: lightgrey;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: lightgrey;
}
.widthButton {
  width: 100%;
}
</style>
