import React from 'react'
import {Card, Button} from 'react-bootstrap';
import men from '../../img/item_1.jpg'
import '../../index.css'
import { Link } from 'react-router-dom';

function Product(props) {
    const product = {...props.product}
    return (
        <div >
            <Link to={`product/${product.pid}`}>
                <Card className="productSingle" style={{  }}>
                <div className="cardImg1"><Card.Img className='cardImg' variant="top" src={men} /></div>
                <Card.Body className="cardBody" style={{color: 'black'}}>
                    <div className='productName'> {product.pname} </div>
                    <div className='productPrice' style={{}}>${product.price}.00</div>
                </Card.Body>
                </Card>
            </Link>
        </div>
    )   
}

export default Product
