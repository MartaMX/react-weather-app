import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherInfo from "./WeatherInfo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <h1>Weather React</h1>
          <p>Search</p>

          <p>DemoCity</p>
          <p>
            Democonditions
            <ul>
              <li>
                <WeatherInfo />
              </li>
              <li>
                <span>DemoDate</span>, DemoDescription
              </li>
              <li>DemoHumidity, Demowind</li>
            </ul>
          </p>
          <p>25ª</p>
        </div>
      </div>
    </div>
  );
}

export default App;
