import React from 'react'
import item6 from '../../img/item-6.jpg'

export default function CartProduct(props) {
    return (
        <div>
        <div style={{display:'flex', padding:'30px'}}>
            <div style={{flex:'1'}}>
                <div style={{height:'180px', width:'180px'}}>
                    <img style={{height:'100%', width:'auto', border:'1px solid #dadada'}} src={require('../../img/item-6.jpg')} alt="" />
                </div>
            </div>
            <div style={{flex:'3.5',padding:'10px 40px'}}>
                <h6>Miss Chase Casual Half Sleeve Heathered Women</h6>
                <div style={{padding:'20px 0px'}}> $500 </div>
                <div style={{display:'flex',alignItems:'flex-start'}}>
                    <div className="" style={{padding:'10px 0px 0px 4px'}}>
                        <span className="input-group-btn">
                            <button className="quantity-left-minus" onClick={props.updateBtnValueMinus}>
                                -
                            </button>
                        </span>
                        <input type="text" value={props.btnValue} className="form-control1" style={{height:'39px',border:'1px solid #dadada'}}></input>
                        <span className="input-group-btn ml-1">
                            <button className="quantity-left-minus" onClick={props.updateBtnValuePlus}>
                                +
                            </button>
                        </span>
                    </div>
                    <div style={{padding:'10px 0px 0px 30px'}}>
                        <button className="buttonClass" style={{height:'40px',width:'95px', padding:'7px 10px'}} >Remove</button>
                    </div>
                </div>

            </div>
            </div>
            <div style={{borderBottom:'1px solid #dadada', margin:'0px 0px'}}></div>
        </div>
    )
}
