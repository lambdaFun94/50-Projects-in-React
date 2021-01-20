import React from "react";
import "./Panel.css";

const Panel = ({ item, onClick }) => {
  const { key, title, url, active } = item;
  const style = {
    backgroundImage: `url(${url})`,
  };

  let classes = "panel";
  classes += active ? " panel-active" : "";
  console.log(title);
  return (
    <div key={key} onClick={onClick} className={classes} style={style}>
      <h3>{title}</h3>
    </div>
  );
};

export default Panel;
