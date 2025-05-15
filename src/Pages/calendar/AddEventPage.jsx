import AddEventForm from "../../Components/AddEventForm";
import Navbar from "../../Components/Navbar";

function AddEventPage({ addEvent }) {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col w-full items-center gap-5 pt-24">
        <h1 className="mb-4 text-4xl font-extrabold"> Add Your Event </h1>
        <AddEventForm addEvent={addEvent}/>
      </div>
    </div>
  );
}

export default AddEventPage;