import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {useHistory, useLocation} from 'react-router-dom';

const SearchBar = ({ title }) => {
    const history = useHistory();
    const location = useLocation();

    const handleOnClick = (e) => {
        if(location.pathname !== '/results') history.push('/results', e.target[0].value);
        e.preventDefault()
        history.push('/results', e.target[0].value)
    }
    return (
        <form id='search-center' className='search' name='search-form' onSubmit={handleOnClick} >
                <label htmlFor="search-bar">{title}</label>
                <input id='search-bar' type='text' name='search-input' placeholder='Title'></input>
                <button id="submit-btn" type='submit'><FaSearch/></button>
            </form>
    )
}

export default SearchBar
