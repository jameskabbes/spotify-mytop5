import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home }             from './pages/Home'
import { PageNotFound }     from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/spotify'>
          <Routes>
            <Route path='/'                       element={<Home/>} />
            <Route path="/404"                    element={<PageNotFound />} />
            <Route path="*"                       element={<Navigate to="/404" />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export { App };

