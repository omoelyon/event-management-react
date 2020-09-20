import React from "react";

import Event from "../Event/Event";
import styles from "./Events.module.css";
import { Card, ListGroup } from "react-bootstrap";

const Events = (props) => {
  return (
    <div>
      <h1>these are my Events</h1>
      <div className={styles.Events}>
        <Event />
        <Event />

        <Card style={{ width: "80%", alignItems: "center" }}>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            {/* <ListGroup.Item>Cras justo odio</ListGroup.Item> */}
            <ListGroup.Item>
              <Event />
            </ListGroup.Item>
            <ListGroup.Item>
              <Event />
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};
export default Events;
