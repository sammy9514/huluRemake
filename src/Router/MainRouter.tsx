import { createBrowserRouter } from "react-router-dom";
import Homescreen from "../Pages/Homescreen";
import { Layout } from "../Common/Layout";
import Movies from "../Pages/Movies";
import { MainPage } from "../Pages/MainPage";
import { MainPage2 } from "../Pages/MainPage2";
import { YouMayLike } from "../Pages/YouMayLike";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
    ],
  },
  {
    path: "/main/:id",
    element: <MainPage />,
  },
]);
