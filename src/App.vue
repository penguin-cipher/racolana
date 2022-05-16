<template>
  <div class="app-layout">
    <div class="sidebar-c">
      <SideBar />
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import SideBar from "./components/sideNav.vue";
export default {
  components: {
    RouterView,
    SideBar,
  },
};
</script>

<style>
@import "./style/global.css";
</style>
