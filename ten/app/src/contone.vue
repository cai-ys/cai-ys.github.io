<template>
  <div>
    <div class="cont_cil">
      <h4>{{cont_til}}</h4>
      <p>{{cont_cont}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["til", "cont"],
  components: {},
  data() {
    return {
      cont_til: this.til,
      cont_cont: this.cont
    };
  }
};
</script>
<style>
.cont_cil h4 {
  font-size: 26px;
  font-weight: normal;
  font-style: normal;
  color: #1d3658;
  text-align: center;
  margin-bottom: 20px;
}

.cont_cil p {
  font-size: 13px;
  text-align: center;
  color: rgb(153, 153, 153);
}
</style>