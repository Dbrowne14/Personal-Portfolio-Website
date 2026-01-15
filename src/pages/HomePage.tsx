import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <li>
        <ul>
          <NavLink to="about">About</NavLink>
          <NavLink to="/projects"> Projects </NavLink>
        </ul>
      </li>
      <>
        <h1>Welcome to My Personal Portfolio</h1>
      </>
    </div>
  );
}

export default App;
