import React, { useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import FavoriteList from '../components/FavoriteList'

const Favorites = ({deleteFavorite}) => {
    const [favorites, setFavorites] = useState([]);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        try {
            const res = await fetch('http://localhost:8080/api/favorites', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            setFavorites(data)
        } catch (error) {
            setIsError(true);
            console.log(error);
        };
    };
    useEffect(() => {  
        fetchData()
        // eslint-disable-next-line
    }, []);

    const editFavorites = (e) => {
        console.log(e)
    }

    const deleteValue = (e) =>{
        console.log(e)
    }
    return (
        <>
        <article id="fav-list">
            {favorites && <FavoriteList data={favorites} editFavorites={editFavorites} deleteValue={deleteValue} deleteFavorite={deleteFavorite}/>}
            {isError && <div>Error fetching data.</div>}
        </article>
        <aside id='sidebar-aside'>
            <SearchBar title='Search'/>
        </aside>
        </>
    )
}

export default Favorites
