<template>
  <div class="mobile-wrapper">
    <div class="banner-wrapper">
      <img class="text-big" src="/img/PANDA PUNK 2169 - mobile.png" />
      <div class="explore">Explore</div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="less" scoped>
.mobile-wrapper {
  width: 100%;
  height: 624px;
  background-color: black;
  .banner-wrapper {
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    overflow: hidden;
    padding: 50px 10px;
    .text-big {
      width: 100%;
      height: 300px;
      object-fit: contain;
      display: block;
      margin: 0 auto;
    }
    .explore {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 18px 96px 19px;
      gap: 10px;
      font-size: 15px;
      font-weight: 700;
      color: white;

      width: 211px;
      height: 47px;

      background: linear-gradient(
        92.23deg,
        #ff56f6 21.43%,
        #b936ee 50.63%,
        #3bace2 100%,
        #406aff 117.04%
      );
      box-shadow: 0px 4px 97px rgba(255, 86, 246, 0.51);
      backdrop-filter: blur(96px);
      /* Note: backdrop-filter has minimal browser support */

      border-radius: 2px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(
        272.52deg,
        #ffa6fa 47.49%,
        #3c79d5 98.81%
      );
      margin: 0 auto;
      margin-top: 104px;
      cursor: pointer;
    }
  }
}
</style>
