
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppLayout from './components/layout/AppLayout';
import HomePage from './components/home/HomePage';

function App() {
  // const router = createBrowserRouter ([
  //   {path:"/", element:   <AppLayout />},
  //   {path:"/home", element:   <HomePage />},
  //   {path:"/home", element:   <JobDetails />},
  //   {path:"/home", element:   <ProfilePage />},
  // ])
  return (


    <div className="App">
      {/* <RouterProvider router={router}/> */}
      <AppLayout />
      <HomePage />
    </div>
  );
}

export default App;

