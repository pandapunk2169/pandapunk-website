<template>
  <div class="footer-mobile-wrapper">
    <img class="logo" src="/svg/Vector.svg" alt="" />
    <div class="content1">
      Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra
      gravida est.
    </div>
    <div class="wrap">
      <div class="title">About Us</div>
      <div class="content">
        <div>About NFTs</div>
        <div>Live Auctions</div>
        <div>NFT Blog</div>
        <div>Activity</div>
      </div>
    </div>
    <div class="wrap">
      <div class="title">Support</div>
      <div class="content">
        <div>Help & Support</div>
        <div>Item Details</div>
        <div>Author Profile</div>
        <div>Collection</div>
      </div>
    </div>
    <div class="icons-wrapper">
      <img class="icon" src="/icon/twitter.png" />
      <img class="icon" src="/icon/icon1.png" />
      <img class="icon" src="/icon/Telegram.png" />
      <img class="icon" src="/icon/Logomark.png" />
    </div>
    <div class="tip">All rights reserved@2021</div>
  </div>
</template>
<style lang="less" scoped>
.footer-mobile-wrapper {
  height: 621.3814086914062px;
  width: 100%;
  background: #251928;
  padding: 22px 75px;
  text-align: center;
  .logo {
    width: 82px;
    height: 78px;
  }
  .content1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    text-align: center;

    color: #96839b;
    padding-top: 10px;
  }
  .wrap {
    margin-top: 30px;
    .content {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      /* or 143% */

      text-align: center;
      text-decoration-line: underline;

      color: #96839b;
    }
    .title {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height, or 125% */

      color: #f5fbf2;
      margin-bottom: 6px;
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
  .tip {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 36px;
    /* identical to box height, or 257% */

    color: #96839b;
  }
}
</style>
