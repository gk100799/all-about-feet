import React from 'react'
import coverImg from '../../img/cover-img-1.jpg'
import '../../index.css'

 
export default function Poster(props) {
    return (
        <div >
            <div className={"imageOut"}>
                <img className="imageItSelf" src={coverImg} alt="" />
                <h2 className="posterIn again"><span>READY <br/>FOR SPORT</span></h2>
            </div>

            {/* <div className="posterWomen" >
                <div className="posterInsideWomen">
                    {props.name}
                </div>
                <div className="bottomBar">
                    <div className='buttonGroup1'>
                        <Button size="sm" variant="link" className="aTag">NEW ARRIVAL</Button>
                        <Button size="sm" variant="link" className="aTag">BEST SELLERS</Button>
                        <Button size="sm" variant="link" className="aTag">SALE</Button>
                    </div>
                </div>
            </div>  */}
            </div>
    )
}
