import React from 'react';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DeckPage from './Components/DeckPage';
import Cards from './Components/Cards';
import Card  from './Components/Card';
import Deck from './Components/Deck';
import CardPageTwo  from './Components/CardPageTwo';



function App() {
  return (
      <div className="App">
       <Header />
        <Router>
          
          <Switch>
            <Route exact path="/" component={CardPageTwo} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/DeckPage" component={DeckPage} />
            <Route exact path="/Decks" component={Deck} />
            <Route exact path="/Cards" component={Cards} />
            <Route exact path="/Card" component={Card} />
            <Route exact path="/CardTwo" component={CardPageTwo} />

          </Switch>
          
        </Router>
      </div>
  );
}

export default App;


