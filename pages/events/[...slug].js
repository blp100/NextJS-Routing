import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventsList from "../../components/events/EventsList";

function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  console.log(filteredData);

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <p className="center">Invailding filter. Please adjust your value.</p>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0){
    return (
      <p className="center">Not event found for chosen filter.</p>
    );
  }

  return (
    <div>
     <EventsList eventsData={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;
