import React from 'react'
import casuals from '../../img/casuals.jpg'
import dress from '../../img/women.jpg'
import sports from '../../img/sports.jpg'
import "../../index.css";

export default function Blocks() {
    return (
        // <div className='blocks'>
        //     <div className='blocksChild'>
        //     <img className="imagePos" src={casuals} alt= '' />
        //     <div className='buttonParent'>
        //         <h3 className='fontSize'> CASUALS </h3>
        //         <div className='buttonclasskabaap'><button className="buttonClass" style={{fontSize:'16px'}} >Shop Now</button></div>
        //     </div>
        //     </div>
        // </div>
        <div className='blocks'>
            <div className="parentkabaap"><div className='parentWala'>
                <div className="imgContainer"><img className="imgItIs" src={casuals} /> </div>
                <div className='childWala'>
                    <h3 className='fontSize'> CASUALS </h3>
                    <div className='buttonclasskabaap'><button className="buttonClass" style={{fontSize:'16px'}} >Shop Now</button></div>
                </div>
            </div></div>
            <div className="parentkabaap"><div className='parentWala' >
                <div className="imgContainer"><img className="imgItIs" src={dress} /> </div>
                <div className='childWala'>
                    <h3 className='fontSize'> DRESS </h3>
                    <div className='buttonclasskabaap'><button className="buttonClass" style={{fontSize:'16px'}} >Shop Now</button></div>
                </div></div>
            </div>
            <div className="parentkabaap"><div className='parentWala'>
                <div className="imgContainer"><img className="imgItIs" src={sports} /> </div>
                <div className='childWala'>
                    <h3 className='fontSize'> SPORTS </h3>
                    <div className='buttonclasskabaap'><button className="buttonClass" style={{fontSize:'16px'}} >Shop Now</button></div>
                </div></div>
            </div>
        </div>
    )
}
