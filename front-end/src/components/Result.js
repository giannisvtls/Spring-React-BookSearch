import React, { useState, useEffect} from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import NoResult from './NoResult';

const Result = ({ data, deleteFavorite, addFavorite}) => {
    const [favorites] = useState([]);
    const fetchData = async () => {
        fetch('http://localhost:8080/api/favorites', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data =>{
            data.forEach((item) => {
                favorites.push(item.workid)
            })
        })
    };
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [favorites]);

    const checkExistance = (workid) =>{
        if(!favorites.includes(workid)) return true
        if(favorites.includes(workid)) return false
    }
    return (
        <>
            { data[0] !== '0' ? (
                <>
                {data.work && data.work.map((item, index) => 
                    <section className='book-container' key={index}>
                        <section className='book-title'>
                            {checkExistance(item.workid) ? <button id={`${item.workid}`} target="_book-favorite" onClick={()=>addFavorite(item)}><AiOutlineHeart/></button> : <button id={`${item.workid}_active`} target="_book-favorite" onClick={()=>deleteFavorite(item.workid)}><AiFillHeart/></button>}
                            <h2 className='book-title'>{item.titleweb}</h2>
                            <q className="book-author">Written By: {item.authorweb}</q>
                        </section>
                        {Array.isArray(item.titles.isbn) ? 
                            <figure><img className="book-picture" alt={item.workid} src={`https://reststop.randomhouse.com/resources/titles/${item.titles.isbn[0].$}`} height="200px"/></figure>
                        : <figure><img className="book-picture" alt={item.workid} src={`https://reststop.randomhouse.com/resources/titles/${item.titles.isbn.$}`} height="200px"/></figure>}
                    </section>
                )}
                </>
            ):(
                <NoResult />
            )}
        </>
    );
};

export default Result;