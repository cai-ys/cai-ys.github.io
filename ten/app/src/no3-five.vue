<template>
  <div>
    <div class="fk">
      <ul class="clearfloat">
        <li v-for="i in arr">
          <div class="wp">
            <div class="y-img">
              <img :src="i.url" alt />
            </div>
            <span></span>
          </div>
          <a href>{{i.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          url:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cDovLzViNmQ2Y2NhNjM3MzYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC85NWJhYzFiMmEwNDkxNDgzMWNhZjQ3YWRjNTQwMTYxZC0zMDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",
          title: "复方丹参片"
        },
        {
          url:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cDovLzViNmQ2Y2NhNjM3MzYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9iMmEwZWM5NzlmMDYyZWM2NmViMzdkY2RiYzQ3NGI4Ni0zMDB4MzAwLnBuZw_p_p100_p_3D_p_p100_p_3D.png",
          title: "水乳霜"
        },
        {
          url:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cDovLzViNmQ2Y2NhNjM3MzYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC8zNzliMmIxMGRlYjQ1ODhjMGI4ZDY1NWE1Zjk5YTgyMS0zMDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",
          title: "骨质增生止痛贴"
        },
        {
          url:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cDovLzViNmQ2Y2NhNjM3MzYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC82NzY0NDY2MGMzN2MyMWViOWMzMDNhYzg5ZjczYTljOC0zMDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",
          title: "槐杞黄颗粒"
        },
        {
          url:
            "https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cDovLzViNmQ2Y2NhNjM3MzYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC81N2JhNmMzNTkxYzBkNDAyY2UwZGM4ZDFiMTZlOTljMy0zMDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",
          title: "碳酸钙甘氨酸胶囊"
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
.fk ul li {
  width: 22%;
  height: auto;
  margin: 5px;
  transition: 0.3s;
  padding: 0 5px 5px;
  float: left;
  border: 1px solid #cccccc;
  border-radius: 3px;
}
.fk ul li .wp {
  padding: 10px;
}
.fk ul li .wp .y-img {
  width: 100%;
  height: 205px;
  margin: 0 0 5px;
}
.fk ul li .wp .y-img img {
  width: 100%;
  height: 100%;
}
.fk ul li .wp span {
  display: block;
  width: 0%;
  background: rgb(24, 22, 22);
  height: 1.5px;
  transition: 0.5s;
}
.fk ul li a {
  display: block;
  font-size: 12px;
  color: #6666;
  text-align: center;
  line-height: 24px;
}
.fk ul li:hover {
  box-shadow: 0 0 25px 5px #ccc;
  transform: scale(1.02);
}
.fk ul li:hover span {
  width: 100%;
}
</style>






