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


      {/* PLACEMENT READINESS */}

      <div className="dashboard-card placement-readiness">

        <div className="readiness-header">

          <div>
            <h2>🎯 Placement Readiness</h2>

            <p>
              Check your preparation level before attending placements.
            </p>
          </div>

          <div className="readiness-score">

            <strong>78%</strong>

            <span>
              Good Preparation
            </span>

          </div>

        </div>


        {/* APTITUDE */}

        <div className="skill-progress">

          <div className="skill-info">

            <span>
              🧠 Aptitude
            </span>

            <strong>
              80%
            </strong>

          </div>

          <div className="readiness-bar">

            <div
              className="readiness-fill"
              style={{
                width: "80%",
              }}
            ></div>

          </div>

        </div>


        {/* TECHNICAL SKILLS */}

        <div className="skill-progress">

          <div className="skill-info">

            <span>
              💻 Technical Skills
            </span>

            <strong>
              70%
            </strong>

          </div>

          <div className="readiness-bar">

            <div
              className="readiness-fill"
              style={{
                width: "70%",
              }}
            ></div>

          </div>

        </div>


        {/* COMMUNICATION */}

        <div className="skill-progress">

          <div className="skill-info">

            <span>
              🗣️ Communication
            </span>

            <strong>
              85%
            </strong>

          </div>

          <div className="readiness-bar">

            <div
              className="readiness-fill"
              style={{
                width: "85%",
              }}
            ></div>

          </div>

        </div>


        {/* RESUME */}

        <div className="skill-progress">

          <div className="skill-info">

            <span>
              📄 Resume
            </span>

            <strong>
              90%
            </strong>

          </div>

          <div className="readiness-bar">

            <div
              className="readiness-fill"
              style={{
                width: "90%",
              }}
            ></div>

          </div>

        </div>


        {/* SKILL GAP */}

        <div className="skill-gap">

          <strong>
            ⚠️ Skill to Improve
          </strong>

          <p>
            Your technical skill preparation is lower than the other areas.
            Focus more on technical interview questions and practical skills.
          </p>

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