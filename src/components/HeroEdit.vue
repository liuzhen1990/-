<template>
  <form v-on:submit.prevent="updateEdit">
    <div class="form-group">
      <label for="exampleInputEmail1">姓名</label>
      <input type="text" class="form-control" id="exampleInputEmail1" v-model="userForm.name">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">性别</label>
      <input type="text" class="form-control" id="exampleInputPassword1" v-model="userForm.gender">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">简介</label>
      <input type="textarea" class="form-control" id="exampleInputPassword1" v-model="userForm.bio">
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      userForm: {
        name: "",
        gender: "",
        bio: ""
      }
    }
  },
  created: function () {
    const { heroId } = this.$route.params
    //console.log(heroId)
    this.heroEdit(heroId)
  },
  methods: {
    heroEdit: function (heroId) {
      axios.get(`http://localhost:3000/heros/${heroId}`).then(res => {
          console.log(res)
          this.userForm=res.data
        })
    },
    updateEdit:function(){
      const { heroId } = this.$route.params
      axios.patch(`http://localhost:3000/heros/${heroId}`,this.userForm).then(res=>{
        console.log(res)
        if(res.status==200){
          this.$router.push('/heros')
        }
      })
    }
  }
}
</script>
<style>
</style>
