import Navbar from "../../Components/Navbar";
import Calendar from "../../Components/Calendar"
import EventList from "../../Components/EventList"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CalendarPage({ events, setEvents }) {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const navigate = useNavigate();

  function handleDeleteEvent(id) {
    setEvents(events => events.filter(event => event.id !== id));
    setSelectedEvents(events => events.filter(event => event.id !== id));
  }
  
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col items-center flex-1 gap-12">
        <Calendar events={events} setRenderedEvents={setSelectedEvents} />
        <button 
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={() => navigate("/events/add")}>Add New Event</button>
      </div>
      <EventList events={selectedEvents} deleteEvent={handleDeleteEvent} />
    </div>
  );
}

export default CalendarPage;