import React from 'react';
import {Link} from 'react-router-dom';

function NotFound() {
    return (
        <div className="container mx-auto rounded-lg shadow-lg text-center p-10 bg-gray-100">
            <section>
                <h1>Page not found!</h1>
                <Link to="/" className="bg-black text-white py-2 px-10 inline-block rounded-md hover:bg-blue-900">Go to
                    Home page</Link>
            </section>
        </div>
    );
}

export default NotFound;
