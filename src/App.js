import React from 'react';
import HomePage from './compnents/HomePage/home';
import ContactPage from './compnents/ContactPage/Contact';
import { useParams } from "react-router";
import { BrowserRouter as Router,Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component = {HomePage}></Route>
      <Route exact path="/Contact" component={ContactPage}></Route>
    </div>
    </Router>
  );
}

export default App;
