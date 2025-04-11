import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login.jsx'
import App from './App.jsx'
import Signup from './Components/Signup.jsx'
import Home from './Components/Home.jsx'

const router = createBrowserRouter([
  {
  path: "/",
  element: <Login />
},
  {
  path: "/login",
  element: <Login />
},
  {
  path: "/signup",
  element: <Signup />
},
  {
  path: "/home",
  element: <Home />
},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
