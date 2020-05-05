import React, { useState, useEffect } from 'react'
import './menBar.css'
import ProductsComp from './ProductsComp'
import Pagination from 'react-bootstrap/Pagination'
import { Checkbox } from 'antd';
import {axiosInstance} from '../../helpers'


export default function SideBar() {
	const [allBrands, setAllBrands] = useState(['Nike','Adidas','Merrel','Gucci','Sketchers'])
	const [allStyles, setAllStyles] = useState(['Slippers','Boots','Sandals','Shoes','Oxfords'])
	const [allColors, setAllColors] = useState(['Black','White','Blue','Red','Green','Grey','Orange','Cream', 'Brown'])
	// const [brands, setBrands] = useState([])
	// const [styles, setStyles] = useState([])
	// const [colors, setColors] = useState([])
	// const [brandFilters, setBrandFilters] = useState()
	// const [styleFilters, setStyleFilters] = useState()
	// const [colorFilters, setColorFilters] = useState()
	const [loading, setLoading] = useState(true)
	const [filters, setFilters] = useState(null)
	const [products, setProducts] = useState(null)


	useEffect(() => {
		axiosInstance.get('/api/products')
		  .then(res => setProducts(res.data))
	},[])

	useEffect(() => {
		if(filters !== null) {
			if (Object.keys(filters).length === 0) {
				setProducts([])
				axiosInstance.get('/api/products')
				  .then(res => setProducts(res.data))
			} else {
				let data = filters
				axiosInstance.post('/api/products/filter/', data)
				  .then(res => setProducts(res.data))
			}
		}
	},[filters])

	// useEffect(() => {
	// 	if (brands.length !== 0) {
	// 		let filter = ''
	// 		filter += `brands_${brands.join('_')}` 
	// 		setBrandFilters(filter)
	// 	}
	// 	if (styles.length !== 0) {
	// 		let filter = ''
	// 		filter += `styles_${styles.join('_')}` 
	// 		setStyleFilters(filter)
	// 	}
	// 	if (colors.length !== 0) {
	// 		let filter = ''
	// 		filter += `colors_${colors.join('_')}` 
	// 		setColorFilters(filter)
	// 	}		
	// },[brands, styles, colors]);


	// useEffect(() => {
	// 	setFilters([brandFilters, styleFilters, colorFilters].join('-'))
	// },[brandFilters, styleFilters, colorFilters])


	let active = 2;
	let items = [];
	for (let number = 1; number <= 5; number++) {
	items.push(
		<Pagination.Item key={number} active={number === active}>
		{number}
		</Pagination.Item>,
	);
	}

	function onChange(e) {
		console.log(`checked = ${e.target.checked}`);
		if (e.target.checked) {
			let filterObj = {...filters}
			filterObj[e.target.filter] ? filterObj[e.target.filter] = [...filterObj[e.target.filter], e.target.name] : filterObj[e.target.filter] = [e.target.name]
			setFilters(filterObj)
		} else {
			let filterObj = {...filters}
			filterObj[e.target.filter].length === 1 ? delete filterObj[e.target.filter] : filterObj[e.target.filter].pop(e.target.name)
			setFilters(filterObj)
		}
		// switch (e.target.filter) {
		// 	case "brands" : 
		// 		if (e.target.checked){
		// 			setBrands([...brands, e.target.name])
		// 		} else {
		// 			let filterObj = [...brands]
		// 			filterObj.pop(e.target.name)
		// 			setBrands(filterObj)
		// 		}
		// 		break;
		// 	case "styles" : 
		// 		if (e.target.checked){
		// 			setStyles([...styles, e.target.name])
		// 		} else {
		// 			let filterObj = [...styles]
		// 			filterObj.pop(e.target.name)
		// 			setStyles(filterObj)
		// 		}
		// 		break;
		// 	case "colors" : 
		// 		if (e.target.checked){
		// 			setColors([...colors, e.target.name])
		// 		} else {
		// 			let filterObj = [...colors]
		// 			filterObj.pop(e.target.name)
		// 			setColors(filterObj)
		// 		}
		// 		break;
		// 	default :
		// 		break;
		}
		
	


    return (
        <div className='mainFlex DeskOnly'>
            <div className='leftBar'>
                <div className="side border mb-1">
                    <h5 className="h4Tag">BRAND</h5>
                        <ul className="ulTag" name='brands'>
							{allBrands.map((item,value) => (
								<li><Checkbox filter="brands" name={item} onChange={onChange}>{item}</Checkbox></li>
							))}
                        </ul>
                </div>
				<div className="">
					<div className="side border mb-1">
						<h5 className="h4Tag">STYLE</h5>
						<ul className="ulTag" name='styles'>
						{allStyles.map((item,value) => (
								<li><Checkbox filter="styles" name={item} onChange={onChange}>{item}</Checkbox></li>
							))}
						</ul>
					</div>
				</div>
				<div className="">
					<div className="side border mb-1">
						<h5 className="h4Tag">COLORS</h5>
						<ul className="ulTag" name='colors'>
						{allColors.map((item,value) => (
								<li><Checkbox filter="colors" name={item} onChange={onChange}>{item}</Checkbox></li>
							))}
						</ul>
					</div>
				</div>
            </div>
            <div className='rightBar'>
                <ProductsComp products={products} />
				<div>
					<Pagination style={{paddingLeft:'350px'}}>{items}</Pagination>
				</div>
            </div>
        </div>
	)
}
