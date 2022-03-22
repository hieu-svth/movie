import Header from './components/Header/Header';
import Home from './pages/Home/Home.js'
import { Routes, Route, useLocation } from 'react-router-dom'
import Movies from './pages/Movie/Movie';
import TvSeries from './pages/TvSeries/TvSeries';
import Detail from './pages/Detail/Detail'
import NotFound from './pages/NotFound/NotFound';
import MoviesPopular from './pages/Movie/Movie_Popular';
import MovieTopRated from './pages/Movie/MovieTopRated';
import TvTopRated from './pages/TvSeries/TvTopRated';
import TvPopular from './pages/TvSeries/TvPopular';
import Watch from './pages/Watch/Watch';
import Footer from './components/Footer/Footer';
import WatchTV from './pages/Watch/WatchTv';
import Search from './pages/Search/Search';
import './App.css';

function App() {
  const location = useLocation()
  const { pathname } = location
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Movies />} />
        <Route path='/movie/popular' element={<MoviesPopular />} />
        <Route path='/movie/top_rated' element={<MovieTopRated />} />
        <Route path='/tv' element={<TvSeries />} />
        <Route path='/tv/popular' element={<TvPopular />} />
        <Route path='/tv/top_rated' element={<TvTopRated />} />
        <Route path='detail/:category/:id' element={<Detail />} />
        <Route path='watch/movie/:id' element={<Watch />} />
        <Route path='watch/tv/:id/seasons/:season/episodes/:episode' element={<WatchTV />} />
        <Route path='/search/:searchTerm' element={<Search />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
