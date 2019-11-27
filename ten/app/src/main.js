import Vue from "vue";
import Element from "element-ui";
import router from "./router.js";
import App from "./App.vue";

new Vue({
    el: "#app",
    router,
    render: h => h(App)
});