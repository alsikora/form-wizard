import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import './index.css';
import Home from './pages/home/Home';
import Form from './pages/form/Form';
import Summary from './pages/summary/Summary';
import ValidationError from './pages/error/ValidationError';
import NotFound from './pages/error/NotFound';
import reducer from './store/reducer';

const store = configureStore({reducer})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="form" element={<Form/>}/>
                    <Route path="summary" element={<Summary/>}/>
                    <Route path="error" element={<ValidationError/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
