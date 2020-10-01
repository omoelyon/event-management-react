import React from "react";
import ToDo from "../ToDo/ToDo";

const ToDos = (props) => {
  //   console.log("props : ", props);

  return (
    <React.Fragment>
      {props.todos.map((todo) => (
        <ToDo todo={todo} key={todo._id} />
      ))}
    </React.Fragment>
  );
};

export default ToDos;
