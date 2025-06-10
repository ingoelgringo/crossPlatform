import './App.css'
import Header from './Header'
import Home from './Home'
import {ThemeProvider} from './ThemeContext'

function App() {
  return (
    <>
      <ThemeProvider>
        <Header></Header>
        <main>
          <Home></Home>
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
