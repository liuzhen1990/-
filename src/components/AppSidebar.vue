<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!-- 由于/hero是以/开头，所以点击/hero,则/也会选中 -->
      <!-- <li>
      <router-link exact to="/">首页</router-link>
      </li> -->
      <!-- 如果不加上a,那么Li不会变成指针形式 -->
      <!-- 默认router-link默认该组件会渲染成a链接，这里将router-link渲染成li标签 -->
      <!-- <li>
      <router-link exact to="/" active-class="active">首页</router-link>
      </li> -->
      <!-- <router-link exact to="/" tag="li" active-class="active"><a>首页</a></router-link>
      <router-link exact to="/heros" tag="li" active-class="active"><a>英雄管理</a></router-link> -->
      <router-link exact to="/" tag="li"><a>首页</a></router-link>
      <router-link exact to="/heros" tag="li"><a>英雄管理</a></router-link>
    </ul>
  </div>
</template>
<script>
</script>
<style>
/*.router-link-active{
  background-color: skyblue;
}*/
</style>
