import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEventForm = ({ events, editEvent }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const eventId = parseInt(id);
  const event = events.find(e => e.id == eventId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    function getEventDateString(event) {
      const startTimeList = event.start_time.split("T");
      const date = new Date(startTimeList[0]);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-based
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    }

    function getTime(time) {
      const timeList = time.split("T");
      const clockTime = timeList[1].split(".");
      return clockTime[0];
    }

    if (event) {
      setTitle(event.title);
      setDescription(event.description);
      setDate(getEventDateString(event));
      setStartTime(getTime(event.start_time));
      setEndTime(getTime(event.end_time));
    }
  }, [event]);

  function handleSubmit(e) {
    e.preventDefault();

    function toDateTime(date, time) {
      return date + "T" + time + ":00.000Z";
    }

    const newEvent = {
      id: eventId,
      title, description,
      start_time: toDateTime(date, startTime), 
      end_time: toDateTime(date, endTime)
    }

    editEvent(eventId, newEvent);
    navigate("/calendar");
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Edit Your Event</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="time"
        placeholder="Start Time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="time"
        placeholder="Start Time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Edit Event
      </button>
    </form>
  )
}

export default EditEventForm
