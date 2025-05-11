import Navbar from "../../Components/Navbar";
import Calendar from "../../Components/Calendar"
import EventList from "../../Components/EventList"
import { useState } from "react";

function CalendarPage({ events }) {
  const [renderedEvents, setRenderedEvents] = useState([]);

  console.log(events);
  
  return (
    <div className="flex h-screen">
      <Navbar />
      <Calendar events={events} setRenderedEvents={setRenderedEvents} />
      <EventList events={renderedEvents} />
    </div>
  );
}

export default CalendarPage;