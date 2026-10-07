import React, { useState } from "react";

function Interviews() {
  const [selectedInterview, setSelectedInterview] = useState(null);

  const interviews = [
    {
      company: "TCS",
      role: "Software Developer",
      date: "10 OCT 2026",
      time: "10:00 AM",
      mode: "Online",
      venue: "Microsoft Teams",
      interviewer: "HR & Technical Panel",
      status: "Upcoming",
      progress: 80,
      instructions: "Keep your resume and college ID ready.",
    },
    {
      company: "Infosys",
      role: "System Engineer",
      date: "14 OCT 2026",
      time: "11:30 AM",
      mode: "Offline",
      venue: "College Placement Cell",
      interviewer: "Infosys Recruitment Team",
      status: "Upcoming",
      progress: 65,
      instructions: "Bring 2 copies of your resume and college ID.",
    },
    {
      company: "Wipro",
      role: "Frontend Developer",
      date: "18 OCT 2026",
      time: "02:00 PM",
      mode: "Online",
      venue: "Google Meet",
      interviewer: "Wipro Technical Panel",
      status: "Upcoming",
      progress: 55,
      instructions:
        "Join the meeting 10 minutes before the scheduled time.",
    },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .tracker-page {
          min-height: 100vh;
          width: 100%;
          padding: 32px;
          background: #f6f8fc;
          font-family: Arial, sans-serif;
        }

        /* HEADER */

        .tracker-header {
          margin-bottom: 28px;
        }

        .tracker-header h1 {
          margin: 0;
          font-size: 32px;
          color: #111827;
          font-weight: 700;
        }

        .tracker-header p {
          margin: 8px 0 0;
          color: #6b7280;
          font-size: 15px;
        }

        /* STATISTICS */

        .stats-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 950px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
        }

        .stat-number {
          font-size: 28px;
          font-weight: 700;
          color: #2563eb;
        }

        .stat-label {
          margin-top: 5px;
          color: #6b7280;
          font-size: 13px;
        }

        /* PLACEMENT JOURNEY */

        .journey-card {
          max-width: 950px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 25px;
          margin-bottom: 30px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
        }

        .journey-card h2 {
          margin: 0 0 25px;
          font-size: 18px;
          color: #111827;
        }

        .journey {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .journey-step {
          display: flex;
          align-items: center;
          flex: 1;
        }

        .journey-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #2563eb;
          color: white;
          font-weight: bold;
          font-size: 13px;
          flex-shrink: 0;
        }

        .journey-label {
          margin-left: 8px;
          color: #374151;
          font-size: 12px;
          font-weight: 600;
        }

        .journey-line {
          flex: 1;
          height: 3px;
          background: #2563eb;
          margin: 0 10px;
        }

        /* SECTION TITLE */

        .section-title {
          max-width: 950px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .section-title h2 {
          margin: 0;
          font-size: 20px;
          color: #111827;
        }

        .section-title span {
          font-size: 13px;
          color: #6b7280;
        }

        /* INTERVIEW LIST */

        .interview-list {
          max-width: 950px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        /* INTERVIEW CARD */

        .interview-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 22px;
          cursor: pointer;
          transition: 0.25s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
        }

        .interview-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.09);
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 20px;
        }

        .company-area {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .company-logo {
          width: 52px;
          height: 52px;
          border-radius: 13px;
          background: #2563eb;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 21px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .company-area h3 {
          margin: 0 0 4px;
          color: #111827;
          font-size: 19px;
        }

        .company-area p {
          margin: 0;
          color: #6b7280;
          font-size: 13px;
        }

        .status-badge {
          padding: 7px 12px;
          border-radius: 20px;
          background: #dcfce7;
          color: #15803d;
          font-size: 11px;
          font-weight: bold;
          white-space: nowrap;
        }

        /* DETAILS */

        .details-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .detail-box {
          padding: 13px;
          border-radius: 10px;
          background: #f8fafc;
        }

        .detail-box span {
          display: block;
          color: #6b7280;
          font-size: 11px;
          margin-bottom: 5px;
        }

        .detail-box strong {
          color: #111827;
          font-size: 13px;
        }

        .online {
          color: #2563eb !important;
        }

        .offline {
          color: #7c3aed !important;
        }

        /* PREPARATION PROGRESS */

        .progress-section {
          margin-top: 20px;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 7px;
        }

        .progress-header span {
          color: #6b7280;
          font-size: 12px;
        }

        .progress-header strong {
          color: #2563eb;
          font-size: 12px;
        }

        .progress-bar {
          width: 100%;
          height: 7px;
          background: #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #2563eb;
          border-radius: 10px;
        }

        .view-details {
          margin-top: 15px;
          text-align: right;
          color: #2563eb;
          font-size: 12px;
          font-weight: bold;
        }

        /* MODAL */

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 1000;
        }

        .modal {
          position: relative;
          width: 100%;
          max-width: 540px;
          max-height: 90vh;
          overflow-y: auto;
          background: white;
          border-radius: 18px;
          padding: 28px;
        }

        .close-button {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 35px;
          height: 35px;
          border: none;
          border-radius: 50%;
          background: #f3f4f6;
          font-size: 22px;
          cursor: pointer;
        }

        .modal-header {
          text-align: center;
          margin-bottom: 25px;
        }

        .modal-logo {
          width: 65px;
          height: 65px;
          border-radius: 15px;
          background: #2563eb;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          font-size: 26px;
          font-weight: bold;
        }

        .modal-header h2 {
          margin: 12px 0 5px;
          color: #111827;
        }

        .modal-header p {
          margin: 0;
          color: #6b7280;
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .modal-item {
          padding: 14px;
          background: #f8fafc;
          border-radius: 10px;
        }

        .modal-item span {
          display: block;
          color: #6b7280;
          font-size: 11px;
          margin-bottom: 5px;
        }

        .modal-item strong {
          color: #111827;
          font-size: 14px;
        }

        .instruction-box {
          margin-top: 18px;
          padding: 15px;
          background: #eff6ff;
          border-radius: 10px;
        }

        .instruction-box h4 {
          margin: 0 0 7px;
          color: #1d4ed8;
          font-size: 14px;
        }

        .instruction-box p {
          margin: 0;
          color: #374151;
          font-size: 13px;
          line-height: 1.5;
        }

        /* TABLET */

        @media (max-width: 800px) {

          .tracker-page {
            padding: 22px;
          }

          .details-grid {
            grid-template-columns: 1fr 1fr;
          }

          .stats-container {
            grid-template-columns: repeat(3, 1fr);
          }

          .journey-label {
            font-size: 10px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {

          .tracker-page {
            padding: 16px;
          }

          .tracker-header h1 {
            font-size: 25px;
          }

          .stats-container {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 16px;
          }

          .journey-card {
            padding: 18px;
            overflow-x: auto;
          }

          .journey {
            min-width: 480px;
          }

          .card-top {
            align-items: flex-start;
          }

          .status-badge {
            font-size: 10px;
          }

          .details-grid {
            grid-template-columns: 1fr 1fr;
          }

          .modal {
            padding: 22px;
          }

          .modal-grid {
            grid-template-columns: 1fr;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 400px) {

          .details-grid {
            grid-template-columns: 1fr;
          }

          .company-logo {
            width: 45px;
            height: 45px;
          }

          .company-area h3 {
            font-size: 17px;
          }

          .section-title {
            align-items: flex-start;
            gap: 5px;
          }
        }
      `}</style>

      <div className="tracker-page">

        {/* HEADER */}

        <div className="tracker-header">

          <h1>📊 Interview Tracker</h1>

          <p>
            Track your placement interviews, preparation progress and
            upcoming opportunities.
          </p>

        </div>

        {/* STATISTICS */}

        <div className="stats-container">

          <div className="stat-card">

            <div className="stat-number">
              03
            </div>

            <div className="stat-label">
              Total Interviews
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-number">
              03
            </div>

            <div className="stat-label">
              Upcoming Interviews
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-number">
              02
            </div>

            <div className="stat-label">
              Online Interviews
            </div>

          </div>

        </div>

        {/* PLACEMENT JOURNEY */}

        <div className="journey-card">

          <h2>
            Placement Journey
          </h2>

          <div className="journey">

            <div className="journey-step">

              <div className="journey-circle">
                ✓
              </div>

              <div className="journey-label">
                Applied
              </div>

            </div>

            <div className="journey-line"></div>

            <div className="journey-step">

              <div className="journey-circle">
                ✓
              </div>

              <div className="journey-label">
                Shortlisted
              </div>

            </div>

            <div className="journey-line"></div>

            <div className="journey-step">

              <div className="journey-circle">
                3
              </div>

              <div className="journey-label">
                Interview
              </div>

            </div>

            <div className="journey-line"></div>

            <div className="journey-step">

              <div className="journey-circle">
                4
              </div>

              <div className="journey-label">
                Result
              </div>

            </div>

          </div>

        </div>

        {/* UPCOMING INTERVIEWS */}

        <div className="section-title">

          <h2>
            Upcoming Interviews
          </h2>

          <span>
            3 interviews scheduled
          </span>

        </div>

        <div className="interview-list">

          {interviews.map((interview, index) => (

            <div
              className="interview-card"
              key={index}
              onClick={() => setSelectedInterview(interview)}
            >

              <div className="card-top">

                <div className="company-area">

                  <div className="company-logo">
                    {interview.company.charAt(0)}
                  </div>

                  <div>

                    <h3>
                      {interview.company}
                    </h3>

                    <p>
                      {interview.role}
                    </p>

                  </div>

                </div>

                <div className="status-badge">
                  ● {interview.status}
                </div>

              </div>

              <div className="details-grid">

                <div className="detail-box">

                  <span>
                    DATE
                  </span>

                  <strong>
                    {interview.date}
                  </strong>

                </div>

                <div className="detail-box">

                  <span>
                    TIME
                  </span>

                  <strong>
                    {interview.time}
                  </strong>

                </div>

                <div className="detail-box">

                  <span>
                    MODE
                  </span>

                  <strong
                    className={
                      interview.mode === "Online"
                        ? "online"
                        : "offline"
                    }
                  >
                    {interview.mode}
                  </strong>

                </div>

                <div className="detail-box">

                  <span>
                    VENUE
                  </span>

                  <strong>
                    {interview.venue}
                  </strong>

                </div>

              </div>

              {/* PREPARATION PROGRESS */}

              <div className="progress-section">

                <div className="progress-header">

                  <span>
                    Preparation Progress
                  </span>

                  <strong>
                    {interview.progress}%
                  </strong>

                </div>

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width: `${interview.progress}%`,
                    }}
                  ></div>

                </div>

              </div>

              <div className="view-details">
                VIEW INTERVIEW DETAILS →
              </div>

            </div>

          ))}

        </div>

        {/* DETAILS POPUP */}

        {selectedInterview && (

          <div
            className="modal-overlay"
            onClick={() => setSelectedInterview(null)}
          >

            <div
              className="modal"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                className="close-button"
                onClick={() =>
                  setSelectedInterview(null)
                }
              >
                ×
              </button>

              <div className="modal-header">

                <div className="modal-logo">

                  {selectedInterview.company.charAt(0)}

                </div>

                <h2>
                  {selectedInterview.company}
                </h2>

                <p>
                  {selectedInterview.role}
                </p>

              </div>

              <div className="modal-grid">

                <div className="modal-item">

                  <span>
                    DATE
                  </span>

                  <strong>
                    {selectedInterview.date}
                  </strong>

                </div>

                <div className="modal-item">

                  <span>
                    TIME
                  </span>

                  <strong>
                    {selectedInterview.time}
                  </strong>

                </div>

                <div className="modal-item">

                  <span>
                    MODE
                  </span>

                  <strong>
                    {selectedInterview.mode}
                  </strong>

                </div>

                <div className="modal-item">

                  <span>
                    VENUE
                  </span>

                  <strong>
                    {selectedInterview.venue}
                  </strong>

                </div>

                <div className="modal-item">

                  <span>
                    INTERVIEWER
                  </span>

                  <strong>
                    {selectedInterview.interviewer}
                  </strong>

                </div>

                <div className="modal-item">

                  <span>
                    STATUS
                  </span>

                  <strong
                    style={{
                      color: "#16a34a",
                    }}
                  >
                    ● {selectedInterview.status}
                  </strong>

                </div>

              </div>

              <div className="instruction-box">

                <h4>
                  📌 Interview Instructions
                </h4>

                <p>
                  {selectedInterview.instructions}
                </p>

              </div>

            </div>

          </div>

        )}

      </div>
    </>
  );
}

export default Interviews;