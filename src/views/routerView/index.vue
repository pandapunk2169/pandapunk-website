<template>
  <div class="home-wrapper">
    <div class="navbar-wrapper">
      <header>
        <div class="left">
          <img class="logo" src="/svg/Vector.svg" alt="logo" />
          <div
            :class="['title', v.path === route.path && 'sub-title-active']"
            v-for="(v, i) in navbar"
            :key="i"
            @click="goPage(v)"
          >
            {{ v.title }}
          </div>
        </div>
        <div class="right">
          <img class="icon" src="/icon/twitter.png" />
          <img class="icon" src="/icon/icon1.png" />
          <img class="icon" src="/icon/Telegram.png" />
          <img class="icon" src="/icon/Logomark.png" />
          <div class="sold-out" @click="soldOut">Sold Out</div>
        </div>
      </header>
      <div class="line"></div>
    </div>
    <router-view />
    <div class="footer-wrapper">
      <div class="box">
        <div class="left">
          <img src="/svg/Vector.svg" alt="" />
          <div class="content">
            Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla
            pharetra gravida est.
          </div>
        </div>
        <div class="right">
          <div class="cc">
            <div class="title">About Us</div>
            <div class="urls">
              <div>About NFTs</div>
              <div>Live Auctions</div>
              <div>NFT Blog</div>
              <div>Activity</div>
            </div>
          </div>
          <div class="cc">
            <div class="title">Support</div>
            <div class="urls">
              <div>Item Details</div>
              <div>Live Auctions</div>
              <div>Author Profile</div>
              <div>Collection</div>
            </div>
          </div>
        </div>
      </div>
      <div class="icons">
        <img class="icon" src="/icon/twitter.png" />
        <img class="icon" src="/icon/icon1.png" />
        <img class="icon" src="/icon/Telegram.png" />
        <img class="icon" src="/icon/Logomark.png" />
      </div>
      <div class="tips">All rights reserved@2022</div>
    </div>
    <ConnectWallet v-model:visible="connectVisible" />
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import ConnectWallet from "@/components/ConnectWallet/index.vue";
import { getWeb3 } from "@/utils/web3";
import { stopMove, beginMove } from "@/utils/utils";
const connectVisible = ref(false);
const router = useRouter();
const route = useRoute();
const web3js = ref();
const address = ref();

const navbar = ref([
  {
    title: "HOME",
    path: "/home",
  },
  {
    title: "MINT",
    path: "/mint",
  },
]);

const soldOut = () => {
  connectVisible.value = true;
};

const connectWallet = async () => {
  if (typeof window.ethereum === "undefined") {
    window.open("https://metamask.io/download/");
    return;
  }
  if (address.value) return;
  const res = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  address.value = res[0].substr(0, 8) + "..." + res[0].substr(-4, 4);
  window.sessionStorage.setItem("account", res[0]);
};

const goPage = (v) => {
  router.push(v.path);
};

onMounted(async () => {
  // window.sessionStorage.clear();
  // web3js.value = await getWeb3();
});

// watch(()=> route.path,(v)=>{
//   console.log(v);
// },{immediate: true})
</script>
<style lang="less" scoped>
@import "../home/index.less";
</style>
