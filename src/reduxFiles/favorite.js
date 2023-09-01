import { createAction, createReducer } from '@reduxjs/toolkit';

const savedFavorites = JSON.parse(localStorage.getItem("favorites"));

export const addFavorite = createAction('favorite/addFavorite');

const initialState = { favorite: savedFavorites || []}

const favoriteReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addFavorite, (state, action) => {
        const isAlreadyAdded = state.favorite.some((favArticle) => favArticle.id === action.payload.id);
        if(!isAlreadyAdded) {
            state.favorite = [...state.favorite, action.payload]
        }
    })
});

export default favoriteReducer;
