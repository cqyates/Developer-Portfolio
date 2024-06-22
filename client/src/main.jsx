
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Recommendations from './pages/Recommendations'
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Admin from "./pages/Admin"
import About from "./pages/About"
import Thanks from "./pages/Thanks"

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/recommendations',
        element: <Recommendations/>
      },
      {
        path: '/resume',
        element: <Resume />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/admin',
        element: <Admin />
      },
      {
        path: '/thanks',
        element: <Thanks />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
