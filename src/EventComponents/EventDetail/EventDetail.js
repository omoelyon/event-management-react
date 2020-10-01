import React from "react";
import styles from "./EventDetail.module.css";

import ToDos from "./ToDos/ToDos";
import { getEvents } from "../../dummyData/eventData";

const EventDetail = (props) => {
  // const [EventData, setEventData] = useState({ EventData: getEvents[0] });
  const EventData = getEvents()[0];
  return (
    <div className={styles.EventDetail}>
      <h1>this is my event detail</h1>
      <ToDos todos={EventData.toDoList} />

      {/* <Items items={EventData.itemList} /> */}
    </div>
  );
};

export default EventDetail;
