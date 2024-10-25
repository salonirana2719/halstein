import React from 'react'
import BannerImage from '../image/Banner-image.jpg'
import './Banner.css'


function Banner() {
  return (
    <div className='bannerImage'>
  <img src={BannerImage} alt='Banner' className='bannerImageImg'/>
  
  <div className='BannerItems'>
    <h1 className='BannerItem1'>EXPERT GUIDANCE</h1>
  </div>
  
  <div className='BannerItems2'>
    <h5 className='BannerItem5'>Latest Strategies</h5>
  </div>
  
  <div className='BannerButton'>
    <button className='Button px-4 py-2'>See More</button>
  </div>
  
</div>

  
  )
}

export default Banner