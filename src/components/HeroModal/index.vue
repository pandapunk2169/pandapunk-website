<template>
  <teleport to="body" v-if="visible">
    <div class="Modal">
      <div class="wrapper">
        <div class="icon-close">
          <img src="/svg/close.svg" @click="close" />
        </div>
        <div class="content">
          <img class="hero-img" :src="attrs.img" alt="" />
          <div class="attrs">
            <div class="title1">PANDA PUNK 2169 //////</div>
            <div class="title2">HERO STATS</div>
            <div class="table-block">
              <div class="table-item">
                <div class="item">
                  <div class="sub-title">CHARACTER</div>
                  <div class="sub-title1">{{ attrs.Character }}</div>
                </div>
                <div class="item">
                  <div class="sub-title">GENDER</div>
                  <div class="sub-title1">{{ attrs.Gender }}</div>
                </div>
                <div class="item">
                  <div class="sub-title">LEVEL</div>
                  <div class="sub-title1">{{ attrs.Level }}</div>
                </div>
                <div class="item">
                  <div class="sub-title">WEAPON</div>
                  <div class="sub-title1">{{ attrs.Weapon }}</div>
                </div>
              </div>
              <div class="table-item">
                <div class="item">
                  <div class="sub-title">BODY</div>
                  <div class="sub-title1">{{ attrs.Body }}</div>
                </div>
                <div class="item">
                  <div class="sub-title">PANTS</div>
                  <div class="sub-title1">{{ attrs.Pants }}</div>
                </div>
                <div class="item">
                  <div class="sub-title">CLOTHING</div>
                  <div class="sub-title1">{{ attrs.Clothing }}</div>
                </div>
                <div class="item">
                  <div class="sub-title">DECORATE</div>
                  <div class="sub-title1">{{ attrs.Decorate }}</div>
                </div>
              </div>
              <div class="table-item">
                <div class="item">
                  <div class="sub-title">MASK</div>
                  <div class="sub-title1">{{ attrs.Mask }}</div>
                </div>
              </div>
            </div>
            <div class="attr">
              <div class="title3">BACKGROUND</div>
              <div class="title4">CURRENTLY SYNTHESYSING...</div>
            </div>
            <div class="attr">
              <div class="title3">DESCRIPTION</div>
              <div class="title4">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR.</div>
            </div>
          </div>
        </div>
        <div class="date">{{ attrs.date }} //////</div>
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
  attrs: {
    type: Object,
    default: () => ({}),
  },
});

const emits = defineEmits(["update:visible"]);

const close = () => {
  emits("update:visible", false);
};
</script>

<style lang="less" scoped>
.Modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  .wrapper {
    min-height: 690px;
    width: 1082px;
    margin: 100px auto;
    border: 5px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      92.23deg,
      #ff56f6 21.43%,
      #b936ee 50.63%,
      #3bace2 100%,
      #406aff 117.04%
    );

    background: rgba(0, 0, 0, 0.38);
    backdrop-filter: blur(20px);
    padding: 20px 30px;
    .icon-close {
      width: 100%;
      text-align: right;
      cursor: pointer;
      img {
        height: 34.828125px;
        width: 34.828125px;
      }
    }
    .content {
      display: flex;
      align-items: top;
      height: 600px;
      margin-top: 20px;
      overflow: auto;
      .hero-img {
        height: 547.8206176757812px;
        width: 381.93280029296875px;
        object-fit: contain;
      }
      .attrs {
        color: wheat;
        margin-left: 40px;
        width: 500px;
        margin-top: 50px;
        .title1 {
          font-family: "Chakra Petch";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 0.2em;
          text-transform: uppercase;

          color: #ffffff;
        }
        .title2 {
          font-family: "Orbitron";
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 137.4%;
          /* or 55px */

          color: #ffffff;
        }
        .table-block {
          width: 100%;
          margin: 32px 0;
          display: flex;
          justify-content: space-between;
          align-items: top;
          .item {
            margin-bottom: 22px;
          }
          .sub-title {
            font-family: "Chakra Petch";
            font-style: normal;
            font-weight: 700;
            font-size: 11px;
            line-height: 14px;
            letter-spacing: 0.2em;
            text-transform: uppercase;

            color: #ffffff;
          }
          .sub-title1 {
            font-family: "Chakra Petch";
            font-style: normal;
            font-weight: 700;
            font-size: 23px;
            line-height: 30px;
            letter-spacing: 0.2em;
            text-transform: uppercase;

            color: #ffffff;
          }
        }
        .attr {
          margin-bottom: 22px;
        }
        .title3 {
          font-family: "Chakra Petch";
          font-style: normal;
          font-weight: 700;
          font-size: 11px;
          line-height: 14px;
          letter-spacing: 0.2em;
          text-transform: uppercase;

          color: #ffffff;
        }
        .title4 {
          font-family: "Chakra Petch";
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 20px;
          /* identical to box height */

          letter-spacing: 0.2em;
          text-transform: uppercase;

          color: #ffffff;
        }
      }
    }
  }
  .date {
    font-family: "Chakra Petch";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: #ffffff;
  }
}
</style>
