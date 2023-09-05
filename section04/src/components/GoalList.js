import React from "react";

import "./GoalList.css";

const GoalList = (props) => {
  return (
    <ul className="goal-list">
      <li>{props.goals[0].text}</li>
      <li>{props.goals[1].text}</li>
      <li>{props.goals[2].text}</li>
    </ul>
  );
};

export default GoalList;
