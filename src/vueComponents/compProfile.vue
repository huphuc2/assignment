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
          :disabled="true"
          :value="name"
          class="mt-2"
        />
      </b-col>
      <b-col cols="5">
        <comp-input
          placeholder="Nhập họ"
          :disabled="true"
          :value="firstName"
          class="mt-2"
        />
      </b-col>
    </b-row>
    <b-row>
        <b-col cols="2">
            <b class="text-success mt-2">Trạng thái: </b>
            
        </b-col>
        <b-col><div class="h8">{{ isOff() }}</div></b-col>
    </b-row>
  </div>
</template>

<script>
import compInput from "./compInput.vue";
export default {
  components: { compInput },
  name: "comp-profile",
  props: {
    userName: {
      type: String,
      default: "",
    },
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
  methods: {
    isOff() {
      if (this.status == true) {
        return "Đang làm";
      } else return "Nghỉ việc";
    },
  },
};
</script>

<style>
</style>