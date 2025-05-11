import { useState, useEffect } from "react";

function Calendar({ events, setRenderedEvents }) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [dateList, setDateList] = useState([]);
  const [firstWeekDay, setFirstWeekDay] = useState(0);

  useEffect(() => {
    function initDateList() {
      const numDays = new Date(year, month + 1, 0).getDate();
      const dates = [];
      for (let i = 0; i < numDays; i++) {
        let currDate = new Date(year, month, i + 1);
        dates.push({
          date: currDate,
          events: events.filter((event) => sameDate(event.date, currDate)),
        });
      }
      setDateList(dates);
    }

    function initFirstWeekDay() {
      const firstDayOfMonth = new Date(year, month, 1);
      setFirstWeekDay(firstDayOfMonth.getDay());
    }

    initDateList();
    initFirstWeekDay();
  }, [year, month, events]);

  function sameDate(date1, date2) {
    return (
      date1.getDate() == date2.getDate() &&
      date1.getMonth() == date2.getMonth() &&
      date1.getFullYear() == date2.getFullYear()
    );
  }

  function changeMonth(offset) {
    const newDate = new Date(year, month + offset);
    setYear(newDate.getFullYear());
    setMonth(newDate.getMonth());
  }

  return (
    <div className="max-w-4xl mx-auto p-4 w-full">
      <CalendarHeader year={year} month={month} changeMonth={changeMonth}/>
      <CalendarWeekdays />

      <div className="grid grid-cols-7 gap-2 mt-2 text-center">
        {Array.from({ length: firstWeekDay }, (_, i) => (
          <div key={`empty-${i}`}></div>
        ))}

        {dateList.map((date) => (
          <CalendarDate date={date} 
          setRenderedEvents={setRenderedEvents} 
          id={`date-${date.date.toISOString().split("T")[0]}`} 
          key={`date-${date.date.toISOString().split("T")[0]}`}/>
        ))}
      </div>
    </div>
  )
}

function CalendarHeader({ year, month, changeMonth }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <button
        className="w-10 text-lg font-semibold hover:bg-gray-300 transition duration-100"
        onClick={() => changeMonth(-1)}
      >
        &lt;
      </button>
      <h2 className="text-xl font-bold text-center">
        {new Date(year, month).toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </h2>
      <button
        className="w-10 text-lg font-semibold hover:bg-gray-300 transition duration-100"
        onClick={() => changeMonth(1)}
      >
        &gt;
      </button>
    </div>
  );
}

function CalendarWeekdays() {
  return (
    <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-600">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
  );
}

function CalendarDate({ date, setRenderedEvents, id }) {
  function isToday(date) {
    const today = new Date();
    return (
      today.getDate() === date.getDate() &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear()
    );
  }

  return (
    <div
      id={id}
      key={`${date.date.getFullYear()}-${date.date.getMonth()}-${date.date.getDate()}`}
      className={`border rounded-lg py-2 h-24 ${
        isToday(date.date)
          ? "bg-blue-100 border-blue-400 text-blue-700 font-semibold"
          : "hover:bg-gray-100"
      } relative`}
    >
      <h3 className="bg-center text-2xl">{date.date.getDate()}</h3>

      {date.events.length > 0 ? <EventsButton events={date.events} setRenderedEvents={setRenderedEvents} /> : <></>}
    </div>
  );
}

function EventsButton({ events, setRenderedEvents }) {
  function handleClick() {
    setRenderedEvents(events);
  }

  return (
    <button
      className="rounded-full absolute bottom-1 right-1 bg-red-400 hover:bg-red-600 
      transition-colors duration-100 text-[10px] text-white w-5"
      onClick={handleClick}
    >
      {events.length}
    </button>
  );
}

export default Calendar;