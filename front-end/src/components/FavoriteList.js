import React from 'react'
import { FaHeart, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import Edit from './Edit'

const FavoriteList = ({data, deleteValue, deleteFavorite}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(null);
    function openModal(item) {
        setIsOpen(true);
        setSelected(item);
    }

    function closeModal() {
        setIsOpen(false);
        setSelected(null);
    }

    return (
        <>
            {data && data.map((item, index) =>
            <>
                <section id={`section-key-${item.workid}`} className='fav-container'>
                    <button id={`edit-key-${item.workid}`} onClick={()=>{openModal(item)}} target="_edit-favorite"><FaPencilAlt/></button>
                    {modalIsOpen ? <Edit modalIsOpen={modalIsOpen} closeModal={closeModal} item={selected}/> : null}
                    <button id={`delete-titles-${item.workid}`} onClick={()=>deleteValue(item, 'title')} target="_remove-title"><FaTrashAlt/></button>
                    <h2 className="fav-title">{item.title}</h2>
                    <button id={`delete-author-${item.workid}`} onClick={()=>deleteValue(item, 'author')} target="_remove-author"><FaTrashAlt/></button>
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
