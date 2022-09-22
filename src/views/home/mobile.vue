<template>
  <div class="mobile-wrapper">
    <div class="banner-wrapper">
      <img class="text-big" src="/img/PANDA PUNK 2169 - mobile.png" />
      <div class="explore">Explore</div>
      <div class="scroll-button" @click="goTop"></div>
    </div>
    <div class="the-story" id="TheStory">
      <div class="title">THE STORY</div>
      <div class="content1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis cras
        lobortis cursus quisque risus. Amet, vivamus pharetra leo interdum a
        viverra in eu. Eu sed mauris, varius morbi vivamus montes. Magna amet,
        elementum sed in. Sit egestas id pharetra et consequat, pharetra
        sagittis, pretium. Et sed consequat turpis laoreet ligula non. Quam
        nunc, porttitor semper integer. Id molestie leo tortor libero quis quis
        egestas.
        <br />
        <br />
        Nisl, ullamcorper elit, integer tristique consectetur. Urna convallis
        libero, urna id a cras nisl. Aliquet dictum felis nunc, metus, volutpat
        purus risus donec ipsum.
      </div>
      <div class="content2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis cras
        lobortis cursus quisque risus. Amet, vivamus pharetra leo interdum a
        viverra in eu. Eu sed mauris, varius morbi vivamus montes. Magna amet,
        elementum sed in. Sit egestas id pharetra et consequat, pharetra
        sagittis, pretium. Et sed consequat turpis laoreet ligula non. Quam
        nunc, porttitor semper integer. Id molestie leo tortor libero quis quis
        egestas. Nisl, ullamcorper elit, integer tristique consectetur. Urna
        convallis libero, urna id a cras nisl. Aliquet dictum felis nunc, metus,
        volutpat purus risus donec ipsum.
      </div>
    </div>
    <div class="our-wrapper">
      <div class="title">OUR HEROES</div>
      <a-carousel arrows autoplay>
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
          </div>
        </template>
        <div class="scroll-view" v-for="(v, i) in heros" :key="i" @click="openModal(v)">
          <img class="hero" :src="v.img" alt="" />
        </div>
      </a-carousel>
    </div>

    <HeroModalMobile v-model:visible="heroVisible" :attrs="attrs" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import HeroModalMobile from '@/components/HeroModal/mobile.vue'
import { heros } from './index'

const heroVisible = ref(false)

const attrs = ref({})
const openModal = (v)=>{
  heroVisible.value = true
  attrs.value = v
}

const goTop = () => {
  document.getElementById("TheStory").scrollIntoView();
};
</script>
<style lang="less" scoped>
.mobile-wrapper {
  width: 100%;
  min-height: 624px;
  background-color: black;
  .banner-wrapper {
    width: 100%;
    height: 604.75px;
    background: rgba(0, 0, 0, 0.7);
    background: url("/img/banner.jpg") no-repeat center;
    background-size: cover;
    background-position: 20% 20%;
    overflow: hidden;
    padding: 50px 30px;
    .text-big {
      width: 100%;
      height: 300px;
      object-fit: contain;
      display: block;
      margin: 0 auto;
      margin-top: 53px;
    }
    .explore {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 18px 96px 19px;
      gap: 10px;
      font-family: "Orbitron";
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
      // box-shadow: 0px 4px 97px rgba(255, 86, 246, 0.51);
      backdrop-filter: blur(96px);
      /* Note: backdrop-filter has minimal browser support */

      border-radius: 2px solid;
      border-image-slice: 90%;
      border: 2px solid;
      border-image-source: linear-gradient(
        272.52deg,
        #ffa6fa 47.49%,
        #3c79d5 98.81%
      );
      margin: 0 auto;
      margin-top: 40px;
      cursor: pointer;
    }

    .scroll-button {
      position: absolute;
      width: 56px;
      height: 56px;
      left: calc(100vw / 2 - 56px / 2);
      top: 530px;
      background: url("/svg/scroll.svg") no-repeat center;
      cursor: pointer;
    }
  }
  .the-story {
    width: 100%;
    height: 1000px;
    .title {
      width: 100%;
      text-align: center;
      font-family: "Orbitron";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 137.4%;
      /* identical to box height, or 55px */

      color: #ffffff;
      padding: 50px 0 25px 0;
    }
    .content1 {
      width: 322.97px;
      margin: 0 auto;
      font-family: "Poppins";
      font-style: normal;
      font-size: 16px;
      line-height: 24px;
      text-align: right;

      color: #ffffff;
      margin-bottom: 30px;
    }
    .content2 {
      width: 322.97px;
      margin: 0 auto;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      padding-bottom: 20px;
    }
  }

  .our-wrapper {
    width: 100%;
    height: 480px;
    .title {
      width: 100%;
      text-align: center;
      font-family: "Orbitron";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 137.4%;
      /* identical to box height, or 55px */

      color: #ffffff;
      padding: 50px 0 25px 0;
    }
    .scroll-view {
      width: 100%;
      height: 290px;
      padding-bottom: 20px;
      .hero {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
