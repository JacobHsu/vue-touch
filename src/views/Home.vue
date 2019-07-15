<template>
  <div class="home">
    <div class="container">
      <div class="row main">
          <div class="col-md-12">
            <h2 class="top_title"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span><a href="https://www.helloweba.net/javascript/610.html">Vue移动端左滑屏幕返回上一页</a></h2>
            <div class="container" style="width: 96%; margin: 30px auto; background:#ccf;">
               <h1>點擊查看</h1>
                <p><router-link to="/view">查看詳情</router-link></p>
            </div>
          </div>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
