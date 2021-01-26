import Head from 'next/head'
import styles from '../styles/pages/comm.css'
import { Row, Col } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Header></Header>
      <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
              左侧
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