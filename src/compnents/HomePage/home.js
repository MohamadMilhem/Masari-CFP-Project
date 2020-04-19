import React from 'react';
import './homeCSS.css';
import { Link } from "react-router-dom";

function HomePage() {
  return (
        <header>
            <div className = "row">
                <div className= "loge">
                <img  className = "logeStyle"  src="logo1.png" alt="logo"/>
                </div>
              
                <ul className="main-nav">
		            <li className="active"><Link to="/">Home </Link></li>
		            <li><Link to='/Contact'> About </Link></li>
		            <li><a herf="#">Search </a></li>
		            <li><a herf="#"> Compair </a></li>
		            <li><a herf="#"> Evaluation </a></li>
                </ul>
               
            </div>
            <div className="hero">
                <h1>Welcome To Ta5asose</h1>
          </div>
        </header>
  );
}

export default HomePage;
