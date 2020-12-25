<template>
  <div>
    <b-navbar>
      <b-navbar-nav class="ml-auto">
        <b-nav>
          <i class="fa fa-user-circle fa-2x"></i>
          <b-nav-item-dropdown
            id="dropdown-right"
            right
            text="User"
            outline-variant="none"
            variant="none"
            class="text-secondary btn-focus"
          >
            <b-dropdown-item href="#"
              ><router-link
                tag="div"
                :to="{ name: 'edit' }"
                >Hồ sơ</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link tag="div" :to="{ name: 'login' }"
                >Thoát</router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-nav>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "comp-header",
};
</script>

<style>
@import url("../css/Main.css");
</style>