import React from 'react'
import {Card, Button} from 'react-bootstrap';
import men from '../../img/item_1.jpg'
import '../../index.css'

function Product() {
    return (
        <div >
            <div>
                <Card className="productSingle" style={{  }}>
                <div className="cardImg1"><Card.Img className='cardImg' variant="top" src={men} /></div>
                <Card.Body className="cardBody" style={{}}>
                    <div className='productName'> WOMEN'S BOOTS SHOES MACA </div>
                    <div className='productPrice' style={{}}>$139.00</div>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Product
