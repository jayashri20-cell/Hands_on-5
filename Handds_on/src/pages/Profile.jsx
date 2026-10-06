import { useState } from "react";
import useAuth from "../hooks/useAuth";

function Profile() {
  const { user } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("B.Tech Information Technology");
  const [college, setCollege] = useState("Pratyusha Engineering College");

  function handleSubmit(event) {
    event.preventDefault();
    alert("Profile updated successfully!");
  }

  return (
    <div className="profile-page">
      <div className="page-header">
        <div>
          <h1>My Profile</h1>
          <p>View and update your student information.</p>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-avatar">
          {name ? name.charAt(0).toUpperCase() : "S"}
        </div>

        <h2>{name || "Student"}</h2>
        <p>{email}</p>
      </div>

      <div className="form-card">
        <h2>Personal Information</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Course</label>
              <input
                type="text"
                value={course}
                onChange={(event) => setCourse(event.target.value)}
                required
              />
            </div>

            <div className="form-group full-width">
              <label>College</label>
              <input
                type="text"
                value={college}
                onChange={(event) => setCollege(event.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="primary-btn">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;