<template>
  <div>
    <b-row>
      <b-col>
        <div class="text-secondary">
          {{ currentPage }} - {{ pageNumber }} / tổng số
          {{ pageNumber }}
        </div>
      </b-col>
      <b-col cols="5">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          class="my-0"
        >
          <div></div>
          <template #page="{ page, active }">
            <b v-if="active">{{ page }}</b>
            <div v-else class="text-dark">{{ page }}</div>
          </template>
        </b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "comp-pagination",
  computed: {
    currentPage() {
      return this.$store.state.currentPage;
    },
    pageNumber() {
      return this.$store.state.pageNumber;
    },
    totalRows() {
      return this.$store.state.totalRows;
    },
    perPage() {
      return this.$store.state.perPage;
    },
  },
};
</script>

<style>
</style>