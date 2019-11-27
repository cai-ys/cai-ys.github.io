import Vue from "vue";
import Router from "vue-router";
import no1 from "./no1.vue";
import no2 from "./no2.vue";
import no3 from "./no3.vue";
import no4 from "./no4.vue";
import no5 from "./no5.vue";
import no6 from "./no6.vue";
import no7 from "./no7.vue";
import no2one from './no2-one.vue';
import no2two from './no2-two.vue';
import no2three from './no2-three.vue';
import no4one from './no4-one.vue';
import no4two from './no4-two.vue';
import no4three from './no4-three.vue';
import no5one from './no5-one.vue';
import no5two from './no5-two.vue';
import no5three from './no5-three.vue';
import no3one from './no3-one.vue';
import no3two from './no3-two.vue';
import no3three from './no3-three.vue';
import no3four from './no3-four.vue';
import no3five from './no3-five.vue';


Vue.use(Router);

var routes = [{
        path: "/",
        name: "index",
        component: no1
    },
    {
        path: "/no2",
        name: "no2",
        component: no2,
        children: [{
            path: "/",
            name: 'no2one',
            component: no2one
        }, {
            path: "no2two",
            name: 'no2two',
            component: no2two
        }, {
            path: "no2three",
            name: 'no2three',
            component: no2three
        }]
    },
    {
        path: "/no3",
        name: "no3",
        component: no3,
        children: [{
            path: "/",
            name: 'no3one',
            component: no3one
        }, {
            path: "no3two",
            name: 'no3two',
            component: no3two
        }, {
            path: "no3three",
            name: 'no3three',
            component: no3three
        }, {
            path: "no3four",
            name: 'no3four',
            component: no3four
        }, {
            path: "no3five",
            name: 'no3five',
            component: no3five
        }]
    },
    {
        path: "/no4",
        name: "no4",
        component: no4,
        children: [{
            path: "/",
            name: 'no4one',
            component: no4one
        }, {
            path: "no4two",
            name: 'no4two',
            component: no4two
        }, {
            path: "no4three",
            name: 'no4three',
            component: no4three
        }]
    },
    {
        path: "/no5",
        name: "no5",
        component: no5,
        children: [{
            path: "/",
            name: 'no5one',
            component: no5one
        }, {
            path: "no5two",
            name: 'no5two',
            component: no5two
        }, {
            path: "no5three",
            name: 'no5three',
            component: no5three
        }]
    },
    {
        path: "/no6",
        name: "no6",
        component: no6
    },
    {
        path: "/no7",
        name: "no7",
        component: no7
    }
];

export default new Router({
    routes
});