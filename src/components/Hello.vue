<template>
  <div class="hello">
    <h1>登入返回数据：{{msg}}</h1>
    <div class="postCss">test postcss</div>
  </div>
</template>

<script>
  export default {
    name: 'hello',//sys/user/login
    created: () => {
      var _self = this;

      // 直接使用jquery的 ajax 在/config/service.env.js中配置代理ip
      // $.post("/api/portrait/queryanalysis/getqueryanalysisclassify",
      //   function (result) {
      //     _self.msg = result;
      //   });
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import './style.scss';
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>