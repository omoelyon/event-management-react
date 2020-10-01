import React, { useState } from "react";
import style from "./Item.module.css";

const Item = (props) => {
  const [gotten, setGotten] = useState(false);

  return (
    <div className={style.Item}>
      <h3>this is Item</h3>
      <h1>i just deployed to netlify</h1>
      <button
        onClick={() => {
          setGotten(!gotten);
        }}
      >
        {gotten ? "gotten" : "not gotten"}
      </button>
    </div>
  );
};

export default Item;
