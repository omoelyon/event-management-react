import React from "react";

import style from "./Event.module.css";

import Countdown from "react-countdown";

const Event = (props) => (
  <React.Fragment>
    <th
      scope="row"     
    >
      {props.index}
    </th>
    <td>{props.name}</td>
    <td>
      <Countdown date={props.date} />
    </td>
    <td className={style.tr}>{props.preparedness}</td>
  </React.Fragment>
);

export default Event;
