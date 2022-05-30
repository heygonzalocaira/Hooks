import React, { useEffect, useState } from 'react'

import "./effects.css"

const FromWithCustomHook = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password : '',
    })

    const { name, email,password } = formState;
    useEffect(() => {
        console.log("Hey!")
    }, [])
    useEffect(() => {
        console.log("formState cambio")
    }, [formState])
    useEffect(() => {
        console.log("Email cambio")
    }, [email])

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <    >
            <h1>
                Form with Custom Hook

            </h1>
            <hr />
            <div className='form-group'>
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

            </div>
            <div className='form-group'>
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="********"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

        </>
    )
}

export default FromWithCustomHook