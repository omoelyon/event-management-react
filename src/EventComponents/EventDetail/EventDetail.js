import React, { Component } from "react";
import axios from "../NewEvent/node_modules/axios";

import "./FullPost.css";

const EventDetail = (props) => (
  <div className={styles.EventDetail}>
    <h1>this is my event detail</h1>
    <ToDo />
    <ToDo />
    <ToDo />
    <ToDo />
    <ToDo />
    <Item />
    <Item />
    <Item />
  </div>
);

export default EventDetail;
