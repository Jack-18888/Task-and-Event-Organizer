import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      dueDate: dueDate,
      completed: false,
    };
    addTask(newTask);
    navigate("/tasks");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;