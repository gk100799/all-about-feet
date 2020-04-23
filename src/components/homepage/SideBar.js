import React from 'react'
import './menBar.css'
import ProductsComp from './ProductsComp'
import Pagination from 'react-bootstrap/Pagination'

export default function SideBar() {
	let active = 2;
	let items = [];
	for (let number = 1; number <= 5; number++) {
	items.push(
		<Pagination.Item key={number} active={number === active}>
		{number}
		</Pagination.Item>,
	);
	}
    return (
        <div className='mainFlex'>
            <div className='leftBar'>
                <div className="side border mb-1">
                    <h5 className="h4Tag">BRAND</h5>
                        <ul className="ulTag">
                            <li><a href="#">Nike</a></li>
                            <li><a href="#">Adidas</a></li>
                            <li><a href="#">Merrel</a></li>
                            <li><a href="#">Gucci</a></li>
                            <li><a href="#">Skechers</a></li>
                        </ul>
                </div>
				<div className=''>
					<div className="side border mb-1">
						<h5 className="h4Tag">SIZE</h5>
						<ul className="ulTag flexUl">
							<li><a href="#">7</a></li>
							<li><a href="#">7.5</a></li>
							<li><a href="#">8</a></li>
							<li><a href="#">8.5</a></li>
							<li><a href="#">9</a></li>
							<li><a href="#">9.5</a></li>
							<li><a href="#">10</a></li>
							<li><a href="#">10.5</a></li>
							<li><a href="#">11</a></li>
							<li><a href="#">11.5</a></li>
							<li><a href="#">12</a></li>
							<li><a href="#">12.5</a></li>
							<li><a href="#">13</a></li>
							<li><a href="#">13.5</a></li>
							<li><a href="#">14</a></li>
						</ul>
					</div>
				</div>
				<div className="">
					<div className="side border mb-1">
						<h5 className="h4Tag">STYLE</h5>
						<ul className="ulTag">
							<li><a href="#">Slip Ons</a></li>
							<li><a href="#">Boots</a></li>
							<li><a href="#">Sandals</a></li>
							<li><a href="#">Lace Ups</a></li>
							<li><a href="#">Oxfords</a></li>
						</ul>
					</div>
				</div>
				<div className="">
					<div className="side border mb-1">
						<h5 className="h4Tag">COLORS</h5>
						<ul className="ulTag">
							<li><a href="#">Black</a></li>
							<li><a href="#">White</a></li>
							<li><a href="#">Blue</a></li>
							<li><a href="#">Red</a></li>
							<li><a href="#">Green</a></li>
							<li><a href="#">Grey</a></li>
							<li><a href="#">Orange</a></li>
							<li><a href="#">Cream</a></li>
							<li><a href="#">Brown</a></li>
						</ul>
					</div>
				</div>
            </div>
            <div className='rightBar'>
                <ProductsComp />
				<div>
					<Pagination style={{paddingLeft:'350px'}}>{items}</Pagination>
				</div>
            </div>
        </div>
	)
}
