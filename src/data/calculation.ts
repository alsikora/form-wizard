import {Packages, Country} from './data';

export const calculatePrice = (age: number, pricePackage: Packages, country: Country): { fullPrice: number, basePrice: number } => {
    const basePrice = 10 * age * country.rate;
    const fullPrice = basePrice * pricePackage.rate;
    return {
        fullPrice,
        basePrice
    }
};