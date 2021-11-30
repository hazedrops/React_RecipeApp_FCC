import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from '../App';
import Recipe from './Recipe';

const Router = () => {
  return (    
    <Routes>
      <Route exact path="/" component={App} />
      <Route path="/recipe" component={Recipe} />
    </Routes>
  );
}

export default Router;