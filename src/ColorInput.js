import React from 'react'
import colorNames from 'colornames';

const ColorInput = ({ 
    colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText 
}) => {
    return (
        <form className='colorInput' onSubmit={e => e.preventDefault()}>
            <label htmlFor='addItem'>Add color name</label>
            <input
                autoFocus
                required
                id='color-input'
                type='text'
                placeholder='Add color name'

                // CONTROL the input
                value={colorValue}
                onChange={e => {
                    setColorValue(e.target.value);
                    // installed & imported colornames package that translates color names into hex codes
                    setHexValue(colorNames(e.target.value));
                }}
            />
            {/* Button to toggle text color */}
            <button
                type='button'
                onClick={() => setIsDarkText(!isDarkText)} // set it to the opposite to toggle
            >
                Toggle Text Color
            </button>
        </form>
    )
}

export default ColorInput
