function Interviews() {
  const interviews = [
    {
      id: 1,
      company: "Infosys",
      role: "Software Developer",
      date: "12 Oct 2026",
      time: "10:00 AM",
      mode: "Online",
      status: "Upcoming",
    },
    {
      id: 2,
      company: "TCS",
      role: "Frontend Developer",
      date: "15 Oct 2026",
      time: "2:00 PM",
      mode: "Online",
      status: "Upcoming",
    },
    {
      id: 3,
      company: "Zoho",
      role: "Web Developer",
      date: "25 Sep 2026",
      time: "11:00 AM",
      mode: "Online",
      status: "Completed",
    },
  ];

  return (
    <div className="interviews-page">
      <div className="page-header">
        <div>
          <h1>Interview Schedule</h1>
          <p>View your upcoming and completed interviews.</p>
        </div>
      </div>

      <div className="interview-list">
        {interviews.map((interview) => (
          <div className="interview-card" key={interview.id}>
            <div className="interview-date">
              <span>📅</span>
              <strong>{interview.date}</strong>
            </div>

            <div className="interview-details">
              <h2>{interview.company}</h2>
              <h3>{interview.role}</h3>

              <div className="interview-info">
                <span>🕐 {interview.time}</span>
                <span>💻 {interview.mode}</span>
              </div>
            </div>

            <div className="interview-status">
              <span
                className={
                  interview.status === "Upcoming"
                    ? "status upcoming"
                    : "status completed"
                }
              >
                {interview.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interviews;