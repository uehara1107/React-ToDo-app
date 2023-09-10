import { TaskArea } from "./components/templates/taskArea";
import { TaskAppPages } from "./components/Pages/taskPages";

function App() {
  return (
    <div className="App">
      <TaskAppPages>
        <TaskArea />
      </TaskAppPages>
    </div>
  );
}

export default App;