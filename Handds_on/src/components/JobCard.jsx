import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3>{job.role}</h3>
        <span>{job.company}</span>
      </div>

      <p>📍 {job.location}</p>
      <p>💰 {job.salary}</p>
      <p>💼 {job.type}</p>
      <p>📅 Deadline: {job.deadline}</p>

      <div className="job-skills">
        {job.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <Link to={`/jobs/${job.id}`} className="view-job-btn">
        View Job
      </Link>
    </div>
  );
}

export default JobCard;