Vue.component("ve", {
    template: "#ve",
    props: ["box_arr"],
    data() {
        return {
            arr: this.box_arr,
            index: 0,
            tran: "l"
        };
    },
    methods: {
        l() {
            this.tran = "l";
            this.index++;
            if (this.index >= this.arr.length) {
                this.index = 0;
            }
        },
        r() {
            this.tran = "r";
            this.index--;
            if (this.index <= -1) {
                this.index = this.arr.length - 1;
            }
        }
    },
    mounted() {
        var img = this.$refs.img[0];
        img.onload = () => {
            var h = this.$refs.img[0].offsetHeight;
            for (var i = 0; i < this.$refs.img.length; i++) {
                this.$refs.img[i].style.height = h + "px";
            }
            this.$el.style.height = h + "px";
        };
    }
});

Vue.component("navs", {
    template: "#navs",
    props: ["aa"],
    data() {
        return {
            navs: this.aa
        };
    }
});
Vue.component("cp", {
    template: "#cp"
});
Vue.component("news", {
    template: "#news",
    props: ["aa"],
    data() {
        return {
            arr: this.aa
        };
    }
});