import React from 'react'
import './Home.css'
import {Carousel} from 'react-bootstrap'


const Home = () => {
    
    return (
        <div className="caroHome">
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <h3 id="welcome">Attachez vos ceintures et un pot de popcorn on vous regale.</h3>
    <img className="disney" src="https://www.marodi.tv/images/logo-marodi.png"
        alt="logo"/>
    </div>
    <Carousel style={{width:'40%',marginTop:'15px'}}>
  <Carousel.Item interval={1000}>
    <img style={{height:'650px'}}
      className="d-block w-100"
      src="http://marodi.tv/vignettesseries/les-4-fantastiques-1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img style={{height:'650px'}}
      className="d-block w-100"
      src="http://marodi.tv/vignettesseries/arret-mere-thiaba-1.jpg"
      alt="First"
    />
      </Carousel.Item>
  <Carousel.Item interval={500}>
    <img style={{height:'650px'}}
      className="d-block w-100"
      src="http://marodi.tv/vignettesseries/impact-1.jpg"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'650px'}}
      className="d-block w-100"
      src="http://marodi.tv/vignettesseries/virginie-1.jpg"
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Home
