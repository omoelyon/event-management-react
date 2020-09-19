import React from "react";

import style from "./Event.module.css";

import Countdown from "react-countdown";

const Event = (props) => (
  <div className={( style.Event)}>
    <dl className={style.Content} >
    <dt>this is event</dt>
    <dd>
      <Countdown date={"2020-11-11T01:02:03"} />
    </dd>
    </dl>
  </div>
);

export default Event;
