
import React, { useLayoutEffect, useRef } from 'react'
import useCounter from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import "./layout.css"


const Layout = () => {
    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { quote } = !!data && data[0];

    const pTag = useRef()
    useLayoutEffect(() => {
        console.log(pTag.current?.getBoundingClientRect())
    },[quote])
    return (
        <div>
            <h1>  Layout   </h1>
            <hr />
            {
                loading
                    ?
                    (
                        <div className='alert alert-info text-center'>
                            loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className='blockquote text-right'>
                            <p
                                ref={pTag}
                                className='mb-0'
                            >
                                {quote}
                            </p>

                        </blockquote>
                    )
            }
            <button
                className='btn btn-primary'
                onClick={increment}
            >
                Siguiente quote
            </button>
        </div>
    )
}

export default Layout