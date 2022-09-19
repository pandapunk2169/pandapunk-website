<template>
  <teleport to="body" v-if="visible">
    <div class="Modal">
      <div class="wrapper">
        <div class="nav">
          <div class="title">Select A Wallet</div>
          <div class="icon-close">
            <img src="/svg/close.svg" @click="close" />
          </div>
        </div>
        <div class="body">
          <div class="item" @click="connectMateMask">
            <div class="label">Metamask</div>
            <img class="value" src="/svg/metamask.svg" alt="" />
          </div>
          <div class="item" @click="connectMateMask">
            <div class="label">OpenSea</div>
            <img class="value" src="/svg/opensea.svg" alt="" />
          </div>
          <div class="tip">New to Ethereum?</div>
          <div class="tip1">Learn More about Wallets</div>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const emits = defineEmits(["update:visible"]);

const connectMateMask = async () => {
  console.log("connectMateMask");
  if (typeof window.ethereum === "undefined") {
    window.open("https://metamask.io/download/");
    return;
  }
  const res = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  console.log(res);
  window.sessionStorage.setItem("account", res[0]);
  close();
};

const close = () => {
  emits("update:visible", false);
};
</script>
<style lang="less" scoped>
.Modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(20px);
  .wrapper {
    height: 417.6236572265625px;
    width: 558.9033813476562px;

    border-radius: 0px;
    margin: 200px auto;
    border: 5px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      92.23deg,
      #ff56f6 21.43%,
      #b936ee 50.63%,
      #3bace2 100%,
      #406aff 117.04%
    );
    padding: 26px;
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 350px;
      border: 3px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(
        92.23deg,
        #ff56f6 21.43%,
        #b936ee 50.63%,
        #3bace2 100%,
        #406aff 117.04%
      );
    }

    background: rgba(0, 0, 0, 0.38);
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 137.4%;
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
        /* identical to box height, or 33px */

        color: #ffffff;
      }
      .icon-close {
        // width: 100%;
        text-align: right;
        cursor: pointer;
        img {
          height: 18px;
          width: 18px;
        }
      }
    }
    .body {
      .item {
        margin: 0 auto;
        border: 2px solid;
        border-image-slice: 1;
        cursor: pointer;
        border-image-source: linear-gradient(
          92.23deg,
          #ff56f6 21.43%,
          #b936ee 50.63%,
          #3bace2 100%,
          #406aff 117.04%
        );
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        margin: 30px 0;
        &:first-child {
          margin-top: 60px;
          @media screen and (max-width: 768px) {
            margin-top: 30px; 
          }
        }
        .label {
          font-family: "Orbitron";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 137.4%;
          /* identical to box height, or 33px */
          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
          color: #ffffff;
        }
        @media screen and (max-width: 768px) {
          .value {
            width: 32px;
            height: 31px;
          }
        }
      }
      .tip {
        font-family: "Chakra Petch";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 137.4%;
        /* identical to box height, or 25px */

        text-align: center;

        color: rgba(255, 255, 255, 0.62);
      }
      .tip1 {
        font-family: "Chakra Petch";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 137.4%;
        /* identical to box height, or 25px */

        text-align: center;

        color: #ffffff;
      }
    }
  }
}
</style>
