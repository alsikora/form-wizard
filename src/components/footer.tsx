import React from 'react';
import {Link} from "react-router-dom";

interface Props {
    actionLabel: string;
    back: string;
    disabled: boolean;
}

function Footer({actionLabel, back, disabled}: Props) {
    return (
        <div className="mt-8">
            <Link to={back || "/"}
                  className="bg-white text-black py-2 px-10 inline-block rounded-md hover:bg-gray-200 border border-gray-400 mr-4">Back</Link>
            <button type="submit"
                    className="bg-black text-white py-2 px-10 inline-block rounded-md hover:bg-blue-900 ml-4 disabled:opacity-60 disabled:hover:bg-black disabled:cursor-not-allowed" disabled={disabled}>{actionLabel}</button>
        </div>
    );
}

export default Footer;
