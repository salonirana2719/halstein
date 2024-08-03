import React from 'react'
import Home from './components/pages/Home'
import { About } from './components/pages/About'
import { BrowserRouter, Route , Routes } from 'react-router-dom'



function App() {
  return (
 <div>

 < BrowserRouter>
< Routes>
<Route path='/' element = {<Home/>}   />
<Route path='/about' element = {<About/>}   />
</Routes>
 </BrowserRouter>
 </div>
 
  )
}

export default App