import { useState } from "react";

function Applications() {
  const [applications] = useState(() => {
    return (
      JSON.parse(
        localStorage.getItem("placementApplications")
      ) || []
    );
  });

  const [selectedApplication, setSelectedApplication] =
    useState(null);

  function viewApplication(application) {
    setSelectedApplication(application);
  }

  function closeApplication() {
    setSelectedApplication(null);
  }

  if (selectedApplication) {
    return (
      <div className="applications-page">
        <div className="page-header">
          <div>
            <h1>Application Details</h1>
            <p>
              Your submitted application for{" "}
              <strong>{selectedApplication.company}</strong>
            </p>
          </div>

          <button
            className="primary-btn"
            onClick={closeApplication}
          >
            ← Back to Applications
          </button>
        </div>

        <div className="application-view-card">
          <h2>Job Information</h2>

          <div className="application-detail-grid">
            <div>
              <strong>Company</strong>
              <p>{selectedApplication.company}</p>
            </div>

            <div>
              <strong>Position</strong>
              <p>{selectedApplication.role}</p>
            </div>

            <div>
              <strong>Applied Date</strong>
              <p>{selectedApplication.appliedDate}</p>
            </div>

            <div>
              <strong>Status</strong>
              <p>{selectedApplication.status}</p>
            </div>
          </div>

          <h2>Personal Information</h2>

          <div className="application-detail-grid">
            <div>
              <strong>Full Name</strong>
              <p>{selectedApplication.name}</p>
            </div>

            <div>
              <strong>Age</strong>
              <p>{selectedApplication.age}</p>
            </div>

            <div>
              <strong>Email</strong>
              <p>{selectedApplication.email}</p>
            </div>

            <div>
              <strong>Phone Number</strong>
              <p>{selectedApplication.phone}</p>
            </div>

            <div>
              <strong>Course</strong>
              <p>{selectedApplication.course}</p>
            </div>

            <div>
              <strong>Experience</strong>
              <p>{selectedApplication.experience}</p>
            </div>

            <div>
              <strong>Expected Salary</strong>
              <p>{selectedApplication.expectedSalary}</p>
            </div>

            <div>
              <strong>Skills</strong>
              <p>{selectedApplication.skills}</p>
            </div>
          </div>

          <h2>Resume</h2>

          <div className="resume-box">
            <p>
              📄 {selectedApplication.resumeName}
            </p>
          </div>

          <h2>Additional Information</h2>

          <div className="additional-info-box">
            <p>
              {selectedApplication.additionalInfo ||
                "No additional information provided."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="applications-page">
      <div className="page-header">
        <div>
          <h1>My Applications</h1>

          <p>
            Track all your submitted job applications and
            their current status.
          </p>
        </div>
      </div>

      <div className="applications-summary">
        <div className="summary-box">
          <h3>Total Applications</h3>
          <strong>{applications.length}</strong>
        </div>

        <div className="summary-box">
          <h3>Under Review</h3>
          <strong>
            {
              applications.filter(
                (application) =>
                  application.status === "Under Review"
              ).length
            }
          </strong>
        </div>

        <div className="summary-box">
          <h3>Interviews</h3>
          <strong>
            {
              applications.filter(
                (application) =>
                  application.status === "Interview Scheduled"
              ).length
            }
          </strong>
        </div>

        <div className="summary-box">
          <h3>Selected</h3>
          <strong>
            {
              applications.filter(
                (application) =>
                  application.status === "Selected"
              ).length
            }
          </strong>
        </div>
      </div>

      {applications.length === 0 ? (
        <div className="no-results">
          <h2>No Applications Yet</h2>

          <p>
            You have not submitted any job applications yet.
          </p>
        </div>
      ) : (
        <div className="table-card">
          <h2>Submitted Applications</h2>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Applied Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((application) => (
                  <tr key={application.id}>
                    <td>
                      <strong>{application.company}</strong>
                    </td>

                    <td>{application.role}</td>

                    <td>{application.appliedDate}</td>

                    <td>
                      <span
                        className={`status ${application.status
                          .toLowerCase()
                          .replaceAll(" ", "-")}`}
                      >
                        {application.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="view-application-btn"
                        onClick={() =>
                          viewApplication(application)
                        }
                      >
                        View Application
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Applications;