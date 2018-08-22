<template>
  <div class="app-container">
    <slide-bar></slide-bar>
    <top-nav></top-nav>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import AppMain from "./components/appMain";
import SlideBar from "./components/slideBar";
import TopNav from "./components/topNav";
export default {
  components: {
    AppMain,
    SlideBar,
    TopNav
  }
};
</script>

<style scoped lang="scss">
.app-container {
  position: relative;
  .main-container {
    position: absolute;
    top: 50px;
    left: 200px;
    right: 0;
    bottom: 0;
    overflow: auto;
    background: #f6f6f6;
  }
}
</style>