import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import HomeLayout from "./layout/HomeLayout";
import { Login, Dashboard, Profile, About, Register } from "./pages";
import Demo from "./demo/Demo";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <HomeLayout />,
    children: [
      {
        path: routes.login,
        element: <Login />,
      },
      {
        path: routes.dashboard,
        element: <Dashboard />,
      },
      {
        path: routes.profile,
        element: <Profile />,
      },
      {
        path: routes.about,
        element: <About />,
      },
      {
        path: routes.register,
        element: <Register />,
      },
      {
        path: routes.demo,
        element: <Demo />,
      },
    ],
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <CssBaseline />
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
