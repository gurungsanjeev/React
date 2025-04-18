import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Components/Login/Login.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './Components/Signup/Signup.tsx'
import Builder from './Components/CV Builder/Builder.tsx'




const router = createBrowserRouter([
  {
  path:"/",
  element: <Login/>
},
{
  path:"/signup",
  element: <Signup  />
},
{
  path:"/login",
  element: <Login  />
},
{
  path:"/home",
  element: <Builder  />
},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
   
  </StrictMode>,
)
