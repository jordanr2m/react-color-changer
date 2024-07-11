import React from 'react'
import colorNames from 'colornames';

const ColorInput = ({ color, setColor, setHexValue }) => {
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
                value={color}
                onChange={e => {
                    setColor(e.target.value);
                    // installed & imported colornames package that translates color names into hex codes
                    setHexValue(colorNames(e.target.value));
                }}
            />
        </form>
    )
}

export default ColorInput
