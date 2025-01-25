
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './components/home/HomePage';

import AppLayout from './components/layout/AppLayout';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import JobDetails from './components/job-details/JobDetails';
import ProfilePage from './components/profile-details/ProfilePage';

function App() {
  const router = createBrowserRouter ([
    {path:"/", element:   <AppLayout />},
    {path:"/home", element:   <HomePage />},
    {path:"/home", element:   <JobDetails />},
    {path:"/home", element:   <ProfilePage />},
  ])
  return (


    <div className="App">
      <RouterProvider router={router}/>
      
      
    </div>
  );
}

export default App;

