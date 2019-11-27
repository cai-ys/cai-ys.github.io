<template>
  <div>
    <div class="zx">
      <div class="banner"></div>
      <div class="b-nav">
        <div>
          <a href="#/">首页</a>>
          <span>资讯中心</span>
        </div>
      </div>
      <div class="zx-item">
        <ul class="clearfloat" id="oul" ref="ul">
          <li id="oli" v-for="i in arr" ref="li">
            <div class="hd-img">
              <img :src="i.url" />
            </div>
            <div class="ce-title">
              <a href>{{i.title}}</a>
            </div>
            <div class="ce-item">
              <p>{{i.cont}}</p>
            </div>
            <div class="more">
              <a href>阅读更多 —></a>
            </div>
          </li>
        </ul>
        <div class="btn" id="btn" ref="obtn">查看更多资讯</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      var oli = this.$refs.li[0];
      var oul = this.$refs.ul;
      var obtn = this.$refs.obtn;
      var oH = oli.offsetHeight;
      oul.style.height = oH * 2 + 100 + "px";
      oul.style.overflow = "hidden";
      obtn.onclick = function() {
        oul.style.height = oH * 3 + 150 + "px";
        obtn.style.display = "none";
      };
    });
  },
  data() {
    return {
      arr: [
        {
          url:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvMGJhZjZkNTljYzc3MGViZGUwNDVhOWIwNzljYzA2MjktNTI1eDM1MC5qcGc_p_p100_p_3D.jpg",
          title: "第五届生物产业大会 与专家共议未来发展",
          cont:
            "当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护..."
        },
        {
          url:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvZDc1OThkMjUxNmI5MjNlMWU4NmNlMjNkYTlmMzk2YmUtNTI1eDM1MC5qcGc_p_p100_p_3D.jpg",
          title: "医疗器械抽验 7批产品不合标准",
          cont:
            "市卫计委表示，今年，北京将按照市委十六次全会部署的原则，启动医疗服务价格改革。据悉，改革的总体原则将..."
        },
        {
          url:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvMjMxNzY5YjA4MTE3NzQ2ZjU3ZmQzY2M1OGExYmVhMmQtNTI1eDM1MC5qcGc_p_p100_p_3D.jpg",
          title: "医疗器械抽验 7批产品不合标准",
          cont:
            "市卫计委表示，今年，北京将按照市委十六次全会部署的原则，启动医疗服务价格改革。据悉，改革的总体原则将..."
        },
        {
          url:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNDI2M2FjOWQzNzI2NDQ1NjAyN2UzMDZkM2Q2ZTVhZTMtNTI1eDM1MC5qcGc_p_p100_p_3D.jpg",
          title: "医疗价格今年拟调整 不会“普涨”",
          cont:
            "市卫计委表示，今年，北京将按照市委十六次全会部署的原则，启动医疗服务价格改革。据悉，改革的总体原则将..."
        },
        {
          url:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvODhkODdjZWJjMzU5NjAzOTc2NGI0YTYzYjY0YWI2ODAtNjAweDQwMC5qcGc_p_p100_p_3D.jpg",
          title: "医疗棋局",
          cont:
            "市卫计委表示，今年，北京将按照市委十六次全会部署的原则，启动医疗服务价格改革。据悉，改革的总体原则将..."
        },
        {
          url:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYWRhN2IxZDJkMDFmOTMzNDcxMGNjZmE0OTc4YTk4OTktNDUweDMwMC5qcGc_p_p100_p_3D.jpg",
          title: "医疗器械经营企业需承担不良事件...",
          cont:
            "市卫计委表示，今年，北京将按照市委十六次全会部署的原则，启动医疗服务价格改革。据悉，改革的总体原则将..."
        },
        {
          url:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvMTRkYjhmZDU3MzcwZGRiZWQ0YmVlMmRlMTE3MjAzYzMtNTI2eDM1MS5qcGc_p_p100_p_3D.jpg",
          title: "医疗器械GSP落地 18万家企业大洗牌",
          cont:
            "市卫计委表示，今年，北京将按照市委十六次全会部署的原则，启动医疗服务价格改革。据悉，改革的总体原则将..."
        },
        {
          url:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvMTczY2U5MDE1NWQ2MDI0YjUzMjM0MzljMDFhMzFkYmEtNjAweDQwMC5qcGc_p_p100_p_3D.jpg",
          title: "38种消费型保险之医疗保险篇",
          cont:
            "市卫计委表示，今年，北京将按照市委十六次全会部署的原则，启动医疗服务价格改革。据悉，改革的总体原则将..."
        }
      ]
    };
  }
};
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
.zx .banner {
  height: 300px;
  background-image: url("https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNDI2M2FjOWQzNzI2NDQ1NjAyN2UzMDZkM2Q2ZTVhZTMuanBn.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.zx .b-nav {
  height: 60px;
  background: rgb(249, 249, 249);
}
.zx .b-nav div {
  padding: 0 124px;
  margin: 0 40px;
  line-height: 60px;
  height: 60px;
}
.zx .b-nav div a {
  color: #1d3658;
}
.zx .b-nav div span {
  color: #5080c4;
}
.zx-item {
  padding-top: 100px;
}
.zx-item ul {
  padding: 0 124px;
  margin: 0 40px;
}
.zx-item ul li {
  float: left;
  width: 29.8%;
  margin: 20px;
  padding-bottom: 30px;
  background: rgb(244, 244, 244);
  transition: 0.3s;
  border: 1px solid rgb(214, 214, 214);
  border-radius: 3px;
}
.zx-item ul li:hover {
  box-shadow: 0 0 18px 2px #ccc;
  background: white;
  transform: scale(1.02) translateY(-5px);
}
.zx-item ul li .hd-img {
  height: 225px;
  padding-bottom: 10px;
}
.zx-item ul li .hd-img img {
  width: 100%;
  height: 100%;
}
.zx-item ul li .ce-title {
  padding: 15px 20px 0;
  margin: 0 0 5px;
}
.zx-item ul li .ce-title a {
  color: #494949;
}
.zx-item ul li .ce-item {
  height: 96px;
  padding: 10px 30px 10px 20px;
}
.zx-item ul li .ce-item p {
  color: #7c7c7c;
  font-size: 14px;
  line-height: 28px;
}
.zx-item ul li .more {
  height: 40px;
}
.zx-item ul li .more a {
  padding: 10px 30px;
  color: #353535;
}
.zx-item .btn {
  width: 146px;
  height: 45px;
  background: rgb(29, 54, 88);
  margin: 30px auto;
  border-radius: 3px;
  text-align: center;
  line-height: 45px;
  color: white;
  font-size: 14px;
  cursor: pointer;
}
</style>
