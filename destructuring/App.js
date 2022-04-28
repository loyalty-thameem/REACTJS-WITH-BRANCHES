import { Counter } from "../counter";
import { Userone } from "../userone";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Userone firstName="thameem" lastName="ansari" />
      <Counter />
    </div>
  );
}
