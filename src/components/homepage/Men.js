import React from 'react'
import Poster from './Poster'
import Blocks from './Blocks'
import SideBar from './SideBar'

function Men() {
    return (
        <div>
            <div className='menPage' style={{}}>
                <Poster name="MEN'S"/>
                <Blocks />
                <SideBar />
            </div>  
            
        </div>
    )
}

export default Men