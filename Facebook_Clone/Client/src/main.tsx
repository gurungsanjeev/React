import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Signup from './Components/Signup.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login.tsx'

const router = createBrowserRouter([
  {
  path:"/login",
  element: <Login/>
},
{
  path:"/signup",
  element: <Signup/>
},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
