import React, { useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import FavoriteList from '../components/FavoriteList'

const Favorites = ({deleteFavorite}) => {
    const [favorites, setFavorites] = useState([]);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        try {
            fetch('http://localhost:8080/api/favorites', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res)=> res.json())
            .then(data => {
                setFavorites(data)
            });
        } catch (error) {
            setIsError(true);
            console.log(error);
        };
    };
    useEffect(() => {  
        fetchData()
        // eslint-disable-next-line
    }, []);
    const deleteValue = (item, field) =>{
        console.log(item)
        console.log(field)
        if(field === 'author') item.author = '';
        if(field === 'title') item.title = '';
        fetch(`http://localhost:8080/api/favorites/${item.workid}/${field}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                workid: item.workid, 
                title: item.titleweb,
                author: item.authorweb
            })
        })
        .then(response => response.json())
        .then(() => window.location.reload());
    }
    return (
        <>
        <article id="fav-list">
            {favorites && <FavoriteList data={favorites} deleteValue={deleteValue} deleteFavorite={deleteFavorite}/>}
            {isError && <div>Error fetching data.</div>}
        </article>
        <aside id='sidebar-aside'>
            <SearchBar title='Search'/>
        </aside>
        </>
    )
}

export default Favorites
