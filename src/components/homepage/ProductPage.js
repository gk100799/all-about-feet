import React, {useState, useEffect} from 'react'
import {Carousel, Button} from 'react-bootstrap'
import item1 from '../../img/item-1.jpg'
import item2 from '../../img/item-2.jpg'
import item3 from '../../img/item-3.jpg'
import item4 from '../../img/item-4.jpg'
import '../../index.css'
import cartLogo from '../../img/shoppingcart.png';
import axios from 'axios'


export default function ProductPage(props) {
    const [data, setData] = useState([])
    const { pid } = props.match.params

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${pid}`)
          .then(res => setData(res.data))
      },[pid]);
 
    const [btnValue, setBtnValue] = useState(1)

    const updateBtnValuePlus = () => {
        setBtnValue(prevBtnValue => prevBtnValue + 1 )
    }

    const updateBtnValueMinus = () => {
        if (btnValue !== 1) {
            setBtnValue(prevBtnValue => prevBtnValue - 1 )
        }
    }

    return (
        <div className='productPage' style={{margin:'50px 80px'}}>
            <div className='carouselProduct'>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src={item1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={item2}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={item3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={item4}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='productFlexSide'>
                <h5>{data.pname}</h5>
                <h5 style={{padding:'20px 0px 5px 0px'}}>${`${data.price}`}.00</h5>
                {/* <h6 style={{padding:'5px 0px 15px 0px',lineHeight:'1.5em'}}>{`Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day however 
                    a small line of blind text by the name of Lorem Ipsum.`}
                </h6> */}
                <h6 style={{padding:'5px 0px 15px 0px',lineHeight:'1.5em'}}>
                    {data.description}
                 </h6>

                <div >
                    <h6 style={{paddingLeft:'2px'}}>SIZE</h6>
                    <ul className="ulTag1 flexUl1">
                        <li><a href="#">7</a></li>
                        <li><a href="#">7.5</a></li>
                        <li><a href="#">8</a></li>
                        <li><a href="#">8.5</a></li>
                        <li><a href="#">9</a></li>
                        <li><a href="#">9.5</a></li>
                        <li><a href="#">10</a></li>
                        <li><a href="#">10.5</a></li>
                        <li><a href="#">11</a></li>
                        <li><a href="#">11.5</a></li>
                        <li><a href="#">12</a></li>
                        <li><a href="#">12.5</a></li>
                        <li><a href="#">13</a></li>
                        <li><a href="#">13.5</a></li>
                        <li><a href="#">14</a></li>
                    </ul>
                </div>
                <div className="input-group mb-4" style={{paddingLeft:'4px'}}>
                    <span className="input-group-btn">
                        <button className="quantity-left-minus" onClick={updateBtnValueMinus}>
                            -
                        </button>
                    </span>
                    <input type="text" value={btnValue} className="form-control1" ></input>
                    <span className="input-group-btn ml-1">
                        <button className="quantity-left-minus" onClick={updateBtnValuePlus}>
                            +
                        </button>
                    </span>
                </div>
                <div style={{}}>
                    <button className="buttonClass2"><i><img style={{padding:'0px 10px 4px 0px'}}src={cartLogo} alt="" /></i>{`Add to Cart`}</button>
                </div>
            </div>
        </div>
    )
}
