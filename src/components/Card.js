import React from "react";
import style from "./Card.module.css";

const Card = ({ content, title }) => (
  <div className={style.card}>
    <div className={style.heading}>
      <h2>{title}</h2>
    </div>
    <div className={style.content}>{content}</div>
  </div>
);

export default Card;
