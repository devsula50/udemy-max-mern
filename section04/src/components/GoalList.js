import React from "react";

import "./GoalList.css";

const GoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.goals.map((g) => (
        <li>{g.text}</li>
      ))}
    </ul>
  );
};

export default GoalList;
