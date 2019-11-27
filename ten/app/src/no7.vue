<template>
  <div>
    <div class="lx">
      <div class="b-nav">
        <div>
          <a href="#/">首页</a>>
          <span>联系我们</span>
        </div>
      </div>
      <div style="height:450px;width:100%;margin-bottom:100px;z-index:'10';" id="dituContent"></div>
      <div class="msg">
        <div class="msg-item clearfloat">
          <div class="le">
            <div class="msg-title">联系我们</div>
            <div class="msg-cont">
              <span class="tt">药业有限公司</span>
              <div class="le-c">
                <div>地址：苏州市金鸡湖大道00号</div>
                <div>邮编：100000</div>
                <div>电话：400-0000-0088</div>
                <div>手机：130-0000-0000</div>
                <div>传真：000-8000-8000</div>
                <div>邮箱：info@email.com</div>
              </div>
            </div>
          </div>
          <div class="ri">
            <div class="msg-title">
              <a href>QQ</a>
              <a href>微信</a>
              <a href>微博</a>
              <a href>脸书</a>
            </div>
            <div class="msg-cont clearfloat">
              <div class="ip" id="ip">
                <input type="text" placeholder="姓名 *" />
              </div>
              <div class="ip">
                <input type="text" placeholder="电话 *" />
              </div>
              <div class="ip">
                <input type="text" placeholder="邮箱 *" />
              </div>
              <div class="ip">
                <input type="text" placeholder="地址 *" />
              </div>
            </div>
            <div class="btn">提交</div>
            <div class="ts">温馨提示：使用表单之前需要配置表单的收件邮箱和网站的发件邮箱。详情请参考教程《如何设置表单中的邮箱》</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    function initMap() {
      createMap(); //创建地图
      setMapEvent(); //设置地图事件
      addMapControl(); //向地图添加控件
    }

    //创建地图函数：
    function createMap() {
      var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
      var point = new BMap.Point(120.735809, 31.327621); //定义一个中心点坐标
      map.centerAndZoom(point, 12); //设定地图的中心点和坐标并将地图显示在地图容器中
      window.map = map; //将map变量存储在全局
    }

    //地图事件设置函数：
    function setMapEvent() {
      map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
      map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
      map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
      map.enableKeyboard(); //启用键盘上下左右键移动地图
    }

    //地图控件添加函数：
    function addMapControl() {
      //向地图中添加缩放控件
      var ctrl_nav = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
      });
      map.addControl(ctrl_nav);
      //向地图中添加缩略图控件
      var ctrl_ove = new BMap.OverviewMapControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        isOpen: 1
      });
      map.addControl(ctrl_ove);
      //向地图中添加比例尺控件
      var ctrl_sca = new BMap.ScaleControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT
      });
      map.addControl(ctrl_sca);
    }

    initMap(); //创建和初始化地图
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
.lx .b-nav {
  height: 60px;
  background: rgb(249, 249, 249);
}
.lx .b-nav div {
  padding: 0 124px;
  margin: 0 40px;
  line-height: 60px;
  height: 60px;
}
.lx .b-nav div a {
  color: #1d3658;
}
.lx .b-nav div span {
  color: #5080c4;
}
.lx .msg {
  margin-bottom: 100px;
}
.lx .msg .msg-item {
  padding: 0 124px;
  margin: 0 40px;
}
.lx .msg .msg-item .le {
  float: left;
  width: 50%;
}
.lx .msg .msg-item .le .msg-title {
  height: 58px;
  border-bottom: 1px solid #ccc;
  font-size: 22px;
  color: #224d77;
  text-align: left;
  margin-bottom: 60px;
}
.lx .msg .msg-item .le .msg-cont .tt {
  font-size: 16px;
  color: #000;
  font-weight: bold;
  line-height: 32px;
}
.lx .msg .msg-item .msg-cont .le-c div {
  width: 50%;
  height: 32px;
  line-height: 32px;
  color: 12px;
  color: #888;
  float: left;
}
.lx .msg .msg-item .ri {
  float: left;
  width: 50%;
}
.lx .msg .msg-item .ri .msg-title {
  height: 58px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  color: black;
  font-weight: bold;
  text-align: right;
  margin-bottom: 60px;
}
.lx .msg .msg-item .ri .msg-cont .ip {
  width: 48%;
  float: left;
  height: 40px;
  margin: 10px 0.5%;
  font-size: 16px;
  color: #ccc;
  border-bottom: 1px solid #ccc;
}
.lx .msg .msg-item .ri .msg-cont .ip input {
  border: none;
  outline: none;
  height: 40px;
  line-height: 40px;
}
.lx .msg .msg-item .ri .btn {
  width: 150px;
  height: 40px;
  border-radius: 3px;
  color: white;
  background: #224d77;
  text-align: center;
  line-height: 40px;
  margin: 15px 0;
  cursor: pointer;
}
.lx .msg .msg-item .ri .ts {
  color: #808080;
  text-align: left;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0 20px;
}
</style>