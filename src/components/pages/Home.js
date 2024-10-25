import React from 'react'
import Navbar from '../Navbar'
import Banner from '../Banner'
import Text from '../Text/Text'
import Counter from '../counter/Counter'
import BusinessService from '../businessService/BusinessService'
import LastPage from '../LastPage/LastPage'
import LastFooter from '../lastFooter/LastFooter'
import Bottom from '../bottom/Bottom'
import BannerImage from '../..'
import Footer from '../footer/Footer'
import SuccessSection from '../successSection/SuccessSection'
import Business from '../business/Business'

function Home() {
  return (
    <div>
  {/* < Navbar/> */}
    {/* < Banner title = "This is home page"/> */}
   <Text/>
   {/* < Counter/> */}
   <SuccessSection/>
   {/* <BusinessService/> */}
   <Business/>
 {/* < LastPage/> */}
 {/* < LastFooter/> */}
 {/* < Bottom/> */}
 <Footer/>
 </div>
  )
}

export default Home