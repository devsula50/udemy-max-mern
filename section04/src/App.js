import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const courseGoals = [
    { id: "cg1", text: "Finish the Course" },
    { id: "cg1", text: "Learn all about the Course Main Topic" },
    { id: "cg1", text: "Help other students in the Course Q&A" },
  ];

  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal);
    console.log(courseGoals);
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

// class style component
/* class App extends React.Component {
  render() {}
} */

export default App;
