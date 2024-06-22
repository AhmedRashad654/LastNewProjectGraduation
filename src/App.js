import {
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
// import Slider from "react-slick";
import ImageCards from "./Componenets/ImageCards/ImageCards";
import ShoppingCartProvider from "./Componenets/context/ShoppingCartContext";
import { SearchProvider } from "./Componenets/context/SearchContext";
import HomeDashboard from "./Dashboard/HomeDashboard/HomeDashboard";
import CounterInDashboard from "./Dashboard/ComponantDashboard/CounterInDashboard";
import UserDashboard from "./Dashboard/UserDashboard/UserDashboard";
import AddUserDashboard from "./Dashboard/UserDashboard/AddUserDashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateUserDashboard from "./Dashboard/UserDashboard/UpdateUserDashboard";
import CategoryDashboard from "./Dashboard/CategoryDashboard/CategoryDashboard";
import AddCategoryDashboard from "./Dashboard/CategoryDashboard/AddCategoryDashboard";
import UpdateCategoryDashboard from "./Dashboard/CategoryDashboard/UpdateCategoryDashboard";
import ProductDashboard from "./Dashboard/ProductDashboard/ProductDashboard";
import AddProduct from "./Dashboard/ProductDashboard/AddProduct";
import UpdateProduct from "./Dashboard/ProductDashboard/UpdateProduct";
import ProtectedDashboard from "./protectedRoute/ProductedDashboard";
import CategoryUser from "./Componenets/CategoryUser/CategoryUser";
import OrdersDashboard from "./Dashboard/OrdersDashboard/OrdersDashboard";
import Success from "./Componenets/success/Success";
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home/> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
       
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
        { path: "/category/:id", element: <CategoryUser /> },
        { path: "success", element: <Success/> },

        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedDashboard>
          <HomeDashboard />
        </ProtectedDashboard>
      ),
      children: [
        {
          path: "/dashboard",
          element: <CounterInDashboard />,
        },
        {
          path: "userdashboard",
          element: <UserDashboard />,
        },
        {
          path: "adduserdashboard",
          element: <AddUserDashboard />,
        },
        {
          path: "updateuserdashboard/:id",
          element: <UpdateUserDashboard />,
        },
        {
          path: "categorydashboard",
          element: <CategoryDashboard />,
        },
        {
          path: "addcategorydashboard",
          element: <AddCategoryDashboard />,
        },
        {
          path: "updatecategorydashboard/:id",
          element: <UpdateCategoryDashboard />,
        },
        {
          path: "productdashboard",
          element: <ProductDashboard />,
        },
        {
          path: "addproductdashboard",
          element: <AddProduct />,
        },
        {
          path: "updateproductdashboard/:id",
          element: <UpdateProduct />,
        },
        {
          path: "ordersdashboard",
          element: <OrdersDashboard />,
        },
      ],
    },
  ]);
  let queryClient = new QueryClient();
  return (
    <>
      <ToastContainer position="top-center" />
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <ShoppingCartProvider>
            <RouterProvider router={router}></RouterProvider>
          </ShoppingCartProvider>
        </SearchProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
