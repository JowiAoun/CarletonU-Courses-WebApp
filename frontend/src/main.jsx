// --- Imports
// Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
// Components
import App from './components/App.jsx'


// --- Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/signup",
    element: <p>Signup page!</p>,
  },
  {
    path: "/login",
    element: <p>Login page!</p>,
  },
  {
    path: "/home",
    element: <p>Home page!</p>,
  },
  {
    path: "/settings",
    element: <p>Settings page!</p>,
  },
  {
    path: "/dev",
    element: <p>To develop React components:<br/>
      1. import them into main.jsx,<br/>
      2. replace the new React component with this 'p' tag</p>,
  }
]);


// --- Create root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
