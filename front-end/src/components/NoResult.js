import React from 'react'
import results from '../@Resources/search.png';

const NoResult = () => {
    return (
        <figure id="no-results">
            <img className='no-results-screen'alt="no-results" src={results} height="200px" />
            <figcaption>Could not find any results for your search.</figcaption>
        </figure>
    )
}

export default NoResult
