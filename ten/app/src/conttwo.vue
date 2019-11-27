<template>
  <div>
    <div class="cont_two clearfloat">
      <div class="two_img" v-for="i in arr">
        <img :src="i.img" alt />
        <div class="two_cont">
          <h5>{{i.til}}</h5>
          <p>{{i.cont}}</p>
          <button>了解更多</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          til: "研究和发展",
          cont:
            "云建站不仅是一个方便快捷的构建网站的自助建站平台，更重要的是，我们为中国用户提供了更多贴心的服务。",
          img:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNWVmMWNlMGFlNTgyMmYxN2Q4MTFjY2UwODZkMjIyZjQuanBn.jpg"
        },
        {
          til: "药品开发",
          cont:
            "云建站不仅是一个方便快捷的构建网站的自助建站平台，更重要的是，我们为中国用户提供了更多贴心的服务。",
          img:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvMTRiMWNhZmVkYzIzY2M5Y2JhM2U4OTNkYjdlY2MyNGYuanBn.jpg"
        }
      ]
    };
  }
};
</script>
<style>
.two_img {
  width: 50%;
  height: 400px;
  position: relative;
  float: left;
}

.two_img img {
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
}

.two_img .two_cont:nth-of-type(1) {
  width: 352px;
  position: absolute;
  z-index: 1;
  right: 0;
  padding: 100px 40px 100px 0;
}

.two_img:nth-of-type(2) .two_cont {
  width: 352px;
  position: absolute;
  z-index: 1;
  left: 10px;
  padding: 100px 0 100px 40px;
}

.two_cont h5 {
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
  color: #ffffff;
  padding: 20px 0;
  display: block;
}

.two_cont p {
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  color: #ffffff;
  display: block;
  padding: 2px;
}

.two_cont button {
  padding: 15px 60px;
  background: none;
  border: 1px solid #fff;
  color: #fff;
  font-size: 14px;
  margin-top: 30px;
  transition: 0.3s;
}

.two_cont button:hover {
  background: #fff;
  color: #000;
}
</style>
