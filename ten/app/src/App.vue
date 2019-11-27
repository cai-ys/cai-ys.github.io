<template>
  <div id="app">
    <div id="hd">
      <div class="hd">
        <div class="hd_le">400-0000-0008</div>
        <div class="hd_ri">投资者中心&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;人才招聘</div>
      </div>
    </div>
    <div style="width:100%;height:96px;">
      <div id="wrap">
        <div class="nav clearfloat">
          <div class="logo">
            <img
              src="https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvZWZkZGJjZDY2MzcxMzFjOWJjYjEzZWMwYWE5YjcyY2MucG5n.png"
              alt
            />
          </div>
          <div class="nav_ce">
            <a href="#/">网站首页</a>
            <a class="dwn" href="#/no2">
              关于我们
              <div id="dw-one">
                <ul>
                  <li>
                    <a id="dwa" href="#/no2">企业理念</a>
                  </li>
                  <li>
                    <a id="dwa" href="#/no2/no2two">愿景使命</a>
                  </li>
                  <li>
                    <a id="dwa" href="#/no2/no2three">发展规划</a>
                  </li>
                </ul>
              </div>
            </a>
            <a href="#/no3">产品中心</a>
            <a class="dwn" href="#/no4">
              研发中心
              <div id="dw-one">
                <ul>
                  <li>
                    <a id="dwa" href="#/no4">研发团队</a>
                  </li>
                  <li>
                    <a id="dwa" href="#/no4/no4two">技术力量</a>
                  </li>
                  <li>
                    <a id="dwa" href="#/no4/no4three">研发展望</a>
                  </li>
                </ul>
              </div>
            </a>
            <a class="dwn" href="#/no5">
              特效药品
              <div id="dw-one">
                <ul>
                  <li>
                    <a id="dwa" href="#/no5">效药原理</a>
                  </li>
                  <li>
                    <a id="dwa" href="#/no5/no5two">受众对象</a>
                  </li>
                  <li>
                    <a id="dwa" href="#/no5/no5three">常见问题</a>
                  </li>
                </ul>
              </div>
            </a>
            <a href="#/no6">资讯中心</a>
            <a href="#/no7">联系我们</a>
            <a class="sc" href="#/no8">搜</a>
          </div>
        </div>
        <div class="nav_ri"></div>
      </div>
    </div>
    <div class="item">
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="foot">
        <div class="ft_hd">
          <p>
            <span>国家发展和改革委员会&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;国家知识产权局&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;国家食品药品监督管理局&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中华人民共和国卫生部</span>
          </p>
          <p class="ft_call">
            <span>微信&nbsp;&nbsp;&nbsp;</span>
            <span>微博&nbsp;&nbsp;&nbsp;</span>
            <span>QQ</span>
          </p>
        </div>
        <div class="ft_btm">
          <div class="ft_lf">
            <p>
              <span>网站首页</span> |
              <span>关于我们</span> |
              <span>产品中心</span> |
              <span>研发中心</span> |
              <span>特效医药</span> |
              <span>资讯中心</span> |
              <span>联系我们</span>
            </p>
            <p>&nbsp;</p>
            <p>电话：400-0000-8888&nbsp;&nbsp;&nbsp;传真：0551-55555555</p>
            <p>地址：上海市松江区佘山林荫大道18号&nbsp;&nbsp;&nbsp;邮箱：123456789@163.com</p>
            <p>药业公司 版权所有 ©2014-2020&nbsp;&nbsp;&nbsp;备案号：苏ICP备1111111号-1&nbsp;&nbsp;&nbsp;公安备案：00000000号</p>
          </div>
          <div class="ft_rt">
            <img
              src="https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNjFjNTQ1NWFmY2MyNGViMmZjY2VkOTk3YmMwMWE2MGMtMTAweDEwMC5wbmc_p_p100_p_3D.png"
              alt
            />
            <p>关注微信公众号</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var aa = wrap.offsetHeight;
    var bb = hd.offsetHeight;
    document.addEventListener("scroll", onScroll);

    function onScroll(e) {
      if (window.scrollY >= aa + bb) {
        wrap.classList.add("posi");
      } else {
        wrap.classList.remove("posi");
      }
    }
  },
  name: "app",
  data() {
    return {};
  }
};
</script>

<style>
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
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

.posi {
  position: fixed;
  background: #fff;
  top: 0;
}
#hd {
  width: 100%;
  height: 40px;
  background: rgb(34, 77, 119);
}
#hd .hd {
  padding: 0 40px;
  line-height: 40px;
}
#hd .hd .hd_le {
  float: left;
  color: white;
  font-size: 12px;
  margin: 0 124px;
}
#hd .hd .hd_ri {
  float: right;
  margin: 0 124px;
  font-size: 12px;
  color: white;
}
#wrap {
  padding: 0 40px;
  height: 96px;
  z-index: 100;
}
#wrap .nav {
  margin: 0 124px;
  line-height: 96px;
  text-align: center;
  height: 96px;
}
#wrap .nav .logo {
  float: left;
  width: 190px;
  height: 96px;
}
#wrap .nav .logo img {
  margin: 20px 0;
}
#wrap .nav .nav_ce {
  float: left;
  padding: 20px;
  height: 56px;
}
#wrap .nav .nav_ce a {
  margin: 10px 30px;
  display: block;
  float: left;
  height: 30px;
  color: #1d3658;
  line-height: 30px;
  text-align: center;
}
.dwn:hover #dw-one {
  display: block;
}
#dw-one {
  transition: 1s;
  width: 200%;
  height: 150px;
  margin: 0 -30px;
  background: #224d77;
  display: none;
}
#dw-one ul li #dwa {
  color: white;
  font-size: 14px;
  display: block;
  text-align: center;
}
#wrap .nav .nav_ce .sc {
  display: block;
  float: right;
  background: #224d77;
  color: white;
  font-size: 18px;
  text-align: center;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  margin: 10px 30px;
}

#wrap .nav .nav_ri {
  float: left;
}
.item {
  height: auto;
}
.foot {
  background: #224d77;
  margin-top: 100px;
}
.ft_hd {
  height: 68px;
  padding: 0 145px;
  border-bottom: 1px solid rgba(116, 133, 145, 1);
}
.ft_hd .ft_call {
  float: right;
}
.ft_hd p {
  font-size: 14px;
  color: rgb(255, 255, 255);
  float: left;
  line-height: 68px;
}
.ft_btm {
  padding: 40px 145px;
  height: 116px;
}
.ft_lf {
  float: left;
  padding: 0 5px;
}
.ft_lf p {
  font-size: 13px;
  color: rgb(255, 255, 255);
  line-height: 24px;
}
.ft_rt {
  float: right;
  text-align: center;
  font-size: 13px;
  line-height: 30px;
  color: rgb(255, 255, 255);
}
</style>
