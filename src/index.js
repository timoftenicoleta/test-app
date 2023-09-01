import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import './index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import reportWebVitals from './reportWebVitals';
import router from './router';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import reducer from './reduxFiles';
import customMiddleware from './reduxFiles/customMiddleware';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("favorites", JSON.stringify(state.favoriteReducer.favorite));
});

root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
