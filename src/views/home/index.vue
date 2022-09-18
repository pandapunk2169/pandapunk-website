<template>
  <div class="home-wrapper">
    <div class="banner-wrapper">
      <img class="text-big" src="/img/PANDA PUNK 2169.png" />
      <div class="explore" @click="explore">Explore</div>
    </div>
    <div class="real-wrapper">
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
        <a-row :gutter="[12, 112]">
          <a-col class="hero-box" v-for="(v, i) in heros" :key="i" :span="8">
            <img class="hero" :src="v.img" />
            <div class="hero-name" @click="heroDetail(v)">View Stats</div>
          </a-col>
        </a-row>
      </div>
    </div>
    <!-- <div class="join-wrapper">
      <div class="title">JOIN THE PANDA PUNKS.</div>
    </div> -->
  </div>
  <HeroModal v-model:visible="heroDetailVisible" :img="img" />
  <ConnectWallet v-model:visible="connectVisible" />
  <!-- <MintModal v-model:visible="mintVisible" /> -->
</template>
<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import HeroModal from "@/components/HeroModal/index.vue";
import MintModal from "@/components/MintModal/index.vue";
import ConnectWallet from "@/components/ConnectWallet/index.vue";
import { getWeb3 } from "@/utils/web3";

const web3js = ref();
const heroDetailVisible = ref(false);
const connectVisible = ref(false);
const mintVisible = ref(true);
const img = ref();
const heros = ref([
  {
    img: "/hero/暗黑-初级-劳工2-10.png",
  },
  {
    img: "/hero/暗黑-初级-劳工7-10.png",
  },
  {
    img: "/hero/暗黑-初级-劳工9-10.png",
  },
  {
    img: "/hero/暗黑-套装-死亡骑士1-1.png",
  },
  {
    img: "/hero/暗黑-中级-祭祀1-3.png",
  },
  {
    img: "/hero/暗黑-中级-矿工1-2.png",
  },
  {
    img: "/hero/暗黑-中级-矿工2-2.png",
  },
  {
    img: "/hero/神圣-套装-圣殿骑士1-1.png",
  },
  {
    img: "/hero/神圣-套装-圣战士1-1.png",
  },
]);

const heroDetail = (v) => {
  heroDetailVisible.value = true;
  img.value = v.img;
};

const explore = () => {
  connectVisible.value = true;
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
