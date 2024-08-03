import React from 'react'

function BusinessServiceItems({Content1, Content2 , Content3}) {
  return (
<div className='app'>
<div className='BusinessServiceItems  '>
         <h4 className='Boxh4'>{Content1}</h4>
          <h2 className='Boxh2'>{Content2}</h2>
         <div className='businessService2'>
          <p className='Boxp'>{Content3}</p>
         </div>
    </div>
</div>
    
  )
}

export default BusinessServiceItems