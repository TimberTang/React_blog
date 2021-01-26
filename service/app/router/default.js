module.exports = app => {
  const { router, controller } = app;
  router.get('/defalult/index', controller.default.home.index);
}
;
