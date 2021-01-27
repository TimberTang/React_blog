'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/default')(app);
};

// View 模板文件夹
// extend
// middleweare中间件
