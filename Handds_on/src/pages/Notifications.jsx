import { useState } from "react";

function Notifications() {
  const [selectedNotification, setSelectedNotification] = useState(null);

  const notifications = [
    {
      id: 1,
      type: "Interview Alert",
      title: "Interview Scheduled",
      message:
        "Your Infosys Software Developer interview is scheduled for 12 Oct 2026 at 10:00 AM.",
      time: "2 hours ago",
      icon: "📅",
      source: "Interview Schedule",
      company: "Infosys",
      role: "Software Developer",
      date: "12 Oct 2026",
      interviewTime: "10:00 AM",
      mode: "Online",
      status: "Upcoming",
    },
    {
      id: 2,
      type: "Company Update",
      title: "TCS Application Update",
      message:
        "Your application for Frontend Developer is currently under review.",
      time: "Yesterday",
      icon: "🏢",
      source: "My Applications",
      company: "TCS",
      role: "Frontend Developer",
      status: "Under Review",
    },
    {
      id: 3,
      type: "Placement Announcement",
      title: "New Placement Drive",
      message:
        "A new placement opportunity from Zoho is now available.",
      time: "2 days ago",
      icon: "📢",
      source: "Job Openings",
      company: "Zoho",
      role: "Web Developer",
      status: "New Opportunity",
    },
    {
      id: 4,
      type: "Interview Alert",
      title: "Interview Reminder",
      message:
        "Remember to prepare for your upcoming TCS interview.",
      time: "3 days ago",
      icon: "🔔",
      source: "Interview Schedule",
      company: "TCS",
      role: "Frontend Developer",
      date: "15 Oct 2026",
      interviewTime: "2:00 PM",
      mode: "Online",
      status: "Upcoming",
    },
  ];

  function openNotification(notification) {
    setSelectedNotification(notification);
  }

  function closeNotification() {
    setSelectedNotification(null);
  }

  return (
    <div className="notifications-page">
      <div className="page-header">
        <div>
          <h1>Notifications</h1>
          <p>
            Stay updated with interviews, companies and placement
            announcements.
          </p>
        </div>
      </div>

      {selectedNotification === null ? (
        <div className="notifications-list">
          {notifications.map((notification) => (
            <div
              className="notification-card"
              key={notification.id}
              onClick={() => openNotification(notification)}
              style={{ cursor: "pointer" }}
            >
              <div className="notification-icon">
                {notification.icon}
              </div>

              <div className="notification-content">
                <span className="notification-type">
                  {notification.type}
                </span>

                <h2>{notification.title}</h2>

                <p>{notification.message}</p>

                <small>{notification.time}</small>
              </div>

              <div className="notification-arrow">
                →
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="notification-details-card">
          <button
            className="primary-btn"
            onClick={closeNotification}
          >
            ← Back to Notifications
          </button>

          <div className="notification-details-header">
            <div className="notification-details-icon">
              {selectedNotification.icon}
            </div>

            <div>
              <span className="notification-type">
                {selectedNotification.type}
              </span>

              <h1>{selectedNotification.title}</h1>

              <p>{selectedNotification.message}</p>
            </div>
          </div>

          <div className="notification-detail-grid">
            <div>
              <strong>Source</strong>
              <p>{selectedNotification.source}</p>
            </div>

            <div>
              <strong>Company</strong>
              <p>{selectedNotification.company}</p>
            </div>

            <div>
              <strong>Position</strong>
              <p>{selectedNotification.role}</p>
            </div>

            {selectedNotification.date && (
              <div>
                <strong>Date</strong>
                <p>{selectedNotification.date}</p>
              </div>
            )}

            {selectedNotification.interviewTime && (
              <div>
                <strong>Time</strong>
                <p>{selectedNotification.interviewTime}</p>
              </div>
            )}

            {selectedNotification.mode && (
              <div>
                <strong>Mode</strong>
                <p>{selectedNotification.mode}</p>
              </div>
            )}

            <div>
              <strong>Status</strong>
              <p>{selectedNotification.status}</p>
            </div>

            <div>
              <strong>Received</strong>
              <p>{selectedNotification.time}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notifications;