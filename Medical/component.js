window.onload = function() {
    var mySwiper = new Swiper(".swiper-container", {
        loop: true,
        pagination: {
            el: ".swiper-pagination"
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
};
Vue.component("lb", {
    template: "#lb",
    props: ["t"],
    data() {
        return {
            arrs: this.t
        };
    }
});
Vue.component("fan", {
    template: "#fan",
    props: ["fan"],
    data() {
        return {
            jss: this.fan
        };
    }
});
Vue.component("tl", {
    template: "#tl",
    data() {
        return {};
    }
});
Vue.component("xg", {
    template: "#xg",
    props: ["aa"],
    data() {
        return {
            arr: this.aa
        };
    }
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
Vue.component("cp", {
    template: "#cp",
    props: ["op"],
    data() {
        return {
            cps: this.op
        };
    }
});
Vue.component("yq", {
    template: "#yq",
    props: ["sb"],
    data() {
        return {
            sbs: this.sb
        };
    }
});
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
Vue.component("le", {
    template: "#le",
    data() {
        return {
            a: 0
        };
    }
});