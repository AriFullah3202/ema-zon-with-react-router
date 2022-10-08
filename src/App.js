import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import About from './components/About/About';
import Orders from './components/Orders/Orders';
import inventory from './components/inventory/Inventory';
import Inventory from './components/inventory/Inventory';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Shop></Shop>
        },
        {
          path: "/shop",
          element: <Shop></Shop>
        },
        {
          path: "about",
          element: <About></About>
        },
        {
          path: "orders",
          element: <Orders></Orders>
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>
        }
      ]
    }

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
