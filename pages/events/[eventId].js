import { Router, useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";

import EventSummary from "../../components/eventsDetail/event-summary";
import EventContent from "../../components/eventsDetail/event-content";
import EventLogistics from "../../components/eventsDetail/event-logistics";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const eventData = getEventById(eventId);

  if (!eventData) {
    return <h1>Not Event Found!</h1>;
  }

  return (
    <Fragment>
      <EventSummary tietle={eventData.title} />
      <EventLogistics
        date={eventData.date}
        address={eventData.location}
        image={eventData.image}
        imageAlt={eventData.title}
      />
      <EventContent>
        <p>{eventData.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
