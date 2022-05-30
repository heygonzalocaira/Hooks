import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log("compoonente montado")

        return () => {
            console.log("compoonente desmontado")
        }
    }, [])

    return (
        <div><h3>Message</h3></div>
    )
}
