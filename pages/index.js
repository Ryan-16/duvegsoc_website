import Layout from '../components/layout.js'
import { Card, Carousel } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <Layout>
        <div>
          <h1>Durham University Vegetarian and Vegan Society</h1>
          <p>Welcome to sample text sample text sample text</p>
        </div>
        <Carousel style={{height: "500px"}}>
          <Carousel.Item style={{height: "500px"}}>
            <img style={{"max-height": "100%", "max-width": "100%"}}
              className="d-block w-100 img-fluid"
              src="/images/slide1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{height: "500px"}}>
            <img style={{"max-height": "100%", "max-width": "100%"}}
              className="d-block w-100 img-fluid"
              src="/images/slide2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{height: "500px"}}>
            <img style={{"max-height": "100%", "max-width": "100%"}}
              className="d-block w-100 img-fluid"
              src="/images/slide3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Layout>
    </div>
  )
}
