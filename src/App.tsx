import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/Lp'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={LandingPage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
