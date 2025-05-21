import Navbar from "../../Components/Navbar";
import TaskList from "../../Components/TaskList";

function TasksPage({ tasks, deleteTask, setTasks }) {

  function handleDoneTask(id) {
    setTasks(tasks => tasks.map(task => task.id == id ? {...task, completed: true} : task));
  }

  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col items-center gap-5 pt-24 flex-1">
        <h1 className="mb-4 text-4xl font-extrabold"> Task List </h1>
        <TaskList tasks={tasks} deleteTask={deleteTask} doneTask={handleDoneTask}/>
      </div>
    </div>
  );
}

export default TasksPage;