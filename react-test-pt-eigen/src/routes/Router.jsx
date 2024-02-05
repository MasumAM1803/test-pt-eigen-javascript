import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SearchPage from '../pages/SearchPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
