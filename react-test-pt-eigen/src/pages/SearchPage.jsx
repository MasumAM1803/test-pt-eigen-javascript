import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { asyncArticles } from '../states/searchNews/action';
import useInput from '../hooks/useInput';
import List from '../components/news/List';

const { Search } = Input;

function SearchPage() {
  const [query, handleQueryChange, setQuery] = useInput('');
  const {
    searchArticles = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(asyncArticles(query));
    setQuery('');
  };

  return (
    <div id="home-container">
      <h1>Search Article</h1>
      <Search placeholder="Search Articles ..." value={query} onChange={handleQueryChange} onSearch={onSearch} style={{ width: 200 }} />
      <List
        articles={searchArticles}
      />
    </div>
  );
}

export default SearchPage;
