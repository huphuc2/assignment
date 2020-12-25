<template>
  <b-button variant="success" :type="type" :size="size">{{
    value
  }}</b-button>
</template>

<script>
export default {
  props: {
    value: String,
    type: String,
    size: String,
  },
  name: 'comp-button'
};
</script>

<style>
</style>