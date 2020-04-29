import React,{useEffect,useState} from 'react'
import Product from './Product'
import '../../index.css'
import axios from 'axios' 
// import axiosInstance from '../../helpers'

function ProductsComp(props){
    const [products,setProducts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products`,{
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `JWT ${localStorage.getItem('token')}`
        }})
      .then(res => setProducts(res.data))
  },[]);
        return (
                // <div className='productsClass' style={{display:'flex',flexWrap: 'wrap',justifyContent: 'space-around',alignContent: 'flex-start'}}>
                <div className='productsClass' style={{}}>
                    {products.map((product,key) => (
                        // <Product pid={product.pid} pname={product.pname} price={product.price} />
                        <Product product={product} />
                    )) }
                </div>
        )
}

export default ProductsComp
