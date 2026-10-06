import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/dashboard">Placement Portal</Link>
      </div>

      <div className="navbar-right">
        <span>
          Welcome, {user ? user.name : "Student"}
        </span>

        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;