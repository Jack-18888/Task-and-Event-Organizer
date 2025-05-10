import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import isTokenExpired from "./utils/isTokenExpired";
import Login from "./Pages/LoginPage";
import Register from "./Pages/RegisterPage";
import Dashboardpage from "./Pages/DashboardPage";
import CalendarPage from "./Pages/CalendarPage";
import ProfilePage from "./Pages/ProfilePage";
import TasksPage from "./Pages/tasks/TasksPage";
import AddTaskPage from "./Pages/tasks/AddTaskPage";
import "./App.css";
import EditTaskPage from "./Pages/tasks/EditTaskPage";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const expired = isTokenExpired(token);

  const [username, setUsername] = useState("");

  const [tasks, setTasks] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("token");
    setToken(stored);
  }, []);

  useEffect(() => {
    if (!token || isTokenExpired(token)) return;

    axios
      .get("http://localhost:5000/tasks", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTasks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000/events", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setEvents(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  function handleAddTask(task) {
    setTasks(tasks => [...tasks, task]);
  }

  function handleEditTask(id, newTask) {
    setTasks(tasks => tasks.map(task => task.id == id ? newTask : task));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !expired && token ? (
              <Dashboardpage tasks={tasks} events={events} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/tasks"
          element={
            !expired && token ? (
              <TasksPage tasks={tasks} setTasks={setTasks} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/tasks/add"
          element={
            !expired && token ? (
              <AddTaskPage addTask={handleAddTask} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/tasks/edit/:id"
          element={
            !expired && token ? (
              <EditTaskPage tasks={tasks} editTask={handleEditTask} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/calendar"
          element={
            !expired && token ? (
              <CalendarPage events={events} setEvents={setEvents} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/profile"
          element={
            !expired && token ? (
              <ProfilePage username={username} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            <Login
              onLogin={setToken}
              username={username}
              setUsername={setUsername}
            />
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
