function EventItem({ event, id }) {

  function getEventDateString(event) {
    const startTimeList = event.start_time.split("T");
    const date = new Date(startTimeList[0]);
    return date.toLocaleDateString();
  }

  function getTime(time) {
    const timeList = time.split("T");
    const clockTime = timeList[1].split(".");
    return clockTime[0];
  }

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
      <td className="px-6 py-4 max-w-1/5">{event.description}</td>
      <td className="px-6 py-4">{getEventDateString(event)}</td>
      <td className="px-6 py-4">{getTime(event.start_time)}</td>
      <td className="px-6 py-4">{getTime(event.end_time)}</td>
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

export default EventItem;