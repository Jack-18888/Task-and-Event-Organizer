import { useNavigate } from "react-router-dom";

const tableHeaders = ["Title", "Deadline", "Status", "Actions"];

function TaskList({ tasks, deleteTask, doneTask }) {
  const navigate = useNavigate();

  function getDate(dueDate) {
    return dueDate.split("T")[0];
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <table className="min-w-4xl divide-y divide-gray-200 dark:divide-neutral-700">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th
                scope="col"
                className="px-6 py-3 text-mid text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                key={header}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
            >
              <td className="px-6 py-4 whitespace-nowrap text-mid text-gray-800 dark:text-neutral-200">
                {task.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-mid text-gray-800 dark:text-neutral-200">
                {getDate(task.due_date)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-mid text-sm font-medium">
                {task.completed ? "Completed" : "Pending"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={() => navigate(`/tasks/edit/${task.id}`)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  onClick={() => doneTask(task.id)}
                >
                  Mark as Done
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button 
      className="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
      onClick={() => navigate("/tasks/add")}>
        Add Task
      </button>
    </div>
  );
}

export default TaskList;