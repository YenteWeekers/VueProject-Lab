<script setup>
import { onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

onMounted(() => {
  const modal = document.getElementById("myModal");
  const images = document.getElementById("imagesHomePage");
  const modalImg = document.getElementById("img01");
  const span = document.getElementsByClassName("close")[0];

  if (images && modal && modalImg && span) {
    images.querySelectorAll("img").forEach(
        function(img) {
          img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
          }
        }
    )


    document.addEventListener("keydown", keyPress)

    function keyPress (pressedButton) {
      if(pressedButton.key === "Escape") {
        modal.style.display = "none";
      }
    }

    span.onclick = function () {
      modal.style.display = "none";
    }
    modal.onclick = function (ev) {
      if(ev.target.id == "myModal") {
        modal.style.display = "none";
      }
    }
  } else {
    console.warn('Sommige DOM-elementen zijn niet gevonden')
  }
});


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
        <RouterLink to="/about">About</RouterLink>
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




  <div class="front">
    <img class="front-img" src="../Img/pexels-andrew-8960464.jpg" height="532" width="auto"/>
    <div class="right-sideImg">
      <div class="social-icons">
        <a href="https://mijnlucas.sintlucas.nl/" ><img src="../Img/letter-m.png" height="32" width="32"/></a>
        <a href="https://www.facebook.com/?locale=nl_NL"><img src="../Img/facebook%20(3).png" height="32" width="32"/></a>
        <a href="https://x.com/i/flow/login"><img src="../Img/twitter.png" height="32" width="32"/></a>
      </div>
      <div class="scroll-down">
        <img src="../Img/mouse.png" height="37" width="37"/>
        <p>Scroll Down</p>
        <div class="scrollDown-line"></div>
      </div>
    </div>
  </div>




  <div id="imagesHomePage" class="imgs">
    <img id="myImg" src="../Img/desk.png" height="382" width="344"/>
    <img src="../Img/chair.png" height="384" width="342"/>
    <div class="img-groenvak-imgs">
      <img src="../Img/lamp.png" height="370" width="344"/>
      <div class="groen-vak-imgs"></div>
    </div>
  </div>


  <div id="myModal" class="modal">
    <span class="close">&times;</span>
    <img class="modal-content" id="img01">
  </div>






  <div class="under-text">
    <div class="leftText-underText">
      <p class="h1">Free to Choice your Furniture</p>
      <p>Create your workspace, a place where all your ideas and work will be developed.<br>
        Choose according to your taste and with quality materials will make your dream<br>
        workspace come true</p>
    </div>
    <div class="rightNumbers-underText">
      <div class="desk">
        <h1>25</h1>
        <p>Desk<br>
          Collection</p>
      </div>
      <div class="line-rightNumbers"></div>
      <div class="chair">
        <h1>50</h1>
        <p>Chair<br>
          Collection</p>
      </div>
      <div class="line-rightNumbers"></div>
      <div lamp="desk">
        <h1>15</h1>
        <p>Lamp<br>
          Collection</p>
      </div>
    </div>
  </div>
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

.nav-items a{
  text-decoration: none;
  color: black;
  list-style: none;
  position: relative;
  cursor: pointer;
}

.nav-items a:hover {
  color: #939693;
}

.nav-items a::after{
  background: #939693;
  width: 0%;
  height: 1px;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: width .2s;
  content: '';
}

.nav-items a:hover::after{
  width: 100%;
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
  color: #5a5858;
}
.nav-bar{
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.nav-items {
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: row;
  font-weight: bold;
  gap: 18px;
}
.navLine-splitItems{
  height: 20px;
  width: 1px;
  background-color: rgb(134 134 134 / 21%);

}
.front{
  display: flex;
  align-items: anchor-center;
  justify-content: space-around;

}
.front-img{
  height: 695px;
  width: 1200px;
  color: #36585c;
}
.right-sideImg{
  display: flex;
  flex-direction: column;
  gap: 120px;
}

.social-icons{
  display: flex;
  flex-direction: column;
  gap: 19px;
}
.social-icons img{
  width: 25px;
  height: auto;
}
.scroll-down{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.scroll-down p{
  font-size: 19px;
  font-family: "Open Sans", sans-serif;
  color: #363535;
  writing-mode: sideways-rl;
  margin: 0;
}
.scrollDown-line{
  background-color: #898888;
  width: 1px;
  height: 280px;
}

.imgs{
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
}

.imgs img{
  transition: transform .3s;
}
.imgs img:hover{
  transform:scale(1.3);
}


.groen-vak-imgs{
  height: 370px;
  width: 150px;
  background-color: #36585c;
}

.img-groenvak-imgs{
  display: flex;
}

.under-text{
  display: flex;
  justify-content: space-around;
}


.leftText-underText p{
  font-size: 17px;
  font-family: "Open Sans", sans-serif;
  color: #363535;
}

.h1{
  font-weight: bold;
  font-size: 32px !important;
}

.rightNumbers-underText{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 28%;
}
h1{
  font-size: 60px;
  font-family: "Open Sans", sans-serif;
  color: #363535;
  font-weight: normal;
  margin: 0;
}
.rightNumbers-underText p{
  font-family: "Open Sans", sans-serif;
  margin: 0;
}
.line-rightNumbers{
  height: 107px;
  width: 1px;
  background-color: #cccccc;
}







#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {opacity: 0.7;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content, #caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)}
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
</style>
