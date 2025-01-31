
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppLayout from './components/layout/AppLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProfileDetailsPage from './components/profile-details/ProfileDetailsPage';
import JobsDetailsPAge from './components/jobsdetails/JobsDetailsPAge';
import HomePage from './components/home/HomePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <AppLayout />,
      children: [{
        path: '',
        element: <HomePage />,
      },
      { path: "/profile-details", element: <ProfileDetailsPage /> },
      { path: "/jobs-details", element: <JobsDetailsPAge /> },
      ],
    },

  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

