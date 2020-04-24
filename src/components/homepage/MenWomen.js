import React from 'react'
import menImg from '../../img/men.jpg'
import womenImg from '../../img/women.jpg'
import '../../index.css'
import {Link} from 'react-router-dom'

function MenWomen() {
    return (
			<div className="menwomen" style={{}}>
				<div className="column" >
					<a href="/men" className="boxMenWomen" style={{}}><Link to='/men' className="linkTag"><img style={{}} className="imgMW" src={menImg}/></Link></a>
					<div><a style={{color:"black",textAlign:"center"}}><Link to='/men' className="linkTag"><h2 className="h2MenWomen" style={{paddingTop:'25px'}}>Shop Men's Collection</h2></Link></a></div>
				</div>
				<div className="column">
					<a href="/women" className="boxMenWomen" style={{}}><Link to='/women' className="linkTag"><img style={{}} className="imgMW" src={womenImg}/></Link></a>
					<div><a style={{color:"black",textAlign:"center"}}><Link to='/women' className="linkTag"><h2 className="h2MenWomen" style={{paddingTop:'25px'}}>Shop Women's Collection</h2></Link></a></div>
				</div>
			</div>
    )
}

export default MenWomen
