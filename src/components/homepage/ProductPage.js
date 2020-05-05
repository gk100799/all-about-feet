import React, {useState, useEffect} from 'react'
import {Carousel} from 'react-bootstrap'
import item1 from '../../img/item-1.jpg'
import item2 from '../../img/item-2.jpg'
import item3 from '../../img/item-3.jpg'
import item4 from '../../img/item-4.jpg'
import '../../index.css'
import cartLogo from '../../img/shoppingcart.png';
import axios from 'axios'
import {message} from 'antd'
import { withRouter } from "react-router";
import {axiosInstance} from '../../helpers';
import { Button } from 'antd';
import { Select } from 'antd';

const { Option } = Select;


function ProductPage(props) {
    const [allSizes, setAllSizes] = useState([4,5,6,7,8,9,10,11])
    const [data, setData] = useState([])
    const { pid } = props.match.params
    const [btnValue, setBtnValue] = useState(1)
    const [loading,setLoading] = useState(false)
    const [added, setAdded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${pid}`)
          .then(res => setData(res.data))
      },[]);

    const updateBtnValuePlus = () => {
        setBtnValue(prevBtnValue => prevBtnValue + 1 )
    }

    const updateBtnValueMinus = () => {
        if (btnValue !== 1) {
            setBtnValue(prevBtnValue => prevBtnValue - 1 )
        }
    }

    message.config({
        top: 80,
    })

    const error = () => {
        message.error('Please Login to add products to cart', 3)
    }

    const addToCart = () => {
        setLoading(true)
        // setTimeout(function(){ 
            axiosInstance.post(`/api/add-to-cart/${pid}_${btnValue}/`)
            .then(res => {
                if(res.created) {
                props.handleCartInc()
                }
            })
            .then(res => setLoading(false))
            .then(res => setAdded(true))
            .then(res => message.success('added to cart'))
            .catch(err => {
                message.error('Please try again');
                setLoading(false);
            })
        //  }, 1000);
        // console.log(result)
    }

    const handleClick = () => {
        props.logged_in ? addToCart() : error()
    }

    const goToCart = () => {
        props.history.push('/cart');
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
                <h6 style={{padding:'5px 0px 15px 0px',lineHeight:'1.5em'}}>{`Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day however 
                    a small line of blind text by the name of Lorem Ipsum.`}
                </h6>
                {/* <h6 style={{padding:'5px 0px 15px 0px',lineHeight:'1.5em'}}>
                    {data.description}
                 </h6> */}

                <div style={{ padding: '20px 0px', alignItems:'center'}}>
                    <h6 style={{paddingLeft:'0px', alignSelf:'center'}}>SIZE</h6>
                    <Select style={{ width: 70, margin: '5px 0px 10px 2px' }} allowClear>
                        {allSizes.map((item,index) => (
                            <Option value={item}>{item}</Option>
                        ))}
					</Select>
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
                    <Button loading={loading} className="buttonClass2" onClick={added ? goToCart :handleClick}><i><img style={{padding:'0px 10px 4px 0px'}}src={cartLogo} alt="" /></i>{added ? `Go to Cart` : `Add to Cart`}</Button>
                </div>
            </div>
        </div>
    )
}


export default withRouter(ProductPage)