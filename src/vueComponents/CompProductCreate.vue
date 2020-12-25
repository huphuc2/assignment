<template>
  <div>
    <b-row>
      <b-col cols="5">
        <b class="text-success mt-2">{{ titleProduct }}</b>
      </b-col>
      <b-col cols="5">
        <b class="text-success mt-2">{{ titlePrice }}</b>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="5">
        <comp-input
          placeholder="Nhập tên sản phẩm"
          :disabled="false"
          :value="name"
          class="mt-2"
        />
      </b-col>
      <b-col cols="5">
        <comp-input
          placeholder="Nhập giá sản phẩm"
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
  name: "comp-product-create",
  props: {
    titleProduct: {
      type: String,
      default: "",
    },
    titlePrice: {
      type: String,
      default: "",
    }
  },
};
</script>

<style>
</style>