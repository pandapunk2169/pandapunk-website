<template>
  <div class="navbar-wrapper" v-if="!visible">
    <img src="/svg/Vector.svg" class="logo" alt="" />
    <img src="/svg/menu.svg" class="menu" alt="" @click="openModal" />
  </div>
  <div class="menu-wrapper" v-else>
    <div class="navbar-wrapper">
      <img src="/svg/Vector.svg" class="logo" alt="" />
      <img src="/svg/close.svg" class="menu" alt="" @click="openModal" />
    </div>
    <div class="menu-list">
      <div
        :class="['item', v.path === route.path && 'item-active']"
        v-for="(v, i) in navbar"
        :key="i"
        @click="goPage(v)"
      >
        {{ v.title }}
      </div>
    </div>
    <div class="icons-wrapper">
      <img class="icon" src="/icon/twitter.png" />
      <img class="icon" src="/icon/icon1.png" />
      <img class="icon" src="/icon/Telegram.png" />
      <img class="icon" src="/icon/Logomark.png" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const visible = ref(false);

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

const goPage = (v) => {
  visible.value = false;
  router.push(v.path);
};

const openModal = () => {
  visible.value = visible.value ? false : true;
};
</script>
<style lang="less" scoped>
.navbar-wrapper {
  height: 80px;
  width: 100%;
  padding: 24px 26px;
  background: black;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 80px;
    width: 80px;
  }
  .menu {
    width: 32px;
    height: 20px;
  }
}
.menu-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(5px);
  z-index: 100;
  .menu-list {
    padding: 43px 26px;
    .item {
      font-family: "Orbitron";
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 82.4%;
      /* identical to box height, or 25px */

      color: #ffffff;
      margin-bottom: 43px;
      padding-bottom: 10px;
    }
    .item-active {
      width: 100px;
      border-bottom: 2px solid rgba(255, 86, 245, 1);
    }
  }
}

.icons-wrapper {
  width: 180px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 57px auto 10px auto;
  .icon {
    width: 24px;
    height: 100%;
  }
}
</style>
