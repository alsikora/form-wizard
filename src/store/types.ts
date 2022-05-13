export interface Form {
    name: string;
    age: number;
    country: string;
    package: string;
    premium: string;
}

export type FormState = {
    form: Form
}