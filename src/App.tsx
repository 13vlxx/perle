import { NavbarLayout } from "@layouts/navbar.layout";
import { HomeScreen } from "@screens/home.screen";
import { Screens } from "@utils/router/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffectOnce } from "react-use";

const router = createBrowserRouter([
  {
    path: Screens.HOME,
    element: <NavbarLayout />,
    errorElement: <div>404</div>,
    children: [{ index: true, element: <HomeScreen /> }],
  },
]);

function App() {
  useEffectOnce(() => {
    if (!["DEV", "PROD"].includes(import.meta.env.VITE_ENVIRONMENT)) throw new Error("ENVIRONMENT_NOT_SET");
  });

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
