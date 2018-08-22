import router from "./router";
import store from "./store";
//nprogress
import Progress from "nprogress";
import "nprogress/nprogress.css";
//message
import { Message } from "element-ui";
router.beforeEach((to, from, next) => {
  Porgress.start();
  next();
  Progress.done();
});
router.afterEach(() => {
  Progress.done();
});
