import Home from 'pages/home'
import './App.css'
import LoaderLayout from 'Context/Context'

const App = () => {
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
