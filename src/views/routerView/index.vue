<template>
  <div class="home-wrapper">
    <MobileNavBar v-if="isMobile" />
    <PCNavBar v-else />
    <router-view />
    <MobileFooter v-if="isMobile" />
    <PCFooter v-else />
    <ConnectWallet v-model:visible="connectVisible" />
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import ConnectWallet from "@/components/ConnectWallet/index.vue";
import PCNavBar from '@/components/PC/NavBar.vue'
import PCFooter from '@/components/PC/Footer.vue'
import MobileNavBar from '@/components/Mobile/NavBar.vue'
import MobileFooter from '@/components/Mobile/Footer.vue'
import { useMediaQuery } from "@vueuse/core";
import { getWeb3 } from "@/utils/web3";
import { stopMove, beginMove } from "@/utils/utils";
const connectVisible = ref(false);
const address = ref();

const isMobile = useMediaQuery("(max-width: 750px)");


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
