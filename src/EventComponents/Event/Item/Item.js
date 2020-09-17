import React, { useState } from "react";
import style from "./Item.module.css";

const Item = (props) => {
  const [gotten, setGotten] = useState(false);

  return (
    <div className={style}>
      <h3>this is Item</h3>
      <button
        onClick={() => {
          setGotten(!gotten);
          console.log(gotten);
        }}
      >
        { gotten  ? "gotten" : "not gotten"}
      </button>
    </div>
  );
};

export default Item;
