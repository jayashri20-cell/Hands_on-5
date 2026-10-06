import { useState } from "react";
import { Link } from "react-router-dom";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");

  const locations = ["All", ...new Set(jobs.map((job) => job.location))];

  const filteredJobs = jobs.filter((job) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      job.company.toLowerCase().includes(searchText) ||
      job.role.toLowerCase().includes(searchText) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchText)
      );

    const matchesLocation =
      location === "All" || job.location === location;

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="jobs-page">
      <div className="page-header">
        <div>
          <h1>Job Openings</h1>
          <p>Search and explore the latest placement opportunities.</p>
        </div>

        <Link to="/applications" className="primary-btn">
          My Applications
        </Link>
      </div>

      <div className="job-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search company, role or skill..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <select
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        >
          {locations.map((item) => (
            <option key={item} value={item}>
              {item === "All" ? "All Locations" : item}
            </option>
          ))}
        </select>
      </div>

      <div className="jobs-count">
        <p>
          Showing <strong>{filteredJobs.length}</strong> job openings
        </p>
      </div>

      <div className="jobs-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <div className="no-results">
            <h2>No jobs found</h2>
            <p>Try a different company, role, skill or location.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Jobs;