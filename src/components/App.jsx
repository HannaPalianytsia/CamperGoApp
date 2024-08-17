import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation.jsx';
import Loader from './Loader/Loader.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage.jsx'));
const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage.jsx')
);

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
