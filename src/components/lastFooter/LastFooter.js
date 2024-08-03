import React from 'react'
import './LastFooter.css'
import image1 from '../../image/footerlogo-1.png'
import Image2 from '../../image/footerlogo-2.png'
import Image3 from '../../image/footerlogo-3.png'



function LastFooter() {
  return (
<div class="grid-container ">
  <div class="grid-item bg-slate-200 px-28 py-14">
<h1 className='LastFooter-h1'>Halstein</h1>
<p className='LastFooter-p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br></br>
Itaque voluptatem facilis corrupti dicta.<br></br>
Cupiditate magni, modi rem, Nam iusto accusantium consequuntur?</p>
<div className='icons flex gap-10'>
<img className='iconsItems' src={image1} alt='image'/>
<img  className='iconsItems' src={Image2} alt='image'/>
<img  className='iconsItems' src={Image3} alt='image'/>
</div>
</div>
  <div class="grid-item flex pt-20 pl- gap-28">
<div className='gridItems'>
    <h2 className='gridItems-1-h2'>Halstein</h2>
    <h1  className='gridItems-1-h1' >Privacy</h1>
    <h1  className='gridItems-1-h1'  >Conditions</h1>
    <h1 className='gridItems-1-h1'  >Offices</h1>
    <h1 className='gridItems-1-h1'>Careers</h1>
</div>
<div className='gridItems'>
    <h2 className='gridItems-1-h2' >FaQ</h2>
    <h1  className='gridItems-1-h1' > Privacy </h1>
    <h1 className='gridItems-1-h1'  >Offices</h1>
    <h1 className='gridItems-1-h1' >Careers</h1>
    <h1 className='gridItems-1-h1' >Conditions</h1>
</div>
<div className='gridItems'>
    <h2 className='gridItems-1-h2' >Subscribe</h2>
    <input  type='Gmail ' placeholder='E-mail*' />
</div>
  </div>
</div>

  )
}

export default LastFooter