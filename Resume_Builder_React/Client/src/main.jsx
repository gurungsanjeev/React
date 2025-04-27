import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Builder from './Components/CV Builder/Builder'
import EducationDetails from './Components/CV Builder/EducationDetails'
import NormalDesign from './Components/CV Builder Design/NormalDesign'
import LayoutSelection from './Components/CV Builder/LayoutSelection'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'





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
  // {
  //   path: "/nDesign",
  //   element: < NDesign />
  // },
  {
    path: "/layoutSelection",
    element: <LayoutSelection />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <RouterProvider router={router} />

</StrictMode>,
)
