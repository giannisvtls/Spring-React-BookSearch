import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Results from './pages/Results';

const App = () => {

    return (
        <Router>
            <Header />
                <Switch>
                    <Route path='/results'>
                        <Results />
                    </Route>
                    <Route path='/favorites'>
                        <Favorites />
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
