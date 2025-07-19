<script setup lang="ts"></script>

<style scoped lang="scss">
  .cover-container {
    position: relative;
    width: 100%;
    background-color: #000;

    .logo {
      position: absolute;

      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      //height: 75%;
      z-index: 1;
    }

    .section {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;

      #myVideo {
        width: 100%;
        position: absolute;
        opacity: 0.5;
      }

      &.s2 {
        filter: blur(100px);
      }
    }

    .splitter {
      width: 100%;
      margin-top: -25px;
      z-index: 99;
      position: relative;
      box-shadow: 0px 0px 120px 100px black;
    }
  }
</style>

<template>
  <div class="cover-container">
    <!--<img src="unicorn.png" alt="logo" class="logo" />-->

    <div class="section s1">
      <video autoplay muted loop id="myVideo">
        <source src="forest.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="splitter"></div>

    <div class="section s2">
      <video autoplay muted loop id="myVideo">
        <source src="forest.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
