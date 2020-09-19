import Layout from '../components/layout.js'
import { Card, Carousel, Container } from 'react-bootstrap'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>DUVegSoc</title>
        </Head>
        <Container>
          <h1 className="text-center">Durham University Vegetarian and Vegan Society</h1>
          <p className="pt-5 pb-3 text-justify">The Vegetarian and Vegan society is first and foremost a society where information about a vegetarian or vegan lifestyle is provided to those who are curious, whether they are currently vegan, vegetarian or carnivores. We will never turn away anyone based on whether or not they are vegan/vegetarian, but will rather work towards giving people the information they need to make a conscious decision about their habits when it comes to eating meat or other animal products.</p>
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
          <div className="mt-5 text-center">
            <div className="fb-page" data-href="https://www.facebook.com/durhamvegsoc/" data-tabs="events" data-width="500" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/durhamvegsoc/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/durhamvegsoc/">Durham University Vegetarian and Vegan Society</a></blockquote></div>
        </div>
        </Container>
      </Layout>
    </div>
  )
}
