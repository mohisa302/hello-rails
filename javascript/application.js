// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"
//= require_tree .

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
