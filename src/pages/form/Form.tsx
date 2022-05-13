import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {Dispatch} from "redux"
import Footer from '../../components/footer';
import {countries, Country, packages, Packages} from '../../data/data';
import {calculatePrice} from '../../data/calculation';
import {Form as FormType, FormState} from "../../store/types";
import {updateForm} from "../../store/reducer";

function Form() {
    const [currentCountry, setCurrentCountry] = useState<Country>(countries[0]);
    const [currentPackage, setCurrentPackage] = useState<Packages>(packages[0]);
    const [fullPrice, setFullPrice] = useState<number>();
    const [basePrice, setBasePrice] = useState<number>(0);
    const [data, setData] = useState({userName: "", age: '', country: countries[0].name, package: packages[0].key});
    const navigate = useNavigate();
    const dispatch: Dispatch<any> = useDispatch()
    const state = useSelector((state: FormState) => state.form);

    useEffect(() => {
        const {age, country, name: userName, package: userPackage} = state;
        if (state.age && state.name) {
            setData({userName, age: age.toString(), country, package: userPackage});
            const c = countries.find((c) => c.name === country) as Country;
            setCurrentCountry(c);
            const p = packages.find((p) => p.key === userPackage) as Packages;
            setCurrentPackage(p);
        }
    }, []);

    /**
     * Update price after data changed.
     */
    useEffect(() => {
        const age = parseInt(data.age);
        const {basePrice, fullPrice} = calculatePrice(age, currentPackage, currentCountry);
        setBasePrice(basePrice);
        setFullPrice(fullPrice);
    }, [currentCountry, currentPackage, data.age]);

    /**
     * Handle submit of the form. Update store and redirect to the next page.
     * @param e Event
     */
    const handleSubmit = (e: React.BaseSyntheticEvent): void => {
        e.preventDefault();
        const age = parseInt(data.age);
        if (age > 100) {
            navigate('/error');
        } else {
            const form: FormType = {
                name: data.userName,
                country: data.country,
                age,
                package: data.package,
                premium: `${fullPrice}${currentCountry.currency}`
            }

            dispatch(updateForm(form));
            navigate('/summary');
        }
    };

    /**
     * Update state when user insert information
     * @param e Event
     */
    const handleChange = (e: React.SyntheticEvent): void => {
        const {name, value} = e.target as HTMLInputElement;
        if (name === 'country') {
            const c = countries.find((c) => c.name === value) as Country;
            setCurrentCountry(c);
        }
        if (name === 'package') {
            const p = packages.find((p) => p.key === value) as Packages;
            setCurrentPackage(p);
        }

        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="container mx-auto rounded-lg shadow-lg text-center p-10 bg-gray-100">
            <section>
                <h1>Tell us about yourself</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <div className="w-2/3 text-left flex flex-col">
                        <label htmlFor="userName">Name</label>
                        <input type="text" placeholder="Add text" name="userName" id="userName" value={data.userName}
                               className="border border-gray-200 rounded p-1 mt-1" onChange={handleChange}/>

                        <label htmlFor="age" className="mt-2">Age</label>
                        <input type="text" placeholder="Your age" name="age" id="age" value={data.age}
                               className="border border-gray-200 rounded p-1 mt-1" onChange={handleChange}/>

                        <label htmlFor="country" className="mt-2">Where do you live</label>
                        <select id="country" name="country" value={data.country} onChange={handleChange}
                                className="bg-white border border-gray-200 rounded p-1 mt-1">
                            {countries.map((country) => (
                                <option value={country.name} key={country.currency}>{country.name}</option>
                            ))}
                        </select>
                        {data.age ?
                            <div>
                                <div className="flex flex-col mt-4" onChange={handleChange}>
                                    {packages.map(p => (
                                        <label key={p.key} className="mt-1">
                                            <input type="radio"
                                                   value={p.key}
                                                   name="package"
                                                   className="mr-2"
                                                   defaultChecked={p.key === currentPackage.key}/>{p.name(currentCountry.currency, basePrice)}
                                        </label>))}
                                </div>
                                <h2>Your premium is: {fullPrice}{currentCountry.currency}</h2>
                            </div> : null
                        }
                    </div>
                    <Footer actionLabel="Next" back="/" disabled={!data.age || !data.userName}/>
                </form>
            </section>
        </div>
    );
}

export default Form;
