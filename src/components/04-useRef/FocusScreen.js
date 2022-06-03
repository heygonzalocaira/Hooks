import React, { useRef } from 'react'
import "../01-useState/counter.css"

const FocusScreen = () => {

    const inputRef = useRef()
    const handleClick = () => {
        inputRef.current.select()
        console.log(inputRef)
    }
    return (
        <div>
            <h1> FocusScreen </h1>
            <input
                ref = {inputRef}
                className='form-control'
                placeholder='Su nombre'
            />
            <button
                className='btn btn-outline-primary mt-5'
                onClick={handleClick}
            >
                Focus</button>
        </div>
    )
}

export default FocusScreen