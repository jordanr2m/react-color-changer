import React from 'react'

const ColorBox = ({ colorValue, hexValue, isDarkText }) => {
    return (
        <section
            className='colorBox'
            style={{
                backgroundColor: colorValue,
                color: isDarkText ? "black" : "white"
            }}
        >
            <p>{colorValue ? colorValue : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    )
}

export default ColorBox
