import { CssBaseline } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import  HomeLayout  from './layout/HomeLayout'
import {  Login, Dashboard, Profile, About, Register } from "./pages";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <HomeLayout />,
    children: [
      {
        path: routes.login,
        element: <Login />
      }
      , {
        path: routes.dashboard,
        element: <Dashboard />
      }, {
        path: routes.profile,
        element: <Profile />
      }, {
        path: routes.about,
        element: <About />
      }, {
        path: routes.register,
        element: <Register />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
