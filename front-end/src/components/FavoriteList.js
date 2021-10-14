import React from 'react'
import { FaHeart, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const FavoriteList = ({data, editFavorites, deleteValue, deleteFavorite}) => {
    return (
        <>
            {data && data.map((item, index) =>
            <>
                <section key={index} className='fav-container'>
                    <button id={`edit-key-${item.workid}`} onClick={editFavorites} target="_edit-favorite"><FaPencilAlt/></button>
                    <button id={`delete-titles-${item.workid}`} onClick={deleteValue} target="_remove-title"><FaTrashAlt/></button>
                    <h2 className="fav-title">{item.title}</h2>
                    <button id={`delete-author-${item.workid}`} onClick={deleteValue} target="_remove-author"><FaTrashAlt/></button>
                    <q className="fav-author">{item.author}</q> 
                    <button id={`fav-key-${item.workid}_active`} target="_book-favorite" onClick={()=>deleteFavorite(item.workid)}><FaHeart/></button>
                </section>
                {item.review !== null ? 
                    <section className="fav-review" key={`rev-${item.workid}`}>
                        <h3>User Review</h3>
                        <p>{item.review}</p>
                    </section>
                : ''}
            </>
            )}
        </>
    );
}

export default FavoriteList
