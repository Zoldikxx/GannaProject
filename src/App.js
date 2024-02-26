import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Orders from './Components/Orders/Orders';
import Address from './Components/Address/Address';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  let routers = createBrowserRouter([
    {path:'', element:<Layout /> , children:[
      {index:true, element: <Home />},
      {path:'products', element: <Products />},
      {path:'categories', element: <Categories />},
      {path:'cart', element: <Cart />},
      {path:'login', element: <Login />},
      {path:'register', element: <Register />},
      {path:'orders', element: <Orders />},
      {path:'address', element: <Address />},
      {path:'productDetails', element: <ProductDetails />},
    ]}
  ])
  return <RouterProvider router={routers}></RouterProvider>

}

export default App;
