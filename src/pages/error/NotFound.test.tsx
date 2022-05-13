import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {render, screen} from '@testing-library/react';
import NotFound from './NotFound';

test('renders Not found page', () => {
    render(<BrowserRouter><NotFound/></BrowserRouter>);
    const linkElement = screen.getByText(/Page not found!/i);
    expect(linkElement).toBeInTheDocument();
});
