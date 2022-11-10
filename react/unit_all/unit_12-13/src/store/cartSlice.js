import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            console.log(data);
            console.log('====================');
            console.log(state);
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;
            console.log('=====');
            console.log(state.value);
            console.log(state.value[articul]);
        },

        decrement: (state, data) => {
            let articul = data.payload;
            state.value[articul]--;
            if (state.value[articul] === 0) delete state.value[articul];

        },
        cancel: (state, data) => {
            let articul = data.payload;
            delete state.value[articul];

        }
    }
});

export const { increment, decrement, cancel } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;