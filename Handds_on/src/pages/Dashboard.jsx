import { useState } from "react";
import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";

function Dashboard() {
  const [applications] = useState(() => {
    return (
      JSON.parse(
        localStorage.getItem("placementApplications")
      ) || []
    );
  });

  const totalApplications = applications.length;

  const applicationsUnderReview = applications.filter(
    (application) =>
      application.status === "Under Review"
  ).length;

  const interviewsScheduled = applications.filter(
    (application) =>
      application.status === "Interview Scheduled"
  ).length;

  const selectedStudents = applications.filter(
    (application) =>
      application.status === "Selected"
  ).length;

  return (
    <div className="dashboard-page">

      {/* HEADER */}

      <div className="page-header">
        <div>
          <h1>Student Dashboard</h1>

          <p>
            Track your placement journey in one place.
          </p>
        </div>

        <Link
          to="/jobs"
          className="primary-btn"
        >
          View Job Openings
        </Link>
      </div>


      {/* STATISTICS */}

      <div className="stats-grid">

        <StatCard
          title="Total Jobs Applied"
          value={totalApplications}
          icon="📄"
          link="/applications"
        />

        <StatCard
          title="Applications Under Review"
          value={applicationsUnderReview}
          icon="⏳"
          link="/applications"
        />

        <StatCard
          title="Interviews Scheduled"
          value={interviewsScheduled}
          icon="📅"
          link="/interviews"
        />

        <StatCard
          title="Students Selected"
          value={selectedStudents}
          icon="🎯"
          link="/applications"
        />

      </div>


      {/* DASHBOARD GRID */}

      <div className="dashboard-grid">

        {/* UPCOMING DEADLINES */}

        <div className="dashboard-card">

          <h2>Upcoming Deadlines</h2>

          <Link
            to="/jobs/1"
            className="deadline-link"
          >
            <div className="deadline-item">

              <div>
                <h3>TCS</h3>
                <p>Frontend Developer</p>
              </div>

              <span>15 Oct 2026</span>

            </div>
          </Link>


          <Link
            to="/jobs/2"
            className="deadline-link"
          >
            <div className="deadline-item">

              <div>
                <h3>Infosys</h3>
                <p>Software Developer</p>
              </div>

              <span>20 Oct 2026</span>

            </div>
          </Link>


          <Link
            to="/jobs/3"
            className="deadline-link"
          >
            <div className="deadline-item">

              <div>
                <h3>Zoho</h3>
                <p>Web Developer</p>
              </div>

              <span>25 Oct 2026</span>

            </div>
          </Link>

        </div>


        {/* PLACEMENT PROGRESS */}

        <div className="dashboard-card">

          <h2>Placement Progress</h2>


          {/* APPLICATIONS */}

          <div className="progress-item">

            <div>
              <span>Applications</span>

              <strong>
                {totalApplications}
              </strong>
            </div>

            <div className="progress-bar">

              <div
                className="progress-fill applications"
                style={{
                  width:
                    totalApplications > 0
                      ? "75%"
                      : "0%",
                }}
              ></div>

            </div>

          </div>


          {/* INTERVIEWS */}

          <div className="progress-item">

            <div>
              <span>Interviews</span>

              <strong>
                {interviewsScheduled}
              </strong>
            </div>

            <div className="progress-bar">

              <div
                className="progress-fill interviews"
                style={{
                  width:
                    interviewsScheduled > 0
                      ? "45%"
                      : "0%",
                }}
              ></div>

            </div>

          </div>


          {/* SELECTION */}

          <div className="progress-item">

            <div>
              <span>Selection</span>

              <strong>
                {selectedStudents}
              </strong>
            </div>

            <div className="progress-bar">

              <div
                className="progress-fill selection"
                style={{
                  width:
                    selectedStudents > 0
                      ? "20%"
                      : "0%",
                }}
              ></div>

            </div>

          </div>

        </div>

      </div>


      {/* QUICK ACTIONS */}

      <div className="dashboard-card">

        <h2>Quick Actions</h2>

        <div className="quick-actions">

          <Link to="/jobs">
            🔍 Search Jobs
          </Link>

          <Link to="/applications">
            📋 My Applications
          </Link>

          <Link to="/interviews">
            📅 Interview Schedule
          </Link>

          <Link to="/profile">
            👤 Update Profile
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;