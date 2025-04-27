import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Components/Login/Login.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './Components/Signup/Signup.jsx'
import Builder from './Components/CV Builder/Builder.jsx'
import EducationDetails from './Components/CV Builder/EducationDetails.js'
import NormalDesign from './Components/CV Builder Design/NormalDesgin.jsx'
import LayoutSelection from './Components/CV Builder/LayoutSelection.jsx'
import NDesign from './Components/CV Builder Design/NDesign.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <Builder />
  },
  {
    path: "/-education",
    element: < EducationDetails />
  },
  {
    path: "/normalDesign",
    element: < NormalDesign />
  },
  {
    path: "/nDesign",
    element: < NDesign />
  },
  {
    path: "/layoutSelection",
    element: <LayoutSelection />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
      <RouterProvider router={router} />
   
  </StrictMode>,
)
