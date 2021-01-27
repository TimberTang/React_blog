'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Api hi';
  }
  async getArticleList() {
    const { ctx } = this;
    const sql = 'SELECT article.id as id,' +
    'article.title as title,' +
    'article.introduce as introduce,' +
    'article.add_time as addTime,' +
    'article.view_count as view_count ,' +
    'type.typeName as typeName ' +
    'FROM article LEFT JOIN type ON article.type_id = type.Id';
    console.log(sql);
    const results = await this.app.mysql.query(sql);
    ctx.body = { data: results };
  }
}

module.exports = HomeController;

// Restful 接口设计风格 前后端分离, 简单和约束性
// 请求方式 get: 服务端获取数据 post: 新建资源 put: 更新资源 delete: 删除资源
