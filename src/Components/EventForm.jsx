import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    function toDateTime(date, time) {
      return date + "T" + time + ":00.000Z";
    }

    const newEvent = {
      title, 
      description, 
      start_time: toDateTime(date, startTime),
      end_time: toDateTime(date, endTime)
    }

    addEvent(newEvent);
    navigate("/calendar");
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Add New Event</h2>
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
        Add Event
      </button>
    </form>
  )
}

export default EventForm;
