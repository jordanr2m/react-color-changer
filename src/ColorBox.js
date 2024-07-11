import React from 'react'

const ColorBox = ({ color }) => {
  return (
    <section className='colorBox' style={{ backgroundColor: color}}>
        <p>{color ? color : "Empty Value"}</p>
    </section>
  )
}

export default ColorBox
