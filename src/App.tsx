import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginPage from './pages/LoginPage'
import TransactionPage from './pages/TransactionPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<TransactionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
