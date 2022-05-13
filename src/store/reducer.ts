import {FormState} from './types';
import {createSlice} from '@reduxjs/toolkit'

const initialState: FormState = {
    form: {
        name: '',
        age: 0,
        country: '',
        package: '',
        premium: ''
    }
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateForm: (state, action) => {
            state.form = action.payload
        },
        cleanForm: (state) => {
            state.form = initialState.form
        }
    }
});

export const {updateForm, cleanForm} = formSlice.actions

export default formSlice.reducer