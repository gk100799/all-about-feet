import React,{useEffect,useState} from 'react'
import Product from './Product'
import '../../index.css'
import {axiosInstance} from '../../helpers'

 

function HomeProducts(props){
    const [products,setProducts] = useState()
    
    useEffect(() => {
		axiosInstance.get('/api/products')
			.then(res => setProducts(res.data))
    },[])
    

    return (
        // <div className='productsClass' style={{display:'flex',flexWrap: 'wrap',justifyContent: 'space-around',alignContent: 'flex-start'}}>
        <div className='productsClass' style={{}}>
            { products && products.map((product, index) => (
                // <Product pid={product.pid} pname={product.pname} price={product.price} />
                <Product product={product} {...props} />
            )) }
        </div>
        )
  // } else {return(<></>)}
}

export default HomeProducts
