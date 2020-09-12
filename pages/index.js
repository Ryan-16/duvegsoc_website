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
          <p>The Vegetarian and Vegan society is first and foremost a society where information about a vegetarian or vegan lifestyle is provided to those who are curious, whether they are currently vegan, vegetarian or carnivores. We will never turn away anyone based on whether or not they are vegan/vegetarian, but will rather work towards giving people the information they need to make a conscious decision about their habits when it comes to eating meat or other animal products.</p>
          <Carousel id="front-page-slideshow">
            <Carousel.Item className="front-page-slide">
              <img
                className="d-block w-100 slide-img"
                src="/images/slide1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item className="front-page-slide">
              <img
                className="d-block w-100 slide-img"
                src="/images/slide2.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item className="front-page-slide">
              <img
                className="d-block w-100 slide-img"
                src="/images/slide3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item className="front-page-slide">
              <img
                className="d-block w-100 slide-img"
                src="/images/slide4.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item className="front-page-slide">
              <img
                className="d-block w-100 slide-img"
                src="/images/slide5.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </Layout>
    </div>
  )
}
