import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { asyncTopHeadlinesNews } from '../states/news/action';
import List from '../components/news/List';

function Home() {
  const {
    articles = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncTopHeadlinesNews());
  }, [dispatch]);

  return (
    <div id="home-container">
      <h1>List Top Headlines in Indonesia</h1>
      <List
        articles={articles}
      />
    </div>
  );
}

export default Home;
