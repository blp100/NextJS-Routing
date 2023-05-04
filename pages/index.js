import EventsList from "../components/events/EventsList.js";
import { getFeaturedEvents } from "../dummy-data.js";

function HomePage() {
  const featuredEventsData = getFeaturedEvents();

  return (
    <div>
      <EventsList eventsData={featuredEventsData} />
    </div>
  );
}

export default HomePage;
