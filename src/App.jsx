import './App.css'
import Header from './Header'
import Home from './Home'
import Product from './Product'
import Cart from './Cart'
import {ThemeProvider} from './ThemeContext'
import {
  createHashRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'

function App() {
    const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: '/' },
        { element: <Product />, path: '/:productId' },
        { element: <Cart />, path: '/cart' },
      ],
      element: (
        <>
          <ThemeProvider>
            <Header></Header>
            <main>
              <Outlet/>
            </main>
          </ThemeProvider>
        </>
      )
    }
  ])

  // return <RouterProvider router={router} />
  return <RouterProvider router={router} />
}

export default App
