import React from 'react'
import './BusinessService.css'
import BusinessServiceItems from './BusinessServiceItems'

function BusinessService() {
  return (
    <div className='h-screen '>

<div className='BusinessServiceItems grid grid-rows-3 grid-flow-col  '>
   <BusinessServiceItems Content1 ={1} Content2 = "Passive investmentt" Content3 ="Veno enim ad minim veniam qu"/>
   <BusinessServiceItems Content1 ={2} Content2 = "HR managementt" Content3 ="Veno enim ad minim veniam qu"/>
   <BusinessServiceItems Content1 ={3} Content2 = "Cyptrocurrecyt" Content3 ="Veno enim ad minim veniam qu"/>
   <BusinessServiceItems Content1 ={4} Content2 = "Business interogationt" Content3 ="Veno enim ad minim veniam qu"/>
   <BusinessServiceItems Content1 ={5} Content2 = "Researcht" Content3 ="Veno enim ad minim veniam qu"/>
   <BusinessServiceItems Content1 ={6} Content2 = "Business interogationt" Content3 ="Veno enim ad minim veniam qu"/>
      </div>

    </div>
  )
}

export default BusinessService