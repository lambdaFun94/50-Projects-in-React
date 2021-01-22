import React, { useState } from "react";
import ButtonPanel from "./ButtonPanel";

import "./ProgressBar.css";

const ProgressBar = () => {
  const [currIdx, setCurrIdx] = useState(1);
  const labels = [
    { text: 1, active: "active" },
    { text: 2, active: "" },
    { text: 3, active: "" },
    { text: 4, active: "" },
  ];

  const calculateWidth = () =>
    ((currIdx - 1) / (labels.length - 1)) * 100 + "%";

  const onClickPrev = () => {
    if (currIdx > 1) {
      setCurrIdx(currIdx - 1);
    } else if (currIdx < 1) {
      setCurrIdx(1);
    }
  };

  const onClickNext = () => {
    if (currIdx < labels.length) {
      setCurrIdx(currIdx + 1);
    }
  };

  const renderBubbles = () => {
    labels.forEach((label, idx) => {
      if (idx + 1 <= currIdx) {
        label.active = "active";
      } else {
        label.active = "";
      }
    });

    return labels.map((label) => (
      <div className={`bubble ${label.active}`}>{label.text}</div>
    ));
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div
          style={{ width: `${calculateWidth()}` }}
          className="progress"
        ></div>
        {renderBubbles()}
      </div>
      <ButtonPanel
        currIdx={currIdx}
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
      />
    </div>
  );
};

export default ProgressBar;
