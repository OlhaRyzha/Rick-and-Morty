import { Suspense } from 'react';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { RestrictedRoute } from 'components/RestrictedRoute';

const Header = lazy(() => import('components/Header/Header'));
const Home = lazy(() => import('../../pages/HomePage/HomePage'));
const FilteredCharacter = lazy(() =>
  import('../FilteredCharacters/FilteredCharacters')
);
const СharacterDetails = lazy(() =>
  import('../../pages/СharacterDetails/СharacterDetails')
);
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/character" element={<FilteredCharacter />} />
          <Route
            path="/character/:characterName/:characterId/"
            element={<СharacterDetails />}
          />
        </Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/expenses" component={<LoginPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/expenses"
              component={<RegisterPage />}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Suspense>
  );
};
