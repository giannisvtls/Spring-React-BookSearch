import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Results from './pages/Results';


const App = () => {
    const deleteFavorite = (id) => {
        fetch(`http://localhost:8080/api/favorites/${id}`, {
            method: 'DELETE'
        }).then(()=>window.location.reload())
        
    }

    const addFavorite = (item) => {
        fetch('http://localhost:8080/api/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                workid: item.workid, 
                title: item.titleweb,
                author: item.authorweb
            })
        }).then(()=>window.location.reload())
    }
    return (
        <Router>
            <Header />
                <Switch>
                    <Route path='/results'>
                        <Results deleteFavorite={deleteFavorite} addFavorite={addFavorite}/>
                    </Route>
                    <Route path='/favorites'>
                        <Favorites deleteFavorite={deleteFavorite}/>
                    </Route>
                    <Route path='/'>
                        <Search />
                    </Route>
                </Switch>
            <Footer />
        </Router>
    );
}
export default App;
