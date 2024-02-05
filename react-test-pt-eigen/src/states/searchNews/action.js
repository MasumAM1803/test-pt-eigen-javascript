import api from '../../utils/api';

const ActionType = {
  RECEIVE_ARTICLES: 'RECEIVE_ARTICLES',
};

function receiveArticlesActionCreator(articles) {
  return {
    type: ActionType.RECEIVE_ARTICLES,
    payload: {
      articles,
    },
  };
}

function asyncArticles(query) {
  return async (dispatch) => {
    try {
      const articles = await api.getAllArticle(query);

      dispatch(receiveArticlesActionCreator(articles));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveArticlesActionCreator,
  asyncArticles,
};
