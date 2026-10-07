import React, { useState } from "react";

function Interviews() {
  const [selectedInterview, setSelectedInterview] = useState(null);

  const interviews = [
    {
      company: "TCS",
      role: "Software Developer",
      date: "10 Oct 2026",
      time: "10:00 AM",
      mode: "Online",
      status: "Upcoming",
      venue: "Microsoft Teams",
      interviewer: "HR & Technical Panel",
      instructions: "Keep your resume and college ID ready.",
    },
    {
      company: "Infosys",
      role: "System Engineer",
      date: "14 Oct 2026",
      time: "11:30 AM",
      mode: "Offline",
      status: "Upcoming",
      venue: "College Placement Cell",
      interviewer: "Infosys Recruitment Team",
      instructions: "Bring 2 copies of your resume and college ID.",
    },
    {
      company: "Wipro",
      role: "Frontend Developer",
      date: "18 Oct 2026",
      time: "02:00 PM",
      mode: "Online",
      status: "Upcoming",
      venue: "Google Meet",
      interviewer: "Wipro Technical Panel",
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

        .interview-page {
          min-height: 100vh;
          width: 100%;
          padding: 30px;
          background: #f5f7fb;
          font-family: Arial, sans-serif;
        }

        .interview-header {
          margin-bottom: 25px;
        }

        .interview-header h1 {
          margin: 0 0 8px;
          font-size: 30px;
          color: #1f2937;
        }

        .interview-header p {
          margin: 0;
          color: #6b7280;
          font-size: 15px;
        }

        /* VERTICAL LIST */

        .interview-container {
          display: flex;
          flex-direction: column;
          gap: 18px;
          width: 100%;
          max-width: 900px;
        }

        .interview-card {
          width: 100%;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 22px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: 0.2s ease;
        }

        .interview-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .company-section {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .company-logo {
          width: 52px;
          height: 52px;
          min-width: 52px;
          border-radius: 12px;
          background: #2563eb;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: bold;
        }

        .company-section h2 {
          margin: 0 0 5px;
          color: #111827;
          font-size: 20px;
        }

        .company-section p {
          margin: 0;
          color: #6b7280;
          font-size: 14px;
        }

        .interview-details {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .interview-details div {
          background: #f9fafb;
          padding: 12px;
          border-radius: 10px;
        }

        .interview-details span {
          display: block;
          color: #6b7280;
          font-size: 12px;
          margin-bottom: 5px;
        }

        .interview-details strong {
          color: #111827;
          font-size: 14px;
        }

        .status {
          color: #16a34a !important;
        }

        .click-message {
          margin-top: 16px;
          color: #2563eb;
          font-size: 13px;
          font-weight: 600;
        }

        /* MODAL */

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 1000;
        }

        .modal {
          position: relative;
          width: 100%;
          max-width: 520px;
          max-height: 90vh;
          overflow-y: auto;
          background: white;
          border-radius: 18px;
          padding: 25px;
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
          display: flex;
          align-items: center;
          gap: 15px;
          padding-right: 40px;
          margin-bottom: 20px;
        }

        .modal-header h2 {
          margin: 0 0 5px;
          color: #111827;
        }

        .modal-header p {
          margin: 0;
          color: #6b7280;
          font-size: 14px;
        }

        .modal-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .modal-item {
          padding: 14px;
          background: #f9fafb;
          border-radius: 10px;
        }

        .modal-item span {
          display: block;
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 5px;
        }

        .modal-item strong {
          color: #111827;
          font-size: 14px;
        }

        .instructions {
          margin-top: 15px;
          padding: 15px;
          border-radius: 10px;
          background: #eff6ff;
        }

        .instructions h3 {
          margin: 0 0 7px;
          font-size: 15px;
          color: #1e40af;
        }

        .instructions p {
          margin: 0;
          color: #374151;
          font-size: 14px;
          line-height: 1.5;
        }

        /* TABLET */

        @media (max-width: 800px) {
          .interview-page {
            padding: 22px;
          }

          .interview-details {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .interview-page {
            padding: 16px;
          }

          .interview-header h1 {
            font-size: 24px;
          }

          .interview-card {
            padding: 18px;
          }

          .interview-details {
            grid-template-columns: 1fr 1fr;
          }

          .modal {
            padding: 20px;
          }

          .modal-details {
            grid-template-columns: 1fr;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 400px) {
          .interview-details {
            grid-template-columns: 1fr;
          }

          .company-section h2 {
            font-size: 18px;
          }

          .company-logo {
            width: 45px;
            height: 45px;
            min-width: 45px;
          }
        }
      `}</style>

      <div className="interview-page">

        <div className="interview-header">
          <h1>Interview Schedule</h1>

          <p>
            View your upcoming placement interviews and important details.
          </p>
        </div>

        <div className="interview-container">

          {interviews.map((interview, index) => (
            <div
              className="interview-card"
              key={index}
              onClick={() => setSelectedInterview(interview)}
            >

              <div className="company-section">

                <div className="company-logo">
                  {interview.company.charAt(0)}
                </div>

                <div>
                  <h2>{interview.company}</h2>
                  <p>{interview.role}</p>
                </div>

              </div>

              <div className="interview-details">

                <div>
                  <span>Date</span>
                  <strong>{interview.date}</strong>
                </div>

                <div>
                  <span>Time</span>
                  <strong>{interview.time}</strong>
                </div>

                <div>
                  <span>Mode</span>
                  <strong>{interview.mode}</strong>
                </div>

                <div>
                  <span>Status</span>
                  <strong className="status">
                    {interview.status}
                  </strong>
                </div>

              </div>

              <div className="click-message">
                Click / Touch to view details →
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
              onClick={(event) => event.stopPropagation()}
            >

              <button
                className="close-button"
                onClick={() => setSelectedInterview(null)}
              >
                ×
              </button>

              <div className="modal-header">

                <div className="company-logo">
                  {selectedInterview.company.charAt(0)}
                </div>

                <div>
                  <h2>{selectedInterview.company}</h2>
                  <p>{selectedInterview.role}</p>
                </div>

              </div>

              <div className="modal-details">

                <div className="modal-item">
                  <span>Date</span>
                  <strong>{selectedInterview.date}</strong>
                </div>

                <div className="modal-item">
                  <span>Time</span>
                  <strong>{selectedInterview.time}</strong>
                </div>

                <div className="modal-item">
                  <span>Mode</span>
                  <strong>{selectedInterview.mode}</strong>
                </div>

                <div className="modal-item">
                  <span>Status</span>
                  <strong className="status">
                    {selectedInterview.status}
                  </strong>
                </div>

                <div className="modal-item">
                  <span>Venue</span>
                  <strong>{selectedInterview.venue}</strong>
                </div>

                <div className="modal-item">
                  <span>Interviewer</span>
                  <strong>{selectedInterview.interviewer}</strong>
                </div>

              </div>

              <div className="instructions">

                <h3>Interview Instructions</h3>

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