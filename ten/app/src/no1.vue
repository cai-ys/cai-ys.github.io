<template>
  <div>
    <div class="sy-item">
      <div class="banner">
        <div class="ceit">
          <h4>我们专注药品的研发与生产质量</h4>
          <div class="clearfloat" style="width:30%;margin:40px auto;border:none;">
            <div class="aa">了解更多</div>
            <div class="bb">查看产品</div>
          </div>
        </div>
      </div>
      <div class="cont-it clearfloat">
        <div class="list" v-for="i in arr">
          <div class="list_top">
            <img :src="i.img" alt />
            <span>{{i.num}}</span>
          </div>
          <p>{{i.til}}</p>
        </div>
      </div>
      <div class="contone">
        <tone til="旗下特色品牌" cont="采购优质的原辅材料，引进精良的生产检测装备，应用先进的生产工艺"></tone>
        <div class="contone_list">
          <div class="cont-img">
            <img
              src="https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvMTA3YzMwMjJiMjRlYjViZGU1NzFjYThhYzMzYTE1MjIucG5n.png"
              alt
            />
            <img
              class="one_img"
              src="https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvMzk4MDU1YzA1ZmM3YzQwZGZmMDc2ODYzNjZjMDY1ZmQucG5n.png"
              alt
            />
          </div>
          <div class="cont-img">
            <img
              src="https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvMzFhMWE2MWQ1OGY4NDcxZDJhMjUyNmU2OGNiNTI0YjYucG5n.png"
              alt
            />
            <img
              class="one_img"
              src="https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvZDVjODQ1ZTg3YjM0MzdhNzRiZTAzNzQ2ZjU3ZTRlYzEucG5n.png"
              alt
            />
          </div>
          <div class="cont-img">
            <img
              src="https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvZThkYWI5NWNhMTBjZDIyNDg1MDE3NTI1MDcxNGQwOTcucG5n.png"
              alt
            />
            <img
              class="one_img"
              src="https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvZmU4NzFkZjYxOWFjZThlNmZjZTQwNWNjMTY3MWEyZGIucG5n.png"
              alt
            />
          </div>
          <div class="cont-img">
            <img
              src="https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNDEwOGJjNzZhNGRjOTI2ZmE1MjNjYzJmMzU0NjJjNzgucG5n.png"
              alt
            />
            <img
              class="one_img"
              src="https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNzg0NTE1NTdmNWUxNGNlYWVlZTcxNDE5OTY4MWY2M2MucG5n.png"
              alt
            />
          </div>
        </div>
      </div>
      <ttwo></ttwo>
      <lb></lb>
      <div class="cont_good">
        <h4>匠心制好药</h4>
        <p>云建站不仅是一个方便快捷的构建网站的自助建站平台，更重要的是，我们为中国用户提供了更多贴心的服务。</p>
      </div>
      <tthree></tthree>
    </div>
  </div>
</template>
<script>
import tone from "./contone.vue";
import ttwo from "./conttwo.vue";
import tthree from "./contthree.vue";
import lb from "./lb.vue";
export default {
  name: "app",
  props: ["src", "til", "cont"],
  components: {
    tone,
    ttwo,
    tthree,
    lb
  },
  data() {
    return {
      arr: [
        {
          img:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvZjgyZTQyZTZkOTk0MDAyNDJiODFiNTJhZDk4NTFjOTEtNTB4NTAucG5n.png",
          num: "125",
          til: "国家专利研发许可证"
        },
        {
          img:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvODZlZjgzNmMwNWRiMGNkYWFiNWY1Y2FjNjU3YmViMTgtNTB4NTAucG5n.png",
          num: "350+",
          til: "在线销售额（万"
        },
        {
          img:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNzY1MzQ1ZjFjMTYyZGNjYWI5YzhjZjUwOGI1NmU0NzQtNTB4NTAucG5n.png",
          num: "130+",
          til: "全球推广销售地区"
        },
        {
          img:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNzUxZWQ5MTVmNTUwZDk3MjM0Y2I3ZmE4ZTEzZjEyYTQtNTB4NTAucG5n.png",
          num: "5",
          til: "国内完善的研发网络"
        }
      ]
    };
  }
};
</script>
<style lang="">
.banner {
  height: 520px;
  padding: 0 40px;
  background-image: url("https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYzNmNGI5NzQyOGZkOTcyMWM1NTEzMjZkZDdhYjMzNGUuanBn.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.banner .ceit {
  text-align: center;
  padding-top: 150px;
}
.banner .ceit h4 {
  font-size: 34px;
  color: #225175;
}
.banner .ceit div {
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.banner .ceit .aa {
  border-radius: 3px;
  float: left;
  background: white;
}
.banner .ceit .aa:hover {
  background: #224d77;
  color: white;
}
.banner .ceit .bb:hover {
  color: #000;
  background: white;
}
.banner .ceit .bb {
  border-radius: 3px;
  float: right;
  color: white;
  background: #224d77;
}
.cont-it {
  padding: 60px 140px;
  height: 120px;
  background: #224d77;
}

.cont-it .list {
  width: 230px;
  height: 150px;
  padding: 0 30px;
  border-right: 1px solid rgba(109, 153, 186, 0.2);
  float: left;
}
.cont-it .list:nth-of-type(4) {
  border: none;
}
.list_top {
  text-align: center;
  padding: 20px 0;
}

.list_top span {
  font-size: 40px;
  color: #97d6ed;
  vertical-align: top;
}

.list p {
  color: rgb(255, 255, 255);
  text-align: center;
}

.contone {
  height: 210px;
  padding: 60px 145px;
  background-image: url("https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvMTUzMzcyMzk0NXBhdHQwMi5wbmc_p_p100_p_3D.png");
  background-repeat: repeat;
  background-size: auto;
  background-attachment: scroll;
  background-position: 0 0%;
}

.contone_list {
  margin-top: 40px;
}

.cont-img {
  float: left;
  width: 298px;
  float: left;
  position: relative;
  height: 100px;
}

.contone_list img {
  position: absolute;
  width: 265px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.contone_list .one_img {
  opacity: 0;
  z-index: 1;
}
.contone_list .one_img:hover {
  opacity: 1;
}
.cont_good {
  background: #3472a7;
  text-align: center;
  padding: 55px 0;
}
.cont_good h4 {
  font-size: 34px;
  font-weight: normal;
  font-style: normal;
  color: #ffffff;
  padding: 0 0 10px 0;
  margin-bottom: 20px;
}
.cont_good p {
  font-size: 15px;
  color: rgb(255, 255, 255);
}
</style>
