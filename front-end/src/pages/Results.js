import React, { useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import Result from '../components/Result';
import SearchBar from '../components/SearchBar';

const Results = ({deleteFavorite , addFavorite}) => {
    const location = useLocation();
    const userKeyword = location.state;
    const [books, setBooks] = useState([]);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        try {
            const res = await fetch('https://reststop.randomhouse.com/resources/works?start=0&max=10&expandLevel=1&search=' + encodeURIComponent(userKeyword), {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await res.json();
            if(data.work !== undefined) setBooks(data);
            if(data.work === undefined) setBooks(['0'])
        } catch (error) {
            setIsError(true);
            console.log(error);
        };
    };
    useEffect(() => {  
        fetchData()
        // eslint-disable-next-line
    }, [userKeyword]);

    return (
        <>
        <article id="title-list">
            {books && <Result data={books} deleteFavorite={deleteFavorite} addFavorite={addFavorite}/>}
            {isError && <div>Error fetching data.</div>}
        </article>
        <aside id='sidebar-aside'>
            <SearchBar title='Search'/>
        </aside>
        </>
    );
}

export default Results 
