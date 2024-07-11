import React from 'react'

const ColorInput = ({ color, setColor }) => {
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
                onChange={e => setColor(e.target.value)}
            />
        </form>
    )
}

export default ColorInput
