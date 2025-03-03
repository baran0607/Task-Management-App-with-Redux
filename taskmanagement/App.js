// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import Todo from './components/Todo';



function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Todo/>
            </div>
        </Provider>
    );
}

export default App;
