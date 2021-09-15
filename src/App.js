import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Search from './components/search/Search';
import User from './components/User';
import Footer from './components/Footer'

const App = () => {
    return (
        <div className="main-app">
            <header className="main-header">
                <h1><Link to="/">Teste GitHub SLC</Link></h1>
            </header>
            <main className="main-content">
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route path="/user/:username" component={User} />                    
                </Switch>
            </main>
			<Footer/>
 
        </div>
    );
}

export default App;
