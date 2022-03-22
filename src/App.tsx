import Home from 'pages/home'
import './App.css'
import AOS from 'aos'
import { useEffect } from 'react'
import LoaderLayout from 'Context/Context'

const App = () => {
  useEffect(() => {
    AOS.init({})
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <LoaderLayout>
          <Home />
        </LoaderLayout>
      </header>
    </div>
  )
}

export default App
