import React from 'react'
import brand_1 from '../../img/brand-1.jpg'
import brand_2 from '../../img/brand-2.jpg'
import brand_3 from '../../img/brand-3.jpg'
import brand_4 from '../../img/brand-4.jpg'
import brand_5 from '../../img/brand-5.jpg'
import '../../index.css'

export default function Partners() {
    return (
            <div>
			<div>
                <div style={{padding:'80px 0px 10px 0px'}}>
                    <h2 style={{color:'rgba(0,0,0,0.3)', fontSize:'20px',fontWeight:'bold', textAlign:'center', cursor:'default'}}>TRUSTED PARTNERS</h2>
                </div>
				<div class="Partners" style ={{}}>
					<div class="">
						<img src={brand_1} class="imgPartner" alt="Free html4 bootstrap 4 template"></img>
					</div>
					<div class="">
						<img src={brand_2} class="imgPartner" alt="Free html4 bootstrap 4 template"/> 
					</div>
					<div class="">
						<img src={brand_3} class="imgPartner" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div class="">
						<img src={brand_4} class="imgPartner" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div class="">
						<img src={brand_5} class="imgPartner" alt="Free html4 bootstrap 4 template"/>
					</div>
				</div>
				{/* <div class="" style ={{padding:'80px 120px',display:'flex', justifyContent:'space-evenly'}}>
					<div class="col partner-col text-center">
						<img src={brand_1} class="img-fluid" alt="Free html4 bootstrap 4 template"></img>
					</div>
					<div class="col partner-col text-center">
						<img src={brand_2} class="img-fluid" alt="Free html4 bootstrap 4 template"/> 
					</div>
					<div class="col partner-col text-center">
						<img src={brand_3} class="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div class="col partner-col text-center">
						<img src={brand_4} class="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div class="col partner-col text-center">
						<img src={brand_5} class="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
				</div> */}
			</div>
		</div>
    )
}
