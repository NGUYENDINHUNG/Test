import React, { useState } from "react";
import "./CardGroup.css";
import CardItem from "./CardItem";
import { Profile } from "../../assets/assets";

const CardGroup = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedProfiles = showAll ? Profile : Profile.slice(0, 6);

  return (
    <div className="cardGroup">
      <div className="cardGroup_item">
        {displayedProfiles.map((item, index) => (
          <CardItem
            key={item.id}
            name={item.name}
            position={item.position}
            avarta={item.avarta}
            title={item.title}
          />
        ))}
        {/* {Profile.length > 6 && (
          <button className="card_button" onClick={toggleShowAll}>
            <label>{showAll ? "See Less" : "See All Team"}</label>
          </button>
        )} */}
      </div>
      {Profile.length > 6 && (
          <button className="card_button" onClick={toggleShowAll}>
            <label>{showAll ? "See Less" : "See All Team"}</label>
          </button>
        )}
    </div>
  );
};

export default CardGroup;  