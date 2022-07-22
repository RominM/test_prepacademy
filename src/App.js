import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from 'view/layout/header/Header';
import Error404 from 'view/pages/error404/Error404';
import Home from 'view/pages/home/Home';
import Movies from 'view/pages/movies/Movies';
import Series from 'view/pages/series/Series';

import './App.css';

function App() {
  const [data, setData] = useState([]);

  const API_KEY = '3e96f9f479354a80408d3d0401f7eded';
  const URL = `https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [URL]);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies data={data} />} />
          <Route path="/series" element={<Series data={data} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
