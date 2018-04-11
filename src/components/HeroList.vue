<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <a class="btn btn-success" href="#/heros/new">添加英雄</a>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>姓名</th>
          <th>性别</th>
          <th>自我介绍</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in heros">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.bio}}</td>
          <td>
            <!-- <a :id="item.id" href="#/heros/edit">编辑</a>&nbsp;&nbsp; -->
            <router-link :to="{name:'hero-edit',params:{heroId:item.id}}">编辑</router-link>
            <a href="#" @click="deleteHero(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      heros: 
      [
      {
        name: "",
        gender: "",
        bio: ""
      }
      ]  
    }
  },
  created: function () {
    this.showHeroList()
  },
  methods: {
    showHeroList() {
      axios.get('http://localhost:3000/heros').then(res => {
        console.log(res)
        this.heros=res.data
      })
    },
    deleteHero(heroId){
      if(!window.confirm('您确定删除吗？')){
        return
      }
      axios.delete(`http://localhost:3000/heros/${heroId}`).then(res=>{
         console.log(res)
         if(res.status==200){
          this.$router.push('/heros')
          this.showHeroList()
         }
      })
    }
  }
}
</script>
<style>
</style>
