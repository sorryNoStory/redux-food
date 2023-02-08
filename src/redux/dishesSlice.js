import { createSlice } from '@reduxjs/toolkit';

export const dishesSlice = createSlice ({
    name: 'dishes',
    initialState: {
        selectedCategory: "SEAFOOD"
    },
    reducers: {
        filterCategory: (state,action) => {
            state.selectedCategory = action.payload;
        }
    }
})


export const getSelectedCategory = state => state.dishes.selectedCategory;
export default dishesSlice.reducer;
export const { filterCategory } = dishesSlice.actions;
