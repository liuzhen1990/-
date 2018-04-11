<template>
  <form @submit.prevent="addHero">
    <div class="form-group">
      <label for="exampleInputEmail1">姓名</label>
      <input
       type="text"
        class="form-control"
         id="exampleInputEmail1"
         v-model="userForm.name">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">性别</label>
      <input
       type="text"
        class="form-control"
         id="exampleInputPassword1"
         v-model="userForm.gender">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">简介</label>
      <input
       type="textarea"
        class="form-control"
         id="exampleInputPassword1"
         v-model="userForm.bio">
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
    userForm:{
      name:"",
      gender:"",
      bio:""
    }
    }
  },
  methods:{
    addHero:function(){
      axios.post('http://localhost:3000/heros',this.userForm).then(res=>{
      console.log(res)
      if(res.status===201){
        this.$router.push('/heros')
      }
      })
    }
  }
}
</script>
<style>
</style>
