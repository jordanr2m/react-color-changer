import React from 'react'

const ColorBox = ({ color }) => {
  return (
    <div className='colorBox' style={color ? { backgroundColor: color} : null}>
        <p>{color ? color : "Empty Value"}</p>
    </div>
  )
}

export default ColorBox
