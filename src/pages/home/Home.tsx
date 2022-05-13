import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {cleanForm} from '../../store/reducer';
import {Dispatch} from 'redux';
import {useDispatch} from 'react-redux';

function Home() {
    const dispatch: Dispatch<any> = useDispatch();

    /**
     * Clean data on the begging of the wizard
     */
    useEffect(() => {
        dispatch(cleanForm());
    }, []);

    return (
        <div className="container mx-auto rounded-lg shadow-lg text-center p-10 bg-gray-100">
            <section>
                <h1>Hello There!</h1>
                <p className="mb-6">Let's buy some insurance. It is going to take only a few steps</p>
                <Link to="/form"
                      className="bg-black text-white py-2 px-10 inline-block rounded-md hover:bg-blue-900">Start</Link>
            </section>
        </div>
    );
}

export default Home;
