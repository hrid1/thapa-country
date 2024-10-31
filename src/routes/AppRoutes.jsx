import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/RootLayout/RootPage";
import NotFound from "../pages/Error/NotFound";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Country from "../pages/Country/Country";
import ContactUs from "../pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/country",
        element: <Country></Country>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      }
    ],
  },
]);
