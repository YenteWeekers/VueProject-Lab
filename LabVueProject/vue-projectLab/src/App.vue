<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="header">
    <p>enom.</p>
    <hr>
<!--    <div class="head-line"></div>-->
  </div>




  <div class="start-info">
    <div class="play-button"></div>
    <p>Build Your Small Office.</p>
    <div class="nav-bar">
      <div class="nav-items">
        <a>Home</a>
        <div class="navLine-splitItems"></div>
        <a>About</a>
        <div class="navLine-splitItems"></div>
        <a>Contact</a>
        <div class="navLine-splitItems"></div>
        <a>Projects</a>
      </div>
      <p>Create your workspace, a place where all your ideas and work will be developed.
         choose according to your taste and with quality materials will make your dream<br>
      workspace come true</p>
    </div>
  </div>
</template>

<style scoped>
template{
  background: #b60a0a;
}
*{
  //background: #ededed;

}
.header{
  margin: 0 80px;
display: flex;
  align-items: center;
  gap: 95px;
}
.header p{
  color: black;
  font-size: 50px;
  margin: 20px;
}
.header hr{
  width: 75vw;
  height: 1px;
  background: #afafaf;
}




.start-info{
    display: flex;
  align-items: center;
  flex-direction: row;
  margin: 35px 100px;
  gap: 80px;
}

.start-info p{
  font-size: 70px;
  margin: 0;

}.play-button{
  width: 150px;
 }
.nav-bar p{
  font-size: 19px;
}
.nav-bar{
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.nav-items {
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  gap: 18px;
}
.navLine-splitItems{
  height: 20px;
  width: 1px;
  background-color: rgb(134 134 134 / 21%);

}
</style>
