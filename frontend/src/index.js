import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import StateStore from './store/StateStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            state: new StateStore()
        }}>
            <App />
        </Context.Provider>
    </React.StrictMode>
);