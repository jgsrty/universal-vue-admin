import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
//把页面切换作为layout的子路由，页面结构参考panjiachen管理后台
import Layout from "../views/layout/layout";

export default new Router({
  routes: [
    //登录
    {
      path: "/login",
      component: r =>
        // r=>require.ensure([],()=>r(require('...'),xxx))
        //切割路由懒加载，能够有效提升首页加载速度
        require.ensure([], () => r(require("@/views/login/index"), "login")),
      hidden: true
    },
    //404
    {
      path: "/404",
      //设置404页面
      component: r =>
        require.ensure([], () => r(require("@/views/404"), "404")),
      hidden: true
    },
    { path: "*", redirect: "/404", hidden: true },
    //首页
    {
      path: "/",
      component: Layout,
      redirect: "/home",
      name: "Home",
      hidden: true,
      children: [
        {
          path: "home",
          component: r =>
            require.ensure([], () => r(require("@/views/home/index"), "home")),
          meta: { title: "Home", needLogin: true }
        }
      ]
    },
    //charts
    {
      path: "/charts",
      component: Layout,
      redirect: "/charts/pieChart",
      name: "charts",
      meta: { title: "图表" },
      children: [
        {
          path: "pieChart",
          name: "pieChart",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/charts/pieChart"), "charts")
            ),
          meta: { title: "饼图", needLogin: true }
        },
        {
          path: "lineChart",
          name: "lineChart",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/charts/lineChart"), "charts")
            ),
          meta: { title: "条形图", needLogin: true }
        }
      ]
    },
    //tables
    {
      path: "/tables",
      component: Layout,
      redirect: "/tables/normalTable",
      name: "tables",
      meta: { title: "表格" },
      children: [
        {
          path: "normalTable",
          name: "normalTable",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/tables/normalTable"), "tables")
            ),
          meta: { title: "普通表格", needLogin: true }
        },
        {
          path: "table1/edit",
          name: "table1Edit",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/tables/table1Edit"), "tables")
            ),
          meta: { title: "table1Edit", needLogin: true }
        },
        {
          path: "complexTable",
          name: "complexTable",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/tables/complexTable"), "tables")
            ),
          meta: { title: "功能表格", needLogin: true }
        }
      ]
    },
    //editor
    {
      path: "/editor",
      component: Layout,
      redirect: "/editor/jsonEditor",
      children: [
        {
          path: "jsonEditor",
          name: "jsonEditor",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/editor/jsonEditor"), "editor")
            ),
          meta: { title: "jsonEditor", needLogin: true }
        },
        {
          path: "markdown",
          name: "markdown",
          component: r =>
            require.ensure([], () =>
              r(require("@/views/editor/markdown"), "editor")
            ),
          meta: { title: "markdown", needLogin: true }
        }
      ]
    }
  ]
});
