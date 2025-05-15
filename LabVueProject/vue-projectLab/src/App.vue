<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">


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
         choose according to your taste and with quality materials will make your dream
      workspace come true</p>
    </div>
  </div>




  <div>
    <img src="../Img/pexels-andrew-8960464.jpg" height="532" width="auto"/></div>
</template>

<style scoped>

*{

  //background: #ededed;

}
.header{
  //margin: 0 80px;
display: flex;
  align-items: center;
  gap: 95px;
}
.header p{
  color: black;
  font-size: 50px;
  margin: 20px;
  font-family: "Merriweather", serif;
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
  margin: 50px 0;
  gap: 75px;
}

.start-info p{
  font-size: 55px;
  margin: 0;
  font-family: "Merriweather", serif;
  flex-basis: 56%;

}.play-button{
  width: 410px;
 }
.nav-bar p{
  font-size: 19px;
  font-family: "Open Sans", sans-serif;
}
.nav-bar{
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.nav-items {
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
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
