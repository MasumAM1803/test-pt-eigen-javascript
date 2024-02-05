import api from '../../utils/api';

const ActionType = {
  RECEIVE_TOP_HEADLINES: 'RECEIVE_TOP_HEADLINES',
};

function receiveTopHeadlinesActionCreator(articles) {
  return {
    type: ActionType.RECEIVE_TOP_HEADLINES,
    payload: {
      articles,
    },
  };
}

function asyncTopHeadlinesNews() {
  return async (dispatch) => {
    try {
      const articles = await api.getAllTopHeadLines();

      dispatch(receiveTopHeadlinesActionCreator(articles));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveTopHeadlinesActionCreator,
  asyncTopHeadlinesNews,
};
