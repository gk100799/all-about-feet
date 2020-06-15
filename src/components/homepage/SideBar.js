import React, { useState, useEffect } from 'react'
import './menBar.css'
import ProductsComp from './ProductsComp'
import Pagination from 'react-bootstrap/Pagination'
import { Checkbox } from 'antd';
import {axiosInstance} from '../../helpers'
import { css } from "@emotion/core";
import {ScaleLoader} from 'react-spinners'
import { withRouter,Link, Redirect } from 'react-router-dom'

function SideBar(props) {
	const [allBrands, setAllBrands] = useState(['Nike','Adidas','Merrell','Gucci','Skechers'])
	const [allStyles, setAllStyles] = useState(['Slip Ons','Boots','Sandals','Lace Ups','Oxfords'])
	const [allColors, setAllColors] = useState(['Black','White','Blue','Red','Green','Grey','Orange','Cream','Brown'])
	const [loading, setLoading] = useState(true)
	const [filters, setFilters] = useState({
		brands : [],
		styles: [],
		colors: [],
	})
	const [products, setProducts] = useState(null)
	const [gender, setGender] = useState()

	const override = css`
	padding-top: 70px;
	text-align: center;
	align-items: center;
	`;

	useEffect(() => {
		setGender(props.location.pathname.slice(1))
	},[])

	useEffect(() => {
		let data = filters
		setProducts([])
		setLoading(true)
		axiosInstance.post('/api/products/filter/', data)
			.then(res => setProducts(res.data))
			.then(res => setLoading(false))
	},[filters])


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
			filterObj[e.target.filter].push(e.target.name)
			setFilters(filterObj)
		} else {
			let filterObj = {...filters}
			// filterObj[e.target.filter].pop(e.target.name)
			var index = filterObj[e.target.filter].indexOf(e.target.name);
			filterObj[e.target.filter].splice(index,1)
			setFilters(filterObj)
		}
	}

	const onGenderChange = (e) => {
		props.history.push(`${e.target.name}`)
	}

    return (
        <div className='mainFlex DeskOnly'>
            <div className='leftBar'>
				<div className="side border mb-1">
                    <h5 className="h4Tag">GENDER</h5>
					<ul className="ulTag" name='gender'>
						<li><Checkbox checked={gender==="men" ? true : false} filter="gender" name="men" onChange={onGenderChange}>Male</Checkbox></li>
						<li><Checkbox checked={gender==="women" ? true : false} filter="gender" name="women" onChange={onGenderChange}>Female</Checkbox></li>
					</ul>
                </div>
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
				<ScaleLoader
                    css={override}
                    height={60}
                    width={5}
                    color={"#123abc"}
                    loading={loading}
                />
                <ProductsComp products={products} />
				{/* <div>
					<Pagination style={{paddingLeft:'350px'}}>{items}</Pagination>
				</div> */}
            </div>
        </div>
	)
}

export default withRouter(SideBar)