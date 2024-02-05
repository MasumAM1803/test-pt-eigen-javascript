/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './news/reducer';
import searchNewsReducer from './searchNews/reducer';

const store = configureStore({
  reducer: {
    articles: newsReducer,
    searchArticles: searchNewsReducer,
  },
});

export default store;
