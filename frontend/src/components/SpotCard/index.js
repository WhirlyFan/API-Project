import React from "react";
import { useHistory } from "react-router-dom";
import "./SpotCard.css"

export default function SpotCard({ spot }) {
  const history = useHistory();
  function handleClick(spotId) {
    history.push(`/spots/${spotId}`);
  }

  return (
    <div className="spot-card" onClick={() => handleClick(spot.id)}>
      <img className={"spot-card-image"} src={spot.previewImage} alt={`spot-${spot.id}-preview`}></img>
      <h3>
        {spot.city}, {spot.state} ★{parseFloat(spot.avgRating).toFixed(1) || parseFloat(spot.getRating).toFixed(1)}
        {/* broken on heroku needs refactoring to prevent NaN on spots without reviews */}
      </h3>
      <h3>${spot.price} night</h3>
    </div>
  );
}
