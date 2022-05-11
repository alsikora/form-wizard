import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="container mx-auto shadow-lg text-center">
            <section>
                <h1>Hello There!</h1>
                <p>Let's buy some insurance. It is going to take only a few steps</p>
                <button type="button" className="bg-black"><Link to="/form">Start</Link></button>
            </section>
        </div>
    );
}

export default Home;
