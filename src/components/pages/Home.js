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

function Home() {
  return (
    <div>
  < Navbar/>
    < Banner title = "This is home page"/>
   <Text/>
   < Counter/>
   <BusinessService/>
 < LastPage/>
 < LastFooter/>
 < Bottom/>
 </div>
  )
}

export default Home