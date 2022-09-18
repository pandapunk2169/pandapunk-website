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
        <img class="icon" src="/icon/twitter.png" />
        <img class="icon" src="/icon/icon1.png" />
        <img class="icon" src="/icon/Telegram.png" />
        <img class="icon" src="/icon/Logomark.png" />
        <div class="sold-out" @click="soldOut">Sold Out</div>
      </div>
    </header>
    <div class="line"></div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const connectVisible = ref(false);

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

const goPage = (v) => {
  router.push(v.path);
};
</script>
<style lang="less" scoped>
@import "../../views/home/index.less";
</style>
