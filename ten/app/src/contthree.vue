<template>
  <div>
    <div class="messige">
      <cont_til til="资讯中心" cont="采购优质的原辅材料，引进精良的生产检测装备，应用先进的生产工艺"></cont_til>
      <div class="msg-item clearfloat">
        <a href="#">
          <div class="messige_lf">
            <div class="messige_text">
              <span>08-07</span>
              <h5>38种消费型保险之医疗保险篇</h5>
              <p>市卫计委表示，今年，北京将按照市委十六次全会部署的原则，启动医疗服务价格改革。据悉，改革的总体原则将是“...</p>
              <img
                src="https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvMTczY2U5MDE1NWQ2MDI0YjUzMjM0MzljMDFhMzFkYmEtNTAweDMwMC5qcGc_p_p100_p_3D.jpg"
                alt
              />
              <button>＋</button>
            </div>
          </div>
          <div class="messige_rt">
            <div class="msg-ri" v-for="i in arr">
              <div class="msg-ri_text">
                <ul>
                  <li>{{i.til}}</li>
                </ul>
                <p>市卫计委表示，今年，北京将按照市委十六次全会部署的原则，启动医疗服务价格改革。据悉，改革的总体原则将是“...</p>
              </div>
              <div class="messige_list_date">
                <span>08-07</span>
                <br />|
                <i class="el-icon-right"></i>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import cont_til from "./contone.vue";
export default {
  components: {
    cont_til
  },
  data() {
    return {
      arr: [
        { til: "医疗器械GSP落地 18万家企业大洗牌" },
        { til: "医疗器械经营企业需承担不良事件的监测工作" },
        { til: "医疗棋局" },
        { til: "医疗价格今年拟调整 不会“普涨”" }
      ]
    };
  }
};
</script>
<style>
.messige {
  padding: 100px 145px;
}

.msg-item {
  margin-top: 50px;
}

.messige_lf {
  float: left;
  width: 510px;
  height: 450px;
  padding: 44px 60px;
  background: #f8f8f8;
  transition: 0.5s;
}
.messige_lf:hover {
  background: #1d3658;
}
.messige_lf:hover p {
  padding-left: 20px;
  border-left: 1px solid #fff;
  display: block;
  transition: 0.5s;
  color: #fff;
}
.messige_lf:hove .messige_text h5 {
  color: #fff;
}
.messige_lf:hover button {
  background: #fff;
  color: #000;
  transform: translateY(-10px);
  transition: 0.5s;
}
.messige_text span {
  color: #c4c4c4;
  font-size: 24px;
}

.messige_text h5 {
  color: #666666;
  font-size: 15px;
  font-family: 微软雅黑;
  font-weight: normal;
  padding-bottom: 10px;
}

.messige_text p {
  color: #999999;
  font-size: 12px;
  max-width: px;
  word-break: break-all;
  font-family: 微软雅黑;
  line-height: 20px;
  margin-bottom: 10px;
}

.messige_text button {
  width: 140px;
  height: 37px;
  text-align: center;
  line-height: 37px;
  color: transparent;
  background: none;
  border: none;
  margin-top: 30px;
}

.messige_rt {
  width: 535px;
  float: right;
}

.msg-ri {
  padding: 23px 20px;
  background: #f8f8f8;
  box-sizing: border-box;
  margin-bottom: 10px;
  height: 126px;
}
.msg-ri:hover {
  background: #1d3658;
  color: #fff;
  transition: 0.5s;
  padding-left: 36px;
}
.msg-ri:hover p {
  color: #fff;
  transition: 0.5s;
}
.msg-ri:hover ul {
  color: #fff;
  transition: 0.5s;
}
.msg-ri_text {
  width: 370px;
  float: left;
}

.msg-ri_text ul {
  padding: 0 0 10px 25px;
  width: 370px;
  color: #666666;
  font-size: 15px;
  font-family: 微软雅黑;
  font-weight: normal;
}

.msg-ri_text ul li {
  list-style-type: disc;
}

.msg-ri_text p {
  color: #999999;
  font-size: 12px;
  max-width: px;
  word-break: break-all;
  font-family: 微软雅黑;
  line-height: 20px;
  padding-bottom: 10px;
}

.messige_list_date {
  float: right;
  width: 70px;
  color: #c4c4c4;
}

.messige_list_date span {
  color: #c4c4c4;
  font-size: 24px;
}

.messige_list_date i {
  color: #cccccc;
  font-size: 16px;
}
</style>
