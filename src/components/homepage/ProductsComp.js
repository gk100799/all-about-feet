import React, { Component } from 'react'
import Product from './Product'
import '../../index.css'

class ProductsComp extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
                <div className='productsClass' style={{display:'flex',flexWrap: 'wrap',justifyContent: 'space-between'}}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
        )
    }
}

export default ProductsComp
