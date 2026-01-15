import { Link } from "react-router-dom";

const RESTError = () => {
  return (
    <div className="flex font-bold">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Home</Link>
        <a href="/">Home from A</a>
    </div>
  )
}

export default RESTError

    