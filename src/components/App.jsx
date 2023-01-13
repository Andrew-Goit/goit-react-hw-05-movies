import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from 'components/AppBar';
import Home from 'pages/Home';
import {AppWraper} from './App.styled'

const MovieDetails = lazy(() => import('./MovieDetails/MovieDetals'));
const Movies = lazy(() => import('pages/Movies'));
const Cast = lazy(() => import('components/Cast'));
const Review = lazy(() => import('components/Reviews'));

export const App = () => {
  return (
    <AppWraper>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/goit-react-hw-05-movies" element={<Home />}></Route>
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={<Movies />}
          ></Route>
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={<MovieDetails />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Routes>
      </Suspense>
    </AppWraper>
  );
};
