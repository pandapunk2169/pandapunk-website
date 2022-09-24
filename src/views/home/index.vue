<template>
  <MobileHome v-if="isMobile" />
  <div v-else class="home-wrapper">
    <div class="banner-wrapper">
      <img class="text-big" src="/img/PANDA PUNK 2169.png" />
      <div class="explore" @click="explore">Explore</div>
      <div class="scroll-button" @click="goTop"></div>
    </div>
    <div class="real-wrapper" id="RealWapper">
      <div class="title">REVELATION</div>
      <div class="content">
        <div class="left-content">
          In 2023, the World War III broke out and ended in nuclear war, Human
          civilization disappeared...
          <br />
          <br />
          In 2035, the surviving Panda Family, due to the contamination of
          nuclear radiation, had genetic mutations in their bodies, evolved into
          a high-IQ race, and began to rule the Earth...
          <br />
          <br />
          In 2058, due to the destruction of nuclear pollution and war, the
          earth's homeland has become uninhabitable, the panda family began to
          seek immigration to Mars, and the MarsPanda plan began to be
          implemented...
        </div>
        <div class="right-content">
          In 2123, the 100th anniversary of the World War III has passed. The
          Panda Family has also ruled the whole galaxy and began to move towards
          more distant galaxies. But then came the intensification of internal
          division. At this time, there were two camps: Light and Dark.
          <br />
          <br />
          Light: advocate developing trade exchanges with other planets through
          peace and friendship Dark : advocate colonizing and plundering other
          planet resources by force
          <br />
          <br />
          In 2141, the war of the Panda Family began between the stars
          <br />
          <br />
          In 2169, on the Planet M78 of the Sagittarius α galaxy, a war between
          the two camps of Light and Dark is about to break out, and Panda Punk
          2169 kicks off...
        </div>
      </div>
    </div>
    <div class="our-hero-wrapper">
      <div class="title">OUR HEROES</div>
      <div class="content">
        <a-row :gutter="[12, 120]">
          <a-col v-for="(v, i) in heros" :key="i" :xxl="6" :xl="8"  :md="12"  :xs="24">
            <div class="hero-box">
              <img class="hero" :src="v.img" />
              <div class="hero-name" @click="heroDetail(v)">{{ v.Character }}</div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <!-- <div class="join-wrapper">
      <div class="title">JOIN THE PANDA PUNKS.</div>
    </div> -->
  </div>
  <HeroModal v-model:visible="heroDetailVisible" :attrs="attrs" />
  <ConnectWallet v-model:visible="connectVisible" />
</template>
<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import { useMediaQuery } from "@vueuse/core";
import HeroModal from "@/components/HeroModal/index.vue";
import ConnectWallet from "@/components/ConnectWallet/index.vue";
import MobileHome from "./mobile.vue";
import { heros } from './index'

const isMobile = useMediaQuery("(max-width: 750px)");
const heroDetailVisible = ref(false);
const connectVisible = ref(false);
const attrs = ref()

const heroDetail = (v) => {
  heroDetailVisible.value = true;
  attrs.value = v;
};

const explore = () => {
  connectVisible.value = true;
};

const goTop = () => {
  document.getElementById("RealWapper").scrollIntoView();
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
