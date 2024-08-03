import React from 'react'
import './Counter.css'
import CounterNumber from './CounterNumber'

function Counter() {
  return (
    <div className='counter h-screen text-white flex justify-between pl-20 pr-24 py-40'>
        <div className='counterItems'>
            <h1 className='h1'>ALWAYS PROFESSIONAL</h1>
            <h2 className='h2'>Well make sure your hard <br></br> work succeeds.</h2>
            <h3 className='h3'>Duis sid elicit deus, venitas lorem ipsum dolor sit amet credula non postero elam.</h3>
            <button className='CounterButton   px-10  py-2 rounded-md mt-6'>VIEW MORE</button>
        </div>
          <div className="App ">
      <div className="container">
        <div className="box">
          80
          <div className="label">Clients</div>
        </div>
        <div className="box">
          5
          <div className="label">Years <br></br>  Experience</div>
        </div>
        <div className="box">
          250
          <div className="label">Projects</div>
        </div>
        <div className="box">
          45
          <div className="label">Field Experts</div>
        </div>
      </div>
    </div>
        </div>
  
  )
}

export default Counter