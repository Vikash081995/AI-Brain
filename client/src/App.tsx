import { CssBaseline } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Profile from './pages/Profile/Profile'
import About from './pages/About/About'
import Login from './pages/Login/Login'

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />
  }, {
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
