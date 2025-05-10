import Navbar from "../../Components/Navbar";
import TaskList from "../../Components/TaskList";

function TasksPage({ tasks, setTasks }) {

  function handleDoneTask(id) {
    setTasks(tasks => tasks.map(task => task.id == id ? {...task, completed: true} : task));
  }

  function handleDeleteTask(id) {
    setTasks(tasks => tasks.filter(task => task.id != id));
  }

  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col w-full items-center gap-5 pt-24">
        <h1 className="mb-4 text-4xl font-extrabold"> Task List </h1>
        <TaskList tasks={tasks} deleteTask={handleDeleteTask} doneTask={handleDoneTask}/>
      </div>
    </div>
  );
}

export default TasksPage;