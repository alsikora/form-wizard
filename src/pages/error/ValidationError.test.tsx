import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {render, screen} from '@testing-library/react';
import ValidationError from './ValidationError';

test('renders age error page', () => {
    render(<BrowserRouter><ValidationError/></BrowserRouter>);
    const linkElement = screen.getByText(/Your age is over our accepted limit./i);
    expect(linkElement).toBeInTheDocument();
});
