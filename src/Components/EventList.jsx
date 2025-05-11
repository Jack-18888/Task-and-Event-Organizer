function EventList({ events }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <EventTableHeader />
        <tbody>
          {events.map((event, i) => (
            <EventItem event={event} key={i} />
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
          <span className="sr-only">Edit</span>
        </th>
      </tr> 
    </thead>
  );
}

function EventItem({ event, id }) {
  return (
    <tr
    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
    id={id}>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {event.title}
      </th>
      <td className="px-6 py-4">{event.description}</td>
      <td className="px-6 py-4">{event.date.toLocaleDateString()}</td>
      <td className="px-6 py-4">{event.start_time}</td>
      <td className="px-6 py-4">{event.end_time}</td>
      <td className="px-6 py-4 text-right">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
}

export default EventList;