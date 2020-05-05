import React from 'react'
import Poster from './Poster'
import Blocks from './Blocks'
import SideBar from './SideBar'
import '../../index.css'

function Men() {
    return (
        <div>
            <div className='menPage' style={{}}>
                <Poster name="MEN'S"/>
                <Blocks />
                <SideBar className='desktopView'/>
            </div> 
        </div>
    )
}

export default Men