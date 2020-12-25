<template>
  <div>
    <b class="text-success">{{ titleUser }}</b>
    <b-row>
      <b-col cols="5">
        <comp-input
          placeholder="Tạo tên đăng nhập"
          :disabled="false"
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
    <router-link :to="{ name: 'listUser' }">
      <comp-button value="Cancel" class="float-right ml-2" size="sm" type=""/>
    </router-link>
    <comp-button value="Submit" class="float-right" size="sm" type="submit"/>
    
  </div>
</template>

<script>
import CompButton from './CompButton.vue';
import compInput from './compInput.vue';
export default {
  components: { compInput, CompButton },
  name: "comp-create",
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
};
</script>

<style>
</style>