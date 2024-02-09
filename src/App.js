import React from 'react'

import News from './components/News'
import HomePage from './components/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/sports",
        element: <News pagesize="15" country="in" category="sports" style={{}} />,
      },
      {
        path: "/entertainment",
        element: <News pagesize="15" country="in" category="entertainment" style={{}} />,
      },
      {
        path: "/General",
        element: <News pagesize="15" country="in" category="General" style={{}} />,
      },
      {
        path: "/science",
        element: <News pagesize="15" country="in" category="science" style={{}} />,
      },
      {
        path: "/technology",
        element: <News pagesize="15" country="in" category="technology" style={{}} />,
      },
      {
        path: "/health",
        element: <News pagesize="15" country="in" category="health" style={{}} />,
      },{
        path: "/business",
        element: <News pagesize="15" country="in" category="business" style={{}} />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>

      <React.StrictMode>
        <>
          <RouterProvider
            router={router} />
        </>
      </React.StrictMode>
    </>
  )
}
