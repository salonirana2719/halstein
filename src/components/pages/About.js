import React from 'react'
import Navbar from '../Navbar'
import Banner from '../Banner'
import Counter from '../counter/Counter'
import BusinessService from '../businessService/BusinessService'
import LastFooter from '../lastFooter/LastFooter'
import Bottom from '../bottom/Bottom'
import BannerImage  from '../../image/Background1.jpg'

export const About = () => {
  return (
    <div>
    < Navbar/>
    < Banner title = "This is about page" image = {BannerImage}/>
     < Counter/>
     <BusinessService/>
   < LastFooter/>
   < Bottom/>
   </div>
  )
}
