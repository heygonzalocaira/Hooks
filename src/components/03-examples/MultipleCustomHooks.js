
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import "../02-useEffect/effects.css"


const MultipleCustomHooks = () => {

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    const { author, quote } = !!data && data[0];
    return (
        <div>
            <h1>  Breaking Bad Quotes   </h1>
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
                            <p className='mb-0'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )
            }
            <button className='btn btn-primary'>Siguiente quote</button>
        </div>
    )
}

export default MultipleCustomHooks