import React from 'react'

 const Button=({color,setSelectedColor,children})=>{

  function setColor(){
    setSelectedColor(color)
  }
  return (
    <button onClick={setColor} className='rounded-2xl m-3 w-25 text-white' style={{backgroundColor:color}}>
    {children}
    </button>
  )
}
export default Button