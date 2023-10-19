import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="spotify-mytop5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export { App };
