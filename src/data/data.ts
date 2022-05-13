export interface Country {
    name: string;
    currency: string;
    rate: number;
}

export interface Packages {
    name: (currency: string, basePrice: number) => string;
    rate: number;
    key: string;
}

export const packages: Packages[] = [
    {key: "Standard", rate: 1, name: () => "Standard"},
    {key: "Safe", rate: 1.5, name: (currency, basePrice) => `Safe (+${basePrice*0.5}${currency}, 50%)`},
    {key: "Super Safe", rate: 1.75, name: (currency, basePrice) => `Super Safe (+${basePrice*0.75}${currency}, 75%)`}
];

export const countries: Country[] = [
    {name: "Hong Kong", currency: "HKD", rate: 1},
    {name: "USA", currency: "USD", rate: 2},
    {name: "Australia", currency: "AUD", rate: 3}
];