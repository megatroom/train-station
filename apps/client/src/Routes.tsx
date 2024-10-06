import { createBrowserRouter } from 'react-router-dom';
import PassengersPage from './pages/passengers/PassengersPage';
import TripsPage from './pages/passengers/TripsPage';
import RootPage from './pages/RootPage';
import CheckoutPage from './pages/passengers/CheckoutPage';
import SuccessPage from './pages/passengers/SuccessPage';
import AdminPage from './pages/admin/AdminPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: 'passengers',
    element: <PassengersPage />,
  },
  {
    path: 'passengers/trips/success',
    element: <SuccessPage />,
  },
  {
    path: 'passengers/trips/:start',
    element: <TripsPage />,
  },
  {
    path: 'passengers/trips/:start/:destination',
    element: <CheckoutPage />,
  },
  {
    path: 'admin',
    element: <AdminPage />,
  },
]);
