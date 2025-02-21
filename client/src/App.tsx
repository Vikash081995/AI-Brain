import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import HomeLayout from "./layout/HomeLayout";
import { Login,  Profile, About, Register } from "./pages";
import Demo from "./demo/Demo";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import LandingPage from "./pages/LandingPage/LandingPage";
import PostsList from "./components/Posts/PostsList";
import DashboardLayout from "./layout/DashboardLayout";
import DashbaordPosts from "./components/Dashboard/DashbaordPosts";

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
        element: <DashboardLayout />,
        children: [
          {
            index:true,
            element:<DashbaordPosts/>
          }
        ]
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
      {
        path: routes.landing,
        element: <LandingPage />,
      },
      {
        path: routes.posts,
        element: <PostsList />,
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
