<template>
  <div class="mint-wrapper">
    <div class="banner-wrapper">
      <div class="wrapper">
        <div class="title-wrap">
          <div class="title">MINT PANDA</div>
          <div class="sub-title">100/1000 PANDA NFTS SOLD</div>
        </div>
        <div class="body">
          <div class="item1 item-border">
            <div class="label">ETH BALANCE</div>
            <div class="value">0 ETH</div>
          </div>
          <div class="item1">
            <div class="label">WHITELIST</div>
            <div class="value">0</div>
          </div>
          <div class="item1">
            <div class="label">QUANTITY</div>
            <div class="value display">
              <div class="top"></div>
              <div>0</div>
              <div class="bottom"></div>
            </div>
          </div>
          <div class="item-border"></div>
          <div class="item1">
            <div class="label">TOTAL PRICE</div>
            <div class="value">0 ETH</div>
          </div>
          <div class="connect" @click="connectWallet">Conect to Wallet</div>
          <div class="item1">
            <div class="label">PROGRESS</div>
            <div class="value">100/1000</div>
          </div>
        </div>
      </div>
    </div>
    <ConnectWallet v-model:visible="connectVisible" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import ConnectWallet from "@/components/ConnectWallet/index.vue";
const connectVisible = ref(false);

const connectWallet = () => {
  connectVisible.value = true;
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
