<template>
  <teleport to="body" v-if="visible">
    <div class="Modal">
      <div class="wrapper">
        <div class="icon-close">
          <div class="title1">PANDA PUNK 2169 //////</div>
          <img src="/svg/close.svg" @click="close" />
        </div>
        <div class="content-wrapper">
          <div style="text-align: center">
            <img class="hero-img" :src="attrs.img" alt="" />
          </div>
          <div class="attrs">
            <div class="title">
              <div>HERO STATS</div>
              <div class="line"></div>
            </div>
            <div class="table-wrapper">
              <div class="table-item-wrap">
                <div class="table-item">
                  <div class="table-item-title">CHARACTER</div>
                  <div class="table-item-value">{{ attrs.Character }}</div>
                </div>
                <div class="table-item">
                  <div class="table-item-title">GENDER</div>
                  <div class="table-item-value">{{ attrs.Gender }}</div>
                </div>
                <div class="table-item">
                  <div class="table-item-title">LEVEL</div>
                  <div class="table-item-value">{{ attrs.Level }}</div>
                </div>
                <div class="table-item">
                  <div class="table-item-title">WEAPON</div>
                  <div class="table-item-value">{{ attrs.Weapon }}</div>
                </div>
              </div>
              <div class="table-item-wrap">
                <div class="table-item">
                  <div class="table-item-title">BODY</div>
                  <div class="table-item-value">{{ attrs.Body }}</div>
                </div>
                <div class="table-item">
                  <div class="table-item-title">PANTS</div>
                  <div class="table-item-value">{{ attrs.Pants }}</div>
                </div>
                <div class="table-item">
                  <div class="table-item-title">CLOTHING</div>
                  <div class="table-item-value">{{ attrs.Clothing }}</div>
                </div>
                <div class="table-item">
                  <div class="table-item-title">DECORATE</div>
                  <div class="table-item-value">{{ attrs.Decorate }}</div>
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
          <div class="date">{{ attrs.date }} //////</div>
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
  min-height: 100vh;
  position: fixed;
  z-index: 1000;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  .wrapper {
    height: 780px;
    width: 96%;
    margin: 30px auto;
    border: 2px solid;
    overflow: auto;
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title1 {
        font-family: "Chakra Petch";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 36px;
        letter-spacing: 0.2em;
        text-transform: uppercase;

        color: #ffffff;
      }
      img {
        height: 27px;
        width: 27px;
      }
    }
    .content-wrapper {
      width: 100%;
      height: 670px;
      margin-top: 20px;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0px;
        height: 6px;
      }
    }
    .hero-img {
      width: 272.78px;
      height: 371.14px;
      object-fit: contain;
      margin-bottom: 10px;
    }
    .attrs {
      .title {
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 137.4%;
        /* or 33px */

        color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .line {
          height: 2.576171875px;
          width: 123.69651794433594px;
          background-color: white;
        }
      }
      .table-wrapper {
        display: flex;
        justify-content: space-between;
        .table-item-wrap {
          .table-item {
            margin: 20px 0;
            .table-item-title {
              font-family: "Chakra Petch";
              font-style: normal;
              font-weight: 700;
              font-size: 9px;
              line-height: 12px;
              /* identical to box height */

              letter-spacing: 0.2em;
              text-transform: uppercase;

              color: #ffffff;
            }
            .table-item-value {
              font-family: "Chakra Petch";
              font-style: normal;
              font-weight: 700;
              font-size: 18px;
              line-height: 23px;
              letter-spacing: 0.2em;
              text-transform: uppercase;

              color: #ffffff;
            }
          }
        }
      }
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
