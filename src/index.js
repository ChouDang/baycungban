import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './assets/font/Fontspring-DEMO-biennale-book.otf'

import 'tw-elements';


// setup redux
import { Provider } from 'react-redux'
import { store } from './redux/ConfigStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

