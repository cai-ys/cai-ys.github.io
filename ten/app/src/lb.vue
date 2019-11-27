<template>
  <div style="position: relative;min-width: 1020px;">
    <div class="g_swiper_container">
      <ul v-if="arr4" class="s_contList">
        <li
          v-for="(i,$index) in arr4"
          class="s_contLi"
          :key="$index"
          :style="{border:i==$index?'1px solid #000':''}"
        >
          <div v-if="$index%2==0">
            <div class="s_contLi_img">
              <img :src="i.img" alt />
            </div>
            <div class="s_contLi_name" :class="i==$index?'':'s_contLi_name1'">
              <p class="g_tiao">
                <span></span>
              </p>
              <p :title="i.name">{{i.name}}</p>
            </div>
          </div>
          <div v-if="$index%2==1">
            <div class="s_contLi_name" :class="i==$index?'':'s_contLi_name1'">
              <p :title="i.name">{{i.name}}</p>
              <p class="g_tiao">
                <span></span>
              </p>
            </div>
            <div class="s_contLi_img">
              <img :src="i.img" alt />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="g_button">
      <button @click="btn(0)"><</button>
      <br />
      <button @click="btn(1)">></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr4: [
        {
          name: "碳酸钙甘氨酸胶囊",
          img:
            "https://ccdn.goodq.top/caches/7860176a2827da9a40525e4bc4184e22/aHR0cDovL3ctNTIxMTYtNTgxMTMtOTE2NzIuMTM5MTk2MjI0OTAuc2l0ZXMuY25mcmVlMDIucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA4LzU3YmE2YzM1OTFjMGQ0MDJjZTBkYzhkMWIxNmU5OWMzLTMxNXgzMTUuanBn.jpg"
        },
        {
          name: "维生素E软胶囊",
          img:
            "https://ccdn.goodq.top/caches/7860176a2827da9a40525e4bc4184e22/aHR0cDovL3ctNTIxMTYtNTgxMTMtOTE2NzIuMTM5MTk2MjI0OTAuc2l0ZXMuY25mcmVlMDIucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA4LzVmNzlmYTcxOGY2OGRhZDUyYTA4NzQ3MjdiOGE3MGY3LTMxNXgzMTUuanBn.jpg"
        },
        {
          name: "槐杞黄颗粒",
          img:
            "https://ccdn.goodq.top/caches/7860176a2827da9a40525e4bc4184e22/aHR0cDovL3ctNTIxMTYtNTgxMTMtOTE2NzIuMTM5MTk2MjI0OTAuc2l0ZXMuY25mcmVlMDIucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA4LzY3NjQ0NjYwYzM3YzIxZWI5YzMwM2FjODlmNzNhOWM4LTMxNXgzMTUuanBn.jpg"
        },
        {
          name: "小儿止咳糖浆",
          img:
            "https://ccdn.goodq.top/caches/7860176a2827da9a40525e4bc4184e22/aHR0cDovL3ctNTIxMTYtNTgxMTMtOTE2NzIuMTM5MTk2MjI0OTAuc2l0ZXMuY25mcmVlMDIucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA4LzdmYmI0OWRlMmJjNzA4MmQ3ZTViZTkwOTAzYjFkNTAxLTMxNXgzMTUuanBn.jpg"
        },
        {
          name: "骨质增生止痛贴",
          img:
            "https://ccdn.goodq.top/caches/7860176a2827da9a40525e4bc4184e22/aHR0cDovL3ctNTIxMTYtNTgxMTMtOTE2NzIuMTM5MTk2MjI0OTAuc2l0ZXMuY25mcmVlMDIucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA4LzM3OWIyYjEwZGViNDU4OGMwYjhkNjU1YTVmOTlhODIxLTMxNXgzMTUuanBn.jpg"
        },
        {
          name: "复方丹参片",
          img:
            "https://ccdn.goodq.top/caches/7860176a2827da9a40525e4bc4184e22/aHR0cDovL3ctNTIxMTYtNTgxMTMtOTE2NzIuMTM5MTk2MjI0OTAuc2l0ZXMuY25mcmVlMDIucWlmZWl5ZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA4Lzk1YmFjMWIyYTA0OTE0ODMxY2FmNDdhZGM1NDAxNjFkLTMxNXgzMTUuanBn.jpg"
        }
      ],
      index: 0
    };
  },
  methods: {
    btn(i) {
      var oList = document.querySelector(".s_contList");

      if (i == 0) {
        if (this.index == 0) {
          this.index = -2;
        } else {
          this.index++;
          console.log(oList);
        }
        oList.style.left = 300 * this.index + "px";

        console.log(this.index);
      } else {
        this.index++;
        if (this.index == 3) {
          this.index = 0;
        }
        console.log(this.index);
        oList.style.left = -280 * this.index + "px";
      }
    }
  },
  mounted() {
    var oList = document.querySelector(".s_contList");
    setInterval(() => {
      this.index++;
      if (this.index == 3) {
        this.index = 0;
      }
      console.log(this.index);
      oList.style.left = -280 * this.index + "px";
    }, 2000);
  }
};
</script>

<style>
.s_contList {
  position: absolute;
  left: 0px;
  width: 1800px;
  min-height: 500px;
  transition: 0.3s;
}

.s_contLi {
  width: 280px;
  float: left;
}
.g_swiper_container {
  max-width: 1100px;
  overflow: hidden;
  margin: 0 auto;
  min-height: 630px;
  position: relative;
}
.s_contLi_img,
.s_contLi_img img,
.s_contLi_name {
  width: 100%;
  height: 315px;
}

.s_contLi_name {
  padding: 80px 0;
  background: #f2f2f2;
  box-sizing: border-box;
  text-align: center;
}

.s_contLi_name a {
  font-size: 20px;
  color: #666;
}

.g_tiao {
  text-align: center;
  margin: 60px;
  box-sizing: border-box;
}

.g_tiao span {
  width: 25px;
  height: 3px;
  background: #225175;
  display: inline-block;
}
.g_button {
  position: absolute;
  right: 10%;
  bottom: 42%;
  margin-top: -100px;
}
.g_button button {
  width: 50px;
  height: 50px;
  background: #1d3658;
  color: #fff;
  border: none;
  /*outline: none;*/
}
</style>