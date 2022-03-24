import { useState } from 'react'
import Home from 'pages/home'
import './App.css'
import { LoaderContext } from 'Context/LoaderContext'

const App = () => {
  const [loader, setLoader] = useState(true)
  return (
    <LoaderContext.Provider value={[loader, setLoader]}>
      <div className="App">
        <header className="App-header">
          <Home />
        </header>
      </div>
    </LoaderContext.Provider>
  )
}

export default App
