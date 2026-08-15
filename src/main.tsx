import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router'
import App from './App'
import AboutPage from './AboutPage'
import BenefitsPage from './BenefitsPage'
import ContactPage from './ContactPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/benefits',
    Component: BenefitsPage,
  },
  {
    path: '/contact',
    Component: ContactPage,
  },
],
  {
      basename: '/jaseem',
  },

)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
