<template>
  <div>
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- <app-main></app-main> -->
          <!-- 配置路由内容 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
//import AppMain from './components/Main.vue'
export default {
  data() {
    return {}
  },
  components: {
    AppHeader: AppHeader,
    AppSidebar: AppSidebar
    // AppMain: AppMain
  }
}
</script>
<style>
</style>
