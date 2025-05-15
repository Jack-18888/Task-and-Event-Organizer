import EventItem from "./EventItem";

function EventList({ events, deleteEvent }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-2/5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <EventTableHeader />
        <tbody>
          {events.map((event, i) => (
            <EventItem event={event} key={i} deleteEvent={() => deleteEvent(event.id)} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EventTableHeader() {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Title
        </th>
        <th scope="col" className="px-6 py-3">
          Description
        </th>
        <th scope="col" className="px-6 py-3">
          Date
        </th>
        <th scope="col" className="px-6 py-3">
          Start time
        </th>
        <th scope="col" className="px-6 py-3">
          End time
        </th>
        <th scope="col" className="px-6 py-3">
          Actions
        </th>
        <th scope="col" className="px-6 py-3">
          <span className="sr-only">Edit</span>
        </th>
      </tr> 
    </thead>
  );
}

export default EventList;