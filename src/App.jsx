import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/Home";
import AuthenticationPage from "./pages/AuthenticationPage";
import { action as authAction } from "./pages/AuthenticationPage";
import { AuthProvider } from "./contexts/authContext.jsx";
import NewResume from "./pages/NewResume.jsx";
import { action as newResumeAction } from "./pages/NewResume.jsx";
import ResumePreview from "./pages/ResumePreview.jsx";
import { loader as userDetailsLoader } from "./pages/ResumePreview.jsx";
import UpdateResume from "./pages/updateResume.jsx";
import { loader as userUpdateDetailsLoader } from "./pages/updateResume.jsx";
import { loader as authErrorLoader } from "./pages/AuthenticationPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/auth",
        element: <AuthenticationPage></AuthenticationPage>,
        loader: authErrorLoader,
        action: authAction,
      },
      {
        path: "/createResume/:user",
        element: <NewResume></NewResume>,
        action: newResumeAction,
      },
      {
        path: "/createResume/:user/preview",
        element: <ResumePreview></ResumePreview>,
        loader: userDetailsLoader,
      },
      {
        path: "/update/:user",
        element: <UpdateResume></UpdateResume>,
        action: newResumeAction,
        loader: userUpdateDetailsLoader,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
