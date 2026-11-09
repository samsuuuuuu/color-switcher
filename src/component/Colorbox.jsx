import React from 'react'

const Colorbox = ({color}) => {
  return (
    <div style={{
      backgroundColor:color
    }}
    
    className='w-120 h-80 m-auto border-4 text-white rounded-2xl content-center'>
      Colorbox
    </div>
  )
}

export default Colorbox
