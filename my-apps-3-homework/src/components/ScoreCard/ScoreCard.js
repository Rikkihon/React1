import React from "react";
import "./ScoreCard.css";

const ScoreCard = props => (
  <div className="title-card-body">
     <div className="ScoreCard">
      <ul>
          <strong>Your Current Score: </strong> {props.score}
      </ul>
    </div>
    
  </div>
);

export default ScoreCard;
