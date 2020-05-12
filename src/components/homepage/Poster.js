import React from 'react'
import coverImg from '../../img/cover-img-1.jpg'
import '../../index.css'
import { Button } from 'react-bootstrap'
import menPoster from '../../img/men-poster1.jpg' 
 
export default function Poster(props) {
    return (
        <div className={"imageOut"}>
                <img className="imageItSelf" src={menPoster} alt="" />
                <h2 className="posterIn"><span>BOUNCE <br />IN YOUR STEP</span></h2>
        </div>
    )
}
