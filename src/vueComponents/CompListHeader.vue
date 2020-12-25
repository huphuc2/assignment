<template>
  <div>
    <div class="card-body">
      <div class="h4">
        {{ title }}
        <div class="float-right">
          <router-link tag="b-button" class="bg-success" :to="create">{{ buttonTitle }}</router-link>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <b-row>
        <b-col cols="2">
          <b-form-select v-model="perPage" :options="pageOptions" size="sm">
          </b-form-select>
        </b-col>
        <b-col cols="7"></b-col>
        <b-col cols="3">
          <b-input-group class="mt-3">
            <b-form-input placeholder="Tìm kiếm" size="sm" class="btn-focus"></b-form-input>
            <b-input-group-append>
              <b-button variant="success" size="sm" class="btn-focus" :disabled="isDisabled">Xóa</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchData:{
      type: String,
      default: ""
    },
    title: String,
    buttonTitle: String,
    create: String
  },
  data() {
    return {
      pageOptions: [5, 50, 100],

      perPage: 5,
    };
  },
  methods:{
    isDisabled(){
      if(this.searchData == ""){
        return true
      }else return false
    }
  },
  
  name: "comp-list-header",
};
</script>

<style>
@import url(../css/Main.css);
</style>