import TaskForm from "../../Components/TaskForm";
import Navbar from "../../Components/Navbar";

function AddTaskPage({ addTask }) {

  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col w-full items-center gap-5 pt-24">
        <h1 className="mb-4 text-4xl font-extrabold"> Add Your Task </h1>
        <TaskForm addTask={addTask}/>
      </div>
    </div>
  );
}

export default AddTaskPage;