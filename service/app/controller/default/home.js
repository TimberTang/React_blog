'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, eggss';
  }
  async list() {
    const { ctx } = this;
    ctx.body = '<h1>TimberTang blog list</h1>';
  }
}

module.exports = HomeController;

// Restful 接口设计风格 前后端分离, 简单和约束性
// 请求方式 get: 服务端获取数据 post: 新建资源 put: 更新资源 delete: 删除资源
