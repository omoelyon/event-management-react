import React from "react";
import Moment from "moment";

const ToDo = (props) => (
  
  <React.Fragment>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div className="input-group-text">
  
         
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
          ></input>
        </div>
      </div>
      <div
        className="alert alert-primary form-control justify"
        role="alert"
        aria-label="Text input with checkbox"
      >
        <span> {props.todo.description}</span>
        {/* <span>{props.todo.created}</span> */}
        <span>
          {Moment(`${props.todo.created}`).format("YYYY-MM-DD HH:MM")}
        </span>
      </div>
    </div>
  </React.Fragment>
);

export default ToDo;
