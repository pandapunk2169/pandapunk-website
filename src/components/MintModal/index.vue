<template>
  <teleport to="body" v-if="visible">
    <div class="Modal">
      <div class="wrapper">
        <div class="title-wrap">
          <div class="title">MINT PANDA</div>
          <div class="sub-title">100/1000 PANDA NFTS SOLD</div>
        </div>
        <div class="body">
            <div class="item1"></div>
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
  .wrapper {
    height: 690px;
    margin: 100px auto;
    padding: 20px 30px;
    .title-wrap {
        width: 100%;
      margin-bottom: 20px;
      .title {
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 700;
        font-size: 34px;
        line-height: 137.4%;
        /* identical to box height, or 47px */

        text-align: center;
        text-transform: uppercase;

        color: #ffffff;
      }
      .sub-title {
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 137.4%;
        /* or 23px */

        text-align: center;
        text-transform: uppercase;

        color: #ffffff;
      }
    }
    .body {
      height: 690px;
      width: 1082px;
      margin: 0 auto;
      border: 3px solid;
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
    }
  }
}
</style>
