<template>
  <div>
    <b class="text-success">{{ titleUser }}</b>
    <b-row>
      <b-col cols="5">
        <comp-input
          placeholder="Tạo tên đăng nhập"
          :disabled="true"
          :value="userName"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="5">
        <b class="text-success mt-2">{{ titleName }}</b>
      </b-col>
      <b-col cols="5">
        <b class="text-success mt-2">{{ titleFirstName }}</b>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="5">
        <comp-input
          placeholder="Nhập tên"
          :disabled="false"
          :value="name"
          class="mt-2"
        />
      </b-col>
      <b-col cols="5">
        <comp-input
          placeholder="Nhập họ"
          :disabled="false"
          :value="firstName"
          class="mt-2"
        />
      </b-col>
    </b-row>
    <b-form-checkbox
      v-model="status"
      value="true"
      unchecked-value="false"
      class="mt-2"
    >
      Trạng thái
    </b-form-checkbox>
    <b-button
      variant="success"
      type="rest"
      right
      size="sm"
      class="float-right ml-2"
      >Cancel</b-button
    >
    <b-button
      variant="success"
      type="submit"
      right
      size="sm"
      class="float-right"
      >Submit</b-button
    >
  </div>
</template> 

<script>
import compInput from "./compInput.vue";

export default {
  data() {
    return {
      userName: this.$route.params.userName,
    };
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    firstName: {
      type: String,
      default: "",
    },
    titleUser: {
      type: String,
      default: "",
    },
    titleName: {
      type: String,
      default: "",
    },
    titleFirstName: {
      type: String,
      default: "",
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  name: "comp-edit",
  components: {
    compInput,
  },
};
</script>

<style>
.sidebar {
  position: fixed;
}
</style>