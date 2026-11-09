import React, { useState } from 'react'
import Button from './component/Button'
import Colorbox from './component/Colorbox'
import './App.css'

function App() {

  const colors=['blue','orange','red','green','black']
  
  const [selectedcolor,setSelectedColor]=useState('transparent')

  return (
    <>

    <div className=' m-1'> 

     <h1 className='text-purple-600'>Color Switcher</h1>

    {
      colors.map((item)=>{
    
      return (
      <Button key={item} color={item} setSelectedColor={setSelectedColor}>
        {item}
      </Button>
        )
      })
    }  

     </div>

      <Colorbox color={selectedcolor}/>

    
    </>
  )  
}
export default App
