import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <ul className="flex flex-row gap-3">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects"> Projects </NavLink>
        </li>
        <li>
          <NavLink to="/contact"> Contact Page </NavLink>
        </li>
      </ul>
      <div className="font">
        <h1>Welcome to My Personal Portfolio</h1>
      </div>
    </div>
  );
}

export default App;
