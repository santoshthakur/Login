import React from 'react';

import Main from './components/css/Main.css';
import Header from './components/common/Header'

import {BrowserRouter as Routers} from 'react-router-dom'
import Router from './components/router/Router';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="wrapper">
      <Routers>
        <div className="minhht">
        <Header />
        <Router />
        </div>
        <Footer />
      </Routers>
    </div>
  );
}

export default App;
