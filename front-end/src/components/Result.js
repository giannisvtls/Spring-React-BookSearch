import React from 'react';
import { FaHeart } from 'react-icons/fa'

const Result = ({ data }) => {
    console.log(data.work)
    return (
        <>
            {data.work && data.work.map((item, index) => 
                <section className='book-container' key={index}>
                    <section className='book-title'>
                        <button id={index} target="_book-favorite"><FaHeart/></button>
                        <h2 className='book-title'>{item.titleweb}</h2>
                        <q className="book-author">Written By: {item.authorweb}</q>
                    </section>
                    {Array.isArray(item.titles.isbn) ? 
                        <figure><img className="book-picture" alt={item.workid} src={`https://reststop.randomhouse.com/resources/titles/${item.titles.isbn[0].$}`} height="200px"/></figure>
                    : <figure><img className="book-picture" alt={item.workid} src={`https://reststop.randomhouse.com/resources/titles/${item.titles.isbn.$}`} height="200px"/></figure>}
                </section>
            )}
        </>
    );

};

export default Result;