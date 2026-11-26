import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import './App.css'
import Layout from './componets/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Explore from './pages/Explore'
import SemesterSubjects from './pages/SemesterSubjects'
import Course from './pages/Course'
import Materials from './pages/Materials'
import Upload from './pages/Upload'

const router = createBrowserRouter([
  {
    element:<Layout />,
    children: [
      {
        path: '/',
        element : <Home />
      },
      {
        path: '/explore',
        element: <Explore />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/branches/:branchID/semesters/:semID',
        element: <SemesterSubjects />
      },
      {
        path: '/courses/:courseCode',
        element: <Course />
      },
      {
        path: '/courses/:courseCode/:categoryID',
        element: <Materials />
      },
      {
        path: '/courses/:courseCode/:categoryID/upload',
        element: <Upload />
      }
    ]
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
