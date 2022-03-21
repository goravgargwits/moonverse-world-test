import Home from 'pages/home'
import './App.css'
import AOS from 'aos'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    AOS.init({})
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  )
}

export default App
