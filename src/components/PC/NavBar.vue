<template>
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
        <a
          href="https://twitter.com/PandaPunk2169"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="icon" src="/icon/twitter.png" />
        </a>
        <a
          href="https://discord.com/fsS36Qbh7c"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="icon" src="/icon/icon1.png" />
        </a>
        <a
          href="https://t.me/pandapunk2169"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="icon" src="/icon/Telegram.png" />
        </a>
        <div class="sold-out" @click="soldOut">Connect Wallet</div>
      </div>
    </header>
    <div class="line"></div>
  </div>
  <ConnectWallet v-model:visible="connectVisible" />
</template>
<script setup>
import { onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import ConnectWallet from "@/components/ConnectWallet/index.vue";
const router = useRouter();
const route = useRoute();

const connectVisible = ref(false);

const navbar = ref([
  {
    title: "HOME",
    path: "/home",
  },
  // {
  //   title: "MINT",
  //   path: "/mint",
  // },
]);

const soldOut = () => {
  connectVisible.value = true;
};

const goPage = (v) => {
  router.push(v.path);
};
</script>
<style lang="less" scoped>
@import "../../views/home/index.less";
</style>
