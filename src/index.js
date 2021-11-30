import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import Router from './components/Router';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
