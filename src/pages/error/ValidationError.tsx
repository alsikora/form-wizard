import React from 'react';
import {Link} from 'react-router-dom';

function ValidationError() {
    return (
        <div className="container mx-auto rounded-lg shadow-lg text-center p-10 bg-gray-100">
            <section>
                <h1>Ooops</h1>
                <p className="mb-2">Your age is over our accepted limit.</p>
                <p className="mb-6">We are sorry but we cannot insure you now.</p>
                <Link to="/" className="bg-black text-white py-2 px-10 inline-block rounded-md hover:bg-blue-900">OK :(</Link>
            </section>
        </div>
    );
}

export default ValidationError;
