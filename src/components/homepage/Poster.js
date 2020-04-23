import React from 'react'
import coverImg from '../../img/cover-img-1.jpg'
import '../../index.css'
import { Button } from 'react-bootstrap'
 
export default function Poster(props) {
    return (
        <div >
            <div className="poster" >
                <div className="posterInside">
                    {props.name}
                </div>
                <div className="bottomBar">
                    <div className='buttonGroup1'>
                        <Button size="sm" variant="link" className="aTag">NEW ARRIVAL</Button>
                        <Button size="sm" variant="link" className="aTag">BEST SELLERS</Button>
                        <Button size="sm" variant="link" className="aTag">SALE</Button>
                    </div>
                </div>
            </div> 
            </div>
    )
}
