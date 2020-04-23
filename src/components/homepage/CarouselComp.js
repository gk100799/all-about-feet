import React from 'react'
import slider_1 from '../../img/img_bg_1.jpg'
import slider_2 from '../../img/img_bg_2.jpg'
import slider_3 from '../../img/img_bg_3.jpg'
import {Carousel} from 'react-bootstrap';
import '../../index.css'


export default function CarouselComp() {
    return (
        <div className="CarouselComp1">
            <Carousel >
                <Carousel.Item className='carouselCompInside'>
                    <img
                        style={{ }}
                        className="carImg"
                        src={slider_1}
                        alt="First slide"
                    />
                <Carousel.Caption>
                        <div >
                            <h1 className="head-1" style={{color:"white"}}>Men's</h1>
                            <h2 className="head-2" style={{color:"white"}}>Shoes</h2>
                            <h2 className="head-3" style={{color:"white"}}>Collection</h2>
                            <p className="category" style={{color:"white"}}><span>New trending shoes</span></p>
                            {/* <p><a href="#" className="btn btn-primary" style={{color:"white"}}>Shop Collection</a></p> */}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouselCompInside'>
                    <img
                    style={{  }}
                    className="carImg"
                    src={slider_2}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <h1 class="" style={{color:"white"}}>Huge</h1>
                            <h2 class="" style={{color:"white"}}>Sale</h2>
                            <h2 class="" style={{color:"white"}}><strong class="8">50%</strong> Off</h2>
                            <p class="" style={{color:"white"}}><span>Big sale sandals</span></p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouselCompInside'>
                    <img
                    style={{  }}
                    className="carImg"
                    src={slider_3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div class="desc">
                            <h1 class="head-1" style={{color:"white"}}>New</h1>
                            <h2 class="head-2" style={{color:"white"}}>Arrival</h2>
                            <h2 class="head-3" style={{color:"white"}}>up to <strong class="font-weight-bold">30%</strong> off</h2>
                            <p class="category" style={{color:"white"}}><span>New stylish shoes for men</span></p>
                            {/* <p><a href="#" class="btn btn-primary" style={{color:"white"}}>Shop Collection</a></p> */}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
