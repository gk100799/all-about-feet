import React from 'react'
import menImg from '../../img/men.jpg'
import womenImg from '../../img/women.jpg'
// import '../../index.css'

function MenWomen() {
    return (
			<div className="menwomen" style={{}}>
				<div className="column" >
					<a href="/men" className="boxMenWomen" style={{}}><img style={{}} className="imgMW" src={menImg}/></a>
					<div><a href="#" style={{color:"black",textAlign:"center"}}><h2 className="h2MenWomen" style={{paddingTop:'25px'}}>Shop Men's Collection</h2></a></div>
				</div>
				<div className="column">
					<a href="/women" className="boxMenWomen" style={{}}><img style={{}} className="imgMW" src={womenImg}/></a>
					<div><a href="#" style={{color:"black",textAlign:"center"}}><h2 className="h2MenWomen" style={{paddingTop:'25px'}}>Shop Women's Collection</h2></a></div>
				</div>
			</div>
    )
}

export default MenWomen
