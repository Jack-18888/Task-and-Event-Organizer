import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import isTokenExpired from './utils/isTokenExpired';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import './App.css'

function App() {
  const token = localStorage.getItem('token');
  const expired = isTokenExpired(token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!expired && token ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
