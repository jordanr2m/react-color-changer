import React from 'react'

const ColorInput = () => {
    return (
        <form className='colorInput'>
            <input
                id='color-input'
                type='text'
                placeholder='Add color name'
                autoFocus
            />
        </form>
    )
}

export default ColorInput
