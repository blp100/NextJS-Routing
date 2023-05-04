import Link from "next/link";
import classes from "./EventsItem.module.css";
import Button from "../ui/Button";

function EventsItem(props) {
  return (
    <div className={classes.item}>
      <img src={"/"+props.image} />
      <div className={classes.content}>
        <h2>{props.title}</h2>
        <time>{props.date}</time>
        <address>{props.location}</address>
        <Button link={`/events/${props.id}`}>
          <span>Explore Event</span>
        </Button>
      </div>
    </div>
  );
}

export default EventsItem;
