
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Recommendations from './pages/Recommendations'
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import AdminPanel from "./pages/AdminPanel"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />
      }, {
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
      //this should only appear after I sign in on the navbar
      {
        path: '/admin',
        element: <AdminPanel />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
