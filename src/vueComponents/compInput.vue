<template>
  <div>
    <b-form-input
      :placeholder="placeholder"
      class="btn-focus"
      :disabled="disabled"
      v-model="value"
    >
    </b-form-input>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    value: String,
    disabled: Boolean
  },
  name: "comp-input",
};
</script>

<style>
</style>