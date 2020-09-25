import React from "react";
import events from "../../dummyData/eventData";
import Event from "../Event/Event";
// import styles from "./Events.module.css";

const Events = (props) => {
  // const eventList = { ...events };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">index</th>
            <th scope="col">eventname</th>
            <th scope="col">countdown</th>
            <th scope="col">preparedness</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event._id}>
              <Event
                index={index}
                name={event.name}
                date={event.eventDate}
                preparedness={90}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Events;
