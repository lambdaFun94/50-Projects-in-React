import React from "react";
import "./Card.css";

const Card = ({ content, title }) => (
  <div className="card">
    <div className="header">
      <h1>{title}</h1>
    </div>
    <div className="content">{content}</div>
  </div>
);

export default Card;
