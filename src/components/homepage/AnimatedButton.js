import React from 'react'
import '../../index.css'

export default function AnimatedButton(props) {
    return (
    <div style={{textAlign:'center', padding:'40px'}}>
      <button className="buttonClass" >{props.name}</button>
    </div>
    )
}
