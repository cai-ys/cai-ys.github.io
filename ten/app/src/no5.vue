<template>
  <div>
    <div class="tx">
      <div class="banner"></div>
      <div class="b-nav">
        <div>
          <a href="#/">首页</a>>
          <span>特效药品</span>
        </div>
      </div>
      <div class="tx-item">
        <div class="b-item clearfloat">
          <div class="aside">
            <a href="#/no5">特效药原理</a>
            <a href="#/no5/no5two">特效药受众对象</a>
            <a href="#/no5/no5three">特效药常见问题</a>
          </div>
          <div class="zw">
            <router-view class="cont"></router-view>
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
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}

.clearfloat {
  zoom: 1;
}
.tx .banner {
  height: 300px;
  background-image: url("https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvMGJhZjZkNTljYzc3MGViZGUwNDVhOWIwNzljYzA2MjkuanBn.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tx .b-nav {
  height: 60px;
  background: rgb(249, 249, 249);
}
.tx .b-nav div {
  padding: 0 124px;
  margin: 0 40px;
  line-height: 60px;
  height: 60px;
}
.tx .b-nav div a {
  color: #1d3658;
}
.tx .b-nav div span {
  color: #5080c4;
}
.tx-item {
  padding: 0 124px;
  height: auto;
}
.tx-item .b-item {
  margin: 0 40px;
  padding-top: 100px;
  height: auto;
}
.tx-item .b-item .aside {
  width: 20%;
  height: auto;
  float: left;
  padding-top: 30px;
  border-top: 2px solid rgb(144, 166, 187);
}
.tx-item .b-item .aside a {
  height: 42px;
  border-bottom: 1px solid #ccc;
  display: block;
  padding: 5px;
  line-height: 42px;
}
.cont {
  float: right;
  width: 75%;
  padding-top: 30px;
  border-top: 2px solid rgb(144, 166, 187);
}
</style>