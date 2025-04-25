import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Login } from './Components/pages/login/Login'
import { SignUp } from './Components/pages/signup/SignUp'
import { Home } from './Components/pages/home/home'
import { AppLayout } from './Components/AppLayout/AppLayout'
import { Products } from './Components/pages/product/products'

function App() {
  const router = createBrowserRouter([
      {
        path:'/login',
        element : <Login/>
      },
      {
        path : '/signup',
        element : <SignUp/>
      },
      {
      path: '/',
      element: <AppLayout/>,
      children : [
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/myads',
          element : <h1>My Ads</h1>

        },
        {
          path : '/products',
          element : <Products/>
        },
      {
        path: '/about',
        element: <h1>About</h1>
      },
      {
        path: '/contact',
        element: <h1>Contact</h1>
      },
      {
        path:'/login',
        element : <Login/>
      },
      {
        path : '/signup',
        element : <SignUp/>
      }
    ]
  },
      

  ])

  return <RouterProvider router = {router}/>
}

export default App;
