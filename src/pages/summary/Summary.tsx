import React from 'react';
import {useSelector} from 'react-redux'
import Footer from '../../components/footer';
import {useNavigate} from 'react-router-dom';
import {FormState, Form} from '../../store/types';

function Summary() {
    const {name, age, country, package: userPackage, premium}: Form = useSelector((state: FormState) => state.form);
    const navigate = useNavigate();

    /**
     * Handle buy action
     */
    const handleBuy = () => navigate('/');

    return (
        <div className="container mx-auto rounded-lg shadow-lg text-center p-10 bg-gray-100">
            <section>
                <h1>Summary</h1>
                <h3>{name}</h3>
                <div className="grid grid-cols-2 justify-center">
                    <span>Name:</span><span>{name}</span>
                    <span>Age:</span><span>{age}</span>
                    <span>Where do you live:</span><span>{country}</span>
                    <span>Package:</span><span>{userPackage}</span>
                    <span>Premium:</span><span>{premium}</span>
                </div>
                <form onSubmit={handleBuy} className="flex flex-col items-center">
                    <Footer actionLabel='Buy' back='/form' disabled={false}/>
                </form>
            </section>
        </div>
    );
}

export default Summary;
