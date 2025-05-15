import EditEventForm from "../../Components/EditEventForm";
import Navbar from "../../Components/Navbar";

function EditEventPage({events, editEvent}) {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col flex-1 items-center gap-5 pt-24">
        <h1 className="mb-4 text-4xl font-extrabold"> Add Your Event </h1>
        <EditEventForm events={events} editEvent={editEvent}/>
      </div>
    </div>
  );
}

export default EditEventPage;