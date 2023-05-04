import { useRouter } from "next/router.js";
import EventSearch from "../../components/events/EventSearch.js";
import EventsList from "../../components/events/EventsList.js";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const allEventsData = getAllEvents();
  const router = useRouter();

  function findEventhandler(year, month) {
    const path = `/events/${year}/${month}`;

    router.push(path);
  }

  return (
    <div>
      <EventSearch onSearch={findEventhandler} />
      <EventsList eventsData={allEventsData} />
    </div>
  );
}

export default AllEventsPage;
