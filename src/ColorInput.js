import React from 'react'

const ColorInput = ({ color, setColor }) => {
    return (
        <form className='colorInput'>
            <label htmlFor='addItem'>Add color name</label>
            <input
                id='color-input'
                type='text'
                placeholder='Add color name'
                autoFocus

                value={color}
                onChange={e => setColor(e.target.value)}
            />
        </form>
    )
}

export default ColorInput
