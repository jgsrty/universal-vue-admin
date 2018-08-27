import router from "./router";
import Storage from "@/tools/storage";
//progress
import Progress from "nprogress";
import "nprogress/nprogress.css";

router.beforeEach((to, from, next) => {
  Progress.start();
  console.log(to.matched.some(res => res.meta.needLogin && !Storage.get("token")))
  if (to.matched.some(res => res.meta.needLogin && !Storage.get("token"))) {
    next({
      path: "/login",
      //将原生的跳转地址当作参数传入，后续登录成功之后，需要跳转到原始访问的地址
      query: { redirect: to.path }
    });
    Progress.done();
    return;
  }
  //登录状态下，不允许回退到登录页面
  if (to.path === "/login" && Storage.get("token")) {
    next(false);
    Progress.done();
    return;
  }
  next();
  Progress.done();
});

router.afterEach(() => {
  Progress.done(); // 结束Progress
});
