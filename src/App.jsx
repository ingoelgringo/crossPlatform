import './App.css'
import Header from './Header'
import Home from './Home'
import Product from './Product'
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
      ],
      element: (
        <>
          <main>
            <Outlet />
          </main>
        </>
      )
    }
  ])

  // return <RouterProvider router={router} />
  return (
    <>
      <ThemeProvider>
        <Header></Header>
        <main>
          <RouterProvider router={router} />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
