import Head from "next/head";
import { Row, Col, Breadcrumb, Affix} from "antd";
import axios from 'axios'
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import "../styles/pages/detail.css";
import { CalculatorFilled, FolderFilled, FireFilled } from "@ant-design/icons";
import MardownNavbar from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css';
import React, { useState } from 'react';
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from  '../components/tocify.tsx'


export default function Detail(item) {
    const tocify = new Tocify()
    const renderer = new marked.Renderer()

    // ### timbertang 等级  文本
    renderer.heading = function (text, level, raw) {
        const anchor = tocify.add(text, level)
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
    }
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false, 
        breaks: false,
        smartLists: true,
        highlight: function(code) {
            return hljs.highlightAuto(code).value
        },
        tables: true,
    })
    let html = marked(item.article_content)
    const [detail, setdetail] = useState(item)
    return (
        <div>
            <Head>
                <title>Detail</title>
            </Head>
            <Header></Header>
            <Row className="comm-main" type="flex" justify="center">
                <Col
                    className="comm-left"
                    xs={24}
                    sm={24}
                    md={16}
                    lg={18}
                    xl={14}
                >
                    <div className="bread-div">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <a href="/">首页</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="/">视频列表</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="/">XXX</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="detailed-title">
                        {detail.title}
                    </div>
                    <div className="list-icon center">
                        <span>
                            <CalculatorFilled></CalculatorFilled>{detail.addTime}
                        </span>
                        <span>
                            <FolderFilled></FolderFilled>{detail.typeName}
                        </span>
                        <span>
                            <FireFilled></FireFilled>{detail.view_count}人
                        </span>
                    </div>
                    <div className="detailed-content" dangerouslySetInnerHTML={{__html: html}}>
                        
                    </div>
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author></Author>
                    <Advert></Advert>
                    <Affix offsetTop={5}>
                        <div className="detailed-nav comm-box">
                            <div className="nav-title">文章目录</div>
                            {/* <MardownNavbar 
                                className="article-menu" 
                                source={detail.article_content} 
                                headingTopOffset={0}
                                ordered={false}>
                            </MardownNavbar> */}
                            {tocify && tocify.render()}
                        </div>
                    </Affix>
                    
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    );
}


Detail.getInitialProps = async (context) => {
    let id = context.query.id
    return await new Promise((resolve) => {
        axios('http://127.0.0.1:7001/default/getArticleById/' + id).then(res => {
            resolve(res.data.data[0])
        })
    })
}