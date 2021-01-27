import Head from "next/head";
import styles from "../styles/pages/comm.css";
import Link from "next/link";
import { Row, Col, Breadcrumb, List } from "antd";
import axios from "axios";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import { useState } from "react";
import { CalculatorFilled, FolderFilled, FireFilled } from "@ant-design/icons";

export default function Home(list) {
    const [myList, setMylist] = useState(list.data);
    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
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
                    <div>
                        <div className="bread-div">
                            <Breadcrumb>最新文章</Breadcrumb>
                        </div>

                        <List
                            itemLayout="vertical"
                            dataSource={myList}
                            renderItem={(item) => (
                                <List.Item>
                                    <div className="list-title">
                                        <Link
                                            href={{
                                                pathname: "detail",
                                                query: { id: item.id },
                                            }}
                                        >
                                            {item.title}
                                        </Link>
                                    </div>
                                    <div className="list-icon">
                                        <span>
                                            {" "}
                                            <CalculatorFilled></CalculatorFilled>
                                            {item.addTime}
                                        </span>
                                        <span>
                                            {" "}
                                            <FolderFilled></FolderFilled>
                                            {item.typeName}
                                        </span>
                                        <span>
                                            {" "}
                                            <FireFilled></FireFilled>
                                            {item.view_count}人
                                        </span>
                                    </div>
                                    <div className="list-context">
                                        {item.introduce}
                                    </div>
                                </List.Item>
                            )}
                        />
                    </div>
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author></Author>
                    <Advert></Advert>
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    );
}

Home.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios("http://127.0.0.1:7001/default/getArticleList").then((res) => {
            console.log(res.data);
            resolve(res.data);
        });
    });
    return await promise;
};
