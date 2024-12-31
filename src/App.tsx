import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import RootPage from './pages/Root';
import HomePage from './pages/Home';
import SessionsPage from './pages/Sessions';
import SessionDetailPage from './pages/Session';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'sessions',
        element: <SessionsPage />,
      },
      {
        path: 'sessions/:id',
        element: <SessionDetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
