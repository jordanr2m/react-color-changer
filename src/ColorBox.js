import React from 'react'

const ColorBox = ({ color, hexValue }) => {
  return (
    <section className='colorBox' style={{ backgroundColor: color}}>
        <p>{color ? color : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>
    </section>
  )
}

export default ColorBox
