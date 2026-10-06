import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Placement Portal</h2>

      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/jobs">Job Openings</NavLink>
        <NavLink to="/applications">My Applications</NavLink>
        <NavLink to="/interviews">Interviews</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/notifications">Notifications</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;