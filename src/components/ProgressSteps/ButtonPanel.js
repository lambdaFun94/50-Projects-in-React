import React from "react";
import "./ButtonPanel.css";

const ButtonPanel = ({ currIdx, onClickPrev, onClickNext }) => {
  return (
    <div className="btn-panel">
      <button
        onClick={onClickPrev}
        className={`btn ${currIdx === 1 ? "disabled" : "active"}`}
      >
        Prev
      </button>
      <button
        onClick={onClickNext}
        className={`btn ${currIdx === 4 ? "disabled" : "active"}`}
      >
        Next
      </button>
    </div>
  );
};

export default ButtonPanel;
