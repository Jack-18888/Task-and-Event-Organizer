import { useState } from "react";

function AddEventForm({ addEvent }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  function handleAddEvent() {
    const newEvent = {
      title: title, 
      description: description,
      
    }
  }
}

export default AddEventForm;