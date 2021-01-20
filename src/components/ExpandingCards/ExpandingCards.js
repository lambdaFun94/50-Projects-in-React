import React, { useState } from "react";
import "./ExpandingCards.css";

import Panel from "./Panel";

const images = [
  {
    id: 0,
    title: "Flowers",
    url:
      "https://images.unsplash.com/photo-1610687274720-bda24a3515a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    active: false,
  },
  {
    id: 1,
    title: "Log Cabin",
    url:
      "https://images.unsplash.com/photo-1609657331895-afbbbef89695?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    active: true,
  },
  {
    id: 2,
    title: "Photographer",
    url:
      "https://images.unsplash.com/photo-1610745960669-41c93628aced?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    active: false,
  },
  {
    id: 3,
    title: "Flower Pots",
    url:
      "https://images.unsplash.com/photo-1609829644488-98fd6c7decc9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    active: false,
  },
  {
    id: 4,
    title: "Eggs",
    url:
      "https://images.unsplash.com/photo-1610434581346-c272043338c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    active: false,
  },
];

const ExpandingCards = () => {
  const [active, setActive] = useState(images);

  const toggleActive = (id) => {
    const prevState = [...active];
    prevState.map((item) => (item.active = false));
    prevState[id].active = true;
    setActive(prevState);
  };

  const renderPanels = () => {
    return active.map((image) => (
      <Panel onClick={() => toggleActive(image.id)} item={image} />
    ));
  };

  return <div className="expanding-cards">{renderPanels()}</div>;
};

export default ExpandingCards;
