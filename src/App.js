import React from 'react'

import News from './components/News'
import HomePage from './components/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import About from './components/About';

const router  = createBrowserRouter ([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/home",
        element: <News pagesize="15" key={Math.random()} country="in" category="General" style={{}} />,
      },
      {
        path: "/sports",
        element: <News pagesize="15" key={Math.random()} country="in" category="Sports" style={{}} />,
      },
      {
        path: "/entertainment",
        element: <News pagesize="15" key={Math.random()} country="in" category="Entertainment" style={{}} />,
      },
      {
        path: "/General",
        element: <News pagesize="15" key={Math.random()} country="in" category="General" style={{}} />,
      },
      {
        path: "/science",
        element: <News pagesize="15" key={Math.random()} country="in" category="Science" style={{}} />,
      },
      {
        path: "/technology",
        element: <News pagesize="15" key={Math.random()} country="in" category="Technology" style={{}} />,
      },
      {
        path: "/health",
        element: <News pagesize="15" key={Math.random()} country="in" category="Health" style={{}} />,
      },{
        path: "/business",
        element: <News pagesize="15" key={Math.random()} country="in" category="Business" style={{}} />,
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
