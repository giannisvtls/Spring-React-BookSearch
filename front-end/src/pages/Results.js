import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Result from '../components/Result';
import SearchBar from '../components/SearchBar';

const Results = () => {
    const location = useLocation();
    const userKeyword = location.state;

    const [books, setBooks] = useState([]);
    const [isError, setIsError] = useState(false);

    const fetchData = () => {
        console.log(userKeyword)
        fetch('https://reststop.randomhouse.com/resources/works?start=0&max=10&expandLevel=1&search=' + encodeURIComponent(userKeyword), {
        headers: {
            'Accept': 'application/json'}
        })
        .then(res => res.json())
        .then((data) => {
            setBooks(data);
        })
        .catch((error) => {
            setIsError(true);
            console.log(error);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <article id="title-list">
            {books && <Result data={books} />}
            {isError && <div>Error fetching data.</div>}
        </article>
        <aside id='sidebar-aside'>
            <SearchBar title='Search'/>
        </aside>
        </>
    );
}

export default Results 
