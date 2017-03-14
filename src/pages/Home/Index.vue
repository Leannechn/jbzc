<template>
    <!--最外层必须是也只能是 一个div ,注意id与页面名称一样-->
  <div id="home">
    <h1>home</h1>

  </div>
</template>

<script>
  export default {
    name: 'home',
    created: () => {
        //这里相当于ready 后执行函数
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import './style.scss';
</style>