import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Home from './pages/Home.jsx';
import RoutesLayout from './pages/RoutesLayout.jsx';
import Course from './pages/Course.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Books from './pages/Books.jsx';
import RegisterUser from './pages/RegisterUser.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    // errorElement: <Error />,
    element: <RoutesLayout />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'book',
        element: <Books />
      },
      {
        path: 'course',
        element: <Course />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'About',
        element: <About />
      },
      {
        path: 'register',
        element: <RegisterUser />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
]);

function App() {



  return (
    <RouterProvider router={router} />
  );
}

export default App;