import Layout from '../components/layout.js'
import { Carousel, Container } from 'react-bootstrap'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>DUVegSoc</title>
        </Head>
        <Container>
          <h1>Durham University Vegetarian and Vegan Society</h1>
          <p>Welcome to sample text sample text sample text</p>
        <Carousel style={{height: "500px"}}>
          <Carousel.Item style={{width: "100%", height: "500px"}}>
            <img style={{height:"100%", "objectFit": "cover"}}
              className="d-block w-100"
              src="/images/slide1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{width: "100%", height: "500px"}}>
            <img style={{height:"100%", "objectFit": "cover"}}
              className="d-block w-100"
              src="/images/slide2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{width: "100%", height: "500px"}}>
            <img style={{height:"100%", "objectFit": "cover"}}
              className="d-block w-100"
              src="/images/slide3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        </Container>
      </Layout>
    </div>
  )
}
