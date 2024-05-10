

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './Layout/Main'
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Portfolios from "./Components/Portfolios/Portfolios"
import Contact from "./Components/Contact/Contact"
import BuyRokstar from "./Components/BuyRokstar/BuyRokstar"

function App() {

  const router = createBrowserRouter([
    // all routes
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/Home',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/Portfolios',
          element: <Portfolios></Portfolios>
        },
        {
          path: '/Contact',
          element: <Contact></Contact>
        },
        {
          path: '/BuyRokstar',
          element: <BuyRokstar></BuyRokstar>
        }
      ]
    }
  ])

  return (
    <RouterProvider
      router={router}
    ></RouterProvider>
  )
}

export default App
