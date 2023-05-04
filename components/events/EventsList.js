import EventsItem from "./EventsItem";

function EventsList(props) {
  return (
    <div>
      {props.eventsData.map((item) => {
        return (
          <EventsItem
            key={item.id}
            id={item.id}
            title={item.title}
            location={item.location}
            image={item.image}
            date={item.date}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default EventsList;
