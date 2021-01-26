// 删格化系统 宽度分成24栏
// xs: <576px响应式栅格。
// sm：≥576px响应式栅格.
// md: ≥768px响应式栅格.
// lg: ≥992px响应式栅格.
// xl: ≥1200px响应式栅格.
// xxl: ≥1600px响应式栅格.

import React from 'react'
import '../styles/components/Header.css'
import { Row, Col, Menu } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    YoutubeOutlined
  } from '@ant-design/icons';

const Header = () => {
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={16}>
                    <span className="header-logo">TimberTang</span>
                    <span className="header-txt">一个前端菜鸟</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <HomeOutlined></HomeOutlined>
                            首页
                        </Menu.Item>

                        <Menu.Item key="video">
                            <YoutubeOutlined></YoutubeOutlined>
                            视频
                        </Menu.Item>

                        <Menu.Item key="life">
                            <SmileOutlined></SmileOutlined>
                            生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header