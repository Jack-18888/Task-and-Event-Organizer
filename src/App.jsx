import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import isTokenExpired from "./utils/isTokenExpired";
import Login from "./Pages/LoginPage";
import Register from "./Pages/RegisterPage";
import Dashboardpage from "./Pages/DashboardPage";
import CalendarPage from "./Pages/calendar/CalendarPage";
import ProfilePage from "./Pages/ProfilePage";
import TasksPage from "./Pages/tasks/TasksPage";
import AddTaskPage from "./Pages/tasks/AddTaskPage";
import "./App.css";
import EditTaskPage from "./Pages/tasks/EditTaskPage";
import AddEventPage from "./Pages/calendar/AddEventPage";
import EditEventPage from "./Pages/calendar/EditEventPage";

const APIendpoint = "http://localhost:5000";

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
      .get(`${APIendpoint}/tasks`, {
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
      .get(`${APIendpoint}/events`, {
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
    axios.post(`${APIendpoint}/tasks`, task, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setTasks(tasks => [...tasks, response.data]);
    })
    .catch((error) => console.log(error));
  }

  function handleDeleteTask(id) {
    axios.delete(`${APIendpoint}/tasks/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setTasks(tasks => tasks.filter(task => task.id != id));
      } else {
        console.log(response);
      }
    })
    .catch((error) => console.error('Delete failed:', error));
  }

  function handleEditTask(id, newTask) {
    axios.put(`${APIendpoint}/tasks/${id}`, newTask, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setTasks(tasks => tasks.map(task => task.id == id ? response.data : task));
      } else {
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function handleAddEvent(event) {
    axios.post(`${APIendpoint}/events`, event, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => setEvents(events => [...events, response]))
    .catch((error) => console.log(error));
  }

  function handleEditEvent(id, newEvent) {
    setEvents(events => events.map(event => event.id == id ? newEvent : event));
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
              <TasksPage tasks={tasks} deleteTask={handleDeleteTask} setTasks={setTasks} />
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
          path="/events/add"
          element={
            !expired && token ? (
              <AddEventPage addEvent={handleAddEvent} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/events/edit/:id"
          element={
            !expired && token ? (
              <EditEventPage editEvent={handleEditEvent} events={events} />
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
