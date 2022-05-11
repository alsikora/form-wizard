import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './index.css';
import Home from './home/Home';
import Form from './form/Form';
import Summary from './summary/Summary';
import ValidationError from './error/ValidationError';
import NotFound from './error/NotFound';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="form" element={<Form/>}/>
                <Route path="summary" element={<Summary/>}/>
                <Route path="error" element={<ValidationError/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
