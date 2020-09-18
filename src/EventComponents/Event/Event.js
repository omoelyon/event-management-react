import React from "react";

import Item from "./Item/Item";
import style from "./Event.module.css";

import Countdown from "react-countdown";

const Event = (props) => (
  <div className={style.Event}>
    <h1>this is event</h1>
    <Countdown date={"2020-11-11T01:02:03"} />
    <Item />
  </div>
);

export default Event;
