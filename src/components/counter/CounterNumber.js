import React from 'react'
import './Counter.css'

function CounterNumber({Number ,Description}) {
  return (
    <div className='counterNumbers'>
<div className='Numbers'>
    <h1 className='Counter-h1'>{Number}</h1>
    <h2 className='Counter-h2'>{Description}</h2>
</div>
    </div>
  )
}

export default CounterNumber