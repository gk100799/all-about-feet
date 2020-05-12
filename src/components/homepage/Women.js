import React from 'react'
import Poster from './posterWomen'
import Blocks from './BlocksWomen'
import SideBar from './SideBar'

export default function Women() {
    return (
        <div>
            <div className='menPage' style={{}}>
                <Poster name="WOMEN'S"/>
                {/* <Blocks /> */}
                <SideBar />
            </div>
        </div>
    )
}
