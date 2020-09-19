import React from "react";

import Event from "../Event/Event";
import styles from "./Events.module.css";

const Events = (props) => {
  return (
    <div>
      <h1>these are my Events</h1>
      <div className={styles.Events}>
        
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
};
export default Events;
