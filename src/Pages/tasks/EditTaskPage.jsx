import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditTaskPage({ tasks, editTask }) {
  const { id } = useParams();
  const taskId = parseInt(id);
  const task = tasks.find((t) => t.id === taskId);
  const navigate = useNavigate();

  const [title, setTitle] = useState(task?.title || "");
  const [dueDate, setDueDate] = useState(task?.due_date || "");
  const [completed, setCompleted] = useState(task?.completed || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      "id": taskId,
      "due_date": dueDate,
      "title": title,
      "completed": completed
    }
    editTask(id, newTask);
    navigate("/tasks");
  };

  if (!task) return <p className="text-center mt-10">Task not found</p>;

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Task</h2>
      <input
        type="text"
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
      <label className="block mb-4">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="mr-2"
        />
        Task Completed
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </form>
  );
}

export default EditTaskPage;
