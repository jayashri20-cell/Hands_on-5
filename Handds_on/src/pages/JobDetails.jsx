import { Link, useParams } from "react-router-dom";
import jobs from "../data/jobs";

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <div className="no-results">
        <h2>Job Not Found</h2>

        <p>The selected job does not exist.</p>

        <Link to="/jobs" className="primary-btn">
          Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="job-details-page">
      <div className="page-header">
        <div>
          <h1>{job.role}</h1>
          <p>{job.company}</p>
        </div>

        <Link to="/jobs" className="primary-btn">
          Back to Jobs
        </Link>
      </div>

      <div className="job-details-card">
        <h2>Job Information</h2>

        <div className="job-info-grid">
          <div>
            <strong>Company</strong>
            <p>{job.company}</p>
          </div>

          <div>
            <strong>Location</strong>
            <p>{job.location}</p>
          </div>

          <div>
            <strong>Salary</strong>
            <p>{job.salary}</p>
          </div>

          <div>
            <strong>Job Type</strong>
            <p>{job.type}</p>
          </div>

          <div>
            <strong>Application Deadline</strong>
            <p>{job.deadline}</p>
          </div>
        </div>

        <h2>Required Skills</h2>

        <div className="job-skills">
          {job.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <Link
          to={`/jobs/${job.id}/apply`}
          className="primary-btn"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}

export default JobDetails;