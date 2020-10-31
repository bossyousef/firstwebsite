import logo from "./logo.svg";
import "./App.css";
import Yousef from "./Yousef";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      {[...Array(5).keys()].map((element) => (
        <Yousef />
      ))}
    </div>
  );
}

export default App;
