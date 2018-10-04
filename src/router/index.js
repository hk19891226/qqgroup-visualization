import Vue from 'vue';
import Router from 'vue-router';
import viewQQTable from "@/views/qqTable";
import viewGroupTable from "@/views/groupTable";
import viewGraph2d from "@/views/graph2d";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "viewQQTable",
            component: viewQQTable,
        },
        {
            path: "/qqtable/:num",
            name: "viewQQTable",
            component: viewQQTable,
        },
        {
            path: "/grouptable/:num",
            name: "viewGroupTable",
            component: viewGroupTable,
        },
        {
            path: "/2d",
            name: "viewGraph2d",
            component: viewGraph2d,
        },
    ]
})
