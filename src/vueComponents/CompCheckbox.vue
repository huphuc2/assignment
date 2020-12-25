<template>
  <b-form-checkbox
    v-model="status"
    value="true"
    unchecked-value="false"
    class="mt-2"
  >
    Trạng thái
  </b-form-checkbox>
</template>

<script>
export default {
  name: "comp-checkbox",
  props: {
      status: {
          type: Boolean,
          default: true
      }

  }
};
</script>

<style>
</style>