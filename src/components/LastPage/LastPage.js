



import React from 'react'
import Image from '../../image/girl.jpg'
import './LastPage.css'

function LastPage() {
  return (
    <div className='MainDiv  flex'>
        <div className='girlImage'>
            <img className='girlImage1' src={Image}></img>
        </div>
        <div className='LastPageItems '>
          <h1 className='lastpage-h1'>What will investments look <br></br>
          like   after the pandemic year?</h1>
        <p className='lastPage-p'>
        Duis aute irure dolor in reprehenderit in voluptate velit <br></br>
        esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <h2 className='lastpage-h2'>Apply for online  <br></br> conference <br></br>
        "Investments of the <br></br> future"</h2>
        </div>
    </div>
  )
}

export default LastPage