import "./App.css";
import GoalList from "./components/GoalList";

const App = () => {
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList />
    </div>
  );
};

// class style component
/* class App extends React.Component {
  render() {}
} */

export default App;
