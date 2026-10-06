import { Link } from "react-router-dom";

function StatCard({ title, value, icon, link }) {
  return (
    <Link to={link} className="stat-card-link">
      <div className="stat-card">
        <div className="stat-icon">
          {icon}
        </div>

        <div className="stat-content">
          <h3>{value}</h3>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
}

export default StatCard;