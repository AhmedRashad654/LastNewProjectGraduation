import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Cart from "./Componenets/Cart/Cart";
import Filters from "./Componenets/Filters/Filters";
import EditProfile from "./Componenets/EditProfile/EditProfile";
import Payment from "./Componenets/Payment/Payment";
import User from "./Componenets/User/User";
import Layout from "./Componenets/Layout/Layout";
import Home from "./Componenets/Home/Home";
import Orders from "./Componenets/Orders/Orders";
import NotFound from "./Componenets/NotFound/NotFound";
import Login from "./Componenets/Login/Login";
import Register from "./Componenets/Register/Register";
import Whislist from "./Componenets/Whislist/Whislist";
import Checkout from "./Componenets/Checkout/Checkout";
import Products from "./Componenets/products/products";
import Bestseller from "./Componenets/bestseller/Bestseller";
import Dettails from "./Componenets/details/details";
import Slider from "react-slick";
import ImageCards from "./Componenets/ImageCards/ImageCards";
import ShoppingCartProvider from "./Componenets/context/ShoppingCartContext";
import { SearchProvider } from "./Componenets/context/SearchContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Navigate to={"home"} /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "home", element: <Home /> },
        { path: "cart", element: <Cart /> },
        { path: "filters", element: <Filters /> },
        { path: "editprofile", element: <EditProfile /> },
        { path: "orders", element: <Orders /> },
        { path: "payment", element: <Payment /> },
        { path: "user", element: <User /> },
        { path: "whislist", element: <Whislist /> },
        { path: "checkout", element: <Checkout /> },
        { path: "products", element: <Products /> },
        { path: "bestesller", element: <Bestseller /> },
        { path: "details/:id", element: <Dettails /> },
        { path: "imagecards", element: <ImageCards /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <SearchProvider>
        <ShoppingCartProvider>
          <RouterProvider router={router}></RouterProvider>
        </ShoppingCartProvider>
      </SearchProvider>
    </>
  );
}

export default App;
