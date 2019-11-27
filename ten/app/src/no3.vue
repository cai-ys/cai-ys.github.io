<template>
  <div>
    <div class="cp">
      <div class="banner"></div>
      <div class="b-nav">
        <div>
          <a href="#/">首页</a>>
          <span>产品中心</span>
        </div>
      </div>
      <div class="cp-item">
        <div class="b-item clearfloat">
          <div class="aside">
            <a href="#/no3">外用药</a>
            <a href="#/no3/no3two">妇科用药</a>
            <a href="#/no3/no3three">小儿用药</a>
            <a href="#/no3/no3four">感冒用药</a>
            <a href="#/no3/no3five">肠胃用药</a>
          </div>
          <div class="zw">
            <router-view class="i-cont"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
.cp .banner {
  height: 300px;
  background-image: url("https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvZDc1OThkMjUxNmI5MjNlMWU4NmNlMjNkYTlmMzk2YmUuanBn.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.cp .b-nav {
  height: 60px;
  background: rgb(249, 249, 249);
}
.cp .b-nav div {
  padding: 0 124px;
  margin: 0 40px;
  line-height: 60px;
  height: 60px;
}
.cp .b-nav div a {
  color: #1d3658;
}
.cp .b-nav div span {
  color: #5080c4;
}
.cp-item {
  padding: 0 124px;
  height: auto;
}
.cp-item .b-item {
  margin: 0 40px;
  padding-top: 100px;
  height: auto;
}
.cp-item .b-item .aside {
  width: 20%;
  height: auto;
  float: left;
  padding-top: 30px;
  border-top: 2px solid rgb(144, 166, 187);
}
.cp-item .b-item .aside a {
  height: 42px;
  border-bottom: 1px solid #ccc;
  display: block;
  padding: 5px;
  line-height: 42px;
}
.i-cont {
  float: right;
  width: 75%;
  padding-top: 30px;
}
</style>