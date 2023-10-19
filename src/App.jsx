import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';
import { AppContextProvider } from './context/AppContext';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <BrowserRouter basename="spotify-mytop5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export { App };
