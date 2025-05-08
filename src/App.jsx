import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import isTokenExpired from './utils/isTokenExpired';
import Login from './Pages/LoginPage';
import Register from './Pages/RegisterPage';
import Dashboard from './Pages/DashboardPage';
import CalendarPage from './Pages/CalendarPage';
import ProfilePage from './Pages/ProfilePage';
import TasksPage from './Pages/TasksPage';
import './App.css'

function App() {
  const token = localStorage.getItem('token');
  const expired = isTokenExpired(token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!expired && token ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/tasks" element={!expired && token ? <TasksPage /> : <Navigate to="/login" />} />
        <Route path="/calendar" element={!expired && token ? <CalendarPage /> : <Navigate to="/login" />} />
        <Route path="/profile" element={!expired && token ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
