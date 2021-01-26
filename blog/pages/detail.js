import Head from 'next/head'
import { Row, Col, Breadcrumb, Icon } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../styles/pages/detail.css'
import {
    CalculatorFilled,
    FolderFilled,
    FireFilled
  } from '@ant-design/icons';

export default function Detail() {
  return (
    <div>
      <Head>
        <title>Detail</title>
      </Head>
      <Header></Header>
      <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
              <div className="bread-div">
                  <Breadcrumb>
                      <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                      <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
                      <Breadcrumb.Item><a href="/">XXX</a></Breadcrumb.Item>
                  </Breadcrumb>
              </div>
              <div className="detailed-title">
                  React 实现视频教程 --- TimberTang 
              </div>
              <div className="list-icon center">
                  <span>
                      <CalculatorFilled></CalculatorFilled>2019-06-28
                  </span>
                  <span>
                      <FolderFilled></FolderFilled>视频教程
                  </span>
                  <span>
                      <FireFilled></FireFilled>6443人
                  </span>
              </div>
              <div className="detailed-content">
                  markdown 内容
              </div>
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
              <Author></Author>
              <Advert></Advert>
          </Col>
      </Row>
      <Footer></Footer>
    </div>
  )
}
