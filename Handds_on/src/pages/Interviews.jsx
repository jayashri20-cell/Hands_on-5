import React from "react";
import "./InterviewSchedule.css";

function InterviewSchedule() {
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
      instructions: "Join the meeting 10 minutes before the scheduled time.",
    },
  ];

  const showDetails = (interview) => {
    alert(
      "INTERVIEW DETAILS\n\n" +
      "Company: " + interview.company + "\n" +
      "Role: " + interview.role + "\n" +
      "Date: " + interview.date + "\n" +
      "Time: " + interview.time + "\n" +
      "Mode: " + interview.mode + "\n" +
      "Venue: " + interview.venue + "\n" +
      "Interviewer: " + interview.interviewer + "\n\n" +
      "Instructions:\n" + interview.instructions
    );
  };

  return (
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
            onClick={() => showDetails(interview)}
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
              Click to view interview details →
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default InterviewSchedule;