<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  //移动端适配方案
  require('lib-flexible');
  export default {
    name: 'app'
  }

</script>
