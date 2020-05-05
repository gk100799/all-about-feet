import React, { useEffect, useState } from 'react'
import item6 from '../../img/item-6.jpg'
import item7 from '../../img/item-7.jpg'
import item8 from '../../img/item-9.jpg'
import {Button} from 'react-bootstrap'
import CartProduct from './CartProduct' 
import {axiosInstance} from '../../helpers'
import { css } from "@emotion/core";
import {BeatLoader} from 'react-spinners'
import {ScaleLoader} from 'react-spinners'

export default function Cart() {

    const [btnValue, setBtnValue] = useState(1)
    const [cartItems, setCartItems] = useState([])
    const [loading,setLoading] = useState(true)

    const updateBtnValuePlus = () => {
        setBtnValue( btnValue + 1 );
    }

    const updateBtnValueMinus = () => {
        if (btnValue !== 1) {
            setBtnValue( btnValue + 1 );
        }
    }

    const override = css`
        padding-top: 50px;
        text-align: center;
        align-items: center;
    `;

    useEffect(() => {
        // setTimeout(() => {
            axiosInstance.get(`/api/cart-items/`)
              .then(res => setCartItems(res.data))
              .then(res => setLoading(false))
            // },1000)
      },[]);

    return (
        
        <div>
        
        <div className='parentFlex'>
            <div className='childFlex1'>
                <h5 style={{padding:'20px 30px 20px 30px'}}>My Cart (2)</h5>
                <div style={{borderBottom: "1px solid #dadada", marginBottom:'10px'}}></div>
                <div style={{minHeight:'240px', }}>
                    <ScaleLoader
                    css={override}
                    size={150}
                    color={"#123abc"}
                    loading={loading}
                    />
                    {cartItems ? cartItems.map((item,index) => (
                        <CartProduct imgSrc={item.imagename} btnValue={btnValue} updateBtnValueMinus={updateBtnValueMinus} updateBtnValuePlus={updateBtnValuePlus} />
                    )) : 'Cart is empty!!' }
                </div>
                <div style={{textAlign:'right', padding:'15px 25px 15px 0px', marginTop:'0px',boxShadow:'0 -5px 5px -5px rgba(83, 83, 83, 0.75)',position:'sticky', bottom:'0px', backgroundColor:'rgb(245, 244, 244)'}}>
                    <button className='buttonClass' style={{height:'40px', width:'150px', padding:'5px' }}>PLACE ORDER</button>
                </div>
            </div>
            <div className='childFlex2'>
                <h5 style={{padding:'20px 30px 20px 25px', color:'#595959'}}>PRICE DETAILS</h5>
                <div style={{borderBottom: "1px solid #dadada", marginBottom:'10px'}}></div>
                <div style={{display:'flex', padding:'15px 30px 15px 25px', justifyContent:'space-between'}}>
                    <h6 style={{}}>Price (3 items)</h6>
                    <h6>$1,500</h6>
                </div>
                <div style={{display:'flex', padding:'15px 30px 15px 25px',justifyContent:'space-between'}}>
                    <h6 style={{}}>Delivery Fee</h6>
                    <h6 style={{color:'green'}}>FREE</h6>
                </div>
                <div style={{borderBottom:'1px dotted #dadada', margin:'10px 27px 10px 22px'}}></div>
                <div style={{display:'flex', padding:'10px 30px 10px 25px',justifyContent:'space-between'}}>
                    <h5 style={{}}>Total Amount</h5>
                    <h5 style={{}}>$1500</h5>
                </div>
                <div style={{borderBottom:'1px dotted #dadada', margin:'10px 27px 10px 22px'}}></div>
            </div>
        </div>
    </div>
    )
}
