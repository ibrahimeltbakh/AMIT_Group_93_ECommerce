import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Layout from "./Pages/Layout";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/productDetails";
import NotFound from "./Components/NotFound";
import Cart from "./Pages/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/products", element: <Products /> },
        { path: "/cart", element: <Cart /> },
        { path: "/productDetails/:id", element: <ProductDetails /> },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
      // errorElement: <h2 className="text-danger text-center">Error</h2>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
