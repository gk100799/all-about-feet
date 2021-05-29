import React, { useEffect, useState } from 'react'
import item6 from '../../img/item-6.jpg'
import item7 from '../../img/item-7.jpg'
import item8 from '../../img/item-9.jpg'
// import { Button } from 'react-bootstrap'
import CartProduct from './CartProduct'
import { axiosInstance } from '../../helpers'
import { css } from "@emotion/core";
import { BeatLoader } from 'react-spinners'
import { ScaleLoader } from 'react-spinners'
import { Steps } from 'antd';
import { Checkbox } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';
import './cart.css'
import { Result } from 'antd';

const { Step } = Steps;


export default function Cart(props) {

    const [btnValue, setBtnValue] = useState(1)
    const [cartItems, setCartItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [price, setPrice] = useState()
    const [process, setProcess] = useState(0)
    const [userDetails, setUserDetails] = useState()
    const [btnLoading, setBtnLoading] = useState();

    const override = css`
        padding-top: 50px;
        text-align: center;
        align-items: center;
    `;

    useEffect(() => {
        axiosInstance.get(`/api/cart-items/`)
            .then(res => setCartItems(res.data))
            .then(res => setLoading(false))
            .catch(err => console.log(err))
    }, []);

    function deleteItem(id) {
        let items = [...(cartItems.filter((value, index, arr) => value.id !== id))]
        setCartItems(items)
        props.handleCartDec()
    }

    const updateQuantity = (data) => {
        let updatedItems = [...cartItems]
        updatedItems.forEach(item => {
            if (data.pid === item.pid && data.size === item.size) {
                item.quantity = data.quantity
            }
        })
        setCartItems(updatedItems)
    }

    useEffect(() => {
        let cartPrice = 0
        if (cartItems.length !== 0) {
            cartItems.forEach(element => cartPrice += (element.price * element.quantity))
            setPrice(cartPrice)
        } else {
            setPrice(0)
        }
    }, [cartItems])

    const noItem = (
        <div style={{ textAlign: 'center', paddingTop: '40px' }}>
            <h4>Cart is empty!!</h4>
        </div>
    )

    const yesItem = (
        <>
            <div style={{ minHeight: '100px', }}>
                {cartItems && cartItems.map((item, index) => (
                    <CartProduct item={item} id={item.id + '_' + item.pid + '_' + item.size} deleteItem={deleteItem} updateQuantity={updateQuantity} />
                ))}
            </div>
            <div style={{ textAlign: 'right', padding: '15px 25px 15px 0px', marginTop: '0px', boxShadow: '0 -5px 5px -5px rgba(83, 83, 83, 0.75)', position: 'sticky', bottom: '0px', backgroundColor: 'rgb(245, 244, 244)' }}>
                <button className='buttonClass' style={{ height: '40px', width: '110px', padding: '5px' }} onClick={() => setProcess(1)} >CHECKOUT</button>
            </div>
        </>
    )

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not validate email!',
            number: '${label} is not a validate number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const onFinish = values => {
        setBtnLoading(true)
        console.log(values);
        setUserDetails(values)
        let data=userDetails
        axiosInstance.post('/api/orders', data)
          .then(res => setProcess(2))
          .then(res => props.handleOrder())
          .then(res => setBtnLoading(false))
        console.log(userDetails)
    }

    return (

        <div style={{ minHeight: '508px' }}>
            {loading &&
                <div style={{ paddingTop: '80px' }}>
                    <ScaleLoader
                        css={override}
                        height={50}
                        width={5}
                        color={"#343a40"}
                        loading={loading}
                    />
                </div>
            }

            {!loading &&
                <>
                    <div style={{ width: '550px', paddingTop: '30px', margin: '0% 32%' }}>
                        <Steps size="small" current={process} style={{}}>
                            <Step title="Shopping Cart" />
                            <Step title="Checkout" />
                            <Step title="Order Complete" />
                        </Steps>
                    </div>
                    {process !== 2 &&
                        <div className='parentFlex'>
                            <div className='childFlex1'>
                                {process === 0 &&
                                    <>
                                        <h5 style={{ padding: '20px 30px 15px 30px' }}>My Cart ({cartItems.length})</h5>
                                        <div style={{ borderBottom: "1px solid #dadada", marginBottom: '10px' }}></div>
                                        {cartItems.length !== 0 ? yesItem : noItem}
                                    </>}
                                {process === 1 &&
                                    <div className="formClass">
                                        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                            <Form.Item
                                                name={['user', 'name']}
                                                label="Name"
                                                rules={[
                                                    {
                                                        required: true,
                                                    },
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name={['user', 'email']}
                                                label="Email"
                                                rules={[
                                                    {
                                                        type: 'email',
                                                        required: true,
                                                    },
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name={['user', 'address']}
                                                rules={[
                                                    {
                                                        required: true,
                                                    },
                                                ]}
                                                label="Address">
                                                <Input.TextArea />
                                            </Form.Item>
                                            <Form.Item
                                                name={['user', 'pinCode']}
                                                label="Pin Code"
                                                rules={[
                                                    {
                                                        required: true,
                                                    },
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name={['user', 'city']}
                                                rules={[
                                                    {
                                                        required: true,
                                                    },
                                                ]}
                                                label="Town/City">
                                                <Input />
                                            </Form.Item>
                                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                                <div style={{ backgroundColor: 'inherit', paddingTop: '10px' }}>
                                                    {/* <button type="submit" className="buttonClass" style={{ height: '40px', width: '130px', padding: '5px' }} >PLACE ORDER</button> */}
                                                    <Button htmlType="submit" loading={btnLoading} className="buttonClass2">PLACE ORDER</Button>
                                                </div>
                                            </Form.Item>
                                        </Form>
                                    </div>}
                                {process === 2 &&
                                    <>

                                    </>}
                            </div>
                            <div className='childFlex2'>
                                <div>
                                    <h5 style={{ padding: '20px 30px 15px 25px', color: '#595959' }}>PRICE DETAILS</h5>
                                    <div style={{ borderBottom: "1px solid #dadada", marginBottom: '8px' }}></div>
                                    <div style={{ display: 'flex', padding: '15px 30px 15px 25px', justifyContent: 'space-between' }}>
                                        <h6 style={{}}>Price ({cartItems.length === 1 ? `${cartItems.length} item)` : `${cartItems.length} items)`}</h6>
                                        <h6>${price}</h6>
                                    </div>
                                    <div style={{ display: 'flex', padding: '15px 30px 15px 25px', justifyContent: 'space-between' }}>
                                        <h6 style={{}}>Delivery Fee</h6>
                                        <h6 style={{ color: 'green' }}>FREE</h6>
                                    </div>
                                    <div style={{ borderBottom: '1px dotted #dadada', margin: '10px 27px 10px 22px' }}></div>
                                    <div style={{ display: 'flex', padding: '10px 30px 10px 25px', justifyContent: 'space-between' }}>
                                        <h5 style={{}}>Total Amount</h5>
                                        <h5 style={{}}>${price}</h5>
                                    </div>
                                </div>
                                {process === 1 &&
                                    <>
                                        <div style={{ marginTop: '15px' }}>
                                            <h5 style={{ padding: '20px 30px 10px 25px', color: '#595959' }}>PAYMENT METHOD</h5>
                                            <div style={{ borderBottom: "1px solid #dadada", marginBottom: '8px' }}></div>
                                            <div style={{ display: 'flex', padding: '10px 30px 15px 35px', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <Checkbox checked={true}>Cash on Delivery</Checkbox>
                                                <span style={{ fontSize: '11px' }}>(Currently only cash on delivery orders are accepted)</span>
                                            </div>
                                        </div>
                                        {/* <div style={{ backgroundColor: 'inherit', textAlign: 'center', paddingTop: '20px' }}>
                                        <button className="buttonClass" style={{ height: '40px', width: '130px', padding: '5px' }} >PLACE ORDER</button>
                                    </div> */}
                                    </>}
                            </div>
                        </div>}
                        {process===2 &&
                        <Result
                        status="success"
                        title="Thank you for purchasing, Your order is complete"
                        // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                        extra={[
                          <Button onClick={() => window.location.href="/"} type="primary" key="buy">Home</Button>,
                        ]}
                      />
                        }

                </>
            }
        </div>
    )
}
