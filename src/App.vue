<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view/>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyFooter from './components/MyFooter/myFooter'
import MyHeader from './components/MyHeader/myHeader'
export default {
  name: 'App',
  components: {
    MyFooter,
    MyHeader
  }
}
</script>

<style>
#app {
  font-family: '微软雅黑','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  min-width: 1200px;
  /* margin-top: 60px; */
}
</style>
