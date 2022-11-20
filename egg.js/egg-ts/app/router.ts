import { Application } from "egg";

export default (app: Application) => {
  const { controller, router, jwt } = app;

  router.get("/", controller.home.index);

  // ----- //
  //正常路由
  router.post("/admin/login", controller.home.login);

  /*
   * 这里的第二个对象不再是控制器，而是 jwt 验证对象，第三个地方才是控制器
   * 只有在需要验证 token 的路由才需要第二个 是 jwt 否则第二个对象为控制器
   **/
  router.post("/admin", jwt, controller.home.index);
  // ----- //
};
