<template>
    <router-view/>
</template>

<script>
import Login from './vueComponents/Login.vue'
import ListForm from './vueComponents/listForm.vue'
export default {
    name: 'app',
    components: {
        Login,
        ListForm,
    }
}
</script>

<style>

</style>