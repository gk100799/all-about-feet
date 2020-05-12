import React, { useEffect, useState } from 'react'
import item6 from '../../img/item-6.jpg'
import { axiosInstance } from '../../helpers';
import { message } from 'antd'
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Select } from 'antd';

const { Option } = Select;
const { confirm } = Modal;

export default function CartProduct(props) {
    const images = require.context('../../img', true);
    const img = 'item-6'
    const [btnValue, setBtnValue] = useState(null)
    const [allSizes, setAllSizes] = useState([4,5,6,7,8,9,10,11])

    function showConfirm() {
        confirm({
            title: 'Remove Item',
            icon: <ExclamationCircleOutlined />,
            content: 'Are you sure you want to remove this item?',
            onOk() {
                return new Promise((resolve, reject) => {
                    axiosInstance.delete(`/api/delete-cart-item/${props.item.pid}_${props.item.size}`)
                      .then(res => props.deleteItem(props.item.id))
                      .then(res => resolve())
                })
            },
            onCancel() { },
        });
    }


    useEffect(() => {
        if (btnValue === null) {
            setBtnValue(props.item.quantity)
        }
    }, [])

    const updateCartSize = (value) => {
        let data = {
            pid: props.item.pid,
            oldSize: props.item.size,
            size: value,
        }
        axiosInstance.post('/api/cart-size-update', data)
          .then(res => console.log(res))
    }

    const updateCart = (quantity) => {
        let data = {
            pid: props.item.pid,
            quantity: quantity,
            size: props.item.size
        }
        axiosInstance.post('/api/cart-update', data)
            .then(res => setBtnValue(quantity))
            .then(res => props.updateQuantity(data))
            .catch(res => message.error("please try again"))
    }

    const updateBtnValuePlus = () => {
        updateCart(btnValue + 1)
    }

    const updateBtnValueMinus = () => {
        if (btnValue !== 1) {
            updateCart(btnValue - 1)
        }
    }

    return (
        <div>
            <div style={{ display: 'flex', padding: '30px' }}>
                <div style={{ flex: '1' }}>
                    <div style={{ height: '180px', width: '180px' }}>
                        <img style={{ height: '100%', width: 'auto', border: '1px solid #dadada' }} src={require(`../../img/${props.item.imagename}.jpg`)} alt="" />
                    </div>
                </div>
                <div style={{ flex: '3.5', padding: '10px 40px' }}>
                    <h6>{props.item.pname}</h6>
                    <div style={{ padding: '20px 0px' }}> ${props.item.price} </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <div className="" style={{ padding: '10px 0px 0px 4px' }}>
                            <span className="input-group-btn">
                                <button className="quantity-left-minus" onClick={updateBtnValueMinus}>
                                    -
                            </button>
                            </span>
                            <input type="text" value={btnValue} className="form-control1" style={{ height: '39px', border: '1px solid #dadada' }}></input>
                            <span className="input-group-btn ml-1">
                                <button className="quantity-left-minus" onClick={updateBtnValuePlus}>
                                    +
                            </button>
                            </span>
                        </div>
                        <div style={{padding:'10px 0px 0px 20px', display:'flex'}}>
                            <h6 style={{fontSize:'20px', paddingTop:'7px'}}>SIZE</h6>
                            <Select style={{ width: 60, margin: '5px 0px 10px 10px' }} onChange={updateCartSize} defaultValue={props.item.size}>
                                {allSizes.map((item,index) => (
                                    <Option value={item}>{item}</Option>
                                ))}
                            </Select>
                        </div>
                        <div style={{ padding: '10px 0px 0px 30px' }}>
                            <button className="buttonClass" onClick={showConfirm} style={{ height: '40px', width: '95px', padding: '7px 10px' }} >Remove</button>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ borderBottom: '1px solid #dadada', margin: '0px 0px' }}></div>
        </div>
    )
}
