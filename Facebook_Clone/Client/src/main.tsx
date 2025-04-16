import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Signup from './Components/Signup.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login.tsx'
import Home from './Components/Home.tsx'
import PageNotFound from './Components/ErrorPage/PageNotFound.tsx'

const router = createBrowserRouter([
  {
  path:"",
  element: <Login/>
},
  {
  path:"/login",
  element: <Login/>
},
{
  path:"/signup",
  element: <Signup/>
},
{
  path:"/home",
  element: <Home/>
},
{
  path:"*",
  element: <PageNotFound/>
},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
