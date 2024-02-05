/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import { ActionType } from './action';

function newsReducer(articles = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_ARTICLES:
      return action.payload.articles;
    default:
      return articles;
  }
}

export default newsReducer;
