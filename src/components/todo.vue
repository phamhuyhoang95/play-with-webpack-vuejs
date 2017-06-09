<template>
  <div class="todo">
    <h1>{{ msg }}</h1>
    <button class='btn btn-success'>Nhấn vào</button>
    <div style='width:200px; height:300px' id='acb'></div>
  </div>
</template>

<script>
import {HTTP} from '../services/blog.js'

export default {
  name: 'todo',
  data () {
    return {
      photos: [],
      msg: 'Your Plan'
    }
  },
  created () {
    HTTP.get('photos')
    .then(response => {
      this.photos = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='../../node_modules/bootstrap/dist/css/bootstrap.css'/>

<style scoped src='../assets/hoang.css' />
