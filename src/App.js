import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {


  return (
    <div className="app">
      <Router>
          <Switch>
            <Route exact path="/" element={<HomeScreen />} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
